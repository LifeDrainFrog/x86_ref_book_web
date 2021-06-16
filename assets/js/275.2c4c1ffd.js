(window.webpackJsonp=window.webpackJsonp||[]).push([[275],{629:function(t,s,e){"use strict";e.r(s);var a=e(42),r=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"push"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#push"}},[t._v("#")]),t._v(" PUSH")]),t._v(" "),e("h2",{attrs:{id:"push-word-or-doubleword-onto-the-stack"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#push-word-or-doubleword-onto-the-stack"}},[t._v("#")]),t._v(" Push Word or Doubleword Onto the Stack")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Opcode")]),t._v(" "),e("th",[t._v("Mnemonic")]),t._v(" "),e("th",[t._v("Description")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("FF /6")]),t._v(" "),e("td",[t._v("PUSH r/m16")]),t._v(" "),e("td",[t._v("Push r/m16.")])]),t._v(" "),e("tr",[e("td",[t._v("FF /6")]),t._v(" "),e("td",[t._v("PUSH r/m32")]),t._v(" "),e("td",[t._v("Push r/m32.")])]),t._v(" "),e("tr",[e("td",[t._v("50+rw")]),t._v(" "),e("td",[t._v("PUSH r16")]),t._v(" "),e("td",[t._v("Push r16.")])]),t._v(" "),e("tr",[e("td",[t._v("50+rd")]),t._v(" "),e("td",[t._v("PUSH r32")]),t._v(" "),e("td",[t._v("Push r32.")])]),t._v(" "),e("tr",[e("td",[t._v("6A")]),t._v(" "),e("td",[t._v("PUSH imm8")]),t._v(" "),e("td",[t._v("Push imm8.")])]),t._v(" "),e("tr",[e("td",[t._v("68")]),t._v(" "),e("td",[t._v("PUSH imm16")]),t._v(" "),e("td",[t._v("Push imm16.")])]),t._v(" "),e("tr",[e("td",[t._v("68")]),t._v(" "),e("td",[t._v("PUSH imm32")]),t._v(" "),e("td",[t._v("Push imm32.")])]),t._v(" "),e("tr",[e("td",[t._v("0E")]),t._v(" "),e("td",[t._v("PUSH CS")]),t._v(" "),e("td",[t._v("Push CS.")])]),t._v(" "),e("tr",[e("td",[t._v("16")]),t._v(" "),e("td",[t._v("PUSH SS")]),t._v(" "),e("td",[t._v("Push SS.")])]),t._v(" "),e("tr",[e("td",[t._v("1E")]),t._v(" "),e("td",[t._v("PUSH DS")]),t._v(" "),e("td",[t._v("Push DS.")])]),t._v(" "),e("tr",[e("td",[t._v("06")]),t._v(" "),e("td",[t._v("PUSH ES")]),t._v(" "),e("td",[t._v("Push ES.")])]),t._v(" "),e("tr",[e("td",[t._v("0F A0")]),t._v(" "),e("td",[t._v("PUSH FS")]),t._v(" "),e("td",[t._v("Push FS.")])]),t._v(" "),e("tr",[e("td",[t._v("0F A8")]),t._v(" "),e("td",[t._v("PUSH GS")]),t._v(" "),e("td",[t._v("Push GS.")])])])]),t._v(" "),e("h2",{attrs:{id:"description"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[t._v("#")]),t._v(" Description")]),t._v(" "),e("p",[t._v("Decrements the stack pointer and then stores the source operand on the top of the stack. The address-size attribute of the stack segment determines the stack pointer size (16 bits or 32 bits), and the operand-size attribute of the current code segment determines the amount the stack pointer is decremented (2 bytes or 4 bytes). For example, if these address- and operand-size attributes are 32, the 32-bit ESP register (stack pointer) is decremented by 4 and, if they are 16, the 16-bit SP register is decremented by 2. (The B flag in the stack segment's segment descriptor determines the stack's address-size attribute, and the D flag in the current code segment's segment descriptor, along with prefixes, determines the operand-size attribute and also the address-size attribute of the source operand.) Pushing a 16-bit operand when the stack addresssize attribute is 32 can result in a misaligned the stack pointer (that is, the stack pointer is not aligned on a doubleword boundary).")]),t._v(" "),e("p",[t._v("The PUSH ESP instruction pushes the value of the ESP register as it existed before the instruction was executed. Thus, if a PUSH instruction uses a memory operand in which the ESP register is used as a base register for computing the operand address, the effective address of the operand is computed before the ESP register is decremented.")]),t._v(" "),e("p",[t._v("In the real-address mode, if the ESP or SP register is 1 when the PUSH instruction is executed, the processor shuts down due to a lack of stack space. No exception is generated to indicate this condition.")]),t._v(" "),e("h2",{attrs:{id:"operation"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#operation"}},[t._v("#")]),t._v(" Operation")]),t._v(" "),e("div",{staticClass:"language-c line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-c"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("StackAddressSize "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("32")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("OperandSize "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("32")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\tESP "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" ESP "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\tSS"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("ESP "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Source "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//push doubleword")]),t._v("\n\t"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//OperandSize == 16")]),t._v("\n\t\tESP "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" ESP "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\tSS"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("ESP "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Source"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//push word")]),t._v("\n\t"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//StackAddressSize == 16")]),t._v("\n\t"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("OperandSize "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("16")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\tSP "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" SP "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\tSS"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("ESP "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Source "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//push word")]),t._v("\n\t"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//OperandSize == 32")]),t._v("\n\t\tSP "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" SP "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\tSS"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("ESP "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Source"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//push doubleword")]),t._v("\n\t"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br"),e("span",{staticClass:"line-number"},[t._v("8")]),e("br"),e("span",{staticClass:"line-number"},[t._v("9")]),e("br"),e("span",{staticClass:"line-number"},[t._v("10")]),e("br"),e("span",{staticClass:"line-number"},[t._v("11")]),e("br"),e("span",{staticClass:"line-number"},[t._v("12")]),e("br"),e("span",{staticClass:"line-number"},[t._v("13")]),e("br"),e("span",{staticClass:"line-number"},[t._v("14")]),e("br"),e("span",{staticClass:"line-number"},[t._v("15")]),e("br"),e("span",{staticClass:"line-number"},[t._v("16")]),e("br"),e("span",{staticClass:"line-number"},[t._v("17")]),e("br"),e("span",{staticClass:"line-number"},[t._v("18")]),e("br"),e("span",{staticClass:"line-number"},[t._v("19")]),e("br"),e("span",{staticClass:"line-number"},[t._v("20")]),e("br"),e("span",{staticClass:"line-number"},[t._v("21")]),e("br")])]),e("h2",{attrs:{id:"flags-affected"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#flags-affected"}},[t._v("#")]),t._v(" Flags affected")]),t._v(" "),e("p",[t._v("None.")]),t._v(" "),e("h2",{attrs:{id:"ia-32-architecture-compatibility"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ia-32-architecture-compatibility"}},[t._v("#")]),t._v(" IA-32 Architecture Compatibility")]),t._v(" "),e("p",[t._v("For IA-32 processors from the Intel 286 on, the PUSH ESP instruction pushes the value of the ESP register as it existed before the instruction was executed. (This is also true in the realaddress and virtual-8086 modes.) For the Intel 8086 processor, the PUSH SP instruction pushes the new value of the SP register (that is the value after it has been decremented by 2).")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Instruction")]),t._v(" "),e("th",[t._v("Latency")]),t._v(" "),e("th",[t._v("Throughput")]),t._v(" "),e("th",[t._v("Execution Unit")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("CPUID")]),t._v(" "),e("td",[t._v("0F3n/0F2n/069n")]),t._v(" "),e("td",[t._v("0F3n/0F2n/069n")]),t._v(" "),e("td",[t._v("0F2n")])]),t._v(" "),e("tr",[e("td",[t._v("PUSH")]),t._v(" "),e("td",[t._v("1.5")]),t._v(" "),e("td",[t._v("1")]),t._v(" "),e("td",[t._v("MEM_STORE ALU")])])])])])}),[],!1,null,null,null);s.default=r.exports}}]);