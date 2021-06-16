(window.webpackJsonp=window.webpackJsonp||[]).push([[244],{599:function(t,s,a){"use strict";a.r(s);var n=a(42),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"pmaddwd"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pmaddwd"}},[t._v("#")]),t._v(" PMADDWD")]),t._v(" "),a("h2",{attrs:{id:"multiply-and-add-packed-integers"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#multiply-and-add-packed-integers"}},[t._v("#")]),t._v(" Multiply and Add Packed Integers")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Opcode")]),t._v(" "),a("th",[t._v("Mnemonic")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("0F F5 /r")]),t._v(" "),a("td",[t._v("PMADDWD mm, mm/m64")]),t._v(" "),a("td",[t._v("Multiply the packed words in mm by the packed words in mm/m64, add adjacent doubleword results, and store in mm.")])]),t._v(" "),a("tr",[a("td",[t._v("66 0F F5 /r")]),t._v(" "),a("td",[t._v("PMADDWD xmm1, xmm2/m128")]),t._v(" "),a("td",[t._v("Multiply the packed word integers in xmm1 by the packed word integers in xmm2/m128, add adjacent doubleword results, and store in xmm1.")])])])]),t._v(" "),a("h2",{attrs:{id:"description"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[t._v("#")]),t._v(" Description")]),t._v(" "),a("p",[t._v("Multiplies the individual signed words of the destination operand (first operand) by the corresponding signed words of the source operand (second operand), producing temporary signed, doubleword results. The adjacent doubleword results are then summed and stored in the destination operand. For example, the corresponding low-order words (15-0) and (31-16) in the source and destination operands are multiplied by one another and the doubleword results are added together and stored in the low doubleword of the destination register (31-0). The same operation is performed on the other pairs of adjacent words. (Figure 4-2 shows this operation when using 64-bit operands.) The source operand can be an MMX technology register or a 64- bit memory location, or it can be an XMM register or a 128-bit memory location. The destination operand can be an MMX technology register or an XMM register.")]),t._v(" "),a("p",[t._v("The PMADDWD instruction wraps around only in one situation: when the 2 pairs of words being operated on in a group are all 8000H. In this case, the result wraps around to 80000000H.")]),t._v(" "),a("h2",{attrs:{id:"operation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#operation"}},[t._v("#")]),t._v(" Operation")]),t._v(" "),a("div",{staticClass:"language-c line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("OperandSize "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("64")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//PMADDWD instruction with 64-bit operands:")]),t._v("\n\tDestination"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v(".31")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Destination"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v(".15")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" Source"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v(".15")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Destination"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("16.")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v(".31")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" Source"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("16.")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v(".31")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\tDestination"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("32.")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v(".63")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Destination"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("32.")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v(".47")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" Source"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("32.")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v(".47")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Destination"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("48.")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v(".63")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" Source"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("48.")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v(".63")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//PMADDWD instruction with 128-bit operands:")]),t._v("\n\tDestination"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v(".31")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Destination"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v(".15")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" Source"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v(".15")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Destination"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("16.")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v(".31")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" Source"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("16.")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v(".31")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\tDestination"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("32.")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v(".63")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Destination"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("32.")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v(".47")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" Source"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("32.")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v(".47")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Destination"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("48.")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v(".63")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" Source"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("48.")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v(".63")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\tDestination"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("64.")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v(".95")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Destination"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("64.")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v(".79")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" Source"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("64.")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v(".79")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Destination"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("80.")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v(".95")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" Source"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("80.")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v(".95")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\tDestination"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("96.")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v(".127")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Destination"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("96.")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v(".111")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" Source"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("96.")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v(".111")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Destination"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("112.")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v(".127")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" Source"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("112.")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v(".127")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br")])]),a("h2",{attrs:{id:"flags-affected"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#flags-affected"}},[t._v("#")]),t._v(" Flags affected")]),t._v(" "),a("p",[t._v("None.")]),t._v(" "),a("h2",{attrs:{id:"protected-mode-exceptions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#protected-mode-exceptions"}},[t._v("#")]),t._v(" Protected Mode Exceptions")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[a("a",{attrs:{href:""}})]),t._v(" "),a("th")])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("#GP(0)")]),t._v(" "),a("td",[t._v("If a memory operand effective address is outside the CS, DS, ES, FS, or GS segment limit. (128-bit operations only) If a memory operand is not aligned on a 16-byte boundary, regardless of segment.")])]),t._v(" "),a("tr",[a("td",[t._v("#GP(0)")]),t._v(" "),a("td",[t._v("If a memory operand effective address is outside the CS, DS, ES, FS, or GS segment limit. (128-bit operations only) If a memory operand is not aligned on a 16-byte boundary, regardless of segment.")])]),t._v(" "),a("tr",[a("td",[t._v("#SS(0)")]),t._v(" "),a("td",[t._v("If a memory operand effective address is outside the SS segment limit.")])]),t._v(" "),a("tr",[a("td",[t._v("#UD")]),t._v(" "),a("td",[t._v("If EM in CR0 is set. 128-bit operations will generate #UD only if OSFXSR in CR4 is 0. Execution of 128-bit instructions on a non-SSE2 capable processor (one that is MMX technology capable) will result in the instruction operating on the mm registers, not #UD.")])]),t._v(" "),a("tr",[a("td",[t._v("#NM")]),t._v(" "),a("td",[t._v("If TS in CR0 is set.")])]),t._v(" "),a("tr",[a("td",[t._v("#MF")]),t._v(" "),a("td",[t._v("(64-bit operations only) If there is a pending x87 FPU exception.")])]),t._v(" "),a("tr",[a("td",[t._v("#PF(fault-code)")]),t._v(" "),a("td",[t._v("If a page fault occurs.")])])])]),t._v(" "),a("h2",{attrs:{id:"real-address-mode-exceptions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#real-address-mode-exceptions"}},[t._v("#")]),t._v(" Real-Address Mode Exceptions")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[a("a",{attrs:{href:""}})]),t._v(" "),a("th")])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("#GP(0)")]),t._v(" "),a("td",[t._v("(128-bit operations only) If a memory operand is not aligned on a 16-byte boundary, regardless of segment. If any part of the operand lies outside of the effective address space from 0 to FFFFH.")])]),t._v(" "),a("tr",[a("td",[t._v("#GP(0)")]),t._v(" "),a("td",[t._v("(128-bit operations only) If a memory operand is not aligned on a 16-byte boundary, regardless of segment. If any part of the operand lies outside of the effective address space from 0 to FFFFH.")])]),t._v(" "),a("tr",[a("td",[t._v("#UD")]),t._v(" "),a("td",[t._v("If EM in CR0 is set. 128-bit operations will generate #UD only if OSFXSR in CR4 is 0. Execution of 128-bit instructions on a non-SSE2 capable processor (one that is MMX technology capable) will result in the instruction operating on the mm registers, not #UD.")])]),t._v(" "),a("tr",[a("td",[t._v("#NM")]),t._v(" "),a("td",[t._v("If TS in CR0 is set.")])])])]),t._v(" "),a("h2",{attrs:{id:"virtual-8086-mode-exceptions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#virtual-8086-mode-exceptions"}},[t._v("#")]),t._v(" Virtual-8086 Mode Exceptions")]),t._v(" "),a("p",[t._v("Same exceptions as in Real Address Mode")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[a("a",{attrs:{href:""}})]),t._v(" "),a("th")])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("#PF(fault-code)")]),t._v(" "),a("td",[t._v("For a page fault.")])]),t._v(" "),a("tr",[a("td",[t._v("#PF(fault-code)")]),t._v(" "),a("td",[t._v("For a page fault.")])])])]),t._v(" "),a("h2",{attrs:{id:"numeric-exceptions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#numeric-exceptions"}},[t._v("#")]),t._v(" Numeric Exceptions")]),t._v(" "),a("p",[t._v("None.")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Instruction")]),t._v(" "),a("th",[t._v("Latency")]),t._v(" "),a("th",[t._v("Throughput")]),t._v(" "),a("th",[t._v("Execution Unit")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("CPUID")]),t._v(" "),a("td",[t._v("0F3n/0F2n/069n")]),t._v(" "),a("td",[t._v("0F3n/0F2n/069n")]),t._v(" "),a("td",[t._v("0F2n")])]),t._v(" "),a("tr",[a("td",[t._v("PMADDWD mm, mm")]),t._v(" "),a("td",[t._v("9/8/-")]),t._v(" "),a("td",[t._v("1/1/-")]),t._v(" "),a("td",[t._v("FP_MUL")])]),t._v(" "),a("tr",[a("td",[t._v("PMADDWD xmm, xmm")]),t._v(" "),a("td",[t._v("9/8/3+1")]),t._v(" "),a("td",[t._v("2/2/2")]),t._v(" "),a("td",[t._v("FP_MUL")])])])])])}),[],!1,null,null,null);s.default=e.exports}}]);