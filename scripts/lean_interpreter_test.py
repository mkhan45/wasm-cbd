#!/usr/bin/env python3
"""Execute real validator sidetables with the Lean tier and the existing tier."""

from __future__ import annotations

import argparse
from dataclasses import dataclass
from pathlib import Path
import re
import shutil
import sys
import tempfile

import lean_interpreter as pipeline


@dataclass(frozen=True)
class Case:
    name: str
    wat: str
    expected: int | None
    sidetable_size: int = 0
    acquisition: str = "none"
    functions: int = 1
    trap: str | None = None


def module(body: str, declarations: str = "") -> str:
    return f'(module {declarations} (func (export "main") (result i32) {body}))'


def cases() -> list[Case]:
    result = [Case("arithmetic80", module("i32.const 7 i32.const 3 i32.add i32.const 8 i32.mul"), 80)]
    for condition, expected in [(1, 10), (0, 20)]:
        result.append(Case(f"if_{condition}", module(f"i32.const {condition} if (result i32) i32.const 10 else i32.const 20 end"), expected, 32, "label"))
    for condition, expected in [(1, 40), (0, 51)]:
        body = f"""(local $v i32)
          block $done
            i32.const {condition} br_if $done
            i32.const 11 local.set $v
          end
          i32.const 1 if (result i32) i32.const 40 else i32.const 90 end
          local.get $v i32.add"""
        result.append(Case(f"br_if_{condition}_cursor", module(body), expected, 48, "label"))
    for index, expected in [(0, 10), (1, 20), (99, 30)]:
        body = f"""block $exit (result i32)
          block $case2
            block $case1
              block $case0
                i32.const {index} br_table $case0 $case1 $case2
              end
              i32.const 10 br $exit
            end
            i32.const 20 br $exit
          end
          i32.const 30
        end"""
        result.append(Case(f"br_table_{index}", module(body), expected, 84, "labels"))
    result.append(Case("counted_loop", module("""(local $n i32) (local $sum i32)
      i32.const 5 local.set $n
      block $exit
        loop $loop
          local.get $n i32.eqz br_if $exit
          local.get $sum local.get $n i32.add local.set $sum
          local.get $n i32.const 1 i32.sub local.set $n
          br $loop
        end
      end
      local.get $sum"""), 15, 32, "label"))
    result.append(Case("direct_call", module("call $target", "(func $target (result i32) i32.const 42)"), 42, functions=2))
    declarations = """(type $targettype (func (result i32)))
      (table 1 funcref)
      (func $target (type $targettype) i32.const 73)
      (elem (i32.const 0) $target)"""
    result.append(Case("indirect_call", module("i32.const 0 call_indirect (type $targettype)", declarations), 73, 1, "is64", 2))
    result.append(Case("memory_store_load", module("i32.const 12 i32.const 1234 i32.store i32.const 12 i32.load", "(memory 1)"), 1234))
    result.append(Case("untaken_unreachable", module("i32.const 0 if (result i32) unreachable else i32.const 64 end"), 64, 32, "label"))
    result.append(Case("trap_unreachable", module("unreachable"), None, trap="UNREACHABLE"))
    result.append(Case("trap_divide_zero", module("i32.const 17 i32.const 0 i32.div_u"), None, trap="DIV_BY_ZERO"))
    mismatch = """(type $expected (func (result i32)))
      (type $actual (func (param i32) (result i32)))
      (table 1 funcref)
      (func $target (type $actual) local.get 0)
      (elem (i32.const 0) $target)"""
    result.append(Case("trap_indirect_signature", module("i32.const 0 call_indirect (type $expected)", mismatch), None, 1, "is64", 2, "FUNC_SIG_MISMATCH"))
    return result


def result_of(output: str, case: Case, *, sidetable: bool) -> int:
    if "Unimplemented" in output or "Exception" in output:
        raise AssertionError(output[-4000:])
    validated = re.findall(r"^validated (\d+)$", output, re.MULTILINE)
    if len(validated) != case.functions:
        raise AssertionError(f"expected {case.functions} validated functions; got {validated}\n{output[-4000:]}")
    if sidetable and f"sidetable ok: {case.sidetable_size}\n" not in output:
        raise AssertionError(f"sidetable checks did not finish\n{output[-4000:]}")
    found = re.findall(r"^stack top: (-?\d+)$", output, re.MULTILINE)
    if len(found) != 1:
        raise AssertionError(f"expected one integer result\n{output[-4000:]}")
    value = int(found[0])
    if value != case.expected:
        raise AssertionError(f"expected {case.expected}, got {value}")
    return value


def interpreted_result(files, args):
    return pipeline.run([pipeline.VIRGIL / "bin/current/x86-64-linux/Aeneas", "-O2", "-run",
                         "-fun-exprs", "-simple-bodies", *files, *args], check=False)


def trap_result(result, case: Case, *, sidetable: bool, native: bool = False) -> None:
    output = result.stdout + result.stderr
    validated = re.findall(r"^validated (\d+)$", result.stdout, re.MULTILINE)
    if len(validated) != case.functions:
        raise AssertionError(f"trap occurred without prior validation of {case.functions} functions\n{output[-4000:]}")
    if sidetable and f"sidetable ok: {case.sidetable_size}\n" not in result.stdout:
        raise AssertionError(f"sidetable checks did not finish before trap\n{output[-4000:]}")
    reasons = re.findall(r"^!?Wasm trap: ([A-Z_]+)$", output, re.MULTILINE)
    if reasons != [case.trap] or "Unimplemented" in output or "stack top:" in output:
        raise AssertionError(f"expected only Wasm trap {case.trap}, without result\n{output[-4000:]}")
    if result.returncode in {124, 137, -9} or (native and result.returncode == 0):
        raise AssertionError(f"unexpected trap process status {result.returncode}\n{output[-4000:]}")



def emitter_regressions() -> None:
    sources = [p for p in pipeline.generator_sources() if p.name != "LeanInterpreterGen.v3"]
    sources.append(pipeline.ROOT / "tests/LeanInterpreterEmitTest.v3")
    emitted = pipeline.interpret(sources)
    if not emitted.startswith("component Test {"):
        raise RuntimeError(f"Emitter regression generation failed:\n{emitted[-4000:]}")
    with tempfile.TemporaryDirectory(prefix="lean-emitter-test-") as directory:
        program = Path(directory) / "TargetEmitterTest.v3"
        program.write_text(emitted)
        output = pipeline.interpret([*sorted((pipeline.VIRGIL / "lib/util").glob("*.v3")), program])
    if output != "Target emitter tests passed\n":
        raise RuntimeError(f"Emitter regression execution failed:\n{output[-4000:]}")
    negative = pipeline.run([pipeline.VIRGIL / "bin/current/x86-64-linux/Aeneas", "-O2", "-run",
                             "-fun-exprs", "-simple-bodies", *sources, "bad-read"], check=False)
    rejected = negative.stdout + negative.stderr
    if "!scheduled CFG: target local read before assignment" not in rejected or "unassigned read was accepted" in rejected:
        raise RuntimeError(f"Emitter accepted an unavailable local:\n{rejected[-4000:]}")
    print("PASS Target emitter: copies, joins, conversions, aliases, traps, invalid reads", flush=True)


def reference_interpreter(destination: Path) -> Path:
    sources = [*pipeline.shared_sources(),
               *[p for p in pipeline.sources("common/**/*.v3") if p.name != "PartitionTest.v3"],
               pipeline.ROOT / "tiers/interpreter/InterpreterGen.v3"]
    code = pipeline.interpret(sources)
    if not code.startswith("// GENERATED BY InterpreterGen"):
        raise RuntimeError(f"Reference interpreter generation failed:\n{code[-4000:]}")
    destination.write_text(code)
    return destination


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--generate", action="store_true", help="regenerate the complete Lean tier first")
    parser.add_argument("--native", action="store_true", help="also test a freshly compiled ./LeanInterpreterMain")
    parser.add_argument("names", nargs="*", help="optional fixture names")
    args = parser.parse_args()
    if args.native and not (pipeline.ROOT / "LeanInterpreterMain").is_file():
        parser.error("--native requires a freshly compiled ./LeanInterpreterMain")
    if args.generate:
        pipeline.generate()
    wasm_tools = shutil.which("wasm-tools") or str(Path.home() / ".cargo/bin/wasm-tools")
    runtime = pipeline.runtime_sources()
    lean_sources = [p for p in runtime if p.name != "LeanInterpreterMain.v3"] + [pipeline.ROOT / "tests/LeanInterpreterRuntimeTest.v3"]
    reference_sources = [p for p in runtime if p.name not in {"LeanInterpreter.v3", "LeanInterpreterMain.v3"}]
    reference_sources.append(pipeline.ROOT / "tiers/interpreter/InterpreterMain.v3")
    failures: list[str] = []
    native_failures: list[str] = []
    baseline_bugs: list[str] = []
    selected = [case for case in cases() if not args.names or case.name in args.names]
    unknown = set(args.names) - {case.name for case in selected}
    if unknown:
        parser.error(f"unknown fixtures: {', '.join(sorted(unknown))}")
    emitter_regressions()
    with tempfile.TemporaryDirectory(prefix="lean-interpreter-test-") as directory:
        reference_sources.append(reference_interpreter(Path(directory) / "Interpreter.v3"))
        for case in selected:
            wat = Path(directory) / f"{case.name}.wat"
            wasm = wat.with_suffix(".wasm")
            wat.write_text(case.wat)
            pipeline.run([wasm_tools, "parse", wat, "-o", wasm])
            pipeline.run([wasm_tools, "validate", wasm])
            try:
                arguments = [wasm, str(case.expected if case.expected is not None else 0), case.acquisition, str(case.sidetable_size)]
                if case.trap:
                    trap_result(interpreted_result(lean_sources, arguments), case, sidetable=True)
                else:
                    result_of(pipeline.interpret(lean_sources, arguments), case, sidetable=True)
                print(f"PASS Lean {case.name}: {case.trap or case.expected}", flush=True)
            except (RuntimeError, AssertionError) as error:
                failures.append(f"{case.name}: {error}")
                print(f"FAIL Lean {case.name}: {error}", flush=True)
            try:
                if case.trap:
                    trap_result(interpreted_result(reference_sources, [wasm]), case, sidetable=False)
                else:
                    result_of(pipeline.interpret(reference_sources, [wasm]), case, sidetable=False)
                print(f"PASS existing {case.name}: {case.trap or case.expected}", flush=True)
            except (RuntimeError, AssertionError) as error:
                baseline_bugs.append(f"{case.name}: {error}")
                print(f"BASELINE BUG {case.name}: {error}", flush=True)
            if args.native:
                try:
                    native = pipeline.run([pipeline.ROOT / "LeanInterpreterMain", wasm], check=False)
                    if case.trap:
                        trap_result(native, case, sidetable=False, native=True)
                    else:
                        if native.returncode != 0 or native.stderr:
                            raise AssertionError(f"native runtime failed ({native.returncode})\n{native.stdout[-4000:]}{native.stderr[-4000:]}")
                        result_of(native.stdout, case, sidetable=False)
                    print(f"PASS native {case.name}: {case.trap or case.expected}", flush=True)
                except (RuntimeError, AssertionError) as error:
                    native_failures.append(f"{case.name}: {error}")
                    print(f"FAIL native {case.name}: {error}", flush=True)
    print(f"Lean: {len(selected) - len(failures)}/{len(selected)} passed; existing tier: {len(selected) - len(baseline_bugs)}/{len(selected)} passed")
    if baseline_bugs:
        print("Existing-tier failures are reported separately; every Lean case must meet its expected result or trap reason.")
    if args.native:
        print(f"Native Lean: {len(selected) - len(native_failures)}/{len(selected)} passed")
    return int(bool(failures or native_failures))


if __name__ == "__main__":
    try:
        sys.exit(main())
    except (RuntimeError, OSError) as error:
        print(error, file=sys.stderr)
        sys.exit(1)
