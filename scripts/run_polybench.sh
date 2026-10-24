#!/usr/bin/env bash
set -o pipefail

show_help() {
    cat << EOF
Usage: run_polybench.sh [OPTIONS] BENCHMARK [-- WIZENG_ARGS]

Run a PolyBench benchmark using the wizard-engine CBD interpreter.

OPTIONS:
    --help              Show this help message
    --list              List all available benchmarks
    --fast              Use optimized wizeng binary (x86-64-linux)
    --verified          Use the Lean-scheduled CBD interpreter (always x86-64)
                        saves to benches-verified.tsv; --fast has no effect
    --cbd=(true|false)  Run in CBD mode (default: true)
                        true: uses CBD interpreter, saves to benches-{slow,fast}.tsv
                        false: uses base wizard interpreter, saves to benches-{slow,fast}-base.tsv
    --verbose, -v       Show full command being executed
    --max-runs N        Set hyperfine max runs (default: 10)
    --time=CMD          Use specific timing command: 'time' or 'hyperfine'
                        (default: hyperfine if available, otherwise time)

ARGUMENTS:
    BENCHMARK           Name of benchmark (with or without .wasm extension)
    WIZENG_ARGS         Additional arguments passed to wizeng (after --)

ENVIRONMENT:
    POLYBENCH_DIR       Override polybench directory path
                        (default: ../wish-you-were-fast/wasm/suites/polybench)

EXAMPLES:
    run_polybench.sh bicg
    run_polybench.sh bicg.wasm
    run_polybench.sh --fast gemm
    run_polybench.sh --verified bicg
EOF
}

record_result() {
    BENCH_NAME=$1
    MEAN=$2
    STDDEV=$3
    TSV=$4

    # Create TSV header if file doesn't exist
    if [ ! -f "$TSV" ]; then
        printf 'benchmark\tmean_s\tstddev_s\n' > "$TSV"
    fi

    # Check if benchmark already exists in the file
    if grep -q "^$BENCH_NAME	" "$TSV" 2>/dev/null; then
        # Get previous time
        PREV_TIME=$(awk -v bench="$BENCH_NAME" 'BEGIN{FS="\t"} $1 == bench {print $2}' "$TSV")

        # Update existing entry in place using awk with printf for precision
        awk -v bench="$BENCH_NAME" -v mean="$MEAN" -v stddev="$STDDEV" 'BEGIN{FS=OFS="\t"} $1 == bench {printf "%s\t%.3f\t%s\n", bench, mean, stddev; next} 1' "$TSV" > "$TSV.tmp"
        mv "$TSV.tmp" "$TSV"

        printf "Results saved to %s (previous: %.3fs, new: %.3fs)\n" "$TSV" "$PREV_TIME" "$MEAN"
    else
        # Append new entry with 3 decimal precision for mean
        printf "%s\t%.3f\t%s\n" "$BENCH_NAME" "$MEAN" "$STDDEV" >> "$TSV"
        echo "Results saved to $TSV"
    fi
}

if [ "$(basename "$PWD")" = "scripts" ]; then
    cd ..
fi

# Use environment variable or default path
POLYBENCH="${POLYBENCH_DIR:-../../wish-you-were-fast/wasm/suites/polybench}"

# Default settings
WIZENG="./wizard-engine/bin/wizeng.x86-linux"
FAST=false
CBD=true
VERIFIED=false
VERBOSE=0
MAX_RUNS=10
TIME_CMD=""

# Parse options
while [ $# -gt 0 ]; do
    case "$1" in
        --help)
            show_help
            exit 0
            ;;
        --list)
            if [ -f "$POLYBENCH/sorted.txt" ]; then
                echo "Available benchmarks (sorted by runtime):"
                sed 's/^/| /; s/$/.wasm/' "$POLYBENCH/sorted.txt"
            else
                echo "Error: Polybench directory or sorted.txt not found at $POLYBENCH"
                exit 1
            fi
            exit 0
            ;;
        --fast)
            WIZENG="./wizard-engine/bin/wizeng.x86-64-linux"
            FAST=true
            shift
            ;;
        --verified)
            VERIFIED=true
            shift
            ;;
        --cbd=*)
            CBD_ARG="${1#*=}"
            if [ "$CBD_ARG" = "true" ]; then
                CBD=true
            elif [ "$CBD_ARG" = "false" ]; then
                CBD=false
            else
                echo "Error: --cbd must be 'true' or 'false'"
                exit 1
            fi
            shift
            ;;
        --verbose|-v)
            VERBOSE=1
            shift
            ;;
        --max-runs)
            MAX_RUNS="$2"
            shift 2
            ;;
        --time=*)
            TIME_CMD="${1#*=}"
            if [ "$TIME_CMD" != "time" ] && [ "$TIME_CMD" != "hyperfine" ]; then
                echo "Error: --time must be 'time' or 'hyperfine'"
                exit 1
            fi
            shift
            ;;
        *)
            break
            ;;
    esac
done

BUILD_CMD="make wizeng-slow"
if "$FAST"; then BUILD_CMD="make wizeng-fast"; fi
if "$VERIFIED"; then
    if ! "$CBD"; then
        echo "Error: --verified cannot be combined with --cbd=false"
        exit 1
    fi
    WIZENG="./wizard-engine/bin/wizeng-verified.x86-64-linux"
    BUILD_CMD="make wizeng-verified"
fi

if [ ! -f "$WIZENG" ]; then
    echo "Error: wizeng binary not found at $WIZENG"
    echo "To build it, run: $BUILD_CMD"
    exit 1
fi

BENCH=$1

if [ -z "$BENCH" ]; then
    echo "Error: No benchmark specified"
    echo "Use --help for usage information or --list to see available benchmarks"
    exit 1
fi

shift

# Collect additional args after --
WIZENG_ARGS=""
if [ "$1" = "--" ]; then
    shift
    WIZENG_ARGS="$@"
fi

case "$BENCH" in
    *.wasm) ;;
    *) BENCH=$BENCH.wasm;;
esac

# Check if benchmark file exists
if [ ! -f "$POLYBENCH/$BENCH" ]; then
    echo "Error: Benchmark file not found: $POLYBENCH/$BENCH"
    exit 1
fi

echo "Running $POLYBENCH/$BENCH"

# Determine output TSV file based on fast/cbd flags
if [ "$CBD" = true ]; then
    if [ "$FAST" = true ]; then
        TSV_FILE="generated/benches-fast.tsv"
    else
        TSV_FILE="generated/benches-slow.tsv"
    fi
    MODE_ARG="--mode=cbd-int"
    if "$VERIFIED"; then
        TSV_FILE="generated/benches-verified.tsv"
        MODE_ARG="--mode=cbd-verified"
    fi
else
    if [ "$FAST" = true ]; then
        TSV_FILE="generated/benches-fast-base.tsv"
    else
        TSV_FILE="generated/benches-slow-base.tsv"
    fi
    MODE_ARG=""
fi

# Create generated directory if it doesn't exist
mkdir -p generated

# Build the command
CMD="$WIZENG $MODE_ARG $POLYBENCH/$BENCH $WIZENG_ARGS"

if [ $VERBOSE -eq 1 ]; then
    echo "Command: $CMD"
fi

# Determine which timing command to use
USE_HYPERFINE=false
if [ -z "$TIME_CMD" ]; then
    # Auto-detect: use hyperfine if available
    if command -v hyperfine > /dev/null 2>&1; then
        USE_HYPERFINE=true
    fi
elif [ "$TIME_CMD" = "hyperfine" ]; then
    USE_HYPERFINE=true
fi

if [ "$USE_HYPERFINE" = true ]; then
    # Check if hyperfine is actually available
    if ! command -v hyperfine > /dev/null 2>&1; then
        echo "Error: hyperfine not found. Install it or use --time=time"
        exit 1
    fi

    # Capture hyperfine output while still printing it (force seconds as unit)
    TEMP_OUTPUT=$(mktemp)
    hyperfine --time-unit second --min-runs 1 --max-runs "$MAX_RUNS" "$CMD" | tee "$TEMP_OUTPUT"
    STATUS=$?
    if [ "$STATUS" -ne 0 ]; then
        rm "$TEMP_OUTPUT"
        exit "$STATUS"
    fi

    # Extract mean and stddev from output
    # Format with multiple runs: "Time (mean ± σ):      1.234 s ±  0.567 s"
    # Format with single run:    "Time (abs ≡):         1.234 s"
    if grep -q "Time (mean ± σ):" "$TEMP_OUTPUT"; then
        MEAN=$(grep "Time (mean ± σ):" "$TEMP_OUTPUT" | awk '{print $5}')
        STDDEV=$(grep "Time (mean ± σ):" "$TEMP_OUTPUT" | awk '{print $8}')
    elif grep -q "Time (abs ≡):" "$TEMP_OUTPUT"; then
        MEAN=$(grep "Time (abs ≡):" "$TEMP_OUTPUT" | awk '{print $4}')
        STDDEV="N/A"
    fi

    if [ -n "$MEAN" ]; then
        record_result "$BENCH" "$MEAN" "$STDDEV" "$TSV_FILE"
    fi

    rm "$TEMP_OUTPUT"
else
    # Use /usr/bin/time with format to output elapsed time in seconds
    TEMP_OUTPUT=$(mktemp)
    /usr/bin/time -f "Elapsed: %e seconds" $CMD 2>&1 | tee "$TEMP_OUTPUT"
    STATUS=$?
    if [ "$STATUS" -ne 0 ]; then
        rm "$TEMP_OUTPUT"
        exit "$STATUS"
    fi

    # Extract time from output and format to 3 decimal places
    ELAPSED=$(grep "^Elapsed:" "$TEMP_OUTPUT" | awk '{printf "%.3f", $2}')

    if [ -n "$ELAPSED" ]; then
        record_result "$BENCH" "$ELAPSED" "N/A" "$TSV_FILE"
    fi

    rm "$TEMP_OUTPUT"
fi
