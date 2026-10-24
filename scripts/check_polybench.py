#!/usr/bin/env python3
"""Compare Lean-scheduled PolyBench execution against Wizard's native fast interpreter."""

import argparse
from concurrent.futures import ThreadPoolExecutor, as_completed
import csv
import json
import math
import os
from pathlib import Path
import subprocess
import sys
import tempfile

ROOT = Path(__file__).resolve().parents[1]
GIB = 1024 ** 3


def positive_int(value):
    number = int(value)
    if number <= 0:
        raise argparse.ArgumentTypeError("must be positive")
    return number


def memory_layout(path):
    """Validate completeness; return (file offset, byte length) for each memory."""
    with path.open("rb") as stream:
        if stream.readline(64) != b"WIZARD-MEMORY-1\n":
            raise ValueError("invalid snapshot header")
        count = int(stream.readline(32))
        if not 0 < count <= 1000:
            raise ValueError("snapshot must contain at least one memory")
        layout = []
        end = path.stat().st_size
        for _ in range(count):
            size = int(stream.readline(32))
            offset = stream.tell()
            if size < 0 or offset + size > end:
                raise ValueError("truncated snapshot")
            layout.append((offset, size))
            stream.seek(size, 1)
        if stream.read(5) != b"END\n":
            raise ValueError("missing snapshot footer or trailing data")
        return layout


def first_difference(left, right, left_offset=0, right_offset=0, length=None):
    with left.open("rb") as a, right.open("rb") as b:
        a.seek(left_offset)
        b.seek(right_offset)
        offset = 0
        while length is None or offset < length:
            count = 65536 if length is None else min(65536, length - offset)
            x, y = a.read(count), b.read(count)
            if x != y:
                for index, (xx, yy) in enumerate(zip(x, y)):
                    if xx != yy:
                        return offset + index
                return offset + min(len(x), len(y))
            if not x:
                break
            offset += len(x)
    return None


def execute(binary, mode, benchmark, directory, label, timeout, memory_mib):
    memory = directory / f"{label}.memory"
    command = [str(binary), f"--mode={mode}", "--print-result",
               f"--monitors=polybench-memory{{output={memory}}}", str(benchmark)]
    data_limit = memory_mib * 1024 ** 2
    # Wizard's native memory reserves an inaccessible 8 GiB guard region.
    # RLIMIT_DATA still bounds writable allocations, including anonymous mmap.
    address_limit = data_limit + (8 * GIB if mode == "int" else 0)
    bounded = ["prlimit", f"--as={address_limit}", f"--data={data_limit}",
               f"--cpu={math.ceil(timeout)}", "--core=0", "--",
               "timeout", "--kill-after=5s", f"{timeout}s", *command]
    with (directory / f"{label}.stdout").open("wb") as out, \
         (directory / f"{label}.stderr").open("wb") as err:
        result = subprocess.run(bounded, cwd=ROOT, stdout=out, stderr=err)
    return {"command": command, "bounded_command": bounded, "exit": result.returncode}


def check_one(benchmark, args, output):
    directory = output / benchmark.stem
    directory.mkdir()
    runs = {}
    for label, binary, mode in (("reference", args.reference, "int"),
                                ("verified", args.verified, "cbd-verified")):
        runs[label] = execute(binary, mode, benchmark, directory, label,
                              args.timeout, args.memory_mib)
    problems = []
    for label, result in runs.items():
        if result["exit"] != 0:
            problems.append(f"{label} exited {result['exit']}")
    for suffix in ("stdout", "stderr"):
        offset = first_difference(directory / f"reference.{suffix}", directory / f"verified.{suffix}")
        if offset is not None:
            problems.append(f"{suffix} differs at byte {offset}")
    layouts = {}
    for label in runs:
        try:
            layouts[label] = memory_layout(directory / f"{label}.memory")
        except (OSError, ValueError) as error:
            problems.append(f"{label} memory snapshot unavailable/invalid: {error}")
    if len(layouts) == 2:
        a, b = layouts["reference"], layouts["verified"]
        if [size for _, size in a] != [size for _, size in b]:
            problems.append("memory counts or sizes differ")
        else:
            for index, ((ao, size), (bo, _)) in enumerate(zip(a, b)):
                offset = first_difference(directory / "reference.memory", directory / "verified.memory",
                                          ao, bo, size)
                if offset is not None:
                    problems.append(f"memory[{index}] differs at byte {offset} (0x{offset:x})")
    report = {"benchmark": benchmark.name, "status": "FAIL" if problems else "PASS",
              "problems": problems, "runs": runs}
    (directory / "result.json").write_text(json.dumps(report, indent=2) + "\n")
    if not problems and not args.keep_memory:
        for label in runs:
            (directory / f"{label}.memory").unlink()
    return report


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("benchmarks", nargs="*", help="names with or without .wasm; default: entire suite")
    parser.add_argument("--suite", type=Path, default=Path(os.environ.get(
        "POLYBENCH_DIR", ROOT.parent.parent / "wish-you-were-fast/wasm/suites/polybench")))
    parser.add_argument("--reference", type=Path, default=ROOT / "wizard-engine/bin/wizeng-reference.x86-64-linux")
    parser.add_argument("--verified", type=Path, default=ROOT / "wizard-engine/bin/wizeng-verified.x86-64-linux")
    parser.add_argument("--jobs", "-j", type=positive_int, default=1, help="concurrent benchmarks (default: 1)")
    parser.add_argument("--timeout", type=positive_int, default=120, help="seconds per execution (default: 120)")
    parser.add_argument("--memory-mib", type=positive_int, default=1024,
                        help="writable allocation limit per process (default: 1024 MiB)")
    parser.add_argument("--output-dir", type=Path, help="new directory for logs, failure snapshots, and summary")
    parser.add_argument("--keep-memory", action="store_true", help="also retain matching memory snapshots")
    args = parser.parse_args()
    args.suite = args.suite.resolve()
    for name, target in (("reference", "wizeng-reference"), ("verified", "wizeng-verified")):
        binary = getattr(args, name).resolve()
        if not binary.is_file() or not os.access(binary, os.X_OK):
            parser.error(f"missing {name} binary {binary}; run make {target}")
        setattr(args, name, binary)
    if args.benchmarks:
        benchmarks = [args.suite / (b if b.endswith(".wasm") else b + ".wasm") for b in args.benchmarks]
    else:
        benchmarks = sorted(args.suite.glob("*.wasm"))
        order_path = args.suite / "sorted.txt"
        if order_path.is_file():
            order = {name: i for i, name in enumerate(order_path.read_text().splitlines())}
            benchmarks.sort(key=lambda p: (order.get(p.stem, len(order)), p.name))
    if not benchmarks or any(not p.is_file() for p in benchmarks):
        parser.error("no benchmarks found, or a requested benchmark does not exist")
    if len({p.stem for p in benchmarks}) != len(benchmarks):
        parser.error("duplicate benchmark names")
    if args.output_dir:
        output = args.output_dir.resolve()
        output.mkdir(parents=True, exist_ok=False)
    else:
        parent = ROOT / "generated/polybench-checks"
        parent.mkdir(parents=True, exist_ok=True)
        output = Path(tempfile.mkdtemp(prefix="run-", dir=parent))
    if any(c in str(output) for c in ",{}"):
        parser.error("output path cannot contain monitor option delimiters: , { }")
    print(f"Checking {len(benchmarks)} benchmarks, jobs={args.jobs}, memory={args.memory_mib} MiB/process", flush=True)
    print(f"Logs: {output}", flush=True)
    reports = []
    with (output / "summary.tsv").open("w") as summary, ThreadPoolExecutor(max_workers=args.jobs) as pool:
        writer = csv.writer(summary, delimiter="\t")
        writer.writerow(["benchmark", "status", "reference_exit", "verified_exit", "details"])
        futures = [pool.submit(check_one, benchmark, args, output) for benchmark in benchmarks]
        for future in as_completed(futures):
            report = future.result()
            reports.append(report)
            details = "; ".join(report["problems"])
            writer.writerow([report["benchmark"], report["status"], report["runs"]["reference"]["exit"],
                             report["runs"]["verified"]["exit"], details])
            summary.flush()
            print(f"{report['status']} {report['benchmark']}" + (f": {details}" if details else ""), flush=True)
    failed = sum(r["status"] != "PASS" for r in reports)
    print(f"{len(reports) - failed} passed, {failed} failed. Summary: {output / 'summary.tsv'}")
    return int(failed != 0)


if __name__ == "__main__":
    try:
        sys.exit(main())
    except (OSError, ValueError) as error:
        print(error, file=sys.stderr)
        sys.exit(1)
