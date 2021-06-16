(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{387:function(t,e,a){"use strict";a.r(e);var s=a(42),r=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"btc"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#btc"}},[t._v("#")]),t._v(" BTC")]),t._v(" "),a("h2",{attrs:{id:"bit-test-and-complement"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#bit-test-and-complement"}},[t._v("#")]),t._v(" Bit Test and Complement")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Opcode")]),t._v(" "),a("th",[t._v("Mnemonic")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("0F BB")]),t._v(" "),a("td",[t._v("BTC r/m16, r16")]),t._v(" "),a("td",[t._v("Store selected bit in CF flag and complement")])]),t._v(" "),a("tr",[a("td",[t._v("0F BB")]),t._v(" "),a("td",[t._v("BTC r/m32, r32")]),t._v(" "),a("td",[t._v("Store selected bit in CF flag and complement")])]),t._v(" "),a("tr",[a("td",[t._v("0F BA /7 ib")]),t._v(" "),a("td",[t._v("BTC r/m16, imm8")]),t._v(" "),a("td",[t._v("Store selected bit in CF flag and complement")])]),t._v(" "),a("tr",[a("td",[t._v("0F BA /7 ib")]),t._v(" "),a("td",[t._v("BTC r/m32, imm8")]),t._v(" "),a("td",[t._v("Store selected bit in CF flag and complement")])])])]),t._v(" "),a("h2",{attrs:{id:"description"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[t._v("#")]),t._v(" Description")]),t._v(" "),a("p",[t._v("Selects the bit in a bit string (specified with the first operand, called the bit base) at the bitposition designated by the bit offset operand (second operand), stores the value of the bit in the CF flag, and complements the selected bit in the bit string. The bit base operand can be a register or a memory location; the bit offset operand can be a register or an immediate value. If the bit base operand specifies a register, the instruction takes the modulo 16 or 32 (depending on the register size) of the bit offset operand, allowing any bit position to be selected in a 16- or 32-bit register, respectively. If the bit base operand specifies a memory location, it represents the address of the byte in memory that contains the bit base (bit 0 of the specified byte) of the bit string. The offset operand then selects a bit position within the range -2^31 to 2^31 - 1 for a register offset and 0 to 31 for an immediate offset.")]),t._v(" "),a("p",[t._v('Some assemblers support immediate bit offsets larger than 31 by using the immediate bit offset field in combination with the displacement field of the memory operand. See "BT-Bit Test" in this chapter for more information on this addressing mechanism.')]),t._v(" "),a("p",[t._v("This instruction can be used with a LOCK prefix to allow the instruction to be executed atomically.")]),t._v(" "),a("h2",{attrs:{id:"operation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#operation"}},[t._v("#")]),t._v(" Operation")]),t._v(" "),a("div",{staticClass:"language-c line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[t._v("CF "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Bit")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("BitBase"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" BitOffset"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Bit")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("BitBase"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" BitOffset"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("~")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Bit")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("BitBase"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" BitOffset"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("h2",{attrs:{id:"flags-affected"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#flags-affected"}},[t._v("#")]),t._v(" Flags affected")]),t._v(" "),a("p",[t._v("The CF flag contains the value of the selected bit before it is complemented. The OF, SF, ZF, AF, and PF flags are undefined.")]),t._v(" "),a("h2",{attrs:{id:"protected-mode-exceptions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#protected-mode-exceptions"}},[t._v("#")]),t._v(" Protected Mode Exceptions")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[a("a",{attrs:{href:""}})]),t._v(" "),a("th")])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("#GP(0)")]),t._v(" "),a("td",[t._v("If the destination operand points to a non-writable segment. If a memory operand effective address is outside the CS, DS, ES, FS, or GS segment limit. If the DS, ES, FS, or GS register contains a null segment selector.")])]),t._v(" "),a("tr",[a("td",[t._v("#GP(0)")]),t._v(" "),a("td",[t._v("If the destination operand points to a non-writable segment. If a memory operand effective address is outside the CS, DS, ES, FS, or GS segment limit. If the DS, ES, FS, or GS register contains a null segment selector.")])]),t._v(" "),a("tr",[a("td",[t._v("#SS(0)")]),t._v(" "),a("td",[t._v("If a memory operand effective address is outside the SS segment limit.")])]),t._v(" "),a("tr",[a("td",[t._v("#PF(fault-code)")]),t._v(" "),a("td",[t._v("If a page fault occurs. 3-60")])])])]),t._v(" "),a("h2",{attrs:{id:"real-address-mode-exceptions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#real-address-mode-exceptions"}},[t._v("#")]),t._v(" Real-Address Mode Exceptions")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[a("a",{attrs:{href:""}})]),t._v(" "),a("th")])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("#GP")]),t._v(" "),a("td",[t._v("If a memory operand effective address is outside the CS, DS, ES, FS, or GS segment limit.")])]),t._v(" "),a("tr",[a("td",[t._v("#GP")]),t._v(" "),a("td",[t._v("If a memory operand effective address is outside the CS, DS, ES, FS, or GS segment limit.")])])])]),t._v(" "),a("h2",{attrs:{id:"virtual-8086-mode-exceptions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#virtual-8086-mode-exceptions"}},[t._v("#")]),t._v(" Virtual-8086 Mode Exceptions")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[a("a",{attrs:{href:""}})]),t._v(" "),a("th")])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("#GP(0)")]),t._v(" "),a("td",[t._v("If a memory operand effective address is outside the CS, DS, ES, FS, or GS segment limit.")])]),t._v(" "),a("tr",[a("td",[t._v("#GP(0)")]),t._v(" "),a("td",[t._v("If a memory operand effective address is outside the CS, DS, ES, FS, or GS segment limit.")])]),t._v(" "),a("tr",[a("td",[t._v("#SS(0)")]),t._v(" "),a("td",[t._v("If a memory operand effective address is outside the SS segment limit.")])]),t._v(" "),a("tr",[a("td",[t._v("#PF(fault-code)")]),t._v(" "),a("td",[t._v("If a page fault occurs.")])])])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Instruction")]),t._v(" "),a("th",[t._v("Latency")]),t._v(" "),a("th",[t._v("Throughput")]),t._v(" "),a("th",[t._v("Execution Unit")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("CPUID")]),t._v(" "),a("td",[t._v("0F3n/0F2n/069n")]),t._v(" "),a("td",[t._v("0F3n/0F2n/069n")]),t._v(" "),a("td",[t._v("0F2n")])]),t._v(" "),a("tr",[a("td",[t._v("BTC")]),t._v(" "),a("td",[t._v("8-9")]),t._v(" "),a("td",[t._v("1")]),t._v(" "),a("td",[t._v("-")])])])])])}),[],!1,null,null,null);e.default=r.exports}}]);