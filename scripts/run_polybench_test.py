#!/usr/bin/env python3
"""Exercise PolyBench tier selection without running a benchmark or compiler."""

import os
from pathlib import Path
import shutil
import subprocess
import tempfile
import unittest


SCRIPT = Path(__file__).with_name("run_polybench.sh")
WIZARD = os.environ.get("LEAN_WIZARD_BINARY")


class PolyBenchTest(unittest.TestCase):
    def setUp(self):
        self.temp = tempfile.TemporaryDirectory()
        self.addCleanup(self.temp.cleanup)
        self.root = Path(self.temp.name)
        binaries = self.root / "wizard-engine/bin"
        binaries.mkdir(parents=True)
        for name in ("wizeng", "wizeng-verified"):
            for arch in ("x86-linux", "x86-64-linux"):
                if name == "wizeng-verified" and arch == "x86-linux":
                    continue
                binary = binaries / f"{name}.{arch}"
                binary.write_text('#!/bin/sh\nprintf "%s\\n" "$0" "$@" > "$CALL_LOG"\n'
                                  'exit "${WIZENG_STATUS:-0}"\n')
                binary.chmod(0o755)
        (self.root / "probe.wasm").touch()
        self.env = dict(os.environ, POLYBENCH_DIR=str(self.root),
                        CALL_LOG=str(self.root / "call.log"))

    def run_script(self, *options):
        return subprocess.run([str(SCRIPT), *options, "probe", "--", "42"],
                              cwd=self.root, env=self.env, text=True, capture_output=True)

    def test_tiers(self):
        cases = [([], "wizeng", "cbd-int", ""),
                 (["--cbd=false"], "wizeng", None, "-base"),
                 (["--verified"], "wizeng-verified", "cbd-verified", "-verified")]
        for flags, binary, mode, suffix in cases:
            for fast in (False, True):
                with self.subTest(flags=flags, fast=fast):
                    options = [*flags, *(["--fast"] if fast else []), "--time=time"]
                    result = self.run_script(*options)
                    self.assertEqual(result.returncode, 0, result.stdout + result.stderr)
                    arch = "x86-64-linux" if fast or mode == "cbd-verified" else "x86-linux"
                    expected = [f"./wizard-engine/bin/{binary}.{arch}"]
                    if mode:
                        expected.append(f"--mode={mode}")
                    expected.extend([str(self.root / "probe.wasm"), "42"])
                    self.assertEqual((self.root / "call.log").read_text().splitlines(), expected)
                    speed = "fast" if fast else "slow"
                    output = self.root / f"generated/benches-{speed}{suffix}.tsv"
                    if mode == "cbd-verified":
                        output = self.root / "generated/benches-verified.tsv"
                    self.assertEqual(output.read_text().splitlines()[0], "benchmark\tmean_s\tstddev_s")

    def test_conflicting_flags(self):
        for flags in (["--verified", "--cbd=false"], ["--cbd=false", "--verified"]):
            result = self.run_script(*flags)
            self.assertNotEqual(result.returncode, 0)
            self.assertIn("cannot be combined", result.stdout)
        self.assertFalse((self.root / "call.log").exists())

    def test_missing_verified_binary(self):
        (self.root / "wizard-engine/bin/wizeng-verified.x86-64-linux").unlink()
        for fast in (False, True):
            result = self.run_script(*(["--fast"] if fast else []), "--verified")
            self.assertNotEqual(result.returncode, 0)
            self.assertIn("To build it, run: make wizeng-verified\n", result.stdout)
        self.assertFalse((self.root / "call.log").exists())

    def test_failed_benchmark_is_not_recorded(self):
        self.env["WIZENG_STATUS"] = "7"
        result = self.run_script("--verified", "--time=time")
        self.assertEqual(result.returncode, 7)
        self.assertFalse((self.root / "generated/benches-verified.tsv").exists())

    def test_hyperfine(self):
        hyperfine = self.root / "hyperfine"
        hyperfine.write_text('#!/bin/bash\nbash -c "${@: -1}" || exit $?\n'
                             'echo "Time (abs ≡): 0.123 s"\n')
        hyperfine.chmod(0o755)
        self.env["PATH"] = f"{self.root}:{self.env['PATH']}"
        result = self.run_script("--fast", "--verified", "--time=hyperfine", "--max-runs", "1")
        self.assertEqual(result.returncode, 0, result.stdout + result.stderr)
        output = self.root / "generated/benches-verified.tsv"
        self.assertIn("probe.wasm\t0.123", output.read_text())
        output.unlink()
        self.env["WIZENG_STATUS"] = "7"
        result = self.run_script("--fast", "--verified", "--time=hyperfine")
        self.assertEqual(result.returncode, 7)
        self.assertFalse(output.exists())


@unittest.skipUnless(WIZARD, "set LEAN_WIZARD_BINARY to test the real Wizard adapter")
class WizardIntegrationTest(unittest.TestCase):
    def test_runtime(self):
        from lean_interpreter import run

        wasm_tools = shutil.which("wasm-tools") or str(Path.home() / ".cargo/bin/wasm-tools")
        fixtures = {
            # Start and main are separate Execute.call invocations on the same strategy.
            "start-and-main": ('''(module
                (global $g (mut i32) (i32.const 0))
                (func $start i32.const 37 global.set $g) (start $start)
                (func (export "main") (result i32)
                    global.get $g i32.const 42 i32.add))''', 79),
            "host-exit": ('''(module
                (import "wasi_snapshot_preview1" "proc_exit" (func $exit (param i32)))
                (memory (export "memory") 1)
                (func (export "_start") i32.const 7 call $exit unreachable))''', 7),
            "branch-memory": ('''(module
                (memory 1)
                (func (export "main") (result i32) (local $i i32)
                    i32.const 10 local.set $i
                    (loop $loop
                        i32.const 0 i32.const 0 i32.load local.get $i i32.add i32.store
                        local.get $i i32.const 1 i32.sub local.tee $i br_if $loop)
                    i32.const 0 i32.load))''', 55),
        }
        with tempfile.TemporaryDirectory() as directory:
            for name, (wat, expected) in fixtures.items():
                with self.subTest(name=name):
                    source = Path(directory) / f"{name}.wat"
                    binary = source.with_suffix(".wasm")
                    source.write_text(wat)
                    subprocess.run([wasm_tools, "parse", str(source), "-o", str(binary)], check=True)
                    result = run([Path(WIZARD).resolve(), "--mode=cbd-verified", binary], check=False)
                    self.assertEqual(result.returncode, expected, result.stdout + result.stderr)


if __name__ == "__main__":
    unittest.main()
