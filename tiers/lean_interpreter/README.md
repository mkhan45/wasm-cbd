# Lean-scheduled interpreter

This tier generates `generated/LeanInterpreter.v3` from the real canonical
bytecodes and runs it with the existing Wizard/Virgil interpreter runtime.
CBD supplies the interpreter specialization and concrete runtime operations;
`sea-of-verifiables` performs the Sea rewrite and scheduling. The CBD emitter
consumes the returned Target CFG directly. It neither rebuilds Sea nor runs
CBD's scheduler or `PrettyIR` after the Lean response.

## Build and run

Run from the `wasm-cbd` directory, with sibling `../virgil` and
`../sea-of-verifiables` checkouts and their usual build dependencies installed:

```sh
make lean-interpreter
make LeanInterpreterMain
make run_lean_interpreter ARGS='path/to/program.wasm'
```

The script also exposes separate stages, useful while debugging:

```sh
python3 scripts/lean_interpreter.py generate
python3 scripts/lean_interpreter.py compile
python3 scripts/lean_interpreter.py run path/to/program.wasm
python3 scripts/lean_interpreter.py generate I32_ADD BR_IF
```

The final command generates a selected opcode subset for inspection; generate
the full tier again before running arbitrary Wasm. `generate` writes the
exchange request, scheduled response, and Virgil source under `generated/`.
`run` executes the already-generated tier using Aeneas. The native build uses
`LeanInterpreterMain.v3`; both entry points currently choose the exported
function named `main` and print the final integer stack value.

The script serializes compiler/Lean invocations with
`/tmp/sea-scheduler-lean.lock`, limits each process to 4 GiB of address space,
120 CPU seconds and 120 wall-clock seconds, and sets `LEAN_NUM_THREADS=4`.
It reuses current Lean artifacts or rebuilds executable dependencies in order.
The canonical compiler dump `CanonicalDefs.v3.sexp` must match the source;
regenerate it with `make wizard-engine/src/bytecode/CanonicalDefs.v3.sexp` when
changing canonical definitions.

## Pipeline and provenance

`LeanInterpreterGen.v3` has `prepare` and `emit` modes. Preparation reads
`CanonicalDefs.v3` plus its compiler S-expression dump through the shared CBD
frontend, converts each bytecode body to SSAD and then Sea, and retains the
`SSADSeaInfo.let_origins` mapping. Signed and narrow literal types are restored
from their original SSAD declarations before writing the exchange. Annotated
sidetable declarations are identified through those origins; ambiguous repeated
bindings or unsupported field kinds fail explicitly.

The current field kinds are `label`, `labels`, and `is64`. CBD inserts an
acquisition operation followed by a pure field load for each declaration:

| Field | Concrete value type | Runtime acquisition/load |
| --- | --- | --- |
| `label` | `Ref<Sidetable_BrEntry>` | `lean_st_acquire_label` / `lean_st_load_label` |
| `labels` | `u32` | `lean_st_acquire_labels` / `lean_st_load_labels` |
| `is64` | `bool` | `lean_st_acquire_is64` / `lean_st_load_is64` |

Acquisitions read and write `Extra`, consume the preceding acquisition's state,
and advance `frame.stp` by the validator-owned `STEntry_*` layout size. Loads
read the acquired bytes and have no state footprint. The request substitutes
the annotated initializer's value with its field load, forwards each removed
initializer state write to its corresponding predecessor (or Start), and routes
initial `Extra` uses through the last acquisition. Original source nodes remain
in the request; demand pruning determines whether they survive. Lean applies the
request's prefix completion guards to other applications and Finish, preserving
their existing guards, before scheduling. Immediate reads that were not replaced
by annotated fields retain their original Codeptr effects.

`common/sea/LeanExchange.v3` expands a CBD state phi into one exchange state
select per component. It sends operation identities, concrete signatures,
independent read/write sets, constants, control conversions, and source-node
identities using `sea-exchange 1`. Conditions use value-to-control conversion;
they do not confuse an application's successful completion with its Boolean
value. All operations conservatively have `may-trap true`. The generic Lean
exchange does not assign meanings to CBD operation names or parse Virgil code.

The response retains Target block instructions and their origins, branches,
value/control/state move lists, Boolean writes, explicit trap nodes, and the
scheduler's origin map/statistics. `common/codegen/ScheduledCFG.v3` reads that
representation. `Emit.v3` follows its entry and successor edges, infers and
checks value types, checks assignment availability on every incoming path,
and structures shared continuations using normal postdominators. It rejects
cyclic or unstructured sharing and non-Boolean value tests. State moves are
provenance only; runtime operations already perform the state changes. Value
and control moves snapshot their sources before any assignment, including
cycles. An explicit Target trap calls the configured trap helper and returns.

Single-assignment locals become typed `def` bindings; immutable identity aliases
are replaced with their already-computed source local. Reassigned labels and
copy destinations use typed `var` declarations. Only an adjacent, single-use,
total integer primitive may be inlined into its consumer; floating operations,
division, conversions, and runtime helper calls retain their evaluation sites.
Signed and narrowing conversions remain calls to their exact runtime methods.
Float min/max helpers also remain calls, preserving the runtime's NaN and
signed-zero policy rather than replacing it with comparisons.

Emission reuses `tiers/interpreter/InterpreterTemplate.v3`, renames its classes
to `CBDLeanInterpreter` and `CBDLeanWasmStack`, appends the scheduled methods,
and builds a dispatch array sized from the actual `Opcode` tags. Runtime value
types include `TypeVar -> ()`, `BlockType -> (Array<ValueType>,
Array<ValueType>)`, and `Signature -> HeapTypeDecl`; the shared runtime supplies
the concrete signature casts used by calls and indirect calls.

## Interpreter state profile

The profile is installed in `Specialize.v3` before constructing Sea edges.
It starts from `IntrinsicTypes`' existing effect-derived footprints and applies
these interpreter-specific changes:

| Operations | Reads | Writes |
| --- | --- | --- |
| Immediate reads | `Codeptr` | `Codeptr` |
| Pushes / pops | `Stack` | `Stack` |
| `getLocal` / `getGlobal` | `Locals` / `Globals` | none |
| Local/global/memory writes | their existing write components | existing writes |
| `m_get*`, `i_getFunction` | additionally `Extra` | existing writes |
| Memory and struct-field reads | additionally `Memory` | existing writes |
| Table reads and indirect-function lookup | additionally `Tables` | existing writes |
| Table writes | additionally `Tables` | additionally `Tables` |
| Memory size/grow | additionally `Memory` | additionally `Memory` |
| `object_New` | `Stack`, `Memory` | `Stack`, `Memory` |
| `doBranch`, `doSwitch` | `Codeptr`, `Stack`, `Extra` | same components |
| Other control-transfer and trap operations | all components | existing writes (all for control/trap effects) |
| `doBlock`, `doLoop`, `doFallthru`, `doEnd`, `doTry` | none | none |
| `f_isAtEnd` | additionally `Codeptr` | existing writes |
| Sidetable acquisitions / loads | `Extra` / none | `Extra` / none |

The components are `Codeptr`, `Stack`, `Trap`, `Locals`, `Globals`, `Tables`,
`Memory`, and `Extra`. The table describes the current adapter, including its
conservative choices; it is not a derived semantic specification of Wizard.
Pure numeric operations retain empty state footprints. Module/function lookups read `Extra` so calls that change the current frame
remain ordered before subsequent context lookups. Read and write sets are
separate, so a state write does not by itself imply an old-state read.

## Runtime and proof limits

This tier inherits the existing interpreter template's implementation limits.
SIMD value push/pop, most memory64 and table64 operations, several struct-field
operations, and memory growth still have missing method bodies. Memory/table
64-bit predicates currently return false. Trap entry points abort the standalone
process with a named Wasm trap; they do not provide structured `WasmStack` trap results. The
canonical source also explicitly omits bytecodes such as floating min/max and
copysign. The dispatch table and successful compilation do not make missing
canonical definitions or runtime methods supported. The existing validator and
its sidetable layouts remain part of the runtime boundary.

Run the differential Wasm/runtime suite with
`python3 scripts/lean_interpreter_test.py --generate` (requires `wasm-tools`).
After `make LeanInterpreterMain`, add `--native` to run the same fixtures with
the compiled executable. The 16 cases cover branches, loops, branch tables,
calls, memory, untaken traps, and named fatal traps. The harness also checks
actual validator-produced entry sizes, fields, and acquisition cursor movement.
The suite first emits and executes the independent
`tests/LeanInterpreterEmitTest.v3` regression program and checks its `bad-read`
rejection case. It regenerates the existing reference interpreter into a
temporary directory, so comparisons use the current shared template without
changing `generated/Interpreter.v3`.

The executable regression tests exercise real generated methods as well as
Target shared joins, simultaneous value/control copies, signed/narrowing casts,
and explicit trap continuations. They establish tested behavior only.

The Lean core has kernel-checked results for its specified graph semantics and
local scheduler lemmas. Its `Schedule.Realizes` definition states a desired
scheduling criterion; the full scheduling preservation theorem remains open,
including cut refinement and placement/availability analysis soundness. The
CBD frontend, this interpreter specialization and state profile, exchange
rewrite, Virgil emitter, shared runtime helpers, and Wasm execution boundary
have no end-to-end semantic preservation proof. This integration does not
claim that generated interpreter execution is certified by the core theorems.
