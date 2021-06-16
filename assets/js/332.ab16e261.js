(window.webpackJsonp=window.webpackJsonp||[]).push([[332],{686:function(e,t,r){"use strict";r.r(t);var i=r(42),s=Object(i.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"wrmsr"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#wrmsr"}},[e._v("#")]),e._v(" WRMSR")]),e._v(" "),r("h2",{attrs:{id:"write-to-model-specific-register"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#write-to-model-specific-register"}},[e._v("#")]),e._v(" Write to Model Specific Register")]),e._v(" "),r("table",[r("thead",[r("tr",[r("th",[e._v("Opcode")]),e._v(" "),r("th",[e._v("Mnemonic")]),e._v(" "),r("th",[e._v("Description")])])]),e._v(" "),r("tbody",[r("tr",[r("td",[e._v("0F 30")]),e._v(" "),r("td",[e._v("WRMSR")]),e._v(" "),r("td",[e._v("Write the value in EDX:EAX to MSR specified by ECX.")])])])]),e._v(" "),r("h2",{attrs:{id:"description"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[e._v("#")]),e._v(" Description")]),e._v(" "),r("p",[e._v("Writes the contents of registers EDX:EAX into the 64-bit model specific register (MSR) specified in the ECX register. The input value loaded into the ECX register is the address of the MSR to be written to. The contents of the EDX register are copied to high-order 32 bits of the selected MSR and the contents of the EAX register are copied to low-order 32 bits of the MSR. Undefined or reserved bits in an MSR should be set to the values previously read.")]),e._v(" "),r("p",[e._v("This instruction must be executed at privilege level 0 or in real-address mode; otherwise, a general protection exception #GP(0) will be generated. Specifying a reserved or unimplemented MSR address in ECX will also cause a general protection exception. The processor may also generate a general protection exception if software attempts to write to bits in an MSR marked as Reserved.")]),e._v(" "),r("p",[e._v('When the WRMSR instruction is used to write to an MTRR, the TLBs are invalidated, including the global entries (see "Translation Lookaside Buffers (TLBs)" in Chapter 3 of the IA-32 Intel Architecture Software Developer\'s Manual, Volume 3).')]),e._v(" "),r("p",[e._v("The MSRs control functions for testability, execution tracing, performance-monitoring and machine check errors. Appendix B, Model-Specific Registers (MSRs), in the IA-32 Intel Architecture Software Developer's Manual, Volume 3, lists all the MSRs that can be read with this instruction and their addresses. Note that each processor family has its own set of MSRs.")]),e._v(" "),r("p",[e._v('The WRMSR instruction is a serializing instruction (see "Serializing Instructions" in Chapter 8 of the IA-32 Intel Architecture Software Developer\'s Manual, Volume 3).')]),e._v(" "),r("p",[e._v("The CPUID instruction should be used to determine whether MSRs are supported (EDX[5]=1) before using this instruction.")]),e._v(" "),r("h2",{attrs:{id:"operation"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#operation"}},[e._v("#")]),e._v(" Operation")]),e._v(" "),r("div",{staticClass:"language-c line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-c"}},[r("code",[e._v("MSR"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("ECX"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" EDX"),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v("EAX"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\n")])]),e._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[e._v("1")]),r("br"),r("span",{staticClass:"line-number"},[e._v("2")]),r("br")])]),r("h2",{attrs:{id:"ia-32-architecture-compatibility"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#ia-32-architecture-compatibility"}},[e._v("#")]),e._v(" IA-32 Architecture Compatibility")]),e._v(" "),r("p",[e._v("The MSRs and the ability to read them with the WRMSR instruction were introduced into the IA-32 architecture with the Pentium processor. Execution of this instruction by an IA-32 processor earlier than the Pentium processor results in an invalid opcode exception #UD.")])])}),[],!1,null,null,null);t.default=s.exports}}]);