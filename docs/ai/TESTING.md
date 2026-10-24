# Testing

## Polybench

Use `scripts/run_polybench.sh` for performance testing with the polybench suite:

```bash
bash scripts/run_polybench.sh jacobi-1d.wasm   # run a specific benchmark
bash scripts/run_polybench.sh --list            # list all available benchmarks
bash scripts/run_polybench.sh --verbose jacobi-1d  # show the command
make wizeng-verified
bash scripts/run_polybench.sh --verified jacobi-1d
```

`--verified` selects the Lean-scheduled CBD interpreter, runs the existing CBD
validator to build its sidetables, and records timings in separate
`generated/benches-verified.tsv`. This tier always uses x86-64; `--fast` has no
additional effect. Set `POLYBENCH_DIR` to override
the suite location. See [the tier documentation](../../tiers/lean_interpreter/README.md)
for runtime and proof limits.

Check script routing with `python3 scripts/run_polybench_test.py`. After building,
include the actual Wizard adapter tests with:

```bash
LEAN_WIZARD_BINARY=wizard-engine/bin/wizeng-verified.x86-64-linux python3 scripts/run_polybench_test.py
```

### Compare against Wizard's fast interpreter

```bash
make wizeng-verified wizeng-reference
python3 scripts/check_polybench.py --jobs 8                 # entire suite
python3 scripts/check_polybench.py --jobs 8 bicg jacobi-1d   # selected benchmarks
```

The reference is Wizard's native x86-64 `--mode=int`, built as
`wizard-engine/bin/wizeng-reference.x86-64-linux`. The other execution uses
`--mode=cbd-verified`. Both builds include `tests/PolyBenchMemoryMonitor.v3`,
which dumps every linear memory after execution without inserting bytecode
probes. The runner compares memory sizes and bytes exactly, stdout (including
any printed return value), stderr, and exit status. Both executions must exit
successfully; matching failures, timeouts, and missing snapshots do not pass.
PolyBench normally keeps its numeric results in memory and suppresses their
printing, so comparing exit codes alone would not check the computed arrays.

The runner accepts `POLYBENCH_DIR` or `--suite PATH`. `--jobs N` bounds concurrent
interpreter processes: each worker runs its reference and verified executions
in sequence. The default is one worker; use eight on this machine. Each execution
has a 120-second timeout and a 1024 MiB writable-allocation limit, configurable
with `--timeout` and `--memory-mib`. The native reference gets an additional
8 GiB of address space for its inaccessible Wasm guard mapping; its writable
allocation limit stays the same. Compiler builds still use the shared lock and
4 GiB limit.

Each run writes `summary.tsv`, commands, exit statuses, and stdout/stderr under
`generated/polybench-checks/run-*`. Failed comparisons retain both memory dumps
and report the first differing byte in each memory. Successful dumps are removed
unless `--keep-memory` is specified. `--output-dir PATH` selects a new output
directory. The command continues through failures and exits nonzero if any check
fails. This compares all final linear memory, including scratch space; it does
not check tables or globals, and programs using nondeterministic host inputs can
differ even when both interpreters are correct.

Runner regressions, including silent memory corruption and timeout detection:

```bash
python3 scripts/check_polybench_test.py
POLYBENCH_INTEGRATION=1 python3 scripts/check_polybench_test.py
```

## Scheduler Quick Check

Regenerate the validator and count errors across all real opcodes:

```bash
make validator
rg generated/Validator.v3 -e "ERROR" | wc -l
```

Error lines take one of two forms. Each opcode typically appears twice — once for the base variant and once for the `_ul` (unLEM) variant:

```
ERROR: Invalid schedule for <OPCODE>
ERROR: Scheduling <OPCODE> reached limit
```

## Synthetic Opcode Tests

`scripts/schedule_test.sh` runs the scheduler and `ScheduleChecker` on custom-defined opcodes in `tests/SyntheticDefs.v3`, and optionally on real opcodes from `CanonicalDefs.v3`:

```bash
bash scripts/schedule_test.sh                        # test all synthetic opcodes
bash scripts/schedule_test.sh SPLIT_BRANCHES         # test specific synthetic opcode(s)
bash scripts/schedule_test.sh --canonical            # test synthetic + all canonical opcodes
bash scripts/schedule_test.sh --canonical i32_add    # test synthetic + specific canonical opcode
bash scripts/schedule_test.sh --trace SPLIT_BRANCHES # enable verbose trace for one opcode
bash scripts/schedule_test.sh --trace A --trace B    # enable verbose trace for multiple opcodes
```

The `--canonical` flag loads `wizard-engine/src/bytecode/CanonicalDefs.v3` and its `.sexp` (built automatically if stale). Opcode name filters apply to whichever def sets are active — if `--canonical` is absent, only synthetic opcodes are searched; if present, both sets are filtered.

`--trace OPCODE` enables `trace_full` for that opcode only (both the initial and unLEM phases). By default `trace_full` is off for all opcodes. The flag may be repeated for multiple opcodes. Tracing a named opcode writes verbose scheduling output to stdout and emits info snapshots (`info_start`, `info_untangled`, `info_final`) to `docs/traces.js`.

Each opcode is tested in two phases: **initial** (after id_propagate, overloadOps, addAbstractions) and **unLEM** (after additionally applying unLEM). The test harness is `tests/ScheduleTest.v3`.

### Adding a New Synthetic Opcode

Add its definition to `tests/SyntheticDefs.v3` between the `@bytecode start/end` markers. It only needs to use intrinsics declared at the top of that file — add more declarations as needed. The sexp is regenerated automatically:

```bash
make tests/SyntheticDefs.v3.sexp
```

## Inspecting Traces

After running `schedule_test.sh` or `make validator` (with `trace_full` enabled):

```bash
node scripts/schedule_info.js                                            # all opcodes, scheduled SSAD tags (compact)
node scripts/schedule_info.js SPLIT_BRANCHES                             # scheduled SSAD tags (compact)
node scripts/schedule_info.js SPLIT_BRANCHES raw                         # initial Sea IR Mermaid graph
node scripts/schedule_info.js SPLIT_BRANCHES unLEM                       # unLEM Sea IR Mermaid graph
node scripts/schedule_info.js SPLIT_BRANCHES scheduler_ssad_pretty       # initial scheduled SSAD only
node scripts/schedule_info.js SPLIT_BRANCHES unlem_scheduler_ssa_pretty  # unLEM scheduled SSAD only
node scripts/schedule_info.js SPLIT_BRANCHES schedulerMermaid            # initial scheduled CFG Mermaid graph
node scripts/schedule_info.js SPLIT_BRANCHES unlem_scheduler             # unLEM scheduled CFG Mermaid graph
node scripts/schedule_info.js SPLIT_BRANCHES info_start                  # state at start of scheduling
node scripts/schedule_info.js SPLIT_BRANCHES info_untangled              # state after untangle()
node scripts/schedule_info.js SPLIT_BRANCHES info_final                  # final scheduled CFG
```

The script loads `docs/traces.js` and prints from both `window.info` (info snapshots) and `window.traces` (scheduled SSAD). By default it prints only scheduled SSAD tags for compact output. To view info snapshots, pass an explicit info tag argument (`info_start`, `info_untangled`, or `info_final`).

To inspect a canonical opcode such as `IF`, generate traces with `--canonical` and `--trace`, then query the tag you want:

```bash
bash scripts/schedule_test.sh --canonical --trace IF IF
node scripts/schedule_info.js IF unLEM
```

`raw` and `unLEM` are Sea IR Mermaid graphs. `schedulerMermaid` and `unlem_scheduler` are the scheduled CFG Mermaid graphs.

## Skills

### `debug-scheduler` (`.agents/skills/debug-scheduler`)

Use when: investigating `ERROR` output in `generated/Validator.v3`, debugging a schedule failure, or working with info traces / `schedule_info.js`.

Provides:
- Preferred workflow: synthetic opcode tests for isolated debugging, full validator build for coverage
- Known historically tricky opcodes: `END`, `MEMORY_SIZE`, `REF_AS_NON_NULL`, `I32_DIV_S`
- `trace_full` flag: `common/sea/Schedule.v3:58` — pass `--trace OPCODE` to `schedule_test.sh` to enable per-opcode verbose output; off by default
- Info trace format: what `info_start`, `info_untangled`, `info_final` contain and how to read them
- `SeaRender.renderScheduler` / `SeaRender.renderScheduleNode` for use in other debug contexts

### `optimize-scheduler` (`.agents/skills/optimize-scheduler`)

Use when: asked to speed up `ValidatorGen`, reduce scheduler build time, or improve scheduler performance.

Provides:
- Correctness-first protocol: verify error count is 0 before and after any change
- Timing baseline with `time ./ValidatorGen > /dev/null`
- Build/test loop: `make clean && make ValidatorGen` for clean timing comparisons
