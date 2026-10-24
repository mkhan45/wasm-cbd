window.traces = {};
window.info = {};
window.traces["SPLIT_BRANCHES"] = {}
window.traces["SPLIT_BRANCHES"]["parsed"] = ''
window.traces["SPLIT_BRANCHES"]["parsed"] += `<pre class=''>def c1 = pop_u32();
def arg__22 : u32 = 0;
def arg__21 = (c1);
def p = u32.!=(arg__21, arg__22);
def arg__20 : u32 = 2;
def arg__19 = (c1);
def q = u32.==(arg__19, arg__20);
def cond__0 = (p);
if (cond__0) {
	def cond__1 = (q);
	if (cond__1) {
		def arg__5 : u32 = 1;
		def eff__4 = push_u32(arg__5);
		def arg__3 : u32 = 2;
		def eff__2 = push_u32(arg__3);
	} else {
		def arg__9 : u32 = 3;
		def eff__8 = push_u32(arg__9);
		def arg__7 : u32 = 4;
		def eff__6 = push_u32(arg__7);
	}
// phis: 
} else {
	def cond__10 = (q);
	if (cond__10) {
		def arg__14 : u32 = 5;
		def eff__13 = push_u32(arg__14);
		def arg__12 : u32 = 6;
		def eff__11 = push_u32(arg__12);
	} else {
		def arg__18 : u32 = 7;
		def eff__17 = push_u32(arg__18);
		def arg__16 : u32 = 8;
		def eff__15 = push_u32(arg__16);
	}
// phis: 
}
// phis: 
</pre>`;
window.traces["SPLIT_BRANCHES"]["initial_pretty"] = ''
window.traces["SPLIT_BRANCHES"]["initial_pretty"] += `<pre class=''>def c1 = pop_u32();
if ((u32.!=((c1), 0))) {
	if ((u32.==((c1), 2))) {
		push_u32(1);
		push_u32(2);
	} else {
		push_u32(3);
		push_u32(4);
	}
} else {
	if ((u32.==((c1), 2))) {
		push_u32(5);
		push_u32(6);
	} else {
		push_u32(7);
		push_u32(8);
	}
}
</pre>`;
window.traces["SPLIT_BRANCHES"]["raw"] = ''
window.traces["SPLIT_BRANCHES"]["raw"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	31 -. Stack .-> 1
	31{{"sea__25 Sϕ Stack "}}
	6 --> 31
	30 --> 31
	20 --> 31
	20{{"sea__23 Sϕ Stack "}}
	9 --> 20
	19 --> 20
	15 --> 20
	15["eff__15 push_u32"]
	14 --> 15
	13 -. Stack .-> 15
	13["eff__17 push_u32"]
	12 --> 13
	3 -. Stack .-> 13
	3["c1 pop_u32"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	12["arg__18 7"]
	14["arg__16 8"]
	19["eff__11 push_u32"]
	18 --> 19
	17 -. Stack .-> 19
	17["eff__13 push_u32"]
	16 --> 17
	3 -. Stack .-> 17
	16["arg__14 5"]
	18["arg__12 6"]
	9["q u32.=="]
	3 --> 9
	7 --> 9
	7["arg__20 2"]
	30{{"sea__24 Sϕ Stack "}}
	9 --> 30
	29 --> 30
	25 --> 30
	25["eff__6 push_u32"]
	24 --> 25
	23 -. Stack .-> 25
	23["eff__8 push_u32"]
	22 --> 23
	3 -. Stack .-> 23
	22["arg__9 3"]
	24["arg__7 4"]
	29["eff__2 push_u32"]
	28 --> 29
	27 -. Stack .-> 29
	27["eff__4 push_u32"]
	26 --> 27
	3 -. Stack .-> 27
	26["arg__5 1"]
	28["arg__3 2"]
	6["p u32.!="]
	3 --> 6
	4 --> 6
	4["arg__22 0"]
</pre>`;
window.traces["SPLIT_BRANCHES"]["scheduler_start"] = ''
window.traces["SPLIT_BRANCHES"]["scheduler_start"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	31 -. Stack .-> 1
	31{{"sea__25 Sϕ Stack "}}
	6 --> 31
	32 --> 31
	33 --> 31
	33["mv_f__27 |False|  [u32.!= [p]]"]
	6 --> 33
	20 -. Stack .-> 33
	20{{"sea__23 Sϕ Stack "}}
	9 --> 20
	36 --> 20
	37 --> 20
	37["mv_f__31 |False|  [u32.== [q]]"]
	9 --> 37
	15 -. Stack .-> 37
	15["eff__15 push_u32"]
	14 --> 15
	13 -. Stack .-> 15
	13["eff__17 push_u32"]
	12 --> 13
	3 -. Stack .-> 13
	3["c1 pop_u32"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	12["arg__18 7"]
	14["arg__16 8"]
	9["q u32.=="]
	3 --> 9
	7 --> 9
	7["arg__20 2"]
	36["mv_t__30 |True|  [u32.== [q]]"]
	9 --> 36
	19 -. Stack .-> 36
	19["eff__11 push_u32"]
	18 --> 19
	17 -. Stack .-> 19
	17["eff__13 push_u32"]
	16 --> 17
	3 -. Stack .-> 17
	16["arg__14 5"]
	18["arg__12 6"]
	6["p u32.!="]
	3 --> 6
	4 --> 6
	4["arg__22 0"]
	32["mv_t__26 |True|  [u32.!= [p]]"]
	6 --> 32
	30 -. Stack .-> 32
	30{{"sea__24 Sϕ Stack "}}
	9 --> 30
	34 --> 30
	35 --> 30
	35["mv_f__29 |False|  [u32.== [q]]"]
	9 --> 35
	25 -. Stack .-> 35
	25["eff__6 push_u32"]
	24 --> 25
	23 -. Stack .-> 25
	23["eff__8 push_u32"]
	22 --> 23
	3 -. Stack .-> 23
	22["arg__9 3"]
	24["arg__7 4"]
	34["mv_t__28 |True|  [u32.== [q]]"]
	9 --> 34
	29 -. Stack .-> 34
	29["eff__2 push_u32"]
	28 --> 29
	27 -. Stack .-> 29
	27["eff__4 push_u32"]
	26 --> 27
	3 -. Stack .-> 27
	26["arg__5 1"]
	28["arg__3 2"]
</pre>`;
window.traces["SPLIT_BRANCHES"]["untangled"] = ''
window.traces["SPLIT_BRANCHES"]["untangled"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	31 -. Stack .-> 1
	31{{"sea__25 Sϕ Stack "}}
	6 --> 31
	32 --> 31
	33 --> 31
	33["mv_f__27 |False|  [u32.!= [p]]"]
	6 --> 33
	20 -. Stack .-> 33
	20{{"sea__23 Sϕ Stack "}}
	9 --> 20
	36 --> 20
	37 --> 20
	37["mv_f__31 |False|  [u32.== [q]]"]
	9 --> 37
	15 -. Stack .-> 37
	15["eff__15 push_u32"]
	14 --> 15
	13 -. Stack .-> 15
	13["eff__17 push_u32"]
	12 --> 13
	3 -. Stack .-> 13
	3["c1 pop_u32"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	12["arg__18 7"]
	14["arg__16 8"]
	9["q u32.=="]
	3 --> 9
	7 --> 9
	7["arg__20 2"]
	36["mv_t__30 |True|  [u32.== [q]]"]
	9 --> 36
	19 -. Stack .-> 36
	19["eff__11 push_u32"]
	18 --> 19
	17 -. Stack .-> 19
	17["eff__13 push_u32"]
	16 --> 17
	3 -. Stack .-> 17
	16["arg__14 5"]
	18["arg__12 6"]
	6["p u32.!="]
	3 --> 6
	4 --> 6
	4["arg__22 0"]
	32["mv_t__26 |True|  [u32.!= [p]]"]
	6 --> 32
	30 -. Stack .-> 32
	30{{"sea__24 Sϕ Stack "}}
	9 --> 30
	34 --> 30
	35 --> 30
	35["mv_f__29 |False|  [u32.== [q]]"]
	9 --> 35
	25 -. Stack .-> 35
	25["eff__6 push_u32"]
	24 --> 25
	23 -. Stack .-> 25
	23["eff__8 push_u32"]
	22 --> 23
	3 -. Stack .-> 23
	22["arg__9 3"]
	24["arg__7 4"]
	34["mv_t__28 |True|  [u32.== [q]]"]
	9 --> 34
	29 -. Stack .-> 34
	29["eff__2 push_u32"]
	28 --> 29
	27 -. Stack .-> 29
	27["eff__4 push_u32"]
	26 --> 27
	3 -. Stack .-> 27
	26["arg__5 1"]
	28["arg__3 2"]
</pre>`;
window.traces["SPLIT_BRANCHES"]["schedulerMermaid"] = ''
window.traces["SPLIT_BRANCHES"]["schedulerMermaid"] += `<pre class='graph'>graph TD
subgraph block_1["Block 1"]
	direction TB
	b1_1[\\"Finish"/]
end
phi_10 --> block_1
subgraph phi_10["Phi 10"]
	p10_31{{"sea__25 Sϕ Stack "}}
end
block_11 --> phi_10
block_12 --> phi_10
subgraph block_11["Block 11"]
	direction TB
	b11_32["mv_t__26 |True|  [u32.!= [p]]"]
end
phi_15 --> block_11
subgraph phi_15["Phi 15"]
	p15_30{{"sea__24 Sϕ Stack "}}
end
block_16 --> phi_15
block_17 --> phi_15
subgraph block_16["Block 16"]
	direction TB
	b16_26["arg__5 1"]
	b16_27["eff__4 push_u32"]
	b16_28["arg__3 2"]
	b16_29["eff__2 push_u32"]
	b16_34["mv_t__28 |True|  [u32.== [q]]"]
	b16_26 --> b16_27
	b16_27 --> b16_28
	b16_28 --> b16_29
	b16_29 --> b16_34
end
branch_14 --> block_16
subgraph branch_14["Branch 14"]
	br14_9["q u32.=="]

end
branch_9 --> branch_14
subgraph branch_9["Branch 9"]
	br9_6["p u32.!="]

end
block_13 --> branch_9
subgraph block_13["Block 13"]
	direction TB
	b13_0[/"Start"\\]
	b13_3["c1 pop_u32"]
	b13_7["arg__20 2"]
	b13_9["q u32.=="]
	b13_4["arg__22 0"]
	b13_6["p u32.!="]
	b13_0 --> b13_3
	b13_3 --> b13_7
	b13_7 --> b13_9
	b13_9 --> b13_4
	b13_4 --> b13_6
end
subgraph block_17["Block 17"]
	direction TB
	b17_22["arg__9 3"]
	b17_23["eff__8 push_u32"]
	b17_24["arg__7 4"]
	b17_25["eff__6 push_u32"]
	b17_35["mv_f__29 |False|  [u32.== [q]]"]
	b17_22 --> b17_23
	b17_23 --> b17_24
	b17_24 --> b17_25
	b17_25 --> b17_35
end
branch_14 --> block_17
subgraph block_12["Block 12"]
	direction TB
	b12_33["mv_f__27 |False|  [u32.!= [p]]"]
end
phi_19 --> block_12
subgraph phi_19["Phi 19"]
	p19_20{{"sea__23 Sϕ Stack "}}
end
block_20 --> phi_19
block_21 --> phi_19
subgraph block_20["Block 20"]
	direction TB
	b20_16["arg__14 5"]
	b20_17["eff__13 push_u32"]
	b20_18["arg__12 6"]
	b20_19["eff__11 push_u32"]
	b20_36["mv_t__30 |True|  [u32.== [q]]"]
	b20_16 --> b20_17
	b20_17 --> b20_18
	b20_18 --> b20_19
	b20_19 --> b20_36
end
branch_18 --> block_20
subgraph branch_18["Branch 18"]
	br18_9["q u32.=="]

end
branch_9 --> branch_18
subgraph block_21["Block 21"]
	direction TB
	b21_12["arg__18 7"]
	b21_13["eff__17 push_u32"]
	b21_14["arg__16 8"]
	b21_15["eff__15 push_u32"]
	b21_37["mv_f__31 |False|  [u32.== [q]]"]
	b21_12 --> b21_13
	b21_13 --> b21_14
	b21_14 --> b21_15
	b21_15 --> b21_37
end
branch_18 --> block_21

</pre>`;
window.traces["SPLIT_BRANCHES"]["scheduler_ssad"] = ''
window.traces["SPLIT_BRANCHES"]["scheduler_ssad"] += `<pre class=''>def c1 = pop_u32();
def arg__20 : u32 = 2;
def q = u32.==(c1, arg__20);
def arg__22 : u32 = 0;
def p = u32.!=(c1, arg__22);
if (p) {
	if (q) {
		def arg__5 : u32 = 1;
		def eff__4 = push_u32(arg__5);
		def arg__3 : u32 = 2;
		def eff__2 = push_u32(arg__3);
	} else {
		def arg__9 : u32 = 3;
		def eff__8 = push_u32(arg__9);
		def arg__7 : u32 = 4;
		def eff__6 = push_u32(arg__7);
	}
// phis: 
} else {
	if (q) {
		def arg__14 : u32 = 5;
		def eff__13 = push_u32(arg__14);
		def arg__12 : u32 = 6;
		def eff__11 = push_u32(arg__12);
	} else {
		def arg__18 : u32 = 7;
		def eff__17 = push_u32(arg__18);
		def arg__16 : u32 = 8;
		def eff__15 = push_u32(arg__16);
	}
// phis: 
}
// phis: 
</pre>`;
window.traces["SPLIT_BRANCHES"]["scheduler_ssad_pretty"] = ''
window.traces["SPLIT_BRANCHES"]["scheduler_ssad_pretty"] += `<pre class=''>def c1 = pop_u32();
if (u32.!=(c1, 0)) {
	if (u32.==(c1, 2)) {
		push_u32(1);
		push_u32(2);
	} else {
		push_u32(3);
		push_u32(4);
	}
} else {
	if (u32.==(c1, 2)) {
		push_u32(5);
		push_u32(6);
	} else {
		push_u32(7);
		push_u32(8);
	}
}
</pre>`;
window.traces["SPLIT_BRANCHES"]["unLEM"] = ''
window.traces["SPLIT_BRANCHES"]["unLEM"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	31 -. Stack .-> 1
	31{{"sea__25 Sϕ Stack "}}
	34 --> 31
	44 --> 31
	35 --> 31
	35{{"innerPhi__35 Sϕ Stack "}}
	32 --> 35
	30 --> 35
	20 --> 35
	20{{"sea__23 Sϕ Stack "}}
	47 --> 20
	57 --> 20
	53 --> 20
	53{{"innerPhi__53 Sϕ Stack "}}
	45 --> 53
	19 --> 53
	15 --> 53
	15["eff__15 push_u32"]
	14 --> 15
	13 -. Stack .-> 15
	13["eff__17 push_u32"]
	12 --> 13
	3 -. Stack .-> 13
	3["c1 pop_u32"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	12["arg__18 7"]
	14["arg__16 8"]
	19["eff__11 push_u32"]
	18 --> 19
	17 -. Stack .-> 19
	17["eff__13 push_u32"]
	16 --> 17
	3 -. Stack .-> 17
	16["arg__14 5"]
	18["arg__12 6"]
	45["mt__45 U32_maybeTrue"]
	9 --> 45
	9["q u32.=="]
	3 --> 9
	7 --> 9
	7["arg__20 2"]
	57["eff_push__57 push_u32"]
	56 --> 57
	55 -. Stack .-> 57
	55["eff_push__55 push_u32"]
	54 --> 55
	3 -. Stack .-> 55
	54["merge__54 merge_u"]
	16 --> 54
	12 --> 54
	56["merge__56 merge_u"]
	18 --> 56
	14 --> 56
	47["mb__47 bool.&&"]
	45 --> 47
	46 --> 47
	46["mf__46 U32_maybeFalse"]
	9 --> 46
	30{{"sea__24 Sϕ Stack "}}
	47 --> 30
	52 --> 30
	48 --> 30
	48{{"innerPhi__48 Sϕ Stack "}}
	45 --> 48
	29 --> 48
	25 --> 48
	25["eff__6 push_u32"]
	24 --> 25
	23 -. Stack .-> 25
	23["eff__8 push_u32"]
	22 --> 23
	3 -. Stack .-> 23
	22["arg__9 3"]
	24["arg__7 4"]
	29["eff__2 push_u32"]
	28 --> 29
	27 -. Stack .-> 29
	27["eff__4 push_u32"]
	26 --> 27
	3 -. Stack .-> 27
	26["arg__5 1"]
	28["arg__3 2"]
	52["eff_push__52 push_u32"]
	51 --> 52
	50 -. Stack .-> 52
	50["eff_push__50 push_u32"]
	49 --> 50
	3 -. Stack .-> 50
	49["merge__49 merge_u"]
	26 --> 49
	22 --> 49
	51["merge__51 merge_u"]
	28 --> 51
	24 --> 51
	32["mt__32 U32_maybeTrue"]
	6 --> 32
	6["p u32.!="]
	3 --> 6
	4 --> 6
	4["arg__22 0"]
	44{{"merged_phi__44 Sϕ Stack "}}
	9 --> 44
	39 --> 44
	43 --> 44
	43["eff_push__43 push_u32"]
	42 --> 43
	41 -. Stack .-> 43
	41["eff_push__41 push_u32"]
	40 --> 41
	3 -. Stack .-> 41
	40["merge__40 merge_u"]
	22 --> 40
	12 --> 40
	42["merge__42 merge_u"]
	24 --> 42
	14 --> 42
	39["eff_push__39 push_u32"]
	38 --> 39
	37 -. Stack .-> 39
	37["eff_push__37 push_u32"]
	36 --> 37
	3 -. Stack .-> 37
	36["merge__36 merge_u"]
	26 --> 36
	16 --> 36
	38["merge__38 merge_u"]
	28 --> 38
	18 --> 38
	34["mb__34 bool.&&"]
	32 --> 34
	33 --> 34
	33["mf__33 U32_maybeFalse"]
	6 --> 33
</pre>`;
window.traces["SPLIT_BRANCHES_ul"] = {}
window.traces["SPLIT_BRANCHES_ul"]["scheduler_start"] = ''
window.traces["SPLIT_BRANCHES_ul"]["scheduler_start"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	31 -. Stack .-> 1
	31{{"sea__25 Sϕ Stack "}}
	34 --> 31
	58 --> 31
	59 --> 31
	59["mv_f__59 |False|  [bool.&& [mb__34]]"]
	34 --> 59
	35 -. Stack .-> 59
	35{{"innerPhi__35 Sϕ Stack "}}
	32 --> 35
	62 --> 35
	63 --> 35
	63["mv_f__63 |False|  [U32_maybeTrue [mt__32]]"]
	32 --> 63
	20 -. Stack .-> 63
	20{{"sea__23 Sϕ Stack "}}
	47 --> 20
	66 --> 20
	67 --> 20
	67["mv_f__67 |False|  [bool.&& [mb__47]]"]
	47 --> 67
	53 -. Stack .-> 67
	53{{"innerPhi__53 Sϕ Stack "}}
	45 --> 53
	70 --> 53
	71 --> 53
	71["mv_f__71 |False|  [U32_maybeTrue [mt__45]]"]
	45 --> 71
	15 -. Stack .-> 71
	15["eff__15 push_u32"]
	14 --> 15
	13 -. Stack .-> 15
	13["eff__17 push_u32"]
	12 --> 13
	3 -. Stack .-> 13
	3["c1 pop_u32"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	12["arg__18 7"]
	14["arg__16 8"]
	45["mt__45 U32_maybeTrue"]
	9 --> 45
	9["q u32.=="]
	3 --> 9
	7 --> 9
	7["arg__20 2"]
	70["mv_t__70 |True|  [U32_maybeTrue [mt__45]]"]
	45 --> 70
	19 -. Stack .-> 70
	19["eff__11 push_u32"]
	18 --> 19
	17 -. Stack .-> 19
	17["eff__13 push_u32"]
	16 --> 17
	3 -. Stack .-> 17
	16["arg__14 5"]
	18["arg__12 6"]
	47["mb__47 bool.&&"]
	45 --> 47
	46 --> 47
	46["mf__46 U32_maybeFalse"]
	9 --> 46
	66["mv_t__66 |True|  [bool.&& [mb__47]]"]
	47 --> 66
	57 -. Stack .-> 66
	57["eff_push__57 push_u32"]
	56 --> 57
	55 -. Stack .-> 57
	55["eff_push__55 push_u32"]
	54 --> 55
	3 -. Stack .-> 55
	54["merge__54 merge_u"]
	16 --> 54
	12 --> 54
	56["merge__56 merge_u"]
	18 --> 56
	14 --> 56
	32["mt__32 U32_maybeTrue"]
	6 --> 32
	6["p u32.!="]
	3 --> 6
	4 --> 6
	4["arg__22 0"]
	62["mv_t__62 |True|  [U32_maybeTrue [mt__32]]"]
	32 --> 62
	30 -. Stack .-> 62
	30{{"sea__24 Sϕ Stack "}}
	47 --> 30
	64 --> 30
	65 --> 30
	65["mv_f__65 |False|  [bool.&& [mb__47]]"]
	47 --> 65
	48 -. Stack .-> 65
	48{{"innerPhi__48 Sϕ Stack "}}
	45 --> 48
	68 --> 48
	69 --> 48
	69["mv_f__69 |False|  [U32_maybeTrue [mt__45]]"]
	45 --> 69
	25 -. Stack .-> 69
	25["eff__6 push_u32"]
	24 --> 25
	23 -. Stack .-> 25
	23["eff__8 push_u32"]
	22 --> 23
	3 -. Stack .-> 23
	22["arg__9 3"]
	24["arg__7 4"]
	68["mv_t__68 |True|  [U32_maybeTrue [mt__45]]"]
	45 --> 68
	29 -. Stack .-> 68
	29["eff__2 push_u32"]
	28 --> 29
	27 -. Stack .-> 29
	27["eff__4 push_u32"]
	26 --> 27
	3 -. Stack .-> 27
	26["arg__5 1"]
	28["arg__3 2"]
	64["mv_t__64 |True|  [bool.&& [mb__47]]"]
	47 --> 64
	52 -. Stack .-> 64
	52["eff_push__52 push_u32"]
	51 --> 52
	50 -. Stack .-> 52
	50["eff_push__50 push_u32"]
	49 --> 50
	3 -. Stack .-> 50
	49["merge__49 merge_u"]
	26 --> 49
	22 --> 49
	51["merge__51 merge_u"]
	28 --> 51
	24 --> 51
	34["mb__34 bool.&&"]
	32 --> 34
	33 --> 34
	33["mf__33 U32_maybeFalse"]
	6 --> 33
	58["mv_t__58 |True|  [bool.&& [mb__34]]"]
	34 --> 58
	44 -. Stack .-> 58
	44{{"merged_phi__44 Sϕ Stack "}}
	9 --> 44
	60 --> 44
	61 --> 44
	61["mv_f__61 |False|  [u32.== [q]]"]
	9 --> 61
	43 -. Stack .-> 61
	43["eff_push__43 push_u32"]
	42 --> 43
	41 -. Stack .-> 43
	41["eff_push__41 push_u32"]
	40 --> 41
	3 -. Stack .-> 41
	40["merge__40 merge_u"]
	22 --> 40
	12 --> 40
	42["merge__42 merge_u"]
	24 --> 42
	14 --> 42
	60["mv_t__60 |True|  [u32.== [q]]"]
	9 --> 60
	39 -. Stack .-> 60
	39["eff_push__39 push_u32"]
	38 --> 39
	37 -. Stack .-> 39
	37["eff_push__37 push_u32"]
	36 --> 37
	3 -. Stack .-> 37
	36["merge__36 merge_u"]
	26 --> 36
	16 --> 36
	38["merge__38 merge_u"]
	28 --> 38
	18 --> 38
</pre>`;
window.traces["SPLIT_BRANCHES_ul"]["untangled"] = ''
window.traces["SPLIT_BRANCHES_ul"]["untangled"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	31 -. Stack .-> 1
	31{{"sea__25 Sϕ Stack "}}
	34 --> 31
	58 --> 31
	59 --> 31
	59["mv_f__59 |False|  [bool.&& [mb__34]]"]
	34 --> 59
	35 -. Stack .-> 59
	35{{"innerPhi__35 Sϕ Stack "}}
	32 --> 35
	62 --> 35
	63 --> 35
	63["mv_f__63 |False|  [U32_maybeTrue [mt__32]]"]
	32 --> 63
	20 -. Stack .-> 63
	20{{"sea__23 Sϕ Stack "}}
	47 --> 20
	66 --> 20
	67 --> 20
	67["mv_f__67 |False|  [bool.&& [mb__47]]"]
	47 --> 67
	53 -. Stack .-> 67
	53{{"innerPhi__53 Sϕ Stack "}}
	45 --> 53
	70 --> 53
	71 --> 53
	71["mv_f__71 |False|  [U32_maybeTrue [mt__45]]"]
	45 --> 71
	15 -. Stack .-> 71
	15["eff__15 push_u32"]
	81 --> 15
	13 -. Stack .-> 15
	13["eff__17 push_u32"]
	80 --> 13
	3 -. Stack .-> 13
	3["c1 pop_u32"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	80["arg__18__72__80 7"]
	81["arg__16__73__81 8"]
	45["mt__45 U32_maybeTrue"]
	9 --> 45
	9["q u32.=="]
	3 --> 9
	7 --> 9
	7["arg__20 2"]
	70["mv_t__70 |True|  [U32_maybeTrue [mt__45]]"]
	45 --> 70
	19 -. Stack .-> 70
	19["eff__11 push_u32"]
	83 --> 19
	17 -. Stack .-> 19
	17["eff__13 push_u32"]
	82 --> 17
	3 -. Stack .-> 17
	82["arg__14__74__82 5"]
	83["arg__12__75__83 6"]
	47["mb__47 bool.&&"]
	45 --> 47
	46 --> 47
	46["mf__46 U32_maybeFalse"]
	9 --> 46
	66["mv_t__66 |True|  [bool.&& [mb__47]]"]
	47 --> 66
	57 -. Stack .-> 66
	57["eff_push__57 push_u32"]
	56 --> 57
	55 -. Stack .-> 57
	55["eff_push__55 push_u32"]
	54 --> 55
	3 -. Stack .-> 55
	54["merge__54 merge_u"]
	74 --> 54
	72 --> 54
	72["arg__18__72 7"]
	74["arg__14__74 5"]
	56["merge__56 merge_u"]
	75 --> 56
	73 --> 56
	73["arg__16__73 8"]
	75["arg__12__75 6"]
	32["mt__32 U32_maybeTrue"]
	6 --> 32
	6["p u32.!="]
	3 --> 6
	4 --> 6
	4["arg__22 0"]
	62["mv_t__62 |True|  [U32_maybeTrue [mt__32]]"]
	32 --> 62
	30 -. Stack .-> 62
	30{{"sea__24 Sϕ Stack "}}
	47 --> 30
	64 --> 30
	65 --> 30
	65["mv_f__65 |False|  [bool.&& [mb__47]]"]
	47 --> 65
	48 -. Stack .-> 65
	48{{"innerPhi__48 Sϕ Stack "}}
	45 --> 48
	68 --> 48
	69 --> 48
	69["mv_f__69 |False|  [U32_maybeTrue [mt__45]]"]
	45 --> 69
	25 -. Stack .-> 69
	25["eff__6 push_u32"]
	85 --> 25
	23 -. Stack .-> 25
	23["eff__8 push_u32"]
	84 --> 23
	3 -. Stack .-> 23
	84["arg__9__76__84 3"]
	85["arg__7__77__85 4"]
	68["mv_t__68 |True|  [U32_maybeTrue [mt__45]]"]
	45 --> 68
	29 -. Stack .-> 68
	29["eff__2 push_u32"]
	87 --> 29
	27 -. Stack .-> 29
	27["eff__4 push_u32"]
	86 --> 27
	3 -. Stack .-> 27
	86["arg__5__78__86 1"]
	87["arg__3__79__87 2"]
	64["mv_t__64 |True|  [bool.&& [mb__47]]"]
	47 --> 64
	52 -. Stack .-> 64
	52["eff_push__52 push_u32"]
	51 --> 52
	50 -. Stack .-> 52
	50["eff_push__50 push_u32"]
	49 --> 50
	3 -. Stack .-> 50
	49["merge__49 merge_u"]
	78 --> 49
	76 --> 49
	76["arg__9__76 3"]
	78["arg__5__78 1"]
	51["merge__51 merge_u"]
	79 --> 51
	77 --> 51
	77["arg__7__77 4"]
	79["arg__3__79 2"]
	34["mb__34 bool.&&"]
	32 --> 34
	33 --> 34
	33["mf__33 U32_maybeFalse"]
	6 --> 33
	58["mv_t__58 |True|  [bool.&& [mb__34]]"]
	34 --> 58
	44 -. Stack .-> 58
	44{{"merged_phi__44 Sϕ Stack "}}
	9 --> 44
	60 --> 44
	61 --> 44
	61["mv_f__61 |False|  [u32.== [q]]"]
	9 --> 61
	43 -. Stack .-> 61
	43["eff_push__43 push_u32"]
	42 --> 43
	41 -. Stack .-> 43
	41["eff_push__41 push_u32"]
	40 --> 41
	3 -. Stack .-> 41
	40["merge__40 merge_u"]
	22 --> 40
	12 --> 40
	12["arg__18 7"]
	22["arg__9 3"]
	42["merge__42 merge_u"]
	24 --> 42
	14 --> 42
	14["arg__16 8"]
	24["arg__7 4"]
	60["mv_t__60 |True|  [u32.== [q]]"]
	9 --> 60
	39 -. Stack .-> 60
	39["eff_push__39 push_u32"]
	38 --> 39
	37 -. Stack .-> 39
	37["eff_push__37 push_u32"]
	36 --> 37
	3 -. Stack .-> 37
	36["merge__36 merge_u"]
	26 --> 36
	16 --> 36
	16["arg__14 5"]
	26["arg__5 1"]
	38["merge__38 merge_u"]
	28 --> 38
	18 --> 38
	18["arg__12 6"]
	28["arg__3 2"]
</pre>`;
window.traces["SPLIT_BRANCHES"]["unlem_scheduler"] = ''
window.traces["SPLIT_BRANCHES"]["unlem_scheduler"] += `<pre class='graph'>graph TD
subgraph block_22["Block 22"]
	direction TB
	b22_1[\\"Finish"/]
end
phi_52 --> block_22
subgraph phi_52["Phi 52"]
	p52_31{{"sea__25 Sϕ Stack "}}
end
block_53 --> phi_52
block_54 --> phi_52
subgraph block_53["Block 53"]
	direction TB
	b53_58["mv_t__58 |True|  [bool.&& [mb__34]]"]
end
phi_57 --> block_53
subgraph phi_57["Phi 57"]
	p57_44{{"merged_phi__44 Sϕ Stack "}}
end
block_58 --> phi_57
block_59 --> phi_57
subgraph block_58["Block 58"]
	direction TB
	b58_16["arg__14 5"]
	b58_26["arg__5 1"]
	b58_36["merge__36 merge_u"]
	b58_18["arg__12 6"]
	b58_28["arg__3 2"]
	b58_37["eff_push__37 push_u32"]
	b58_38["merge__38 merge_u"]
	b58_39["eff_push__39 push_u32"]
	b58_60["mv_t__60 |True|  [u32.== [q]]"]
	b58_16 --> b58_26
	b58_26 --> b58_36
	b58_36 --> b58_18
	b58_18 --> b58_28
	b58_28 --> b58_37
	b58_37 --> b58_38
	b58_38 --> b58_39
	b58_39 --> b58_60
end
branch_56 --> block_58
subgraph branch_56["Branch 56"]
	br56_9["q u32.=="]

end
branch_51 --> branch_56
subgraph branch_51["Branch 51"]
	br51_34["mb__34 bool.&&"]

end
block_55 --> branch_51
subgraph block_55["Block 55"]
	direction TB
	b55_0[/"Start"\\]
	b55_3["c1 pop_u32"]
	b55_7["arg__20 2"]
	b55_9["q u32.=="]
	b55_4["arg__22 0"]
	b55_6["p u32.!="]
	b55_32["mt__32 U32_maybeTrue"]
	b55_33["mf__33 U32_maybeFalse"]
	b55_34["mb__34 bool.&&"]
	b55_0 --> b55_3
	b55_3 --> b55_7
	b55_7 --> b55_9
	b55_9 --> b55_4
	b55_4 --> b55_6
	b55_6 --> b55_32
	b55_32 --> b55_33
	b55_33 --> b55_34
end
subgraph block_59["Block 59"]
	direction TB
	b59_12["arg__18 7"]
	b59_22["arg__9 3"]
	b59_40["merge__40 merge_u"]
	b59_14["arg__16 8"]
	b59_24["arg__7 4"]
	b59_41["eff_push__41 push_u32"]
	b59_42["merge__42 merge_u"]
	b59_43["eff_push__43 push_u32"]
	b59_61["mv_f__61 |False|  [u32.== [q]]"]
	b59_12 --> b59_22
	b59_22 --> b59_40
	b59_40 --> b59_14
	b59_14 --> b59_24
	b59_24 --> b59_41
	b59_41 --> b59_42
	b59_42 --> b59_43
	b59_43 --> b59_61
end
branch_56 --> block_59
subgraph block_54["Block 54"]
	direction TB
	b54_59["mv_f__59 |False|  [bool.&& [mb__34]]"]
end
phi_61 --> block_54
subgraph phi_61["Phi 61"]
	p61_35{{"innerPhi__35 Sϕ Stack "}}
end
block_62 --> phi_61
block_63 --> phi_61
subgraph block_62["Block 62"]
	direction TB
	b62_62["mv_t__62 |True|  [U32_maybeTrue [mt__32]]"]
end
phi_65 --> block_62
subgraph phi_65["Phi 65"]
	p65_30{{"sea__24 Sϕ Stack "}}
end
block_66 --> phi_65
block_67 --> phi_65
subgraph block_66["Block 66"]
	direction TB
	b66_76["arg__9__76 3"]
	b66_78["arg__5__78 1"]
	b66_49["merge__49 merge_u"]
	b66_77["arg__7__77 4"]
	b66_79["arg__3__79 2"]
	b66_50["eff_push__50 push_u32"]
	b66_51["merge__51 merge_u"]
	b66_52["eff_push__52 push_u32"]
	b66_64["mv_t__64 |True|  [bool.&& [mb__47]]"]
	b66_76 --> b66_78
	b66_78 --> b66_49
	b66_49 --> b66_77
	b66_77 --> b66_79
	b66_79 --> b66_50
	b66_50 --> b66_51
	b66_51 --> b66_52
	b66_52 --> b66_64
end
branch_64 --> block_66
subgraph branch_64["Branch 64"]
	br64_47["mb__47 bool.&&"]

end
branch_60 --> branch_64
subgraph branch_60["Branch 60"]
	br60_32["mt__32 U32_maybeTrue"]

end
block_72 --> branch_60
subgraph block_72["Block 72"]
	direction TB
	b72_45["mt__45 U32_maybeTrue"]
	b72_46["mf__46 U32_maybeFalse"]
	b72_47["mb__47 bool.&&"]
	b72_45 --> b72_46
	b72_46 --> b72_47
end
branch_51 --> block_72
subgraph block_67["Block 67"]
	direction TB
	b67_65["mv_f__65 |False|  [bool.&& [mb__47]]"]
end
phi_74 --> block_67
subgraph phi_74["Phi 74"]
	p74_48{{"innerPhi__48 Sϕ Stack "}}
end
block_75 --> phi_74
block_76 --> phi_74
subgraph block_75["Block 75"]
	direction TB
	b75_86["arg__5__78__86 1"]
	b75_27["eff__4 push_u32"]
	b75_87["arg__3__79__87 2"]
	b75_29["eff__2 push_u32"]
	b75_68["mv_t__68 |True|  [U32_maybeTrue [mt__45]]"]
	b75_86 --> b75_27
	b75_27 --> b75_87
	b75_87 --> b75_29
	b75_29 --> b75_68
end
branch_73 --> block_75
subgraph branch_73["Branch 73"]
	br73_45["mt__45 U32_maybeTrue"]

end
branch_64 --> branch_73
subgraph block_76["Block 76"]
	direction TB
	b76_84["arg__9__76__84 3"]
	b76_23["eff__8 push_u32"]
	b76_85["arg__7__77__85 4"]
	b76_25["eff__6 push_u32"]
	b76_69["mv_f__69 |False|  [U32_maybeTrue [mt__45]]"]
	b76_84 --> b76_23
	b76_23 --> b76_85
	b76_85 --> b76_25
	b76_25 --> b76_69
end
branch_73 --> block_76
subgraph block_63["Block 63"]
	direction TB
	b63_63["mv_f__63 |False|  [U32_maybeTrue [mt__32]]"]
end
phi_69 --> block_63
subgraph phi_69["Phi 69"]
	p69_20{{"sea__23 Sϕ Stack "}}
end
block_70 --> phi_69
block_71 --> phi_69
subgraph block_70["Block 70"]
	direction TB
	b70_72["arg__18__72 7"]
	b70_74["arg__14__74 5"]
	b70_54["merge__54 merge_u"]
	b70_73["arg__16__73 8"]
	b70_75["arg__12__75 6"]
	b70_55["eff_push__55 push_u32"]
	b70_56["merge__56 merge_u"]
	b70_57["eff_push__57 push_u32"]
	b70_66["mv_t__66 |True|  [bool.&& [mb__47]]"]
	b70_72 --> b70_74
	b70_74 --> b70_54
	b70_54 --> b70_73
	b70_73 --> b70_75
	b70_75 --> b70_55
	b70_55 --> b70_56
	b70_56 --> b70_57
	b70_57 --> b70_66
end
branch_68 --> block_70
subgraph branch_68["Branch 68"]
	br68_47["mb__47 bool.&&"]

end
branch_60 --> branch_68
subgraph block_71["Block 71"]
	direction TB
	b71_67["mv_f__67 |False|  [bool.&& [mb__47]]"]
end
phi_78 --> block_71
subgraph phi_78["Phi 78"]
	p78_53{{"innerPhi__53 Sϕ Stack "}}
end
block_79 --> phi_78
block_80 --> phi_78
subgraph block_79["Block 79"]
	direction TB
	b79_82["arg__14__74__82 5"]
	b79_17["eff__13 push_u32"]
	b79_83["arg__12__75__83 6"]
	b79_19["eff__11 push_u32"]
	b79_70["mv_t__70 |True|  [U32_maybeTrue [mt__45]]"]
	b79_82 --> b79_17
	b79_17 --> b79_83
	b79_83 --> b79_19
	b79_19 --> b79_70
end
branch_77 --> block_79
subgraph branch_77["Branch 77"]
	br77_45["mt__45 U32_maybeTrue"]

end
branch_68 --> branch_77
subgraph block_80["Block 80"]
	direction TB
	b80_80["arg__18__72__80 7"]
	b80_13["eff__17 push_u32"]
	b80_81["arg__16__73__81 8"]
	b80_15["eff__15 push_u32"]
	b80_71["mv_f__71 |False|  [U32_maybeTrue [mt__45]]"]
	b80_80 --> b80_13
	b80_13 --> b80_81
	b80_81 --> b80_15
	b80_15 --> b80_71
end
branch_77 --> block_80

</pre>`;
window.traces["SPLIT_BRANCHES"]["unlem_scheduler_ssa"] = ''
window.traces["SPLIT_BRANCHES"]["unlem_scheduler_ssa"] += `<pre class=''>def c1 = pop_u32();
def arg__20 : u32 = 2;
def q = u32.==(c1, arg__20);
def arg__22 : u32 = 0;
def p = u32.!=(c1, arg__22);
def mt__32 = U32_maybeTrue(p);
def mf__33 = U32_maybeFalse(p);
def mb__34 = bool.&&(mt__32, mf__33);
if (mb__34) {
	if (q) {
		def arg__14 : u32 = 5;
		def arg__5 : u32 = 1;
		def merge__36 = merge_u(arg__5, arg__14);
		def arg__12 : u32 = 6;
		def arg__3 : u32 = 2;
		def eff_push__37 = push_u32(merge__36);
		def merge__38 = merge_u(arg__3, arg__12);
		def eff_push__39 = push_u32(merge__38);
	} else {
		def arg__18 : u32 = 7;
		def arg__9 : u32 = 3;
		def merge__40 = merge_u(arg__9, arg__18);
		def arg__16 : u32 = 8;
		def arg__7 : u32 = 4;
		def eff_push__41 = push_u32(merge__40);
		def merge__42 = merge_u(arg__7, arg__16);
		def eff_push__43 = push_u32(merge__42);
	}
// phis: 
} else {
	def mt__45 = U32_maybeTrue(q);
	def mf__46 = U32_maybeFalse(q);
	def mb__47 = bool.&&(mt__45, mf__46);
	if (mt__32) {
		if (mb__47) {
			def arg__9__76 : u32 = 3;
			def arg__9 = (arg__9__76);
			def arg__5__78 : u32 = 1;
			def arg__5 = (arg__5__78);
			def merge__49 = merge_u(arg__5__78, arg__9__76);
			def arg__7__77 : u32 = 4;
			def arg__7 = (arg__7__77);
			def arg__3__79 : u32 = 2;
			def arg__3 = (arg__3__79);
			def eff_push__50 = push_u32(merge__49);
			def merge__51 = merge_u(arg__3__79, arg__7__77);
			def eff_push__52 = push_u32(merge__51);
		} else {
			if (mt__45) {
				def arg__5__78__86 : u32 = 1;
				def eff__4 = push_u32(arg__5__78__86);
				def arg__3__79__87 : u32 = 2;
				def eff__2 = push_u32(arg__3__79__87);
			} else {
				def arg__9__76__84 : u32 = 3;
				def eff__8 = push_u32(arg__9__76__84);
				def arg__7__77__85 : u32 = 4;
				def eff__6 = push_u32(arg__7__77__85);
			}
// phis: 
		}
// phis: 
	} else {
		if (mb__47) {
			def arg__18__72 : u32 = 7;
			def arg__18 = (arg__18__72);
			def arg__14__74 : u32 = 5;
			def arg__14 = (arg__14__74);
			def merge__54 = merge_u(arg__14__74, arg__18__72);
			def arg__16__73 : u32 = 8;
			def arg__16 = (arg__16__73);
			def arg__12__75 : u32 = 6;
			def arg__12 = (arg__12__75);
			def eff_push__55 = push_u32(merge__54);
			def merge__56 = merge_u(arg__12__75, arg__16__73);
			def eff_push__57 = push_u32(merge__56);
		} else {
			if (mt__45) {
				def arg__14__74__82 : u32 = 5;
				def eff__13 = push_u32(arg__14__74__82);
				def arg__12__75__83 : u32 = 6;
				def eff__11 = push_u32(arg__12__75__83);
			} else {
				def arg__18__72__80 : u32 = 7;
				def eff__17 = push_u32(arg__18__72__80);
				def arg__16__73__81 : u32 = 8;
				def eff__15 = push_u32(arg__16__73__81);
			}
// phis: 
		}
// phis: 
	}
// phis: 
}
// phis: 
</pre>`;
window.traces["SPLIT_BRANCHES"]["unlem_scheduler_ssa_pretty"] = ''
window.traces["SPLIT_BRANCHES"]["unlem_scheduler_ssa_pretty"] += `<pre class=''>def c1 = pop_u32();
def mt = U32_maybeTrue(u32.!=(c1, 0));
def mf = U32_maybeFalse(u32.!=(c1, 0));
if (bool.&&(mt, mf)) {
	if (u32.==(c1, 2)) {
		push_u32(merge_u(1, 5));
		push_u32(merge_u(2, 6));
	} else {
		push_u32(merge_u(3, 7));
		push_u32(merge_u(4, 8));
	}
} else {
	def mt1 = U32_maybeTrue(u32.==(c1, 2));
	def mf1 = U32_maybeFalse(u32.==(c1, 2));
	if (mt) {
		if (bool.&&(mt1, mf1)) {
			push_u32(merge_u(1, 3));
			push_u32(merge_u(2, 4));
		} else {
			if (mt1) {
				push_u32(1);
				push_u32(2);
			} else {
				push_u32(3);
				push_u32(4);
			}
		}
	} else {
		if (bool.&&(mt1, mf1)) {
			push_u32(merge_u(5, 7));
			push_u32(merge_u(6, 8));
		} else {
			if (mt1) {
				push_u32(5);
				push_u32(6);
			} else {
				push_u32(7);
				push_u32(8);
			}
		}
	}
}
</pre>`;
window.traces["SPLIT_BRANCHES_PHI"] = {}
window.traces["SPLIT_BRANCHES_PHI"]["parsed"] = ''
window.traces["SPLIT_BRANCHES_PHI"]["parsed"] += `<pre class=''>def c1 = pop_u32();
def r3 : u32 = 0;
def r4 : u32 = 1;
def arg__106 : u32 = 0;
def arg__105 = (c1);
def p = u32.!=(arg__105, arg__106);
def arg__104 : u32 = 2;
def arg__103 = (c1);
def q = u32.==(arg__103, arg__104);
def cond__92 = (p);
if (cond__92) {
	def cond__93 = (q);
	if (cond__93) {
		def r3__95 : u32 = 1;
		def r4__94 : u32 = 2;
	} else {
		def r3__97 : u32 = 3;
		def r4__96 : u32 = 4;
	}
// phis: r4 <- r4__94; r4 <- r4__96; r3 <- r3__95; r3 <- r3__97; 
} else {
	def cond__98 = (q);
	if (cond__98) {
		def r3__100 : u32 = 5;
		def r4__99 : u32 = 6;
	} else {
		def r3__102 : u32 = 6;
		def r4__101 : u32 = 7;
	}
// phis: r4 <- r4__99; r4 <- r4__101; r3 <- r3__100; r3 <- r3__102; 
}
// phis: r4 <- r4; r4 <- r4; r3 <- r3; r3 <- r3; 
def arg__91 = (r3);
def eff__90 = push_u32(arg__91);
def arg__89 = (r4);
def eff__88 = push_u32(arg__89);
</pre>`;
window.traces["SPLIT_BRANCHES_PHI"]["initial_pretty"] = ''
window.traces["SPLIT_BRANCHES_PHI"]["initial_pretty"] += `<pre class=''>def c1 = pop_u32();
var r3 = 0;
var r4 = 1;
if ((u32.!=((c1), 0))) {
	if ((u32.==((c1), 2))) {
		r3 = 1;
		r4 = 2;
	} else {
		r3 = 3;
		r4 = 4;
	}
} else {
	if ((u32.==((c1), 2))) {
		r3 = 5;
		r4 = 6;
	} else {
		r3 = 6;
		r4 = 7;
	}
}
push_u32((r3));
push_u32((r4));
</pre>`;
window.traces["SPLIT_BRANCHES_PHI"]["raw"] = ''
window.traces["SPLIT_BRANCHES_PHI"]["raw"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	32 -. Stack .-> 1
	32["eff__88 push_u32"]
	27 --> 32
	30 -. Stack .-> 32
	30["eff__90 push_u32"]
	28 --> 30
	3 -. Stack .-> 30
	3["c1 pop_u32"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	28{"r3 ϕ"}
	8 --> 28
	26 --> 28
	19 --> 28
	19{"r3 ϕ"}
	11 --> 19
	16 --> 19
	14 --> 19
	14["r3__102 6"]
	16["r3__100 5"]
	11["q u32.=="]
	3 --> 11
	9 --> 11
	9["arg__104 2"]
	26{"r3 ϕ"}
	11 --> 26
	23 --> 26
	21 --> 26
	21["r3__97 3"]
	23["r3__95 1"]
	8["p u32.!="]
	3 --> 8
	6 --> 8
	6["arg__106 0"]
	27{"r4 ϕ"}
	8 --> 27
	25 --> 27
	18 --> 27
	18{"r4 ϕ"}
	11 --> 18
	17 --> 18
	15 --> 18
	15["r4__101 7"]
	17["r4__99 6"]
	25{"r4 ϕ"}
	11 --> 25
	24 --> 25
	22 --> 25
	22["r4__96 4"]
	24["r4__94 2"]
</pre>`;
window.traces["SPLIT_BRANCHES_PHI"]["scheduler_start"] = ''
window.traces["SPLIT_BRANCHES_PHI"]["scheduler_start"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	32 -. Stack .-> 1
	32["eff__88 push_u32"]
	27 --> 32
	30 -. Stack .-> 32
	30["eff__90 push_u32"]
	28 --> 30
	3 -. Stack .-> 30
	3["c1 pop_u32"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	28{"r3 ϕ"}
	8 --> 28
	39 --> 28
	40 --> 28
	40["mv_f__114 |False|  [u32.!= [p]]"]
	8 --> 40
	19 --> 40
	19{"r3 ϕ"}
	11 --> 19
	43 --> 19
	44 --> 19
	44["mv_f__118 |False|  [u32.== [q]]"]
	11 --> 44
	14 --> 44
	14["r3__102 6"]
	11["q u32.=="]
	3 --> 11
	9 --> 11
	9["arg__104 2"]
	43["mv_t__117 |True|  [u32.== [q]]"]
	11 --> 43
	16 --> 43
	16["r3__100 5"]
	8["p u32.!="]
	3 --> 8
	6 --> 8
	6["arg__106 0"]
	39["mv_t__113 |True|  [u32.!= [p]]"]
	8 --> 39
	26 --> 39
	26{"r3 ϕ"}
	11 --> 26
	41 --> 26
	42 --> 26
	42["mv_f__116 |False|  [u32.== [q]]"]
	11 --> 42
	21 --> 42
	21["r3__97 3"]
	41["mv_t__115 |True|  [u32.== [q]]"]
	11 --> 41
	23 --> 41
	23["r3__95 1"]
	27{"r4 ϕ"}
	8 --> 27
	33 --> 27
	34 --> 27
	34["mv_f__108 |False|  [u32.!= [p]]"]
	8 --> 34
	18 --> 34
	18{"r4 ϕ"}
	11 --> 18
	37 --> 18
	38 --> 18
	38["mv_f__112 |False|  [u32.== [q]]"]
	11 --> 38
	15 --> 38
	15["r4__101 7"]
	37["mv_t__111 |True|  [u32.== [q]]"]
	11 --> 37
	17 --> 37
	17["r4__99 6"]
	33["mv_t__107 |True|  [u32.!= [p]]"]
	8 --> 33
	25 --> 33
	25{"r4 ϕ"}
	11 --> 25
	35 --> 25
	36 --> 25
	36["mv_f__110 |False|  [u32.== [q]]"]
	11 --> 36
	22 --> 36
	22["r4__96 4"]
	35["mv_t__109 |True|  [u32.== [q]]"]
	11 --> 35
	24 --> 35
	24["r4__94 2"]
</pre>`;
window.traces["SPLIT_BRANCHES_PHI"]["untangled"] = ''
window.traces["SPLIT_BRANCHES_PHI"]["untangled"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	32 -. Stack .-> 1
	32["eff__88 push_u32"]
	27 --> 32
	30 -. Stack .-> 32
	30["eff__90 push_u32"]
	28 --> 30
	3 -. Stack .-> 30
	3["c1 pop_u32"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	28{"r3 ϕ"}
	8 --> 28
	39 --> 28
	40 --> 28
	40["mv_f__114 |False|  [u32.!= [p]]"]
	8 --> 40
	19 --> 40
	19{"r3 ϕ"}
	11 --> 19
	43 --> 19
	44 --> 19
	44["mv_f__118 |False|  [u32.== [q]]"]
	11 --> 44
	14 --> 44
	14["r3__102 6"]
	11["q u32.=="]
	3 --> 11
	9 --> 11
	9["arg__104 2"]
	43["mv_t__117 |True|  [u32.== [q]]"]
	11 --> 43
	16 --> 43
	16["r3__100 5"]
	8["p u32.!="]
	3 --> 8
	6 --> 8
	6["arg__106 0"]
	39["mv_t__113 |True|  [u32.!= [p]]"]
	8 --> 39
	26 --> 39
	26{"r3 ϕ"}
	11 --> 26
	41 --> 26
	42 --> 26
	42["mv_f__116 |False|  [u32.== [q]]"]
	11 --> 42
	21 --> 42
	21["r3__97 3"]
	41["mv_t__115 |True|  [u32.== [q]]"]
	11 --> 41
	23 --> 41
	23["r3__95 1"]
	27{"r4 ϕ"}
	8 --> 27
	33 --> 27
	34 --> 27
	34["mv_f__108 |False|  [u32.!= [p]]"]
	8 --> 34
	18 --> 34
	18{"r4 ϕ"}
	11 --> 18
	37 --> 18
	38 --> 18
	38["mv_f__112 |False|  [u32.== [q]]"]
	11 --> 38
	15 --> 38
	15["r4__101 7"]
	37["mv_t__111 |True|  [u32.== [q]]"]
	11 --> 37
	17 --> 37
	17["r4__99 6"]
	33["mv_t__107 |True|  [u32.!= [p]]"]
	8 --> 33
	25 --> 33
	25{"r4 ϕ"}
	11 --> 25
	35 --> 25
	36 --> 25
	36["mv_f__110 |False|  [u32.== [q]]"]
	11 --> 36
	22 --> 36
	22["r4__96 4"]
	35["mv_t__109 |True|  [u32.== [q]]"]
	11 --> 35
	24 --> 35
	24["r4__94 2"]
</pre>`;
window.traces["SPLIT_BRANCHES_PHI"]["schedulerMermaid"] = ''
window.traces["SPLIT_BRANCHES_PHI"]["schedulerMermaid"] += `<pre class='graph'>graph TD
subgraph block_81["Block 81"]
	direction TB
	b81_30["eff__90 push_u32"]
	b81_32["eff__88 push_u32"]
	b81_1[\\"Finish"/]
	b81_30 --> b81_32
	b81_32 --> b81_1
end
phi_90 --> block_81
subgraph phi_90["Phi 90"]
	p90_28{"r3 ϕ"}
	p90_27{"r4 ϕ"}
end
block_91 --> phi_90
block_92 --> phi_90
subgraph block_91["Block 91"]
	direction TB
	b91_39["mv_t__113 |True|  [u32.!= [p]]"]
	b91_33["mv_t__107 |True|  [u32.!= [p]]"]
	b91_39 --> b91_33
end
phi_95 --> block_91
subgraph phi_95["Phi 95"]
	p95_26{"r3 ϕ"}
	p95_25{"r4 ϕ"}
end
block_96 --> phi_95
block_97 --> phi_95
subgraph block_96["Block 96"]
	direction TB
	b96_23["r3__95 1"]
	b96_24["r4__94 2"]
	b96_41["mv_t__115 |True|  [u32.== [q]]"]
	b96_35["mv_t__109 |True|  [u32.== [q]]"]
	b96_23 --> b96_24
	b96_24 --> b96_41
	b96_41 --> b96_35
end
branch_94 --> block_96
subgraph branch_94["Branch 94"]
	br94_11["q u32.=="]

end
branch_89 --> branch_94
subgraph branch_89["Branch 89"]
	br89_8["p u32.!="]

end
block_93 --> branch_89
subgraph block_93["Block 93"]
	direction TB
	b93_0[/"Start"\\]
	b93_9["arg__104 2"]
	b93_3["c1 pop_u32"]
	b93_11["q u32.=="]
	b93_6["arg__106 0"]
	b93_8["p u32.!="]
	b93_0 --> b93_9
	b93_9 --> b93_3
	b93_3 --> b93_11
	b93_11 --> b93_6
	b93_6 --> b93_8
end
subgraph block_97["Block 97"]
	direction TB
	b97_21["r3__97 3"]
	b97_22["r4__96 4"]
	b97_42["mv_f__116 |False|  [u32.== [q]]"]
	b97_36["mv_f__110 |False|  [u32.== [q]]"]
	b97_21 --> b97_22
	b97_22 --> b97_42
	b97_42 --> b97_36
end
branch_94 --> block_97
subgraph block_92["Block 92"]
	direction TB
	b92_40["mv_f__114 |False|  [u32.!= [p]]"]
	b92_34["mv_f__108 |False|  [u32.!= [p]]"]
	b92_40 --> b92_34
end
phi_99 --> block_92
subgraph phi_99["Phi 99"]
	p99_19{"r3 ϕ"}
	p99_18{"r4 ϕ"}
end
block_100 --> phi_99
block_101 --> phi_99
subgraph block_100["Block 100"]
	direction TB
	b100_16["r3__100 5"]
	b100_17["r4__99 6"]
	b100_43["mv_t__117 |True|  [u32.== [q]]"]
	b100_37["mv_t__111 |True|  [u32.== [q]]"]
	b100_16 --> b100_17
	b100_17 --> b100_43
	b100_43 --> b100_37
end
branch_98 --> block_100
subgraph branch_98["Branch 98"]
	br98_11["q u32.=="]

end
branch_89 --> branch_98
subgraph block_101["Block 101"]
	direction TB
	b101_14["r3__102 6"]
	b101_15["r4__101 7"]
	b101_44["mv_f__118 |False|  [u32.== [q]]"]
	b101_38["mv_f__112 |False|  [u32.== [q]]"]
	b101_14 --> b101_15
	b101_15 --> b101_44
	b101_44 --> b101_38
end
branch_98 --> block_101

</pre>`;
window.traces["SPLIT_BRANCHES_PHI"]["scheduler_ssad"] = ''
window.traces["SPLIT_BRANCHES_PHI"]["scheduler_ssad"] += `<pre class=''>def arg__104 : u32 = 2;
def c1 = pop_u32();
def q = u32.==(c1, arg__104);
def arg__106 : u32 = 0;
def p = u32.!=(c1, arg__106);
if (p) {
	if (q) {
		def r3__95 : u32 = 1;
		def r4__94 : u32 = 2;
	} else {
		def r3__97 : u32 = 3;
		def r4__96 : u32 = 4;
	}
// phis: r3 <- r3__95; r3 <- r3__97; r4 <- r4__94; r4 <- r4__96; 
} else {
	if (q) {
		def r3__100 : u32 = 5;
		def r4__99 : u32 = 6;
	} else {
		def r3__102 : u32 = 6;
		def r4__101 : u32 = 7;
	}
// phis: r3 <- r3__100; r3 <- r3__102; r4 <- r4__99; r4 <- r4__101; 
}
// phis: r3 <- r3; r3 <- r3; r4 <- r4; r4 <- r4; 
def eff__90 = push_u32(r3);
def eff__88 = push_u32(r4);
</pre>`;
window.traces["SPLIT_BRANCHES_PHI"]["scheduler_ssad_pretty"] = ''
window.traces["SPLIT_BRANCHES_PHI"]["scheduler_ssad_pretty"] += `<pre class=''>def c1 = pop_u32();
var r3: u32;
var r4: u32;
if (u32.!=(c1, 0)) {
	if (u32.==(c1, 2)) {
		r3 = 1;
		r4 = 2;
	} else {
		r3 = 3;
		r4 = 4;
	}
} else {
	if (u32.==(c1, 2)) {
		r3 = 5;
		r4 = 6;
	} else {
		r3 = 6;
		r4 = 7;
	}
}
push_u32(r3);
push_u32(r4);
</pre>`;
window.traces["SPLIT_BRANCHES_PHI"]["unLEM"] = ''
window.traces["SPLIT_BRANCHES_PHI"]["unLEM"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	32 -. Stack .-> 1
	32["eff__88 push_u32"]
	27 --> 32
	30 -. Stack .-> 32
	30["eff__90 push_u32"]
	28 --> 30
	3 -. Stack .-> 30
	3["c1 pop_u32"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	28{"r3 ϕ"}
	35 --> 28
	46 --> 28
	45 --> 28
	45{"innerPhi__131 ϕ"}
	33 --> 45
	26 --> 45
	19 --> 45
	19{"r3 ϕ"}
	40 --> 19
	50 --> 19
	49 --> 19
	49{"innerPhi__135 ϕ"}
	38 --> 49
	16 --> 49
	14 --> 49
	14["r3__102 6"]
	16["r3__100 5"]
	38["mt__124 U32_maybeTrue"]
	11 --> 38
	11["q u32.=="]
	3 --> 11
	9 --> 11
	9["arg__104 2"]
	50["merge__136 merge"]
	16 --> 50
	14 --> 50
	40["mb__126 bool.&&"]
	38 --> 40
	39 --> 40
	39["mf__125 U32_maybeFalse"]
	11 --> 39
	26{"r3 ϕ"}
	40 --> 26
	48 --> 26
	47 --> 26
	47{"innerPhi__133 ϕ"}
	38 --> 47
	23 --> 47
	21 --> 47
	21["r3__97 3"]
	23["r3__95 1"]
	48["merge__134 merge"]
	23 --> 48
	21 --> 48
	33["mt__119 U32_maybeTrue"]
	8 --> 33
	8["p u32.!="]
	3 --> 8
	6 --> 8
	6["arg__106 0"]
	46["merge__132 merge"]
	26 --> 46
	19 --> 46
	35["mb__121 bool.&&"]
	33 --> 35
	34 --> 35
	34["mf__120 U32_maybeFalse"]
	8 --> 34
	27{"r4 ϕ"}
	35 --> 27
	37 --> 27
	36 --> 27
	36{"innerPhi__122 ϕ"}
	33 --> 36
	25 --> 36
	18 --> 36
	18{"r4 ϕ"}
	40 --> 18
	44 --> 18
	43 --> 18
	43{"innerPhi__129 ϕ"}
	38 --> 43
	17 --> 43
	15 --> 43
	15["r4__101 7"]
	17["r4__99 6"]
	44["merge__130 merge"]
	17 --> 44
	15 --> 44
	25{"r4 ϕ"}
	40 --> 25
	42 --> 25
	41 --> 25
	41{"innerPhi__127 ϕ"}
	38 --> 41
	24 --> 41
	22 --> 41
	22["r4__96 4"]
	24["r4__94 2"]
	42["merge__128 merge"]
	24 --> 42
	22 --> 42
	37["merge__123 merge"]
	25 --> 37
	18 --> 37
</pre>`;
window.traces["SPLIT_BRANCHES_PHI_ul"] = {}
window.traces["SPLIT_BRANCHES_PHI_ul"]["scheduler_start"] = ''
window.traces["SPLIT_BRANCHES_PHI_ul"]["scheduler_start"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	32 -. Stack .-> 1
	32["eff__88 push_u32"]
	27 --> 32
	30 -. Stack .-> 32
	30["eff__90 push_u32"]
	28 --> 30
	3 -. Stack .-> 30
	3["c1 pop_u32"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	28{"r3 ϕ"}
	35 --> 28
	55 --> 28
	56 --> 28
	56["mv_f__142 |False|  [bool.&& [mb__121]]"]
	35 --> 56
	45 --> 56
	45{"innerPhi__131 ϕ"}
	33 --> 45
	61 --> 45
	62 --> 45
	62["mv_f__148 |False|  [U32_maybeTrue [mt__119]]"]
	33 --> 62
	19 --> 62
	19{"r3 ϕ"}
	40 --> 19
	69 --> 19
	70 --> 19
	70["mv_f__156 |False|  [bool.&& [mb__126]]"]
	40 --> 70
	49 --> 70
	49{"innerPhi__135 ϕ"}
	38 --> 49
	73 --> 49
	74 --> 49
	74["mv_f__160 |False|  [U32_maybeTrue [mt__124]]"]
	38 --> 74
	14 --> 74
	14["r3__102 6"]
	38["mt__124 U32_maybeTrue"]
	11 --> 38
	11["q u32.=="]
	3 --> 11
	9 --> 11
	9["arg__104 2"]
	73["mv_t__159 |True|  [U32_maybeTrue [mt__124]]"]
	38 --> 73
	16 --> 73
	16["r3__100 5"]
	40["mb__126 bool.&&"]
	38 --> 40
	39 --> 40
	39["mf__125 U32_maybeFalse"]
	11 --> 39
	69["mv_t__155 |True|  [bool.&& [mb__126]]"]
	40 --> 69
	50 --> 69
	50["merge__136 merge"]
	16 --> 50
	14 --> 50
	33["mt__119 U32_maybeTrue"]
	8 --> 33
	8["p u32.!="]
	3 --> 8
	6 --> 8
	6["arg__106 0"]
	61["mv_t__147 |True|  [U32_maybeTrue [mt__119]]"]
	33 --> 61
	26 --> 61
	26{"r3 ϕ"}
	40 --> 26
	67 --> 26
	68 --> 26
	68["mv_f__154 |False|  [bool.&& [mb__126]]"]
	40 --> 68
	47 --> 68
	47{"innerPhi__133 ϕ"}
	38 --> 47
	71 --> 47
	72 --> 47
	72["mv_f__158 |False|  [U32_maybeTrue [mt__124]]"]
	38 --> 72
	21 --> 72
	21["r3__97 3"]
	71["mv_t__157 |True|  [U32_maybeTrue [mt__124]]"]
	38 --> 71
	23 --> 71
	23["r3__95 1"]
	67["mv_t__153 |True|  [bool.&& [mb__126]]"]
	40 --> 67
	48 --> 67
	48["merge__134 merge"]
	23 --> 48
	21 --> 48
	35["mb__121 bool.&&"]
	33 --> 35
	34 --> 35
	34["mf__120 U32_maybeFalse"]
	8 --> 34
	55["mv_t__141 |True|  [bool.&& [mb__121]]"]
	35 --> 55
	46 --> 55
	46["merge__132 merge"]
	26 --> 46
	19 --> 46
	27{"r4 ϕ"}
	35 --> 27
	51 --> 27
	52 --> 27
	52["mv_f__138 |False|  [bool.&& [mb__121]]"]
	35 --> 52
	36 --> 52
	36{"innerPhi__122 ϕ"}
	33 --> 36
	53 --> 36
	54 --> 36
	54["mv_f__140 |False|  [U32_maybeTrue [mt__119]]"]
	33 --> 54
	18 --> 54
	18{"r4 ϕ"}
	40 --> 18
	59 --> 18
	60 --> 18
	60["mv_f__146 |False|  [bool.&& [mb__126]]"]
	40 --> 60
	43 --> 60
	43{"innerPhi__129 ϕ"}
	38 --> 43
	65 --> 43
	66 --> 43
	66["mv_f__152 |False|  [U32_maybeTrue [mt__124]]"]
	38 --> 66
	15 --> 66
	15["r4__101 7"]
	65["mv_t__151 |True|  [U32_maybeTrue [mt__124]]"]
	38 --> 65
	17 --> 65
	17["r4__99 6"]
	59["mv_t__145 |True|  [bool.&& [mb__126]]"]
	40 --> 59
	44 --> 59
	44["merge__130 merge"]
	17 --> 44
	15 --> 44
	53["mv_t__139 |True|  [U32_maybeTrue [mt__119]]"]
	33 --> 53
	25 --> 53
	25{"r4 ϕ"}
	40 --> 25
	57 --> 25
	58 --> 25
	58["mv_f__144 |False|  [bool.&& [mb__126]]"]
	40 --> 58
	41 --> 58
	41{"innerPhi__127 ϕ"}
	38 --> 41
	63 --> 41
	64 --> 41
	64["mv_f__150 |False|  [U32_maybeTrue [mt__124]]"]
	38 --> 64
	22 --> 64
	22["r4__96 4"]
	63["mv_t__149 |True|  [U32_maybeTrue [mt__124]]"]
	38 --> 63
	24 --> 63
	24["r4__94 2"]
	57["mv_t__143 |True|  [bool.&& [mb__126]]"]
	40 --> 57
	42 --> 57
	42["merge__128 merge"]
	24 --> 42
	22 --> 42
	51["mv_t__137 |True|  [bool.&& [mb__121]]"]
	35 --> 51
	37 --> 51
	37["merge__123 merge"]
	25 --> 37
	18 --> 37
</pre>`;
window.traces["SPLIT_BRANCHES_PHI_ul"]["untangled"] = ''
window.traces["SPLIT_BRANCHES_PHI_ul"]["untangled"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	32 -. Stack .-> 1
	32["eff__88 push_u32"]
	27 --> 32
	30 -. Stack .-> 32
	30["eff__90 push_u32"]
	28 --> 30
	3 -. Stack .-> 30
	3["c1 pop_u32"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	28{"r3 ϕ"}
	35 --> 28
	55 --> 28
	56 --> 28
	56["mv_f__142 |False|  [bool.&& [mb__121]]"]
	35 --> 56
	45 --> 56
	45{"innerPhi__131 ϕ"}
	33 --> 45
	61 --> 45
	62 --> 45
	62["mv_f__148 |False|  [U32_maybeTrue [mt__119]]"]
	33 --> 62
	80 --> 62
	80{"r3__166 ϕ"}
	40 --> 80
	105 --> 80
	106 --> 80
	106["mv_f__156__192 |False|  [bool.&& [mb__126]]"]
	40 --> 106
	93 --> 106
	93{"innerPhi__135__179 ϕ"}
	38 --> 93
	109 --> 93
	110 --> 93
	110["mv_f__160__196 |False|  [U32_maybeTrue [mt__124]]"]
	38 --> 110
	119 --> 110
	119["r3__102__161__205 6"]
	38["mt__124 U32_maybeTrue"]
	11 --> 38
	11["q u32.=="]
	3 --> 11
	9 --> 11
	9["arg__104 2"]
	109["mv_t__159__195 |True|  [U32_maybeTrue [mt__124]]"]
	38 --> 109
	121 --> 109
	121["r3__100__163__207 5"]
	40["mb__126 bool.&&"]
	38 --> 40
	39 --> 40
	39["mf__125 U32_maybeFalse"]
	11 --> 39
	105["mv_t__155__191 |True|  [bool.&& [mb__126]]"]
	40 --> 105
	94 --> 105
	94["merge__136__180 merge"]
	77 --> 94
	75 --> 94
	75["r3__102__161 6"]
	77["r3__100__163 5"]
	33["mt__119 U32_maybeTrue"]
	8 --> 33
	8["p u32.!="]
	3 --> 8
	6 --> 8
	6["arg__106 0"]
	61["mv_t__147 |True|  [U32_maybeTrue [mt__119]]"]
	33 --> 61
	86 --> 61
	86{"r3__172 ϕ"}
	40 --> 86
	103 --> 86
	104 --> 86
	104["mv_f__154__190 |False|  [bool.&& [mb__126]]"]
	40 --> 104
	91 --> 104
	91{"innerPhi__133__177 ϕ"}
	38 --> 91
	107 --> 91
	108 --> 91
	108["mv_f__158__194 |False|  [U32_maybeTrue [mt__124]]"]
	38 --> 108
	123 --> 108
	123["r3__97__167__209 3"]
	107["mv_t__157__193 |True|  [U32_maybeTrue [mt__124]]"]
	38 --> 107
	125 --> 107
	125["r3__95__169__211 1"]
	103["mv_t__153__189 |True|  [bool.&& [mb__126]]"]
	40 --> 103
	92 --> 103
	92["merge__134__178 merge"]
	83 --> 92
	81 --> 92
	81["r3__97__167 3"]
	83["r3__95__169 1"]
	35["mb__121 bool.&&"]
	33 --> 35
	34 --> 35
	34["mf__120 U32_maybeFalse"]
	8 --> 34
	55["mv_t__141 |True|  [bool.&& [mb__121]]"]
	35 --> 55
	46 --> 55
	46["merge__132 merge"]
	26 --> 46
	19 --> 46
	19{"r3 ϕ"}
	40 --> 19
	69 --> 19
	70 --> 19
	70["mv_f__156 |False|  [bool.&& [mb__126]]"]
	40 --> 70
	49 --> 70
	49{"innerPhi__135 ϕ"}
	38 --> 49
	73 --> 49
	74 --> 49
	74["mv_f__160 |False|  [U32_maybeTrue [mt__124]]"]
	38 --> 74
	111 --> 74
	111["r3__102__197 6"]
	73["mv_t__159 |True|  [U32_maybeTrue [mt__124]]"]
	38 --> 73
	113 --> 73
	113["r3__100__199 5"]
	69["mv_t__155 |True|  [bool.&& [mb__126]]"]
	40 --> 69
	50 --> 69
	50["merge__136 merge"]
	16 --> 50
	14 --> 50
	14["r3__102 6"]
	16["r3__100 5"]
	26{"r3 ϕ"}
	40 --> 26
	67 --> 26
	68 --> 26
	68["mv_f__154 |False|  [bool.&& [mb__126]]"]
	40 --> 68
	47 --> 68
	47{"innerPhi__133 ϕ"}
	38 --> 47
	71 --> 47
	72 --> 47
	72["mv_f__158 |False|  [U32_maybeTrue [mt__124]]"]
	38 --> 72
	115 --> 72
	115["r3__97__201 3"]
	71["mv_t__157 |True|  [U32_maybeTrue [mt__124]]"]
	38 --> 71
	117 --> 71
	117["r3__95__203 1"]
	67["mv_t__153 |True|  [bool.&& [mb__126]]"]
	40 --> 67
	48 --> 67
	48["merge__134 merge"]
	23 --> 48
	21 --> 48
	21["r3__97 3"]
	23["r3__95 1"]
	27{"r4 ϕ"}
	35 --> 27
	51 --> 27
	52 --> 27
	52["mv_f__138 |False|  [bool.&& [mb__121]]"]
	35 --> 52
	36 --> 52
	36{"innerPhi__122 ϕ"}
	33 --> 36
	53 --> 36
	54 --> 36
	54["mv_f__140 |False|  [U32_maybeTrue [mt__119]]"]
	33 --> 54
	79 --> 54
	79{"r4__165 ϕ"}
	40 --> 79
	97 --> 79
	98 --> 79
	98["mv_f__146__184 |False|  [bool.&& [mb__126]]"]
	40 --> 98
	89 --> 98
	89{"innerPhi__129__175 ϕ"}
	38 --> 89
	101 --> 89
	102 --> 89
	102["mv_f__152__188 |False|  [U32_maybeTrue [mt__124]]"]
	38 --> 102
	120 --> 102
	120["r4__101__162__206 7"]
	101["mv_t__151__187 |True|  [U32_maybeTrue [mt__124]]"]
	38 --> 101
	122 --> 101
	122["r4__99__164__208 6"]
	97["mv_t__145__183 |True|  [bool.&& [mb__126]]"]
	40 --> 97
	90 --> 97
	90["merge__130__176 merge"]
	78 --> 90
	76 --> 90
	76["r4__101__162 7"]
	78["r4__99__164 6"]
	53["mv_t__139 |True|  [U32_maybeTrue [mt__119]]"]
	33 --> 53
	85 --> 53
	85{"r4__171 ϕ"}
	40 --> 85
	95 --> 85
	96 --> 85
	96["mv_f__144__182 |False|  [bool.&& [mb__126]]"]
	40 --> 96
	87 --> 96
	87{"innerPhi__127__173 ϕ"}
	38 --> 87
	99 --> 87
	100 --> 87
	100["mv_f__150__186 |False|  [U32_maybeTrue [mt__124]]"]
	38 --> 100
	124 --> 100
	124["r4__96__168__210 4"]
	99["mv_t__149__185 |True|  [U32_maybeTrue [mt__124]]"]
	38 --> 99
	126 --> 99
	126["r4__94__170__212 2"]
	95["mv_t__143__181 |True|  [bool.&& [mb__126]]"]
	40 --> 95
	88 --> 95
	88["merge__128__174 merge"]
	84 --> 88
	82 --> 88
	82["r4__96__168 4"]
	84["r4__94__170 2"]
	51["mv_t__137 |True|  [bool.&& [mb__121]]"]
	35 --> 51
	37 --> 51
	37["merge__123 merge"]
	25 --> 37
	18 --> 37
	18{"r4 ϕ"}
	40 --> 18
	59 --> 18
	60 --> 18
	60["mv_f__146 |False|  [bool.&& [mb__126]]"]
	40 --> 60
	43 --> 60
	43{"innerPhi__129 ϕ"}
	38 --> 43
	65 --> 43
	66 --> 43
	66["mv_f__152 |False|  [U32_maybeTrue [mt__124]]"]
	38 --> 66
	112 --> 66
	112["r4__101__198 7"]
	65["mv_t__151 |True|  [U32_maybeTrue [mt__124]]"]
	38 --> 65
	114 --> 65
	114["r4__99__200 6"]
	59["mv_t__145 |True|  [bool.&& [mb__126]]"]
	40 --> 59
	44 --> 59
	44["merge__130 merge"]
	17 --> 44
	15 --> 44
	15["r4__101 7"]
	17["r4__99 6"]
	25{"r4 ϕ"}
	40 --> 25
	57 --> 25
	58 --> 25
	58["mv_f__144 |False|  [bool.&& [mb__126]]"]
	40 --> 58
	41 --> 58
	41{"innerPhi__127 ϕ"}
	38 --> 41
	63 --> 41
	64 --> 41
	64["mv_f__150 |False|  [U32_maybeTrue [mt__124]]"]
	38 --> 64
	116 --> 64
	116["r4__96__202 4"]
	63["mv_t__149 |True|  [U32_maybeTrue [mt__124]]"]
	38 --> 63
	118 --> 63
	118["r4__94__204 2"]
	57["mv_t__143 |True|  [bool.&& [mb__126]]"]
	40 --> 57
	42 --> 57
	42["merge__128 merge"]
	24 --> 42
	22 --> 42
	22["r4__96 4"]
	24["r4__94 2"]
</pre>`;
window.traces["SPLIT_BRANCHES_PHI"]["unlem_scheduler"] = ''
window.traces["SPLIT_BRANCHES_PHI"]["unlem_scheduler"] += `<pre class='graph'>graph TD
subgraph block_102["Block 102"]
	direction TB
	b102_30["eff__90 push_u32"]
	b102_32["eff__88 push_u32"]
	b102_1[\\"Finish"/]
	b102_30 --> b102_32
	b102_32 --> b102_1
end
phi_133 --> block_102
subgraph phi_133["Phi 133"]
	p133_28{"r3 ϕ"}
	p133_27{"r4 ϕ"}
end
block_134 --> phi_133
block_135 --> phi_133
subgraph block_134["Block 134"]
	direction TB
	b134_46["merge__132 merge"]
	b134_37["merge__123 merge"]
	b134_55["mv_t__141 |True|  [bool.&& [mb__121]]"]
	b134_51["mv_t__137 |True|  [bool.&& [mb__121]]"]
	b134_46 --> b134_37
	b134_37 --> b134_55
	b134_55 --> b134_51
end
phi_142 --> block_134
subgraph phi_142["Phi 142"]
	p142_26{"r3 ϕ"}
	p142_19{"r3 ϕ"}
	p142_25{"r4 ϕ"}
	p142_18{"r4 ϕ"}
end
block_143 --> phi_142
block_144 --> phi_142
subgraph block_143["Block 143"]
	direction TB
	b143_21["r3__97 3"]
	b143_23["r3__95 1"]
	b143_14["r3__102 6"]
	b143_16["r3__100 5"]
	b143_22["r4__96 4"]
	b143_24["r4__94 2"]
	b143_15["r4__101 7"]
	b143_17["r4__99 6"]
	b143_48["merge__134 merge"]
	b143_50["merge__136 merge"]
	b143_42["merge__128 merge"]
	b143_44["merge__130 merge"]
	b143_67["mv_t__153 |True|  [bool.&& [mb__126]]"]
	b143_69["mv_t__155 |True|  [bool.&& [mb__126]]"]
	b143_57["mv_t__143 |True|  [bool.&& [mb__126]]"]
	b143_59["mv_t__145 |True|  [bool.&& [mb__126]]"]
	b143_21 --> b143_23
	b143_23 --> b143_14
	b143_14 --> b143_16
	b143_16 --> b143_22
	b143_22 --> b143_24
	b143_24 --> b143_15
	b143_15 --> b143_17
	b143_17 --> b143_48
	b143_48 --> b143_50
	b143_50 --> b143_42
	b143_42 --> b143_44
	b143_44 --> b143_67
	b143_67 --> b143_69
	b143_69 --> b143_57
	b143_57 --> b143_59
end
branch_141 --> block_143
subgraph branch_141["Branch 141"]
	br141_40["mb__126 bool.&&"]

end
branch_132 --> branch_141
subgraph branch_132["Branch 132"]
	br132_35["mb__121 bool.&&"]

end
block_136 --> branch_132
subgraph block_136["Block 136"]
	direction TB
	b136_0[/"Start"\\]
	b136_9["arg__104 2"]
	b136_3["c1 pop_u32"]
	b136_11["q u32.=="]
	b136_38["mt__124 U32_maybeTrue"]
	b136_39["mf__125 U32_maybeFalse"]
	b136_40["mb__126 bool.&&"]
	b136_6["arg__106 0"]
	b136_8["p u32.!="]
	b136_33["mt__119 U32_maybeTrue"]
	b136_34["mf__120 U32_maybeFalse"]
	b136_35["mb__121 bool.&&"]
	b136_0 --> b136_9
	b136_9 --> b136_3
	b136_3 --> b136_11
	b136_11 --> b136_38
	b136_38 --> b136_39
	b136_39 --> b136_40
	b136_40 --> b136_6
	b136_6 --> b136_8
	b136_8 --> b136_33
	b136_33 --> b136_34
	b136_34 --> b136_35
end
subgraph block_144["Block 144"]
	direction TB
	b144_68["mv_f__154 |False|  [bool.&& [mb__126]]"]
	b144_70["mv_f__156 |False|  [bool.&& [mb__126]]"]
	b144_58["mv_f__144 |False|  [bool.&& [mb__126]]"]
	b144_60["mv_f__146 |False|  [bool.&& [mb__126]]"]
	b144_68 --> b144_70
	b144_70 --> b144_58
	b144_58 --> b144_60
end
phi_154 --> block_144
subgraph phi_154["Phi 154"]
	p154_47{"innerPhi__133 ϕ"}
	p154_49{"innerPhi__135 ϕ"}
	p154_41{"innerPhi__127 ϕ"}
	p154_43{"innerPhi__129 ϕ"}
end
block_155 --> phi_154
block_156 --> phi_154
subgraph block_155["Block 155"]
	direction TB
	b155_117["r3__95__203 1"]
	b155_113["r3__100__199 5"]
	b155_118["r4__94__204 2"]
	b155_114["r4__99__200 6"]
	b155_71["mv_t__157 |True|  [U32_maybeTrue [mt__124]]"]
	b155_73["mv_t__159 |True|  [U32_maybeTrue [mt__124]]"]
	b155_63["mv_t__149 |True|  [U32_maybeTrue [mt__124]]"]
	b155_65["mv_t__151 |True|  [U32_maybeTrue [mt__124]]"]
	b155_117 --> b155_113
	b155_113 --> b155_118
	b155_118 --> b155_114
	b155_114 --> b155_71
	b155_71 --> b155_73
	b155_73 --> b155_63
	b155_63 --> b155_65
end
branch_153 --> block_155
subgraph branch_153["Branch 153"]
	br153_38["mt__124 U32_maybeTrue"]

end
branch_141 --> branch_153
subgraph block_156["Block 156"]
	direction TB
	b156_115["r3__97__201 3"]
	b156_111["r3__102__197 6"]
	b156_116["r4__96__202 4"]
	b156_112["r4__101__198 7"]
	b156_72["mv_f__158 |False|  [U32_maybeTrue [mt__124]]"]
	b156_74["mv_f__160 |False|  [U32_maybeTrue [mt__124]]"]
	b156_64["mv_f__150 |False|  [U32_maybeTrue [mt__124]]"]
	b156_66["mv_f__152 |False|  [U32_maybeTrue [mt__124]]"]
	b156_115 --> b156_111
	b156_111 --> b156_116
	b156_116 --> b156_112
	b156_112 --> b156_72
	b156_72 --> b156_74
	b156_74 --> b156_64
	b156_64 --> b156_66
end
branch_153 --> block_156
subgraph block_135["Block 135"]
	direction TB
	b135_56["mv_f__142 |False|  [bool.&& [mb__121]]"]
	b135_52["mv_f__138 |False|  [bool.&& [mb__121]]"]
	b135_56 --> b135_52
end
phi_138 --> block_135
subgraph phi_138["Phi 138"]
	p138_45{"innerPhi__131 ϕ"}
	p138_36{"innerPhi__122 ϕ"}
end
block_139 --> phi_138
block_140 --> phi_138
subgraph block_139["Block 139"]
	direction TB
	b139_61["mv_t__147 |True|  [U32_maybeTrue [mt__119]]"]
	b139_53["mv_t__139 |True|  [U32_maybeTrue [mt__119]]"]
	b139_61 --> b139_53
end
phi_146 --> block_139
subgraph phi_146["Phi 146"]
	p146_86{"r3__172 ϕ"}
	p146_85{"r4__171 ϕ"}
end
block_147 --> phi_146
block_148 --> phi_146
subgraph block_147["Block 147"]
	direction TB
	b147_81["r3__97__167 3"]
	b147_83["r3__95__169 1"]
	b147_82["r4__96__168 4"]
	b147_84["r4__94__170 2"]
	b147_92["merge__134__178 merge"]
	b147_88["merge__128__174 merge"]
	b147_103["mv_t__153__189 |True|  [bool.&& [mb__126]]"]
	b147_95["mv_t__143__181 |True|  [bool.&& [mb__126]]"]
	b147_81 --> b147_83
	b147_83 --> b147_82
	b147_82 --> b147_84
	b147_84 --> b147_92
	b147_92 --> b147_88
	b147_88 --> b147_103
	b147_103 --> b147_95
end
branch_145 --> block_147
subgraph branch_145["Branch 145"]
	br145_40["mb__126 bool.&&"]

end
branch_137 --> branch_145
subgraph branch_137["Branch 137"]
	br137_33["mt__119 U32_maybeTrue"]

end
branch_132 --> branch_137
subgraph block_148["Block 148"]
	direction TB
	b148_104["mv_f__154__190 |False|  [bool.&& [mb__126]]"]
	b148_96["mv_f__144__182 |False|  [bool.&& [mb__126]]"]
	b148_104 --> b148_96
end
phi_158 --> block_148
subgraph phi_158["Phi 158"]
	p158_91{"innerPhi__133__177 ϕ"}
	p158_87{"innerPhi__127__173 ϕ"}
end
block_159 --> phi_158
block_160 --> phi_158
subgraph block_159["Block 159"]
	direction TB
	b159_125["r3__95__169__211 1"]
	b159_126["r4__94__170__212 2"]
	b159_107["mv_t__157__193 |True|  [U32_maybeTrue [mt__124]]"]
	b159_99["mv_t__149__185 |True|  [U32_maybeTrue [mt__124]]"]
	b159_125 --> b159_126
	b159_126 --> b159_107
	b159_107 --> b159_99
end
branch_157 --> block_159
subgraph branch_157["Branch 157"]
	br157_38["mt__124 U32_maybeTrue"]

end
branch_145 --> branch_157
subgraph block_160["Block 160"]
	direction TB
	b160_123["r3__97__167__209 3"]
	b160_124["r4__96__168__210 4"]
	b160_108["mv_f__158__194 |False|  [U32_maybeTrue [mt__124]]"]
	b160_100["mv_f__150__186 |False|  [U32_maybeTrue [mt__124]]"]
	b160_123 --> b160_124
	b160_124 --> b160_108
	b160_108 --> b160_100
end
branch_157 --> block_160
subgraph block_140["Block 140"]
	direction TB
	b140_62["mv_f__148 |False|  [U32_maybeTrue [mt__119]]"]
	b140_54["mv_f__140 |False|  [U32_maybeTrue [mt__119]]"]
	b140_62 --> b140_54
end
phi_150 --> block_140
subgraph phi_150["Phi 150"]
	p150_80{"r3__166 ϕ"}
	p150_79{"r4__165 ϕ"}
end
block_151 --> phi_150
block_152 --> phi_150
subgraph block_151["Block 151"]
	direction TB
	b151_75["r3__102__161 6"]
	b151_77["r3__100__163 5"]
	b151_76["r4__101__162 7"]
	b151_78["r4__99__164 6"]
	b151_94["merge__136__180 merge"]
	b151_90["merge__130__176 merge"]
	b151_105["mv_t__155__191 |True|  [bool.&& [mb__126]]"]
	b151_97["mv_t__145__183 |True|  [bool.&& [mb__126]]"]
	b151_75 --> b151_77
	b151_77 --> b151_76
	b151_76 --> b151_78
	b151_78 --> b151_94
	b151_94 --> b151_90
	b151_90 --> b151_105
	b151_105 --> b151_97
end
branch_149 --> block_151
subgraph branch_149["Branch 149"]
	br149_40["mb__126 bool.&&"]

end
branch_137 --> branch_149
subgraph block_152["Block 152"]
	direction TB
	b152_106["mv_f__156__192 |False|  [bool.&& [mb__126]]"]
	b152_98["mv_f__146__184 |False|  [bool.&& [mb__126]]"]
	b152_106 --> b152_98
end
phi_162 --> block_152
subgraph phi_162["Phi 162"]
	p162_93{"innerPhi__135__179 ϕ"}
	p162_89{"innerPhi__129__175 ϕ"}
end
block_163 --> phi_162
block_164 --> phi_162
subgraph block_163["Block 163"]
	direction TB
	b163_121["r3__100__163__207 5"]
	b163_122["r4__99__164__208 6"]
	b163_109["mv_t__159__195 |True|  [U32_maybeTrue [mt__124]]"]
	b163_101["mv_t__151__187 |True|  [U32_maybeTrue [mt__124]]"]
	b163_121 --> b163_122
	b163_122 --> b163_109
	b163_109 --> b163_101
end
branch_161 --> block_163
subgraph branch_161["Branch 161"]
	br161_38["mt__124 U32_maybeTrue"]

end
branch_149 --> branch_161
subgraph block_164["Block 164"]
	direction TB
	b164_119["r3__102__161__205 6"]
	b164_120["r4__101__162__206 7"]
	b164_110["mv_f__160__196 |False|  [U32_maybeTrue [mt__124]]"]
	b164_102["mv_f__152__188 |False|  [U32_maybeTrue [mt__124]]"]
	b164_119 --> b164_120
	b164_120 --> b164_110
	b164_110 --> b164_102
end
branch_161 --> block_164

</pre>`;
window.traces["SPLIT_BRANCHES_PHI"]["unlem_scheduler_ssa"] = ''
window.traces["SPLIT_BRANCHES_PHI"]["unlem_scheduler_ssa"] += `<pre class=''>def arg__104 : u32 = 2;
def c1 = pop_u32();
def q = u32.==(c1, arg__104);
def mt__124 = U32_maybeTrue(q);
def mf__125 = U32_maybeFalse(q);
def mb__126 = bool.&&(mt__124, mf__125);
def arg__106 : u32 = 0;
def p = u32.!=(c1, arg__106);
def mt__119 = U32_maybeTrue(p);
def mf__120 = U32_maybeFalse(p);
def mb__121 = bool.&&(mt__119, mf__120);
if (mb__121) {
	if (mb__126) {
		def r3__97 : u32 = 3;
		def r3__95 : u32 = 1;
		def r3__102 : u32 = 6;
		def r3__100 : u32 = 5;
		def r4__96 : u32 = 4;
		def r4__94 : u32 = 2;
		def r4__101 : u32 = 7;
		def r4__99 : u32 = 6;
		def merge__134 = merge(r3__95, r3__97);
		def merge__136 = merge(r3__100, r3__102);
		def merge__128 = merge(r4__94, r4__96);
		def merge__130 = merge(r4__99, r4__101);
	} else {
		if (mt__124) {
			def r3__95__203 : u32 = 1;
			def r3__95 = (r3__95__203);
			def r3__100__199 : u32 = 5;
			def r3__100 = (r3__100__199);
			def r4__94__204 : u32 = 2;
			def r4__94 = (r4__94__204);
			def r4__99__200 : u32 = 6;
			def r4__99 = (r4__99__200);
		} else {
			def r3__97__201 : u32 = 3;
			def r3__97 = (r3__97__201);
			def r3__102__197 : u32 = 6;
			def r3__102 = (r3__102__197);
			def r4__96__202 : u32 = 4;
			def r4__96 = (r4__96__202);
			def r4__101__198 : u32 = 7;
			def r4__101 = (r4__101__198);
		}
// phis: innerPhi__133 <- r3__95__203; innerPhi__133 <- r3__97__201; innerPhi__135 <- r3__100__199; innerPhi__135 <- r3__102__197; innerPhi__127 <- r4__94__204; innerPhi__127 <- r4__96__202; innerPhi__129 <- r4__99__200; innerPhi__129 <- r4__101__198; 
	}
// phis: r3 <- merge__134; r3 <- innerPhi__133; r3 <- merge__136; r3 <- innerPhi__135; r4 <- merge__128; r4 <- innerPhi__127; r4 <- merge__130; r4 <- innerPhi__129; 
	def merge__132 = merge(r3, r3);
	def merge__123 = merge(r4, r4);
} else {
	if (mt__119) {
		if (mb__126) {
			def r3__97__167 : u32 = 3;
			def r3__95__169 : u32 = 1;
			def r4__96__168 : u32 = 4;
			def r4__94__170 : u32 = 2;
			def merge__134__178 = merge(r3__95__169, r3__97__167);
			def merge__134 = (merge__134__178);
			def merge__128__174 = merge(r4__94__170, r4__96__168);
			def merge__128 = (merge__128__174);
		} else {
			if (mt__124) {
				def r3__95__169__211 : u32 = 1;
				def r4__94__170__212 : u32 = 2;
			} else {
				def r3__97__167__209 : u32 = 3;
				def r4__96__168__210 : u32 = 4;
			}
// phis: innerPhi__133__177 <- r3__95__169__211; innerPhi__133__177 <- r3__97__167__209; innerPhi__127__173 <- r4__94__170__212; innerPhi__127__173 <- r4__96__168__210; 
		}
// phis: r3__172 <- merge__134__178; r3__172 <- innerPhi__133__177; r4__171 <- merge__128__174; r4__171 <- innerPhi__127__173; 
	} else {
		if (mb__126) {
			def r3__102__161 : u32 = 6;
			def r3__100__163 : u32 = 5;
			def r4__101__162 : u32 = 7;
			def r4__99__164 : u32 = 6;
			def merge__136__180 = merge(r3__100__163, r3__102__161);
			def merge__136 = (merge__136__180);
			def merge__130__176 = merge(r4__99__164, r4__101__162);
			def merge__130 = (merge__130__176);
		} else {
			if (mt__124) {
				def r3__100__163__207 : u32 = 5;
				def r4__99__164__208 : u32 = 6;
			} else {
				def r3__102__161__205 : u32 = 6;
				def r4__101__162__206 : u32 = 7;
			}
// phis: innerPhi__135__179 <- r3__100__163__207; innerPhi__135__179 <- r3__102__161__205; innerPhi__129__175 <- r4__99__164__208; innerPhi__129__175 <- r4__101__162__206; 
		}
// phis: r3__166 <- merge__136__180; r3__166 <- innerPhi__135__179; r4__165 <- merge__130__176; r4__165 <- innerPhi__129__175; 
	}
// phis: innerPhi__131 <- r3__172; innerPhi__131 <- r3__166; innerPhi__122 <- r4__171; innerPhi__122 <- r4__165; 
}
// phis: r3 <- merge__132; r3 <- innerPhi__131; r4 <- merge__123; r4 <- innerPhi__122; 
def eff__90 = push_u32(r3);
def eff__88 = push_u32(r4);
</pre>`;
window.traces["SPLIT_BRANCHES_PHI"]["unlem_scheduler_ssa_pretty"] = ''
window.traces["SPLIT_BRANCHES_PHI"]["unlem_scheduler_ssa_pretty"] += `<pre class=''>def c1 = pop_u32();
def mt = U32_maybeTrue(u32.==(c1, 2));
def mf = U32_maybeFalse(u32.==(c1, 2));
def mt1 = U32_maybeTrue(u32.!=(c1, 0));
def mf1 = U32_maybeFalse(u32.!=(c1, 0));
var r3: u32;
var r4: u32;
if (bool.&&(mt1, mf1)) {
	if (bool.&&(mt, mf)) {
		r3 = merge(1, 3);
		r3 = merge(5, 6);
		r4 = merge(2, 4);
		r4 = merge(6, 7);
	} else {
		if (mt) {
			r3 = 1;
			r3 = 5;
			r4 = 2;
			r4 = 6;
		} else {
			r3 = 3;
			r3 = 6;
			r4 = 4;
			r4 = 7;
		}
	}
	r3 = merge(r3, r3);
	r4 = merge(r4, r4);
} else {
	if (mt1) {
		if (bool.&&(mt, mf)) {
			r3 = merge(1, 3);
			def merge = (merge__134__178);
			r4 = merge(2, 4);
			def merge1 = (merge__128__174);
		} else {
			if (mt) {
				r3 = 1;
				r4 = 2;
			} else {
				r3 = 3;
				r4 = 4;
			}
		}
	} else {
		if (bool.&&(mt, mf)) {
			r3 = merge(5, 6);
			def merge2 = (merge__136__180);
			r4 = merge(6, 7);
			def merge3 = (merge__130__176);
		} else {
			if (mt) {
				r3 = 5;
				r4 = 6;
			} else {
				r3 = 6;
				r4 = 7;
			}
		}
	}
}
push_u32(r3);
push_u32(r4);
</pre>`;
window.traces["P3_FRONTIER"] = {}
window.traces["P3_FRONTIER"]["parsed"] = ''
window.traces["P3_FRONTIER"]["parsed"] += `<pre class=''>def c1 = pop_u32();
def c3 = pop_u32();
def c2 = pop_u32();
def A = pop_u32();
def B = pop_u32();
def arg__233 : u32 = 0;
def arg__232 = (c1);
def p = u32.!=(arg__232, arg__233);
def arg__231 : u32 = 0;
def arg__230 = (c3);
def q = u32.!=(arg__230, arg__231);
def arg__229 : u32 = 0;
def arg__228 = (c2);
def r = u32.!=(arg__228, arg__229);
def deep : u32 = 0;
def cond__225 = (q);
if (cond__225) {
	def deep__226 = (A);
} else {
	def deep__227 = (B);
}
// phis: deep <- deep__226; deep <- deep__227; 
def arg__224 : u32 = 0;
def arg__223 = (deep);
def N = u32.+(arg__223, arg__224);
def triv : u32 = 0;
def cond__220 = (r);
if (cond__220) {
	def triv__221 = (N);
} else {
	def triv__222 = (N);
}
// phis: triv <- triv__221; triv <- triv__222; 
def result : u32 = 0;
def cond__215 = (p);
if (cond__215) {
	def result__216 = (triv);
} else {
	def arg__219 : u32 = 1;
	def arg__218 = (A);
	def result__217 = u32.+(arg__218, arg__219);
}
// phis: result <- result__216; result <- result__217; 
def arg__214 = (result);
def eff__213 = push_u32(arg__214);
</pre>`;
window.traces["P3_FRONTIER"]["initial_pretty"] = ''
window.traces["P3_FRONTIER"]["initial_pretty"] += `<pre class=''>def c1 = pop_u32();
def c3 = pop_u32();
def c2 = pop_u32();
def A = pop_u32();
def B = pop_u32();
var deep = 0;
if ((u32.!=((c3), 0))) {
	deep = (A);
} else {
	deep = (B);
}
var triv = 0;
if ((u32.!=((c2), 0))) {
	triv = (u32.+((deep), 0));
} else {
	triv = (u32.+((deep), 0));
}
var result = 0;
if ((u32.!=((c1), 0))) {
	result = (triv);
} else {
	result = u32.+((A), 1);
}
push_u32((result));
</pre>`;
window.traces["P3_FRONTIER"]["raw"] = ''
window.traces["P3_FRONTIER"]["raw"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	38 -. Stack .-> 1
	38["eff__213 push_u32"]
	36 --> 38
	7 -. Stack .-> 38
	7["B pop_u32"]
	6 -. Stack .-> 7
	6["A pop_u32"]
	5 -. Stack .-> 6
	5["c2 pop_u32"]
	4 -. Stack .-> 5
	4["c3 pop_u32"]
	3 -. Stack .-> 4
	3["c1 pop_u32"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	36{"result ϕ"}
	10 --> 36
	29 --> 36
	34 --> 36
	34["result__217 u32.+"]
	6 --> 34
	32 --> 34
	32["arg__219 1"]
	29{"triv ϕ"}
	16 --> 29
	24 --> 29
	24 --> 29
	24["N u32.+"]
	21 --> 24
	22 --> 24
	22["arg__224 0"]
	21{"deep ϕ"}
	13 --> 21
	6 --> 21
	7 --> 21
	13["q u32.!="]
	4 --> 13
	11 --> 13
	11["arg__231 0"]
	16["r u32.!="]
	5 --> 16
	14 --> 16
	14["arg__229 0"]
	10["p u32.!="]
	3 --> 10
	8 --> 10
	8["arg__233 0"]
</pre>`;
window.traces["P3_FRONTIER"]["scheduler_start"] = ''
window.traces["P3_FRONTIER"]["scheduler_start"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	38 -. Stack .-> 1
	38["eff__213 push_u32"]
	36 --> 38
	7 -. Stack .-> 38
	7["B pop_u32"]
	6 -. Stack .-> 7
	6["A pop_u32"]
	5 -. Stack .-> 6
	5["c2 pop_u32"]
	4 -. Stack .-> 5
	4["c3 pop_u32"]
	3 -. Stack .-> 4
	3["c1 pop_u32"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	36{"result ϕ"}
	10 --> 36
	39 --> 36
	40 --> 36
	40["mv_f__235 |False|  [u32.!= [p]]"]
	10 --> 40
	34 --> 40
	34["result__217 u32.+"]
	6 --> 34
	32 --> 34
	32["arg__219 1"]
	10["p u32.!="]
	3 --> 10
	8 --> 10
	8["arg__233 0"]
	39["mv_t__234 |True|  [u32.!= [p]]"]
	10 --> 39
	29 --> 39
	29{"triv ϕ"}
	16 --> 29
	41 --> 29
	42 --> 29
	42["mv_f__237 |False|  [u32.!= [r]]"]
	16 --> 42
	24 --> 42
	24["N u32.+"]
	21 --> 24
	22 --> 24
	22["arg__224 0"]
	21{"deep ϕ"}
	13 --> 21
	43 --> 21
	44 --> 21
	44["mv_f__239 |False|  [u32.!= [q]]"]
	13 --> 44
	7 --> 44
	13["q u32.!="]
	4 --> 13
	11 --> 13
	11["arg__231 0"]
	43["mv_t__238 |True|  [u32.!= [q]]"]
	13 --> 43
	6 --> 43
	16["r u32.!="]
	5 --> 16
	14 --> 16
	14["arg__229 0"]
	41["mv_t__236 |True|  [u32.!= [r]]"]
	16 --> 41
	24 --> 41
</pre>`;
window.traces["P3_FRONTIER"]["untangled"] = ''
window.traces["P3_FRONTIER"]["untangled"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	38 -. Stack .-> 1
	38["eff__213 push_u32"]
	36 --> 38
	7 -. Stack .-> 38
	7["B pop_u32"]
	6 -. Stack .-> 7
	6["A pop_u32"]
	5 -. Stack .-> 6
	5["c2 pop_u32"]
	4 -. Stack .-> 5
	4["c3 pop_u32"]
	3 -. Stack .-> 4
	3["c1 pop_u32"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	36{"result ϕ"}
	10 --> 36
	39 --> 36
	40 --> 36
	40["mv_f__235 |False|  [u32.!= [p]]"]
	10 --> 40
	34 --> 40
	34["result__217 u32.+"]
	6 --> 34
	32 --> 34
	32["arg__219 1"]
	10["p u32.!="]
	3 --> 10
	8 --> 10
	8["arg__233 0"]
	39["mv_t__234 |True|  [u32.!= [p]]"]
	10 --> 39
	29 --> 39
	29{"triv ϕ"}
	16 --> 29
	41 --> 29
	42 --> 29
	42["mv_f__237 |False|  [u32.!= [r]]"]
	16 --> 42
	24 --> 42
	24["N u32.+"]
	21 --> 24
	22 --> 24
	22["arg__224 0"]
	21{"deep ϕ"}
	13 --> 21
	43 --> 21
	44 --> 21
	44["mv_f__239 |False|  [u32.!= [q]]"]
	13 --> 44
	7 --> 44
	13["q u32.!="]
	4 --> 13
	11 --> 13
	11["arg__231 0"]
	43["mv_t__238 |True|  [u32.!= [q]]"]
	13 --> 43
	6 --> 43
	16["r u32.!="]
	5 --> 16
	14 --> 16
	14["arg__229 0"]
	41["mv_t__236 |True|  [u32.!= [r]]"]
	16 --> 41
	24 --> 41
</pre>`;
window.traces["P3_FRONTIER"]["schedulerMermaid"] = ''
window.traces["P3_FRONTIER"]["schedulerMermaid"] += `<pre class='graph'>graph TD
subgraph block_165["Block 165"]
	direction TB
	b165_38["eff__213 push_u32"]
	b165_1[\\"Finish"/]
	b165_38 --> b165_1
end
phi_177 --> block_165
subgraph phi_177["Phi 177"]
	p177_36{"result ϕ"}
end
block_178 --> phi_177
block_179 --> phi_177
subgraph block_178["Block 178"]
	direction TB
	b178_39["mv_t__234 |True|  [u32.!= [p]]"]
end
phi_182 --> block_178
subgraph phi_182["Phi 182"]
	p182_29{"triv ϕ"}
end
block_183 --> phi_182
block_184 --> phi_182
subgraph block_183["Block 183"]
	direction TB
	b183_41["mv_t__236 |True|  [u32.!= [r]]"]
end
branch_181 --> block_183
subgraph branch_181["Branch 181"]
	br181_16["r u32.!="]

end
block_185 --> branch_181
subgraph block_185["Block 185"]
	direction TB
	b185_22["arg__224 0"]
	b185_24["N u32.+"]
	b185_14["arg__229 0"]
	b185_16["r u32.!="]
	b185_22 --> b185_24
	b185_24 --> b185_14
	b185_14 --> b185_16
end
phi_187 --> block_185
subgraph phi_187["Phi 187"]
	p187_21{"deep ϕ"}
end
block_188 --> phi_187
block_189 --> phi_187
subgraph block_188["Block 188"]
	direction TB
	b188_43["mv_t__238 |True|  [u32.!= [q]]"]
end
branch_186 --> block_188
subgraph branch_186["Branch 186"]
	br186_13["q u32.!="]

end
block_190 --> branch_186
subgraph block_190["Block 190"]
	direction TB
	b190_11["arg__231 0"]
	b190_13["q u32.!="]
	b190_11 --> b190_13
end
branch_176 --> block_190
subgraph branch_176["Branch 176"]
	br176_10["p u32.!="]

end
block_180 --> branch_176
subgraph block_180["Block 180"]
	direction TB
	b180_0[/"Start"\\]
	b180_3["c1 pop_u32"]
	b180_4["c3 pop_u32"]
	b180_5["c2 pop_u32"]
	b180_6["A pop_u32"]
	b180_7["B pop_u32"]
	b180_8["arg__233 0"]
	b180_10["p u32.!="]
	b180_0 --> b180_3
	b180_3 --> b180_4
	b180_4 --> b180_5
	b180_5 --> b180_6
	b180_6 --> b180_7
	b180_7 --> b180_8
	b180_8 --> b180_10
end
subgraph block_189["Block 189"]
	direction TB
	b189_44["mv_f__239 |False|  [u32.!= [q]]"]
end
branch_186 --> block_189
subgraph block_184["Block 184"]
	direction TB
	b184_42["mv_f__237 |False|  [u32.!= [r]]"]
end
branch_181 --> block_184
subgraph block_179["Block 179"]
	direction TB
	b179_32["arg__219 1"]
	b179_34["result__217 u32.+"]
	b179_40["mv_f__235 |False|  [u32.!= [p]]"]
	b179_32 --> b179_34
	b179_34 --> b179_40
end
branch_176 --> block_179

</pre>`;
window.traces["P3_FRONTIER"]["scheduler_ssad"] = ''
window.traces["P3_FRONTIER"]["scheduler_ssad"] += `<pre class=''>def c1 = pop_u32();
def c3 = pop_u32();
def c2 = pop_u32();
def A = pop_u32();
def B = pop_u32();
def arg__233 : u32 = 0;
def p = u32.!=(c1, arg__233);
if (p) {
	def arg__231 : u32 = 0;
	def q = u32.!=(c3, arg__231);
	if (q) {
	}
// phis: deep <- A; deep <- B; 
	def arg__224 : u32 = 0;
	def N = u32.+(deep, arg__224);
	def arg__229 : u32 = 0;
	def r = u32.!=(c2, arg__229);
	if (r) {
	}
// phis: triv <- N; triv <- N; 
} else {
	def arg__219 : u32 = 1;
	def result__217 = u32.+(A, arg__219);
}
// phis: result <- triv; result <- result__217; 
def eff__213 = push_u32(result);
</pre>`;
window.traces["P3_FRONTIER"]["scheduler_ssad_pretty"] = ''
window.traces["P3_FRONTIER"]["scheduler_ssad_pretty"] += `<pre class=''>def c1 = pop_u32();
def c3 = pop_u32();
def c2 = pop_u32();
def A = pop_u32();
def B = pop_u32();
var result: u32;
if (u32.!=(c1, 0)) {
	var deep: u32;
	if (u32.!=(c3, 0)) {
		deep = A;
	} else {
		deep = B;
	}
	def N = u32.+(deep, 0);
	if (u32.!=(c2, 0)) {
		result = N;
	} else {
		result = N;
	}
} else {
	result = u32.+(A, 1);
}
push_u32(result);
</pre>`;
window.traces["P3_FRONTIER"]["unLEM"] = ''
window.traces["P3_FRONTIER"]["unLEM"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	38 -. Stack .-> 1
	38["eff__213 push_u32"]
	36 --> 38
	7 -. Stack .-> 38
	7["B pop_u32"]
	6 -. Stack .-> 7
	6["A pop_u32"]
	5 -. Stack .-> 6
	5["c2 pop_u32"]
	4 -. Stack .-> 5
	4["c3 pop_u32"]
	3 -. Stack .-> 4
	3["c1 pop_u32"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	36{"result ϕ"}
	41 --> 36
	43 --> 36
	42 --> 36
	42{"innerPhi__243 ϕ"}
	39 --> 42
	29 --> 42
	34 --> 42
	34["result__217 u32.+"]
	6 --> 34
	32 --> 34
	32["arg__219 1"]
	29{"triv ϕ"}
	46 --> 29
	48 --> 29
	47 --> 29
	47{"innerPhi__248 ϕ"}
	44 --> 47
	24 --> 47
	24 --> 47
	24["N u32.+"]
	21 --> 24
	22 --> 24
	22["arg__224 0"]
	21{"deep ϕ"}
	51 --> 21
	53 --> 21
	52 --> 21
	52{"innerPhi__253 ϕ"}
	49 --> 52
	6 --> 52
	7 --> 52
	49["mt__250 U32_maybeTrue"]
	13 --> 49
	13["q u32.!="]
	4 --> 13
	11 --> 13
	11["arg__231 0"]
	53["merge__254 merge"]
	6 --> 53
	7 --> 53
	51["mb__252 bool.&&"]
	49 --> 51
	50 --> 51
	50["mf__251 U32_maybeFalse"]
	13 --> 50
	44["mt__245 U32_maybeTrue"]
	16 --> 44
	16["r u32.!="]
	5 --> 16
	14 --> 16
	14["arg__229 0"]
	48["merge__249 merge"]
	24 --> 48
	24 --> 48
	46["mb__247 bool.&&"]
	44 --> 46
	45 --> 46
	45["mf__246 U32_maybeFalse"]
	16 --> 45
	39["mt__240 U32_maybeTrue"]
	10 --> 39
	10["p u32.!="]
	3 --> 10
	8 --> 10
	8["arg__233 0"]
	43["merge__244 merge"]
	29 --> 43
	34 --> 43
	41["mb__242 bool.&&"]
	39 --> 41
	40 --> 41
	40["mf__241 U32_maybeFalse"]
	10 --> 40
</pre>`;
window.traces["P3_FRONTIER_ul"] = {}
window.traces["P3_FRONTIER_ul"]["scheduler_start"] = ''
window.traces["P3_FRONTIER_ul"]["scheduler_start"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	38 -. Stack .-> 1
	38["eff__213 push_u32"]
	36 --> 38
	7 -. Stack .-> 38
	7["B pop_u32"]
	6 -. Stack .-> 7
	6["A pop_u32"]
	5 -. Stack .-> 6
	5["c2 pop_u32"]
	4 -. Stack .-> 5
	4["c3 pop_u32"]
	3 -. Stack .-> 4
	3["c1 pop_u32"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	36{"result ϕ"}
	41 --> 36
	54 --> 36
	55 --> 36
	55["mv_f__256 |False|  [bool.&& [mb__242]]"]
	41 --> 55
	42 --> 55
	42{"innerPhi__243 ϕ"}
	39 --> 42
	56 --> 42
	57 --> 42
	57["mv_f__258 |False|  [U32_maybeTrue [mt__240]]"]
	39 --> 57
	34 --> 57
	34["result__217 u32.+"]
	6 --> 34
	32 --> 34
	32["arg__219 1"]
	39["mt__240 U32_maybeTrue"]
	10 --> 39
	10["p u32.!="]
	3 --> 10
	8 --> 10
	8["arg__233 0"]
	56["mv_t__257 |True|  [U32_maybeTrue [mt__240]]"]
	39 --> 56
	29 --> 56
	29{"triv ϕ"}
	46 --> 29
	58 --> 29
	59 --> 29
	59["mv_f__260 |False|  [bool.&& [mb__247]]"]
	46 --> 59
	47 --> 59
	47{"innerPhi__248 ϕ"}
	44 --> 47
	60 --> 47
	61 --> 47
	61["mv_f__262 |False|  [U32_maybeTrue [mt__245]]"]
	44 --> 61
	24 --> 61
	24["N u32.+"]
	21 --> 24
	22 --> 24
	22["arg__224 0"]
	21{"deep ϕ"}
	51 --> 21
	62 --> 21
	63 --> 21
	63["mv_f__264 |False|  [bool.&& [mb__252]]"]
	51 --> 63
	52 --> 63
	52{"innerPhi__253 ϕ"}
	49 --> 52
	64 --> 52
	65 --> 52
	65["mv_f__266 |False|  [U32_maybeTrue [mt__250]]"]
	49 --> 65
	7 --> 65
	49["mt__250 U32_maybeTrue"]
	13 --> 49
	13["q u32.!="]
	4 --> 13
	11 --> 13
	11["arg__231 0"]
	64["mv_t__265 |True|  [U32_maybeTrue [mt__250]]"]
	49 --> 64
	6 --> 64
	51["mb__252 bool.&&"]
	49 --> 51
	50 --> 51
	50["mf__251 U32_maybeFalse"]
	13 --> 50
	62["mv_t__263 |True|  [bool.&& [mb__252]]"]
	51 --> 62
	53 --> 62
	53["merge__254 merge"]
	6 --> 53
	7 --> 53
	44["mt__245 U32_maybeTrue"]
	16 --> 44
	16["r u32.!="]
	5 --> 16
	14 --> 16
	14["arg__229 0"]
	60["mv_t__261 |True|  [U32_maybeTrue [mt__245]]"]
	44 --> 60
	24 --> 60
	46["mb__247 bool.&&"]
	44 --> 46
	45 --> 46
	45["mf__246 U32_maybeFalse"]
	16 --> 45
	58["mv_t__259 |True|  [bool.&& [mb__247]]"]
	46 --> 58
	48 --> 58
	48["merge__249 merge"]
	24 --> 48
	24 --> 48
	41["mb__242 bool.&&"]
	39 --> 41
	40 --> 41
	40["mf__241 U32_maybeFalse"]
	10 --> 40
	54["mv_t__255 |True|  [bool.&& [mb__242]]"]
	41 --> 54
	43 --> 54
	43["merge__244 merge"]
	29 --> 43
	34 --> 43
</pre>`;
window.traces["P3_FRONTIER_ul"]["untangled"] = ''
window.traces["P3_FRONTIER_ul"]["untangled"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	38 -. Stack .-> 1
	38["eff__213 push_u32"]
	36 --> 38
	7 -. Stack .-> 38
	7["B pop_u32"]
	6 -. Stack .-> 7
	6["A pop_u32"]
	5 -. Stack .-> 6
	5["c2 pop_u32"]
	4 -. Stack .-> 5
	4["c3 pop_u32"]
	3 -. Stack .-> 4
	3["c1 pop_u32"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	36{"result ϕ"}
	41 --> 36
	54 --> 36
	55 --> 36
	55["mv_f__256 |False|  [bool.&& [mb__242]]"]
	41 --> 55
	42 --> 55
	42{"innerPhi__243 ϕ"}
	39 --> 42
	56 --> 42
	57 --> 42
	57["mv_f__258 |False|  [U32_maybeTrue [mt__240]]"]
	39 --> 57
	75 --> 57
	75["result__217__276 u32.+"]
	6 --> 75
	74 --> 75
	74["arg__219__275 1"]
	39["mt__240 U32_maybeTrue"]
	10 --> 39
	10["p u32.!="]
	3 --> 10
	8 --> 10
	8["arg__233 0"]
	56["mv_t__257 |True|  [U32_maybeTrue [mt__240]]"]
	39 --> 56
	73 --> 56
	73{"triv__274 ϕ"}
	78 --> 73
	86 --> 73
	87 --> 73
	87["mv_f__260__288 |False|  [bool.&& [mb__247__279]]"]
	78 --> 87
	79 --> 87
	79{"innerPhi__248__280 ϕ"}
	76 --> 79
	88 --> 79
	89 --> 79
	89["mv_f__262__290 |False|  [U32_maybeTrue [mt__245__277]]"]
	76 --> 89
	72 --> 89
	72["N__273 u32.+"]
	70 --> 72
	71 --> 72
	71["arg__224__272 0"]
	70{"deep__271 ϕ"}
	83 --> 70
	90 --> 70
	91 --> 70
	91["mv_f__264__292 |False|  [bool.&& [mb__252__284]]"]
	83 --> 91
	84 --> 91
	84{"innerPhi__253__285 ϕ"}
	81 --> 84
	92 --> 84
	93 --> 84
	93["mv_f__266__294 |False|  [U32_maybeTrue [mt__250__282]]"]
	81 --> 93
	7 --> 93
	81["mt__250__282 U32_maybeTrue"]
	67 --> 81
	67["q__268 u32.!="]
	4 --> 67
	66 --> 67
	66["arg__231__267 0"]
	92["mv_t__265__293 |True|  [U32_maybeTrue [mt__250__282]]"]
	81 --> 92
	6 --> 92
	83["mb__252__284 bool.&&"]
	81 --> 83
	82 --> 83
	82["mf__251__283 U32_maybeFalse"]
	67 --> 82
	90["mv_t__263__291 |True|  [bool.&& [mb__252__284]]"]
	83 --> 90
	85 --> 90
	85["merge__254__286 merge"]
	6 --> 85
	7 --> 85
	76["mt__245__277 U32_maybeTrue"]
	69 --> 76
	69["r__270 u32.!="]
	5 --> 69
	68 --> 69
	68["arg__229__269 0"]
	88["mv_t__261__289 |True|  [U32_maybeTrue [mt__245__277]]"]
	76 --> 88
	72 --> 88
	78["mb__247__279 bool.&&"]
	76 --> 78
	77 --> 78
	77["mf__246__278 U32_maybeFalse"]
	69 --> 77
	86["mv_t__259__287 |True|  [bool.&& [mb__247__279]]"]
	78 --> 86
	80 --> 86
	80["merge__249__281 merge"]
	72 --> 80
	72 --> 80
	41["mb__242 bool.&&"]
	39 --> 41
	40 --> 41
	40["mf__241 U32_maybeFalse"]
	10 --> 40
	54["mv_t__255 |True|  [bool.&& [mb__242]]"]
	41 --> 54
	43 --> 54
	43["merge__244 merge"]
	29 --> 43
	34 --> 43
	34["result__217 u32.+"]
	6 --> 34
	32 --> 34
	32["arg__219 1"]
	29{"triv ϕ"}
	46 --> 29
	58 --> 29
	59 --> 29
	59["mv_f__260 |False|  [bool.&& [mb__247]]"]
	46 --> 59
	47 --> 59
	47{"innerPhi__248 ϕ"}
	44 --> 47
	60 --> 47
	61 --> 47
	61["mv_f__262 |False|  [U32_maybeTrue [mt__245]]"]
	44 --> 61
	24 --> 61
	24["N u32.+"]
	21 --> 24
	22 --> 24
	22["arg__224 0"]
	21{"deep ϕ"}
	51 --> 21
	62 --> 21
	63 --> 21
	63["mv_f__264 |False|  [bool.&& [mb__252]]"]
	51 --> 63
	52 --> 63
	52{"innerPhi__253 ϕ"}
	49 --> 52
	64 --> 52
	65 --> 52
	65["mv_f__266 |False|  [U32_maybeTrue [mt__250]]"]
	49 --> 65
	7 --> 65
	49["mt__250 U32_maybeTrue"]
	13 --> 49
	13["q u32.!="]
	4 --> 13
	11 --> 13
	11["arg__231 0"]
	64["mv_t__265 |True|  [U32_maybeTrue [mt__250]]"]
	49 --> 64
	6 --> 64
	51["mb__252 bool.&&"]
	49 --> 51
	50 --> 51
	50["mf__251 U32_maybeFalse"]
	13 --> 50
	62["mv_t__263 |True|  [bool.&& [mb__252]]"]
	51 --> 62
	53 --> 62
	53["merge__254 merge"]
	6 --> 53
	7 --> 53
	44["mt__245 U32_maybeTrue"]
	16 --> 44
	16["r u32.!="]
	5 --> 16
	14 --> 16
	14["arg__229 0"]
	60["mv_t__261 |True|  [U32_maybeTrue [mt__245]]"]
	44 --> 60
	24 --> 60
	46["mb__247 bool.&&"]
	44 --> 46
	45 --> 46
	45["mf__246 U32_maybeFalse"]
	16 --> 45
	58["mv_t__259 |True|  [bool.&& [mb__247]]"]
	46 --> 58
	48 --> 58
	48["merge__249 merge"]
	24 --> 48
	24 --> 48
</pre>`;
window.traces["P3_FRONTIER"]["unlem_scheduler"] = ''
window.traces["P3_FRONTIER"]["unlem_scheduler"] += `<pre class='graph'>graph TD
subgraph block_191["Block 191"]
	direction TB
	b191_38["eff__213 push_u32"]
	b191_1[\\"Finish"/]
	b191_38 --> b191_1
end
phi_255 --> block_191
subgraph phi_255["Phi 255"]
	p255_36{"result ϕ"}
end
block_256 --> phi_255
block_257 --> phi_255
subgraph block_256["Block 256"]
	direction TB
	b256_32["arg__219 1"]
	b256_34["result__217 u32.+"]
	b256_43["merge__244 merge"]
	b256_54["mv_t__255 |True|  [bool.&& [mb__242]]"]
	b256_32 --> b256_34
	b256_34 --> b256_43
	b256_43 --> b256_54
end
phi_264 --> block_256
subgraph phi_264["Phi 264"]
	p264_29{"triv ϕ"}
end
block_265 --> phi_264
block_266 --> phi_264
subgraph block_265["Block 265"]
	direction TB
	b265_48["merge__249 merge"]
	b265_58["mv_t__259 |True|  [bool.&& [mb__247]]"]
	b265_48 --> b265_58
end
branch_263 --> block_265
subgraph branch_263["Branch 263"]
	br263_46["mb__247 bool.&&"]

end
block_267 --> branch_263
subgraph block_267["Block 267"]
	direction TB
	b267_22["arg__224 0"]
	b267_14["arg__229 0"]
	b267_24["N u32.+"]
	b267_16["r u32.!="]
	b267_44["mt__245 U32_maybeTrue"]
	b267_45["mf__246 U32_maybeFalse"]
	b267_46["mb__247 bool.&&"]
	b267_22 --> b267_14
	b267_14 --> b267_24
	b267_24 --> b267_16
	b267_16 --> b267_44
	b267_44 --> b267_45
	b267_45 --> b267_46
end
phi_282 --> block_267
subgraph phi_282["Phi 282"]
	p282_21{"deep ϕ"}
end
block_283 --> phi_282
block_284 --> phi_282
subgraph block_283["Block 283"]
	direction TB
	b283_53["merge__254 merge"]
	b283_62["mv_t__263 |True|  [bool.&& [mb__252]]"]
	b283_53 --> b283_62
end
branch_281 --> block_283
subgraph branch_281["Branch 281"]
	br281_51["mb__252 bool.&&"]

end
block_285 --> branch_281
subgraph block_285["Block 285"]
	direction TB
	b285_11["arg__231 0"]
	b285_13["q u32.!="]
	b285_49["mt__250 U32_maybeTrue"]
	b285_50["mf__251 U32_maybeFalse"]
	b285_51["mb__252 bool.&&"]
	b285_11 --> b285_13
	b285_13 --> b285_49
	b285_49 --> b285_50
	b285_50 --> b285_51
end
branch_254 --> block_285
subgraph branch_254["Branch 254"]
	br254_41["mb__242 bool.&&"]

end
block_258 --> branch_254
subgraph block_258["Block 258"]
	direction TB
	b258_0[/"Start"\\]
	b258_3["c1 pop_u32"]
	b258_4["c3 pop_u32"]
	b258_5["c2 pop_u32"]
	b258_6["A pop_u32"]
	b258_7["B pop_u32"]
	b258_8["arg__233 0"]
	b258_10["p u32.!="]
	b258_39["mt__240 U32_maybeTrue"]
	b258_40["mf__241 U32_maybeFalse"]
	b258_41["mb__242 bool.&&"]
	b258_0 --> b258_3
	b258_3 --> b258_4
	b258_4 --> b258_5
	b258_5 --> b258_6
	b258_6 --> b258_7
	b258_7 --> b258_8
	b258_8 --> b258_10
	b258_10 --> b258_39
	b258_39 --> b258_40
	b258_40 --> b258_41
end
subgraph block_284["Block 284"]
	direction TB
	b284_63["mv_f__264 |False|  [bool.&& [mb__252]]"]
end
phi_291 --> block_284
subgraph phi_291["Phi 291"]
	p291_52{"innerPhi__253 ϕ"}
end
block_292 --> phi_291
block_293 --> phi_291
subgraph block_292["Block 292"]
	direction TB
	b292_64["mv_t__265 |True|  [U32_maybeTrue [mt__250]]"]
end
branch_290 --> block_292
subgraph branch_290["Branch 290"]
	br290_49["mt__250 U32_maybeTrue"]

end
branch_281 --> branch_290
subgraph block_293["Block 293"]
	direction TB
	b293_65["mv_f__266 |False|  [U32_maybeTrue [mt__250]]"]
end
branch_290 --> block_293
subgraph block_266["Block 266"]
	direction TB
	b266_59["mv_f__260 |False|  [bool.&& [mb__247]]"]
end
phi_273 --> block_266
subgraph phi_273["Phi 273"]
	p273_47{"innerPhi__248 ϕ"}
end
block_274 --> phi_273
block_275 --> phi_273
subgraph block_274["Block 274"]
	direction TB
	b274_60["mv_t__261 |True|  [U32_maybeTrue [mt__245]]"]
end
branch_272 --> block_274
subgraph branch_272["Branch 272"]
	br272_44["mt__245 U32_maybeTrue"]

end
branch_263 --> branch_272
subgraph block_275["Block 275"]
	direction TB
	b275_61["mv_f__262 |False|  [U32_maybeTrue [mt__245]]"]
end
branch_272 --> block_275
subgraph block_257["Block 257"]
	direction TB
	b257_55["mv_f__256 |False|  [bool.&& [mb__242]]"]
end
phi_260 --> block_257
subgraph phi_260["Phi 260"]
	p260_42{"innerPhi__243 ϕ"}
end
block_261 --> phi_260
block_262 --> phi_260
subgraph block_261["Block 261"]
	direction TB
	b261_56["mv_t__257 |True|  [U32_maybeTrue [mt__240]]"]
end
phi_269 --> block_261
subgraph phi_269["Phi 269"]
	p269_73{"triv__274 ϕ"}
end
block_270 --> phi_269
block_271 --> phi_269
subgraph block_270["Block 270"]
	direction TB
	b270_80["merge__249__281 merge"]
	b270_86["mv_t__259__287 |True|  [bool.&& [mb__247__279]]"]
	b270_80 --> b270_86
end
branch_268 --> block_270
subgraph branch_268["Branch 268"]
	br268_78["mb__247__279 bool.&&"]

end
block_276 --> branch_268
subgraph block_276["Block 276"]
	direction TB
	b276_71["arg__224__272 0"]
	b276_68["arg__229__269 0"]
	b276_72["N__273 u32.+"]
	b276_69["r__270 u32.!="]
	b276_76["mt__245__277 U32_maybeTrue"]
	b276_77["mf__246__278 U32_maybeFalse"]
	b276_78["mb__247__279 bool.&&"]
	b276_71 --> b276_68
	b276_68 --> b276_72
	b276_72 --> b276_69
	b276_69 --> b276_76
	b276_76 --> b276_77
	b276_77 --> b276_78
end
phi_287 --> block_276
subgraph phi_287["Phi 287"]
	p287_70{"deep__271 ϕ"}
end
block_288 --> phi_287
block_289 --> phi_287
subgraph block_288["Block 288"]
	direction TB
	b288_85["merge__254__286 merge"]
	b288_90["mv_t__263__291 |True|  [bool.&& [mb__252__284]]"]
	b288_85 --> b288_90
end
branch_286 --> block_288
subgraph branch_286["Branch 286"]
	br286_83["mb__252__284 bool.&&"]

end
block_294 --> branch_286
subgraph block_294["Block 294"]
	direction TB
	b294_66["arg__231__267 0"]
	b294_67["q__268 u32.!="]
	b294_81["mt__250__282 U32_maybeTrue"]
	b294_82["mf__251__283 U32_maybeFalse"]
	b294_83["mb__252__284 bool.&&"]
	b294_66 --> b294_67
	b294_67 --> b294_81
	b294_81 --> b294_82
	b294_82 --> b294_83
end
branch_259 --> block_294
subgraph branch_259["Branch 259"]
	br259_39["mt__240 U32_maybeTrue"]

end
branch_254 --> branch_259
subgraph block_289["Block 289"]
	direction TB
	b289_91["mv_f__264__292 |False|  [bool.&& [mb__252__284]]"]
end
phi_296 --> block_289
subgraph phi_296["Phi 296"]
	p296_84{"innerPhi__253__285 ϕ"}
end
block_297 --> phi_296
block_298 --> phi_296
subgraph block_297["Block 297"]
	direction TB
	b297_92["mv_t__265__293 |True|  [U32_maybeTrue [mt__250__282]]"]
end
branch_295 --> block_297
subgraph branch_295["Branch 295"]
	br295_81["mt__250__282 U32_maybeTrue"]

end
branch_286 --> branch_295
subgraph block_298["Block 298"]
	direction TB
	b298_93["mv_f__266__294 |False|  [U32_maybeTrue [mt__250__282]]"]
end
branch_295 --> block_298
subgraph block_271["Block 271"]
	direction TB
	b271_87["mv_f__260__288 |False|  [bool.&& [mb__247__279]]"]
end
phi_278 --> block_271
subgraph phi_278["Phi 278"]
	p278_79{"innerPhi__248__280 ϕ"}
end
block_279 --> phi_278
block_280 --> phi_278
subgraph block_279["Block 279"]
	direction TB
	b279_88["mv_t__261__289 |True|  [U32_maybeTrue [mt__245__277]]"]
end
branch_277 --> block_279
subgraph branch_277["Branch 277"]
	br277_76["mt__245__277 U32_maybeTrue"]

end
branch_268 --> branch_277
subgraph block_280["Block 280"]
	direction TB
	b280_89["mv_f__262__290 |False|  [U32_maybeTrue [mt__245__277]]"]
end
branch_277 --> block_280
subgraph block_262["Block 262"]
	direction TB
	b262_74["arg__219__275 1"]
	b262_75["result__217__276 u32.+"]
	b262_57["mv_f__258 |False|  [U32_maybeTrue [mt__240]]"]
	b262_74 --> b262_75
	b262_75 --> b262_57
end
branch_259 --> block_262

</pre>`;
window.traces["P3_FRONTIER"]["unlem_scheduler_ssa"] = ''
window.traces["P3_FRONTIER"]["unlem_scheduler_ssa"] += `<pre class=''>def c1 = pop_u32();
def c3 = pop_u32();
def c2 = pop_u32();
def A = pop_u32();
def B = pop_u32();
def arg__233 : u32 = 0;
def p = u32.!=(c1, arg__233);
def mt__240 = U32_maybeTrue(p);
def mf__241 = U32_maybeFalse(p);
def mb__242 = bool.&&(mt__240, mf__241);
if (mb__242) {
	def arg__231 : u32 = 0;
	def q = u32.!=(c3, arg__231);
	def mt__250 = U32_maybeTrue(q);
	def mf__251 = U32_maybeFalse(q);
	def mb__252 = bool.&&(mt__250, mf__251);
	if (mb__252) {
		def merge__254 = merge(A, B);
	} else {
		if (mt__250) {
		}
// phis: innerPhi__253 <- A; innerPhi__253 <- B; 
	}
// phis: deep <- merge__254; deep <- innerPhi__253; 
	def arg__224 : u32 = 0;
	def arg__229 : u32 = 0;
	def N = u32.+(deep, arg__224);
	def r = u32.!=(c2, arg__229);
	def mt__245 = U32_maybeTrue(r);
	def mf__246 = U32_maybeFalse(r);
	def mb__247 = bool.&&(mt__245, mf__246);
	if (mb__247) {
		def merge__249 = merge(N, N);
	} else {
		if (mt__245) {
		}
// phis: innerPhi__248 <- N; innerPhi__248 <- N; 
	}
// phis: triv <- merge__249; triv <- innerPhi__248; 
	def arg__219 : u32 = 1;
	def result__217 = u32.+(A, arg__219);
	def merge__244 = merge(triv, result__217);
} else {
	if (mt__240) {
		def arg__231__267 : u32 = 0;
		def arg__231 = (arg__231__267);
		def q__268 = u32.!=(c3, arg__231__267);
		def q = (q__268);
		def mt__250__282 = U32_maybeTrue(q__268);
		def mt__250 = (mt__250__282);
		def mf__251__283 = U32_maybeFalse(q__268);
		def mf__251 = (mf__251__283);
		def mb__252__284 = bool.&&(mt__250__282, mf__251__283);
		def mb__252 = (mb__252__284);
		if (mb__252__284) {
			def merge__254__286 = merge(A, B);
			def merge__254 = (merge__254__286);
		} else {
			if (mt__250__282) {
			}
// phis: innerPhi__253__285 <- A; innerPhi__253__285 <- B; 
		}
// phis: deep__271 <- merge__254__286; deep__271 <- innerPhi__253__285; 
		def arg__224__272 : u32 = 0;
		def arg__224 = (arg__224__272);
		def arg__229__269 : u32 = 0;
		def arg__229 = (arg__229__269);
		def N__273 = u32.+(deep__271, arg__224__272);
		def N = (N__273);
		def r__270 = u32.!=(c2, arg__229__269);
		def r = (r__270);
		def mt__245__277 = U32_maybeTrue(r__270);
		def mt__245 = (mt__245__277);
		def mf__246__278 = U32_maybeFalse(r__270);
		def mf__246 = (mf__246__278);
		def mb__247__279 = bool.&&(mt__245__277, mf__246__278);
		def mb__247 = (mb__247__279);
		if (mb__247__279) {
			def merge__249__281 = merge(N__273, N__273);
			def merge__249 = (merge__249__281);
		} else {
			if (mt__245__277) {
			}
// phis: innerPhi__248__280 <- N__273; innerPhi__248__280 <- N__273; 
		}
// phis: triv__274 <- merge__249__281; triv__274 <- innerPhi__248__280; 
	} else {
		def arg__219__275 : u32 = 1;
		def arg__219 = (arg__219__275);
		def result__217__276 = u32.+(A, arg__219__275);
		def result__217 = (result__217__276);
	}
// phis: innerPhi__243 <- triv__274; innerPhi__243 <- result__217__276; 
}
// phis: result <- merge__244; result <- innerPhi__243; 
def eff__213 = push_u32(result);
</pre>`;
window.traces["P3_FRONTIER"]["unlem_scheduler_ssa_pretty"] = ''
window.traces["P3_FRONTIER"]["unlem_scheduler_ssa_pretty"] += `<pre class=''>def c1 = pop_u32();
def c3 = pop_u32();
def c2 = pop_u32();
def A = pop_u32();
def B = pop_u32();
def mt = U32_maybeTrue(u32.!=(c1, 0));
def mf = U32_maybeFalse(u32.!=(c1, 0));
var result;
if (bool.&&(mt, mf)) {
	def mt1 = U32_maybeTrue(u32.!=(c3, 0));
	def mf1 = U32_maybeFalse(u32.!=(c3, 0));
	var deep: u32;
	if (bool.&&(mt1, mf1)) {
		deep = merge(A, B);
	} else {
		if (mt1) {
			deep = A;
		} else {
			deep = B;
		}
	}
	def N = u32.+(deep, 0);
	def mt2 = U32_maybeTrue(u32.!=(c2, 0));
	def mf2 = U32_maybeFalse(u32.!=(c2, 0));
	var triv: u32;
	if (bool.&&(mt2, mf2)) {
		triv = merge(N, N);
	} else {
		if (mt2) {
			triv = N;
		} else {
			triv = N;
		}
	}
	result = merge(triv, u32.+(A, 1));
} else {
	if (mt) {
		def mt3 = U32_maybeTrue(u32.!=(c3, 0));
		def mf3 = U32_maybeFalse(u32.!=(c3, 0));
		var deep__271: u32;
		if (bool.&&(mt3, mf3)) {
			deep__271 = merge(A, B);
			def merge = (merge__254__286);
		} else {
			if (mt3) {
				deep__271 = A;
			} else {
				deep__271 = B;
			}
		}
		def N1 = u32.+(deep__271, 0);
		def N2 = (N1);
		def mt4 = U32_maybeTrue(u32.!=(c2, 0));
		def mf4 = U32_maybeFalse(u32.!=(c2, 0));
		if (bool.&&(mt4, mf4)) {
			result = merge(N1, N1);
			def merge1 = (merge__249__281);
		} else {
			if (mt4) {
				result = N1;
			} else {
				result = N1;
			}
		}
	} else {
		result = u32.+(A, 1);
	}
}
push_u32(result);
</pre>`;
window.traces["EFFECT_LIFT_OVER_PARENT_COND"] = {}
window.traces["EFFECT_LIFT_OVER_PARENT_COND"]["parsed"] = ''
window.traces["EFFECT_LIFT_OVER_PARENT_COND"]["parsed"] += `<pre class=''>def c1 = pop_u32();
def c2 = pop_u32();
def arg__311 : u32 = 0;
def arg__310 = (c1);
def p = u32.!=(arg__310, arg__311);
def arg__309 : u32 = 0;
def arg__308 = (c2);
def q = u32.!=(arg__308, arg__309);
def x : u32 = 0;
def cond__305 = (p);
if (cond__305) {
	def x__306 = pop_u32();
} else {
	def x__307 : u32 = 7;
}
// phis: x <- x__306; x <- x__307; 
def y : u32 = 0;
def cond__300 = (q);
if (cond__300) {
	def arg__303 : u32 = 1;
	def arg__302 = (x);
	def y__301 = u32.+(arg__302, arg__303);
} else {
	def y__304 : u32 = 9;
}
// phis: y <- y__301; y <- y__304; 
def z : u32 = 0;
def cond__297 = (p);
if (cond__297) {
	def z__298 = (y);
} else {
	def z__299 : u32 = 3;
}
// phis: z <- z__298; z <- z__299; 
def arg__296 = (z);
def eff__295 = push_u32(arg__296);
</pre>`;
window.traces["EFFECT_LIFT_OVER_PARENT_COND"]["initial_pretty"] = ''
window.traces["EFFECT_LIFT_OVER_PARENT_COND"]["initial_pretty"] += `<pre class=''>def c1 = pop_u32();
def c2 = pop_u32();
var x = 0;
if ((u32.!=((c1), 0))) {
	x = pop_u32();
} else {
	x = 7;
}
var y = 0;
if ((u32.!=((c2), 0))) {
	y = u32.+((x), 1);
} else {
	y = 9;
}
var z = 0;
if ((u32.!=((c1), 0))) {
	z = (y);
} else {
	z = 3;
}
push_u32((z));
</pre>`;
window.traces["EFFECT_LIFT_OVER_PARENT_COND"]["raw"] = ''
window.traces["EFFECT_LIFT_OVER_PARENT_COND"]["raw"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	30 -. Stack .-> 1
	30["eff__295 push_u32"]
	28 --> 30
	16 -. Stack .-> 30
	16{{"sea__312 Sϕ Stack "}}
	7 --> 16
	14 --> 16
	4 --> 16
	4["c2 pop_u32"]
	3 -. Stack .-> 4
	3["c1 pop_u32"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	14["x__306 pop_u32"]
	4 -. Stack .-> 14
	7["p u32.!="]
	3 --> 7
	5 --> 7
	5["arg__311 0"]
	28{"z ϕ"}
	7 --> 28
	23 --> 28
	26 --> 28
	26["z__299 3"]
	23{"y ϕ"}
	10 --> 23
	22 --> 23
	19 --> 23
	19["y__304 9"]
	22["y__301 u32.+"]
	15 --> 22
	20 --> 22
	20["arg__303 1"]
	15{"x ϕ"}
	7 --> 15
	14 --> 15
	13 --> 15
	13["x__307 7"]
	10["q u32.!="]
	4 --> 10
	8 --> 10
	8["arg__309 0"]
</pre>`;
window.traces["EFFECT_LIFT_OVER_PARENT_COND"]["scheduler_start"] = ''
window.traces["EFFECT_LIFT_OVER_PARENT_COND"]["scheduler_start"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	30 -. Stack .-> 1
	30["eff__295 push_u32"]
	28 --> 30
	16 -. Stack .-> 30
	16{{"sea__312 Sϕ Stack "}}
	7 --> 16
	33 --> 16
	34 --> 16
	34["mv_f__316 |False|  [u32.!= [p]]"]
	7 --> 34
	4 -. Stack .-> 34
	4["c2 pop_u32"]
	3 -. Stack .-> 4
	3["c1 pop_u32"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	7["p u32.!="]
	3 --> 7
	5 --> 7
	5["arg__311 0"]
	33["mv_t__315 |True|  [u32.!= [p]]"]
	7 --> 33
	14 -. Stack .-> 33
	14["x__306 pop_u32"]
	4 -. Stack .-> 14
	28{"z ϕ"}
	7 --> 28
	31 --> 28
	32 --> 28
	32["mv_f__314 |False|  [u32.!= [p]]"]
	7 --> 32
	26 --> 32
	26["z__299 3"]
	31["mv_t__313 |True|  [u32.!= [p]]"]
	7 --> 31
	23 --> 31
	23{"y ϕ"}
	10 --> 23
	35 --> 23
	36 --> 23
	36["mv_f__318 |False|  [u32.!= [q]]"]
	10 --> 36
	19 --> 36
	19["y__304 9"]
	10["q u32.!="]
	4 --> 10
	8 --> 10
	8["arg__309 0"]
	35["mv_t__317 |True|  [u32.!= [q]]"]
	10 --> 35
	22 --> 35
	22["y__301 u32.+"]
	15 --> 22
	20 --> 22
	20["arg__303 1"]
	15{"x ϕ"}
	7 --> 15
	37 --> 15
	38 --> 15
	38["mv_f__320 |False|  [u32.!= [p]]"]
	7 --> 38
	13 --> 38
	13["x__307 7"]
	37["mv_t__319 |True|  [u32.!= [p]]"]
	7 --> 37
	14 --> 37
</pre>`;
window.traces["EFFECT_LIFT_OVER_PARENT_COND"]["untangled"] = ''
window.traces["EFFECT_LIFT_OVER_PARENT_COND"]["untangled"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	30 -. Stack .-> 1
	30["eff__295 push_u32"]
	28 --> 30
	16 -. Stack .-> 30
	16{{"sea__312 Sϕ Stack "}}
	7 --> 16
	33 --> 16
	34 --> 16
	34["mv_f__316 |False|  [u32.!= [p]]"]
	7 --> 34
	4 -. Stack .-> 34
	4["c2 pop_u32"]
	3 -. Stack .-> 4
	3["c1 pop_u32"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	7["p u32.!="]
	3 --> 7
	5 --> 7
	5["arg__311 0"]
	33["mv_t__315 |True|  [u32.!= [p]]"]
	7 --> 33
	14 -. Stack .-> 33
	14["x__306 pop_u32"]
	4 -. Stack .-> 14
	28{"z ϕ"}
	7 --> 28
	31 --> 28
	32 --> 28
	32["mv_f__314 |False|  [u32.!= [p]]"]
	7 --> 32
	26 --> 32
	26["z__299 3"]
	31["mv_t__313 |True|  [u32.!= [p]]"]
	7 --> 31
	23 --> 31
	23{"y ϕ"}
	10 --> 23
	35 --> 23
	36 --> 23
	36["mv_f__318 |False|  [u32.!= [q]]"]
	10 --> 36
	19 --> 36
	19["y__304 9"]
	10["q u32.!="]
	4 --> 10
	8 --> 10
	8["arg__309 0"]
	35["mv_t__317 |True|  [u32.!= [q]]"]
	10 --> 35
	22 --> 35
	22["y__301 u32.+"]
	15 --> 22
	20 --> 22
	20["arg__303 1"]
	15{"x ϕ"}
	7 --> 15
	37 --> 15
	38 --> 15
	38["mv_f__320 |False|  [u32.!= [p]]"]
	7 --> 38
	13 --> 38
	13["x__307 7"]
	37["mv_t__319 |True|  [u32.!= [p]]"]
	7 --> 37
	14 --> 37
</pre>`;
window.traces["EFFECT_LIFT_OVER_PARENT_COND"]["schedulerMermaid"] = ''
window.traces["EFFECT_LIFT_OVER_PARENT_COND"]["schedulerMermaid"] += `<pre class='graph'>graph TD
subgraph block_299["Block 299"]
	direction TB
	b299_30["eff__295 push_u32"]
	b299_1[\\"Finish"/]
	b299_30 --> b299_1
end
phi_311 --> block_299
subgraph phi_311["Phi 311"]
	p311_28{"z ϕ"}
	p311_16{{"sea__312 Sϕ Stack "}}
end
block_312 --> phi_311
block_313 --> phi_311
subgraph block_312["Block 312"]
	direction TB
	b312_31["mv_t__313 |True|  [u32.!= [p]]"]
	b312_33["mv_t__315 |True|  [u32.!= [p]]"]
	b312_31 --> b312_33
end
phi_315 --> block_312
subgraph phi_315["Phi 315"]
	p315_23{"y ϕ"}
end
block_316 --> phi_315
block_317 --> phi_315
subgraph block_316["Block 316"]
	direction TB
	b316_20["arg__303 1"]
	b316_22["y__301 u32.+"]
	b316_35["mv_t__317 |True|  [u32.!= [q]]"]
	b316_20 --> b316_22
	b316_22 --> b316_35
end
phi_320 --> block_316
subgraph phi_320["Phi 320"]
	p320_15{"x ϕ"}
end
block_321 --> phi_320
block_322 --> phi_320
subgraph block_321["Block 321"]
	direction TB
	b321_37["mv_t__319 |True|  [u32.!= [p]]"]
end
branch_319 --> block_321
subgraph branch_319["Branch 319"]
	br319_7["p u32.!="]

end
branch_314 --> branch_319
subgraph branch_314["Branch 314"]
	br314_10["q u32.!="]

end
block_318 --> branch_314
subgraph block_318["Block 318"]
	direction TB
	b318_14["x__306 pop_u32"]
	b318_8["arg__309 0"]
	b318_10["q u32.!="]
	b318_14 --> b318_8
	b318_8 --> b318_10
end
branch_310 --> block_318
subgraph branch_310["Branch 310"]
	br310_7["p u32.!="]

end
block_323 --> branch_310
subgraph block_323["Block 323"]
	direction TB
	b323_0[/"Start"\\]
	b323_3["c1 pop_u32"]
	b323_4["c2 pop_u32"]
	b323_5["arg__311 0"]
	b323_7["p u32.!="]
	b323_0 --> b323_3
	b323_3 --> b323_4
	b323_4 --> b323_5
	b323_5 --> b323_7
end
subgraph block_322["Block 322"]
	direction TB
	b322_13["x__307 7"]
	b322_38["mv_f__320 |False|  [u32.!= [p]]"]
	b322_13 --> b322_38
end
branch_319 --> block_322
subgraph block_317["Block 317"]
	direction TB
	b317_19["y__304 9"]
	b317_36["mv_f__318 |False|  [u32.!= [q]]"]
	b317_19 --> b317_36
end
branch_314 --> block_317
subgraph block_313["Block 313"]
	direction TB
	b313_26["z__299 3"]
	b313_32["mv_f__314 |False|  [u32.!= [p]]"]
	b313_34["mv_f__316 |False|  [u32.!= [p]]"]
	b313_26 --> b313_32
	b313_32 --> b313_34
end
branch_310 --> block_313

</pre>`;
window.traces["EFFECT_LIFT_OVER_PARENT_COND"]["scheduler_ssad"] = ''
window.traces["EFFECT_LIFT_OVER_PARENT_COND"]["scheduler_ssad"] += `<pre class=''>def c1 = pop_u32();
def c2 = pop_u32();
def arg__311 : u32 = 0;
def p = u32.!=(c1, arg__311);
if (p) {
	def x__306 = pop_u32();
	def arg__309 : u32 = 0;
	def q = u32.!=(c2, arg__309);
	if (q) {
		if (p) {
		} else {
			def x__307 : u32 = 7;
		}
// phis: x <- x__306; x <- x__307; 
		def arg__303 : u32 = 1;
		def y__301 = u32.+(x, arg__303);
	} else {
		def y__304 : u32 = 9;
	}
// phis: y <- y__301; y <- y__304; 
} else {
	def z__299 : u32 = 3;
}
// phis: z <- y; z <- z__299; 
def eff__295 = push_u32(z);
</pre>`;
window.traces["EFFECT_LIFT_OVER_PARENT_COND"]["scheduler_ssad_pretty"] = ''
window.traces["EFFECT_LIFT_OVER_PARENT_COND"]["scheduler_ssad_pretty"] += `<pre class=''>def c1 = pop_u32();
def c2 = pop_u32();
var z: u32;
if (u32.!=(c1, 0)) {
	var x = pop_u32();
	if (u32.!=(c2, 0)) {
		if (u32.!=(c1, 0)) {
		} else {
			x = 7;
		}
		z = u32.+(x, 1);
	} else {
		z = 9;
	}
} else {
	z = 3;
}
push_u32(z);
</pre>`;
window.traces["EFFECT_LIFT_OVER_PARENT_COND"]["unLEM"] = ''
window.traces["EFFECT_LIFT_OVER_PARENT_COND"]["unLEM"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	30 -. Stack .-> 1
	30["eff__295 push_u32"]
	28 --> 30
	16 -. Stack .-> 30
	16{{"sea__312 Sϕ Stack "}}
	33 --> 16
	37 --> 16
	36 --> 16
	36{{"innerPhi__326 Sϕ Stack "}}
	31 --> 36
	14 --> 36
	4 --> 36
	4["c2 pop_u32"]
	3 -. Stack .-> 4
	3["c1 pop_u32"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	14["x__306 pop_u32"]
	4 -. Stack .-> 14
	31["mt__321 U32_maybeTrue"]
	7 --> 31
	7["p u32.!="]
	3 --> 7
	5 --> 7
	5["arg__311 0"]
	37["eff_merge__327 merge"]
	14 --> 37
	4 --> 37
	33["mb__323 bool.&&"]
	31 --> 33
	32 --> 33
	32["mf__322 U32_maybeFalse"]
	7 --> 32
	28{"z ϕ"}
	33 --> 28
	35 --> 28
	34 --> 28
	34{"innerPhi__324 ϕ"}
	31 --> 34
	23 --> 34
	26 --> 34
	26["z__299 3"]
	23{"y ϕ"}
	40 --> 23
	42 --> 23
	41 --> 23
	41{"innerPhi__331 ϕ"}
	38 --> 41
	22 --> 41
	19 --> 41
	19["y__304 9"]
	22["y__301 u32.+"]
	15 --> 22
	20 --> 22
	20["arg__303 1"]
	15{"x ϕ"}
	33 --> 15
	44 --> 15
	43 --> 15
	43{"innerPhi__333 ϕ"}
	31 --> 43
	14 --> 43
	13 --> 43
	13["x__307 7"]
	44["merge__334 merge"]
	14 --> 44
	13 --> 44
	38["mt__328 U32_maybeTrue"]
	10 --> 38
	10["q u32.!="]
	4 --> 10
	8 --> 10
	8["arg__309 0"]
	42["merge__332 merge"]
	22 --> 42
	19 --> 42
	40["mb__330 bool.&&"]
	38 --> 40
	39 --> 40
	39["mf__329 U32_maybeFalse"]
	10 --> 39
	35["merge__325 merge"]
	23 --> 35
	26 --> 35
</pre>`;
window.traces["EFFECT_LIFT_OVER_PARENT_COND_ul"] = {}
window.traces["EFFECT_LIFT_OVER_PARENT_COND_ul"]["scheduler_start"] = ''
window.traces["EFFECT_LIFT_OVER_PARENT_COND_ul"]["scheduler_start"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	30 -. Stack .-> 1
	30["eff__295 push_u32"]
	28 --> 30
	16 -. Stack .-> 30
	16{{"sea__312 Sϕ Stack "}}
	33 --> 16
	47 --> 16
	48 --> 16
	48["mv_f__338 |False|  [bool.&& [mb__323]]"]
	33 --> 48
	36 -. Stack .-> 48
	36{{"innerPhi__326 Sϕ Stack "}}
	31 --> 36
	51 --> 36
	52 --> 36
	52["mv_f__342 |False|  [U32_maybeTrue [mt__321]]"]
	31 --> 52
	4 -. Stack .-> 52
	4["c2 pop_u32"]
	3 -. Stack .-> 4
	3["c1 pop_u32"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	31["mt__321 U32_maybeTrue"]
	7 --> 31
	7["p u32.!="]
	3 --> 7
	5 --> 7
	5["arg__311 0"]
	51["mv_t__341 |True|  [U32_maybeTrue [mt__321]]"]
	31 --> 51
	14 -. Stack .-> 51
	14["x__306 pop_u32"]
	4 -. Stack .-> 14
	33["mb__323 bool.&&"]
	31 --> 33
	32 --> 33
	32["mf__322 U32_maybeFalse"]
	7 --> 32
	47["mv_t__337 |True|  [bool.&& [mb__323]]"]
	33 --> 47
	37 -. Stack .-> 47
	37["eff_merge__327 merge"]
	14 --> 37
	4 --> 37
	28{"z ϕ"}
	33 --> 28
	45 --> 28
	46 --> 28
	46["mv_f__336 |False|  [bool.&& [mb__323]]"]
	33 --> 46
	34 --> 46
	34{"innerPhi__324 ϕ"}
	31 --> 34
	49 --> 34
	50 --> 34
	50["mv_f__340 |False|  [U32_maybeTrue [mt__321]]"]
	31 --> 50
	26 --> 50
	26["z__299 3"]
	49["mv_t__339 |True|  [U32_maybeTrue [mt__321]]"]
	31 --> 49
	23 --> 49
	23{"y ϕ"}
	40 --> 23
	53 --> 23
	54 --> 23
	54["mv_f__344 |False|  [bool.&& [mb__330]]"]
	40 --> 54
	41 --> 54
	41{"innerPhi__331 ϕ"}
	38 --> 41
	55 --> 41
	56 --> 41
	56["mv_f__346 |False|  [U32_maybeTrue [mt__328]]"]
	38 --> 56
	19 --> 56
	19["y__304 9"]
	38["mt__328 U32_maybeTrue"]
	10 --> 38
	10["q u32.!="]
	4 --> 10
	8 --> 10
	8["arg__309 0"]
	55["mv_t__345 |True|  [U32_maybeTrue [mt__328]]"]
	38 --> 55
	22 --> 55
	22["y__301 u32.+"]
	15 --> 22
	20 --> 22
	20["arg__303 1"]
	15{"x ϕ"}
	33 --> 15
	57 --> 15
	58 --> 15
	58["mv_f__348 |False|  [bool.&& [mb__323]]"]
	33 --> 58
	43 --> 58
	43{"innerPhi__333 ϕ"}
	31 --> 43
	59 --> 43
	60 --> 43
	60["mv_f__350 |False|  [U32_maybeTrue [mt__321]]"]
	31 --> 60
	13 --> 60
	13["x__307 7"]
	59["mv_t__349 |True|  [U32_maybeTrue [mt__321]]"]
	31 --> 59
	14 --> 59
	57["mv_t__347 |True|  [bool.&& [mb__323]]"]
	33 --> 57
	44 --> 57
	44["merge__334 merge"]
	14 --> 44
	13 --> 44
	40["mb__330 bool.&&"]
	38 --> 40
	39 --> 40
	39["mf__329 U32_maybeFalse"]
	10 --> 39
	53["mv_t__343 |True|  [bool.&& [mb__330]]"]
	40 --> 53
	42 --> 53
	42["merge__332 merge"]
	22 --> 42
	19 --> 42
	45["mv_t__335 |True|  [bool.&& [mb__323]]"]
	33 --> 45
	35 --> 45
	35["merge__325 merge"]
	23 --> 35
	26 --> 35
</pre>`;
window.traces["EFFECT_LIFT_OVER_PARENT_COND_ul"]["untangled"] = ''
window.traces["EFFECT_LIFT_OVER_PARENT_COND_ul"]["untangled"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	30 -. Stack .-> 1
	30["eff__295 push_u32"]
	28 --> 30
	16 -. Stack .-> 30
	16{{"sea__312 Sϕ Stack "}}
	33 --> 16
	47 --> 16
	48 --> 16
	48["mv_f__338 |False|  [bool.&& [mb__323]]"]
	33 --> 48
	36 -. Stack .-> 48
	36{{"innerPhi__326 Sϕ Stack "}}
	31 --> 36
	51 --> 36
	52 --> 36
	52["mv_f__342 |False|  [U32_maybeTrue [mt__321]]"]
	31 --> 52
	61 -. Stack .-> 52
	61["c2__351 pop_u32"]
	3 -. Stack .-> 61
	3["c1 pop_u32"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	31["mt__321 U32_maybeTrue"]
	7 --> 31
	7["p u32.!="]
	3 --> 7
	5 --> 7
	5["arg__311 0"]
	51["mv_t__341 |True|  [U32_maybeTrue [mt__321]]"]
	31 --> 51
	65 -. Stack .-> 51
	65["x__306__355 pop_u32"]
	61 -. Stack .-> 65
	33["mb__323 bool.&&"]
	31 --> 33
	32 --> 33
	32["mf__322 U32_maybeFalse"]
	7 --> 32
	47["mv_t__337 |True|  [bool.&& [mb__323]]"]
	33 --> 47
	37 -. Stack .-> 47
	37["eff_merge__327 merge"]
	14 --> 37
	4 --> 37
	4["c2 pop_u32"]
	3 -. Stack .-> 4
	14["x__306 pop_u32"]
	4 -. Stack .-> 14
	28{"z ϕ"}
	33 --> 28
	45 --> 28
	46 --> 28
	46["mv_f__336 |False|  [bool.&& [mb__323]]"]
	33 --> 46
	34 --> 46
	34{"innerPhi__324 ϕ"}
	31 --> 34
	49 --> 34
	50 --> 34
	50["mv_f__340 |False|  [U32_maybeTrue [mt__321]]"]
	31 --> 50
	71 --> 50
	71["z__299__361 3"]
	49["mv_t__339 |True|  [U32_maybeTrue [mt__321]]"]
	31 --> 49
	70 --> 49
	70{"y__360 ϕ"}
	74 --> 70
	79 --> 70
	80 --> 70
	80["mv_f__344__370 |False|  [bool.&& [mb__330__364]]"]
	74 --> 80
	75 --> 80
	75{"innerPhi__331__365 ϕ"}
	72 --> 75
	81 --> 75
	82 --> 75
	82["mv_f__346__372 |False|  [U32_maybeTrue [mt__328__362]]"]
	72 --> 82
	103 --> 82
	103["y__304__357__393 9"]
	72["mt__328__362 U32_maybeTrue"]
	63 --> 72
	63["q__353 u32.!="]
	61 --> 63
	62 --> 63
	62["arg__309__352 0"]
	81["mv_t__345__371 |True|  [U32_maybeTrue [mt__328__362]]"]
	72 --> 81
	105 --> 81
	105["y__301__359__395 u32.+"]
	102 --> 105
	104 --> 105
	104["arg__303__358__394 1"]
	102{"x__356__392 ϕ"}
	33 --> 102
	108 --> 102
	109 --> 102
	109["mv_f__348__374__399 |False|  [bool.&& [mb__323]]"]
	33 --> 109
	106 --> 109
	106{"innerPhi__333__367__396 ϕ"}
	31 --> 106
	110 --> 106
	111 --> 106
	111["mv_f__350__376__401 |False|  [U32_maybeTrue [mt__321]]"]
	31 --> 111
	112 --> 111
	112["x__307__354__389__402 7"]
	110["mv_t__349__375__400 |True|  [U32_maybeTrue [mt__321]]"]
	31 --> 110
	65 --> 110
	108["mv_t__347__373__398 |True|  [bool.&& [mb__323]]"]
	33 --> 108
	107 --> 108
	107["merge__334__368__397 merge"]
	65 --> 107
	101 --> 107
	101["x__307__354__391 7"]
	74["mb__330__364 bool.&&"]
	72 --> 74
	73 --> 74
	73["mf__329__363 U32_maybeFalse"]
	63 --> 73
	79["mv_t__343__369 |True|  [bool.&& [mb__330__364]]"]
	74 --> 79
	76 --> 79
	76["merge__332__366 merge"]
	69 --> 76
	67 --> 76
	67["y__304__357 9"]
	69["y__301__359 u32.+"]
	66 --> 69
	68 --> 69
	68["arg__303__358 1"]
	66{"x__356 ϕ"}
	33 --> 66
	83 --> 66
	84 --> 66
	84["mv_f__348__374 |False|  [bool.&& [mb__323]]"]
	33 --> 84
	77 --> 84
	77{"innerPhi__333__367 ϕ"}
	31 --> 77
	85 --> 77
	86 --> 77
	86["mv_f__350__376 |False|  [U32_maybeTrue [mt__321]]"]
	31 --> 86
	99 --> 86
	99["x__307__354__389 7"]
	85["mv_t__349__375 |True|  [U32_maybeTrue [mt__321]]"]
	31 --> 85
	65 --> 85
	83["mv_t__347__373 |True|  [bool.&& [mb__323]]"]
	33 --> 83
	78 --> 83
	78["merge__334__368 merge"]
	65 --> 78
	64 --> 78
	64["x__307__354 7"]
	45["mv_t__335 |True|  [bool.&& [mb__323]]"]
	33 --> 45
	35 --> 45
	35["merge__325 merge"]
	23 --> 35
	26 --> 35
	26["z__299 3"]
	23{"y ϕ"}
	40 --> 23
	53 --> 23
	54 --> 23
	54["mv_f__344 |False|  [bool.&& [mb__330]]"]
	40 --> 54
	41 --> 54
	41{"innerPhi__331 ϕ"}
	38 --> 41
	55 --> 41
	56 --> 41
	56["mv_f__346 |False|  [U32_maybeTrue [mt__328]]"]
	38 --> 56
	89 --> 56
	89["y__304__379 9"]
	38["mt__328 U32_maybeTrue"]
	10 --> 38
	10["q u32.!="]
	4 --> 10
	8 --> 10
	8["arg__309 0"]
	55["mv_t__345 |True|  [U32_maybeTrue [mt__328]]"]
	38 --> 55
	91 --> 55
	91["y__301__381 u32.+"]
	88 --> 91
	90 --> 91
	90["arg__303__380 1"]
	88{"x__378 ϕ"}
	33 --> 88
	94 --> 88
	95 --> 88
	95["mv_f__348__385 |False|  [bool.&& [mb__323]]"]
	33 --> 95
	92 --> 95
	92{"innerPhi__333__382 ϕ"}
	31 --> 92
	96 --> 92
	97 --> 92
	97["mv_f__350__387 |False|  [U32_maybeTrue [mt__321]]"]
	31 --> 97
	100 --> 97
	100["x__307__377__390 7"]
	96["mv_t__349__386 |True|  [U32_maybeTrue [mt__321]]"]
	31 --> 96
	14 --> 96
	94["mv_t__347__384 |True|  [bool.&& [mb__323]]"]
	33 --> 94
	93 --> 94
	93["merge__334__383 merge"]
	14 --> 93
	87 --> 93
	87["x__307__377 7"]
	40["mb__330 bool.&&"]
	38 --> 40
	39 --> 40
	39["mf__329 U32_maybeFalse"]
	10 --> 39
	53["mv_t__343 |True|  [bool.&& [mb__330]]"]
	40 --> 53
	42 --> 53
	42["merge__332 merge"]
	22 --> 42
	19 --> 42
	19["y__304 9"]
	22["y__301 u32.+"]
	15 --> 22
	20 --> 22
	20["arg__303 1"]
	15{"x ϕ"}
	33 --> 15
	57 --> 15
	58 --> 15
	58["mv_f__348 |False|  [bool.&& [mb__323]]"]
	33 --> 58
	43 --> 58
	43{"innerPhi__333 ϕ"}
	31 --> 43
	59 --> 43
	60 --> 43
	60["mv_f__350 |False|  [U32_maybeTrue [mt__321]]"]
	31 --> 60
	98 --> 60
	98["x__307__388 7"]
	59["mv_t__349 |True|  [U32_maybeTrue [mt__321]]"]
	31 --> 59
	14 --> 59
	57["mv_t__347 |True|  [bool.&& [mb__323]]"]
	33 --> 57
	44 --> 57
	44["merge__334 merge"]
	14 --> 44
	13 --> 44
	13["x__307 7"]
</pre>`;
window.traces["EFFECT_LIFT_OVER_PARENT_COND"]["unlem_scheduler"] = ''
window.traces["EFFECT_LIFT_OVER_PARENT_COND"]["unlem_scheduler"] += `<pre class='graph'>graph TD
subgraph block_324["Block 324"]
	direction TB
	b324_30["eff__295 push_u32"]
	b324_1[\\"Finish"/]
	b324_30 --> b324_1
end
phi_354 --> block_324
subgraph phi_354["Phi 354"]
	p354_28{"z ϕ"}
	p354_16{{"sea__312 Sϕ Stack "}}
end
block_355 --> phi_354
block_356 --> phi_354
subgraph block_355["Block 355"]
	direction TB
	b355_26["z__299 3"]
	b355_35["merge__325 merge"]
	b355_37["eff_merge__327 merge"]
	b355_45["mv_t__335 |True|  [bool.&& [mb__323]]"]
	b355_47["mv_t__337 |True|  [bool.&& [mb__323]]"]
	b355_26 --> b355_35
	b355_35 --> b355_37
	b355_37 --> b355_45
	b355_45 --> b355_47
end
phi_362 --> block_355
subgraph phi_362["Phi 362"]
	p362_23{"y ϕ"}
end
block_363 --> phi_362
block_364 --> phi_362
subgraph block_363["Block 363"]
	direction TB
	b363_20["arg__303 1"]
	b363_19["y__304 9"]
	b363_22["y__301 u32.+"]
	b363_42["merge__332 merge"]
	b363_53["mv_t__343 |True|  [bool.&& [mb__330]]"]
	b363_20 --> b363_19
	b363_19 --> b363_22
	b363_22 --> b363_42
	b363_42 --> b363_53
end
phi_380 --> block_363
subgraph phi_380["Phi 380"]
	p380_15{"x ϕ"}
end
block_381 --> phi_380
block_382 --> phi_380
subgraph block_381["Block 381"]
	direction TB
	b381_13["x__307 7"]
	b381_44["merge__334 merge"]
	b381_57["mv_t__347 |True|  [bool.&& [mb__323]]"]
	b381_13 --> b381_44
	b381_44 --> b381_57
end
branch_379 --> block_381
subgraph branch_379["Branch 379"]
	br379_33["mb__323 bool.&&"]

end
branch_361 --> branch_379
subgraph branch_361["Branch 361"]
	br361_40["mb__330 bool.&&"]

end
block_365 --> branch_361
subgraph block_365["Block 365"]
	direction TB
	b365_4["c2 pop_u32"]
	b365_14["x__306 pop_u32"]
	b365_8["arg__309 0"]
	b365_10["q u32.!="]
	b365_38["mt__328 U32_maybeTrue"]
	b365_39["mf__329 U32_maybeFalse"]
	b365_40["mb__330 bool.&&"]
	b365_4 --> b365_14
	b365_14 --> b365_8
	b365_8 --> b365_10
	b365_10 --> b365_38
	b365_38 --> b365_39
	b365_39 --> b365_40
end
branch_353 --> block_365
subgraph branch_353["Branch 353"]
	br353_33["mb__323 bool.&&"]

end
block_407 --> branch_353
subgraph block_407["Block 407"]
	direction TB
	b407_0[/"Start"\\]
	b407_3["c1 pop_u32"]
	b407_5["arg__311 0"]
	b407_7["p u32.!="]
	b407_31["mt__321 U32_maybeTrue"]
	b407_32["mf__322 U32_maybeFalse"]
	b407_33["mb__323 bool.&&"]
	b407_0 --> b407_3
	b407_3 --> b407_5
	b407_5 --> b407_7
	b407_7 --> b407_31
	b407_31 --> b407_32
	b407_32 --> b407_33
end
subgraph block_382["Block 382"]
	direction TB
	b382_58["mv_f__348 |False|  [bool.&& [mb__323]]"]
end
phi_392 --> block_382
subgraph phi_392["Phi 392"]
	p392_43{"innerPhi__333 ϕ"}
end
block_393 --> phi_392
block_394 --> phi_392
subgraph block_393["Block 393"]
	direction TB
	b393_59["mv_t__349 |True|  [U32_maybeTrue [mt__321]]"]
end
branch_391 --> block_393
subgraph branch_391["Branch 391"]
	br391_31["mt__321 U32_maybeTrue"]

end
branch_379 --> branch_391
subgraph block_394["Block 394"]
	direction TB
	b394_98["x__307__388 7"]
	b394_60["mv_f__350 |False|  [U32_maybeTrue [mt__321]]"]
	b394_98 --> b394_60
end
branch_391 --> block_394
subgraph block_364["Block 364"]
	direction TB
	b364_54["mv_f__344 |False|  [bool.&& [mb__330]]"]
end
phi_371 --> block_364
subgraph phi_371["Phi 371"]
	p371_41{"innerPhi__331 ϕ"}
end
block_372 --> phi_371
block_373 --> phi_371
subgraph block_372["Block 372"]
	direction TB
	b372_90["arg__303__380 1"]
	b372_91["y__301__381 u32.+"]
	b372_55["mv_t__345 |True|  [U32_maybeTrue [mt__328]]"]
	b372_90 --> b372_91
	b372_91 --> b372_55
end
phi_384 --> block_372
subgraph phi_384["Phi 384"]
	p384_88{"x__378 ϕ"}
end
block_385 --> phi_384
block_386 --> phi_384
subgraph block_385["Block 385"]
	direction TB
	b385_87["x__307__377 7"]
	b385_93["merge__334__383 merge"]
	b385_94["mv_t__347__384 |True|  [bool.&& [mb__323]]"]
	b385_87 --> b385_93
	b385_93 --> b385_94
end
branch_383 --> block_385
subgraph branch_383["Branch 383"]
	br383_33["mb__323 bool.&&"]

end
branch_370 --> branch_383
subgraph branch_370["Branch 370"]
	br370_38["mt__328 U32_maybeTrue"]

end
branch_361 --> branch_370
subgraph block_386["Block 386"]
	direction TB
	b386_95["mv_f__348__385 |False|  [bool.&& [mb__323]]"]
end
phi_400 --> block_386
subgraph phi_400["Phi 400"]
	p400_92{"innerPhi__333__382 ϕ"}
end
block_401 --> phi_400
block_402 --> phi_400
subgraph block_401["Block 401"]
	direction TB
	b401_96["mv_t__349__386 |True|  [U32_maybeTrue [mt__321]]"]
end
branch_399 --> block_401
subgraph branch_399["Branch 399"]
	br399_31["mt__321 U32_maybeTrue"]

end
branch_383 --> branch_399
subgraph block_402["Block 402"]
	direction TB
	b402_100["x__307__377__390 7"]
	b402_97["mv_f__350__387 |False|  [U32_maybeTrue [mt__321]]"]
	b402_100 --> b402_97
end
branch_399 --> block_402
subgraph block_373["Block 373"]
	direction TB
	b373_89["y__304__379 9"]
	b373_56["mv_f__346 |False|  [U32_maybeTrue [mt__328]]"]
	b373_89 --> b373_56
end
branch_370 --> block_373
subgraph block_356["Block 356"]
	direction TB
	b356_46["mv_f__336 |False|  [bool.&& [mb__323]]"]
	b356_48["mv_f__338 |False|  [bool.&& [mb__323]]"]
	b356_46 --> b356_48
end
phi_358 --> block_356
subgraph phi_358["Phi 358"]
	p358_34{"innerPhi__324 ϕ"}
	p358_36{{"innerPhi__326 Sϕ Stack "}}
end
block_359 --> phi_358
block_360 --> phi_358
subgraph block_359["Block 359"]
	direction TB
	b359_49["mv_t__339 |True|  [U32_maybeTrue [mt__321]]"]
	b359_51["mv_t__341 |True|  [U32_maybeTrue [mt__321]]"]
	b359_49 --> b359_51
end
phi_367 --> block_359
subgraph phi_367["Phi 367"]
	p367_70{"y__360 ϕ"}
end
block_368 --> phi_367
block_369 --> phi_367
subgraph block_368["Block 368"]
	direction TB
	b368_68["arg__303__358 1"]
	b368_67["y__304__357 9"]
	b368_69["y__301__359 u32.+"]
	b368_76["merge__332__366 merge"]
	b368_79["mv_t__343__369 |True|  [bool.&& [mb__330__364]]"]
	b368_68 --> b368_67
	b368_67 --> b368_69
	b368_69 --> b368_76
	b368_76 --> b368_79
end
phi_388 --> block_368
subgraph phi_388["Phi 388"]
	p388_66{"x__356 ϕ"}
end
block_389 --> phi_388
block_390 --> phi_388
subgraph block_389["Block 389"]
	direction TB
	b389_64["x__307__354 7"]
	b389_78["merge__334__368 merge"]
	b389_83["mv_t__347__373 |True|  [bool.&& [mb__323]]"]
	b389_64 --> b389_78
	b389_78 --> b389_83
end
branch_387 --> block_389
subgraph branch_387["Branch 387"]
	br387_33["mb__323 bool.&&"]

end
branch_366 --> branch_387
subgraph branch_366["Branch 366"]
	br366_74["mb__330__364 bool.&&"]

end
block_374 --> branch_366
subgraph block_374["Block 374"]
	direction TB
	b374_65["x__306__355 pop_u32"]
	b374_62["arg__309__352 0"]
	b374_63["q__353 u32.!="]
	b374_72["mt__328__362 U32_maybeTrue"]
	b374_73["mf__329__363 U32_maybeFalse"]
	b374_74["mb__330__364 bool.&&"]
	b374_65 --> b374_62
	b374_62 --> b374_63
	b374_63 --> b374_72
	b374_72 --> b374_73
	b374_73 --> b374_74
end
branch_357 --> block_374
subgraph branch_357["Branch 357"]
	br357_31["mt__321 U32_maybeTrue"]

end
block_412 --> branch_357
subgraph block_412["Block 412"]
	direction TB
	b412_61["c2__351 pop_u32"]
end
branch_353 --> block_412
subgraph block_390["Block 390"]
	direction TB
	b390_84["mv_f__348__374 |False|  [bool.&& [mb__323]]"]
end
phi_404 --> block_390
subgraph phi_404["Phi 404"]
	p404_77{"innerPhi__333__367 ϕ"}
end
block_405 --> phi_404
block_406 --> phi_404
subgraph block_405["Block 405"]
	direction TB
	b405_85["mv_t__349__375 |True|  [U32_maybeTrue [mt__321]]"]
end
branch_403 --> block_405
subgraph branch_403["Branch 403"]
	br403_31["mt__321 U32_maybeTrue"]

end
branch_387 --> branch_403
subgraph block_406["Block 406"]
	direction TB
	b406_99["x__307__354__389 7"]
	b406_86["mv_f__350__376 |False|  [U32_maybeTrue [mt__321]]"]
	b406_99 --> b406_86
end
branch_403 --> block_406
subgraph block_369["Block 369"]
	direction TB
	b369_80["mv_f__344__370 |False|  [bool.&& [mb__330__364]]"]
end
phi_376 --> block_369
subgraph phi_376["Phi 376"]
	p376_75{"innerPhi__331__365 ϕ"}
end
block_377 --> phi_376
block_378 --> phi_376
subgraph block_377["Block 377"]
	direction TB
	b377_104["arg__303__358__394 1"]
	b377_105["y__301__359__395 u32.+"]
	b377_81["mv_t__345__371 |True|  [U32_maybeTrue [mt__328__362]]"]
	b377_104 --> b377_105
	b377_105 --> b377_81
end
phi_396 --> block_377
subgraph phi_396["Phi 396"]
	p396_102{"x__356__392 ϕ"}
end
block_397 --> phi_396
block_398 --> phi_396
subgraph block_397["Block 397"]
	direction TB
	b397_101["x__307__354__391 7"]
	b397_107["merge__334__368__397 merge"]
	b397_108["mv_t__347__373__398 |True|  [bool.&& [mb__323]]"]
	b397_101 --> b397_107
	b397_107 --> b397_108
end
branch_395 --> block_397
subgraph branch_395["Branch 395"]
	br395_33["mb__323 bool.&&"]

end
branch_375 --> branch_395
subgraph branch_375["Branch 375"]
	br375_72["mt__328__362 U32_maybeTrue"]

end
branch_366 --> branch_375
subgraph block_398["Block 398"]
	direction TB
	b398_109["mv_f__348__374__399 |False|  [bool.&& [mb__323]]"]
end
phi_409 --> block_398
subgraph phi_409["Phi 409"]
	p409_106{"innerPhi__333__367__396 ϕ"}
end
block_410 --> phi_409
block_411 --> phi_409
subgraph block_410["Block 410"]
	direction TB
	b410_110["mv_t__349__375__400 |True|  [U32_maybeTrue [mt__321]]"]
end
branch_408 --> block_410
subgraph branch_408["Branch 408"]
	br408_31["mt__321 U32_maybeTrue"]

end
branch_395 --> branch_408
subgraph block_411["Block 411"]
	direction TB
	b411_112["x__307__354__389__402 7"]
	b411_111["mv_f__350__376__401 |False|  [U32_maybeTrue [mt__321]]"]
	b411_112 --> b411_111
end
branch_408 --> block_411
subgraph block_378["Block 378"]
	direction TB
	b378_103["y__304__357__393 9"]
	b378_82["mv_f__346__372 |False|  [U32_maybeTrue [mt__328__362]]"]
	b378_103 --> b378_82
end
branch_375 --> block_378
subgraph block_360["Block 360"]
	direction TB
	b360_71["z__299__361 3"]
	b360_50["mv_f__340 |False|  [U32_maybeTrue [mt__321]]"]
	b360_52["mv_f__342 |False|  [U32_maybeTrue [mt__321]]"]
	b360_71 --> b360_50
	b360_50 --> b360_52
end
branch_357 --> block_360

</pre>`;
window.traces["EFFECT_LIFT_OVER_PARENT_COND"]["unlem_scheduler_ssa"] = ''
window.traces["EFFECT_LIFT_OVER_PARENT_COND"]["unlem_scheduler_ssa"] += `<pre class=''>def c1 = pop_u32();
def arg__311 : u32 = 0;
def p = u32.!=(c1, arg__311);
def mt__321 = U32_maybeTrue(p);
def mf__322 = U32_maybeFalse(p);
def mb__323 = bool.&&(mt__321, mf__322);
if (mb__323) {
	def c2 = pop_u32();
	def x__306 = pop_u32();
	def arg__309 : u32 = 0;
	def q = u32.!=(c2, arg__309);
	def mt__328 = U32_maybeTrue(q);
	def mf__329 = U32_maybeFalse(q);
	def mb__330 = bool.&&(mt__328, mf__329);
	if (mb__330) {
		if (mb__323) {
			def x__307 : u32 = 7;
			def merge__334 = merge(x__306, x__307);
		} else {
			if (mt__321) {
			} else {
				def x__307__388 : u32 = 7;
				def x__307 = (x__307__388);
			}
// phis: innerPhi__333 <- x__306; innerPhi__333 <- x__307__388; 
		}
// phis: x <- merge__334; x <- innerPhi__333; 
		def arg__303 : u32 = 1;
		def y__304 : u32 = 9;
		def y__301 = u32.+(x, arg__303);
		def merge__332 = merge(y__301, y__304);
	} else {
		if (mt__328) {
			if (mb__323) {
				def x__307__377 : u32 = 7;
				def merge__334__383 = merge(x__306, x__307__377);
				def merge__334 = (merge__334__383);
			} else {
				if (mt__321) {
				} else {
					def x__307__377__390 : u32 = 7;
				}
// phis: innerPhi__333__382 <- x__306; innerPhi__333__382 <- x__307__377__390; 
			}
// phis: x__378 <- merge__334__383; x__378 <- innerPhi__333__382; 
			def arg__303__380 : u32 = 1;
			def arg__303 = (arg__303__380);
			def y__301__381 = u32.+(x__378, arg__303__380);
			def y__301 = (y__301__381);
		} else {
			def y__304__379 : u32 = 9;
			def y__304 = (y__304__379);
		}
// phis: innerPhi__331 <- y__301__381; innerPhi__331 <- y__304__379; 
	}
// phis: y <- merge__332; y <- innerPhi__331; 
	def z__299 : u32 = 3;
	def merge__325 = merge(y, z__299);
	def eff_merge__327 = merge(x__306, c2);
} else {
	def c2__351 = pop_u32();
	def c2 = (c2__351);
	if (mt__321) {
		def x__306__355 = pop_u32();
		def x__306 = (x__306__355);
		def arg__309__352 : u32 = 0;
		def arg__309 = (arg__309__352);
		def q__353 = u32.!=(c2__351, arg__309__352);
		def q = (q__353);
		def mt__328__362 = U32_maybeTrue(q__353);
		def mt__328 = (mt__328__362);
		def mf__329__363 = U32_maybeFalse(q__353);
		def mf__329 = (mf__329__363);
		def mb__330__364 = bool.&&(mt__328__362, mf__329__363);
		def mb__330 = (mb__330__364);
		if (mb__330__364) {
			if (mb__323) {
				def x__307__354 : u32 = 7;
				def merge__334__368 = merge(x__306__355, x__307__354);
			} else {
				if (mt__321) {
				} else {
					def x__307__354__389 : u32 = 7;
				}
// phis: innerPhi__333__367 <- x__306__355; innerPhi__333__367 <- x__307__354__389; 
			}
// phis: x__356 <- merge__334__368; x__356 <- innerPhi__333__367; 
			def arg__303__358 : u32 = 1;
			def y__304__357 : u32 = 9;
			def y__301__359 = u32.+(x__356, arg__303__358);
			def merge__332__366 = merge(y__301__359, y__304__357);
			def merge__332 = (merge__332__366);
		} else {
			if (mt__328__362) {
				if (mb__323) {
					def x__307__354__391 : u32 = 7;
					def merge__334__368__397 = merge(x__306__355, x__307__354__391);
				} else {
					if (mt__321) {
					} else {
						def x__307__354__389__402 : u32 = 7;
					}
// phis: innerPhi__333__367__396 <- x__306__355; innerPhi__333__367__396 <- x__307__354__389__402; 
				}
// phis: x__356__392 <- merge__334__368__397; x__356__392 <- innerPhi__333__367__396; 
				def arg__303__358__394 : u32 = 1;
				def y__301__359__395 = u32.+(x__356__392, arg__303__358__394);
			} else {
				def y__304__357__393 : u32 = 9;
			}
// phis: innerPhi__331__365 <- y__301__359__395; innerPhi__331__365 <- y__304__357__393; 
		}
// phis: y__360 <- merge__332__366; y__360 <- innerPhi__331__365; 
	} else {
		def z__299__361 : u32 = 3;
		def z__299 = (z__299__361);
	}
// phis: innerPhi__324 <- y__360; innerPhi__324 <- z__299__361; 
}
// phis: z <- merge__325; z <- innerPhi__324; 
def eff__295 = push_u32(z);
</pre>`;
window.traces["EFFECT_LIFT_OVER_PARENT_COND"]["unlem_scheduler_ssa_pretty"] = ''
window.traces["EFFECT_LIFT_OVER_PARENT_COND"]["unlem_scheduler_ssa_pretty"] += `<pre class=''>def c1 = pop_u32();
def mt = U32_maybeTrue(u32.!=(c1, 0));
def mf = U32_maybeFalse(u32.!=(c1, 0));
var z: u32;
if (bool.&&(mt, mf)) {
	def c2 = pop_u32();
	var x = pop_u32();
	def mt1 = U32_maybeTrue(u32.!=(c2, 0));
	def mf1 = U32_maybeFalse(u32.!=(c2, 0));
	var y: u32;
	if (bool.&&(mt1, mf1)) {
		if (bool.&&(mt, mf)) {
			x = merge(x, 7);
		} else {
			if (mt) {
			} else {
				x = 7;
			}
		}
		y = merge(u32.+(x, 1), 9);
	} else {
		if (mt1) {
			var x__378: u32;
			if (bool.&&(mt, mf)) {
				x__378 = merge(x, 7);
				def merge = (merge__334__383);
			} else {
				if (mt) {
				} else {
					x__378 = 7;
				}
			}
			y = u32.+(x__378, 1);
		} else {
			y = 9;
		}
	}
	z = merge(y, 3);
} else {
	def c21 = pop_u32();
	if (mt) {
		def x1 = pop_u32();
		def x2 = (x1);
		def mt2 = U32_maybeTrue(u32.!=(c21, 0));
		def mf2 = U32_maybeFalse(u32.!=(c21, 0));
		if (bool.&&(mt2, mf2)) {
			var x__356: u32;
			if (bool.&&(mt, mf)) {
				x__356 = merge(x1, 7);
			} else {
				if (mt) {
					x__356 = x1;
				} else {
					x__356 = 7;
				}
			}
			z = merge(u32.+(x__356, 1), 9);
			def merge1 = (merge__332__366);
		} else {
			if (mt2) {
				var x__356__392: u32;
				if (bool.&&(mt, mf)) {
					x__356__392 = merge(x1, 7);
				} else {
					if (mt) {
						x__356__392 = x1;
					} else {
						x__356__392 = 7;
					}
				}
				z = u32.+(x__356__392, 1);
			} else {
				z = 9;
			}
		}
	} else {
		z = 3;
	}
}
push_u32(z);
</pre>`;
window.traces["SAME_SCOPE_Q_ON_BOTH_P_SIDES"] = {}
window.traces["SAME_SCOPE_Q_ON_BOTH_P_SIDES"]["parsed"] = ''
window.traces["SAME_SCOPE_Q_ON_BOTH_P_SIDES"]["parsed"] += `<pre class=''>def c1 = pop_u32();
def c2 = pop_u32();
def arg__421 : u32 = 0;
def arg__420 = (c1);
def p = u32.!=(arg__420, arg__421);
def arg__419 : u32 = 0;
def arg__418 = (c2);
def q = u32.!=(arg__418, arg__419);
def left : u32 = 0;
def cond__405 = (p);
if (cond__405) {
	def inner : u32 = 0;
	def cond__409 = (q);
	if (cond__409) {
		def inner__410 = pop_u32();
	} else {
		def inner__411 : u32 = 11;
	}
// phis: inner <- inner__410; inner <- inner__411; 
	def arg__408 : u32 = 1;
	def arg__407 = (inner);
	def left__406 = u32.+(arg__407, arg__408);
} else {
	def inner : u32 = 0;
	def cond__415 = (q);
	if (cond__415) {
		def inner__416 = pop_u32();
	} else {
		def inner__417 : u32 = 21;
	}
// phis: inner <- inner__416; inner <- inner__417; 
	def arg__414 : u32 = 2;
	def arg__413 = (inner);
	def left__412 = u32.+(arg__413, arg__414);
}
// phis: left <- left__406; left <- left__412; inner <- inner; inner <- inner; 
def arg__404 = (left);
def eff__403 = push_u32(arg__404);
</pre>`;
window.traces["SAME_SCOPE_Q_ON_BOTH_P_SIDES"]["initial_pretty"] = ''
window.traces["SAME_SCOPE_Q_ON_BOTH_P_SIDES"]["initial_pretty"] += `<pre class=''>def c1 = pop_u32();
def c2 = pop_u32();
var left = 0;
var inner;
if ((u32.!=((c1), 0))) {
	inner = 0;
	if ((u32.!=((c2), 0))) {
		inner = pop_u32();
	} else {
		inner = 11;
	}
	left = u32.+((inner), 1);
} else {
	inner = 0;
	if ((u32.!=((c2), 0))) {
		inner = pop_u32();
	} else {
		inner = 21;
	}
	left = u32.+((inner), 2);
}
push_u32((left));
</pre>`;
window.traces["SAME_SCOPE_Q_ON_BOTH_P_SIDES"]["raw"] = ''
window.traces["SAME_SCOPE_Q_ON_BOTH_P_SIDES"]["raw"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	35 -. Stack .-> 1
	35["eff__403 push_u32"]
	31 --> 35
	33 -. Stack .-> 35
	33{{"sea__424 Sϕ Stack "}}
	7 --> 33
	27 --> 33
	18 --> 33
	18{{"sea__422 Sϕ Stack "}}
	10 --> 18
	16 --> 18
	4 --> 18
	4["c2 pop_u32"]
	3 -. Stack .-> 4
	3["c1 pop_u32"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	16["inner__416 pop_u32"]
	4 -. Stack .-> 16
	10["q u32.!="]
	4 --> 10
	8 --> 10
	8["arg__419 0"]
	27{{"sea__423 Sϕ Stack "}}
	10 --> 27
	25 --> 27
	4 --> 27
	25["inner__410 pop_u32"]
	4 -. Stack .-> 25
	7["p u32.!="]
	3 --> 7
	5 --> 7
	5["arg__421 0"]
	31{"left ϕ"}
	7 --> 31
	30 --> 31
	21 --> 31
	21["left__412 u32.+"]
	17 --> 21
	19 --> 21
	19["arg__414 2"]
	17{"inner ϕ"}
	10 --> 17
	16 --> 17
	15 --> 17
	15["inner__417 21"]
	30["left__406 u32.+"]
	26 --> 30
	28 --> 30
	28["arg__408 1"]
	26{"inner ϕ"}
	10 --> 26
	25 --> 26
	24 --> 26
	24["inner__411 11"]
</pre>`;
window.traces["SAME_SCOPE_Q_ON_BOTH_P_SIDES"]["scheduler_start"] = ''
window.traces["SAME_SCOPE_Q_ON_BOTH_P_SIDES"]["scheduler_start"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	35 -. Stack .-> 1
	35["eff__403 push_u32"]
	31 --> 35
	33 -. Stack .-> 35
	33{{"sea__424 Sϕ Stack "}}
	7 --> 33
	38 --> 33
	39 --> 33
	39["mv_f__428 |False|  [u32.!= [p]]"]
	7 --> 39
	18 -. Stack .-> 39
	18{{"sea__422 Sϕ Stack "}}
	10 --> 18
	42 --> 18
	43 --> 18
	43["mv_f__432 |False|  [u32.!= [q]]"]
	10 --> 43
	4 -. Stack .-> 43
	4["c2 pop_u32"]
	3 -. Stack .-> 4
	3["c1 pop_u32"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	10["q u32.!="]
	4 --> 10
	8 --> 10
	8["arg__419 0"]
	42["mv_t__431 |True|  [u32.!= [q]]"]
	10 --> 42
	16 -. Stack .-> 42
	16["inner__416 pop_u32"]
	4 -. Stack .-> 16
	7["p u32.!="]
	3 --> 7
	5 --> 7
	5["arg__421 0"]
	38["mv_t__427 |True|  [u32.!= [p]]"]
	7 --> 38
	27 -. Stack .-> 38
	27{{"sea__423 Sϕ Stack "}}
	10 --> 27
	40 --> 27
	41 --> 27
	41["mv_f__430 |False|  [u32.!= [q]]"]
	10 --> 41
	4 -. Stack .-> 41
	40["mv_t__429 |True|  [u32.!= [q]]"]
	10 --> 40
	25 -. Stack .-> 40
	25["inner__410 pop_u32"]
	4 -. Stack .-> 25
	31{"left ϕ"}
	7 --> 31
	36 --> 31
	37 --> 31
	37["mv_f__426 |False|  [u32.!= [p]]"]
	7 --> 37
	21 --> 37
	21["left__412 u32.+"]
	17 --> 21
	19 --> 21
	19["arg__414 2"]
	17{"inner ϕ"}
	10 --> 17
	46 --> 17
	47 --> 17
	47["mv_f__436 |False|  [u32.!= [q]]"]
	10 --> 47
	15 --> 47
	15["inner__417 21"]
	46["mv_t__435 |True|  [u32.!= [q]]"]
	10 --> 46
	16 --> 46
	36["mv_t__425 |True|  [u32.!= [p]]"]
	7 --> 36
	30 --> 36
	30["left__406 u32.+"]
	26 --> 30
	28 --> 30
	28["arg__408 1"]
	26{"inner ϕ"}
	10 --> 26
	44 --> 26
	45 --> 26
	45["mv_f__434 |False|  [u32.!= [q]]"]
	10 --> 45
	24 --> 45
	24["inner__411 11"]
	44["mv_t__433 |True|  [u32.!= [q]]"]
	10 --> 44
	25 --> 44
</pre>`;
window.traces["SAME_SCOPE_Q_ON_BOTH_P_SIDES"]["untangled"] = ''
window.traces["SAME_SCOPE_Q_ON_BOTH_P_SIDES"]["untangled"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	35 -. Stack .-> 1
	35["eff__403 push_u32"]
	31 --> 35
	33 -. Stack .-> 35
	33{{"sea__424 Sϕ Stack "}}
	7 --> 33
	38 --> 33
	39 --> 33
	39["mv_f__428 |False|  [u32.!= [p]]"]
	7 --> 39
	18 -. Stack .-> 39
	18{{"sea__422 Sϕ Stack "}}
	10 --> 18
	42 --> 18
	43 --> 18
	43["mv_f__432 |False|  [u32.!= [q]]"]
	10 --> 43
	4 -. Stack .-> 43
	4["c2 pop_u32"]
	3 -. Stack .-> 4
	3["c1 pop_u32"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	10["q u32.!="]
	4 --> 10
	8 --> 10
	8["arg__419 0"]
	42["mv_t__431 |True|  [u32.!= [q]]"]
	10 --> 42
	16 -. Stack .-> 42
	16["inner__416 pop_u32"]
	4 -. Stack .-> 16
	7["p u32.!="]
	3 --> 7
	5 --> 7
	5["arg__421 0"]
	38["mv_t__427 |True|  [u32.!= [p]]"]
	7 --> 38
	27 -. Stack .-> 38
	27{{"sea__423 Sϕ Stack "}}
	10 --> 27
	40 --> 27
	41 --> 27
	41["mv_f__430 |False|  [u32.!= [q]]"]
	10 --> 41
	4 -. Stack .-> 41
	40["mv_t__429 |True|  [u32.!= [q]]"]
	10 --> 40
	25 -. Stack .-> 40
	25["inner__410 pop_u32"]
	4 -. Stack .-> 25
	31{"left ϕ"}
	7 --> 31
	36 --> 31
	37 --> 31
	37["mv_f__426 |False|  [u32.!= [p]]"]
	7 --> 37
	21 --> 37
	21["left__412 u32.+"]
	17 --> 21
	19 --> 21
	19["arg__414 2"]
	17{"inner ϕ"}
	10 --> 17
	46 --> 17
	47 --> 17
	47["mv_f__436 |False|  [u32.!= [q]]"]
	10 --> 47
	15 --> 47
	15["inner__417 21"]
	46["mv_t__435 |True|  [u32.!= [q]]"]
	10 --> 46
	16 --> 46
	36["mv_t__425 |True|  [u32.!= [p]]"]
	7 --> 36
	30 --> 36
	30["left__406 u32.+"]
	26 --> 30
	28 --> 30
	28["arg__408 1"]
	26{"inner ϕ"}
	10 --> 26
	44 --> 26
	45 --> 26
	45["mv_f__434 |False|  [u32.!= [q]]"]
	10 --> 45
	24 --> 45
	24["inner__411 11"]
	44["mv_t__433 |True|  [u32.!= [q]]"]
	10 --> 44
	25 --> 44
</pre>`;
window.traces["SAME_SCOPE_Q_ON_BOTH_P_SIDES"]["schedulerMermaid"] = ''
window.traces["SAME_SCOPE_Q_ON_BOTH_P_SIDES"]["schedulerMermaid"] += `<pre class='graph'>graph TD
subgraph block_413["Block 413"]
	direction TB
	b413_35["eff__403 push_u32"]
	b413_1[\\"Finish"/]
	b413_35 --> b413_1
end
phi_422 --> block_413
subgraph phi_422["Phi 422"]
	p422_33{{"sea__424 Sϕ Stack "}}
	p422_31{"left ϕ"}
end
block_423 --> phi_422
block_424 --> phi_422
subgraph block_423["Block 423"]
	direction TB
	b423_28["arg__408 1"]
	b423_30["left__406 u32.+"]
	b423_38["mv_t__427 |True|  [u32.!= [p]]"]
	b423_36["mv_t__425 |True|  [u32.!= [p]]"]
	b423_28 --> b423_30
	b423_30 --> b423_38
	b423_38 --> b423_36
end
phi_427 --> block_423
subgraph phi_427["Phi 427"]
	p427_27{{"sea__423 Sϕ Stack "}}
	p427_26{"inner ϕ"}
end
block_428 --> phi_427
block_429 --> phi_427
subgraph block_428["Block 428"]
	direction TB
	b428_25["inner__410 pop_u32"]
	b428_40["mv_t__429 |True|  [u32.!= [q]]"]
	b428_44["mv_t__433 |True|  [u32.!= [q]]"]
	b428_25 --> b428_40
	b428_40 --> b428_44
end
branch_426 --> block_428
subgraph branch_426["Branch 426"]
	br426_10["q u32.!="]

end
branch_421 --> branch_426
subgraph branch_421["Branch 421"]
	br421_7["p u32.!="]

end
block_425 --> branch_421
subgraph block_425["Block 425"]
	direction TB
	b425_0[/"Start"\\]
	b425_3["c1 pop_u32"]
	b425_4["c2 pop_u32"]
	b425_8["arg__419 0"]
	b425_10["q u32.!="]
	b425_5["arg__421 0"]
	b425_7["p u32.!="]
	b425_0 --> b425_3
	b425_3 --> b425_4
	b425_4 --> b425_8
	b425_8 --> b425_10
	b425_10 --> b425_5
	b425_5 --> b425_7
end
subgraph block_429["Block 429"]
	direction TB
	b429_24["inner__411 11"]
	b429_41["mv_f__430 |False|  [u32.!= [q]]"]
	b429_45["mv_f__434 |False|  [u32.!= [q]]"]
	b429_24 --> b429_41
	b429_41 --> b429_45
end
branch_426 --> block_429
subgraph block_424["Block 424"]
	direction TB
	b424_19["arg__414 2"]
	b424_21["left__412 u32.+"]
	b424_39["mv_f__428 |False|  [u32.!= [p]]"]
	b424_37["mv_f__426 |False|  [u32.!= [p]]"]
	b424_19 --> b424_21
	b424_21 --> b424_39
	b424_39 --> b424_37
end
phi_431 --> block_424
subgraph phi_431["Phi 431"]
	p431_18{{"sea__422 Sϕ Stack "}}
	p431_17{"inner ϕ"}
end
block_432 --> phi_431
block_433 --> phi_431
subgraph block_432["Block 432"]
	direction TB
	b432_16["inner__416 pop_u32"]
	b432_42["mv_t__431 |True|  [u32.!= [q]]"]
	b432_46["mv_t__435 |True|  [u32.!= [q]]"]
	b432_16 --> b432_42
	b432_42 --> b432_46
end
branch_430 --> block_432
subgraph branch_430["Branch 430"]
	br430_10["q u32.!="]

end
branch_421 --> branch_430
subgraph block_433["Block 433"]
	direction TB
	b433_15["inner__417 21"]
	b433_43["mv_f__432 |False|  [u32.!= [q]]"]
	b433_47["mv_f__436 |False|  [u32.!= [q]]"]
	b433_15 --> b433_43
	b433_43 --> b433_47
end
branch_430 --> block_433

</pre>`;
window.traces["SAME_SCOPE_Q_ON_BOTH_P_SIDES"]["scheduler_ssad"] = ''
window.traces["SAME_SCOPE_Q_ON_BOTH_P_SIDES"]["scheduler_ssad"] += `<pre class=''>def c1 = pop_u32();
def c2 = pop_u32();
def arg__419 : u32 = 0;
def q = u32.!=(c2, arg__419);
def arg__421 : u32 = 0;
def p = u32.!=(c1, arg__421);
if (p) {
	if (q) {
		def inner__410 = pop_u32();
	} else {
		def inner__411 : u32 = 11;
	}
// phis: inner <- inner__410; inner <- inner__411; 
	def arg__408 : u32 = 1;
	def left__406 = u32.+(inner, arg__408);
} else {
	if (q) {
		def inner__416 = pop_u32();
	} else {
		def inner__417 : u32 = 21;
	}
// phis: inner <- inner__416; inner <- inner__417; 
	def arg__414 : u32 = 2;
	def left__412 = u32.+(inner, arg__414);
}
// phis: left <- left__406; left <- left__412; 
def eff__403 = push_u32(left);
</pre>`;
window.traces["SAME_SCOPE_Q_ON_BOTH_P_SIDES"]["scheduler_ssad_pretty"] = ''
window.traces["SAME_SCOPE_Q_ON_BOTH_P_SIDES"]["scheduler_ssad_pretty"] += `<pre class=''>def c1 = pop_u32();
def c2 = pop_u32();
var left: u32;
if (u32.!=(c1, 0)) {
	var inner: u32;
	if (u32.!=(c2, 0)) {
		inner = pop_u32();
	} else {
		inner = 11;
	}
	left = u32.+(inner, 1);
} else {
	var inner: u32;
	if (u32.!=(c2, 0)) {
		inner = pop_u32();
	} else {
		inner = 21;
	}
	left = u32.+(inner, 2);
}
push_u32(left);
</pre>`;
window.traces["SAME_SCOPE_Q_ON_BOTH_P_SIDES"]["unLEM"] = ''
window.traces["SAME_SCOPE_Q_ON_BOTH_P_SIDES"]["unLEM"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	35 -. Stack .-> 1
	35["eff__403 push_u32"]
	31 --> 35
	33 -. Stack .-> 35
	33{{"sea__424 Sϕ Stack "}}
	38 --> 33
	44 --> 33
	41 --> 33
	41{{"innerPhi__442 Sϕ Stack "}}
	36 --> 41
	27 --> 41
	18 --> 41
	18{{"sea__422 Sϕ Stack "}}
	47 --> 18
	52 --> 18
	50 --> 18
	50{{"innerPhi__451 Sϕ Stack "}}
	45 --> 50
	16 --> 50
	4 --> 50
	4["c2 pop_u32"]
	3 -. Stack .-> 4
	3["c1 pop_u32"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	16["inner__416 pop_u32"]
	4 -. Stack .-> 16
	45["mt__446 U32_maybeTrue"]
	10 --> 45
	10["q u32.!="]
	4 --> 10
	8 --> 10
	8["arg__419 0"]
	52["eff_merge__453 merge"]
	16 --> 52
	51 --> 52
	51["eff_nop__452 nop"]
	47["mb__448 bool.&&"]
	45 --> 47
	46 --> 47
	46["mf__447 U32_maybeFalse"]
	10 --> 46
	27{{"sea__423 Sϕ Stack "}}
	47 --> 27
	49 --> 27
	48 --> 27
	48{{"innerPhi__449 Sϕ Stack "}}
	45 --> 48
	25 --> 48
	4 --> 48
	25["inner__410 pop_u32"]
	4 -. Stack .-> 25
	49["eff_merge__450 merge"]
	25 --> 49
	4 --> 49
	36["mt__437 U32_maybeTrue"]
	7 --> 36
	7["p u32.!="]
	3 --> 7
	5 --> 7
	5["arg__421 0"]
	44{{"merged_phi__445 Sϕ Stack "}}
	10 --> 44
	42 --> 44
	43 --> 44
	43["eff_merge__444 merge"]
	4 --> 43
	4 --> 43
	42["eff_merge__443 merge"]
	25 --> 42
	16 --> 42
	38["mb__439 bool.&&"]
	36 --> 38
	37 --> 38
	37["mf__438 U32_maybeFalse"]
	7 --> 37
	31{"left ϕ"}
	38 --> 31
	40 --> 31
	39 --> 31
	39{"innerPhi__440 ϕ"}
	36 --> 39
	30 --> 39
	21 --> 39
	21["left__412 u32.+"]
	17 --> 21
	19 --> 21
	19["arg__414 2"]
	17{"inner ϕ"}
	47 --> 17
	56 --> 17
	55 --> 17
	55{"innerPhi__456 ϕ"}
	45 --> 55
	16 --> 55
	15 --> 55
	15["inner__417 21"]
	56["merge__457 merge"]
	16 --> 56
	15 --> 56
	30["left__406 u32.+"]
	26 --> 30
	28 --> 30
	28["arg__408 1"]
	26{"inner ϕ"}
	47 --> 26
	54 --> 26
	53 --> 26
	53{"innerPhi__454 ϕ"}
	45 --> 53
	25 --> 53
	24 --> 53
	24["inner__411 11"]
	54["merge__455 merge"]
	25 --> 54
	24 --> 54
	40["merge__441 merge"]
	30 --> 40
	21 --> 40
</pre>`;
window.traces["SAME_SCOPE_Q_ON_BOTH_P_SIDES_ul"] = {}
window.traces["SAME_SCOPE_Q_ON_BOTH_P_SIDES_ul"]["scheduler_start"] = ''
window.traces["SAME_SCOPE_Q_ON_BOTH_P_SIDES_ul"]["scheduler_start"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	35 -. Stack .-> 1
	35["eff__403 push_u32"]
	31 --> 35
	33 -. Stack .-> 35
	33{{"sea__424 Sϕ Stack "}}
	38 --> 33
	59 --> 33
	60 --> 33
	60["mv_f__461 |False|  [bool.&& [mb__439]]"]
	38 --> 60
	41 -. Stack .-> 60
	41{{"innerPhi__442 Sϕ Stack "}}
	36 --> 41
	65 --> 41
	66 --> 41
	66["mv_f__467 |False|  [U32_maybeTrue [mt__437]]"]
	36 --> 66
	18 -. Stack .-> 66
	18{{"sea__422 Sϕ Stack "}}
	47 --> 18
	69 --> 18
	70 --> 18
	70["mv_f__471 |False|  [bool.&& [mb__448]]"]
	47 --> 70
	50 -. Stack .-> 70
	50{{"innerPhi__451 Sϕ Stack "}}
	45 --> 50
	77 --> 50
	78 --> 50
	78["mv_f__479 |False|  [U32_maybeTrue [mt__446]]"]
	45 --> 78
	4 -. Stack .-> 78
	4["c2 pop_u32"]
	3 -. Stack .-> 4
	3["c1 pop_u32"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	45["mt__446 U32_maybeTrue"]
	10 --> 45
	10["q u32.!="]
	4 --> 10
	8 --> 10
	8["arg__419 0"]
	77["mv_t__478 |True|  [U32_maybeTrue [mt__446]]"]
	45 --> 77
	16 -. Stack .-> 77
	16["inner__416 pop_u32"]
	4 -. Stack .-> 16
	47["mb__448 bool.&&"]
	45 --> 47
	46 --> 47
	46["mf__447 U32_maybeFalse"]
	10 --> 46
	69["mv_t__470 |True|  [bool.&& [mb__448]]"]
	47 --> 69
	52 -. Stack .-> 69
	52["eff_merge__453 merge"]
	16 --> 52
	51 --> 52
	51["eff_nop__452 nop"]
	36["mt__437 U32_maybeTrue"]
	7 --> 36
	7["p u32.!="]
	3 --> 7
	5 --> 7
	5["arg__421 0"]
	65["mv_t__466 |True|  [U32_maybeTrue [mt__437]]"]
	36 --> 65
	27 -. Stack .-> 65
	27{{"sea__423 Sϕ Stack "}}
	47 --> 27
	67 --> 27
	68 --> 27
	68["mv_f__469 |False|  [bool.&& [mb__448]]"]
	47 --> 68
	48 -. Stack .-> 68
	48{{"innerPhi__449 Sϕ Stack "}}
	45 --> 48
	75 --> 48
	76 --> 48
	76["mv_f__477 |False|  [U32_maybeTrue [mt__446]]"]
	45 --> 76
	4 -. Stack .-> 76
	75["mv_t__476 |True|  [U32_maybeTrue [mt__446]]"]
	45 --> 75
	25 -. Stack .-> 75
	25["inner__410 pop_u32"]
	4 -. Stack .-> 25
	67["mv_t__468 |True|  [bool.&& [mb__448]]"]
	47 --> 67
	49 -. Stack .-> 67
	49["eff_merge__450 merge"]
	25 --> 49
	4 --> 49
	38["mb__439 bool.&&"]
	36 --> 38
	37 --> 38
	37["mf__438 U32_maybeFalse"]
	7 --> 37
	59["mv_t__460 |True|  [bool.&& [mb__439]]"]
	38 --> 59
	44 -. Stack .-> 59
	44{{"merged_phi__445 Sϕ Stack "}}
	10 --> 44
	63 --> 44
	64 --> 44
	64["mv_f__465 |False|  [u32.!= [q]]"]
	10 --> 64
	43 -. Stack .-> 64
	43["eff_merge__444 merge"]
	4 --> 43
	4 --> 43
	63["mv_t__464 |True|  [u32.!= [q]]"]
	10 --> 63
	42 -. Stack .-> 63
	42["eff_merge__443 merge"]
	25 --> 42
	16 --> 42
	31{"left ϕ"}
	38 --> 31
	57 --> 31
	58 --> 31
	58["mv_f__459 |False|  [bool.&& [mb__439]]"]
	38 --> 58
	39 --> 58
	39{"innerPhi__440 ϕ"}
	36 --> 39
	61 --> 39
	62 --> 39
	62["mv_f__463 |False|  [U32_maybeTrue [mt__437]]"]
	36 --> 62
	21 --> 62
	21["left__412 u32.+"]
	17 --> 21
	19 --> 21
	19["arg__414 2"]
	17{"inner ϕ"}
	47 --> 17
	73 --> 17
	74 --> 17
	74["mv_f__475 |False|  [bool.&& [mb__448]]"]
	47 --> 74
	55 --> 74
	55{"innerPhi__456 ϕ"}
	45 --> 55
	81 --> 55
	82 --> 55
	82["mv_f__483 |False|  [U32_maybeTrue [mt__446]]"]
	45 --> 82
	15 --> 82
	15["inner__417 21"]
	81["mv_t__482 |True|  [U32_maybeTrue [mt__446]]"]
	45 --> 81
	16 --> 81
	73["mv_t__474 |True|  [bool.&& [mb__448]]"]
	47 --> 73
	56 --> 73
	56["merge__457 merge"]
	16 --> 56
	15 --> 56
	61["mv_t__462 |True|  [U32_maybeTrue [mt__437]]"]
	36 --> 61
	30 --> 61
	30["left__406 u32.+"]
	26 --> 30
	28 --> 30
	28["arg__408 1"]
	26{"inner ϕ"}
	47 --> 26
	71 --> 26
	72 --> 26
	72["mv_f__473 |False|  [bool.&& [mb__448]]"]
	47 --> 72
	53 --> 72
	53{"innerPhi__454 ϕ"}
	45 --> 53
	79 --> 53
	80 --> 53
	80["mv_f__481 |False|  [U32_maybeTrue [mt__446]]"]
	45 --> 80
	24 --> 80
	24["inner__411 11"]
	79["mv_t__480 |True|  [U32_maybeTrue [mt__446]]"]
	45 --> 79
	25 --> 79
	71["mv_t__472 |True|  [bool.&& [mb__448]]"]
	47 --> 71
	54 --> 71
	54["merge__455 merge"]
	25 --> 54
	24 --> 54
	57["mv_t__458 |True|  [bool.&& [mb__439]]"]
	38 --> 57
	40 --> 57
	40["merge__441 merge"]
	30 --> 40
	21 --> 40
</pre>`;
window.traces["SAME_SCOPE_Q_ON_BOTH_P_SIDES_ul"]["untangled"] = ''
window.traces["SAME_SCOPE_Q_ON_BOTH_P_SIDES_ul"]["untangled"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	35 -. Stack .-> 1
	35["eff__403 push_u32"]
	31 --> 35
	33 -. Stack .-> 35
	33{{"sea__424 Sϕ Stack "}}
	38 --> 33
	59 --> 33
	60 --> 33
	60["mv_f__461 |False|  [bool.&& [mb__439]]"]
	38 --> 60
	41 -. Stack .-> 60
	41{{"innerPhi__442 Sϕ Stack "}}
	36 --> 41
	65 --> 41
	66 --> 41
	66["mv_f__467 |False|  [U32_maybeTrue [mt__437]]"]
	36 --> 66
	18 -. Stack .-> 66
	18{{"sea__422 Sϕ Stack "}}
	47 --> 18
	69 --> 18
	70 --> 18
	70["mv_f__471 |False|  [bool.&& [mb__448]]"]
	47 --> 70
	50 -. Stack .-> 70
	50{{"innerPhi__451 Sϕ Stack "}}
	45 --> 50
	77 --> 50
	78 --> 50
	78["mv_f__479 |False|  [U32_maybeTrue [mt__446]]"]
	45 --> 78
	4 -. Stack .-> 78
	4["c2 pop_u32"]
	3 -. Stack .-> 4
	3["c1 pop_u32"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	45["mt__446 U32_maybeTrue"]
	10 --> 45
	10["q u32.!="]
	4 --> 10
	8 --> 10
	8["arg__419 0"]
	77["mv_t__478 |True|  [U32_maybeTrue [mt__446]]"]
	45 --> 77
	108 -. Stack .-> 77
	108["inner__416__485__509 pop_u32"]
	4 -. Stack .-> 108
	47["mb__448 bool.&&"]
	45 --> 47
	46 --> 47
	46["mf__447 U32_maybeFalse"]
	10 --> 46
	69["mv_t__470 |True|  [bool.&& [mb__448]]"]
	47 --> 69
	52 -. Stack .-> 69
	52["eff_merge__453 merge"]
	84 --> 52
	51 --> 52
	51["eff_nop__452 nop"]
	84["inner__416__485 pop_u32"]
	4 -. Stack .-> 84
	36["mt__437 U32_maybeTrue"]
	7 --> 36
	7["p u32.!="]
	3 --> 7
	5 --> 7
	5["arg__421 0"]
	65["mv_t__466 |True|  [U32_maybeTrue [mt__437]]"]
	36 --> 65
	27 -. Stack .-> 65
	27{{"sea__423 Sϕ Stack "}}
	47 --> 27
	67 --> 27
	68 --> 27
	68["mv_f__469 |False|  [bool.&& [mb__448]]"]
	47 --> 68
	48 -. Stack .-> 68
	48{{"innerPhi__449 Sϕ Stack "}}
	45 --> 48
	75 --> 48
	76 --> 48
	76["mv_f__477 |False|  [U32_maybeTrue [mt__446]]"]
	45 --> 76
	4 -. Stack .-> 76
	75["mv_t__476 |True|  [U32_maybeTrue [mt__446]]"]
	45 --> 75
	110 -. Stack .-> 75
	110["inner__410__490__511 pop_u32"]
	4 -. Stack .-> 110
	67["mv_t__468 |True|  [bool.&& [mb__448]]"]
	47 --> 67
	49 -. Stack .-> 67
	49["eff_merge__450 merge"]
	89 --> 49
	4 --> 49
	89["inner__410__490 pop_u32"]
	4 -. Stack .-> 89
	38["mb__439 bool.&&"]
	36 --> 38
	37 --> 38
	37["mf__438 U32_maybeFalse"]
	7 --> 37
	59["mv_t__460 |True|  [bool.&& [mb__439]]"]
	38 --> 59
	44 -. Stack .-> 59
	44{{"merged_phi__445 Sϕ Stack "}}
	10 --> 44
	63 --> 44
	64 --> 44
	64["mv_f__465 |False|  [u32.!= [q]]"]
	10 --> 64
	43 -. Stack .-> 64
	43["eff_merge__444 merge"]
	4 --> 43
	4 --> 43
	63["mv_t__464 |True|  [u32.!= [q]]"]
	10 --> 63
	42 -. Stack .-> 63
	42["eff_merge__443 merge"]
	25 --> 42
	16 --> 42
	16["inner__416 pop_u32"]
	4 -. Stack .-> 16
	25["inner__410 pop_u32"]
	4 -. Stack .-> 25
	31{"left ϕ"}
	38 --> 31
	57 --> 31
	58 --> 31
	58["mv_f__459 |False|  [bool.&& [mb__439]]"]
	38 --> 58
	39 --> 58
	39{"innerPhi__440 ϕ"}
	36 --> 39
	61 --> 39
	62 --> 39
	62["mv_f__463 |False|  [U32_maybeTrue [mt__437]]"]
	36 --> 62
	87 --> 62
	87["left__412__488 u32.+"]
	85 --> 87
	86 --> 87
	86["arg__414__487 2"]
	85{"inner__486 ϕ"}
	47 --> 85
	99 --> 85
	100 --> 85
	100["mv_f__475__501 |False|  [bool.&& [mb__448]]"]
	47 --> 100
	95 --> 100
	95{"innerPhi__456__496 ϕ"}
	45 --> 95
	103 --> 95
	104 --> 95
	104["mv_f__483__505 |False|  [U32_maybeTrue [mt__446]]"]
	45 --> 104
	107 --> 104
	107["inner__417__484__508 21"]
	103["mv_t__482__504 |True|  [U32_maybeTrue [mt__446]]"]
	45 --> 103
	108 --> 103
	99["mv_t__474__500 |True|  [bool.&& [mb__448]]"]
	47 --> 99
	96 --> 99
	96["merge__457__497 merge"]
	84 --> 96
	83 --> 96
	83["inner__417__484 21"]
	61["mv_t__462 |True|  [U32_maybeTrue [mt__437]]"]
	36 --> 61
	92 --> 61
	92["left__406__493 u32.+"]
	90 --> 92
	91 --> 92
	91["arg__408__492 1"]
	90{"inner__491 ϕ"}
	47 --> 90
	97 --> 90
	98 --> 90
	98["mv_f__473__499 |False|  [bool.&& [mb__448]]"]
	47 --> 98
	93 --> 98
	93{"innerPhi__454__494 ϕ"}
	45 --> 93
	101 --> 93
	102 --> 93
	102["mv_f__481__503 |False|  [U32_maybeTrue [mt__446]]"]
	45 --> 102
	109 --> 102
	109["inner__411__489__510 11"]
	101["mv_t__480__502 |True|  [U32_maybeTrue [mt__446]]"]
	45 --> 101
	110 --> 101
	97["mv_t__472__498 |True|  [bool.&& [mb__448]]"]
	47 --> 97
	94 --> 97
	94["merge__455__495 merge"]
	89 --> 94
	88 --> 94
	88["inner__411__489 11"]
	57["mv_t__458 |True|  [bool.&& [mb__439]]"]
	38 --> 57
	40 --> 57
	40["merge__441 merge"]
	30 --> 40
	21 --> 40
	21["left__412 u32.+"]
	17 --> 21
	19 --> 21
	19["arg__414 2"]
	17{"inner ϕ"}
	47 --> 17
	73 --> 17
	74 --> 17
	74["mv_f__475 |False|  [bool.&& [mb__448]]"]
	47 --> 74
	55 --> 74
	55{"innerPhi__456 ϕ"}
	45 --> 55
	81 --> 55
	82 --> 55
	82["mv_f__483 |False|  [U32_maybeTrue [mt__446]]"]
	45 --> 82
	105 --> 82
	105["inner__417__506 21"]
	81["mv_t__482 |True|  [U32_maybeTrue [mt__446]]"]
	45 --> 81
	16 --> 81
	73["mv_t__474 |True|  [bool.&& [mb__448]]"]
	47 --> 73
	56 --> 73
	56["merge__457 merge"]
	16 --> 56
	15 --> 56
	15["inner__417 21"]
	30["left__406 u32.+"]
	26 --> 30
	28 --> 30
	28["arg__408 1"]
	26{"inner ϕ"}
	47 --> 26
	71 --> 26
	72 --> 26
	72["mv_f__473 |False|  [bool.&& [mb__448]]"]
	47 --> 72
	53 --> 72
	53{"innerPhi__454 ϕ"}
	45 --> 53
	79 --> 53
	80 --> 53
	80["mv_f__481 |False|  [U32_maybeTrue [mt__446]]"]
	45 --> 80
	106 --> 80
	106["inner__411__507 11"]
	79["mv_t__480 |True|  [U32_maybeTrue [mt__446]]"]
	45 --> 79
	25 --> 79
	71["mv_t__472 |True|  [bool.&& [mb__448]]"]
	47 --> 71
	54 --> 71
	54["merge__455 merge"]
	25 --> 54
	24 --> 54
	24["inner__411 11"]
</pre>`;
window.traces["SAME_SCOPE_Q_ON_BOTH_P_SIDES"]["unlem_scheduler"] = ''
window.traces["SAME_SCOPE_Q_ON_BOTH_P_SIDES"]["unlem_scheduler"] += `<pre class='graph'>graph TD
subgraph block_434["Block 434"]
	direction TB
	b434_35["eff__403 push_u32"]
	b434_1[\\"Finish"/]
	b434_35 --> b434_1
end
phi_468 --> block_434
subgraph phi_468["Phi 468"]
	p468_33{{"sea__424 Sϕ Stack "}}
	p468_31{"left ϕ"}
end
block_469 --> phi_468
block_470 --> phi_468
subgraph block_469["Block 469"]
	direction TB
	b469_19["arg__414 2"]
	b469_28["arg__408 1"]
	b469_21["left__412 u32.+"]
	b469_30["left__406 u32.+"]
	b469_40["merge__441 merge"]
	b469_59["mv_t__460 |True|  [bool.&& [mb__439]]"]
	b469_57["mv_t__458 |True|  [bool.&& [mb__439]]"]
	b469_19 --> b469_28
	b469_28 --> b469_21
	b469_21 --> b469_30
	b469_30 --> b469_40
	b469_40 --> b469_59
	b469_59 --> b469_57
end
phi_473 --> block_469
subgraph phi_473["Phi 473"]
	p473_44{{"merged_phi__445 Sϕ Stack "}}
end
block_474 --> phi_473
block_475 --> phi_473
subgraph block_474["Block 474"]
	direction TB
	b474_42["eff_merge__443 merge"]
	b474_63["mv_t__464 |True|  [u32.!= [q]]"]
	b474_42 --> b474_63
end
branch_472 --> block_474
subgraph branch_472["Branch 472"]
	br472_10["q u32.!="]

end
branch_467 --> branch_472
subgraph branch_467["Branch 467"]
	br467_38["mb__439 bool.&&"]

end
block_471 --> branch_467
subgraph block_471["Block 471"]
	direction TB
	b471_5["arg__421 0"]
	b471_7["p u32.!="]
	b471_36["mt__437 U32_maybeTrue"]
	b471_37["mf__438 U32_maybeFalse"]
	b471_38["mb__439 bool.&&"]
	b471_5 --> b471_7
	b471_7 --> b471_36
	b471_36 --> b471_37
	b471_37 --> b471_38
end
phi_481 --> block_471
subgraph phi_481["Phi 481"]
	p481_26{"inner ϕ"}
	p481_17{"inner ϕ"}
end
block_482 --> phi_481
block_483 --> phi_481
subgraph block_482["Block 482"]
	direction TB
	b482_24["inner__411 11"]
	b482_15["inner__417 21"]
	b482_54["merge__455 merge"]
	b482_56["merge__457 merge"]
	b482_71["mv_t__472 |True|  [bool.&& [mb__448]]"]
	b482_73["mv_t__474 |True|  [bool.&& [mb__448]]"]
	b482_24 --> b482_15
	b482_15 --> b482_54
	b482_54 --> b482_56
	b482_56 --> b482_71
	b482_71 --> b482_73
end
branch_480 --> block_482
subgraph branch_480["Branch 480"]
	br480_47["mb__448 bool.&&"]

end
block_496 --> branch_480
subgraph block_496["Block 496"]
	direction TB
	b496_0[/"Start"\\]
	b496_3["c1 pop_u32"]
	b496_4["c2 pop_u32"]
	b496_8["arg__419 0"]
	b496_10["q u32.!="]
	b496_45["mt__446 U32_maybeTrue"]
	b496_25["inner__410 pop_u32"]
	b496_16["inner__416 pop_u32"]
	b496_46["mf__447 U32_maybeFalse"]
	b496_47["mb__448 bool.&&"]
	b496_0 --> b496_3
	b496_3 --> b496_4
	b496_4 --> b496_8
	b496_8 --> b496_10
	b496_10 --> b496_45
	b496_45 --> b496_25
	b496_25 --> b496_16
	b496_16 --> b496_46
	b496_46 --> b496_47
end
subgraph block_483["Block 483"]
	direction TB
	b483_72["mv_f__473 |False|  [bool.&& [mb__448]]"]
	b483_74["mv_f__475 |False|  [bool.&& [mb__448]]"]
	b483_72 --> b483_74
end
phi_493 --> block_483
subgraph phi_493["Phi 493"]
	p493_53{"innerPhi__454 ϕ"}
	p493_55{"innerPhi__456 ϕ"}
end
block_494 --> phi_493
block_495 --> phi_493
subgraph block_494["Block 494"]
	direction TB
	b494_79["mv_t__480 |True|  [U32_maybeTrue [mt__446]]"]
	b494_81["mv_t__482 |True|  [U32_maybeTrue [mt__446]]"]
	b494_79 --> b494_81
end
branch_492 --> block_494
subgraph branch_492["Branch 492"]
	br492_45["mt__446 U32_maybeTrue"]

end
branch_480 --> branch_492
subgraph block_495["Block 495"]
	direction TB
	b495_106["inner__411__507 11"]
	b495_105["inner__417__506 21"]
	b495_80["mv_f__481 |False|  [U32_maybeTrue [mt__446]]"]
	b495_82["mv_f__483 |False|  [U32_maybeTrue [mt__446]]"]
	b495_106 --> b495_105
	b495_105 --> b495_80
	b495_80 --> b495_82
end
branch_492 --> block_495
subgraph block_475["Block 475"]
	direction TB
	b475_43["eff_merge__444 merge"]
	b475_64["mv_f__465 |False|  [u32.!= [q]]"]
	b475_43 --> b475_64
end
branch_472 --> block_475
subgraph block_470["Block 470"]
	direction TB
	b470_60["mv_f__461 |False|  [bool.&& [mb__439]]"]
	b470_58["mv_f__459 |False|  [bool.&& [mb__439]]"]
	b470_60 --> b470_58
end
phi_477 --> block_470
subgraph phi_477["Phi 477"]
	p477_41{{"innerPhi__442 Sϕ Stack "}}
	p477_39{"innerPhi__440 ϕ"}
end
block_478 --> phi_477
block_479 --> phi_477
subgraph block_478["Block 478"]
	direction TB
	b478_91["arg__408__492 1"]
	b478_92["left__406__493 u32.+"]
	b478_65["mv_t__466 |True|  [U32_maybeTrue [mt__437]]"]
	b478_61["mv_t__462 |True|  [U32_maybeTrue [mt__437]]"]
	b478_91 --> b478_92
	b478_92 --> b478_65
	b478_65 --> b478_61
end
phi_485 --> block_478
subgraph phi_485["Phi 485"]
	p485_27{{"sea__423 Sϕ Stack "}}
	p485_90{"inner__491 ϕ"}
end
block_486 --> phi_485
block_487 --> phi_485
subgraph block_486["Block 486"]
	direction TB
	b486_89["inner__410__490 pop_u32"]
	b486_88["inner__411__489 11"]
	b486_49["eff_merge__450 merge"]
	b486_94["merge__455__495 merge"]
	b486_67["mv_t__468 |True|  [bool.&& [mb__448]]"]
	b486_97["mv_t__472__498 |True|  [bool.&& [mb__448]]"]
	b486_89 --> b486_88
	b486_88 --> b486_49
	b486_49 --> b486_94
	b486_94 --> b486_67
	b486_67 --> b486_97
end
branch_484 --> block_486
subgraph branch_484["Branch 484"]
	br484_47["mb__448 bool.&&"]

end
branch_476 --> branch_484
subgraph branch_476["Branch 476"]
	br476_36["mt__437 U32_maybeTrue"]

end
branch_467 --> branch_476
subgraph block_487["Block 487"]
	direction TB
	b487_68["mv_f__469 |False|  [bool.&& [mb__448]]"]
	b487_98["mv_f__473__499 |False|  [bool.&& [mb__448]]"]
	b487_68 --> b487_98
end
phi_498 --> block_487
subgraph phi_498["Phi 498"]
	p498_48{{"innerPhi__449 Sϕ Stack "}}
	p498_93{"innerPhi__454__494 ϕ"}
end
block_499 --> phi_498
block_500 --> phi_498
subgraph block_499["Block 499"]
	direction TB
	b499_110["inner__410__490__511 pop_u32"]
	b499_75["mv_t__476 |True|  [U32_maybeTrue [mt__446]]"]
	b499_101["mv_t__480__502 |True|  [U32_maybeTrue [mt__446]]"]
	b499_110 --> b499_75
	b499_75 --> b499_101
end
branch_497 --> block_499
subgraph branch_497["Branch 497"]
	br497_45["mt__446 U32_maybeTrue"]

end
branch_484 --> branch_497
subgraph block_500["Block 500"]
	direction TB
	b500_109["inner__411__489__510 11"]
	b500_76["mv_f__477 |False|  [U32_maybeTrue [mt__446]]"]
	b500_102["mv_f__481__503 |False|  [U32_maybeTrue [mt__446]]"]
	b500_109 --> b500_76
	b500_76 --> b500_102
end
branch_497 --> block_500
subgraph block_479["Block 479"]
	direction TB
	b479_86["arg__414__487 2"]
	b479_87["left__412__488 u32.+"]
	b479_66["mv_f__467 |False|  [U32_maybeTrue [mt__437]]"]
	b479_62["mv_f__463 |False|  [U32_maybeTrue [mt__437]]"]
	b479_86 --> b479_87
	b479_87 --> b479_66
	b479_66 --> b479_62
end
phi_489 --> block_479
subgraph phi_489["Phi 489"]
	p489_18{{"sea__422 Sϕ Stack "}}
	p489_85{"inner__486 ϕ"}
end
block_490 --> phi_489
block_491 --> phi_489
subgraph block_490["Block 490"]
	direction TB
	b490_51["eff_nop__452 nop"]
	b490_84["inner__416__485 pop_u32"]
	b490_83["inner__417__484 21"]
	b490_52["eff_merge__453 merge"]
	b490_96["merge__457__497 merge"]
	b490_69["mv_t__470 |True|  [bool.&& [mb__448]]"]
	b490_99["mv_t__474__500 |True|  [bool.&& [mb__448]]"]
	b490_51 --> b490_84
	b490_84 --> b490_83
	b490_83 --> b490_52
	b490_52 --> b490_96
	b490_96 --> b490_69
	b490_69 --> b490_99
end
branch_488 --> block_490
subgraph branch_488["Branch 488"]
	br488_47["mb__448 bool.&&"]

end
branch_476 --> branch_488
subgraph block_491["Block 491"]
	direction TB
	b491_70["mv_f__471 |False|  [bool.&& [mb__448]]"]
	b491_100["mv_f__475__501 |False|  [bool.&& [mb__448]]"]
	b491_70 --> b491_100
end
phi_502 --> block_491
subgraph phi_502["Phi 502"]
	p502_50{{"innerPhi__451 Sϕ Stack "}}
	p502_95{"innerPhi__456__496 ϕ"}
end
block_503 --> phi_502
block_504 --> phi_502
subgraph block_503["Block 503"]
	direction TB
	b503_108["inner__416__485__509 pop_u32"]
	b503_77["mv_t__478 |True|  [U32_maybeTrue [mt__446]]"]
	b503_103["mv_t__482__504 |True|  [U32_maybeTrue [mt__446]]"]
	b503_108 --> b503_77
	b503_77 --> b503_103
end
branch_501 --> block_503
subgraph branch_501["Branch 501"]
	br501_45["mt__446 U32_maybeTrue"]

end
branch_488 --> branch_501
subgraph block_504["Block 504"]
	direction TB
	b504_107["inner__417__484__508 21"]
	b504_78["mv_f__479 |False|  [U32_maybeTrue [mt__446]]"]
	b504_104["mv_f__483__505 |False|  [U32_maybeTrue [mt__446]]"]
	b504_107 --> b504_78
	b504_78 --> b504_104
end
branch_501 --> block_504

</pre>`;
window.traces["SAME_SCOPE_Q_ON_BOTH_P_SIDES"]["unlem_scheduler_ssa"] = ''
window.traces["SAME_SCOPE_Q_ON_BOTH_P_SIDES"]["unlem_scheduler_ssa"] += `<pre class=''>def c1 = pop_u32();
def c2 = pop_u32();
def arg__419 : u32 = 0;
def q = u32.!=(c2, arg__419);
def mt__446 = U32_maybeTrue(q);
def inner__410 = pop_u32();
def inner__416 = pop_u32();
def mf__447 = U32_maybeFalse(q);
def mb__448 = bool.&&(mt__446, mf__447);
if (mb__448) {
	def inner__411 : u32 = 11;
	def inner__417 : u32 = 21;
	def merge__455 = merge(inner__410, inner__411);
	def merge__457 = merge(inner__416, inner__417);
} else {
	if (mt__446) {
	} else {
		def inner__411__507 : u32 = 11;
		def inner__411 = (inner__411__507);
		def inner__417__506 : u32 = 21;
		def inner__417 = (inner__417__506);
	}
// phis: innerPhi__454 <- inner__410; innerPhi__454 <- inner__411__507; innerPhi__456 <- inner__416; innerPhi__456 <- inner__417__506; 
}
// phis: inner <- merge__455; inner <- innerPhi__454; inner <- merge__457; inner <- innerPhi__456; 
def arg__421 : u32 = 0;
def p = u32.!=(c1, arg__421);
def mt__437 = U32_maybeTrue(p);
def mf__438 = U32_maybeFalse(p);
def mb__439 = bool.&&(mt__437, mf__438);
if (mb__439) {
	if (q) {
		def eff_merge__443 = merge(inner__410, inner__416);
	} else {
		def eff_merge__444 = merge(c2, c2);
	}
// phis: 
	def arg__414 : u32 = 2;
	def arg__408 : u32 = 1;
	def left__412 = u32.+(inner, arg__414);
	def left__406 = u32.+(inner, arg__408);
	def merge__441 = merge(left__406, left__412);
} else {
	if (mt__437) {
		if (mb__448) {
			def inner__410__490 = pop_u32();
			def inner__410 = (inner__410__490);
			def inner__411__489 : u32 = 11;
			def eff_merge__450 = merge(inner__410__490, c2);
			def merge__455__495 = merge(inner__410__490, inner__411__489);
		} else {
			if (mt__446) {
				def inner__410__490__511 = pop_u32();
			} else {
				def inner__411__489__510 : u32 = 11;
			}
// phis: innerPhi__454__494 <- inner__410__490__511; innerPhi__454__494 <- inner__411__489__510; 
		}
// phis: inner__491 <- merge__455__495; inner__491 <- innerPhi__454__494; 
		def arg__408__492 : u32 = 1;
		def arg__408 = (arg__408__492);
		def left__406__493 = u32.+(inner__491, arg__408__492);
		def left__406 = (left__406__493);
	} else {
		if (mb__448) {
			def eff_nop__452 = nop();
			def inner__416__485 = pop_u32();
			def inner__416 = (inner__416__485);
			def inner__417__484 : u32 = 21;
			def eff_merge__453 = merge(inner__416__485, eff_nop__452);
			def merge__457__497 = merge(inner__416__485, inner__417__484);
		} else {
			if (mt__446) {
				def inner__416__485__509 = pop_u32();
			} else {
				def inner__417__484__508 : u32 = 21;
			}
// phis: innerPhi__456__496 <- inner__416__485__509; innerPhi__456__496 <- inner__417__484__508; 
		}
// phis: inner__486 <- merge__457__497; inner__486 <- innerPhi__456__496; 
		def arg__414__487 : u32 = 2;
		def arg__414 = (arg__414__487);
		def left__412__488 = u32.+(inner__486, arg__414__487);
		def left__412 = (left__412__488);
	}
// phis: innerPhi__440 <- left__406__493; innerPhi__440 <- left__412__488; 
}
// phis: left <- merge__441; left <- innerPhi__440; 
def eff__403 = push_u32(left);
</pre>`;
window.traces["SAME_SCOPE_Q_ON_BOTH_P_SIDES"]["unlem_scheduler_ssa_pretty"] = ''
window.traces["SAME_SCOPE_Q_ON_BOTH_P_SIDES"]["unlem_scheduler_ssa_pretty"] += `<pre class=''>def c1 = pop_u32();
def c2 = pop_u32();
def mt = U32_maybeTrue(u32.!=(c2, 0));
var inner = pop_u32();
def inner1 = pop_u32();
def mf = U32_maybeFalse(u32.!=(c2, 0));
if (bool.&&(mt, mf)) {
	inner = merge(inner, 11);
	inner = merge(inner1, 21);
} else {
	if (mt) {
		inner = inner1;
	} else {
		inner = 11;
		inner = 21;
	}
}
def mt1 = U32_maybeTrue(u32.!=(c1, 0));
def mf1 = U32_maybeFalse(u32.!=(c1, 0));
var left: u32;
if (bool.&&(mt1, mf1)) {
	if (u32.!=(c2, 0)) {
	}
	left = merge(u32.+(inner, 1), u32.+(inner, 2));
} else {
	if (mt1) {
		var inner__491: u32;
		if (bool.&&(mt, mf)) {
			def inner2 = pop_u32();
			var inner = (inner2);
			inner__491 = merge(inner2, 11);
		} else {
			if (mt) {
				inner__491 = pop_u32();
			} else {
				inner__491 = 11;
			}
		}
		left = u32.+(inner__491, 1);
	} else {
		var inner__486: u32;
		if (bool.&&(mt, mf)) {
			def inner3 = pop_u32();
			def inner1 = (inner3);
			inner__486 = merge(inner3, 21);
		} else {
			if (mt) {
				inner__486 = pop_u32();
			} else {
				inner__486 = 21;
			}
		}
		left = u32.+(inner__486, 2);
	}
}
push_u32(left);
</pre>`;
window.traces["P3_EFFECTFUL_VARIANT"] = {}
window.traces["P3_EFFECTFUL_VARIANT"]["parsed"] = ''
window.traces["P3_EFFECTFUL_VARIANT"]["parsed"] += `<pre class=''>def c1 = pop_u32();
def c2 = pop_u32();
def c3 = pop_u32();
def arg__532 : u32 = 0;
def arg__531 = (c1);
def p = u32.!=(arg__531, arg__532);
def arg__530 : u32 = 0;
def arg__529 = (c2);
def q = u32.!=(arg__529, arg__530);
def arg__528 : u32 = 0;
def arg__527 = (c3);
def r = u32.!=(arg__527, arg__528);
def A : u32 = 0;
def cond__524 = (q);
if (cond__524) {
	def A__525 = pop_u32();
} else {
	def A__526 : u32 = 5;
}
// phis: A <- A__525; A <- A__526; 
def arg__523 : u32 = 0;
def arg__522 = (A);
def B = u32.+(arg__522, arg__523);
def triv : u32 = 0;
def cond__519 = (r);
if (cond__519) {
	def triv__520 = (B);
} else {
	def triv__521 = (B);
}
// phis: triv <- triv__520; triv <- triv__521; 
def out : u32 = 0;
def cond__514 = (p);
if (cond__514) {
	def out__515 = (triv);
} else {
	def arg__518 : u32 = 1;
	def arg__517 = (A);
	def out__516 = u32.+(arg__517, arg__518);
}
// phis: out <- out__515; out <- out__516; 
def arg__513 = (out);
def eff__512 = push_u32(arg__513);
</pre>`;
window.traces["P3_EFFECTFUL_VARIANT"]["initial_pretty"] = ''
window.traces["P3_EFFECTFUL_VARIANT"]["initial_pretty"] += `<pre class=''>def c1 = pop_u32();
def c2 = pop_u32();
def c3 = pop_u32();
var A = 0;
if ((u32.!=((c2), 0))) {
	A = pop_u32();
} else {
	A = 5;
}
var triv = 0;
if ((u32.!=((c3), 0))) {
	triv = (u32.+((A), 0));
} else {
	triv = (u32.+((A), 0));
}
var out = 0;
if ((u32.!=((c1), 0))) {
	out = (triv);
} else {
	out = u32.+((A), 1);
}
push_u32((out));
</pre>`;
window.traces["P3_EFFECTFUL_VARIANT"]["raw"] = ''
window.traces["P3_EFFECTFUL_VARIANT"]["raw"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	37 -. Stack .-> 1
	37["eff__512 push_u32"]
	35 --> 37
	20 -. Stack .-> 37
	20{{"sea__533 Sϕ Stack "}}
	11 --> 20
	18 --> 20
	5 --> 20
	5["c3 pop_u32"]
	4 -. Stack .-> 5
	4["c2 pop_u32"]
	3 -. Stack .-> 4
	3["c1 pop_u32"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	18["A__525 pop_u32"]
	5 -. Stack .-> 18
	11["q u32.!="]
	4 --> 11
	9 --> 11
	9["arg__530 0"]
	35{"out ϕ"}
	8 --> 35
	28 --> 35
	33 --> 35
	33["out__516 u32.+"]
	19 --> 33
	31 --> 33
	31["arg__518 1"]
	19{"A ϕ"}
	11 --> 19
	18 --> 19
	17 --> 19
	17["A__526 5"]
	28{"triv ϕ"}
	14 --> 28
	23 --> 28
	23 --> 28
	23["B u32.+"]
	19 --> 23
	21 --> 23
	21["arg__523 0"]
	14["r u32.!="]
	5 --> 14
	12 --> 14
	12["arg__528 0"]
	8["p u32.!="]
	3 --> 8
	6 --> 8
	6["arg__532 0"]
</pre>`;
window.traces["P3_EFFECTFUL_VARIANT"]["scheduler_start"] = ''
window.traces["P3_EFFECTFUL_VARIANT"]["scheduler_start"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	37 -. Stack .-> 1
	37["eff__512 push_u32"]
	35 --> 37
	20 -. Stack .-> 37
	20{{"sea__533 Sϕ Stack "}}
	11 --> 20
	40 --> 20
	41 --> 20
	41["mv_f__537 |False|  [u32.!= [q]]"]
	11 --> 41
	5 -. Stack .-> 41
	5["c3 pop_u32"]
	4 -. Stack .-> 5
	4["c2 pop_u32"]
	3 -. Stack .-> 4
	3["c1 pop_u32"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	11["q u32.!="]
	4 --> 11
	9 --> 11
	9["arg__530 0"]
	40["mv_t__536 |True|  [u32.!= [q]]"]
	11 --> 40
	18 -. Stack .-> 40
	18["A__525 pop_u32"]
	5 -. Stack .-> 18
	35{"out ϕ"}
	8 --> 35
	38 --> 35
	39 --> 35
	39["mv_f__535 |False|  [u32.!= [p]]"]
	8 --> 39
	33 --> 39
	33["out__516 u32.+"]
	19 --> 33
	31 --> 33
	31["arg__518 1"]
	19{"A ϕ"}
	11 --> 19
	44 --> 19
	45 --> 19
	45["mv_f__541 |False|  [u32.!= [q]]"]
	11 --> 45
	17 --> 45
	17["A__526 5"]
	44["mv_t__540 |True|  [u32.!= [q]]"]
	11 --> 44
	18 --> 44
	8["p u32.!="]
	3 --> 8
	6 --> 8
	6["arg__532 0"]
	38["mv_t__534 |True|  [u32.!= [p]]"]
	8 --> 38
	28 --> 38
	28{"triv ϕ"}
	14 --> 28
	42 --> 28
	43 --> 28
	43["mv_f__539 |False|  [u32.!= [r]]"]
	14 --> 43
	23 --> 43
	23["B u32.+"]
	19 --> 23
	21 --> 23
	21["arg__523 0"]
	14["r u32.!="]
	5 --> 14
	12 --> 14
	12["arg__528 0"]
	42["mv_t__538 |True|  [u32.!= [r]]"]
	14 --> 42
	23 --> 42
</pre>`;
window.traces["P3_EFFECTFUL_VARIANT"]["untangled"] = ''
window.traces["P3_EFFECTFUL_VARIANT"]["untangled"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	37 -. Stack .-> 1
	37["eff__512 push_u32"]
	35 --> 37
	20 -. Stack .-> 37
	20{{"sea__533 Sϕ Stack "}}
	11 --> 20
	40 --> 20
	41 --> 20
	41["mv_f__537 |False|  [u32.!= [q]]"]
	11 --> 41
	5 -. Stack .-> 41
	5["c3 pop_u32"]
	4 -. Stack .-> 5
	4["c2 pop_u32"]
	3 -. Stack .-> 4
	3["c1 pop_u32"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	11["q u32.!="]
	4 --> 11
	9 --> 11
	9["arg__530 0"]
	40["mv_t__536 |True|  [u32.!= [q]]"]
	11 --> 40
	18 -. Stack .-> 40
	18["A__525 pop_u32"]
	5 -. Stack .-> 18
	35{"out ϕ"}
	8 --> 35
	38 --> 35
	39 --> 35
	39["mv_f__535 |False|  [u32.!= [p]]"]
	8 --> 39
	33 --> 39
	33["out__516 u32.+"]
	19 --> 33
	31 --> 33
	31["arg__518 1"]
	19{"A ϕ"}
	11 --> 19
	44 --> 19
	45 --> 19
	45["mv_f__541 |False|  [u32.!= [q]]"]
	11 --> 45
	17 --> 45
	17["A__526 5"]
	44["mv_t__540 |True|  [u32.!= [q]]"]
	11 --> 44
	18 --> 44
	8["p u32.!="]
	3 --> 8
	6 --> 8
	6["arg__532 0"]
	38["mv_t__534 |True|  [u32.!= [p]]"]
	8 --> 38
	28 --> 38
	28{"triv ϕ"}
	14 --> 28
	42 --> 28
	43 --> 28
	43["mv_f__539 |False|  [u32.!= [r]]"]
	14 --> 43
	23 --> 43
	23["B u32.+"]
	19 --> 23
	21 --> 23
	21["arg__523 0"]
	14["r u32.!="]
	5 --> 14
	12 --> 14
	12["arg__528 0"]
	42["mv_t__538 |True|  [u32.!= [r]]"]
	14 --> 42
	23 --> 42
</pre>`;
window.traces["P3_EFFECTFUL_VARIANT"]["schedulerMermaid"] = ''
window.traces["P3_EFFECTFUL_VARIANT"]["schedulerMermaid"] += `<pre class='graph'>graph TD
subgraph block_505["Block 505"]
	direction TB
	b505_37["eff__512 push_u32"]
	b505_1[\\"Finish"/]
	b505_37 --> b505_1
end
phi_516 --> block_505
subgraph phi_516["Phi 516"]
	p516_35{"out ϕ"}
end
block_517 --> phi_516
block_518 --> phi_516
subgraph block_517["Block 517"]
	direction TB
	b517_38["mv_t__534 |True|  [u32.!= [p]]"]
end
phi_521 --> block_517
subgraph phi_521["Phi 521"]
	p521_28{"triv ϕ"}
end
block_522 --> phi_521
block_523 --> phi_521
subgraph block_522["Block 522"]
	direction TB
	b522_42["mv_t__538 |True|  [u32.!= [r]]"]
end
branch_520 --> block_522
subgraph branch_520["Branch 520"]
	br520_14["r u32.!="]

end
block_524 --> branch_520
subgraph block_524["Block 524"]
	direction TB
	b524_21["arg__523 0"]
	b524_23["B u32.+"]
	b524_12["arg__528 0"]
	b524_14["r u32.!="]
	b524_21 --> b524_23
	b524_23 --> b524_12
	b524_12 --> b524_14
end
branch_515 --> block_524
subgraph branch_515["Branch 515"]
	br515_8["p u32.!="]

end
block_519 --> branch_515
subgraph block_519["Block 519"]
	direction TB
	b519_6["arg__532 0"]
	b519_8["p u32.!="]
	b519_6 --> b519_8
end
phi_526 --> block_519
subgraph phi_526["Phi 526"]
	p526_20{{"sea__533 Sϕ Stack "}}
	p526_19{"A ϕ"}
end
block_527 --> phi_526
block_528 --> phi_526
subgraph block_527["Block 527"]
	direction TB
	b527_18["A__525 pop_u32"]
	b527_40["mv_t__536 |True|  [u32.!= [q]]"]
	b527_44["mv_t__540 |True|  [u32.!= [q]]"]
	b527_18 --> b527_40
	b527_40 --> b527_44
end
branch_525 --> block_527
subgraph branch_525["Branch 525"]
	br525_11["q u32.!="]

end
block_529 --> branch_525
subgraph block_529["Block 529"]
	direction TB
	b529_0[/"Start"\\]
	b529_3["c1 pop_u32"]
	b529_4["c2 pop_u32"]
	b529_5["c3 pop_u32"]
	b529_9["arg__530 0"]
	b529_11["q u32.!="]
	b529_0 --> b529_3
	b529_3 --> b529_4
	b529_4 --> b529_5
	b529_5 --> b529_9
	b529_9 --> b529_11
end
subgraph block_528["Block 528"]
	direction TB
	b528_17["A__526 5"]
	b528_41["mv_f__537 |False|  [u32.!= [q]]"]
	b528_45["mv_f__541 |False|  [u32.!= [q]]"]
	b528_17 --> b528_41
	b528_41 --> b528_45
end
branch_525 --> block_528
subgraph block_523["Block 523"]
	direction TB
	b523_43["mv_f__539 |False|  [u32.!= [r]]"]
end
branch_520 --> block_523
subgraph block_518["Block 518"]
	direction TB
	b518_31["arg__518 1"]
	b518_33["out__516 u32.+"]
	b518_39["mv_f__535 |False|  [u32.!= [p]]"]
	b518_31 --> b518_33
	b518_33 --> b518_39
end
branch_515 --> block_518

</pre>`;
window.traces["P3_EFFECTFUL_VARIANT"]["scheduler_ssad"] = ''
window.traces["P3_EFFECTFUL_VARIANT"]["scheduler_ssad"] += `<pre class=''>def c1 = pop_u32();
def c2 = pop_u32();
def c3 = pop_u32();
def arg__530 : u32 = 0;
def q = u32.!=(c2, arg__530);
if (q) {
	def A__525 = pop_u32();
} else {
	def A__526 : u32 = 5;
}
// phis: A <- A__525; A <- A__526; 
def arg__532 : u32 = 0;
def p = u32.!=(c1, arg__532);
if (p) {
	def arg__523 : u32 = 0;
	def B = u32.+(A, arg__523);
	def arg__528 : u32 = 0;
	def r = u32.!=(c3, arg__528);
	if (r) {
	}
// phis: triv <- B; triv <- B; 
} else {
	def arg__518 : u32 = 1;
	def out__516 = u32.+(A, arg__518);
}
// phis: out <- triv; out <- out__516; 
def eff__512 = push_u32(out);
</pre>`;
window.traces["P3_EFFECTFUL_VARIANT"]["scheduler_ssad_pretty"] = ''
window.traces["P3_EFFECTFUL_VARIANT"]["scheduler_ssad_pretty"] += `<pre class=''>def c1 = pop_u32();
def c2 = pop_u32();
def c3 = pop_u32();
var A: u32;
if (u32.!=(c2, 0)) {
	A = pop_u32();
} else {
	A = 5;
}
var out: u32;
if (u32.!=(c1, 0)) {
	def B = u32.+(A, 0);
	if (u32.!=(c3, 0)) {
		out = B;
	} else {
		out = B;
	}
} else {
	out = u32.+(A, 1);
}
push_u32(out);
</pre>`;
window.traces["P3_EFFECTFUL_VARIANT"]["unLEM"] = ''
window.traces["P3_EFFECTFUL_VARIANT"]["unLEM"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	37 -. Stack .-> 1
	37["eff__512 push_u32"]
	35 --> 37
	20 -. Stack .-> 37
	20{{"sea__533 Sϕ Stack "}}
	45 --> 20
	47 --> 20
	46 --> 20
	46{{"innerPhi__550 Sϕ Stack "}}
	43 --> 46
	18 --> 46
	5 --> 46
	5["c3 pop_u32"]
	4 -. Stack .-> 5
	4["c2 pop_u32"]
	3 -. Stack .-> 4
	3["c1 pop_u32"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	18["A__525 pop_u32"]
	5 -. Stack .-> 18
	43["mt__547 U32_maybeTrue"]
	11 --> 43
	11["q u32.!="]
	4 --> 11
	9 --> 11
	9["arg__530 0"]
	47["eff_merge__551 merge"]
	18 --> 47
	5 --> 47
	45["mb__549 bool.&&"]
	43 --> 45
	44 --> 45
	44["mf__548 U32_maybeFalse"]
	11 --> 44
	35{"out ϕ"}
	40 --> 35
	42 --> 35
	41 --> 35
	41{"innerPhi__545 ϕ"}
	38 --> 41
	28 --> 41
	33 --> 41
	33["out__516 u32.+"]
	19 --> 33
	31 --> 33
	31["arg__518 1"]
	19{"A ϕ"}
	45 --> 19
	54 --> 19
	53 --> 19
	53{"innerPhi__557 ϕ"}
	43 --> 53
	18 --> 53
	17 --> 53
	17["A__526 5"]
	54["merge__558 merge"]
	18 --> 54
	17 --> 54
	28{"triv ϕ"}
	50 --> 28
	52 --> 28
	51 --> 28
	51{"innerPhi__555 ϕ"}
	48 --> 51
	23 --> 51
	23 --> 51
	23["B u32.+"]
	19 --> 23
	21 --> 23
	21["arg__523 0"]
	48["mt__552 U32_maybeTrue"]
	14 --> 48
	14["r u32.!="]
	5 --> 14
	12 --> 14
	12["arg__528 0"]
	52["merge__556 merge"]
	23 --> 52
	23 --> 52
	50["mb__554 bool.&&"]
	48 --> 50
	49 --> 50
	49["mf__553 U32_maybeFalse"]
	14 --> 49
	38["mt__542 U32_maybeTrue"]
	8 --> 38
	8["p u32.!="]
	3 --> 8
	6 --> 8
	6["arg__532 0"]
	42["merge__546 merge"]
	28 --> 42
	33 --> 42
	40["mb__544 bool.&&"]
	38 --> 40
	39 --> 40
	39["mf__543 U32_maybeFalse"]
	8 --> 39
</pre>`;
window.traces["P3_EFFECTFUL_VARIANT_ul"] = {}
window.traces["P3_EFFECTFUL_VARIANT_ul"]["scheduler_start"] = ''
window.traces["P3_EFFECTFUL_VARIANT_ul"]["scheduler_start"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	37 -. Stack .-> 1
	37["eff__512 push_u32"]
	35 --> 37
	20 -. Stack .-> 37
	20{{"sea__533 Sϕ Stack "}}
	45 --> 20
	57 --> 20
	58 --> 20
	58["mv_f__562 |False|  [bool.&& [mb__549]]"]
	45 --> 58
	46 -. Stack .-> 58
	46{{"innerPhi__550 Sϕ Stack "}}
	43 --> 46
	61 --> 46
	62 --> 46
	62["mv_f__566 |False|  [U32_maybeTrue [mt__547]]"]
	43 --> 62
	5 -. Stack .-> 62
	5["c3 pop_u32"]
	4 -. Stack .-> 5
	4["c2 pop_u32"]
	3 -. Stack .-> 4
	3["c1 pop_u32"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	43["mt__547 U32_maybeTrue"]
	11 --> 43
	11["q u32.!="]
	4 --> 11
	9 --> 11
	9["arg__530 0"]
	61["mv_t__565 |True|  [U32_maybeTrue [mt__547]]"]
	43 --> 61
	18 -. Stack .-> 61
	18["A__525 pop_u32"]
	5 -. Stack .-> 18
	45["mb__549 bool.&&"]
	43 --> 45
	44 --> 45
	44["mf__548 U32_maybeFalse"]
	11 --> 44
	57["mv_t__561 |True|  [bool.&& [mb__549]]"]
	45 --> 57
	47 -. Stack .-> 57
	47["eff_merge__551 merge"]
	18 --> 47
	5 --> 47
	35{"out ϕ"}
	40 --> 35
	55 --> 35
	56 --> 35
	56["mv_f__560 |False|  [bool.&& [mb__544]]"]
	40 --> 56
	41 --> 56
	41{"innerPhi__545 ϕ"}
	38 --> 41
	59 --> 41
	60 --> 41
	60["mv_f__564 |False|  [U32_maybeTrue [mt__542]]"]
	38 --> 60
	33 --> 60
	33["out__516 u32.+"]
	19 --> 33
	31 --> 33
	31["arg__518 1"]
	19{"A ϕ"}
	45 --> 19
	67 --> 19
	68 --> 19
	68["mv_f__572 |False|  [bool.&& [mb__549]]"]
	45 --> 68
	53 --> 68
	53{"innerPhi__557 ϕ"}
	43 --> 53
	69 --> 53
	70 --> 53
	70["mv_f__574 |False|  [U32_maybeTrue [mt__547]]"]
	43 --> 70
	17 --> 70
	17["A__526 5"]
	69["mv_t__573 |True|  [U32_maybeTrue [mt__547]]"]
	43 --> 69
	18 --> 69
	67["mv_t__571 |True|  [bool.&& [mb__549]]"]
	45 --> 67
	54 --> 67
	54["merge__558 merge"]
	18 --> 54
	17 --> 54
	38["mt__542 U32_maybeTrue"]
	8 --> 38
	8["p u32.!="]
	3 --> 8
	6 --> 8
	6["arg__532 0"]
	59["mv_t__563 |True|  [U32_maybeTrue [mt__542]]"]
	38 --> 59
	28 --> 59
	28{"triv ϕ"}
	50 --> 28
	63 --> 28
	64 --> 28
	64["mv_f__568 |False|  [bool.&& [mb__554]]"]
	50 --> 64
	51 --> 64
	51{"innerPhi__555 ϕ"}
	48 --> 51
	65 --> 51
	66 --> 51
	66["mv_f__570 |False|  [U32_maybeTrue [mt__552]]"]
	48 --> 66
	23 --> 66
	23["B u32.+"]
	19 --> 23
	21 --> 23
	21["arg__523 0"]
	48["mt__552 U32_maybeTrue"]
	14 --> 48
	14["r u32.!="]
	5 --> 14
	12 --> 14
	12["arg__528 0"]
	65["mv_t__569 |True|  [U32_maybeTrue [mt__552]]"]
	48 --> 65
	23 --> 65
	50["mb__554 bool.&&"]
	48 --> 50
	49 --> 50
	49["mf__553 U32_maybeFalse"]
	14 --> 49
	63["mv_t__567 |True|  [bool.&& [mb__554]]"]
	50 --> 63
	52 --> 63
	52["merge__556 merge"]
	23 --> 52
	23 --> 52
	40["mb__544 bool.&&"]
	38 --> 40
	39 --> 40
	39["mf__543 U32_maybeFalse"]
	8 --> 39
	55["mv_t__559 |True|  [bool.&& [mb__544]]"]
	40 --> 55
	42 --> 55
	42["merge__546 merge"]
	28 --> 42
	33 --> 42
</pre>`;
window.traces["P3_EFFECTFUL_VARIANT_ul"]["untangled"] = ''
window.traces["P3_EFFECTFUL_VARIANT_ul"]["untangled"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	37 -. Stack .-> 1
	37["eff__512 push_u32"]
	35 --> 37
	20 -. Stack .-> 37
	20{{"sea__533 Sϕ Stack "}}
	45 --> 20
	57 --> 20
	58 --> 20
	58["mv_f__562 |False|  [bool.&& [mb__549]]"]
	45 --> 58
	46 -. Stack .-> 58
	46{{"innerPhi__550 Sϕ Stack "}}
	43 --> 46
	61 --> 46
	62 --> 46
	62["mv_f__566 |False|  [U32_maybeTrue [mt__547]]"]
	43 --> 62
	5 -. Stack .-> 62
	5["c3 pop_u32"]
	4 -. Stack .-> 5
	4["c2 pop_u32"]
	3 -. Stack .-> 4
	3["c1 pop_u32"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	43["mt__547 U32_maybeTrue"]
	11 --> 43
	11["q u32.!="]
	4 --> 11
	9 --> 11
	9["arg__530 0"]
	61["mv_t__565 |True|  [U32_maybeTrue [mt__547]]"]
	43 --> 61
	72 -. Stack .-> 61
	72["A__525__576 pop_u32"]
	5 -. Stack .-> 72
	45["mb__549 bool.&&"]
	43 --> 45
	44 --> 45
	44["mf__548 U32_maybeFalse"]
	11 --> 44
	57["mv_t__561 |True|  [bool.&& [mb__549]]"]
	45 --> 57
	47 -. Stack .-> 57
	47["eff_merge__551 merge"]
	18 --> 47
	5 --> 47
	18["A__525 pop_u32"]
	5 -. Stack .-> 18
	35{"out ϕ"}
	40 --> 35
	55 --> 35
	56 --> 35
	56["mv_f__560 |False|  [bool.&& [mb__544]]"]
	40 --> 56
	41 --> 56
	41{"innerPhi__545 ϕ"}
	38 --> 41
	59 --> 41
	60 --> 41
	60["mv_f__564 |False|  [U32_maybeTrue [mt__542]]"]
	38 --> 60
	79 --> 60
	79["out__516__583 u32.+"]
	19 --> 79
	78 --> 79
	78["arg__518__582 1"]
	19{"A ϕ"}
	45 --> 19
	67 --> 19
	68 --> 19
	68["mv_f__572 |False|  [bool.&& [mb__549]]"]
	45 --> 68
	53 --> 68
	53{"innerPhi__557 ϕ"}
	43 --> 53
	69 --> 53
	70 --> 53
	70["mv_f__574 |False|  [U32_maybeTrue [mt__547]]"]
	43 --> 70
	71 --> 70
	71["A__526__575 5"]
	69["mv_t__573 |True|  [U32_maybeTrue [mt__547]]"]
	43 --> 69
	72 --> 69
	67["mv_t__571 |True|  [bool.&& [mb__549]]"]
	45 --> 67
	54 --> 67
	54["merge__558 merge"]
	18 --> 54
	17 --> 54
	17["A__526 5"]
	38["mt__542 U32_maybeTrue"]
	8 --> 38
	8["p u32.!="]
	3 --> 8
	6 --> 8
	6["arg__532 0"]
	59["mv_t__563 |True|  [U32_maybeTrue [mt__542]]"]
	38 --> 59
	77 --> 59
	77{"triv__581 ϕ"}
	82 --> 77
	85 --> 77
	86 --> 77
	86["mv_f__568__590 |False|  [bool.&& [mb__554__586]]"]
	82 --> 86
	83 --> 86
	83{"innerPhi__555__587 ϕ"}
	80 --> 83
	87 --> 83
	88 --> 83
	88["mv_f__570__592 |False|  [U32_maybeTrue [mt__552__584]]"]
	80 --> 88
	76 --> 88
	76["B__580 u32.+"]
	19 --> 76
	75 --> 76
	75["arg__523__579 0"]
	80["mt__552__584 U32_maybeTrue"]
	74 --> 80
	74["r__578 u32.!="]
	5 --> 74
	73 --> 74
	73["arg__528__577 0"]
	87["mv_t__569__591 |True|  [U32_maybeTrue [mt__552__584]]"]
	80 --> 87
	76 --> 87
	82["mb__554__586 bool.&&"]
	80 --> 82
	81 --> 82
	81["mf__553__585 U32_maybeFalse"]
	74 --> 81
	85["mv_t__567__589 |True|  [bool.&& [mb__554__586]]"]
	82 --> 85
	84 --> 85
	84["merge__556__588 merge"]
	76 --> 84
	76 --> 84
	40["mb__544 bool.&&"]
	38 --> 40
	39 --> 40
	39["mf__543 U32_maybeFalse"]
	8 --> 39
	55["mv_t__559 |True|  [bool.&& [mb__544]]"]
	40 --> 55
	42 --> 55
	42["merge__546 merge"]
	28 --> 42
	33 --> 42
	33["out__516 u32.+"]
	19 --> 33
	31 --> 33
	31["arg__518 1"]
	28{"triv ϕ"}
	50 --> 28
	63 --> 28
	64 --> 28
	64["mv_f__568 |False|  [bool.&& [mb__554]]"]
	50 --> 64
	51 --> 64
	51{"innerPhi__555 ϕ"}
	48 --> 51
	65 --> 51
	66 --> 51
	66["mv_f__570 |False|  [U32_maybeTrue [mt__552]]"]
	48 --> 66
	23 --> 66
	23["B u32.+"]
	19 --> 23
	21 --> 23
	21["arg__523 0"]
	48["mt__552 U32_maybeTrue"]
	14 --> 48
	14["r u32.!="]
	5 --> 14
	12 --> 14
	12["arg__528 0"]
	65["mv_t__569 |True|  [U32_maybeTrue [mt__552]]"]
	48 --> 65
	23 --> 65
	50["mb__554 bool.&&"]
	48 --> 50
	49 --> 50
	49["mf__553 U32_maybeFalse"]
	14 --> 49
	63["mv_t__567 |True|  [bool.&& [mb__554]]"]
	50 --> 63
	52 --> 63
	52["merge__556 merge"]
	23 --> 52
	23 --> 52
</pre>`;
window.traces["P3_EFFECTFUL_VARIANT"]["unlem_scheduler"] = ''
window.traces["P3_EFFECTFUL_VARIANT"]["unlem_scheduler"] += `<pre class='graph'>graph TD
subgraph block_530["Block 530"]
	direction TB
	b530_37["eff__512 push_u32"]
	b530_1[\\"Finish"/]
	b530_37 --> b530_1
end
phi_574 --> block_530
subgraph phi_574["Phi 574"]
	p574_35{"out ϕ"}
end
block_575 --> phi_574
block_576 --> phi_574
subgraph block_575["Block 575"]
	direction TB
	b575_31["arg__518 1"]
	b575_33["out__516 u32.+"]
	b575_42["merge__546 merge"]
	b575_55["mv_t__559 |True|  [bool.&& [mb__544]]"]
	b575_31 --> b575_33
	b575_33 --> b575_42
	b575_42 --> b575_55
end
phi_583 --> block_575
subgraph phi_583["Phi 583"]
	p583_28{"triv ϕ"}
end
block_584 --> phi_583
block_585 --> phi_583
subgraph block_584["Block 584"]
	direction TB
	b584_52["merge__556 merge"]
	b584_63["mv_t__567 |True|  [bool.&& [mb__554]]"]
	b584_52 --> b584_63
end
branch_582 --> block_584
subgraph branch_582["Branch 582"]
	br582_50["mb__554 bool.&&"]

end
block_586 --> branch_582
subgraph block_586["Block 586"]
	direction TB
	b586_21["arg__523 0"]
	b586_12["arg__528 0"]
	b586_23["B u32.+"]
	b586_14["r u32.!="]
	b586_48["mt__552 U32_maybeTrue"]
	b586_49["mf__553 U32_maybeFalse"]
	b586_50["mb__554 bool.&&"]
	b586_21 --> b586_12
	b586_12 --> b586_23
	b586_23 --> b586_14
	b586_14 --> b586_48
	b586_48 --> b586_49
	b586_49 --> b586_50
end
branch_573 --> block_586
subgraph branch_573["Branch 573"]
	br573_40["mb__544 bool.&&"]

end
block_577 --> branch_573
subgraph block_577["Block 577"]
	direction TB
	b577_6["arg__532 0"]
	b577_8["p u32.!="]
	b577_38["mt__542 U32_maybeTrue"]
	b577_39["mf__543 U32_maybeFalse"]
	b577_40["mb__544 bool.&&"]
	b577_6 --> b577_8
	b577_8 --> b577_38
	b577_38 --> b577_39
	b577_39 --> b577_40
end
phi_601 --> block_577
subgraph phi_601["Phi 601"]
	p601_20{{"sea__533 Sϕ Stack "}}
	p601_19{"A ϕ"}
end
block_602 --> phi_601
block_603 --> phi_601
subgraph block_602["Block 602"]
	direction TB
	b602_18["A__525 pop_u32"]
	b602_17["A__526 5"]
	b602_47["eff_merge__551 merge"]
	b602_54["merge__558 merge"]
	b602_57["mv_t__561 |True|  [bool.&& [mb__549]]"]
	b602_67["mv_t__571 |True|  [bool.&& [mb__549]]"]
	b602_18 --> b602_17
	b602_17 --> b602_47
	b602_47 --> b602_54
	b602_54 --> b602_57
	b602_57 --> b602_67
end
branch_600 --> block_602
subgraph branch_600["Branch 600"]
	br600_45["mb__549 bool.&&"]

end
block_604 --> branch_600
subgraph block_604["Block 604"]
	direction TB
	b604_0[/"Start"\\]
	b604_3["c1 pop_u32"]
	b604_4["c2 pop_u32"]
	b604_5["c3 pop_u32"]
	b604_9["arg__530 0"]
	b604_11["q u32.!="]
	b604_43["mt__547 U32_maybeTrue"]
	b604_44["mf__548 U32_maybeFalse"]
	b604_45["mb__549 bool.&&"]
	b604_0 --> b604_3
	b604_3 --> b604_4
	b604_4 --> b604_5
	b604_5 --> b604_9
	b604_9 --> b604_11
	b604_11 --> b604_43
	b604_43 --> b604_44
	b604_44 --> b604_45
end
subgraph block_603["Block 603"]
	direction TB
	b603_58["mv_f__562 |False|  [bool.&& [mb__549]]"]
	b603_68["mv_f__572 |False|  [bool.&& [mb__549]]"]
	b603_58 --> b603_68
end
phi_606 --> block_603
subgraph phi_606["Phi 606"]
	p606_53{"innerPhi__557 ϕ"}
	p606_46{{"innerPhi__550 Sϕ Stack "}}
end
block_607 --> phi_606
block_608 --> phi_606
subgraph block_607["Block 607"]
	direction TB
	b607_72["A__525__576 pop_u32"]
	b607_69["mv_t__573 |True|  [U32_maybeTrue [mt__547]]"]
	b607_61["mv_t__565 |True|  [U32_maybeTrue [mt__547]]"]
	b607_72 --> b607_69
	b607_69 --> b607_61
end
branch_605 --> block_607
subgraph branch_605["Branch 605"]
	br605_43["mt__547 U32_maybeTrue"]

end
branch_600 --> branch_605
subgraph block_608["Block 608"]
	direction TB
	b608_71["A__526__575 5"]
	b608_70["mv_f__574 |False|  [U32_maybeTrue [mt__547]]"]
	b608_62["mv_f__566 |False|  [U32_maybeTrue [mt__547]]"]
	b608_71 --> b608_70
	b608_70 --> b608_62
end
branch_605 --> block_608
subgraph block_585["Block 585"]
	direction TB
	b585_64["mv_f__568 |False|  [bool.&& [mb__554]]"]
end
phi_592 --> block_585
subgraph phi_592["Phi 592"]
	p592_51{"innerPhi__555 ϕ"}
end
block_593 --> phi_592
block_594 --> phi_592
subgraph block_593["Block 593"]
	direction TB
	b593_65["mv_t__569 |True|  [U32_maybeTrue [mt__552]]"]
end
branch_591 --> block_593
subgraph branch_591["Branch 591"]
	br591_48["mt__552 U32_maybeTrue"]

end
branch_582 --> branch_591
subgraph block_594["Block 594"]
	direction TB
	b594_66["mv_f__570 |False|  [U32_maybeTrue [mt__552]]"]
end
branch_591 --> block_594
subgraph block_576["Block 576"]
	direction TB
	b576_56["mv_f__560 |False|  [bool.&& [mb__544]]"]
end
phi_579 --> block_576
subgraph phi_579["Phi 579"]
	p579_41{"innerPhi__545 ϕ"}
end
block_580 --> phi_579
block_581 --> phi_579
subgraph block_580["Block 580"]
	direction TB
	b580_59["mv_t__563 |True|  [U32_maybeTrue [mt__542]]"]
end
phi_588 --> block_580
subgraph phi_588["Phi 588"]
	p588_77{"triv__581 ϕ"}
end
block_589 --> phi_588
block_590 --> phi_588
subgraph block_589["Block 589"]
	direction TB
	b589_84["merge__556__588 merge"]
	b589_85["mv_t__567__589 |True|  [bool.&& [mb__554__586]]"]
	b589_84 --> b589_85
end
branch_587 --> block_589
subgraph branch_587["Branch 587"]
	br587_82["mb__554__586 bool.&&"]

end
block_595 --> branch_587
subgraph block_595["Block 595"]
	direction TB
	b595_75["arg__523__579 0"]
	b595_73["arg__528__577 0"]
	b595_76["B__580 u32.+"]
	b595_74["r__578 u32.!="]
	b595_80["mt__552__584 U32_maybeTrue"]
	b595_81["mf__553__585 U32_maybeFalse"]
	b595_82["mb__554__586 bool.&&"]
	b595_75 --> b595_73
	b595_73 --> b595_76
	b595_76 --> b595_74
	b595_74 --> b595_80
	b595_80 --> b595_81
	b595_81 --> b595_82
end
branch_578 --> block_595
subgraph branch_578["Branch 578"]
	br578_38["mt__542 U32_maybeTrue"]

end
branch_573 --> branch_578
subgraph block_590["Block 590"]
	direction TB
	b590_86["mv_f__568__590 |False|  [bool.&& [mb__554__586]]"]
end
phi_597 --> block_590
subgraph phi_597["Phi 597"]
	p597_83{"innerPhi__555__587 ϕ"}
end
block_598 --> phi_597
block_599 --> phi_597
subgraph block_598["Block 598"]
	direction TB
	b598_87["mv_t__569__591 |True|  [U32_maybeTrue [mt__552__584]]"]
end
branch_596 --> block_598
subgraph branch_596["Branch 596"]
	br596_80["mt__552__584 U32_maybeTrue"]

end
branch_587 --> branch_596
subgraph block_599["Block 599"]
	direction TB
	b599_88["mv_f__570__592 |False|  [U32_maybeTrue [mt__552__584]]"]
end
branch_596 --> block_599
subgraph block_581["Block 581"]
	direction TB
	b581_78["arg__518__582 1"]
	b581_79["out__516__583 u32.+"]
	b581_60["mv_f__564 |False|  [U32_maybeTrue [mt__542]]"]
	b581_78 --> b581_79
	b581_79 --> b581_60
end
branch_578 --> block_581

</pre>`;
window.traces["P3_EFFECTFUL_VARIANT"]["unlem_scheduler_ssa"] = ''
window.traces["P3_EFFECTFUL_VARIANT"]["unlem_scheduler_ssa"] += `<pre class=''>def c1 = pop_u32();
def c2 = pop_u32();
def c3 = pop_u32();
def arg__530 : u32 = 0;
def q = u32.!=(c2, arg__530);
def mt__547 = U32_maybeTrue(q);
def mf__548 = U32_maybeFalse(q);
def mb__549 = bool.&&(mt__547, mf__548);
if (mb__549) {
	def A__525 = pop_u32();
	def A__526 : u32 = 5;
	def eff_merge__551 = merge(A__525, c3);
	def merge__558 = merge(A__525, A__526);
} else {
	if (mt__547) {
		def A__525__576 = pop_u32();
		def A__525 = (A__525__576);
	} else {
		def A__526__575 : u32 = 5;
		def A__526 = (A__526__575);
	}
// phis: innerPhi__557 <- A__525__576; innerPhi__557 <- A__526__575; 
}
// phis: A <- merge__558; A <- innerPhi__557; 
def arg__532 : u32 = 0;
def p = u32.!=(c1, arg__532);
def mt__542 = U32_maybeTrue(p);
def mf__543 = U32_maybeFalse(p);
def mb__544 = bool.&&(mt__542, mf__543);
if (mb__544) {
	def arg__523 : u32 = 0;
	def arg__528 : u32 = 0;
	def B = u32.+(A, arg__523);
	def r = u32.!=(c3, arg__528);
	def mt__552 = U32_maybeTrue(r);
	def mf__553 = U32_maybeFalse(r);
	def mb__554 = bool.&&(mt__552, mf__553);
	if (mb__554) {
		def merge__556 = merge(B, B);
	} else {
		if (mt__552) {
		}
// phis: innerPhi__555 <- B; innerPhi__555 <- B; 
	}
// phis: triv <- merge__556; triv <- innerPhi__555; 
	def arg__518 : u32 = 1;
	def out__516 = u32.+(A, arg__518);
	def merge__546 = merge(triv, out__516);
} else {
	if (mt__542) {
		def arg__523__579 : u32 = 0;
		def arg__523 = (arg__523__579);
		def arg__528__577 : u32 = 0;
		def arg__528 = (arg__528__577);
		def B__580 = u32.+(A, arg__523__579);
		def B = (B__580);
		def r__578 = u32.!=(c3, arg__528__577);
		def r = (r__578);
		def mt__552__584 = U32_maybeTrue(r__578);
		def mt__552 = (mt__552__584);
		def mf__553__585 = U32_maybeFalse(r__578);
		def mf__553 = (mf__553__585);
		def mb__554__586 = bool.&&(mt__552__584, mf__553__585);
		def mb__554 = (mb__554__586);
		if (mb__554__586) {
			def merge__556__588 = merge(B__580, B__580);
			def merge__556 = (merge__556__588);
		} else {
			if (mt__552__584) {
			}
// phis: innerPhi__555__587 <- B__580; innerPhi__555__587 <- B__580; 
		}
// phis: triv__581 <- merge__556__588; triv__581 <- innerPhi__555__587; 
	} else {
		def arg__518__582 : u32 = 1;
		def arg__518 = (arg__518__582);
		def out__516__583 = u32.+(A, arg__518__582);
		def out__516 = (out__516__583);
	}
// phis: innerPhi__545 <- triv__581; innerPhi__545 <- out__516__583; 
}
// phis: out <- merge__546; out <- innerPhi__545; 
def eff__512 = push_u32(out);
</pre>`;
window.traces["P3_EFFECTFUL_VARIANT"]["unlem_scheduler_ssa_pretty"] = ''
window.traces["P3_EFFECTFUL_VARIANT"]["unlem_scheduler_ssa_pretty"] += `<pre class=''>def c1 = pop_u32();
def c2 = pop_u32();
def c3 = pop_u32();
def mt = U32_maybeTrue(u32.!=(c2, 0));
def mf = U32_maybeFalse(u32.!=(c2, 0));
var A: u32;
if (bool.&&(mt, mf)) {
	A = pop_u32();
	A = merge(A, 5);
} else {
	if (mt) {
		A = pop_u32();
	} else {
		A = 5;
	}
}
def mt1 = U32_maybeTrue(u32.!=(c1, 0));
def mf1 = U32_maybeFalse(u32.!=(c1, 0));
var out;
if (bool.&&(mt1, mf1)) {
	def B = u32.+(A, 0);
	def mt2 = U32_maybeTrue(u32.!=(c3, 0));
	def mf2 = U32_maybeFalse(u32.!=(c3, 0));
	var triv: u32;
	if (bool.&&(mt2, mf2)) {
		triv = merge(B, B);
	} else {
		if (mt2) {
			triv = B;
		} else {
			triv = B;
		}
	}
	out = merge(triv, u32.+(A, 1));
} else {
	if (mt1) {
		def B1 = u32.+(A, 0);
		def B2 = (B1);
		def mt3 = U32_maybeTrue(u32.!=(c3, 0));
		def mf3 = U32_maybeFalse(u32.!=(c3, 0));
		if (bool.&&(mt3, mf3)) {
			out = merge(B1, B1);
			def merge = (merge__556__588);
		} else {
			if (mt3) {
				out = B1;
			} else {
				out = B1;
			}
		}
	} else {
		out = u32.+(A, 1);
	}
}
push_u32(out);
</pre>`;
window.traces["UNLEM_IMPOSSIBLE_ASSIGNMENT_BUNDLE"] = {}
window.traces["UNLEM_IMPOSSIBLE_ASSIGNMENT_BUNDLE"]["parsed"] = ''
window.traces["UNLEM_IMPOSSIBLE_ASSIGNMENT_BUNDLE"]["parsed"] += `<pre class=''>def c1 = pop_u32();
def c2 = pop_u32();
def c3 = pop_u32();
def arg__619 : u32 = 0;
def arg__618 = (c1);
def p = u32.!=(arg__618, arg__619);
def arg__617 : u32 = 0;
def arg__616 = (c2);
def q = u32.!=(arg__616, arg__617);
def arg__615 : u32 = 0;
def arg__614 = (c3);
def r = u32.!=(arg__614, arg__615);
def x : u32 = 0;
def cond__607 = (p);
if (cond__607) {
	def cond__608 = (q);
	if (cond__608) {
		def x__609 = pop_u32();
	} else {
		def x__610 : u32 = 10;
	}
// phis: x <- x__609; x <- x__610; 
} else {
	def cond__611 = (q);
	if (cond__611) {
		def x__612 = pop_u32();
	} else {
		def x__613 : u32 = 20;
	}
// phis: x <- x__612; x <- x__613; 
}
// phis: x <- x; x <- x; 
def y : u32 = 0;
def cond__600 = (r);
if (cond__600) {
	def arg__603 : u32 = 1;
	def arg__602 = (x);
	def y__601 = u32.+(arg__602, arg__603);
} else {
	def arg__606 : u32 = 2;
	def arg__605 = (x);
	def y__604 = u32.+(arg__605, arg__606);
}
// phis: y <- y__601; y <- y__604; 
def z : u32 = 0;
def cond__595 = (p);
if (cond__595) {
	def z__596 = (y);
} else {
	def arg__599 : u32 = 3;
	def arg__598 = (x);
	def z__597 = u32.+(arg__598, arg__599);
}
// phis: z <- z__596; z <- z__597; 
def arg__594 = (z);
def eff__593 = push_u32(arg__594);
</pre>`;
window.traces["UNLEM_IMPOSSIBLE_ASSIGNMENT_BUNDLE"]["initial_pretty"] = ''
window.traces["UNLEM_IMPOSSIBLE_ASSIGNMENT_BUNDLE"]["initial_pretty"] += `<pre class=''>def c1 = pop_u32();
def c2 = pop_u32();
def c3 = pop_u32();
var x = 0;
if ((u32.!=((c1), 0))) {
	if ((u32.!=((c2), 0))) {
		x = pop_u32();
	} else {
		x = 10;
	}
} else {
	if ((u32.!=((c2), 0))) {
		x = pop_u32();
	} else {
		x = 20;
	}
}
var y = 0;
if ((u32.!=((c3), 0))) {
	y = u32.+((x), 1);
} else {
	y = u32.+((x), 2);
}
var z = 0;
if ((u32.!=((c1), 0))) {
	z = (y);
} else {
	z = u32.+((x), 3);
}
push_u32((z));
</pre>`;
window.traces["UNLEM_IMPOSSIBLE_ASSIGNMENT_BUNDLE"]["raw"] = ''
window.traces["UNLEM_IMPOSSIBLE_ASSIGNMENT_BUNDLE"]["raw"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	46 -. Stack .-> 1
	46["eff__593 push_u32"]
	44 --> 46
	28 -. Stack .-> 46
	28{{"sea__622 Sϕ Stack "}}
	8 --> 28
	26 --> 28
	21 --> 28
	21{{"sea__620 Sϕ Stack "}}
	11 --> 21
	19 --> 21
	5 --> 21
	5["c3 pop_u32"]
	4 -. Stack .-> 5
	4["c2 pop_u32"]
	3 -. Stack .-> 4
	3["c1 pop_u32"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	19["x__612 pop_u32"]
	5 -. Stack .-> 19
	11["q u32.!="]
	4 --> 11
	9 --> 11
	9["arg__617 0"]
	26{{"sea__621 Sϕ Stack "}}
	11 --> 26
	24 --> 26
	5 --> 26
	24["x__609 pop_u32"]
	5 -. Stack .-> 24
	8["p u32.!="]
	3 --> 8
	6 --> 8
	6["arg__619 0"]
	44{"z ϕ"}
	8 --> 44
	37 --> 44
	42 --> 44
	42["z__597 u32.+"]
	27 --> 42
	40 --> 42
	40["arg__599 3"]
	27{"x ϕ"}
	8 --> 27
	25 --> 27
	20 --> 27
	20{"x ϕ"}
	11 --> 20
	19 --> 20
	18 --> 20
	18["x__613 20"]
	25{"x ϕ"}
	11 --> 25
	24 --> 25
	23 --> 25
	23["x__610 10"]
	37{"y ϕ"}
	14 --> 37
	36 --> 37
	33 --> 37
	33["y__604 u32.+"]
	27 --> 33
	31 --> 33
	31["arg__606 2"]
	36["y__601 u32.+"]
	27 --> 36
	34 --> 36
	34["arg__603 1"]
	14["r u32.!="]
	5 --> 14
	12 --> 14
	12["arg__615 0"]
</pre>`;
window.traces["UNLEM_IMPOSSIBLE_ASSIGNMENT_BUNDLE"]["scheduler_start"] = ''
window.traces["UNLEM_IMPOSSIBLE_ASSIGNMENT_BUNDLE"]["scheduler_start"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	46 -. Stack .-> 1
	46["eff__593 push_u32"]
	44 --> 46
	28 -. Stack .-> 46
	28{{"sea__622 Sϕ Stack "}}
	8 --> 28
	49 --> 28
	50 --> 28
	50["mv_f__626 |False|  [u32.!= [p]]"]
	8 --> 50
	21 -. Stack .-> 50
	21{{"sea__620 Sϕ Stack "}}
	11 --> 21
	55 --> 21
	56 --> 21
	56["mv_f__632 |False|  [u32.!= [q]]"]
	11 --> 56
	5 -. Stack .-> 56
	5["c3 pop_u32"]
	4 -. Stack .-> 5
	4["c2 pop_u32"]
	3 -. Stack .-> 4
	3["c1 pop_u32"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	11["q u32.!="]
	4 --> 11
	9 --> 11
	9["arg__617 0"]
	55["mv_t__631 |True|  [u32.!= [q]]"]
	11 --> 55
	19 -. Stack .-> 55
	19["x__612 pop_u32"]
	5 -. Stack .-> 19
	8["p u32.!="]
	3 --> 8
	6 --> 8
	6["arg__619 0"]
	49["mv_t__625 |True|  [u32.!= [p]]"]
	8 --> 49
	26 -. Stack .-> 49
	26{{"sea__621 Sϕ Stack "}}
	11 --> 26
	53 --> 26
	54 --> 26
	54["mv_f__630 |False|  [u32.!= [q]]"]
	11 --> 54
	5 -. Stack .-> 54
	53["mv_t__629 |True|  [u32.!= [q]]"]
	11 --> 53
	24 -. Stack .-> 53
	24["x__609 pop_u32"]
	5 -. Stack .-> 24
	44{"z ϕ"}
	8 --> 44
	47 --> 44
	48 --> 44
	48["mv_f__624 |False|  [u32.!= [p]]"]
	8 --> 48
	42 --> 48
	42["z__597 u32.+"]
	27 --> 42
	40 --> 42
	40["arg__599 3"]
	27{"x ϕ"}
	8 --> 27
	57 --> 27
	58 --> 27
	58["mv_f__634 |False|  [u32.!= [p]]"]
	8 --> 58
	20 --> 58
	20{"x ϕ"}
	11 --> 20
	61 --> 20
	62 --> 20
	62["mv_f__638 |False|  [u32.!= [q]]"]
	11 --> 62
	18 --> 62
	18["x__613 20"]
	61["mv_t__637 |True|  [u32.!= [q]]"]
	11 --> 61
	19 --> 61
	57["mv_t__633 |True|  [u32.!= [p]]"]
	8 --> 57
	25 --> 57
	25{"x ϕ"}
	11 --> 25
	59 --> 25
	60 --> 25
	60["mv_f__636 |False|  [u32.!= [q]]"]
	11 --> 60
	23 --> 60
	23["x__610 10"]
	59["mv_t__635 |True|  [u32.!= [q]]"]
	11 --> 59
	24 --> 59
	47["mv_t__623 |True|  [u32.!= [p]]"]
	8 --> 47
	37 --> 47
	37{"y ϕ"}
	14 --> 37
	51 --> 37
	52 --> 37
	52["mv_f__628 |False|  [u32.!= [r]]"]
	14 --> 52
	33 --> 52
	33["y__604 u32.+"]
	27 --> 33
	31 --> 33
	31["arg__606 2"]
	14["r u32.!="]
	5 --> 14
	12 --> 14
	12["arg__615 0"]
	51["mv_t__627 |True|  [u32.!= [r]]"]
	14 --> 51
	36 --> 51
	36["y__601 u32.+"]
	27 --> 36
	34 --> 36
	34["arg__603 1"]
</pre>`;
window.traces["UNLEM_IMPOSSIBLE_ASSIGNMENT_BUNDLE"]["untangled"] = ''
window.traces["UNLEM_IMPOSSIBLE_ASSIGNMENT_BUNDLE"]["untangled"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	46 -. Stack .-> 1
	46["eff__593 push_u32"]
	44 --> 46
	28 -. Stack .-> 46
	28{{"sea__622 Sϕ Stack "}}
	8 --> 28
	49 --> 28
	50 --> 28
	50["mv_f__626 |False|  [u32.!= [p]]"]
	8 --> 50
	21 -. Stack .-> 50
	21{{"sea__620 Sϕ Stack "}}
	11 --> 21
	55 --> 21
	56 --> 21
	56["mv_f__632 |False|  [u32.!= [q]]"]
	11 --> 56
	5 -. Stack .-> 56
	5["c3 pop_u32"]
	4 -. Stack .-> 5
	4["c2 pop_u32"]
	3 -. Stack .-> 4
	3["c1 pop_u32"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	11["q u32.!="]
	4 --> 11
	9 --> 11
	9["arg__617 0"]
	55["mv_t__631 |True|  [u32.!= [q]]"]
	11 --> 55
	19 -. Stack .-> 55
	19["x__612 pop_u32"]
	5 -. Stack .-> 19
	8["p u32.!="]
	3 --> 8
	6 --> 8
	6["arg__619 0"]
	49["mv_t__625 |True|  [u32.!= [p]]"]
	8 --> 49
	26 -. Stack .-> 49
	26{{"sea__621 Sϕ Stack "}}
	11 --> 26
	53 --> 26
	54 --> 26
	54["mv_f__630 |False|  [u32.!= [q]]"]
	11 --> 54
	5 -. Stack .-> 54
	53["mv_t__629 |True|  [u32.!= [q]]"]
	11 --> 53
	24 -. Stack .-> 53
	24["x__609 pop_u32"]
	5 -. Stack .-> 24
	44{"z ϕ"}
	8 --> 44
	47 --> 44
	48 --> 44
	48["mv_f__624 |False|  [u32.!= [p]]"]
	8 --> 48
	42 --> 48
	42["z__597 u32.+"]
	27 --> 42
	40 --> 42
	40["arg__599 3"]
	27{"x ϕ"}
	8 --> 27
	57 --> 27
	58 --> 27
	58["mv_f__634 |False|  [u32.!= [p]]"]
	8 --> 58
	20 --> 58
	20{"x ϕ"}
	11 --> 20
	61 --> 20
	62 --> 20
	62["mv_f__638 |False|  [u32.!= [q]]"]
	11 --> 62
	18 --> 62
	18["x__613 20"]
	61["mv_t__637 |True|  [u32.!= [q]]"]
	11 --> 61
	19 --> 61
	57["mv_t__633 |True|  [u32.!= [p]]"]
	8 --> 57
	25 --> 57
	25{"x ϕ"}
	11 --> 25
	59 --> 25
	60 --> 25
	60["mv_f__636 |False|  [u32.!= [q]]"]
	11 --> 60
	23 --> 60
	23["x__610 10"]
	59["mv_t__635 |True|  [u32.!= [q]]"]
	11 --> 59
	24 --> 59
	47["mv_t__623 |True|  [u32.!= [p]]"]
	8 --> 47
	37 --> 47
	37{"y ϕ"}
	14 --> 37
	51 --> 37
	52 --> 37
	52["mv_f__628 |False|  [u32.!= [r]]"]
	14 --> 52
	33 --> 52
	33["y__604 u32.+"]
	27 --> 33
	31 --> 33
	31["arg__606 2"]
	14["r u32.!="]
	5 --> 14
	12 --> 14
	12["arg__615 0"]
	51["mv_t__627 |True|  [u32.!= [r]]"]
	14 --> 51
	36 --> 51
	36["y__601 u32.+"]
	27 --> 36
	34 --> 36
	34["arg__603 1"]
</pre>`;
window.traces["UNLEM_IMPOSSIBLE_ASSIGNMENT_BUNDLE"]["schedulerMermaid"] = ''
window.traces["UNLEM_IMPOSSIBLE_ASSIGNMENT_BUNDLE"]["schedulerMermaid"] += `<pre class='graph'>graph TD
subgraph block_609["Block 609"]
	direction TB
	b609_46["eff__593 push_u32"]
	b609_1[\\"Finish"/]
	b609_46 --> b609_1
end
phi_629 --> block_609
subgraph phi_629["Phi 629"]
	p629_44{"z ϕ"}
end
block_630 --> phi_629
block_631 --> phi_629
subgraph block_630["Block 630"]
	direction TB
	b630_47["mv_t__623 |True|  [u32.!= [p]]"]
end
phi_633 --> block_630
subgraph phi_633["Phi 633"]
	p633_37{"y ϕ"}
end
block_634 --> phi_633
block_635 --> phi_633
subgraph block_634["Block 634"]
	direction TB
	b634_34["arg__603 1"]
	b634_36["y__601 u32.+"]
	b634_51["mv_t__627 |True|  [u32.!= [r]]"]
	b634_34 --> b634_36
	b634_36 --> b634_51
end
branch_632 --> block_634
subgraph branch_632["Branch 632"]
	br632_14["r u32.!="]

end
block_636 --> branch_632
subgraph block_636["Block 636"]
	direction TB
	b636_12["arg__615 0"]
	b636_14["r u32.!="]
	b636_12 --> b636_14
end
branch_628 --> block_636
subgraph branch_628["Branch 628"]
	br628_8["p u32.!="]

end
phi_638 --> branch_628
subgraph phi_638["Phi 638"]
	p638_28{{"sea__622 Sϕ Stack "}}
	p638_27{"x ϕ"}
end
block_639 --> phi_638
block_640 --> phi_638
subgraph block_639["Block 639"]
	direction TB
	b639_49["mv_t__625 |True|  [u32.!= [p]]"]
	b639_57["mv_t__633 |True|  [u32.!= [p]]"]
	b639_49 --> b639_57
end
phi_643 --> block_639
subgraph phi_643["Phi 643"]
	p643_25{"x ϕ"}
	p643_26{{"sea__621 Sϕ Stack "}}
end
block_644 --> phi_643
block_645 --> phi_643
subgraph block_644["Block 644"]
	direction TB
	b644_24["x__609 pop_u32"]
	b644_59["mv_t__635 |True|  [u32.!= [q]]"]
	b644_53["mv_t__629 |True|  [u32.!= [q]]"]
	b644_24 --> b644_59
	b644_59 --> b644_53
end
branch_642 --> block_644
subgraph branch_642["Branch 642"]
	br642_11["q u32.!="]

end
branch_637 --> branch_642
subgraph branch_637["Branch 637"]
	br637_8["p u32.!="]

end
block_641 --> branch_637
subgraph block_641["Block 641"]
	direction TB
	b641_0[/"Start"\\]
	b641_3["c1 pop_u32"]
	b641_4["c2 pop_u32"]
	b641_5["c3 pop_u32"]
	b641_9["arg__617 0"]
	b641_11["q u32.!="]
	b641_6["arg__619 0"]
	b641_8["p u32.!="]
	b641_0 --> b641_3
	b641_3 --> b641_4
	b641_4 --> b641_5
	b641_5 --> b641_9
	b641_9 --> b641_11
	b641_11 --> b641_6
	b641_6 --> b641_8
end
subgraph block_645["Block 645"]
	direction TB
	b645_23["x__610 10"]
	b645_60["mv_f__636 |False|  [u32.!= [q]]"]
	b645_54["mv_f__630 |False|  [u32.!= [q]]"]
	b645_23 --> b645_60
	b645_60 --> b645_54
end
branch_642 --> block_645
subgraph block_640["Block 640"]
	direction TB
	b640_50["mv_f__626 |False|  [u32.!= [p]]"]
	b640_58["mv_f__634 |False|  [u32.!= [p]]"]
	b640_50 --> b640_58
end
phi_647 --> block_640
subgraph phi_647["Phi 647"]
	p647_20{"x ϕ"}
	p647_21{{"sea__620 Sϕ Stack "}}
end
block_648 --> phi_647
block_649 --> phi_647
subgraph block_648["Block 648"]
	direction TB
	b648_19["x__612 pop_u32"]
	b648_61["mv_t__637 |True|  [u32.!= [q]]"]
	b648_55["mv_t__631 |True|  [u32.!= [q]]"]
	b648_19 --> b648_61
	b648_61 --> b648_55
end
branch_646 --> block_648
subgraph branch_646["Branch 646"]
	br646_11["q u32.!="]

end
branch_637 --> branch_646
subgraph block_649["Block 649"]
	direction TB
	b649_18["x__613 20"]
	b649_62["mv_f__638 |False|  [u32.!= [q]]"]
	b649_56["mv_f__632 |False|  [u32.!= [q]]"]
	b649_18 --> b649_62
	b649_62 --> b649_56
end
branch_646 --> block_649
subgraph block_635["Block 635"]
	direction TB
	b635_31["arg__606 2"]
	b635_33["y__604 u32.+"]
	b635_52["mv_f__628 |False|  [u32.!= [r]]"]
	b635_31 --> b635_33
	b635_33 --> b635_52
end
branch_632 --> block_635
subgraph block_631["Block 631"]
	direction TB
	b631_40["arg__599 3"]
	b631_42["z__597 u32.+"]
	b631_48["mv_f__624 |False|  [u32.!= [p]]"]
	b631_40 --> b631_42
	b631_42 --> b631_48
end
branch_628 --> block_631

</pre>`;
window.traces["UNLEM_IMPOSSIBLE_ASSIGNMENT_BUNDLE"]["scheduler_ssad"] = ''
window.traces["UNLEM_IMPOSSIBLE_ASSIGNMENT_BUNDLE"]["scheduler_ssad"] += `<pre class=''>def c1 = pop_u32();
def c2 = pop_u32();
def c3 = pop_u32();
def arg__617 : u32 = 0;
def q = u32.!=(c2, arg__617);
def arg__619 : u32 = 0;
def p = u32.!=(c1, arg__619);
if (p) {
	if (q) {
		def x__609 = pop_u32();
	} else {
		def x__610 : u32 = 10;
	}
// phis: x <- x__609; x <- x__610; 
} else {
	if (q) {
		def x__612 = pop_u32();
	} else {
		def x__613 : u32 = 20;
	}
// phis: x <- x__612; x <- x__613; 
}
// phis: x <- x; x <- x; 
if (p) {
	def arg__615 : u32 = 0;
	def r = u32.!=(c3, arg__615);
	if (r) {
		def arg__603 : u32 = 1;
		def y__601 = u32.+(x, arg__603);
	} else {
		def arg__606 : u32 = 2;
		def y__604 = u32.+(x, arg__606);
	}
// phis: y <- y__601; y <- y__604; 
} else {
	def arg__599 : u32 = 3;
	def z__597 = u32.+(x, arg__599);
}
// phis: z <- y; z <- z__597; 
def eff__593 = push_u32(z);
</pre>`;
window.traces["UNLEM_IMPOSSIBLE_ASSIGNMENT_BUNDLE"]["scheduler_ssad_pretty"] = ''
window.traces["UNLEM_IMPOSSIBLE_ASSIGNMENT_BUNDLE"]["scheduler_ssad_pretty"] += `<pre class=''>def c1 = pop_u32();
def c2 = pop_u32();
def c3 = pop_u32();
var x: u32;
if (u32.!=(c1, 0)) {
	if (u32.!=(c2, 0)) {
		x = pop_u32();
	} else {
		x = 10;
	}
} else {
	if (u32.!=(c2, 0)) {
		x = pop_u32();
	} else {
		x = 20;
	}
}
var z: u32;
if (u32.!=(c1, 0)) {
	if (u32.!=(c3, 0)) {
		z = u32.+(x, 1);
	} else {
		z = u32.+(x, 2);
	}
} else {
	z = u32.+(x, 3);
}
push_u32(z);
</pre>`;
window.traces["UNLEM_IMPOSSIBLE_ASSIGNMENT_BUNDLE"]["unLEM"] = ''
window.traces["UNLEM_IMPOSSIBLE_ASSIGNMENT_BUNDLE"]["unLEM"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	46 -. Stack .-> 1
	46["eff__593 push_u32"]
	44 --> 46
	28 -. Stack .-> 46
	28{{"sea__622 Sϕ Stack "}}
	49 --> 28
	55 --> 28
	52 --> 28
	52{{"innerPhi__644 Sϕ Stack "}}
	47 --> 52
	26 --> 52
	21 --> 52
	21{{"sea__620 Sϕ Stack "}}
	63 --> 21
	68 --> 21
	66 --> 21
	66{{"innerPhi__658 Sϕ Stack "}}
	61 --> 66
	19 --> 66
	5 --> 66
	5["c3 pop_u32"]
	4 -. Stack .-> 5
	4["c2 pop_u32"]
	3 -. Stack .-> 4
	3["c1 pop_u32"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	19["x__612 pop_u32"]
	5 -. Stack .-> 19
	61["mt__653 U32_maybeTrue"]
	11 --> 61
	11["q u32.!="]
	4 --> 11
	9 --> 11
	9["arg__617 0"]
	68["eff_merge__660 merge"]
	19 --> 68
	67 --> 68
	67["eff_nop__659 nop"]
	63["mb__655 bool.&&"]
	61 --> 63
	62 --> 63
	62["mf__654 U32_maybeFalse"]
	11 --> 62
	26{{"sea__621 Sϕ Stack "}}
	63 --> 26
	65 --> 26
	64 --> 26
	64{{"innerPhi__656 Sϕ Stack "}}
	61 --> 64
	24 --> 64
	5 --> 64
	24["x__609 pop_u32"]
	5 -. Stack .-> 24
	65["eff_merge__657 merge"]
	24 --> 65
	5 --> 65
	47["mt__639 U32_maybeTrue"]
	8 --> 47
	8["p u32.!="]
	3 --> 8
	6 --> 8
	6["arg__619 0"]
	55{{"merged_phi__647 Sϕ Stack "}}
	11 --> 55
	53 --> 55
	54 --> 55
	54["eff_merge__646 merge"]
	5 --> 54
	5 --> 54
	53["eff_merge__645 merge"]
	24 --> 53
	19 --> 53
	49["mb__641 bool.&&"]
	47 --> 49
	48 --> 49
	48["mf__640 U32_maybeFalse"]
	8 --> 48
	44{"z ϕ"}
	49 --> 44
	51 --> 44
	50 --> 44
	50{"innerPhi__642 ϕ"}
	47 --> 50
	37 --> 50
	42 --> 50
	42["z__597 u32.+"]
	27 --> 42
	40 --> 42
	40["arg__599 3"]
	27{"x ϕ"}
	49 --> 27
	70 --> 27
	69 --> 27
	69{"innerPhi__661 ϕ"}
	47 --> 69
	25 --> 69
	20 --> 69
	20{"x ϕ"}
	63 --> 20
	74 --> 20
	73 --> 20
	73{"innerPhi__665 ϕ"}
	61 --> 73
	19 --> 73
	18 --> 73
	18["x__613 20"]
	74["merge__666 merge"]
	19 --> 74
	18 --> 74
	25{"x ϕ"}
	63 --> 25
	72 --> 25
	71 --> 25
	71{"innerPhi__663 ϕ"}
	61 --> 71
	24 --> 71
	23 --> 71
	23["x__610 10"]
	72["merge__664 merge"]
	24 --> 72
	23 --> 72
	70["merge__662 merge"]
	25 --> 70
	20 --> 70
	37{"y ϕ"}
	58 --> 37
	60 --> 37
	59 --> 37
	59{"innerPhi__651 ϕ"}
	56 --> 59
	36 --> 59
	33 --> 59
	33["y__604 u32.+"]
	27 --> 33
	31 --> 33
	31["arg__606 2"]
	36["y__601 u32.+"]
	27 --> 36
	34 --> 36
	34["arg__603 1"]
	56["mt__648 U32_maybeTrue"]
	14 --> 56
	14["r u32.!="]
	5 --> 14
	12 --> 14
	12["arg__615 0"]
	60["merge__652 merge"]
	36 --> 60
	33 --> 60
	58["mb__650 bool.&&"]
	56 --> 58
	57 --> 58
	57["mf__649 U32_maybeFalse"]
	14 --> 57
	51["merge__643 merge"]
	37 --> 51
	42 --> 51
</pre>`;
window.traces["UNLEM_IMPOSSIBLE_ASSIGNMENT_BUNDLE_ul"] = {}
window.traces["UNLEM_IMPOSSIBLE_ASSIGNMENT_BUNDLE_ul"]["scheduler_start"] = ''
window.traces["UNLEM_IMPOSSIBLE_ASSIGNMENT_BUNDLE_ul"]["scheduler_start"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	46 -. Stack .-> 1
	46["eff__593 push_u32"]
	44 --> 46
	28 -. Stack .-> 46
	28{{"sea__622 Sϕ Stack "}}
	49 --> 28
	77 --> 28
	78 --> 28
	78["mv_f__670 |False|  [bool.&& [mb__641]]"]
	49 --> 78
	52 -. Stack .-> 78
	52{{"innerPhi__644 Sϕ Stack "}}
	47 --> 52
	83 --> 52
	84 --> 52
	84["mv_f__676 |False|  [U32_maybeTrue [mt__639]]"]
	47 --> 84
	21 -. Stack .-> 84
	21{{"sea__620 Sϕ Stack "}}
	63 --> 21
	89 --> 21
	90 --> 21
	90["mv_f__682 |False|  [bool.&& [mb__655]]"]
	63 --> 90
	66 -. Stack .-> 90
	66{{"innerPhi__658 Sϕ Stack "}}
	61 --> 66
	97 --> 66
	98 --> 66
	98["mv_f__690 |False|  [U32_maybeTrue [mt__653]]"]
	61 --> 98
	5 -. Stack .-> 98
	5["c3 pop_u32"]
	4 -. Stack .-> 5
	4["c2 pop_u32"]
	3 -. Stack .-> 4
	3["c1 pop_u32"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	61["mt__653 U32_maybeTrue"]
	11 --> 61
	11["q u32.!="]
	4 --> 11
	9 --> 11
	9["arg__617 0"]
	97["mv_t__689 |True|  [U32_maybeTrue [mt__653]]"]
	61 --> 97
	19 -. Stack .-> 97
	19["x__612 pop_u32"]
	5 -. Stack .-> 19
	63["mb__655 bool.&&"]
	61 --> 63
	62 --> 63
	62["mf__654 U32_maybeFalse"]
	11 --> 62
	89["mv_t__681 |True|  [bool.&& [mb__655]]"]
	63 --> 89
	68 -. Stack .-> 89
	68["eff_merge__660 merge"]
	19 --> 68
	67 --> 68
	67["eff_nop__659 nop"]
	47["mt__639 U32_maybeTrue"]
	8 --> 47
	8["p u32.!="]
	3 --> 8
	6 --> 8
	6["arg__619 0"]
	83["mv_t__675 |True|  [U32_maybeTrue [mt__639]]"]
	47 --> 83
	26 -. Stack .-> 83
	26{{"sea__621 Sϕ Stack "}}
	63 --> 26
	87 --> 26
	88 --> 26
	88["mv_f__680 |False|  [bool.&& [mb__655]]"]
	63 --> 88
	64 -. Stack .-> 88
	64{{"innerPhi__656 Sϕ Stack "}}
	61 --> 64
	95 --> 64
	96 --> 64
	96["mv_f__688 |False|  [U32_maybeTrue [mt__653]]"]
	61 --> 96
	5 -. Stack .-> 96
	95["mv_t__687 |True|  [U32_maybeTrue [mt__653]]"]
	61 --> 95
	24 -. Stack .-> 95
	24["x__609 pop_u32"]
	5 -. Stack .-> 24
	87["mv_t__679 |True|  [bool.&& [mb__655]]"]
	63 --> 87
	65 -. Stack .-> 87
	65["eff_merge__657 merge"]
	24 --> 65
	5 --> 65
	49["mb__641 bool.&&"]
	47 --> 49
	48 --> 49
	48["mf__640 U32_maybeFalse"]
	8 --> 48
	77["mv_t__669 |True|  [bool.&& [mb__641]]"]
	49 --> 77
	55 -. Stack .-> 77
	55{{"merged_phi__647 Sϕ Stack "}}
	11 --> 55
	81 --> 55
	82 --> 55
	82["mv_f__674 |False|  [u32.!= [q]]"]
	11 --> 82
	54 -. Stack .-> 82
	54["eff_merge__646 merge"]
	5 --> 54
	5 --> 54
	81["mv_t__673 |True|  [u32.!= [q]]"]
	11 --> 81
	53 -. Stack .-> 81
	53["eff_merge__645 merge"]
	24 --> 53
	19 --> 53
	44{"z ϕ"}
	49 --> 44
	75 --> 44
	76 --> 44
	76["mv_f__668 |False|  [bool.&& [mb__641]]"]
	49 --> 76
	50 --> 76
	50{"innerPhi__642 ϕ"}
	47 --> 50
	79 --> 50
	80 --> 50
	80["mv_f__672 |False|  [U32_maybeTrue [mt__639]]"]
	47 --> 80
	42 --> 80
	42["z__597 u32.+"]
	27 --> 42
	40 --> 42
	40["arg__599 3"]
	27{"x ϕ"}
	49 --> 27
	93 --> 27
	94 --> 27
	94["mv_f__686 |False|  [bool.&& [mb__641]]"]
	49 --> 94
	69 --> 94
	69{"innerPhi__661 ϕ"}
	47 --> 69
	99 --> 69
	100 --> 69
	100["mv_f__692 |False|  [U32_maybeTrue [mt__639]]"]
	47 --> 100
	20 --> 100
	20{"x ϕ"}
	63 --> 20
	103 --> 20
	104 --> 20
	104["mv_f__696 |False|  [bool.&& [mb__655]]"]
	63 --> 104
	73 --> 104
	73{"innerPhi__665 ϕ"}
	61 --> 73
	107 --> 73
	108 --> 73
	108["mv_f__700 |False|  [U32_maybeTrue [mt__653]]"]
	61 --> 108
	18 --> 108
	18["x__613 20"]
	107["mv_t__699 |True|  [U32_maybeTrue [mt__653]]"]
	61 --> 107
	19 --> 107
	103["mv_t__695 |True|  [bool.&& [mb__655]]"]
	63 --> 103
	74 --> 103
	74["merge__666 merge"]
	19 --> 74
	18 --> 74
	99["mv_t__691 |True|  [U32_maybeTrue [mt__639]]"]
	47 --> 99
	25 --> 99
	25{"x ϕ"}
	63 --> 25
	101 --> 25
	102 --> 25
	102["mv_f__694 |False|  [bool.&& [mb__655]]"]
	63 --> 102
	71 --> 102
	71{"innerPhi__663 ϕ"}
	61 --> 71
	105 --> 71
	106 --> 71
	106["mv_f__698 |False|  [U32_maybeTrue [mt__653]]"]
	61 --> 106
	23 --> 106
	23["x__610 10"]
	105["mv_t__697 |True|  [U32_maybeTrue [mt__653]]"]
	61 --> 105
	24 --> 105
	101["mv_t__693 |True|  [bool.&& [mb__655]]"]
	63 --> 101
	72 --> 101
	72["merge__664 merge"]
	24 --> 72
	23 --> 72
	93["mv_t__685 |True|  [bool.&& [mb__641]]"]
	49 --> 93
	70 --> 93
	70["merge__662 merge"]
	25 --> 70
	20 --> 70
	79["mv_t__671 |True|  [U32_maybeTrue [mt__639]]"]
	47 --> 79
	37 --> 79
	37{"y ϕ"}
	58 --> 37
	85 --> 37
	86 --> 37
	86["mv_f__678 |False|  [bool.&& [mb__650]]"]
	58 --> 86
	59 --> 86
	59{"innerPhi__651 ϕ"}
	56 --> 59
	91 --> 59
	92 --> 59
	92["mv_f__684 |False|  [U32_maybeTrue [mt__648]]"]
	56 --> 92
	33 --> 92
	33["y__604 u32.+"]
	27 --> 33
	31 --> 33
	31["arg__606 2"]
	56["mt__648 U32_maybeTrue"]
	14 --> 56
	14["r u32.!="]
	5 --> 14
	12 --> 14
	12["arg__615 0"]
	91["mv_t__683 |True|  [U32_maybeTrue [mt__648]]"]
	56 --> 91
	36 --> 91
	36["y__601 u32.+"]
	27 --> 36
	34 --> 36
	34["arg__603 1"]
	58["mb__650 bool.&&"]
	56 --> 58
	57 --> 58
	57["mf__649 U32_maybeFalse"]
	14 --> 57
	85["mv_t__677 |True|  [bool.&& [mb__650]]"]
	58 --> 85
	60 --> 85
	60["merge__652 merge"]
	36 --> 60
	33 --> 60
	75["mv_t__667 |True|  [bool.&& [mb__641]]"]
	49 --> 75
	51 --> 75
	51["merge__643 merge"]
	37 --> 51
	42 --> 51
</pre>`;
window.traces["UNLEM_IMPOSSIBLE_ASSIGNMENT_BUNDLE_ul"]["untangled"] = ''
window.traces["UNLEM_IMPOSSIBLE_ASSIGNMENT_BUNDLE_ul"]["untangled"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	46 -. Stack .-> 1
	46["eff__593 push_u32"]
	44 --> 46
	28 -. Stack .-> 46
	28{{"sea__622 Sϕ Stack "}}
	49 --> 28
	77 --> 28
	78 --> 28
	78["mv_f__670 |False|  [bool.&& [mb__641]]"]
	49 --> 78
	52 -. Stack .-> 78
	52{{"innerPhi__644 Sϕ Stack "}}
	47 --> 52
	83 --> 52
	84 --> 52
	84["mv_f__676 |False|  [U32_maybeTrue [mt__639]]"]
	47 --> 84
	21 -. Stack .-> 84
	21{{"sea__620 Sϕ Stack "}}
	63 --> 21
	89 --> 21
	90 --> 21
	90["mv_f__682 |False|  [bool.&& [mb__655]]"]
	63 --> 90
	66 -. Stack .-> 90
	66{{"innerPhi__658 Sϕ Stack "}}
	61 --> 66
	97 --> 66
	98 --> 66
	98["mv_f__690 |False|  [U32_maybeTrue [mt__653]]"]
	61 --> 98
	5 -. Stack .-> 98
	5["c3 pop_u32"]
	4 -. Stack .-> 5
	4["c2 pop_u32"]
	3 -. Stack .-> 4
	3["c1 pop_u32"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	61["mt__653 U32_maybeTrue"]
	11 --> 61
	11["q u32.!="]
	4 --> 11
	9 --> 11
	9["arg__617 0"]
	97["mv_t__689 |True|  [U32_maybeTrue [mt__653]]"]
	61 --> 97
	152 -. Stack .-> 97
	152["x__612__702__744 pop_u32"]
	5 -. Stack .-> 152
	63["mb__655 bool.&&"]
	61 --> 63
	62 --> 63
	62["mf__654 U32_maybeFalse"]
	11 --> 62
	89["mv_t__681 |True|  [bool.&& [mb__655]]"]
	63 --> 89
	68 -. Stack .-> 89
	68["eff_merge__660 merge"]
	110 --> 68
	67 --> 68
	67["eff_nop__659 nop"]
	110["x__612__702 pop_u32"]
	5 -. Stack .-> 110
	47["mt__639 U32_maybeTrue"]
	8 --> 47
	8["p u32.!="]
	3 --> 8
	6 --> 8
	6["arg__619 0"]
	83["mv_t__675 |True|  [U32_maybeTrue [mt__639]]"]
	47 --> 83
	26 -. Stack .-> 83
	26{{"sea__621 Sϕ Stack "}}
	63 --> 26
	87 --> 26
	88 --> 26
	88["mv_f__680 |False|  [bool.&& [mb__655]]"]
	63 --> 88
	64 -. Stack .-> 88
	64{{"innerPhi__656 Sϕ Stack "}}
	61 --> 64
	95 --> 64
	96 --> 64
	96["mv_f__688 |False|  [U32_maybeTrue [mt__653]]"]
	61 --> 96
	5 -. Stack .-> 96
	95["mv_t__687 |True|  [U32_maybeTrue [mt__653]]"]
	61 --> 95
	154 -. Stack .-> 95
	154["x__609__705__746 pop_u32"]
	5 -. Stack .-> 154
	87["mv_t__679 |True|  [bool.&& [mb__655]]"]
	63 --> 87
	65 -. Stack .-> 87
	65["eff_merge__657 merge"]
	113 --> 65
	5 --> 65
	113["x__609__705 pop_u32"]
	5 -. Stack .-> 113
	49["mb__641 bool.&&"]
	47 --> 49
	48 --> 49
	48["mf__640 U32_maybeFalse"]
	8 --> 48
	77["mv_t__669 |True|  [bool.&& [mb__641]]"]
	49 --> 77
	55 -. Stack .-> 77
	55{{"merged_phi__647 Sϕ Stack "}}
	11 --> 55
	81 --> 55
	82 --> 55
	82["mv_f__674 |False|  [u32.!= [q]]"]
	11 --> 82
	54 -. Stack .-> 82
	54["eff_merge__646 merge"]
	5 --> 54
	5 --> 54
	81["mv_t__673 |True|  [u32.!= [q]]"]
	11 --> 81
	53 -. Stack .-> 81
	53["eff_merge__645 merge"]
	24 --> 53
	19 --> 53
	19["x__612 pop_u32"]
	5 -. Stack .-> 19
	24["x__609 pop_u32"]
	5 -. Stack .-> 24
	44{"z ϕ"}
	49 --> 44
	75 --> 44
	76 --> 44
	76["mv_f__668 |False|  [bool.&& [mb__641]]"]
	49 --> 76
	50 --> 76
	50{"innerPhi__642 ϕ"}
	47 --> 50
	79 --> 50
	80 --> 50
	80["mv_f__672 |False|  [U32_maybeTrue [mt__639]]"]
	47 --> 80
	135 --> 80
	135["z__597__727 u32.+"]
	27 --> 135
	134 --> 135
	134["arg__599__726 3"]
	27{"x ϕ"}
	49 --> 27
	93 --> 27
	94 --> 27
	94["mv_f__686 |False|  [bool.&& [mb__641]]"]
	49 --> 94
	69 --> 94
	69{"innerPhi__661 ϕ"}
	47 --> 69
	99 --> 69
	100 --> 69
	100["mv_f__692 |False|  [U32_maybeTrue [mt__639]]"]
	47 --> 100
	111 --> 100
	111{"x__703 ϕ"}
	63 --> 111
	121 --> 111
	122 --> 111
	122["mv_f__696__714 |False|  [bool.&& [mb__655]]"]
	63 --> 122
	117 --> 122
	117{"innerPhi__665__709 ϕ"}
	61 --> 117
	125 --> 117
	126 --> 117
	126["mv_f__700__718 |False|  [U32_maybeTrue [mt__653]]"]
	61 --> 126
	151 --> 126
	151["x__613__701__743 20"]
	125["mv_t__699__717 |True|  [U32_maybeTrue [mt__653]]"]
	61 --> 125
	152 --> 125
	121["mv_t__695__713 |True|  [bool.&& [mb__655]]"]
	63 --> 121
	118 --> 121
	118["merge__666__710 merge"]
	110 --> 118
	109 --> 118
	109["x__613__701 20"]
	99["mv_t__691 |True|  [U32_maybeTrue [mt__639]]"]
	47 --> 99
	114 --> 99
	114{"x__706 ϕ"}
	63 --> 114
	119 --> 114
	120 --> 114
	120["mv_f__694__712 |False|  [bool.&& [mb__655]]"]
	63 --> 120
	115 --> 120
	115{"innerPhi__663__707 ϕ"}
	61 --> 115
	123 --> 115
	124 --> 115
	124["mv_f__698__716 |False|  [U32_maybeTrue [mt__653]]"]
	61 --> 124
	153 --> 124
	153["x__610__704__745 10"]
	123["mv_t__697__715 |True|  [U32_maybeTrue [mt__653]]"]
	61 --> 123
	154 --> 123
	119["mv_t__693__711 |True|  [bool.&& [mb__655]]"]
	63 --> 119
	116 --> 119
	116["merge__664__708 merge"]
	113 --> 116
	112 --> 116
	112["x__610__704 10"]
	93["mv_t__685 |True|  [bool.&& [mb__641]]"]
	49 --> 93
	70 --> 93
	70["merge__662 merge"]
	25 --> 70
	20 --> 70
	20{"x ϕ"}
	63 --> 20
	103 --> 20
	104 --> 20
	104["mv_f__696 |False|  [bool.&& [mb__655]]"]
	63 --> 104
	73 --> 104
	73{"innerPhi__665 ϕ"}
	61 --> 73
	107 --> 73
	108 --> 73
	108["mv_f__700 |False|  [U32_maybeTrue [mt__653]]"]
	61 --> 108
	149 --> 108
	149["x__613__741 20"]
	107["mv_t__699 |True|  [U32_maybeTrue [mt__653]]"]
	61 --> 107
	19 --> 107
	103["mv_t__695 |True|  [bool.&& [mb__655]]"]
	63 --> 103
	74 --> 103
	74["merge__666 merge"]
	19 --> 74
	18 --> 74
	18["x__613 20"]
	25{"x ϕ"}
	63 --> 25
	101 --> 25
	102 --> 25
	102["mv_f__694 |False|  [bool.&& [mb__655]]"]
	63 --> 102
	71 --> 102
	71{"innerPhi__663 ϕ"}
	61 --> 71
	105 --> 71
	106 --> 71
	106["mv_f__698 |False|  [U32_maybeTrue [mt__653]]"]
	61 --> 106
	150 --> 106
	150["x__610__742 10"]
	105["mv_t__697 |True|  [U32_maybeTrue [mt__653]]"]
	61 --> 105
	24 --> 105
	101["mv_t__693 |True|  [bool.&& [mb__655]]"]
	63 --> 101
	72 --> 101
	72["merge__664 merge"]
	24 --> 72
	23 --> 72
	23["x__610 10"]
	79["mv_t__671 |True|  [U32_maybeTrue [mt__639]]"]
	47 --> 79
	133 --> 79
	133{"y__725 ϕ"}
	138 --> 133
	141 --> 133
	142 --> 133
	142["mv_f__678__734 |False|  [bool.&& [mb__650__730]]"]
	138 --> 142
	139 --> 142
	139{"innerPhi__651__731 ϕ"}
	136 --> 139
	143 --> 139
	144 --> 139
	144["mv_f__684__736 |False|  [U32_maybeTrue [mt__648__728]]"]
	136 --> 144
	130 --> 144
	130["y__604__722 u32.+"]
	27 --> 130
	129 --> 130
	129["arg__606__721 2"]
	136["mt__648__728 U32_maybeTrue"]
	128 --> 136
	128["r__720 u32.!="]
	5 --> 128
	127 --> 128
	127["arg__615__719 0"]
	143["mv_t__683__735 |True|  [U32_maybeTrue [mt__648__728]]"]
	136 --> 143
	132 --> 143
	132["y__601__724 u32.+"]
	27 --> 132
	131 --> 132
	131["arg__603__723 1"]
	138["mb__650__730 bool.&&"]
	136 --> 138
	137 --> 138
	137["mf__649__729 U32_maybeFalse"]
	128 --> 137
	141["mv_t__677__733 |True|  [bool.&& [mb__650__730]]"]
	138 --> 141
	140 --> 141
	140["merge__652__732 merge"]
	132 --> 140
	130 --> 140
	75["mv_t__667 |True|  [bool.&& [mb__641]]"]
	49 --> 75
	51 --> 75
	51["merge__643 merge"]
	37 --> 51
	42 --> 51
	42["z__597 u32.+"]
	27 --> 42
	40 --> 42
	40["arg__599 3"]
	37{"y ϕ"}
	58 --> 37
	85 --> 37
	86 --> 37
	86["mv_f__678 |False|  [bool.&& [mb__650]]"]
	58 --> 86
	59 --> 86
	59{"innerPhi__651 ϕ"}
	56 --> 59
	91 --> 59
	92 --> 59
	92["mv_f__684 |False|  [U32_maybeTrue [mt__648]]"]
	56 --> 92
	146 --> 92
	146["y__604__738 u32.+"]
	27 --> 146
	145 --> 146
	145["arg__606__737 2"]
	56["mt__648 U32_maybeTrue"]
	14 --> 56
	14["r u32.!="]
	5 --> 14
	12 --> 14
	12["arg__615 0"]
	91["mv_t__683 |True|  [U32_maybeTrue [mt__648]]"]
	56 --> 91
	148 --> 91
	148["y__601__740 u32.+"]
	27 --> 148
	147 --> 148
	147["arg__603__739 1"]
	58["mb__650 bool.&&"]
	56 --> 58
	57 --> 58
	57["mf__649 U32_maybeFalse"]
	14 --> 57
	85["mv_t__677 |True|  [bool.&& [mb__650]]"]
	58 --> 85
	60 --> 85
	60["merge__652 merge"]
	36 --> 60
	33 --> 60
	33["y__604 u32.+"]
	27 --> 33
	31 --> 33
	31["arg__606 2"]
	36["y__601 u32.+"]
	27 --> 36
	34 --> 36
	34["arg__603 1"]
</pre>`;
window.traces["UNLEM_IMPOSSIBLE_ASSIGNMENT_BUNDLE"]["unlem_scheduler"] = ''
window.traces["UNLEM_IMPOSSIBLE_ASSIGNMENT_BUNDLE"]["unlem_scheduler"] += `<pre class='graph'>graph TD
subgraph block_650["Block 650"]
	direction TB
	b650_46["eff__593 push_u32"]
	b650_1[\\"Finish"/]
	b650_46 --> b650_1
end
phi_681 --> block_650
subgraph phi_681["Phi 681"]
	p681_44{"z ϕ"}
end
block_682 --> phi_681
block_683 --> phi_681
subgraph block_682["Block 682"]
	direction TB
	b682_40["arg__599 3"]
	b682_42["z__597 u32.+"]
	b682_51["merge__643 merge"]
	b682_75["mv_t__667 |True|  [bool.&& [mb__641]]"]
	b682_40 --> b682_42
	b682_42 --> b682_51
	b682_51 --> b682_75
end
phi_689 --> block_682
subgraph phi_689["Phi 689"]
	p689_37{"y ϕ"}
end
block_690 --> phi_689
block_691 --> phi_689
subgraph block_690["Block 690"]
	direction TB
	b690_31["arg__606 2"]
	b690_34["arg__603 1"]
	b690_33["y__604 u32.+"]
	b690_36["y__601 u32.+"]
	b690_60["merge__652 merge"]
	b690_85["mv_t__677 |True|  [bool.&& [mb__650]]"]
	b690_31 --> b690_34
	b690_34 --> b690_33
	b690_33 --> b690_36
	b690_36 --> b690_60
	b690_60 --> b690_85
end
branch_688 --> block_690
subgraph branch_688["Branch 688"]
	br688_58["mb__650 bool.&&"]

end
block_692 --> branch_688
subgraph block_692["Block 692"]
	direction TB
	b692_12["arg__615 0"]
	b692_14["r u32.!="]
	b692_56["mt__648 U32_maybeTrue"]
	b692_57["mf__649 U32_maybeFalse"]
	b692_58["mb__650 bool.&&"]
	b692_12 --> b692_14
	b692_14 --> b692_56
	b692_56 --> b692_57
	b692_57 --> b692_58
end
branch_680 --> block_692
subgraph branch_680["Branch 680"]
	br680_49["mb__641 bool.&&"]

end
phi_707 --> branch_680
subgraph phi_707["Phi 707"]
	p707_28{{"sea__622 Sϕ Stack "}}
	p707_27{"x ϕ"}
end
block_708 --> phi_707
block_709 --> phi_707
subgraph block_708["Block 708"]
	direction TB
	b708_70["merge__662 merge"]
	b708_77["mv_t__669 |True|  [bool.&& [mb__641]]"]
	b708_93["mv_t__685 |True|  [bool.&& [mb__641]]"]
	b708_70 --> b708_77
	b708_77 --> b708_93
end
phi_712 --> block_708
subgraph phi_712["Phi 712"]
	p712_55{{"merged_phi__647 Sϕ Stack "}}
end
block_713 --> phi_712
block_714 --> phi_712
subgraph block_713["Block 713"]
	direction TB
	b713_53["eff_merge__645 merge"]
	b713_81["mv_t__673 |True|  [u32.!= [q]]"]
	b713_53 --> b713_81
end
branch_711 --> block_713
subgraph branch_711["Branch 711"]
	br711_11["q u32.!="]

end
branch_706 --> branch_711
subgraph branch_706["Branch 706"]
	br706_49["mb__641 bool.&&"]

end
block_710 --> branch_706
subgraph block_710["Block 710"]
	direction TB
	b710_6["arg__619 0"]
	b710_8["p u32.!="]
	b710_47["mt__639 U32_maybeTrue"]
	b710_48["mf__640 U32_maybeFalse"]
	b710_49["mb__641 bool.&&"]
	b710_6 --> b710_8
	b710_8 --> b710_47
	b710_47 --> b710_48
	b710_48 --> b710_49
end
phi_720 --> block_710
subgraph phi_720["Phi 720"]
	p720_25{"x ϕ"}
	p720_20{"x ϕ"}
end
block_721 --> phi_720
block_722 --> phi_720
subgraph block_721["Block 721"]
	direction TB
	b721_23["x__610 10"]
	b721_18["x__613 20"]
	b721_72["merge__664 merge"]
	b721_74["merge__666 merge"]
	b721_101["mv_t__693 |True|  [bool.&& [mb__655]]"]
	b721_103["mv_t__695 |True|  [bool.&& [mb__655]]"]
	b721_23 --> b721_18
	b721_18 --> b721_72
	b721_72 --> b721_74
	b721_74 --> b721_101
	b721_101 --> b721_103
end
branch_719 --> block_721
subgraph branch_719["Branch 719"]
	br719_63["mb__655 bool.&&"]

end
block_735 --> branch_719
subgraph block_735["Block 735"]
	direction TB
	b735_0[/"Start"\\]
	b735_3["c1 pop_u32"]
	b735_4["c2 pop_u32"]
	b735_5["c3 pop_u32"]
	b735_9["arg__617 0"]
	b735_11["q u32.!="]
	b735_61["mt__653 U32_maybeTrue"]
	b735_24["x__609 pop_u32"]
	b735_19["x__612 pop_u32"]
	b735_62["mf__654 U32_maybeFalse"]
	b735_63["mb__655 bool.&&"]
	b735_0 --> b735_3
	b735_3 --> b735_4
	b735_4 --> b735_5
	b735_5 --> b735_9
	b735_9 --> b735_11
	b735_11 --> b735_61
	b735_61 --> b735_24
	b735_24 --> b735_19
	b735_19 --> b735_62
	b735_62 --> b735_63
end
subgraph block_722["Block 722"]
	direction TB
	b722_102["mv_f__694 |False|  [bool.&& [mb__655]]"]
	b722_104["mv_f__696 |False|  [bool.&& [mb__655]]"]
	b722_102 --> b722_104
end
phi_732 --> block_722
subgraph phi_732["Phi 732"]
	p732_71{"innerPhi__663 ϕ"}
	p732_73{"innerPhi__665 ϕ"}
end
block_733 --> phi_732
block_734 --> phi_732
subgraph block_733["Block 733"]
	direction TB
	b733_105["mv_t__697 |True|  [U32_maybeTrue [mt__653]]"]
	b733_107["mv_t__699 |True|  [U32_maybeTrue [mt__653]]"]
	b733_105 --> b733_107
end
branch_731 --> block_733
subgraph branch_731["Branch 731"]
	br731_61["mt__653 U32_maybeTrue"]

end
branch_719 --> branch_731
subgraph block_734["Block 734"]
	direction TB
	b734_150["x__610__742 10"]
	b734_149["x__613__741 20"]
	b734_106["mv_f__698 |False|  [U32_maybeTrue [mt__653]]"]
	b734_108["mv_f__700 |False|  [U32_maybeTrue [mt__653]]"]
	b734_150 --> b734_149
	b734_149 --> b734_106
	b734_106 --> b734_108
end
branch_731 --> block_734
subgraph block_714["Block 714"]
	direction TB
	b714_54["eff_merge__646 merge"]
	b714_82["mv_f__674 |False|  [u32.!= [q]]"]
	b714_54 --> b714_82
end
branch_711 --> block_714
subgraph block_709["Block 709"]
	direction TB
	b709_78["mv_f__670 |False|  [bool.&& [mb__641]]"]
	b709_94["mv_f__686 |False|  [bool.&& [mb__641]]"]
	b709_78 --> b709_94
end
phi_716 --> block_709
subgraph phi_716["Phi 716"]
	p716_69{"innerPhi__661 ϕ"}
	p716_52{{"innerPhi__644 Sϕ Stack "}}
end
block_717 --> phi_716
block_718 --> phi_716
subgraph block_717["Block 717"]
	direction TB
	b717_99["mv_t__691 |True|  [U32_maybeTrue [mt__639]]"]
	b717_83["mv_t__675 |True|  [U32_maybeTrue [mt__639]]"]
	b717_99 --> b717_83
end
phi_724 --> block_717
subgraph phi_724["Phi 724"]
	p724_114{"x__706 ϕ"}
	p724_26{{"sea__621 Sϕ Stack "}}
end
block_725 --> phi_724
block_726 --> phi_724
subgraph block_725["Block 725"]
	direction TB
	b725_112["x__610__704 10"]
	b725_113["x__609__705 pop_u32"]
	b725_116["merge__664__708 merge"]
	b725_65["eff_merge__657 merge"]
	b725_119["mv_t__693__711 |True|  [bool.&& [mb__655]]"]
	b725_87["mv_t__679 |True|  [bool.&& [mb__655]]"]
	b725_112 --> b725_113
	b725_113 --> b725_116
	b725_116 --> b725_65
	b725_65 --> b725_119
	b725_119 --> b725_87
end
branch_723 --> block_725
subgraph branch_723["Branch 723"]
	br723_63["mb__655 bool.&&"]

end
branch_715 --> branch_723
subgraph branch_715["Branch 715"]
	br715_47["mt__639 U32_maybeTrue"]

end
branch_706 --> branch_715
subgraph block_726["Block 726"]
	direction TB
	b726_120["mv_f__694__712 |False|  [bool.&& [mb__655]]"]
	b726_88["mv_f__680 |False|  [bool.&& [mb__655]]"]
	b726_120 --> b726_88
end
phi_737 --> block_726
subgraph phi_737["Phi 737"]
	p737_115{"innerPhi__663__707 ϕ"}
	p737_64{{"innerPhi__656 Sϕ Stack "}}
end
block_738 --> phi_737
block_739 --> phi_737
subgraph block_738["Block 738"]
	direction TB
	b738_154["x__609__705__746 pop_u32"]
	b738_123["mv_t__697__715 |True|  [U32_maybeTrue [mt__653]]"]
	b738_95["mv_t__687 |True|  [U32_maybeTrue [mt__653]]"]
	b738_154 --> b738_123
	b738_123 --> b738_95
end
branch_736 --> block_738
subgraph branch_736["Branch 736"]
	br736_61["mt__653 U32_maybeTrue"]

end
branch_723 --> branch_736
subgraph block_739["Block 739"]
	direction TB
	b739_153["x__610__704__745 10"]
	b739_124["mv_f__698__716 |False|  [U32_maybeTrue [mt__653]]"]
	b739_96["mv_f__688 |False|  [U32_maybeTrue [mt__653]]"]
	b739_153 --> b739_124
	b739_124 --> b739_96
end
branch_736 --> block_739
subgraph block_718["Block 718"]
	direction TB
	b718_100["mv_f__692 |False|  [U32_maybeTrue [mt__639]]"]
	b718_84["mv_f__676 |False|  [U32_maybeTrue [mt__639]]"]
	b718_100 --> b718_84
end
phi_728 --> block_718
subgraph phi_728["Phi 728"]
	p728_111{"x__703 ϕ"}
	p728_21{{"sea__620 Sϕ Stack "}}
end
block_729 --> phi_728
block_730 --> phi_728
subgraph block_729["Block 729"]
	direction TB
	b729_109["x__613__701 20"]
	b729_110["x__612__702 pop_u32"]
	b729_67["eff_nop__659 nop"]
	b729_118["merge__666__710 merge"]
	b729_68["eff_merge__660 merge"]
	b729_121["mv_t__695__713 |True|  [bool.&& [mb__655]]"]
	b729_89["mv_t__681 |True|  [bool.&& [mb__655]]"]
	b729_109 --> b729_110
	b729_110 --> b729_67
	b729_67 --> b729_118
	b729_118 --> b729_68
	b729_68 --> b729_121
	b729_121 --> b729_89
end
branch_727 --> block_729
subgraph branch_727["Branch 727"]
	br727_63["mb__655 bool.&&"]

end
branch_715 --> branch_727
subgraph block_730["Block 730"]
	direction TB
	b730_122["mv_f__696__714 |False|  [bool.&& [mb__655]]"]
	b730_90["mv_f__682 |False|  [bool.&& [mb__655]]"]
	b730_122 --> b730_90
end
phi_741 --> block_730
subgraph phi_741["Phi 741"]
	p741_117{"innerPhi__665__709 ϕ"}
	p741_66{{"innerPhi__658 Sϕ Stack "}}
end
block_742 --> phi_741
block_743 --> phi_741
subgraph block_742["Block 742"]
	direction TB
	b742_152["x__612__702__744 pop_u32"]
	b742_125["mv_t__699__717 |True|  [U32_maybeTrue [mt__653]]"]
	b742_97["mv_t__689 |True|  [U32_maybeTrue [mt__653]]"]
	b742_152 --> b742_125
	b742_125 --> b742_97
end
branch_740 --> block_742
subgraph branch_740["Branch 740"]
	br740_61["mt__653 U32_maybeTrue"]

end
branch_727 --> branch_740
subgraph block_743["Block 743"]
	direction TB
	b743_151["x__613__701__743 20"]
	b743_126["mv_f__700__718 |False|  [U32_maybeTrue [mt__653]]"]
	b743_98["mv_f__690 |False|  [U32_maybeTrue [mt__653]]"]
	b743_151 --> b743_126
	b743_126 --> b743_98
end
branch_740 --> block_743
subgraph block_691["Block 691"]
	direction TB
	b691_86["mv_f__678 |False|  [bool.&& [mb__650]]"]
end
phi_698 --> block_691
subgraph phi_698["Phi 698"]
	p698_59{"innerPhi__651 ϕ"}
end
block_699 --> phi_698
block_700 --> phi_698
subgraph block_699["Block 699"]
	direction TB
	b699_147["arg__603__739 1"]
	b699_148["y__601__740 u32.+"]
	b699_91["mv_t__683 |True|  [U32_maybeTrue [mt__648]]"]
	b699_147 --> b699_148
	b699_148 --> b699_91
end
branch_697 --> block_699
subgraph branch_697["Branch 697"]
	br697_56["mt__648 U32_maybeTrue"]

end
branch_688 --> branch_697
subgraph block_700["Block 700"]
	direction TB
	b700_145["arg__606__737 2"]
	b700_146["y__604__738 u32.+"]
	b700_92["mv_f__684 |False|  [U32_maybeTrue [mt__648]]"]
	b700_145 --> b700_146
	b700_146 --> b700_92
end
branch_697 --> block_700
subgraph block_683["Block 683"]
	direction TB
	b683_76["mv_f__668 |False|  [bool.&& [mb__641]]"]
end
phi_685 --> block_683
subgraph phi_685["Phi 685"]
	p685_50{"innerPhi__642 ϕ"}
end
block_686 --> phi_685
block_687 --> phi_685
subgraph block_686["Block 686"]
	direction TB
	b686_79["mv_t__671 |True|  [U32_maybeTrue [mt__639]]"]
end
phi_694 --> block_686
subgraph phi_694["Phi 694"]
	p694_133{"y__725 ϕ"}
end
block_695 --> phi_694
block_696 --> phi_694
subgraph block_695["Block 695"]
	direction TB
	b695_140["merge__652__732 merge"]
	b695_141["mv_t__677__733 |True|  [bool.&& [mb__650__730]]"]
	b695_140 --> b695_141
end
branch_693 --> block_695
subgraph branch_693["Branch 693"]
	br693_138["mb__650__730 bool.&&"]

end
block_701 --> branch_693
subgraph block_701["Block 701"]
	direction TB
	b701_129["arg__606__721 2"]
	b701_131["arg__603__723 1"]
	b701_127["arg__615__719 0"]
	b701_130["y__604__722 u32.+"]
	b701_132["y__601__724 u32.+"]
	b701_128["r__720 u32.!="]
	b701_136["mt__648__728 U32_maybeTrue"]
	b701_137["mf__649__729 U32_maybeFalse"]
	b701_138["mb__650__730 bool.&&"]
	b701_129 --> b701_131
	b701_131 --> b701_127
	b701_127 --> b701_130
	b701_130 --> b701_132
	b701_132 --> b701_128
	b701_128 --> b701_136
	b701_136 --> b701_137
	b701_137 --> b701_138
end
branch_684 --> block_701
subgraph branch_684["Branch 684"]
	br684_47["mt__639 U32_maybeTrue"]

end
branch_680 --> branch_684
subgraph block_696["Block 696"]
	direction TB
	b696_142["mv_f__678__734 |False|  [bool.&& [mb__650__730]]"]
end
phi_703 --> block_696
subgraph phi_703["Phi 703"]
	p703_139{"innerPhi__651__731 ϕ"}
end
block_704 --> phi_703
block_705 --> phi_703
subgraph block_704["Block 704"]
	direction TB
	b704_143["mv_t__683__735 |True|  [U32_maybeTrue [mt__648__728]]"]
end
branch_702 --> block_704
subgraph branch_702["Branch 702"]
	br702_136["mt__648__728 U32_maybeTrue"]

end
branch_693 --> branch_702
subgraph block_705["Block 705"]
	direction TB
	b705_144["mv_f__684__736 |False|  [U32_maybeTrue [mt__648__728]]"]
end
branch_702 --> block_705
subgraph block_687["Block 687"]
	direction TB
	b687_134["arg__599__726 3"]
	b687_135["z__597__727 u32.+"]
	b687_80["mv_f__672 |False|  [U32_maybeTrue [mt__639]]"]
	b687_134 --> b687_135
	b687_135 --> b687_80
end
branch_684 --> block_687

</pre>`;
window.traces["UNLEM_IMPOSSIBLE_ASSIGNMENT_BUNDLE"]["unlem_scheduler_ssa"] = ''
window.traces["UNLEM_IMPOSSIBLE_ASSIGNMENT_BUNDLE"]["unlem_scheduler_ssa"] += `<pre class=''>def c1 = pop_u32();
def c2 = pop_u32();
def c3 = pop_u32();
def arg__617 : u32 = 0;
def q = u32.!=(c2, arg__617);
def mt__653 = U32_maybeTrue(q);
def x__609 = pop_u32();
def x__612 = pop_u32();
def mf__654 = U32_maybeFalse(q);
def mb__655 = bool.&&(mt__653, mf__654);
if (mb__655) {
	def x__610 : u32 = 10;
	def x__613 : u32 = 20;
	def merge__664 = merge(x__609, x__610);
	def merge__666 = merge(x__612, x__613);
} else {
	if (mt__653) {
	} else {
		def x__610__742 : u32 = 10;
		def x__610 = (x__610__742);
		def x__613__741 : u32 = 20;
		def x__613 = (x__613__741);
	}
// phis: innerPhi__663 <- x__609; innerPhi__663 <- x__610__742; innerPhi__665 <- x__612; innerPhi__665 <- x__613__741; 
}
// phis: x <- merge__664; x <- innerPhi__663; x <- merge__666; x <- innerPhi__665; 
def arg__619 : u32 = 0;
def p = u32.!=(c1, arg__619);
def mt__639 = U32_maybeTrue(p);
def mf__640 = U32_maybeFalse(p);
def mb__641 = bool.&&(mt__639, mf__640);
if (mb__641) {
	if (q) {
		def eff_merge__645 = merge(x__609, x__612);
	} else {
		def eff_merge__646 = merge(c3, c3);
	}
// phis: 
	def merge__662 = merge(x, x);
} else {
	if (mt__639) {
		if (mb__655) {
			def x__610__704 : u32 = 10;
			def x__609__705 = pop_u32();
			def x__609 = (x__609__705);
			def merge__664__708 = merge(x__609__705, x__610__704);
			def eff_merge__657 = merge(x__609__705, c3);
		} else {
			if (mt__653) {
				def x__609__705__746 = pop_u32();
			} else {
				def x__610__704__745 : u32 = 10;
			}
// phis: innerPhi__663__707 <- x__609__705__746; innerPhi__663__707 <- x__610__704__745; 
		}
// phis: x__706 <- merge__664__708; x__706 <- innerPhi__663__707; 
	} else {
		if (mb__655) {
			def x__613__701 : u32 = 20;
			def x__612__702 = pop_u32();
			def x__612 = (x__612__702);
			def eff_nop__659 = nop();
			def merge__666__710 = merge(x__612__702, x__613__701);
			def eff_merge__660 = merge(x__612__702, eff_nop__659);
		} else {
			if (mt__653) {
				def x__612__702__744 = pop_u32();
			} else {
				def x__613__701__743 : u32 = 20;
			}
// phis: innerPhi__665__709 <- x__612__702__744; innerPhi__665__709 <- x__613__701__743; 
		}
// phis: x__703 <- merge__666__710; x__703 <- innerPhi__665__709; 
	}
// phis: innerPhi__661 <- x__706; innerPhi__661 <- x__703; 
}
// phis: x <- merge__662; x <- innerPhi__661; 
if (mb__641) {
	def arg__615 : u32 = 0;
	def r = u32.!=(c3, arg__615);
	def mt__648 = U32_maybeTrue(r);
	def mf__649 = U32_maybeFalse(r);
	def mb__650 = bool.&&(mt__648, mf__649);
	if (mb__650) {
		def arg__606 : u32 = 2;
		def arg__603 : u32 = 1;
		def y__604 = u32.+(x, arg__606);
		def y__601 = u32.+(x, arg__603);
		def merge__652 = merge(y__601, y__604);
	} else {
		if (mt__648) {
			def arg__603__739 : u32 = 1;
			def arg__603 = (arg__603__739);
			def y__601__740 = u32.+(x, arg__603__739);
			def y__601 = (y__601__740);
		} else {
			def arg__606__737 : u32 = 2;
			def arg__606 = (arg__606__737);
			def y__604__738 = u32.+(x, arg__606__737);
			def y__604 = (y__604__738);
		}
// phis: innerPhi__651 <- y__601__740; innerPhi__651 <- y__604__738; 
	}
// phis: y <- merge__652; y <- innerPhi__651; 
	def arg__599 : u32 = 3;
	def z__597 = u32.+(x, arg__599);
	def merge__643 = merge(y, z__597);
} else {
	if (mt__639) {
		def arg__606__721 : u32 = 2;
		def arg__603__723 : u32 = 1;
		def arg__615__719 : u32 = 0;
		def arg__615 = (arg__615__719);
		def y__604__722 = u32.+(x, arg__606__721);
		def y__601__724 = u32.+(x, arg__603__723);
		def r__720 = u32.!=(c3, arg__615__719);
		def r = (r__720);
		def mt__648__728 = U32_maybeTrue(r__720);
		def mt__648 = (mt__648__728);
		def mf__649__729 = U32_maybeFalse(r__720);
		def mf__649 = (mf__649__729);
		def mb__650__730 = bool.&&(mt__648__728, mf__649__729);
		def mb__650 = (mb__650__730);
		if (mb__650__730) {
			def merge__652__732 = merge(y__601__724, y__604__722);
			def merge__652 = (merge__652__732);
		} else {
			if (mt__648__728) {
			}
// phis: innerPhi__651__731 <- y__601__724; innerPhi__651__731 <- y__604__722; 
		}
// phis: y__725 <- merge__652__732; y__725 <- innerPhi__651__731; 
	} else {
		def arg__599__726 : u32 = 3;
		def arg__599 = (arg__599__726);
		def z__597__727 = u32.+(x, arg__599__726);
		def z__597 = (z__597__727);
	}
// phis: innerPhi__642 <- y__725; innerPhi__642 <- z__597__727; 
}
// phis: z <- merge__643; z <- innerPhi__642; 
def eff__593 = push_u32(z);
</pre>`;
window.traces["UNLEM_IMPOSSIBLE_ASSIGNMENT_BUNDLE"]["unlem_scheduler_ssa_pretty"] = ''
window.traces["UNLEM_IMPOSSIBLE_ASSIGNMENT_BUNDLE"]["unlem_scheduler_ssa_pretty"] += `<pre class=''>def c1 = pop_u32();
def c2 = pop_u32();
def c3 = pop_u32();
def mt = U32_maybeTrue(u32.!=(c2, 0));
var x = pop_u32();
def x1 = pop_u32();
def mf = U32_maybeFalse(u32.!=(c2, 0));
if (bool.&&(mt, mf)) {
	x = merge(x, 10);
	x = merge(x1, 20);
} else {
	if (mt) {
		x = x1;
	} else {
		x = 10;
		x = 20;
	}
}
def mt1 = U32_maybeTrue(u32.!=(c1, 0));
def mf1 = U32_maybeFalse(u32.!=(c1, 0));
if (bool.&&(mt1, mf1)) {
	if (u32.!=(c2, 0)) {
	}
	x = merge(x, x);
} else {
	if (mt1) {
		if (bool.&&(mt, mf)) {
			def x2 = pop_u32();
			x = (x2);
			x = merge(x2, 10);
		} else {
			if (mt) {
				x = pop_u32();
			} else {
				x = 10;
			}
		}
	} else {
		if (bool.&&(mt, mf)) {
			def x3 = pop_u32();
			def x1 = (x3);
			x = merge(x3, 20);
		} else {
			if (mt) {
				x = pop_u32();
			} else {
				x = 20;
			}
		}
	}
}
var z: u32;
if (bool.&&(mt1, mf1)) {
	def mt2 = U32_maybeTrue(u32.!=(c3, 0));
	def mf2 = U32_maybeFalse(u32.!=(c3, 0));
	var y: u32;
	if (bool.&&(mt2, mf2)) {
		y = merge(u32.+(x, 1), u32.+(x, 2));
	} else {
		if (mt2) {
			y = u32.+(x, 1);
		} else {
			y = u32.+(x, 2);
		}
	}
	z = merge(y, u32.+(x, 3));
} else {
	if (mt1) {
		var y = u32.+(x, 2);
		def y1 = u32.+(x, 1);
		def mt3 = U32_maybeTrue(u32.!=(c3, 0));
		def mf3 = U32_maybeFalse(u32.!=(c3, 0));
		if (bool.&&(mt3, mf3)) {
			z = merge(y1, y);
			def merge = (merge__652__732);
		} else {
			if (mt3) {
				z = y1;
			}
		}
	} else {
		z = u32.+(x, 3);
	}
}
push_u32(z);
</pre>`;
window.traces["UNTANGLE_BRAID_LIMIT_STRESS"] = {}
window.traces["UNTANGLE_BRAID_LIMIT_STRESS"]["parsed"] = ''
window.traces["UNTANGLE_BRAID_LIMIT_STRESS"]["parsed"] += `<pre class=''>def c1 = pop_u32();
def c2 = pop_u32();
def c3 = pop_u32();
def c4 = pop_u32();
def arg__795 : u32 = 0;
def arg__794 = (c1);
def p = u32.!=(arg__794, arg__795);
def arg__793 : u32 = 0;
def arg__792 = (c2);
def q = u32.!=(arg__792, arg__793);
def arg__791 : u32 = 0;
def arg__790 = (c3);
def r = u32.!=(arg__790, arg__791);
def arg__789 : u32 = 0;
def arg__788 = (c4);
def s = u32.!=(arg__788, arg__789);
def seed = pop_u32();
def a : u32 = 0;
def cond__777 = (p);
if (cond__777) {
	def cond__778 = (q);
	if (cond__778) {
		def arg__781 : u32 = 1;
		def arg__780 = (seed);
		def a__779 = u32.+(arg__780, arg__781);
	} else {
		def a__782 : u32 = 10;
	}
// phis: a <- a__779; a <- a__782; 
} else {
	def cond__783 = (r);
	if (cond__783) {
		def arg__786 : u32 = 2;
		def arg__785 = (seed);
		def a__784 = u32.+(arg__785, arg__786);
	} else {
		def a__787 : u32 = 20;
	}
// phis: a <- a__784; a <- a__787; 
}
// phis: a <- a; a <- a; 
def b : u32 = 0;
def cond__764 = (q);
if (cond__764) {
	def cond__765 = (r);
	if (cond__765) {
		def arg__768 : u32 = 1;
		def arg__767 = (a);
		def b__766 = u32.+(arg__767, arg__768);
	} else {
		def arg__771 : u32 = 3;
		def arg__770 = (seed);
		def b__769 = u32.+(arg__770, arg__771);
	}
// phis: b <- b__766; b <- b__769; 
} else {
	def cond__772 = (s);
	if (cond__772) {
		def arg__775 : u32 = 2;
		def arg__774 = (a);
		def b__773 = u32.+(arg__774, arg__775);
	} else {
		def b__776 : u32 = 30;
	}
// phis: b <- b__773; b <- b__776; 
}
// phis: b <- b; b <- b; 
def c : u32 = 0;
def cond__749 = (r);
if (cond__749) {
	def cond__750 = (s);
	if (cond__750) {
		def arg__753 : u32 = 1;
		def arg__752 = (b);
		def c__751 = u32.+(arg__752, arg__753);
	} else {
		def arg__756 : u32 = 3;
		def arg__755 = (a);
		def c__754 = u32.+(arg__755, arg__756);
	}
// phis: c <- c__751; c <- c__754; 
} else {
	def cond__757 = (p);
	if (cond__757) {
		def arg__760 : u32 = 2;
		def arg__759 = (b);
		def c__758 = u32.+(arg__759, arg__760);
	} else {
		def arg__763 : u32 = 4;
		def arg__762 = (seed);
		def c__761 = u32.+(arg__762, arg__763);
	}
// phis: c <- c__758; c <- c__761; 
}
// phis: c <- c; c <- c; 
def arg__748 = (c);
def eff__747 = push_u32(arg__748);
</pre>`;
window.traces["UNTANGLE_BRAID_LIMIT_STRESS"]["initial_pretty"] = ''
window.traces["UNTANGLE_BRAID_LIMIT_STRESS"]["initial_pretty"] += `<pre class=''>def c1 = pop_u32();
def c2 = pop_u32();
def c3 = pop_u32();
def c4 = pop_u32();
def seed = pop_u32();
var a = 0;
if ((u32.!=((c1), 0))) {
	if ((u32.!=((c2), 0))) {
		a = u32.+((seed), 1);
	} else {
		a = 10;
	}
} else {
	if ((u32.!=((c3), 0))) {
		a = u32.+((seed), 2);
	} else {
		a = 20;
	}
}
var b = 0;
if ((u32.!=((c2), 0))) {
	if ((u32.!=((c3), 0))) {
		b = u32.+((a), 1);
	} else {
		b = u32.+((seed), 3);
	}
} else {
	if ((u32.!=((c4), 0))) {
		b = u32.+((a), 2);
	} else {
		b = 30;
	}
}
var c = 0;
if ((u32.!=((c3), 0))) {
	if ((u32.!=((c4), 0))) {
		c = u32.+((b), 1);
	} else {
		c = u32.+((a), 3);
	}
} else {
	if ((u32.!=((c1), 0))) {
		c = u32.+((b), 2);
	} else {
		c = u32.+((seed), 4);
	}
}
push_u32((c));
</pre>`;
window.traces["UNTANGLE_BRAID_LIMIT_STRESS"]["raw"] = ''
window.traces["UNTANGLE_BRAID_LIMIT_STRESS"]["raw"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	72 -. Stack .-> 1
	72["eff__747 push_u32"]
	70 --> 72
	19 -. Stack .-> 72
	19["seed pop_u32"]
	6 -. Stack .-> 19
	6["c4 pop_u32"]
	5 -. Stack .-> 6
	5["c3 pop_u32"]
	4 -. Stack .-> 5
	4["c2 pop_u32"]
	3 -. Stack .-> 4
	3["c1 pop_u32"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	70{"c ϕ"}
	15 --> 70
	69 --> 70
	61 --> 70
	61{"c ϕ"}
	9 --> 61
	60 --> 61
	57 --> 61
	57["c__761 u32.+"]
	19 --> 57
	55 --> 57
	55["arg__763 4"]
	60["c__758 u32.+"]
	51 --> 60
	58 --> 60
	58["arg__760 2"]
	51{"b ϕ"}
	12 --> 51
	50 --> 51
	42 --> 51
	42{"b ϕ"}
	18 --> 42
	41 --> 42
	38 --> 42
	38["b__776 30"]
	41["b__773 u32.+"]
	34 --> 41
	39 --> 41
	39["arg__775 2"]
	34{"a ϕ"}
	9 --> 34
	33 --> 34
	27 --> 34
	27{"a ϕ"}
	15 --> 27
	26 --> 27
	23 --> 27
	23["a__787 20"]
	26["a__784 u32.+"]
	19 --> 26
	24 --> 26
	24["arg__786 2"]
	15["r u32.!="]
	5 --> 15
	13 --> 15
	13["arg__791 0"]
	33{"a ϕ"}
	12 --> 33
	32 --> 33
	29 --> 33
	29["a__782 10"]
	32["a__779 u32.+"]
	19 --> 32
	30 --> 32
	30["arg__781 1"]
	12["q u32.!="]
	4 --> 12
	10 --> 12
	10["arg__793 0"]
	9["p u32.!="]
	3 --> 9
	7 --> 9
	7["arg__795 0"]
	18["s u32.!="]
	6 --> 18
	16 --> 18
	16["arg__789 0"]
	50{"b ϕ"}
	15 --> 50
	49 --> 50
	46 --> 50
	46["b__769 u32.+"]
	19 --> 46
	44 --> 46
	44["arg__771 3"]
	49["b__766 u32.+"]
	34 --> 49
	47 --> 49
	47["arg__768 1"]
	69{"c ϕ"}
	18 --> 69
	68 --> 69
	65 --> 69
	65["c__754 u32.+"]
	34 --> 65
	63 --> 65
	63["arg__756 3"]
	68["c__751 u32.+"]
	51 --> 68
	66 --> 68
	66["arg__753 1"]
</pre>`;
window.traces["UNTANGLE_BRAID_LIMIT_STRESS"]["scheduler_start"] = ''
window.traces["UNTANGLE_BRAID_LIMIT_STRESS"]["scheduler_start"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	72 -. Stack .-> 1
	72["eff__747 push_u32"]
	70 --> 72
	19 -. Stack .-> 72
	19["seed pop_u32"]
	6 -. Stack .-> 19
	6["c4 pop_u32"]
	5 -. Stack .-> 6
	5["c3 pop_u32"]
	4 -. Stack .-> 5
	4["c2 pop_u32"]
	3 -. Stack .-> 4
	3["c1 pop_u32"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	70{"c ϕ"}
	15 --> 70
	73 --> 70
	74 --> 70
	74["mv_f__797 |False|  [u32.!= [r]]"]
	15 --> 74
	61 --> 74
	61{"c ϕ"}
	9 --> 61
	77 --> 61
	78 --> 61
	78["mv_f__801 |False|  [u32.!= [p]]"]
	9 --> 78
	57 --> 78
	57["c__761 u32.+"]
	19 --> 57
	55 --> 57
	55["arg__763 4"]
	9["p u32.!="]
	3 --> 9
	7 --> 9
	7["arg__795 0"]
	77["mv_t__800 |True|  [u32.!= [p]]"]
	9 --> 77
	60 --> 77
	60["c__758 u32.+"]
	51 --> 60
	58 --> 60
	58["arg__760 2"]
	51{"b ϕ"}
	12 --> 51
	79 --> 51
	80 --> 51
	80["mv_f__803 |False|  [u32.!= [q]]"]
	12 --> 80
	42 --> 80
	42{"b ϕ"}
	18 --> 42
	85 --> 42
	86 --> 42
	86["mv_f__809 |False|  [u32.!= [s]]"]
	18 --> 86
	38 --> 86
	38["b__776 30"]
	18["s u32.!="]
	6 --> 18
	16 --> 18
	16["arg__789 0"]
	85["mv_t__808 |True|  [u32.!= [s]]"]
	18 --> 85
	41 --> 85
	41["b__773 u32.+"]
	34 --> 41
	39 --> 41
	39["arg__775 2"]
	34{"a ϕ"}
	9 --> 34
	81 --> 34
	82 --> 34
	82["mv_f__805 |False|  [u32.!= [p]]"]
	9 --> 82
	27 --> 82
	27{"a ϕ"}
	15 --> 27
	89 --> 27
	90 --> 27
	90["mv_f__813 |False|  [u32.!= [r]]"]
	15 --> 90
	23 --> 90
	23["a__787 20"]
	15["r u32.!="]
	5 --> 15
	13 --> 15
	13["arg__791 0"]
	89["mv_t__812 |True|  [u32.!= [r]]"]
	15 --> 89
	26 --> 89
	26["a__784 u32.+"]
	19 --> 26
	24 --> 26
	24["arg__786 2"]
	81["mv_t__804 |True|  [u32.!= [p]]"]
	9 --> 81
	33 --> 81
	33{"a ϕ"}
	12 --> 33
	87 --> 33
	88 --> 33
	88["mv_f__811 |False|  [u32.!= [q]]"]
	12 --> 88
	29 --> 88
	29["a__782 10"]
	12["q u32.!="]
	4 --> 12
	10 --> 12
	10["arg__793 0"]
	87["mv_t__810 |True|  [u32.!= [q]]"]
	12 --> 87
	32 --> 87
	32["a__779 u32.+"]
	19 --> 32
	30 --> 32
	30["arg__781 1"]
	79["mv_t__802 |True|  [u32.!= [q]]"]
	12 --> 79
	50 --> 79
	50{"b ϕ"}
	15 --> 50
	83 --> 50
	84 --> 50
	84["mv_f__807 |False|  [u32.!= [r]]"]
	15 --> 84
	46 --> 84
	46["b__769 u32.+"]
	19 --> 46
	44 --> 46
	44["arg__771 3"]
	83["mv_t__806 |True|  [u32.!= [r]]"]
	15 --> 83
	49 --> 83
	49["b__766 u32.+"]
	34 --> 49
	47 --> 49
	47["arg__768 1"]
	73["mv_t__796 |True|  [u32.!= [r]]"]
	15 --> 73
	69 --> 73
	69{"c ϕ"}
	18 --> 69
	75 --> 69
	76 --> 69
	76["mv_f__799 |False|  [u32.!= [s]]"]
	18 --> 76
	65 --> 76
	65["c__754 u32.+"]
	34 --> 65
	63 --> 65
	63["arg__756 3"]
	75["mv_t__798 |True|  [u32.!= [s]]"]
	18 --> 75
	68 --> 75
	68["c__751 u32.+"]
	51 --> 68
	66 --> 68
	66["arg__753 1"]
</pre>`;
window.traces["UNTANGLE_BRAID_LIMIT_STRESS"]["untangled"] = ''
window.traces["UNTANGLE_BRAID_LIMIT_STRESS"]["untangled"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	72 -. Stack .-> 1
	72["eff__747 push_u32"]
	70 --> 72
	19 -. Stack .-> 72
	19["seed pop_u32"]
	6 -. Stack .-> 19
	6["c4 pop_u32"]
	5 -. Stack .-> 6
	5["c3 pop_u32"]
	4 -. Stack .-> 5
	4["c2 pop_u32"]
	3 -. Stack .-> 4
	3["c1 pop_u32"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	70{"c ϕ"}
	15 --> 70
	73 --> 70
	74 --> 70
	74["mv_f__797 |False|  [u32.!= [r]]"]
	15 --> 74
	61 --> 74
	61{"c ϕ"}
	92 --> 61
	77 --> 61
	78 --> 61
	78["mv_f__801 |False|  [u32.!= [p__815]]"]
	92 --> 78
	57 --> 78
	57["c__761 u32.+"]
	19 --> 57
	55 --> 57
	55["arg__763 4"]
	92["p__815 u32.!="]
	3 --> 92
	91 --> 92
	91["arg__795__814 0"]
	77["mv_t__800 |True|  [u32.!= [p__815]]"]
	92 --> 77
	60 --> 77
	60["c__758 u32.+"]
	115 --> 60
	58 --> 60
	58["arg__760 2"]
	115{"b__838 ϕ"}
	94 --> 115
	116 --> 115
	117 --> 115
	117["mv_f__803__840 |False|  [u32.!= [q__817]]"]
	94 --> 117
	109 --> 117
	109{"b__832 ϕ"}
	96 --> 109
	122 --> 109
	123 --> 109
	123["mv_f__809__846 |False|  [u32.!= [s__819]]"]
	96 --> 123
	106 --> 123
	106["b__776__829 30"]
	96["s__819 u32.!="]
	6 --> 96
	95 --> 96
	95["arg__789__818 0"]
	122["mv_t__808__845 |True|  [u32.!= [s__819]]"]
	96 --> 122
	108 --> 122
	108["b__773__831 u32.+"]
	155 --> 108
	107 --> 108
	107["arg__775__830 2"]
	155{"a__828__878 ϕ"}
	92 --> 155
	156 --> 155
	157 --> 155
	157["mv_f__805__842__880 |False|  [u32.!= [p__815]]"]
	92 --> 157
	150 --> 157
	150{"a__823__873 ϕ"}
	15 --> 150
	160 --> 150
	161 --> 150
	161["mv_f__813__850__884 |False|  [u32.!= [r]]"]
	15 --> 161
	147 --> 161
	147["a__787__820__870 20"]
	15["r u32.!="]
	5 --> 15
	13 --> 15
	13["arg__791 0"]
	160["mv_t__812__849__883 |True|  [u32.!= [r]]"]
	15 --> 160
	149 --> 160
	149["a__784__822__872 u32.+"]
	19 --> 149
	148 --> 149
	148["arg__786__821__871 2"]
	156["mv_t__804__841__879 |True|  [u32.!= [p__815]]"]
	92 --> 156
	154 --> 156
	154{"a__827__877 ϕ"}
	94 --> 154
	158 --> 154
	159 --> 154
	159["mv_f__811__848__882 |False|  [u32.!= [q__817]]"]
	94 --> 159
	151 --> 159
	151["a__782__824__874 10"]
	94["q__817 u32.!="]
	4 --> 94
	93 --> 94
	93["arg__793__816 0"]
	158["mv_t__810__847__881 |True|  [u32.!= [q__817]]"]
	94 --> 158
	153 --> 158
	153["a__779__826__876 u32.+"]
	19 --> 153
	152 --> 153
	152["arg__781__825__875 1"]
	116["mv_t__802__839 |True|  [u32.!= [q__817]]"]
	94 --> 116
	114 --> 116
	114{"b__837 ϕ"}
	15 --> 114
	120 --> 114
	121 --> 114
	121["mv_f__807__844 |False|  [u32.!= [r]]"]
	15 --> 121
	111 --> 121
	111["b__769__834 u32.+"]
	19 --> 111
	110 --> 111
	110["arg__771__833 3"]
	120["mv_t__806__843 |True|  [u32.!= [r]]"]
	15 --> 120
	113 --> 120
	113["b__766__836 u32.+"]
	105 --> 113
	112 --> 113
	112["arg__768__835 1"]
	105{"a__828 ϕ"}
	92 --> 105
	118 --> 105
	119 --> 105
	119["mv_f__805__842 |False|  [u32.!= [p__815]]"]
	92 --> 119
	100 --> 119
	100{"a__823 ϕ"}
	15 --> 100
	126 --> 100
	127 --> 100
	127["mv_f__813__850 |False|  [u32.!= [r]]"]
	15 --> 127
	97 --> 127
	97["a__787__820 20"]
	126["mv_t__812__849 |True|  [u32.!= [r]]"]
	15 --> 126
	99 --> 126
	99["a__784__822 u32.+"]
	19 --> 99
	98 --> 99
	98["arg__786__821 2"]
	118["mv_t__804__841 |True|  [u32.!= [p__815]]"]
	92 --> 118
	104 --> 118
	104{"a__827 ϕ"}
	94 --> 104
	124 --> 104
	125 --> 104
	125["mv_f__811__848 |False|  [u32.!= [q__817]]"]
	94 --> 125
	101 --> 125
	101["a__782__824 10"]
	124["mv_t__810__847 |True|  [u32.!= [q__817]]"]
	94 --> 124
	103 --> 124
	103["a__779__826 u32.+"]
	19 --> 103
	102 --> 103
	102["arg__781__825 1"]
	73["mv_t__796 |True|  [u32.!= [r]]"]
	15 --> 73
	69 --> 73
	69{"c ϕ"}
	18 --> 69
	75 --> 69
	76 --> 69
	76["mv_f__799 |False|  [u32.!= [s]]"]
	18 --> 76
	65 --> 76
	65["c__754 u32.+"]
	140 --> 65
	63 --> 65
	63["arg__756 3"]
	140{"a__863 ϕ"}
	129 --> 140
	141 --> 140
	142 --> 140
	142["mv_f__805__865 |False|  [u32.!= [p__852]]"]
	129 --> 142
	135 --> 142
	135{"a__858 ϕ"}
	15 --> 135
	145 --> 135
	146 --> 135
	146["mv_f__813__869 |False|  [u32.!= [r]]"]
	15 --> 146
	132 --> 146
	132["a__787__855 20"]
	145["mv_t__812__868 |True|  [u32.!= [r]]"]
	15 --> 145
	134 --> 145
	134["a__784__857 u32.+"]
	19 --> 134
	133 --> 134
	133["arg__786__856 2"]
	129["p__852 u32.!="]
	3 --> 129
	128 --> 129
	128["arg__795__851 0"]
	141["mv_t__804__864 |True|  [u32.!= [p__852]]"]
	129 --> 141
	139 --> 141
	139{"a__862 ϕ"}
	131 --> 139
	143 --> 139
	144 --> 139
	144["mv_f__811__867 |False|  [u32.!= [q__854]]"]
	131 --> 144
	136 --> 144
	136["a__782__859 10"]
	131["q__854 u32.!="]
	4 --> 131
	130 --> 131
	130["arg__793__853 0"]
	143["mv_t__810__866 |True|  [u32.!= [q__854]]"]
	131 --> 143
	138 --> 143
	138["a__779__861 u32.+"]
	19 --> 138
	137 --> 138
	137["arg__781__860 1"]
	18["s u32.!="]
	6 --> 18
	16 --> 18
	16["arg__789 0"]
	75["mv_t__798 |True|  [u32.!= [s]]"]
	18 --> 75
	68 --> 75
	68["c__751 u32.+"]
	51 --> 68
	66 --> 68
	66["arg__753 1"]
	51{"b ϕ"}
	12 --> 51
	79 --> 51
	80 --> 51
	80["mv_f__803 |False|  [u32.!= [q]]"]
	12 --> 80
	42 --> 80
	42{"b ϕ"}
	18 --> 42
	85 --> 42
	86 --> 42
	86["mv_f__809 |False|  [u32.!= [s]]"]
	18 --> 86
	38 --> 86
	38["b__776 30"]
	85["mv_t__808 |True|  [u32.!= [s]]"]
	18 --> 85
	41 --> 85
	41["b__773 u32.+"]
	172 --> 41
	39 --> 41
	39["arg__775 2"]
	172{"a__895 ϕ"}
	163 --> 172
	173 --> 172
	174 --> 172
	174["mv_f__805__897 |False|  [u32.!= [p__886]]"]
	163 --> 174
	167 --> 174
	167{"a__890 ϕ"}
	15 --> 167
	177 --> 167
	178 --> 167
	178["mv_f__813__901 |False|  [u32.!= [r]]"]
	15 --> 178
	164 --> 178
	164["a__787__887 20"]
	177["mv_t__812__900 |True|  [u32.!= [r]]"]
	15 --> 177
	166 --> 177
	166["a__784__889 u32.+"]
	19 --> 166
	165 --> 166
	165["arg__786__888 2"]
	163["p__886 u32.!="]
	3 --> 163
	162 --> 163
	162["arg__795__885 0"]
	173["mv_t__804__896 |True|  [u32.!= [p__886]]"]
	163 --> 173
	171 --> 173
	171{"a__894 ϕ"}
	12 --> 171
	175 --> 171
	176 --> 171
	176["mv_f__811__899 |False|  [u32.!= [q]]"]
	12 --> 176
	168 --> 176
	168["a__782__891 10"]
	12["q u32.!="]
	4 --> 12
	10 --> 12
	10["arg__793 0"]
	175["mv_t__810__898 |True|  [u32.!= [q]]"]
	12 --> 175
	170 --> 175
	170["a__779__893 u32.+"]
	19 --> 170
	169 --> 170
	169["arg__781__892 1"]
	79["mv_t__802 |True|  [u32.!= [q]]"]
	12 --> 79
	50 --> 79
	50{"b ϕ"}
	15 --> 50
	83 --> 50
	84 --> 50
	84["mv_f__807 |False|  [u32.!= [r]]"]
	15 --> 84
	46 --> 84
	46["b__769 u32.+"]
	19 --> 46
	44 --> 46
	44["arg__771 3"]
	83["mv_t__806 |True|  [u32.!= [r]]"]
	15 --> 83
	49 --> 83
	49["b__766 u32.+"]
	34 --> 49
	47 --> 49
	47["arg__768 1"]
	34{"a ϕ"}
	9 --> 34
	81 --> 34
	82 --> 34
	82["mv_f__805 |False|  [u32.!= [p]]"]
	9 --> 82
	27 --> 82
	27{"a ϕ"}
	15 --> 27
	89 --> 27
	90 --> 27
	90["mv_f__813 |False|  [u32.!= [r]]"]
	15 --> 90
	23 --> 90
	23["a__787 20"]
	89["mv_t__812 |True|  [u32.!= [r]]"]
	15 --> 89
	26 --> 89
	26["a__784 u32.+"]
	19 --> 26
	24 --> 26
	24["arg__786 2"]
	9["p u32.!="]
	3 --> 9
	7 --> 9
	7["arg__795 0"]
	81["mv_t__804 |True|  [u32.!= [p]]"]
	9 --> 81
	33 --> 81
	33{"a ϕ"}
	12 --> 33
	87 --> 33
	88 --> 33
	88["mv_f__811 |False|  [u32.!= [q]]"]
	12 --> 88
	29 --> 88
	29["a__782 10"]
	87["mv_t__810 |True|  [u32.!= [q]]"]
	12 --> 87
	32 --> 87
	32["a__779 u32.+"]
	19 --> 32
	30 --> 32
	30["arg__781 1"]
</pre>`;
window.traces["UNTANGLE_BRAID_LIMIT_STRESS"]["schedulerMermaid"] = ''
window.traces["UNTANGLE_BRAID_LIMIT_STRESS"]["schedulerMermaid"] += `<pre class='graph'>graph TD
subgraph block_744["Block 744"]
	direction TB
	b744_72["eff__747 push_u32"]
	b744_1[\\"Finish"/]
	b744_72 --> b744_1
end
phi_783 --> block_744
subgraph phi_783["Phi 783"]
	p783_70{"c ϕ"}
end
block_784 --> phi_783
block_785 --> phi_783
subgraph block_784["Block 784"]
	direction TB
	b784_73["mv_t__796 |True|  [u32.!= [r]]"]
end
phi_787 --> block_784
subgraph phi_787["Phi 787"]
	p787_69{"c ϕ"}
end
block_788 --> phi_787
block_789 --> phi_787
subgraph block_788["Block 788"]
	direction TB
	b788_66["arg__753 1"]
	b788_68["c__751 u32.+"]
	b788_75["mv_t__798 |True|  [u32.!= [s]]"]
	b788_66 --> b788_68
	b788_68 --> b788_75
end
phi_795 --> block_788
subgraph phi_795["Phi 795"]
	p795_51{"b ϕ"}
end
block_796 --> phi_795
block_797 --> phi_795
subgraph block_796["Block 796"]
	direction TB
	b796_79["mv_t__802 |True|  [u32.!= [q]]"]
end
phi_808 --> block_796
subgraph phi_808["Phi 808"]
	p808_50{"b ϕ"}
end
block_809 --> phi_808
block_810 --> phi_808
subgraph block_809["Block 809"]
	direction TB
	b809_47["arg__768 1"]
	b809_49["b__766 u32.+"]
	b809_83["mv_t__806 |True|  [u32.!= [r]]"]
	b809_47 --> b809_49
	b809_49 --> b809_83
end
phi_835 --> block_809
subgraph phi_835["Phi 835"]
	p835_34{"a ϕ"}
end
block_836 --> phi_835
block_837 --> phi_835
subgraph block_836["Block 836"]
	direction TB
	b836_81["mv_t__804 |True|  [u32.!= [p]]"]
end
phi_854 --> block_836
subgraph phi_854["Phi 854"]
	p854_33{"a ϕ"}
end
block_855 --> phi_854
block_856 --> phi_854
subgraph block_855["Block 855"]
	direction TB
	b855_30["arg__781 1"]
	b855_32["a__779 u32.+"]
	b855_87["mv_t__810 |True|  [u32.!= [q]]"]
	b855_30 --> b855_32
	b855_32 --> b855_87
end
branch_853 --> block_855
subgraph branch_853["Branch 853"]
	br853_12["q u32.!="]

end
branch_834 --> branch_853
subgraph branch_834["Branch 834"]
	br834_9["p u32.!="]

end
block_850 --> branch_834
subgraph block_850["Block 850"]
	direction TB
	b850_7["arg__795 0"]
	b850_9["p u32.!="]
	b850_7 --> b850_9
end
branch_807 --> block_850
subgraph branch_807["Branch 807"]
	br807_15["r u32.!="]

end
branch_794 --> branch_807
subgraph branch_794["Branch 794"]
	br794_12["q u32.!="]

end
block_885 --> branch_794
subgraph block_885["Block 885"]
	direction TB
	b885_10["arg__793 0"]
	b885_12["q u32.!="]
	b885_10 --> b885_12
end
branch_786 --> block_885
subgraph branch_786["Branch 786"]
	br786_18["s u32.!="]

end
block_831 --> branch_786
subgraph block_831["Block 831"]
	direction TB
	b831_16["arg__789 0"]
	b831_18["s u32.!="]
	b831_16 --> b831_18
end
branch_782 --> block_831
subgraph branch_782["Branch 782"]
	br782_15["r u32.!="]

end
block_887 --> branch_782
subgraph block_887["Block 887"]
	direction TB
	b887_0[/"Start"\\]
	b887_3["c1 pop_u32"]
	b887_4["c2 pop_u32"]
	b887_5["c3 pop_u32"]
	b887_6["c4 pop_u32"]
	b887_19["seed pop_u32"]
	b887_13["arg__791 0"]
	b887_15["r u32.!="]
	b887_0 --> b887_3
	b887_3 --> b887_4
	b887_4 --> b887_5
	b887_5 --> b887_6
	b887_6 --> b887_19
	b887_19 --> b887_13
	b887_13 --> b887_15
end
subgraph block_856["Block 856"]
	direction TB
	b856_29["a__782 10"]
	b856_88["mv_f__811 |False|  [u32.!= [q]]"]
	b856_29 --> b856_88
end
branch_853 --> block_856
subgraph block_837["Block 837"]
	direction TB
	b837_82["mv_f__805 |False|  [u32.!= [p]]"]
end
phi_858 --> block_837
subgraph phi_858["Phi 858"]
	p858_27{"a ϕ"}
end
block_859 --> phi_858
block_860 --> phi_858
subgraph block_859["Block 859"]
	direction TB
	b859_24["arg__786 2"]
	b859_26["a__784 u32.+"]
	b859_89["mv_t__812 |True|  [u32.!= [r]]"]
	b859_24 --> b859_26
	b859_26 --> b859_89
end
branch_857 --> block_859
subgraph branch_857["Branch 857"]
	br857_15["r u32.!="]

end
branch_834 --> branch_857
subgraph block_860["Block 860"]
	direction TB
	b860_23["a__787 20"]
	b860_90["mv_f__813 |False|  [u32.!= [r]]"]
	b860_23 --> b860_90
end
branch_857 --> block_860
subgraph block_810["Block 810"]
	direction TB
	b810_44["arg__771 3"]
	b810_46["b__769 u32.+"]
	b810_84["mv_f__807 |False|  [u32.!= [r]]"]
	b810_44 --> b810_46
	b810_46 --> b810_84
end
branch_807 --> block_810
subgraph block_797["Block 797"]
	direction TB
	b797_80["mv_f__803 |False|  [u32.!= [q]]"]
end
phi_812 --> block_797
subgraph phi_812["Phi 812"]
	p812_42{"b ϕ"}
end
block_813 --> phi_812
block_814 --> phi_812
subgraph block_813["Block 813"]
	direction TB
	b813_39["arg__775 2"]
	b813_41["b__773 u32.+"]
	b813_85["mv_t__808 |True|  [u32.!= [s]]"]
	b813_39 --> b813_41
	b813_41 --> b813_85
end
phi_839 --> block_813
subgraph phi_839["Phi 839"]
	p839_172{"a__895 ϕ"}
end
block_840 --> phi_839
block_841 --> phi_839
subgraph block_840["Block 840"]
	direction TB
	b840_173["mv_t__804__896 |True|  [u32.!= [p__886]]"]
end
phi_862 --> block_840
subgraph phi_862["Phi 862"]
	p862_171{"a__894 ϕ"}
end
block_863 --> phi_862
block_864 --> phi_862
subgraph block_863["Block 863"]
	direction TB
	b863_169["arg__781__892 1"]
	b863_170["a__779__893 u32.+"]
	b863_175["mv_t__810__898 |True|  [u32.!= [q]]"]
	b863_169 --> b863_170
	b863_170 --> b863_175
end
branch_861 --> block_863
subgraph branch_861["Branch 861"]
	br861_12["q u32.!="]

end
branch_838 --> branch_861
subgraph branch_838["Branch 838"]
	br838_163["p__886 u32.!="]

end
block_851 --> branch_838
subgraph block_851["Block 851"]
	direction TB
	b851_162["arg__795__885 0"]
	b851_163["p__886 u32.!="]
	b851_162 --> b851_163
end
branch_811 --> block_851
subgraph branch_811["Branch 811"]
	br811_18["s u32.!="]

end
branch_794 --> branch_811
subgraph block_864["Block 864"]
	direction TB
	b864_168["a__782__891 10"]
	b864_176["mv_f__811__899 |False|  [u32.!= [q]]"]
	b864_168 --> b864_176
end
branch_861 --> block_864
subgraph block_841["Block 841"]
	direction TB
	b841_174["mv_f__805__897 |False|  [u32.!= [p__886]]"]
end
phi_866 --> block_841
subgraph phi_866["Phi 866"]
	p866_167{"a__890 ϕ"}
end
block_867 --> phi_866
block_868 --> phi_866
subgraph block_867["Block 867"]
	direction TB
	b867_165["arg__786__888 2"]
	b867_166["a__784__889 u32.+"]
	b867_177["mv_t__812__900 |True|  [u32.!= [r]]"]
	b867_165 --> b867_166
	b867_166 --> b867_177
end
branch_865 --> block_867
subgraph branch_865["Branch 865"]
	br865_15["r u32.!="]

end
branch_838 --> branch_865
subgraph block_868["Block 868"]
	direction TB
	b868_164["a__787__887 20"]
	b868_178["mv_f__813__901 |False|  [u32.!= [r]]"]
	b868_164 --> b868_178
end
branch_865 --> block_868
subgraph block_814["Block 814"]
	direction TB
	b814_38["b__776 30"]
	b814_86["mv_f__809 |False|  [u32.!= [s]]"]
	b814_38 --> b814_86
end
branch_811 --> block_814
subgraph block_789["Block 789"]
	direction TB
	b789_63["arg__756 3"]
	b789_65["c__754 u32.+"]
	b789_76["mv_f__799 |False|  [u32.!= [s]]"]
	b789_63 --> b789_65
	b789_65 --> b789_76
end
phi_799 --> block_789
subgraph phi_799["Phi 799"]
	p799_140{"a__863 ϕ"}
end
block_800 --> phi_799
block_801 --> phi_799
subgraph block_800["Block 800"]
	direction TB
	b800_141["mv_t__804__864 |True|  [u32.!= [p__852]]"]
end
phi_816 --> block_800
subgraph phi_816["Phi 816"]
	p816_139{"a__862 ϕ"}
end
block_817 --> phi_816
block_818 --> phi_816
subgraph block_817["Block 817"]
	direction TB
	b817_137["arg__781__860 1"]
	b817_138["a__779__861 u32.+"]
	b817_143["mv_t__810__866 |True|  [u32.!= [q__854]]"]
	b817_137 --> b817_138
	b817_138 --> b817_143
end
branch_815 --> block_817
subgraph branch_815["Branch 815"]
	br815_131["q__854 u32.!="]

end
block_832 --> branch_815
subgraph block_832["Block 832"]
	direction TB
	b832_130["arg__793__853 0"]
	b832_131["q__854 u32.!="]
	b832_130 --> b832_131
end
branch_798 --> block_832
subgraph branch_798["Branch 798"]
	br798_129["p__852 u32.!="]

end
block_806 --> branch_798
subgraph block_806["Block 806"]
	direction TB
	b806_128["arg__795__851 0"]
	b806_129["p__852 u32.!="]
	b806_128 --> b806_129
end
branch_786 --> block_806
subgraph block_818["Block 818"]
	direction TB
	b818_136["a__782__859 10"]
	b818_144["mv_f__811__867 |False|  [u32.!= [q__854]]"]
	b818_136 --> b818_144
end
branch_815 --> block_818
subgraph block_801["Block 801"]
	direction TB
	b801_142["mv_f__805__865 |False|  [u32.!= [p__852]]"]
end
phi_820 --> block_801
subgraph phi_820["Phi 820"]
	p820_135{"a__858 ϕ"}
end
block_821 --> phi_820
block_822 --> phi_820
subgraph block_821["Block 821"]
	direction TB
	b821_133["arg__786__856 2"]
	b821_134["a__784__857 u32.+"]
	b821_145["mv_t__812__868 |True|  [u32.!= [r]]"]
	b821_133 --> b821_134
	b821_134 --> b821_145
end
branch_819 --> block_821
subgraph branch_819["Branch 819"]
	br819_15["r u32.!="]

end
branch_798 --> branch_819
subgraph block_822["Block 822"]
	direction TB
	b822_132["a__787__855 20"]
	b822_146["mv_f__813__869 |False|  [u32.!= [r]]"]
	b822_132 --> b822_146
end
branch_819 --> block_822
subgraph block_785["Block 785"]
	direction TB
	b785_74["mv_f__797 |False|  [u32.!= [r]]"]
end
phi_791 --> block_785
subgraph phi_791["Phi 791"]
	p791_61{"c ϕ"}
end
block_792 --> phi_791
block_793 --> phi_791
subgraph block_792["Block 792"]
	direction TB
	b792_58["arg__760 2"]
	b792_60["c__758 u32.+"]
	b792_77["mv_t__800 |True|  [u32.!= [p__815]]"]
	b792_58 --> b792_60
	b792_60 --> b792_77
end
phi_803 --> block_792
subgraph phi_803["Phi 803"]
	p803_115{"b__838 ϕ"}
end
block_804 --> phi_803
block_805 --> phi_803
subgraph block_804["Block 804"]
	direction TB
	b804_116["mv_t__802__839 |True|  [u32.!= [q__817]]"]
end
phi_824 --> block_804
subgraph phi_824["Phi 824"]
	p824_114{"b__837 ϕ"}
end
block_825 --> phi_824
block_826 --> phi_824
subgraph block_825["Block 825"]
	direction TB
	b825_112["arg__768__835 1"]
	b825_113["b__766__836 u32.+"]
	b825_120["mv_t__806__843 |True|  [u32.!= [r]]"]
	b825_112 --> b825_113
	b825_113 --> b825_120
end
phi_843 --> block_825
subgraph phi_843["Phi 843"]
	p843_105{"a__828 ϕ"}
end
block_844 --> phi_843
block_845 --> phi_843
subgraph block_844["Block 844"]
	direction TB
	b844_118["mv_t__804__841 |True|  [u32.!= [p__815]]"]
end
phi_870 --> block_844
subgraph phi_870["Phi 870"]
	p870_104{"a__827 ϕ"}
end
block_871 --> phi_870
block_872 --> phi_870
subgraph block_871["Block 871"]
	direction TB
	b871_102["arg__781__825 1"]
	b871_103["a__779__826 u32.+"]
	b871_124["mv_t__810__847 |True|  [u32.!= [q__817]]"]
	b871_102 --> b871_103
	b871_103 --> b871_124
end
branch_869 --> block_871
subgraph branch_869["Branch 869"]
	br869_94["q__817 u32.!="]

end
branch_842 --> branch_869
subgraph branch_842["Branch 842"]
	br842_92["p__815 u32.!="]

end
branch_823 --> branch_842
subgraph branch_823["Branch 823"]
	br823_15["r u32.!="]

end
branch_802 --> branch_823
subgraph branch_802["Branch 802"]
	br802_94["q__817 u32.!="]

end
block_886 --> branch_802
subgraph block_886["Block 886"]
	direction TB
	b886_93["arg__793__816 0"]
	b886_94["q__817 u32.!="]
	b886_93 --> b886_94
end
branch_790 --> block_886
subgraph branch_790["Branch 790"]
	br790_92["p__815 u32.!="]

end
block_852 --> branch_790
subgraph block_852["Block 852"]
	direction TB
	b852_91["arg__795__814 0"]
	b852_92["p__815 u32.!="]
	b852_91 --> b852_92
end
branch_782 --> block_852
subgraph block_872["Block 872"]
	direction TB
	b872_101["a__782__824 10"]
	b872_125["mv_f__811__848 |False|  [u32.!= [q__817]]"]
	b872_101 --> b872_125
end
branch_869 --> block_872
subgraph block_845["Block 845"]
	direction TB
	b845_119["mv_f__805__842 |False|  [u32.!= [p__815]]"]
end
phi_874 --> block_845
subgraph phi_874["Phi 874"]
	p874_100{"a__823 ϕ"}
end
block_875 --> phi_874
block_876 --> phi_874
subgraph block_875["Block 875"]
	direction TB
	b875_98["arg__786__821 2"]
	b875_99["a__784__822 u32.+"]
	b875_126["mv_t__812__849 |True|  [u32.!= [r]]"]
	b875_98 --> b875_99
	b875_99 --> b875_126
end
branch_873 --> block_875
subgraph branch_873["Branch 873"]
	br873_15["r u32.!="]

end
branch_842 --> branch_873
subgraph block_876["Block 876"]
	direction TB
	b876_97["a__787__820 20"]
	b876_127["mv_f__813__850 |False|  [u32.!= [r]]"]
	b876_97 --> b876_127
end
branch_873 --> block_876
subgraph block_826["Block 826"]
	direction TB
	b826_110["arg__771__833 3"]
	b826_111["b__769__834 u32.+"]
	b826_121["mv_f__807__844 |False|  [u32.!= [r]]"]
	b826_110 --> b826_111
	b826_111 --> b826_121
end
branch_823 --> block_826
subgraph block_805["Block 805"]
	direction TB
	b805_117["mv_f__803__840 |False|  [u32.!= [q__817]]"]
end
phi_828 --> block_805
subgraph phi_828["Phi 828"]
	p828_109{"b__832 ϕ"}
end
block_829 --> phi_828
block_830 --> phi_828
subgraph block_829["Block 829"]
	direction TB
	b829_107["arg__775__830 2"]
	b829_108["b__773__831 u32.+"]
	b829_122["mv_t__808__845 |True|  [u32.!= [s__819]]"]
	b829_107 --> b829_108
	b829_108 --> b829_122
end
phi_847 --> block_829
subgraph phi_847["Phi 847"]
	p847_155{"a__828__878 ϕ"}
end
block_848 --> phi_847
block_849 --> phi_847
subgraph block_848["Block 848"]
	direction TB
	b848_156["mv_t__804__841__879 |True|  [u32.!= [p__815]]"]
end
phi_878 --> block_848
subgraph phi_878["Phi 878"]
	p878_154{"a__827__877 ϕ"}
end
block_879 --> phi_878
block_880 --> phi_878
subgraph block_879["Block 879"]
	direction TB
	b879_152["arg__781__825__875 1"]
	b879_153["a__779__826__876 u32.+"]
	b879_158["mv_t__810__847__881 |True|  [u32.!= [q__817]]"]
	b879_152 --> b879_153
	b879_153 --> b879_158
end
branch_877 --> block_879
subgraph branch_877["Branch 877"]
	br877_94["q__817 u32.!="]

end
branch_846 --> branch_877
subgraph branch_846["Branch 846"]
	br846_92["p__815 u32.!="]

end
branch_827 --> branch_846
subgraph branch_827["Branch 827"]
	br827_96["s__819 u32.!="]

end
block_833 --> branch_827
subgraph block_833["Block 833"]
	direction TB
	b833_95["arg__789__818 0"]
	b833_96["s__819 u32.!="]
	b833_95 --> b833_96
end
branch_802 --> block_833
subgraph block_880["Block 880"]
	direction TB
	b880_151["a__782__824__874 10"]
	b880_159["mv_f__811__848__882 |False|  [u32.!= [q__817]]"]
	b880_151 --> b880_159
end
branch_877 --> block_880
subgraph block_849["Block 849"]
	direction TB
	b849_157["mv_f__805__842__880 |False|  [u32.!= [p__815]]"]
end
phi_882 --> block_849
subgraph phi_882["Phi 882"]
	p882_150{"a__823__873 ϕ"}
end
block_883 --> phi_882
block_884 --> phi_882
subgraph block_883["Block 883"]
	direction TB
	b883_148["arg__786__821__871 2"]
	b883_149["a__784__822__872 u32.+"]
	b883_160["mv_t__812__849__883 |True|  [u32.!= [r]]"]
	b883_148 --> b883_149
	b883_149 --> b883_160
end
branch_881 --> block_883
subgraph branch_881["Branch 881"]
	br881_15["r u32.!="]

end
branch_846 --> branch_881
subgraph block_884["Block 884"]
	direction TB
	b884_147["a__787__820__870 20"]
	b884_161["mv_f__813__850__884 |False|  [u32.!= [r]]"]
	b884_147 --> b884_161
end
branch_881 --> block_884
subgraph block_830["Block 830"]
	direction TB
	b830_106["b__776__829 30"]
	b830_123["mv_f__809__846 |False|  [u32.!= [s__819]]"]
	b830_106 --> b830_123
end
branch_827 --> block_830
subgraph block_793["Block 793"]
	direction TB
	b793_55["arg__763 4"]
	b793_57["c__761 u32.+"]
	b793_78["mv_f__801 |False|  [u32.!= [p__815]]"]
	b793_55 --> b793_57
	b793_57 --> b793_78
end
branch_790 --> block_793

</pre>`;
window.traces["UNTANGLE_BRAID_LIMIT_STRESS"]["scheduler_ssad"] = ''
window.traces["UNTANGLE_BRAID_LIMIT_STRESS"]["scheduler_ssad"] += `<pre class=''>def c1 = pop_u32();
def c2 = pop_u32();
def c3 = pop_u32();
def c4 = pop_u32();
def seed = pop_u32();
def arg__791 : u32 = 0;
def r = u32.!=(c3, arg__791);
if (r) {
	def arg__789 : u32 = 0;
	def s = u32.!=(c4, arg__789);
	if (s) {
		def arg__793 : u32 = 0;
		def q = u32.!=(c2, arg__793);
		if (q) {
			if (r) {
				def arg__795 : u32 = 0;
				def p = u32.!=(c1, arg__795);
				if (p) {
					if (q) {
						def arg__781 : u32 = 1;
						def a__779 = u32.+(seed, arg__781);
					} else {
						def a__782 : u32 = 10;
					}
// phis: a <- a__779; a <- a__782; 
				} else {
					if (r) {
						def arg__786 : u32 = 2;
						def a__784 = u32.+(seed, arg__786);
					} else {
						def a__787 : u32 = 20;
					}
// phis: a <- a__784; a <- a__787; 
				}
// phis: a <- a; a <- a; 
				def arg__768 : u32 = 1;
				def b__766 = u32.+(a, arg__768);
			} else {
				def arg__771 : u32 = 3;
				def b__769 = u32.+(seed, arg__771);
			}
// phis: b <- b__766; b <- b__769; 
		} else {
			if (s) {
				def arg__795__885 : u32 = 0;
				def arg__795 = (arg__795__885);
				def p__886 = u32.!=(c1, arg__795__885);
				def p = (p__886);
				if (p__886) {
					if (q) {
						def arg__781__892 : u32 = 1;
						def arg__781 = (arg__781__892);
						def a__779__893 = u32.+(seed, arg__781__892);
						def a__779 = (a__779__893);
					} else {
						def a__782__891 : u32 = 10;
						def a__782 = (a__782__891);
					}
// phis: a__894 <- a__779__893; a__894 <- a__782__891; 
				} else {
					if (r) {
						def arg__786__888 : u32 = 2;
						def arg__786 = (arg__786__888);
						def a__784__889 = u32.+(seed, arg__786__888);
						def a__784 = (a__784__889);
					} else {
						def a__787__887 : u32 = 20;
						def a__787 = (a__787__887);
					}
// phis: a__890 <- a__784__889; a__890 <- a__787__887; 
				}
// phis: a__895 <- a__894; a__895 <- a__890; 
				def arg__775 : u32 = 2;
				def b__773 = u32.+(a__895, arg__775);
			} else {
				def b__776 : u32 = 30;
			}
// phis: b <- b__773; b <- b__776; 
		}
// phis: b <- b; b <- b; 
		def arg__753 : u32 = 1;
		def c__751 = u32.+(b, arg__753);
	} else {
		def arg__795__851 : u32 = 0;
		def p__852 = u32.!=(c1, arg__795__851);
		if (p__852) {
			def arg__793__853 : u32 = 0;
			def arg__793 = (arg__793__853);
			def q__854 = u32.!=(c2, arg__793__853);
			def q = (q__854);
			if (q__854) {
				def arg__781__860 : u32 = 1;
				def a__779__861 = u32.+(seed, arg__781__860);
			} else {
				def a__782__859 : u32 = 10;
			}
// phis: a__862 <- a__779__861; a__862 <- a__782__859; 
		} else {
			if (r) {
				def arg__786__856 : u32 = 2;
				def a__784__857 = u32.+(seed, arg__786__856);
			} else {
				def a__787__855 : u32 = 20;
			}
// phis: a__858 <- a__784__857; a__858 <- a__787__855; 
		}
// phis: a__863 <- a__862; a__863 <- a__858; 
		def arg__756 : u32 = 3;
		def c__754 = u32.+(a__863, arg__756);
	}
// phis: c <- c__751; c <- c__754; 
} else {
	def arg__795__814 : u32 = 0;
	def p__815 = u32.!=(c1, arg__795__814);
	if (p__815) {
		def arg__793__816 : u32 = 0;
		def q__817 = u32.!=(c2, arg__793__816);
		if (q__817) {
			if (r) {
				if (p__815) {
					if (q__817) {
						def arg__781__825 : u32 = 1;
						def a__779__826 = u32.+(seed, arg__781__825);
					} else {
						def a__782__824 : u32 = 10;
					}
// phis: a__827 <- a__779__826; a__827 <- a__782__824; 
				} else {
					if (r) {
						def arg__786__821 : u32 = 2;
						def a__784__822 = u32.+(seed, arg__786__821);
					} else {
						def a__787__820 : u32 = 20;
					}
// phis: a__823 <- a__784__822; a__823 <- a__787__820; 
				}
// phis: a__828 <- a__827; a__828 <- a__823; 
				def arg__768__835 : u32 = 1;
				def arg__768 = (arg__768__835);
				def b__766__836 = u32.+(a__828, arg__768__835);
				def b__766 = (b__766__836);
			} else {
				def arg__771__833 : u32 = 3;
				def arg__771 = (arg__771__833);
				def b__769__834 = u32.+(seed, arg__771__833);
				def b__769 = (b__769__834);
			}
// phis: b__837 <- b__766__836; b__837 <- b__769__834; 
		} else {
			def arg__789__818 : u32 = 0;
			def arg__789 = (arg__789__818);
			def s__819 = u32.!=(c4, arg__789__818);
			def s = (s__819);
			if (s__819) {
				if (p__815) {
					if (q__817) {
						def arg__781__825__875 : u32 = 1;
						def a__779__826__876 = u32.+(seed, arg__781__825__875);
					} else {
						def a__782__824__874 : u32 = 10;
					}
// phis: a__827__877 <- a__779__826__876; a__827__877 <- a__782__824__874; 
				} else {
					if (r) {
						def arg__786__821__871 : u32 = 2;
						def a__784__822__872 = u32.+(seed, arg__786__821__871);
					} else {
						def a__787__820__870 : u32 = 20;
					}
// phis: a__823__873 <- a__784__822__872; a__823__873 <- a__787__820__870; 
				}
// phis: a__828__878 <- a__827__877; a__828__878 <- a__823__873; 
				def arg__775__830 : u32 = 2;
				def arg__775 = (arg__775__830);
				def b__773__831 = u32.+(a__828__878, arg__775__830);
				def b__773 = (b__773__831);
			} else {
				def b__776__829 : u32 = 30;
				def b__776 = (b__776__829);
			}
// phis: b__832 <- b__773__831; b__832 <- b__776__829; 
		}
// phis: b__838 <- b__837; b__838 <- b__832; 
		def arg__760 : u32 = 2;
		def c__758 = u32.+(b__838, arg__760);
	} else {
		def arg__763 : u32 = 4;
		def c__761 = u32.+(seed, arg__763);
	}
// phis: c <- c__758; c <- c__761; 
}
// phis: c <- c; c <- c; 
def eff__747 = push_u32(c);
</pre>`;
window.traces["UNTANGLE_BRAID_LIMIT_STRESS"]["scheduler_ssad_pretty"] = ''
window.traces["UNTANGLE_BRAID_LIMIT_STRESS"]["scheduler_ssad_pretty"] += `<pre class=''>def c1 = pop_u32();
def c2 = pop_u32();
def c3 = pop_u32();
def c4 = pop_u32();
def seed = pop_u32();
var c: u32;
if (u32.!=(c3, 0)) {
	if (u32.!=(c4, 0)) {
		var b: u32;
		if (u32.!=(c2, 0)) {
			if (u32.!=(c3, 0)) {
				var a: u32;
				if (u32.!=(c1, 0)) {
					if (u32.!=(c2, 0)) {
						a = u32.+(seed, 1);
					} else {
						a = 10;
					}
				} else {
					if (u32.!=(c3, 0)) {
						a = u32.+(seed, 2);
					} else {
						a = 20;
					}
				}
				b = u32.+(a, 1);
			} else {
				b = u32.+(seed, 3);
			}
		} else {
			if (u32.!=(c4, 0)) {
				var a__895: u32;
				if (u32.!=(c1, 0)) {
					if (u32.!=(c2, 0)) {
						a__895 = u32.+(seed, 1);
						var a = (a__779__893);
					} else {
						a__895 = 10;
						def a1 = (a__782__891);
					}
				} else {
					if (u32.!=(c3, 0)) {
						a__895 = u32.+(seed, 2);
						def a2 = (a__784__889);
					} else {
						a__895 = 20;
						def a3 = (a__787__887);
					}
				}
				b = u32.+(a__895, 2);
			} else {
				b = 30;
			}
		}
		c = u32.+(b, 1);
	} else {
		var a__863: u32;
		if (u32.!=(c1, 0)) {
			if (u32.!=(c2, 0)) {
				a__863 = u32.+(seed, 1);
			} else {
				a__863 = 10;
			}
		} else {
			if (u32.!=(c3, 0)) {
				a__863 = u32.+(seed, 2);
			} else {
				a__863 = 20;
			}
		}
		c = u32.+(a__863, 3);
	}
} else {
	if (u32.!=(c1, 0)) {
		var b__838: u32;
		if (u32.!=(c2, 0)) {
			if (u32.!=(c3, 0)) {
				var a__828: u32;
				if (u32.!=(c1, 0)) {
					if (u32.!=(c2, 0)) {
						a__828 = u32.+(seed, 1);
					} else {
						a__828 = 10;
					}
				} else {
					if (u32.!=(c3, 0)) {
						a__828 = u32.+(seed, 2);
					} else {
						a__828 = 20;
					}
				}
				b__838 = u32.+(a__828, 1);
				var b = (b__766__836);
			} else {
				b__838 = u32.+(seed, 3);
				def b1 = (b__769__834);
			}
		} else {
			if (u32.!=(c4, 0)) {
				var a__828__878: u32;
				if (u32.!=(c1, 0)) {
					if (u32.!=(c2, 0)) {
						a__828__878 = u32.+(seed, 1);
					} else {
						a__828__878 = 10;
					}
				} else {
					if (u32.!=(c3, 0)) {
						a__828__878 = u32.+(seed, 2);
					} else {
						a__828__878 = 20;
					}
				}
				b__838 = u32.+(a__828__878, 2);
				def b2 = (b__773__831);
			} else {
				b__838 = 30;
				def b3 = (b__776__829);
			}
		}
		c = u32.+(b__838, 2);
	} else {
		c = u32.+(seed, 4);
	}
}
push_u32(c);
</pre>`;
window.traces["UNTANGLE_BRAID_LIMIT_STRESS"]["unLEM"] = ''
window.traces["UNTANGLE_BRAID_LIMIT_STRESS"]["unLEM"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	72 -. Stack .-> 1
	72["eff__747 push_u32"]
	70 --> 72
	19 -. Stack .-> 72
	19["seed pop_u32"]
	6 -. Stack .-> 19
	6["c4 pop_u32"]
	5 -. Stack .-> 6
	5["c3 pop_u32"]
	4 -. Stack .-> 5
	4["c2 pop_u32"]
	3 -. Stack .-> 4
	3["c1 pop_u32"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	70{"c ϕ"}
	75 --> 70
	77 --> 70
	76 --> 70
	76{"innerPhi__905 ϕ"}
	73 --> 76
	69 --> 76
	61 --> 76
	61{"c ϕ"}
	85 --> 61
	87 --> 61
	86 --> 61
	86{"innerPhi__915 ϕ"}
	83 --> 86
	60 --> 86
	57 --> 86
	57["c__761 u32.+"]
	19 --> 57
	55 --> 57
	55["arg__763 4"]
	60["c__758 u32.+"]
	51 --> 60
	58 --> 60
	58["arg__760 2"]
	51{"b ϕ"}
	90 --> 51
	92 --> 51
	91 --> 51
	91{"innerPhi__920 ϕ"}
	88 --> 91
	50 --> 91
	42 --> 91
	42{"b ϕ"}
	80 --> 42
	98 --> 42
	97 --> 42
	97{"innerPhi__926 ϕ"}
	78 --> 97
	41 --> 97
	38 --> 97
	38["b__776 30"]
	41["b__773 u32.+"]
	34 --> 41
	39 --> 41
	39["arg__775 2"]
	34{"a ϕ"}
	85 --> 34
	94 --> 34
	93 --> 34
	93{"innerPhi__922 ϕ"}
	83 --> 93
	33 --> 93
	27 --> 93
	27{"a ϕ"}
	75 --> 27
	102 --> 27
	101 --> 27
	101{"innerPhi__930 ϕ"}
	73 --> 101
	26 --> 101
	23 --> 101
	23["a__787 20"]
	26["a__784 u32.+"]
	19 --> 26
	24 --> 26
	24["arg__786 2"]
	73["mt__902 U32_maybeTrue"]
	15 --> 73
	15["r u32.!="]
	5 --> 15
	13 --> 15
	13["arg__791 0"]
	102["merge__931 merge"]
	26 --> 102
	23 --> 102
	75["mb__904 bool.&&"]
	73 --> 75
	74 --> 75
	74["mf__903 U32_maybeFalse"]
	15 --> 74
	33{"a ϕ"}
	90 --> 33
	100 --> 33
	99 --> 33
	99{"innerPhi__928 ϕ"}
	88 --> 99
	32 --> 99
	29 --> 99
	29["a__782 10"]
	32["a__779 u32.+"]
	19 --> 32
	30 --> 32
	30["arg__781 1"]
	88["mt__917 U32_maybeTrue"]
	12 --> 88
	12["q u32.!="]
	4 --> 12
	10 --> 12
	10["arg__793 0"]
	100["merge__929 merge"]
	32 --> 100
	29 --> 100
	90["mb__919 bool.&&"]
	88 --> 90
	89 --> 90
	89["mf__918 U32_maybeFalse"]
	12 --> 89
	83["mt__912 U32_maybeTrue"]
	9 --> 83
	9["p u32.!="]
	3 --> 9
	7 --> 9
	7["arg__795 0"]
	94["merge__923 merge"]
	33 --> 94
	27 --> 94
	85["mb__914 bool.&&"]
	83 --> 85
	84 --> 85
	84["mf__913 U32_maybeFalse"]
	9 --> 84
	78["mt__907 U32_maybeTrue"]
	18 --> 78
	18["s u32.!="]
	6 --> 18
	16 --> 18
	16["arg__789 0"]
	98["merge__927 merge"]
	41 --> 98
	38 --> 98
	80["mb__909 bool.&&"]
	78 --> 80
	79 --> 80
	79["mf__908 U32_maybeFalse"]
	18 --> 79
	50{"b ϕ"}
	75 --> 50
	96 --> 50
	95 --> 50
	95{"innerPhi__924 ϕ"}
	73 --> 95
	49 --> 95
	46 --> 95
	46["b__769 u32.+"]
	19 --> 46
	44 --> 46
	44["arg__771 3"]
	49["b__766 u32.+"]
	34 --> 49
	47 --> 49
	47["arg__768 1"]
	96["merge__925 merge"]
	49 --> 96
	46 --> 96
	92["merge__921 merge"]
	50 --> 92
	42 --> 92
	87["merge__916 merge"]
	60 --> 87
	57 --> 87
	69{"c ϕ"}
	80 --> 69
	82 --> 69
	81 --> 69
	81{"innerPhi__910 ϕ"}
	78 --> 81
	68 --> 81
	65 --> 81
	65["c__754 u32.+"]
	34 --> 65
	63 --> 65
	63["arg__756 3"]
	68["c__751 u32.+"]
	51 --> 68
	66 --> 68
	66["arg__753 1"]
	82["merge__911 merge"]
	68 --> 82
	65 --> 82
	77["merge__906 merge"]
	69 --> 77
	61 --> 77
</pre>`;
window.traces["UNTANGLE_BRAID_LIMIT_STRESS_ul"] = {}
window.traces["UNTANGLE_BRAID_LIMIT_STRESS_ul"]["scheduler_start"] = ''
window.traces["UNTANGLE_BRAID_LIMIT_STRESS_ul"]["scheduler_start"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	72 -. Stack .-> 1
	72["eff__747 push_u32"]
	70 --> 72
	19 -. Stack .-> 72
	19["seed pop_u32"]
	6 -. Stack .-> 19
	6["c4 pop_u32"]
	5 -. Stack .-> 6
	5["c3 pop_u32"]
	4 -. Stack .-> 5
	4["c2 pop_u32"]
	3 -. Stack .-> 4
	3["c1 pop_u32"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	70{"c ϕ"}
	75 --> 70
	103 --> 70
	104 --> 70
	104["mv_f__933 |False|  [bool.&& [mb__904]]"]
	75 --> 104
	76 --> 104
	76{"innerPhi__905 ϕ"}
	73 --> 76
	105 --> 76
	106 --> 76
	106["mv_f__935 |False|  [U32_maybeTrue [mt__902]]"]
	73 --> 106
	61 --> 106
	61{"c ϕ"}
	85 --> 61
	109 --> 61
	110 --> 61
	110["mv_f__939 |False|  [bool.&& [mb__914]]"]
	85 --> 110
	86 --> 110
	86{"innerPhi__915 ϕ"}
	83 --> 86
	113 --> 86
	114 --> 86
	114["mv_f__943 |False|  [U32_maybeTrue [mt__912]]"]
	83 --> 114
	57 --> 114
	57["c__761 u32.+"]
	19 --> 57
	55 --> 57
	55["arg__763 4"]
	83["mt__912 U32_maybeTrue"]
	9 --> 83
	9["p u32.!="]
	3 --> 9
	7 --> 9
	7["arg__795 0"]
	113["mv_t__942 |True|  [U32_maybeTrue [mt__912]]"]
	83 --> 113
	60 --> 113
	60["c__758 u32.+"]
	51 --> 60
	58 --> 60
	58["arg__760 2"]
	51{"b ϕ"}
	90 --> 51
	115 --> 51
	116 --> 51
	116["mv_f__945 |False|  [bool.&& [mb__919]]"]
	90 --> 116
	91 --> 116
	91{"innerPhi__920 ϕ"}
	88 --> 91
	119 --> 91
	120 --> 91
	120["mv_f__949 |False|  [U32_maybeTrue [mt__917]]"]
	88 --> 120
	42 --> 120
	42{"b ϕ"}
	80 --> 42
	125 --> 42
	126 --> 42
	126["mv_f__955 |False|  [bool.&& [mb__909]]"]
	80 --> 126
	97 --> 126
	97{"innerPhi__926 ϕ"}
	78 --> 97
	133 --> 97
	134 --> 97
	134["mv_f__963 |False|  [U32_maybeTrue [mt__907]]"]
	78 --> 134
	38 --> 134
	38["b__776 30"]
	78["mt__907 U32_maybeTrue"]
	18 --> 78
	18["s u32.!="]
	6 --> 18
	16 --> 18
	16["arg__789 0"]
	133["mv_t__962 |True|  [U32_maybeTrue [mt__907]]"]
	78 --> 133
	41 --> 133
	41["b__773 u32.+"]
	34 --> 41
	39 --> 41
	39["arg__775 2"]
	34{"a ϕ"}
	85 --> 34
	117 --> 34
	118 --> 34
	118["mv_f__947 |False|  [bool.&& [mb__914]]"]
	85 --> 118
	93 --> 118
	93{"innerPhi__922 ϕ"}
	83 --> 93
	121 --> 93
	122 --> 93
	122["mv_f__951 |False|  [U32_maybeTrue [mt__912]]"]
	83 --> 122
	27 --> 122
	27{"a ϕ"}
	75 --> 27
	129 --> 27
	130 --> 27
	130["mv_f__959 |False|  [bool.&& [mb__904]]"]
	75 --> 130
	101 --> 130
	101{"innerPhi__930 ϕ"}
	73 --> 101
	137 --> 101
	138 --> 101
	138["mv_f__967 |False|  [U32_maybeTrue [mt__902]]"]
	73 --> 138
	23 --> 138
	23["a__787 20"]
	73["mt__902 U32_maybeTrue"]
	15 --> 73
	15["r u32.!="]
	5 --> 15
	13 --> 15
	13["arg__791 0"]
	137["mv_t__966 |True|  [U32_maybeTrue [mt__902]]"]
	73 --> 137
	26 --> 137
	26["a__784 u32.+"]
	19 --> 26
	24 --> 26
	24["arg__786 2"]
	75["mb__904 bool.&&"]
	73 --> 75
	74 --> 75
	74["mf__903 U32_maybeFalse"]
	15 --> 74
	129["mv_t__958 |True|  [bool.&& [mb__904]]"]
	75 --> 129
	102 --> 129
	102["merge__931 merge"]
	26 --> 102
	23 --> 102
	121["mv_t__950 |True|  [U32_maybeTrue [mt__912]]"]
	83 --> 121
	33 --> 121
	33{"a ϕ"}
	90 --> 33
	127 --> 33
	128 --> 33
	128["mv_f__957 |False|  [bool.&& [mb__919]]"]
	90 --> 128
	99 --> 128
	99{"innerPhi__928 ϕ"}
	88 --> 99
	135 --> 99
	136 --> 99
	136["mv_f__965 |False|  [U32_maybeTrue [mt__917]]"]
	88 --> 136
	29 --> 136
	29["a__782 10"]
	88["mt__917 U32_maybeTrue"]
	12 --> 88
	12["q u32.!="]
	4 --> 12
	10 --> 12
	10["arg__793 0"]
	135["mv_t__964 |True|  [U32_maybeTrue [mt__917]]"]
	88 --> 135
	32 --> 135
	32["a__779 u32.+"]
	19 --> 32
	30 --> 32
	30["arg__781 1"]
	90["mb__919 bool.&&"]
	88 --> 90
	89 --> 90
	89["mf__918 U32_maybeFalse"]
	12 --> 89
	127["mv_t__956 |True|  [bool.&& [mb__919]]"]
	90 --> 127
	100 --> 127
	100["merge__929 merge"]
	32 --> 100
	29 --> 100
	85["mb__914 bool.&&"]
	83 --> 85
	84 --> 85
	84["mf__913 U32_maybeFalse"]
	9 --> 84
	117["mv_t__946 |True|  [bool.&& [mb__914]]"]
	85 --> 117
	94 --> 117
	94["merge__923 merge"]
	33 --> 94
	27 --> 94
	80["mb__909 bool.&&"]
	78 --> 80
	79 --> 80
	79["mf__908 U32_maybeFalse"]
	18 --> 79
	125["mv_t__954 |True|  [bool.&& [mb__909]]"]
	80 --> 125
	98 --> 125
	98["merge__927 merge"]
	41 --> 98
	38 --> 98
	119["mv_t__948 |True|  [U32_maybeTrue [mt__917]]"]
	88 --> 119
	50 --> 119
	50{"b ϕ"}
	75 --> 50
	123 --> 50
	124 --> 50
	124["mv_f__953 |False|  [bool.&& [mb__904]]"]
	75 --> 124
	95 --> 124
	95{"innerPhi__924 ϕ"}
	73 --> 95
	131 --> 95
	132 --> 95
	132["mv_f__961 |False|  [U32_maybeTrue [mt__902]]"]
	73 --> 132
	46 --> 132
	46["b__769 u32.+"]
	19 --> 46
	44 --> 46
	44["arg__771 3"]
	131["mv_t__960 |True|  [U32_maybeTrue [mt__902]]"]
	73 --> 131
	49 --> 131
	49["b__766 u32.+"]
	34 --> 49
	47 --> 49
	47["arg__768 1"]
	123["mv_t__952 |True|  [bool.&& [mb__904]]"]
	75 --> 123
	96 --> 123
	96["merge__925 merge"]
	49 --> 96
	46 --> 96
	115["mv_t__944 |True|  [bool.&& [mb__919]]"]
	90 --> 115
	92 --> 115
	92["merge__921 merge"]
	50 --> 92
	42 --> 92
	109["mv_t__938 |True|  [bool.&& [mb__914]]"]
	85 --> 109
	87 --> 109
	87["merge__916 merge"]
	60 --> 87
	57 --> 87
	105["mv_t__934 |True|  [U32_maybeTrue [mt__902]]"]
	73 --> 105
	69 --> 105
	69{"c ϕ"}
	80 --> 69
	107 --> 69
	108 --> 69
	108["mv_f__937 |False|  [bool.&& [mb__909]]"]
	80 --> 108
	81 --> 108
	81{"innerPhi__910 ϕ"}
	78 --> 81
	111 --> 81
	112 --> 81
	112["mv_f__941 |False|  [U32_maybeTrue [mt__907]]"]
	78 --> 112
	65 --> 112
	65["c__754 u32.+"]
	34 --> 65
	63 --> 65
	63["arg__756 3"]
	111["mv_t__940 |True|  [U32_maybeTrue [mt__907]]"]
	78 --> 111
	68 --> 111
	68["c__751 u32.+"]
	51 --> 68
	66 --> 68
	66["arg__753 1"]
	107["mv_t__936 |True|  [bool.&& [mb__909]]"]
	80 --> 107
	82 --> 107
	82["merge__911 merge"]
	68 --> 82
	65 --> 82
	103["mv_t__932 |True|  [bool.&& [mb__904]]"]
	75 --> 103
	77 --> 103
	77["merge__906 merge"]
	69 --> 77
	61 --> 77
</pre>`;
window.traces["UNTANGLE_BRAID_LIMIT_STRESS_ul"]["untangled"] = ''
window.traces["UNTANGLE_BRAID_LIMIT_STRESS_ul"]["untangled"] += `<pre class='graph'>---
config:
  layout: elk
---
graph TD
	1[\\"Finish"/]
	0 -. Codeptr Trap Locals Globals Tables Memory Extra .-> 1
	72 -. Stack .-> 1
	72["eff__747 push_u32"]
	70 --> 72
	19 -. Stack .-> 72
	19["seed pop_u32"]
	6 -. Stack .-> 19
	6["c4 pop_u32"]
	5 -. Stack .-> 6
	5["c3 pop_u32"]
	4 -. Stack .-> 5
	4["c2 pop_u32"]
	3 -. Stack .-> 4
	3["c1 pop_u32"]
	0 -. Stack .-> 3
	0[/"Start"\\]
	70{"c ϕ"}
	75 --> 70
	103 --> 70
	104 --> 70
	104["mv_f__933 |False|  [bool.&& [mb__904]]"]
	75 --> 104
	76 --> 104
	76{"innerPhi__905 ϕ"}
	73 --> 76
	105 --> 76
	106 --> 76
	106["mv_f__935 |False|  [U32_maybeTrue [mt__902]]"]
	73 --> 106
	168 --> 106
	168{"c__997 ϕ"}
	269 --> 168
	201 --> 168
	202 --> 168
	202["mv_f__939__1031 |False|  [bool.&& [mb__914__1010__1098]]"]
	269 --> 202
	182 --> 202
	182{"innerPhi__915__1011 ϕ"}
	267 --> 182
	205 --> 182
	206 --> 182
	206["mv_f__943__1035 |False|  [U32_maybeTrue [mt__912__1008__1096]]"]
	267 --> 206
	165 --> 206
	165["c__761__994 u32.+"]
	19 --> 165
	164 --> 165
	164["arg__763__993 4"]
	267["mt__912__1008__1096 U32_maybeTrue"]
	240 --> 267
	240["p__969__1069 u32.!="]
	3 --> 240
	239 --> 240
	239["arg__795__968__1068 0"]
	205["mv_t__942__1034 |True|  [U32_maybeTrue [mt__912__1008__1096]]"]
	267 --> 205
	167 --> 205
	167["c__758__996 u32.+"]
	263 --> 167
	166 --> 167
	166["arg__760__995 2"]
	263{"b__992__1092 ϕ"}
	272 --> 263
	285 --> 263
	286 --> 263
	286["mv_f__945__1037__1115 |False|  [bool.&& [mb__919__1015__1101]]"]
	272 --> 286
	273 --> 286
	273{"innerPhi__920__1016__1102 ϕ"}
	270 --> 273
	289 --> 273
	290 --> 273
	290["mv_f__949__1041__1119 |False|  [U32_maybeTrue [mt__917__1013__1099]]"]
	270 --> 290
	257 --> 290
	257{"b__986__1086 ϕ"}
	266 --> 257
	295 --> 257
	296 --> 257
	296["mv_f__955__1047__1125 |False|  [bool.&& [mb__909__1005__1095]]"]
	266 --> 296
	279 --> 296
	279{"innerPhi__926__1022__1108 ϕ"}
	264 --> 279
	303 --> 279
	304 --> 279
	304["mv_f__963__1055__1133 |False|  [U32_maybeTrue [mt__907__1003__1093]]"]
	264 --> 304
	254 --> 304
	254["b__776__983__1083 30"]
	264["mt__907__1003__1093 U32_maybeTrue"]
	244 --> 264
	244["s__973__1073 u32.!="]
	6 --> 244
	243 --> 244
	243["arg__789__972__1072 0"]
	303["mv_t__962__1054__1132 |True|  [U32_maybeTrue [mt__907__1003__1093]]"]
	264 --> 303
	256 --> 303
	256["b__773__985__1085 u32.+"]
	253 --> 256
	255 --> 256
	255["arg__775__984__1084 2"]
	253{"a__982__1082 ϕ"}
	269 --> 253
	287 --> 253
	288 --> 253
	288["mv_f__947__1039__1117 |False|  [bool.&& [mb__914__1010__1098]]"]
	269 --> 288
	275 --> 288
	275{"innerPhi__922__1018__1104 ϕ"}
	267 --> 275
	291 --> 275
	292 --> 275
	292["mv_f__951__1043__1121 |False|  [U32_maybeTrue [mt__912__1008__1096]]"]
	267 --> 292
	248 --> 292
	248{"a__977__1077 ϕ"}
	75 --> 248
	299 --> 248
	300 --> 248
	300["mv_f__959__1051__1129 |False|  [bool.&& [mb__904]]"]
	75 --> 300
	283 --> 300
	283{"innerPhi__930__1026__1112 ϕ"}
	73 --> 283
	307 --> 283
	308 --> 283
	308["mv_f__967__1059__1137 |False|  [U32_maybeTrue [mt__902]]"]
	73 --> 308
	245 --> 308
	245["a__787__974__1074 20"]
	73["mt__902 U32_maybeTrue"]
	15 --> 73
	15["r u32.!="]
	5 --> 15
	13 --> 15
	13["arg__791 0"]
	307["mv_t__966__1058__1136 |True|  [U32_maybeTrue [mt__902]]"]
	73 --> 307
	247 --> 307
	247["a__784__976__1076 u32.+"]
	19 --> 247
	246 --> 247
	246["arg__786__975__1075 2"]
	75["mb__904 bool.&&"]
	73 --> 75
	74 --> 75
	74["mf__903 U32_maybeFalse"]
	15 --> 74
	299["mv_t__958__1050__1128 |True|  [bool.&& [mb__904]]"]
	75 --> 299
	284 --> 299
	284["merge__931__1027__1113 merge"]
	247 --> 284
	245 --> 284
	291["mv_t__950__1042__1120 |True|  [U32_maybeTrue [mt__912__1008__1096]]"]
	267 --> 291
	252 --> 291
	252{"a__981__1081 ϕ"}
	272 --> 252
	297 --> 252
	298 --> 252
	298["mv_f__957__1049__1127 |False|  [bool.&& [mb__919__1015__1101]]"]
	272 --> 298
	281 --> 298
	281{"innerPhi__928__1024__1110 ϕ"}
	270 --> 281
	305 --> 281
	306 --> 281
	306["mv_f__965__1057__1135 |False|  [U32_maybeTrue [mt__917__1013__1099]]"]
	270 --> 306
	249 --> 306
	249["a__782__978__1078 10"]
	270["mt__917__1013__1099 U32_maybeTrue"]
	242 --> 270
	242["q__971__1071 u32.!="]
	4 --> 242
	241 --> 242
	241["arg__793__970__1070 0"]
	305["mv_t__964__1056__1134 |True|  [U32_maybeTrue [mt__917__1013__1099]]"]
	270 --> 305
	251 --> 305
	251["a__779__980__1080 u32.+"]
	19 --> 251
	250 --> 251
	250["arg__781__979__1079 1"]
	272["mb__919__1015__1101 bool.&&"]
	270 --> 272
	271 --> 272
	271["mf__918__1014__1100 U32_maybeFalse"]
	242 --> 271
	297["mv_t__956__1048__1126 |True|  [bool.&& [mb__919__1015__1101]]"]
	272 --> 297
	282 --> 297
	282["merge__929__1025__1111 merge"]
	251 --> 282
	249 --> 282
	269["mb__914__1010__1098 bool.&&"]
	267 --> 269
	268 --> 269
	268["mf__913__1009__1097 U32_maybeFalse"]
	240 --> 268
	287["mv_t__946__1038__1116 |True|  [bool.&& [mb__914__1010__1098]]"]
	269 --> 287
	276 --> 287
	276["merge__923__1019__1105 merge"]
	252 --> 276
	248 --> 276
	266["mb__909__1005__1095 bool.&&"]
	264 --> 266
	265 --> 266
	265["mf__908__1004__1094 U32_maybeFalse"]
	244 --> 265
	295["mv_t__954__1046__1124 |True|  [bool.&& [mb__909__1005__1095]]"]
	266 --> 295
	280 --> 295
	280["merge__927__1023__1109 merge"]
	256 --> 280
	254 --> 280
	289["mv_t__948__1040__1118 |True|  [U32_maybeTrue [mt__917__1013__1099]]"]
	270 --> 289
	262 --> 289
	262{"b__991__1091 ϕ"}
	75 --> 262
	293 --> 262
	294 --> 262
	294["mv_f__953__1045__1123 |False|  [bool.&& [mb__904]]"]
	75 --> 294
	277 --> 294
	277{"innerPhi__924__1020__1106 ϕ"}
	73 --> 277
	301 --> 277
	302 --> 277
	302["mv_f__961__1053__1131 |False|  [U32_maybeTrue [mt__902]]"]
	73 --> 302
	259 --> 302
	259["b__769__988__1088 u32.+"]
	19 --> 259
	258 --> 259
	258["arg__771__987__1087 3"]
	301["mv_t__960__1052__1130 |True|  [U32_maybeTrue [mt__902]]"]
	73 --> 301
	261 --> 301
	261["b__766__990__1090 u32.+"]
	253 --> 261
	260 --> 261
	260["arg__768__989__1089 1"]
	293["mv_t__952__1044__1122 |True|  [bool.&& [mb__904]]"]
	75 --> 293
	278 --> 293
	278["merge__925__1021__1107 merge"]
	261 --> 278
	259 --> 278
	285["mv_t__944__1036__1114 |True|  [bool.&& [mb__919__1015__1101]]"]
	272 --> 285
	274 --> 285
	274["merge__921__1017__1103 merge"]
	262 --> 274
	257 --> 274
	201["mv_t__938__1030 |True|  [bool.&& [mb__914__1010__1098]]"]
	269 --> 201
	183 --> 201
	183["merge__916__1012 merge"]
	167 --> 183
	165 --> 183
	105["mv_t__934 |True|  [U32_maybeTrue [mt__902]]"]
	73 --> 105
	173 --> 105
	173{"c__1002 ϕ"}
	176 --> 173
	199 --> 173
	200 --> 173
	200["mv_f__937__1029 |False|  [bool.&& [mb__909__1005]]"]
	176 --> 200
	177 --> 200
	177{"innerPhi__910__1006 ϕ"}
	174 --> 177
	203 --> 177
	204 --> 177
	204["mv_f__941__1033 |False|  [U32_maybeTrue [mt__907__1003]]"]
	174 --> 204
	170 --> 204
	170["c__754__999 u32.+"]
	153 --> 170
	169 --> 170
	169["arg__756__998 3"]
	153{"a__982 ϕ"}
	181 --> 153
	209 --> 153
	210 --> 153
	210["mv_f__947__1039 |False|  [bool.&& [mb__914__1010]]"]
	181 --> 210
	189 --> 210
	189{"innerPhi__922__1018 ϕ"}
	179 --> 189
	213 --> 189
	214 --> 189
	214["mv_f__951__1043 |False|  [U32_maybeTrue [mt__912__1008]]"]
	179 --> 214
	148 --> 214
	148{"a__977 ϕ"}
	75 --> 148
	221 --> 148
	222 --> 148
	222["mv_f__959__1051 |False|  [bool.&& [mb__904]]"]
	75 --> 222
	197 --> 222
	197{"innerPhi__930__1026 ϕ"}
	73 --> 197
	229 --> 197
	230 --> 197
	230["mv_f__967__1059 |False|  [U32_maybeTrue [mt__902]]"]
	73 --> 230
	145 --> 230
	145["a__787__974 20"]
	229["mv_t__966__1058 |True|  [U32_maybeTrue [mt__902]]"]
	73 --> 229
	147 --> 229
	147["a__784__976 u32.+"]
	19 --> 147
	146 --> 147
	146["arg__786__975 2"]
	221["mv_t__958__1050 |True|  [bool.&& [mb__904]]"]
	75 --> 221
	198 --> 221
	198["merge__931__1027 merge"]
	147 --> 198
	145 --> 198
	179["mt__912__1008 U32_maybeTrue"]
	140 --> 179
	140["p__969 u32.!="]
	3 --> 140
	139 --> 140
	139["arg__795__968 0"]
	213["mv_t__950__1042 |True|  [U32_maybeTrue [mt__912__1008]]"]
	179 --> 213
	152 --> 213
	152{"a__981 ϕ"}
	186 --> 152
	219 --> 152
	220 --> 152
	220["mv_f__957__1049 |False|  [bool.&& [mb__919__1015]]"]
	186 --> 220
	195 --> 220
	195{"innerPhi__928__1024 ϕ"}
	184 --> 195
	227 --> 195
	228 --> 195
	228["mv_f__965__1057 |False|  [U32_maybeTrue [mt__917__1013]]"]
	184 --> 228
	149 --> 228
	149["a__782__978 10"]
	184["mt__917__1013 U32_maybeTrue"]
	142 --> 184
	142["q__971 u32.!="]
	4 --> 142
	141 --> 142
	141["arg__793__970 0"]
	227["mv_t__964__1056 |True|  [U32_maybeTrue [mt__917__1013]]"]
	184 --> 227
	151 --> 227
	151["a__779__980 u32.+"]
	19 --> 151
	150 --> 151
	150["arg__781__979 1"]
	186["mb__919__1015 bool.&&"]
	184 --> 186
	185 --> 186
	185["mf__918__1014 U32_maybeFalse"]
	142 --> 185
	219["mv_t__956__1048 |True|  [bool.&& [mb__919__1015]]"]
	186 --> 219
	196 --> 219
	196["merge__929__1025 merge"]
	151 --> 196
	149 --> 196
	181["mb__914__1010 bool.&&"]
	179 --> 181
	180 --> 181
	180["mf__913__1009 U32_maybeFalse"]
	140 --> 180
	209["mv_t__946__1038 |True|  [bool.&& [mb__914__1010]]"]
	181 --> 209
	190 --> 209
	190["merge__923__1019 merge"]
	152 --> 190
	148 --> 190
	174["mt__907__1003 U32_maybeTrue"]
	144 --> 174
	144["s__973 u32.!="]
	6 --> 144
	143 --> 144
	143["arg__789__972 0"]
	203["mv_t__940__1032 |True|  [U32_maybeTrue [mt__907__1003]]"]
	174 --> 203
	172 --> 203
	172["c__751__1001 u32.+"]
	163 --> 172
	171 --> 172
	171["arg__753__1000 1"]
	163{"b__992 ϕ"}
	186 --> 163
	207 --> 163
	208 --> 163
	208["mv_f__945__1037 |False|  [bool.&& [mb__919__1015]]"]
	186 --> 208
	187 --> 208
	187{"innerPhi__920__1016 ϕ"}
	184 --> 187
	211 --> 187
	212 --> 187
	212["mv_f__949__1041 |False|  [U32_maybeTrue [mt__917__1013]]"]
	184 --> 212
	157 --> 212
	157{"b__986 ϕ"}
	176 --> 157
	217 --> 157
	218 --> 157
	218["mv_f__955__1047 |False|  [bool.&& [mb__909__1005]]"]
	176 --> 218
	193 --> 218
	193{"innerPhi__926__1022 ϕ"}
	174 --> 193
	225 --> 193
	226 --> 193
	226["mv_f__963__1055 |False|  [U32_maybeTrue [mt__907__1003]]"]
	174 --> 226
	154 --> 226
	154["b__776__983 30"]
	225["mv_t__962__1054 |True|  [U32_maybeTrue [mt__907__1003]]"]
	174 --> 225
	156 --> 225
	156["b__773__985 u32.+"]
	153 --> 156
	155 --> 156
	155["arg__775__984 2"]
	176["mb__909__1005 bool.&&"]
	174 --> 176
	175 --> 176
	175["mf__908__1004 U32_maybeFalse"]
	144 --> 175
	217["mv_t__954__1046 |True|  [bool.&& [mb__909__1005]]"]
	176 --> 217
	194 --> 217
	194["merge__927__1023 merge"]
	156 --> 194
	154 --> 194
	211["mv_t__948__1040 |True|  [U32_maybeTrue [mt__917__1013]]"]
	184 --> 211
	162 --> 211
	162{"b__991 ϕ"}
	75 --> 162
	215 --> 162
	216 --> 162
	216["mv_f__953__1045 |False|  [bool.&& [mb__904]]"]
	75 --> 216
	191 --> 216
	191{"innerPhi__924__1020 ϕ"}
	73 --> 191
	223 --> 191
	224 --> 191
	224["mv_f__961__1053 |False|  [U32_maybeTrue [mt__902]]"]
	73 --> 224
	159 --> 224
	159["b__769__988 u32.+"]
	19 --> 159
	158 --> 159
	158["arg__771__987 3"]
	223["mv_t__960__1052 |True|  [U32_maybeTrue [mt__902]]"]
	73 --> 223
	161 --> 223
	161["b__766__990 u32.+"]
	153 --> 161
	160 --> 161
	160["arg__768__989 1"]
	215["mv_t__952__1044 |True|  [bool.&& [mb__904]]"]
	75 --> 215
	192 --> 215
	192["merge__925__1021 merge"]
	161 --> 192
	159 --> 192
	207["mv_t__944__1036 |True|  [bool.&& [mb__919__1015]]"]
	186 --> 207
	188 --> 207
	188["merge__921__1017 merge"]
	162 --> 188
	157 --> 188
	199["mv_t__936__1028 |True|  [bool.&& [mb__909__1005]]"]
	176 --> 199
	178 --> 199
	178["merge__911__1007 merge"]
	172 --> 178
	170 --> 178
	103["mv_t__932 |True|  [bool.&& [mb__904]]"]
	75 --> 103
	77 --> 103
	77["merge__906 merge"]
	69 --> 77
	61 --> 77
	61{"c ϕ"}
	85 --> 61
	109 --> 61
	110 --> 61
	110["mv_f__939 |False|  [bool.&& [mb__914]]"]
	85 --> 110
	86 --> 110
	86{"innerPhi__915 ϕ"}
	83 --> 86
	113 --> 86
	114 --> 86
	114["mv_f__943 |False|  [U32_maybeTrue [mt__912]]"]
	83 --> 114
	232 --> 114
	232["c__761__1061 u32.+"]
	19 --> 232
	231 --> 232
	231["arg__763__1060 4"]
	83["mt__912 U32_maybeTrue"]
	9 --> 83
	9["p u32.!="]
	3 --> 9
	7 --> 9
	7["arg__795 0"]
	113["mv_t__942 |True|  [U32_maybeTrue [mt__912]]"]
	83 --> 113
	234 --> 113
	234["c__758__1063 u32.+"]
	51 --> 234
	233 --> 234
	233["arg__760__1062 2"]
	51{"b ϕ"}
	90 --> 51
	115 --> 51
	116 --> 51
	116["mv_f__945 |False|  [bool.&& [mb__919]]"]
	90 --> 116
	91 --> 116
	91{"innerPhi__920 ϕ"}
	88 --> 91
	119 --> 91
	120 --> 91
	120["mv_f__949 |False|  [U32_maybeTrue [mt__917]]"]
	88 --> 120
	42 --> 120
	42{"b ϕ"}
	80 --> 42
	125 --> 42
	126 --> 42
	126["mv_f__955 |False|  [bool.&& [mb__909]]"]
	80 --> 126
	97 --> 126
	97{"innerPhi__926 ϕ"}
	78 --> 97
	133 --> 97
	134 --> 97
	134["mv_f__963 |False|  [U32_maybeTrue [mt__907]]"]
	78 --> 134
	38 --> 134
	38["b__776 30"]
	78["mt__907 U32_maybeTrue"]
	18 --> 78
	18["s u32.!="]
	6 --> 18
	16 --> 18
	16["arg__789 0"]
	133["mv_t__962 |True|  [U32_maybeTrue [mt__907]]"]
	78 --> 133
	41 --> 133
	41["b__773 u32.+"]
	34 --> 41
	39 --> 41
	39["arg__775 2"]
	34{"a ϕ"}
	85 --> 34
	117 --> 34
	118 --> 34
	118["mv_f__947 |False|  [bool.&& [mb__914]]"]
	85 --> 118
	93 --> 118
	93{"innerPhi__922 ϕ"}
	83 --> 93
	121 --> 93
	122 --> 93
	122["mv_f__951 |False|  [U32_maybeTrue [mt__912]]"]
	83 --> 122
	27 --> 122
	27{"a ϕ"}
	75 --> 27
	129 --> 27
	130 --> 27
	130["mv_f__959 |False|  [bool.&& [mb__904]]"]
	75 --> 130
	101 --> 130
	101{"innerPhi__930 ϕ"}
	73 --> 101
	137 --> 101
	138 --> 101
	138["mv_f__967 |False|  [U32_maybeTrue [mt__902]]"]
	73 --> 138
	23 --> 138
	23["a__787 20"]
	137["mv_t__966 |True|  [U32_maybeTrue [mt__902]]"]
	73 --> 137
	26 --> 137
	26["a__784 u32.+"]
	19 --> 26
	24 --> 26
	24["arg__786 2"]
	129["mv_t__958 |True|  [bool.&& [mb__904]]"]
	75 --> 129
	102 --> 129
	102["merge__931 merge"]
	26 --> 102
	23 --> 102
	121["mv_t__950 |True|  [U32_maybeTrue [mt__912]]"]
	83 --> 121
	33 --> 121
	33{"a ϕ"}
	90 --> 33
	127 --> 33
	128 --> 33
	128["mv_f__957 |False|  [bool.&& [mb__919]]"]
	90 --> 128
	99 --> 128
	99{"innerPhi__928 ϕ"}
	88 --> 99
	135 --> 99
	136 --> 99
	136["mv_f__965 |False|  [U32_maybeTrue [mt__917]]"]
	88 --> 136
	29 --> 136
	29["a__782 10"]
	88["mt__917 U32_maybeTrue"]
	12 --> 88
	12["q u32.!="]
	4 --> 12
	10 --> 12
	10["arg__793 0"]
	135["mv_t__964 |True|  [U32_maybeTrue [mt__917]]"]
	88 --> 135
	32 --> 135
	32["a__779 u32.+"]
	19 --> 32
	30 --> 32
	30["arg__781 1"]
	90["mb__919 bool.&&"]
	88 --> 90
	89 --> 90
	89["mf__918 U32_maybeFalse"]
	12 --> 89
	127["mv_t__956 |True|  [bool.&& [mb__919]]"]
	90 --> 127
	100 --> 127
	100["merge__929 merge"]
	32 --> 100
	29 --> 100
	85["mb__914 bool.&&"]
	83 --> 85
	84 --> 85
	84["mf__913 U32_maybeFalse"]
	9 --> 84
	117["mv_t__946 |True|  [bool.&& [mb__914]]"]
	85 --> 117
	94 --> 117
	94["merge__923 merge"]
	33 --> 94
	27 --> 94
	80["mb__909 bool.&&"]
	78 --> 80
	79 --> 80
	79["mf__908 U32_maybeFalse"]
	18 --> 79
	125["mv_t__954 |True|  [bool.&& [mb__909]]"]
	80 --> 125
	98 --> 125
	98["merge__927 merge"]
	41 --> 98
	38 --> 98
	119["mv_t__948 |True|  [U32_maybeTrue [mt__917]]"]
	88 --> 119
	50 --> 119
	50{"b ϕ"}
	75 --> 50
	123 --> 50
	124 --> 50
	124["mv_f__953 |False|  [bool.&& [mb__904]]"]
	75 --> 124
	95 --> 124
	95{"innerPhi__924 ϕ"}
	73 --> 95
	131 --> 95
	132 --> 95
	132["mv_f__961 |False|  [U32_maybeTrue [mt__902]]"]
	73 --> 132
	46 --> 132
	46["b__769 u32.+"]
	19 --> 46
	44 --> 46
	44["arg__771 3"]
	131["mv_t__960 |True|  [U32_maybeTrue [mt__902]]"]
	73 --> 131
	49 --> 131
	49["b__766 u32.+"]
	34 --> 49
	47 --> 49
	47["arg__768 1"]
	123["mv_t__952 |True|  [bool.&& [mb__904]]"]
	75 --> 123
	96 --> 123
	96["merge__925 merge"]
	49 --> 96
	46 --> 96
	115["mv_t__944 |True|  [bool.&& [mb__919]]"]
	90 --> 115
	92 --> 115
	92["merge__921 merge"]
	50 --> 92
	42 --> 92
	109["mv_t__938 |True|  [bool.&& [mb__914]]"]
	85 --> 109
	87 --> 109
	87["merge__916 merge"]
	60 --> 87
	57 --> 87
	57["c__761 u32.+"]
	19 --> 57
	55 --> 57
	55["arg__763 4"]
	60["c__758 u32.+"]
	51 --> 60
	58 --> 60
	58["arg__760 2"]
	69{"c ϕ"}
	80 --> 69
	107 --> 69
	108 --> 69
	108["mv_f__937 |False|  [bool.&& [mb__909]]"]
	80 --> 108
	81 --> 108
	81{"innerPhi__910 ϕ"}
	78 --> 81
	111 --> 81
	112 --> 81
	112["mv_f__941 |False|  [U32_maybeTrue [mt__907]]"]
	78 --> 112
	236 --> 112
	236["c__754__1065 u32.+"]
	34 --> 236
	235 --> 236
	235["arg__756__1064 3"]
	111["mv_t__940 |True|  [U32_maybeTrue [mt__907]]"]
	78 --> 111
	238 --> 111
	238["c__751__1067 u32.+"]
	51 --> 238
	237 --> 238
	237["arg__753__1066 1"]
	107["mv_t__936 |True|  [bool.&& [mb__909]]"]
	80 --> 107
	82 --> 107
	82["merge__911 merge"]
	68 --> 82
	65 --> 82
	65["c__754 u32.+"]
	34 --> 65
	63 --> 65
	63["arg__756 3"]
	68["c__751 u32.+"]
	51 --> 68
	66 --> 68
	66["arg__753 1"]
</pre>`;
