(window.webpackJsonp=window.webpackJsonp||[]).push([[302],{656:function(e,t,r){"use strict";r.r(t);var s=r(42),a=Object(s.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"sldt"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#sldt"}},[e._v("#")]),e._v(" SLDT")]),e._v(" "),r("h2",{attrs:{id:"store-local-descriptor-table-register"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#store-local-descriptor-table-register"}},[e._v("#")]),e._v(" Store Local Descriptor Table Register")]),e._v(" "),r("table",[r("thead",[r("tr",[r("th",[e._v("Opcode")]),e._v(" "),r("th",[e._v("Mnemonic")]),e._v(" "),r("th",[e._v("Description")])])]),e._v(" "),r("tbody",[r("tr",[r("td",[e._v("0F 00 /0")]),e._v(" "),r("td",[e._v("SLDT r/m16")]),e._v(" "),r("td",[e._v("Store segment selector from LDTR in r/m16.")])])])]),e._v(" "),r("h2",{attrs:{id:"description"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[e._v("#")]),e._v(" Description")]),e._v(" "),r("p",[e._v("Stores the segment selector from the local descriptor table register (LDTR) in the destination operand. The destination operand can be a general-purpose register or a memory location. The segment selector stored with this instruction points to the segment descriptor (located in the GDT) for the current LDT. This instruction can only be executed in protected mode.")]),e._v(" "),r("p",[e._v("When the destination operand is a 32-bit register, the 16-bit segment selector is copied into the lower-order 16 bits of the register. The high-order 16 bits of the register are cleared for the Pentium 4, Intel Xeon, and P6 family processors and are undefined for Pentium, Intel486, and Intel386 processors. When the destination operand is a memory location, the segment selector is written to memory as a 16-bit quantity, regardless of the operand size.")]),e._v(" "),r("p",[e._v("The SLDT instruction is only useful in operating-system software; however, it can be used in application programs.")]),e._v(" "),r("h2",{attrs:{id:"operation"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#operation"}},[e._v("#")]),e._v(" Operation")]),e._v(" "),r("div",{staticClass:"language-c line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-c"}},[r("code",[e._v("Destination "),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" LDTR"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("SegmentSelector"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\n")])]),e._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[e._v("1")]),r("br"),r("span",{staticClass:"line-number"},[e._v("2")]),r("br")])]),r("h2",{attrs:{id:"flags-affected"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#flags-affected"}},[e._v("#")]),e._v(" Flags affected")]),e._v(" "),r("p",[e._v("None.")])])}),[],!1,null,null,null);t.default=a.exports}}]);