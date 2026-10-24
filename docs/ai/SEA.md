# Sea of Variables

The sea of variables is a graph-based IR used for analysis, optimization, and scheduling. It sits between the SSAD textual IR and the final generated code. Constructed from SSAD via `Seas.ofSSAD()`, it represents computations as an unordered dependency graph that is then scheduled back into a linear/structured form.

## Source Files

| File | Purpose |
|------|---------|
| `common/sea/SeaOfVariables.v3` | Sea graph, IRNode, graph rewrites |
| `common/sea/SeaTransforms.v3` | Graph rewrite passes |
| `common/sea/SeaRender.v3` | Sea graph rendering and debug snapshots |
| `common/sea/Schedule.v3` | Bottom-up CFG scheduler (untangle + schedule) |
| `common/sea/CheckSchedule.v3` | Schedule verification |
| `common/sea/DomGraph.v3` | Hierarchical dominance tracking |
| `common/sea/NodeCollections.v3` | Node set types and collections |

## Core Types

- **`Sea`** — The graph container holding `IRNode`s. Provides graph analysis (LCA), Mermaid visualization, and cloning (`Seas.clone()`, `Seas.cloneSubgraph()`).
- **`IRNode`** — Graph nodes with `value_deps` (data flow), `state_deps` (one slot per `StateComponent` variant, sized to `StateComponent.count` and indexed by `.tag`), and `children` (reverse edges). Each carries `VarData` (name, type, stage) and an `IROp`.
- **`IROp`** — Node operation enum: `Start`, `Finish`, `Intrinsic(defn)`, `Lit(tipe, rep)`, `Phi`, `StatePhi(statecomps)`, `Move(val)`.
- **`NodeSet` / `ImmNodeSet`** — Mutable and immutable node set types used throughout for graph analysis.

## Graph Rewrite Passes

Applied via `sea.apply()`:

- `id_propagate` — Eliminates identity intrinsics
- `removeViews` — Eliminates view intrinsics
- `overloadOps` — Resolves type-polymorphic operators to type-specific ones (e.g., `+` → `i32_+`)
- `addAbstractions` — Inserts `lift_*` operations for static-to-runtime transitions
- `unLEM` — Rewrites runtime conditionals for abstract interpretation (both-branches execution)
- `constUnLEM` — Constant-folds trivial unLEM rewrites
- `reifyConds` — Inserts `startIf`/`startElse`/`end` control flow markers
- `chooseMerge` — Simplifies merge nodes

## Inspecting Sea Graphs

Sea graphs are written to `docs/traces.js` by the scheduler test harness. To print the Mermaid form of the Sea IR for one opcode:

```bash
bash scripts/schedule_test.sh --trace SPLIT_BRANCHES
node scripts/schedule_info.js SPLIT_BRANCHES raw
node scripts/schedule_info.js SPLIT_BRANCHES unLEM
```

Use `--canonical` for real opcodes from `CanonicalDefs.v3`, for example `bash scripts/schedule_test.sh --canonical --trace IF IF`. The `raw` tag is the pre-schedule Sea IR; `unLEM` is the Sea IR after `SeaTransforms.unLEM`.

## Scheduling

`common/sea/Schedule.v3` converts the unordered sea graph back into structured code in two phases.

### Phase 1: Untangle

Resolves shared subgraphs between branches. Uses `branch_partition` (on `Sea`) to compute, for each phi node, a `BranchPartition` containing the left subgraph, right subgraph, and frontier (nodes reachable from both sides). `find_branch_lattices` groups phi nodes that share the same condition into `BranchLattice`s, merging their partitions. Lattices are topologically sorted so inner branches are processed first. For each lattice, the shared frontier nodes are cloned (`Seas.cloneSubgraph`) into each branch so no node belongs to both sides, then lattices are recomputed.

### Phase 2: Bottom-Up Schedule

Walks from `Finish` upward, placing each node into the lowest valid position in a `ScheduleNode` tree (composed of `ScheduleBlock`, `ScheduleBranch`, and `CFGPhi` nodes). `isReady` checks whether all of a node's live children have been scheduled (tracked via `DomGraph`). Phi nodes use grouped readiness: all children across the `BranchLattice` must be scheduled before any phi in the group is enqueued. When a phi becomes ready, `prependScheduleBranch` inserts a new `ScheduleBranch`/`CFGPhi` pair into the schedule tree.

### Schedule cuts

Before cloning an overlap, `SeaScheduler` may cut a shared value phi out of
the branch site. It duplicates the site's pure predicate, adds a control edge
from the shared phi to that predicate, and rewires the site's phis and their
Move wrappers to use the duplicate. An unguarded shared phi also gets Start
control. The original predicate remains available to the shared computation,
which may itself depend on it.

These are explicit `IRNode.control_deps` edges. Ordinary dependency traversal
now puts the shared computation in the predicate's frontier, so untangling
keeps one copy and bottom-up placement schedules it before the branch. No
cut-specific frontier metadata is needed. Control edges survive graph cloning
and appear in graph/info traces; the schedule checker verifies their ordering
and follows them when comparing path effects.

The heuristic considers shared phis at `cut_depth_limit` or deeper (default 2),
using the outer-to-inner phi containment order. Among eligible phis it chooses
the one covering the largest overlap. It rejects conditional writes and
requires any write dependency to already be unconditionally demanded. Only
literal predicates or intrinsics without reads or writes are duplicated; other
cases retain ordinary untangling. The existing limits of 32 cuts and 4 cloning
steps remain.

Run the graph-rewrite regressions with `bash scripts/schedule_test.sh CONTROL_CUT`.
They also run with the full synthetic suite.

### Move Nodes

`IROp.Move(val)` nodes are inserted by the `addMoves` transform before scheduling. Each phi's condition node gets `move_true`/`move_false` children via `init_move`, which act as branch-side markers. The scheduler skips Move nodes during placement (they are not live) but uses them to associate values with their correct branch side. `CFGPhi.toSSAD` unwraps Move nodes when emitting phi assignments.

## ScheduleChecker

`common/sea/CheckSchedule.v3` verifies scheduler output by checking four properties:

1. **Dependency ordering** (`check_top_down`) — Walks the scheduled CFG top-down maintaining a scope of already-scheduled nodes. For each node, verifies all its dependencies are in scope before it executes.

2. **Graph equivalence** — Compares the scheduled graph against the original via `graph_eq` to ensure the dependency structure is preserved.

3. **Path effects** (`check_path_effects`) — Enumerates all possible branch paths (2^n combinations for n conditions, up to n=20) and verifies that each path executes the same set of effectful nodes in both the graph and the CFG.
   - `collect_graph_effs`: Walks the sea graph backward from `Finish`, following all `value_deps` and `state_deps`. At Phi/StatePhi nodes, follows only the branch matching the current assignment. Collects all `Intrinsic` nodes with non-empty `writes`.
   - `collect_cfg_effs`: Walks the scheduled CFG forward. At `ScheduleBranch`, follows only the active branch per assignment. Collects effectful nodes from `ScheduleBlock.prims`.

4. **Effect count conservation** — For each path, compares the number of effectful nodes between the original sea (`orig_sea`) and the scheduled sea (`new_sea`). Detects over-cloning by untangle (new > orig) or lost effects (new < orig). Conditions are mapped from `new_sea` to `orig_sea` by node ID (preserved by `Seas.clone`), bypassing the `orig_to_new` mapping which can be corrupted by untangle's clone remapping.

### ScheduleError Variants

- `UnsatNeed(user, needed)` — A node was scheduled before one of its dependencies
- `BadOrdering(fst, snd)` — Two nodes appear in the wrong order
- `GraphDiff(diff)` — The scheduled graph structure differs from the original
- `PathEffectMismatch(path, graph_only, cfg_only)` — On a given branch path, effects differ between graph and CFG
- `EffectCountMismatch(path, orig_effs, new_effs)` — On a given branch path, the number of effectful nodes differs from the original (indicates over-cloning or lost effects)

## DomGraph

`common/sea/DomGraph.v3` — Hierarchical dominance tracking with public/private node sets and parent chains. Used by the bottom-up scheduler to track which `IRNode`s have been scheduled before a given point, enabling readiness checks. The public/private distinction allows branch-specific nodes (like `Move` nodes) to be visible only within their branch.

---

**See also:**
- `docs/ai/misc/GRAPH_PROPS.md` — Formal schedulability properties and invariants
- `docs/ai/misc/PBT_PLAN.md` — Property-based testing design for the scheduler
- `.agents/skills/debug-scheduler` — Skill for debugging scheduler failures (ERROR output, trace inspection)
- `.agents/skills/optimize-scheduler` — Skill for improving scheduler performance
