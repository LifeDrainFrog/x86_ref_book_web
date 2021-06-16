(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{400:function(t,e,a){"use strict";a.r(e);var s=a(42),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"cmppd"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cmppd"}},[t._v("#")]),t._v(" CMPPD")]),t._v(" "),a("h2",{attrs:{id:"compare-packed-double-precision-floating-point-values"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#compare-packed-double-precision-floating-point-values"}},[t._v("#")]),t._v(" Compare Packed Double-Precision Floating-Point Values")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Opcode")]),t._v(" "),a("th",[t._v("Mnemonic")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("66 0F C2 /r ib")]),t._v(" "),a("td",[t._v("CMPPD xmm1, xmm2/m128, imm8")]),t._v(" "),a("td",[t._v("Compare packed double-precision floating-point values in xmm2/m128 and xmm1 using imm8 as comparison predicate.")])])])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Description")]),t._v(" "),a("th",[t._v("Predicate")]),t._v(" "),a("th",[t._v("imm8 Encoding")]),t._v(" "),a("th",[t._v("Description")]),t._v(" "),a("th",[t._v("Relation where: A Is 1st Operand, B Is 2nd Operand")]),t._v(" "),a("th",[t._v("Emulation")]),t._v(" "),a("th",[t._v("Result if NaN Operand")]),t._v(" "),a("th",[t._v("QNaN Operand Signals Invalid")]),t._v(" "),a("th",[t._v("Pseudo-Op")]),t._v(" "),a("th",[t._v("CMPPD Implementation")])])]),t._v(" "),a("tbody",[a("tr",[a("td"),t._v(" "),a("td"),t._v(" "),a("td"),t._v(" "),a("td"),t._v(" "),a("td"),t._v(" "),a("td"),t._v(" "),a("td"),t._v(" "),a("td"),t._v(" "),a("td"),t._v(" "),a("td")])])]),t._v(" "),a("p",[t._v("Performs an SIMD compare of the two packed double-precision floating-point values in the source operand (second operand) and the destination operand (first operand) and returns the results of the comparison to the destination operand. The comparison predicate operand (third operand) specifies the type of comparison performed on each of the pairs of packed values. The result of each comparison is a quadword mask of all 1s (comparison true) or all 0s (comparison false). The source operand can be an XMM register or a 128-bit memory location. The destination operand is an XMM register. The comparison predicate operand is an 8-bit immediate the first 3 bits of which define the type of comparison to be made (see the following table); bits 4 through 7 of the immediate are reserved.")]),t._v(" "),a("p",[t._v("Predicateimm8 EncodingDescriptionRelation where: A Is 1st Operand, B Is 2nd OperandEmulationResult if NaN OperandQNaN Operand Signals Invalid\nEQ000BEqualA = B-FalseNo\nLT001BLess-thanA < B-FalseYes\nLE010BLess-than-or-equalA <= B-FalseYes\n--Greater thanA > BSwap Operands, Use LTFalseYes\n--Greater-than-or-equalA >= BSwap Operands, Use LEFalseYes\nUNORD011BUnorderedA, B = Unordered-TrueNo\nNEQ100BNot-equalA != B-TrueNo\nNLT101BNot-less-thanNOT(A < B)-TrueYes\nNLE110BNot-less-than-or-equalNOT(A != B)-TrueYes\n--Not-greater-thanNOT(A > B)Swap Operands, Use NLTTrueYes\n--Not-greater-than-or-equalNOT(A >= B)Swap Operands, Use NLETrueYes\nORD111BOrderedA , B = Ordered-FalseNo")]),t._v(" "),a("p",[t._v('The unordered relationship is true when at least one of the two source operands being compared is a NaN; the ordered relationship is true when neither source operand is a NaN.\nA subsequent computational instruction that uses the mask result in the destination operand as an input operand will not generate an exception, because a mask of all 0s corresponds to a floating-point value of +0.0 and a mask of all 1s corresponds to a QNaN.\nNote that the processor does not implement the greater-than, greater-than-or-equal, not-greaterthan, and not-greater-than-or-equal relations. These comparisons can be made either by using the inverse relationship (that is, use the "not-less-than-or-equal" to make a "greater-than" comparison) or by using software emulation. When using software emulation, the program must swap the operands (copying registers when necessary to protect the data that will now be in the destination), and then perform the compare using a different predicate. The predicate to be used for these emulations is listed in the following table under the heading Emulation.\nCompilers and assemblers may implement the following two-operand pseudo-ops in addition to the three-operand CMPPD instruction. See the following table.')]),t._v(" "),a("p",[t._v("Pseudo-OpCMPPD Implementation\nCMPEQPD xmm1, xmm2CMPPD xmm1, xmm2, 0\nCMPLTPD xmm1, xmm2CMPPD xmm1, xmm2, 1\nCMPLEPD xmm1, xmm2CMPPD xmm1, xmm2, 2\nCMPUNORDPD xmm1, xmm2CMPPD xmm1, xmm2, 3\nCMPNEQPD xmm1, xmm2CMPPD xmm1, xmm2, 4\nCMPNLTPD xmm1, xmm2CMPPD xmm1, xmm2, 5\nCMPNLEPD xmm1, xmm2CMPPD xmm1, xmm2, 6\nCMPORDPD xmm1, xmm2CMPPD xmm1, xmm2, 7")]),t._v(" "),a("p",[t._v("The greater-than relations that the processor does not implement require more than one instruction to emulate in software and therefore should not be implemented as pseudo-ops. (For these, the programmer should reverse the operands of the corresponding less than relations and use move instructions to ensure that the mask is moved to the correct destination register and that the source operand is left intact.)\n|EQ|000B|Equal|A = B|-|False|No|LT|001B|Less-than|A < B|-|False|Yes|LE|010B|Less-than-or-equal|A <= B|-|False|Yes|-|-|Greater than|A > B|Swap Operands, Use LT|False|Yes|-|-|Greater-than-or-equal|A >= B|Swap Operands, Use LE|False|Yes|UNORD|011B|Unordered|A, B = Unordered|-|True|No|NEQ|100B|Not-equal|A != B|-|True|No|NLT|101B|Not-less-than|NOT(A < B)|-|True|Yes|NLE|110B|Not-less-than-or-equal|NOT(A != B)|-|True|Yes|-|-|Not-greater-than|NOT(A > B)|Swap Operands, Use NLT|True|Yes|-|-|Not-greater-than-or-equal|NOT(A >= B)|Swap Operands, Use NLE|True|Yes|ORD|111B|Ordered|A , B = Ordered|-|False|No|CMPEQPD xmm1, xmm2|CMPPD xmm1, xmm2, 0|CMPLTPD xmm1, xmm2|CMPPD xmm1, xmm2, 1|CMPLEPD xmm1, xmm2|CMPPD xmm1, xmm2, 2|CMPUNORDPD xmm1, xmm2|CMPPD xmm1, xmm2, 3|CMPNEQPD xmm1, xmm2|CMPPD xmm1, xmm2, 4|CMPNLTPD xmm1, xmm2|CMPPD xmm1, xmm2, 5|CMPNLEPD xmm1, xmm2|CMPPD xmm1, xmm2, 6|CMPORDPD xmm1, xmm2|CMPPD xmm1, xmm2, 7|\n|\n|EQ|000B|Equal|A = B|-|False|No|\n|LT|001B|Less-than|A < B|-|False|Yes|\n|LE|010B|Less-than-or-equal|A <= B|-|False|Yes|\n|-|-|Greater than|A > B|Swap Operands, Use LT|False|Yes|\n|-|-|Greater-than-or-equal|A >= B|Swap Operands, Use LE|False|Yes|\n|UNORD|011B|Unordered|A, B = Unordered|-|True|No|\n|NEQ|100B|Not-equal|A != B|-|True|No|\n|NLT|101B|Not-less-than|NOT(A < B)|-|True|Yes|\n|NLE|110B|Not-less-than-or-equal|NOT(A != B)|-|True|Yes|\n|-|-|Not-greater-than|NOT(A > B)|Swap Operands, Use NLT|True|Yes|\n|-|-|Not-greater-than-or-equal|NOT(A >= B)|Swap Operands, Use NLE|True|Yes|\n|ORD|111B|Ordered|A , B = Ordered|-|False|No|\n|\n|CMPEQPD xmm1, xmm2|CMPPD xmm1, xmm2, 0|\n|CMPLTPD xmm1, xmm2|CMPPD xmm1, xmm2, 1|\n|CMPLEPD xmm1, xmm2|CMPPD xmm1, xmm2, 2|\n|CMPUNORDPD xmm1, xmm2|CMPPD xmm1, xmm2, 3|\n|CMPNEQPD xmm1, xmm2|CMPPD xmm1, xmm2, 4|\n|CMPNLTPD xmm1, xmm2|CMPPD xmm1, xmm2, 5|\n|CMPNLEPD xmm1, xmm2|CMPPD xmm1, xmm2, 6|\n|CMPORDPD xmm1, xmm2|CMPPD xmm1, xmm2, 7|")]),t._v(" "),a("h2",{attrs:{id:"operation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#operation"}},[t._v("#")]),t._v(" Operation")]),t._v(" "),a("div",{staticClass:"language-c line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("switch")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ComparisonPredicate"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n\t\tOperator "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" OperatorEqual"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("break")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n\t\tOperator "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" OperatorLessThan"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("break")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n\t\tOperator "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" OperatorLessOrEqual"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("break")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n\t\tOperator "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" OperatorUnordered"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("break")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n\t\tOperator "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" OperatorNotEqual"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("break")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n\t\tOperator "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" OperatorNotLessThan"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("break")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n\t\tOperator "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" OperatorNotLessOrEqual"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("break")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n\t\tOperator "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" OperatorOrdered"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("break")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Reserved")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\nCMP0 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Destination"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v(".63")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Operator Source"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v(".63")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nCMP1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Destination"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("64.")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v(".127")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Operator Source"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("64.")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v(".127")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("CMP0 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" true"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" Destination"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v(".64")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0xFFFFFFFFFFFFFFFF")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" Destination"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v(".63")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("CMP1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" true"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" Destination"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("64.")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v(".127")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0xFFFFFFFFFFFFFFFF")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" Destination"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("64.")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v(".127")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br"),a("span",{staticClass:"line-number"},[t._v("20")]),a("br"),a("span",{staticClass:"line-number"},[t._v("21")]),a("br"),a("span",{staticClass:"line-number"},[t._v("22")]),a("br"),a("span",{staticClass:"line-number"},[t._v("23")]),a("br"),a("span",{staticClass:"line-number"},[t._v("24")]),a("br"),a("span",{staticClass:"line-number"},[t._v("25")]),a("br"),a("span",{staticClass:"line-number"},[t._v("26")]),a("br"),a("span",{staticClass:"line-number"},[t._v("27")]),a("br"),a("span",{staticClass:"line-number"},[t._v("28")]),a("br"),a("span",{staticClass:"line-number"},[t._v("29")]),a("br"),a("span",{staticClass:"line-number"},[t._v("30")]),a("br"),a("span",{staticClass:"line-number"},[t._v("31")]),a("br"),a("span",{staticClass:"line-number"},[t._v("32")]),a("br"),a("span",{staticClass:"line-number"},[t._v("33")]),a("br"),a("span",{staticClass:"line-number"},[t._v("34")]),a("br"),a("span",{staticClass:"line-number"},[t._v("35")]),a("br")])]),a("h2",{attrs:{id:"simd-floating-point-exceptions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#simd-floating-point-exceptions"}},[t._v("#")]),t._v(" SIMD Floating-Point Exceptions")]),t._v(" "),a("p",[t._v("Invalid if SNaN operand and invalid if QNaN and predicate as listed in above table, Denormal.")]),t._v(" "),a("h2",{attrs:{id:"protected-mode-exceptions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#protected-mode-exceptions"}},[t._v("#")]),t._v(" Protected Mode Exceptions")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[a("a",{attrs:{href:""}})]),t._v(" "),a("th")])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("#GP(0)")]),t._v(" "),a("td",[t._v("For an illegal memory operand effective address in the CS, DS, ES, FS or GS segments. If a memory operand is not aligned on a 16-byte boundary, regardless of segment.")])]),t._v(" "),a("tr",[a("td",[t._v("#GP(0)")]),t._v(" "),a("td",[t._v("For an illegal memory operand effective address in the CS, DS, ES, FS or GS segments. If a memory operand is not aligned on a 16-byte boundary, regardless of segment.")])]),t._v(" "),a("tr",[a("td",[t._v("#SS(0)")]),t._v(" "),a("td",[t._v("For an illegal address in the SS segment.")])]),t._v(" "),a("tr",[a("td",[t._v("#SS(0)")]),t._v(" "),a("td",[t._v("For an illegal address in the SS segment.")])]),t._v(" "),a("tr",[a("td",[t._v("#NM")]),t._v(" "),a("td",[t._v("If TS in CR0 is set.")])]),t._v(" "),a("tr",[a("td",[t._v("#XM")]),t._v(" "),a("td",[t._v("If an unmasked SIMD floating-point exception and OSXMMEXCPT in CR4 is 1.")])])])]),t._v(" "),a("h2",{attrs:{id:"real-address-mode-exceptions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#real-address-mode-exceptions"}},[t._v("#")]),t._v(" Real-Address Mode Exceptions")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[a("a",{attrs:{href:""}})]),t._v(" "),a("th")])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("#GP(0)")]),t._v(" "),a("td",[t._v("If a memory operand is not aligned on a 16-byte boundary, regardless of segment. If any part of the operand lies outside the effective address space from 0 to FFFFH.")])]),t._v(" "),a("tr",[a("td",[t._v("#GP(0)")]),t._v(" "),a("td",[t._v("If a memory operand is not aligned on a 16-byte boundary, regardless of segment. If any part of the operand lies outside the effective address space from 0 to FFFFH.")])]),t._v(" "),a("tr",[a("td",[t._v("#NM")]),t._v(" "),a("td",[t._v("If TS in CR0 is set.")])]),t._v(" "),a("tr",[a("td",[t._v("#XM")]),t._v(" "),a("td",[t._v("If an unmasked SIMD floating-point exception and OSXMMEXCPT in CR4 is 1.")])])])]),t._v(" "),a("h2",{attrs:{id:"virtual-8086-mode-exceptions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#virtual-8086-mode-exceptions"}},[t._v("#")]),t._v(" Virtual-8086 Mode Exceptions")]),t._v(" "),a("p",[t._v("Same exceptions as in Real Address Mode")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[a("a",{attrs:{href:""}})]),t._v(" "),a("th")])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("#PF(fault-code)")]),t._v(" "),a("td",[t._v("For a page fault.")])])])])])}),[],!1,null,null,null);e.default=n.exports}}]);