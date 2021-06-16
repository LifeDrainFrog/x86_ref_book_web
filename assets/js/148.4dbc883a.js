(window.webpackJsonp=window.webpackJsonp||[]).push([[148],{502:function(t,e,r){"use strict";r.r(e);var a=r(42),s=Object(a.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"inc"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#inc"}},[t._v("#")]),t._v(" INC")]),t._v(" "),r("h2",{attrs:{id:"increment-by-1"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#increment-by-1"}},[t._v("#")]),t._v(" Increment by 1")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("Opcode")]),t._v(" "),r("th",[t._v("Mnemonic")]),t._v(" "),r("th",[t._v("Description")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("FE /0")]),t._v(" "),r("td",[t._v("INC r/m8")]),t._v(" "),r("td",[t._v("Increment r/m byte by 1.")])]),t._v(" "),r("tr",[r("td",[t._v("FF /0")]),t._v(" "),r("td",[t._v("INC r/m16")]),t._v(" "),r("td",[t._v("Increment r/m word by 1.")])]),t._v(" "),r("tr",[r("td",[t._v("FF /0")]),t._v(" "),r("td",[t._v("INC r/m32")]),t._v(" "),r("td",[t._v("Increment r/m doubleword by 1.")])]),t._v(" "),r("tr",[r("td",[t._v("40+ rw")]),t._v(" "),r("td",[t._v("INC r16")]),t._v(" "),r("td",[t._v("Increment word register by 1.")])]),t._v(" "),r("tr",[r("td",[t._v("40+ rd")]),t._v(" "),r("td",[t._v("INC r32")]),t._v(" "),r("td",[t._v("Increment doubleword register by 1.")])])])]),t._v(" "),r("h2",{attrs:{id:"description"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[t._v("#")]),t._v(" Description")]),t._v(" "),r("p",[t._v("Adds 1 to the destination operand, while preserving the state of the CF flag. The destination operand can be a register or a memory location. This instruction allows a loop counter to be updated without disturbing the CF flag. (Use a ADD instruction with an immediate operand of 1 to perform an increment operation that does updates the CF flag.) This instruction can be used with a LOCK prefix to allow the instruction to be executed atomically.")]),t._v(" "),r("h2",{attrs:{id:"operation"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#operation"}},[t._v("#")]),t._v(" Operation")]),t._v(" "),r("div",{staticClass:"language-c line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-c"}},[r("code",[t._v("Destination "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Destination "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])]),t._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[t._v("1")]),r("br"),r("span",{staticClass:"line-number"},[t._v("2")]),r("br")])]),r("h2",{attrs:{id:"flags-affected"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#flags-affected"}},[t._v("#")]),t._v(" Flags affected")]),t._v(" "),r("p",[t._v("The CF flag is not affected. The OF, SF, ZF, AF, and PF flags are set according to the result.")]),t._v(" "),r("h2",{attrs:{id:"protected-mode-exceptions"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#protected-mode-exceptions"}},[t._v("#")]),t._v(" Protected Mode Exceptions")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[r("a",{attrs:{href:""}})]),t._v(" "),r("th")])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("#GP(0)")]),t._v(" "),r("td",[t._v("If the destination operand is located in a non-writable segment. If a memory operand effective address is outside the CS, DS, ES, FS, or GS segment limit. If the DS, ES, FS, or GS register is used to access memory and it contains a null segment selector.")])]),t._v(" "),r("tr",[r("td",[t._v("#GP(0)")]),t._v(" "),r("td",[t._v("If the destination operand is located in a non-writable segment. If a memory operand effective address is outside the CS, DS, ES, FS, or GS segment limit. If the DS, ES, FS, or GS register is used to access memory and it contains a null segment selector.")])]),t._v(" "),r("tr",[r("td",[t._v("#SS(0)")]),t._v(" "),r("td",[t._v("If a memory operand effective address is outside the SS segment limit.")])]),t._v(" "),r("tr",[r("td",[t._v("#PF(fault-code)")]),t._v(" "),r("td",[t._v("If a page fault occurs.")])])])]),t._v(" "),r("h2",{attrs:{id:"real-address-mode-exceptions"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#real-address-mode-exceptions"}},[t._v("#")]),t._v(" Real-Address Mode Exceptions")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[r("a",{attrs:{href:""}})]),t._v(" "),r("th")])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("#GP")]),t._v(" "),r("td",[t._v("If a memory operand effective address is outside the CS, DS, ES, FS, or GS segment limit.")])]),t._v(" "),r("tr",[r("td",[t._v("#GP")]),t._v(" "),r("td",[t._v("If a memory operand effective address is outside the CS, DS, ES, FS, or GS segment limit.")])])])]),t._v(" "),r("h2",{attrs:{id:"virtual-8086-mode-exceptions"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#virtual-8086-mode-exceptions"}},[t._v("#")]),t._v(" Virtual-8086 Mode Exceptions")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[r("a",{attrs:{href:""}})]),t._v(" "),r("th")])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("#GP(0)")]),t._v(" "),r("td",[t._v("If a memory operand effective address is outside the CS, DS, ES, FS, or GS segment limit.")])]),t._v(" "),r("tr",[r("td",[t._v("#GP(0)")]),t._v(" "),r("td",[t._v("If a memory operand effective address is outside the CS, DS, ES, FS, or GS segment limit.")])]),t._v(" "),r("tr",[r("td",[t._v("#SS(0)")]),t._v(" "),r("td",[t._v("If a memory operand effective address is outside the SS segment limit.")])]),t._v(" "),r("tr",[r("td",[t._v("#PF(fault-code)")]),t._v(" "),r("td",[t._v("If a page fault occurs.")])])])]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("Instruction")]),t._v(" "),r("th",[t._v("Latency")]),t._v(" "),r("th",[t._v("Throughput")]),t._v(" "),r("th",[t._v("Execution Unit")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("CPUID")]),t._v(" "),r("td",[t._v("0F3n/0F2n")]),t._v(" "),r("td",[t._v("0F3n/0F2n")]),t._v(" "),r("td",[t._v("0F2n")])]),t._v(" "),r("tr",[r("td",[t._v("INC")]),t._v(" "),r("td",[t._v("1/1")]),t._v(" "),r("td",[t._v("0.5/0.5")]),t._v(" "),r("td",[t._v("ALU")])])])])])}),[],!1,null,null,null);e.default=s.exports}}]);