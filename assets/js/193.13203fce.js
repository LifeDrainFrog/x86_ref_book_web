(window.webpackJsonp=window.webpackJsonp||[]).push([[193],{547:function(t,e,a){"use strict";a.r(e);var s=a(42),r=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"movhpd"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#movhpd"}},[t._v("#")]),t._v(" MOVHPD")]),t._v(" "),a("h2",{attrs:{id:"move-high-packed-double-precision-floating-point-value"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#move-high-packed-double-precision-floating-point-value"}},[t._v("#")]),t._v(" Move High Packed Double-Precision Floating-Point Value")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Opcode")]),t._v(" "),a("th",[t._v("Mnemonic")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("66 0F 16 /r")]),t._v(" "),a("td",[t._v("MOVHPD xmm, m64")]),t._v(" "),a("td",[t._v("Move double-precision floating-point value from m64 to high quadword of xmm.")])]),t._v(" "),a("tr",[a("td",[t._v("66 0F 17 /r")]),t._v(" "),a("td",[t._v("MOVHPD m64, xmm")]),t._v(" "),a("td",[t._v("Move double-precision floating-point value from high quadword of xmm to m64.")])])])]),t._v(" "),a("h2",{attrs:{id:"description"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[t._v("#")]),t._v(" Description")]),t._v(" "),a("p",[t._v("Moves a double-precision floating-point value from the source operand (second operand) to the destination operand (first operand). The source and destination operands can be an XMM register or a 64-bit memory location. This instruction allows a double-precision floating-point value to be moved to and from the high quadword of an XMM register and memory. It cannot be used for register to register or memory to memory moves. When the destination operand is an XMM register, the low quadword of the register remains unchanged.")]),t._v(" "),a("h2",{attrs:{id:"operation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#operation"}},[t._v("#")]),t._v(" Operation")]),t._v(" "),a("div",{staticClass:"language-c line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//MOVHPD instruction for memory to XMM move:")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\nDestination"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("64.")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v(".127")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Source"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//Destination[0..63] unchanged")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//MOVHPD instruction for XMM to memory move:")]),t._v("\nDestination "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Source"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("64.")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v(".127")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br")])]),a("h2",{attrs:{id:"simd-floating-point-exceptions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#simd-floating-point-exceptions"}},[t._v("#")]),t._v(" SIMD Floating-Point Exceptions")]),t._v(" "),a("p",[t._v("None.")]),t._v(" "),a("h2",{attrs:{id:"protected-mode-exceptions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#protected-mode-exceptions"}},[t._v("#")]),t._v(" Protected Mode Exceptions")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[a("a",{attrs:{href:""}})]),t._v(" "),a("th")])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("#GP(0)")]),t._v(" "),a("td",[t._v("For an illegal memory operand effective address in the CS, DS, ES, FS or GS segments.")])]),t._v(" "),a("tr",[a("td",[t._v("#GP(0)")]),t._v(" "),a("td",[t._v("For an illegal memory operand effective address in the CS, DS, ES, FS or GS segments.")])]),t._v(" "),a("tr",[a("td",[t._v("#SS(0)")]),t._v(" "),a("td",[t._v("For an illegal address in the SS segment.")])]),t._v(" "),a("tr",[a("td",[t._v("#PF(fault-code)")]),t._v(" "),a("td",[t._v("For a page fault.")])]),t._v(" "),a("tr",[a("td",[t._v("#NM")]),t._v(" "),a("td",[t._v("If TS in CR0 is set.")])]),t._v(" "),a("tr",[a("td",[t._v("#UD")]),t._v(" "),a("td",[t._v("If EM in CR0 is set. If OSFXSR in CR4 is 0. If CPUID feature flag SSE2 is 0.")])])])]),t._v(" "),a("h2",{attrs:{id:"real-address-mode-exceptions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#real-address-mode-exceptions"}},[t._v("#")]),t._v(" Real-Address Mode Exceptions")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[a("a",{attrs:{href:""}})]),t._v(" "),a("th")])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("#GP(0)")]),t._v(" "),a("td",[t._v("If any part of the operand lies outside the effective address space from 0 to FFFFH.")])]),t._v(" "),a("tr",[a("td",[t._v("#GP(0)")]),t._v(" "),a("td",[t._v("If any part of the operand lies outside the effective address space from 0 to FFFFH.")])]),t._v(" "),a("tr",[a("td",[t._v("#NM")]),t._v(" "),a("td",[t._v("If TS in CR0 is set.")])])])]),t._v(" "),a("h2",{attrs:{id:"virtual-8086-mode-exceptions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#virtual-8086-mode-exceptions"}},[t._v("#")]),t._v(" Virtual-8086 Mode Exceptions")]),t._v(" "),a("p",[t._v("Same exceptions as in Real Address Mode")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[a("a",{attrs:{href:""}})]),t._v(" "),a("th")])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("#PF(fault-code)")]),t._v(" "),a("td",[t._v("For a page fault.")])]),t._v(" "),a("tr",[a("td",[t._v("#PF(fault-code)")]),t._v(" "),a("td",[t._v("For a page fault.")])])])])])}),[],!1,null,null,null);e.default=r.exports}}]);