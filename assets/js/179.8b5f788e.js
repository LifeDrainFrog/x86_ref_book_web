(window.webpackJsonp=window.webpackJsonp||[]).push([[179],{533:function(t,a,s){"use strict";s.r(a);var e=s(42),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"minpd"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#minpd"}},[t._v("#")]),t._v(" MINPD")]),t._v(" "),s("h2",{attrs:{id:"return-minimum-packed-double-precision-floating-point-values"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#return-minimum-packed-double-precision-floating-point-values"}},[t._v("#")]),t._v(" Return Minimum Packed Double-Precision Floating-Point Values")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Opcode")]),t._v(" "),s("th",[t._v("Mnemonic")]),t._v(" "),s("th",[t._v("Description")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("66 0F 5D /r")]),t._v(" "),s("td",[t._v("MINPD xmm1, xmm2/m128")]),t._v(" "),s("td",[t._v("Return the minimum double-precision floating-point values between xmm2/m128 and xmm1.")])])])]),t._v(" "),s("h2",{attrs:{id:"description"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[t._v("#")]),t._v(" Description")]),t._v(" "),s("p",[t._v("Performs an SIMD compare of the packed double-precision floating-point values in the destination operand (first operand) and the source operand (second operand), and returns the minimum value for each pair of values to the destination operand. The source operand can be an XMM register or a 128-bit memory location. The destination operand is an XMM register.")]),t._v(" "),s("p",[t._v("If the values being compared are both 0.0s (of either sign), the value in the second operand (source operand) is returned. If a value in the second operand is an SNaN, that SNaN is returned unchanged to the destination (that is, a QNaN version of the SNaN is not returned).")]),t._v(" "),s("p",[t._v("If only one value is a NaN (SNaN or QNaN) for this instruction, the second operand (source operand), either a NaN or a valid floating-point value, is written to the result. If instead of this behavior, it is required that the NaN source operand (from either the first or second operand) be returned, the action of MINPD can be emulated using a sequence of instructions, such as, a comparison followed by AND, ANDN and OR.")]),t._v(" "),s("h2",{attrs:{id:"operation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#operation"}},[t._v("#")]),t._v(" Operation")]),t._v(" "),s("div",{staticClass:"language-c line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-c"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Destination"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v(".63")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.0")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" Source"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v(".63")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("IsSNaN")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Destination"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v(".63")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("IsSNaN")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Source"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v(".63")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" Destination"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v(".63")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">=")]),t._v(" Source"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v(".63")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" Destination"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v(".63")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Source"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v(".63")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Destination"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("64.")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v(".127")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.0")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" Source"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("64.")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v(".127")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("IsSNaN")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Destination"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("64.")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v(".127")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("IsSNaN")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Source"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("64.")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v(".127")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" Destination"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("64.")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v(".127")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">=")]),t._v(" Source"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("64.")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v(".127")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" Destination"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("64.")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v(".127")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Source"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("64.")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v(".127")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br")])]),s("h2",{attrs:{id:"simd-floating-point-exceptions"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#simd-floating-point-exceptions"}},[t._v("#")]),t._v(" SIMD Floating-Point Exceptions")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[s("a",{attrs:{href:""}})]),t._v(" "),s("th")])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("Invalid")]),t._v(" "),s("td",[t._v("(including QNaN source operand), Denormal.")])])])]),t._v(" "),s("h2",{attrs:{id:"protected-mode-exceptions"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#protected-mode-exceptions"}},[t._v("#")]),t._v(" Protected Mode Exceptions")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[s("a",{attrs:{href:""}})]),t._v(" "),s("th")])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("#GP(0)")]),t._v(" "),s("td",[t._v("For an illegal memory operand effective address in the CS, DS, ES, FS or GS segments. If a memory operand is not aligned on a 16-byte boundary, regardless of segment.")])]),t._v(" "),s("tr",[s("td",[t._v("#GP(0)")]),t._v(" "),s("td",[t._v("For an illegal memory operand effective address in the CS, DS, ES, FS or GS segments. If a memory operand is not aligned on a 16-byte boundary, regardless of segment.")])]),t._v(" "),s("tr",[s("td",[t._v("#SS(0)")]),t._v(" "),s("td",[t._v("If a memory operand effective address is outside the SS segment limit.")])]),t._v(" "),s("tr",[s("td",[t._v("#PF(fault-code)")]),t._v(" "),s("td",[t._v("For a page fault.")])]),t._v(" "),s("tr",[s("td",[t._v("#NM")]),t._v(" "),s("td",[t._v("If TS in CR0 is set.")])]),t._v(" "),s("tr",[s("td",[t._v("#XM")]),t._v(" "),s("td",[t._v("If an unmasked SIMD floating-point exception and OSXMMEXCPT in CR4 is 1.")])])])]),t._v(" "),s("h2",{attrs:{id:"real-address-mode-exceptions"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#real-address-mode-exceptions"}},[t._v("#")]),t._v(" Real-Address Mode Exceptions")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[s("a",{attrs:{href:""}})]),t._v(" "),s("th")])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("#GP(0)")]),t._v(" "),s("td",[t._v("If a memory operand is not aligned on a 16-byte boundary, regardless of segment. If any part of the operand lies outside the effective address space from 0 to FFFFH.")])]),t._v(" "),s("tr",[s("td",[t._v("#GP(0)")]),t._v(" "),s("td",[t._v("If a memory operand is not aligned on a 16-byte boundary, regardless of segment. If any part of the operand lies outside the effective address space from 0 to FFFFH.")])]),t._v(" "),s("tr",[s("td",[t._v("#NM")]),t._v(" "),s("td",[t._v("If TS in CR0 is set.")])]),t._v(" "),s("tr",[s("td",[t._v("#XM")]),t._v(" "),s("td",[t._v("If an unmasked SIMD floating-point exception and OSXMMEXCPT in CR4 is 1.")])])])]),t._v(" "),s("h2",{attrs:{id:"virtual-8086-mode-exceptions"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#virtual-8086-mode-exceptions"}},[t._v("#")]),t._v(" Virtual-8086 Mode Exceptions")]),t._v(" "),s("p",[t._v("Same exceptions as in Real Address Mode")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[s("a",{attrs:{href:""}})]),t._v(" "),s("th")])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("#PF(fault-code)")]),t._v(" "),s("td",[t._v("For a page fault.")])])])]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Instruction")]),t._v(" "),s("th",[t._v("Latency")]),t._v(" "),s("th",[t._v("Throughput")]),t._v(" "),s("th",[t._v("Execution Unit")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("CPUID")]),t._v(" "),s("td",[t._v("0F3n/0F2n/069n")]),t._v(" "),s("td",[t._v("0F3n/0F2n/069n")]),t._v(" "),s("td",[t._v("0F2n")])]),t._v(" "),s("tr",[s("td",[t._v("MINPD xmm, xmm")]),t._v(" "),s("td",[t._v("5/4/4")]),t._v(" "),s("td",[t._v("2/2/2")]),t._v(" "),s("td",[t._v("FP_ADD")])])])])])}),[],!1,null,null,null);a.default=n.exports}}]);