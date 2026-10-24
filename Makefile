# Paths and variables
VIRGIL_DIR = ../virgil
VIRGIL_STD = $(VIRGIL_DIR)/lib/util/*.v3
VIRGIL_X86_STD = $(VIRGIL_DIR)/lib/asm/x86-64/*.v3
WIZARD = ./wizard-engine
ENGINE = $(WIZARD)/src/engine/*.v3 $(WIZARD)/src/engine/continuation/BoxedContinuation.v3
WIZARD_UTIL = $(WIZARD)/src/util/*.v3
V3TARGET = $(WIZARD)/src/engine/v3/*.v3
UTIL = $(WIZARD)/src/util/*.v3
DEFS = $(WIZARD)/src/bytecode/CanonicalDefs.v3
TYPEDEFS = $(WIZARD)/src/bytecode/Intrinsics.v3

# Virgil compiler command (adjust as needed)
VIRGIL ?= $(VIRGIL_DIR)/bin/current/x86-64-linux/Aeneas -O2 -run -fun-exprs -simple-bodies
V3C ?= $(VIRGIL_DIR)/bin/v3c-x86-64-linux -O2 -fun-exprs -simple-bodies

# Common libraries
COMMON_LIB = $(filter-out common/sea/region/PartitionTest.v3,$(wildcard common/*.v3 common/*/*.v3 common/*/*/*.v3))

# Dependencies
GENERATE_DEPS = $(COMMON_LIB) $(DEFS) $(DEFS).sexp $(TYPEDEFS)

# Synthetic opcodes
SYNTHETIC_DEFS = tests/SyntheticDefs.v3
SYNTHETIC_SEXP = tests/SyntheticDefs.v3.sexp

# Tier directories
VALIDATOR = tiers/validator
INTERPRETER = tiers/interpreter
COMPILER = tiers/compiler
AI = tiers/abstract_interpreter
FAST_INT = tiers/fast_int
V3COMPILER = tiers/v3compiler
INTRINSIC_COMPILER = tiers/intrinsic_compiler

AI_IMPLS = $(foreach I,$(wildcard $(AI)/impls/*.v3),$(basename $I)AI.v3)

# Targets
.PHONY: all clean help run_interpreter run_validator run_compiler validator interpreter compiler abstract_interpreter wizeng-slow site schedule_test

all: validator interpreter wizeng-slow site

$(DEFS).sexp: wizard-engine/src/bytecode/CanonicalDefs.v3
	$(VIRGIL) -print-vst $(DEFS) > $(DEFS).sexp

$(SYNTHETIC_SEXP): $(SYNTHETIC_DEFS)
	$(VIRGIL) -print-vst $(SYNTHETIC_DEFS) > $(SYNTHETIC_SEXP)

ScheduleTest: $(SYNTHETIC_SEXP) $(COMMON_LIB) $(TYPEDEFS) tests/ScheduleTest.v3 tests/ScheduleCuts.v3
	$(V3C) $(VIRGIL_STD)\
		$(COMMON_LIB)\
		$(ENGINE)\
		$(WIZARD_UTIL)\
		tests/ScheduleTest.v3 tests/ScheduleCuts.v3

PartitionTest: $(SYNTHETIC_SEXP) $(COMMON_LIB) $(TYPEDEFS) common/sea/region/*.v3
	$(V3C) $(VIRGIL_STD)\
		$(COMMON_LIB)\
		$(ENGINE)\
		$(WIZARD_UTIL)\
		common/sea/region/PartitionTest.v3

ValidatorGen: $(GENERATE_DEPS) $(VALIDATOR)/*.v3
	$(V3C) $(VIRGIL_STD)\
		$(COMMON_LIB)\
		$(ENGINE)\
		$(WIZARD_UTIL)\
		$(VALIDATOR)/ValidatorGen.v3

generated/Validator.v3: ValidatorGen
	./ValidatorGen > $@~
	rm ./ValidatorGen
	mv --force $@~ $@

docs/traces.js: validator
site: docs/traces.js

generated/Interpreter.v3: $(GENERATE_DEPS) $(INTERPRETER)/*.v3
	$(VIRGIL) $(VIRGIL_STD) \
		$(COMMON_LIB)\
		$(ENGINE)\
		$(WIZARD_UTIL)\
		$(INTERPRETER)/InterpreterGen.v3\
		> $@~
	mv --force $@~ $@

generated/Compiler.v3: $(GENERATE_DEPS) $(COMPILER)/CompilerGen.v3 $(COMPILER)/CompilerTemplate.v3 generated/Validator.v3 $(COMPILER)/Intrinsics.v3
	$(VIRGIL) $(VIRGIL_STD)\
		$(COMMON_LIB)\
		$(ENGINE)\
		$(WIZARD_UTIL)\
		$(COMPILER)/CompilerGen.v3\
		> $@~
	mv --force $@~ $@

generated/V3Compiler.v3: $(GENERATE_DEPS) $(V3COMPILER)/V3CompilerGen.v3 $(V3COMPILER)/V3CompilerTemplate.v3 generated/Validator.v3 $(V3COMPILER)/Intrinsics.v3 $(AI)/AITemplate.v3
	$(VIRGIL) $(VIRGIL_STD)\
		$(COMMON_LIB)\
		$(ENGINE)\
		$(WIZARD_UTIL)\
		$(V3COMPILER)/V3CompilerGen.v3\
		> $@~
	mv --force $@~ $@

generated/AI.v3: $(GENERATE_DEPS) $(AI)/*.v3 generated/Validator.v3
	$(VIRGIL) $(VIRGIL_STD) \
		$(COMMON_LIB)\
		$(ENGINE)\
		$(WIZARD_UTIL)\
		$(AI)/AIGen.v3\
		> $@~
	mv --force $@~ $@

generated/FastInt.v3: $(GENERATE_DEPS) $(FAST_INT)/*.v3 generated/Validator.v3
	$(VIRGIL) $(VIRGIL_STD) \
		$(COMMON_LIB)\
		$(ENGINE)\
		$(WIZARD_UTIL)\
		$(FAST_INT)/FastIntGen.v3\
		> $@~
	mv --force $@~ $@

IntrinsicCompilerGen: $(GENERATE_DEPS) $(VALIDATOR)/*.v3
	$(V3C) $(VIRGIL_STD) \
		$(COMMON_LIB)\
		$(ENGINE)\
		$(WIZARD_UTIL)\
		$(INTRINSIC_COMPILER)/IntrinsicCompilerGen.v3

generated/IntrinsicCompiler.v3: IntrinsicCompilerGen
	./IntrinsicCompilerGen > $@~
	rm ./IntrinsicCompilerGen
	mv --force $@~ $@

validator: generated/Validator.v3
interpreter: generated/Interpreter.v3
lean-interpreter:
	python3 scripts/lean_interpreter.py generate

LeanInterpreterMain: lean-interpreter
	python3 scripts/lean_interpreter.py compile

run_lean_interpreter: lean-interpreter
	python3 scripts/lean_interpreter.py run $(ARGS)

test-lean-interpreter: lean-interpreter
	python3 scripts/lean_interpreter_test.py

.PHONY: lean-interpreter run_lean_interpreter test-lean-interpreter

wizeng-verified: lean-interpreter
	python3 scripts/lean_interpreter.py compile --wizard

.PHONY: wizeng-verified

wizeng-reference:
	python3 scripts/lean_interpreter.py compile --wizard-reference

.PHONY: wizeng-reference
compiler: generated/Compiler.v3
abstract_interpreter: generated/AI.v3
wizeng-slow: validator interpreter
	cp common/CBDTypes.v3 wizard-engine/src/engine/cbd/slow/CBDTypes.v3
	cp generated/Interpreter.v3 wizard-engine/src/engine/cbd/slow/CBDInterpreter.v3
	cp generated/Validator.v3 wizard-engine/src/engine/cbd/slow/CBDValidator.v3
	cd wizard-engine; ./build.sh --cbd wizeng x86-linux

wizeng-fast: generated/FastInt.v3
	cp generated/FastInt.v3 wizard-engine/src/engine/cbd/fast/CBDFastInt.v3
	cd wizard-engine; ./build.sh --cbd wizeng x86-64-linux

run_interpreter: generated/Interpreter.v3 generated/Validator.v3
	$(VIRGIL) -O2 $(VIRGIL_STD) $(ENGINE) $(V3TARGET) $(UTIL)\
		generated/Validator.v3 generated/Interpreter.v3 $(INTERPRETER)/InterpreterMain.v3 $(ARGS)

run_validator: generated/Validator.v3
	$(VIRGIL) $(VIRGIL_STD) $(ENGINE) $(V3TARGET) $(UTIL)\
		generated/Validator.v3 $(VALIDATOR)/ValidatorMain.v3 $(ARGS)

run_compiler: generated/Compiler.v3
	$(VIRGIL) $(VIRGIL_STD) $(ENGINE) $(V3TARGET) $(UTIL)\
		generated/Validator.v3 generated/Compiler.v3 $(COMPILER)/CompilerMain.v3 $(ARGS)

InterpreterMain: generated/Interpreter.v3 generated/Validator.v3
	$(V3C) -O2 $(VIRGIL_STD) $(ENGINE) $(V3TARGET) $(UTIL)\
		generated/Validator.v3\
		$(CBD_RUNTIME)\
		generated/Interpreter.v3 $(INTERPRETER)/InterpreterMain.v3

FastInterpreterMain: generated/FastInt.v3 generated/Validator.v3
	$(V3C) -O2 $(VIRGIL_STD) $(ENGINE) $(UTIL)\
		$(VIRGIL_X86_STD)\
		$(WIZARD)/src/engine/compiler/*.v3\
		$(WIZARD)/src/engine/x86-64/*.v3\
		generated/Validator.v3\
		generated/FastInt.v3 $(FAST_INT)/FastIntMain.v3

%AI: abstract_interpreter validator
	$(V3C) -O2 $(VIRGIL_STD) $(ENGINE) $(V3TARGET) $(UTIL)\
		generated/Validator.v3 generated/AI.v3\
		$(AI)/state_mgrs/*.v3 $(AI)/impls/$*.v3 $(AI)/AIMain.v3
	mv AIMain $@

V3CompilerMain: generated/V3Compiler.v3 validator $(AI)/state_mgrs/CFGStateMgr.v3 generated/Compiler.v3
	$(V3C) -O2 $(VIRGIL_STD) $(ENGINE) $(V3TARGET) $(UTIL)\
		generated/Validator.v3\
		$(AI)/state_mgrs/CFGStateMgr.v3\
		generated/Compiler.v3\
		generated/V3Compiler.v3\
		$(V3COMPILER)/V3CompilerMain.v3

# Clean build artifacts
clean:
	cd wizard-engine; make clean
	rm -f generated/Interpreter.v3 generated/Compiler.v3 generated/Validator.v3 generated/AI.v3 generated/V3Compiler.v3 $(DEFS).sexp tests/*.sexp $(SYNTHETIC_SEXP) *Main *AI docs/traces.js

# Usage instructions
help:
	@echo "Wasm CBD"
	@echo ""
	@echo "Available targets:"
	@echo "  make all                           - Build validator, interpreter, and compiler"
	@echo "  make validator                     - Generate validator from template"
	@echo "  make interpreter                   - Generate interpreter from template"
	@echo "  make compiler                      - Generate compiler from template"
	@echo "  make run_validator ARGS='args'     - Run the validator"
	@echo "  make run_interpreter ARGS='args'   - Run the interpreter"
	@echo "  make run_compiler ARGS='args'      - Run the compiler"
	@echo "  make InterpreterMain               - Compile interpreter to binary"
	@echo "  make clean                         - Clean build artifacts"
	@echo "  make help                          - Show this help message"
