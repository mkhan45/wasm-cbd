#!/usr/bin/env python3
"""Regressions for the differential runner, including silent memory corruption."""

import json
import os
from pathlib import Path
import shutil
import subprocess
import sys
import tempfile
import unittest

from check_polybench import ROOT, memory_layout

SCRIPT = Path(__file__).with_name("check_polybench.py")


class ComparisonTest(unittest.TestCase):
    def setUp(self):
        self.temp = tempfile.TemporaryDirectory()
        self.addCleanup(self.temp.cleanup)
        self.root = Path(self.temp.name)
        self.fake = self.root / "wizard"
        self.fake.write_text(f"#!{sys.executable}\n" + '''
import os, pathlib, sys, time
mode = sys.argv[1]
assert mode in ("--mode=int", "--mode=cbd-verified")
assert sys.argv[2] == "--print-result"
snapshot = pathlib.Path(sys.argv[3].split("output=", 1)[1][:-1])
benchmark = pathlib.Path(sys.argv[4]).stem
verified = mode == "--mode=cbd-verified"
fd = os.open(str(pathlib.Path(sys.argv[4]).parent / "events"), os.O_WRONLY | os.O_CREAT | os.O_APPEND, 0o600)
os.write(fd, f"start {os.getpid()}\\n".encode())
time.sleep(0.03)
if benchmark == "timeout" and verified:
    time.sleep(3)
data = b"\\x00\\x01\\x02\\x03"
if benchmark == "memory" and verified:
    data = b"\\x00\\x01\\xff\\x03"
if benchmark != "missing":
    snapshot.write_bytes(b"WIZARD-MEMORY-1\\n1\\n4\\n" + data + b"END\\n")
if benchmark == "truncated":
    snapshot.write_bytes(b"WIZARD-MEMORY-1\\n1\\n4\\n\\x00")
print("different" if benchmark == "stdout" and verified else "result=0")
if benchmark == "stderr" and verified:
    print("different", file=sys.stderr)
os.write(fd, f"end {os.getpid()}\\n".encode())
os.close(fd)
sys.exit(7 if benchmark == "failure" else 0)
''')
        self.fake.chmod(0o755)

    def run_suite(self, names, *options):
        for name in names:
            (self.root / f"{name}.wasm").touch()
        output = self.root / "results"
        result = subprocess.run([sys.executable, str(SCRIPT), "--suite", str(self.root),
                                 "--reference", str(self.fake), "--verified", str(self.fake),
                                 "--output-dir", str(output), *options], text=True, capture_output=True)
        return result, output

    def test_match_and_parallelism(self):
        result, output = self.run_suite(["good1", "good2", "good3"], "--jobs", "2")
        self.assertEqual(result.returncode, 0, result.stdout + result.stderr)
        active = set()
        maximum = 0
        for event in (self.root / "events").read_text().splitlines():
            kind, pid = event.split()
            if kind == "start":
                active.add(pid)
            else:
                active.remove(pid)
            maximum = max(maximum, len(active))
        self.assertEqual(maximum, 2)
        for name in ("good1", "good2", "good3"):
            self.assertFalse((output / name / "reference.memory").exists())
            report = json.loads((output / name / "result.json").read_text())
            self.assertEqual(report["status"], "PASS")

    def test_mismatches_and_failed_runs(self):
        names = ["memory", "stdout", "stderr", "failure", "missing", "truncated"]
        result, output = self.run_suite(names, "--jobs", "3")
        self.assertEqual(result.returncode, 1)
        self.assertIn("0 passed, 6 failed", result.stdout)
        self.assertIn("memory[0] differs at byte 2", result.stdout)
        for name in names:
            report = json.loads((output / name / "result.json").read_text())
            self.assertEqual(report["status"], "FAIL")
        self.assertTrue((output / "memory/reference.memory").exists())

    def test_timeout(self):
        result, output = self.run_suite(["timeout"], "--timeout", "1")
        self.assertEqual(result.returncode, 1)
        report = json.loads((output / "timeout/result.json").read_text())
        self.assertEqual(report["runs"]["verified"]["exit"], 124)

    def test_empty_suite(self):
        result, _ = self.run_suite([])
        self.assertEqual(result.returncode, 2)
        self.assertIn("no benchmarks found", result.stderr)


@unittest.skipUnless(os.environ.get("POLYBENCH_INTEGRATION"), "set POLYBENCH_INTEGRATION=1 for native monitor tests")
class MonitorIntegrationTest(unittest.TestCase):
    def test_known_final_bytes_and_wasi_exit(self):
        wasm_tools = shutil.which("wasm-tools") or str(Path.home() / ".cargo/bin/wasm-tools")
        with tempfile.TemporaryDirectory() as directory:
            root = Path(directory)
            fixtures = {
                "return": '(module (memory 1) (func (export "main") (result i32) '
                          'i32.const 16 i32.const 123 i32.store8 i32.const 0))',
                "exit": '(module (import "wasi_snapshot_preview1" "proc_exit" (func $exit (param i32))) '
                        '(memory (export "memory") 1) (func (export "_start") '
                        'i32.const 16 i32.const 123 i32.store8 i32.const 0 call $exit unreachable))',
            }
            for name, wat in fixtures.items():
                source = root / f"{name}.wat"
                source.write_text(wat)
                subprocess.run([wasm_tools, "parse", str(source), "-o", str(source.with_suffix(".wasm"))], check=True)
            output = root / "results"
            result = subprocess.run([sys.executable, str(SCRIPT), "--suite", str(root),
                                     "--jobs", "2", "--keep-memory", "--output-dir", str(output)],
                                    cwd=ROOT, text=True, capture_output=True)
            self.assertEqual(result.returncode, 0, result.stdout + result.stderr)
            for name in fixtures:
                for label in ("reference", "verified"):
                    snapshot = output / name / f"{label}.memory"
                    [(offset, size)] = memory_layout(snapshot)
                    self.assertEqual(size, 65536)
                    data = snapshot.read_bytes()[offset:offset + size]
                    self.assertEqual(data, b"\x00" * 16 + b"\x7b" + b"\x00" * (size - 17))


if __name__ == "__main__":
    unittest.main()
