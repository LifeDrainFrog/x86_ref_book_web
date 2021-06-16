(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{428:function(t,e,a){"use strict";a.r(e);var n=a(42),r=Object(n.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"cvttss2si"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cvttss2si"}},[t._v("#")]),t._v(" CVTTSS2SI")]),t._v(" "),a("h2",{attrs:{id:"convert-with-truncation-scalar-single-precision-floating-point-value-to-doubleword-integer"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#convert-with-truncation-scalar-single-precision-floating-point-value-to-doubleword-integer"}},[t._v("#")]),t._v(" Convert with Truncation Scalar Single-Precision Floating-Point Value to Doubleword Integer")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Opcode")]),t._v(" "),a("th",[t._v("Mnemonic")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("F3 0F 2C /r")]),t._v(" "),a("td",[t._v("CVTTSS2SI r32, xmm/m32")]),t._v(" "),a("td",[t._v("Convert one single-precision floating-point value from xmm/m32 to one signed doubleword integer in r32 using truncation.")])])])]),t._v(" "),a("h2",{attrs:{id:"description"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[t._v("#")]),t._v(" Description")]),t._v(" "),a("p",[t._v("Converts a single-precision floating-point value in the source operand (second operand) to a signed doubleword integer in the destination operand (first operand). The source operand can be an XMM register or a 32-bit memory location. The destination operand is a general-purpose register. When the source operand is an XMM register, the single-precision floating-point value is contained in the low doubleword of the register.")]),t._v(" "),a("p",[t._v("When a conversion is inexact, a truncated (round toward zero) result is returned. If a converted result is larger than the maximum signed doubleword integer, the floating-point invalid exception is raised, and if this exception is masked, the indefinite integer value (80000000H) is returned.")]),t._v(" "),a("h2",{attrs:{id:"operation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#operation"}},[t._v("#")]),t._v(" Operation")]),t._v(" "),a("div",{staticClass:"language-c line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[t._v("Destination"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v(".31")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ConvertFloatToIntegerTruncate")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Source"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v(".31")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("h2",{attrs:{id:"simd-floating-point-exceptions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#simd-floating-point-exceptions"}},[t._v("#")]),t._v(" SIMD Floating-Point Exceptions")]),t._v(" "),a("p",[t._v("Invalid, Precision.")]),t._v(" "),a("h2",{attrs:{id:"protected-mode-exceptions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#protected-mode-exceptions"}},[t._v("#")]),t._v(" Protected Mode Exceptions")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[a("a",{attrs:{href:""}})]),t._v(" "),a("th")])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("#GP(0)")]),t._v(" "),a("td",[t._v("For an illegal memory operand effective address in the CS, DS, ES, FS or GS segments.")])]),t._v(" "),a("tr",[a("td",[t._v("#GP(0)")]),t._v(" "),a("td",[t._v("For an illegal memory operand effective address in the CS, DS, ES, FS or GS segments.")])]),t._v(" "),a("tr",[a("td",[t._v("#SS(0)")]),t._v(" "),a("td",[t._v("For an illegal address in the SS segment.")])]),t._v(" "),a("tr",[a("td",[t._v("#PF(fault-code)")]),t._v(" "),a("td",[t._v("For a page fault.")])]),t._v(" "),a("tr",[a("td",[t._v("#NM")]),t._v(" "),a("td",[t._v("If TS in CR0 is set.")])]),t._v(" "),a("tr",[a("td",[t._v("#XM")]),t._v(" "),a("td",[t._v("If an unmasked SIMD floating-point exception and OSXMMEXCPT in CR4 is 1.")])]),t._v(" "),a("tr",[a("td",[t._v("#UD")]),t._v(" "),a("td",[t._v("If an unmasked SIMD floating-point exception and OSXMMEXCPT in CR4 is 0. If EM in CR0 is set. If OSFXSR in CR4 is 0. If CPUID feature flag SSE is 0.")])])])]),t._v(" "),a("h2",{attrs:{id:"real-address-mode-exceptions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#real-address-mode-exceptions"}},[t._v("#")]),t._v(" Real-Address Mode Exceptions")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[a("a",{attrs:{href:""}})]),t._v(" "),a("th")])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("#GP(0)")]),t._v(" "),a("td",[t._v("If any part of the operand lies outside the effective address space from 0 to FFFFH.")])]),t._v(" "),a("tr",[a("td",[t._v("#GP(0)")]),t._v(" "),a("td",[t._v("If any part of the operand lies outside the effective address space from 0 to FFFFH.")])]),t._v(" "),a("tr",[a("td",[t._v("#NM")]),t._v(" "),a("td",[t._v("If TS in CR0 is set.")])]),t._v(" "),a("tr",[a("td",[t._v("#XM")]),t._v(" "),a("td",[t._v("If an unmasked SIMD floating-point exception and OSXMMEXCPT in CR4 is 1.")])])])]),t._v(" "),a("h2",{attrs:{id:"virtual-8086-mode-exceptions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#virtual-8086-mode-exceptions"}},[t._v("#")]),t._v(" Virtual-8086 Mode Exceptions")]),t._v(" "),a("p",[t._v("Same exceptions as in Real Address Mode")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[a("a",{attrs:{href:""}})]),t._v(" "),a("th")])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("#PF(fault-code)")]),t._v(" "),a("td",[t._v("For a page fault.")])]),t._v(" "),a("tr",[a("td",[t._v("#PF(fault-code)")]),t._v(" "),a("td",[t._v("For a page fault.")])])])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Instruction")]),t._v(" "),a("th",[t._v("Latency")]),t._v(" "),a("th",[t._v("Throughput")]),t._v(" "),a("th",[t._v("Execution Unit")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("CPUID")]),t._v(" "),a("td",[t._v("0F3n/0F2n/069n")]),t._v(" "),a("td",[t._v("0F3n/0F2n/069n")]),t._v(" "),a("td",[t._v("0F2n")])]),t._v(" "),a("tr",[a("td",[t._v("CVTTSS2SI r32, xmm")]),t._v(" "),a("td",[t._v("9/8/4")]),t._v(" "),a("td",[t._v("2/2/1")]),t._v(" "),a("td",[t._v("FP_ADD FP_MISC")])])])])])}),[],!1,null,null,null);e.default=r.exports}}]);