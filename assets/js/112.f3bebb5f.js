(window.webpackJsonp=window.webpackJsonp||[]).push([[112],{464:function(t,e,v){"use strict";v.r(e);var r=v(42),_=Object(r.a)({},(function(){var t=this,e=t.$createElement,v=t._self._c||e;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"fmul-fmulp-fimul"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#fmul-fmulp-fimul"}},[t._v("#")]),t._v(" FMUL/FMULP/FIMUL")]),t._v(" "),v("h2",{attrs:{id:"multiply"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#multiply"}},[t._v("#")]),t._v(" Multiply")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("Opcode")]),t._v(" "),v("th",[t._v("Mnemonic")]),t._v(" "),v("th",[t._v("Description")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("D8 /1")]),t._v(" "),v("td",[t._v("FMUL m32fp")]),t._v(" "),v("td",[t._v("Multiply ST(0) by m32fp and store result in ST(0)")])]),t._v(" "),v("tr",[v("td",[t._v("DC /1")]),t._v(" "),v("td",[t._v("FMUL m64fp")]),t._v(" "),v("td",[t._v("Multiply ST(0) by m64fp and store result in ST(0)")])]),t._v(" "),v("tr",[v("td",[t._v("D8 C8+i")]),t._v(" "),v("td",[t._v("FMUL ST(0), ST(i)")]),t._v(" "),v("td",[t._v("Multiply ST(0) by ST(i) and store result in ST(0)")])]),t._v(" "),v("tr",[v("td",[t._v("DC C8+i")]),t._v(" "),v("td",[t._v("FMUL ST(i), ST(0)")]),t._v(" "),v("td",[t._v("Multiply ST(i) by ST(0) and store result in ST(i)")])]),t._v(" "),v("tr",[v("td",[t._v("DE C8+i")]),t._v(" "),v("td",[t._v("FMULP ST(i), ST(0)")]),t._v(" "),v("td",[t._v("Multiply ST(i) by ST(0), store result in ST(i), and pop the register stack")])]),t._v(" "),v("tr",[v("td",[t._v("DE C9")]),t._v(" "),v("td",[t._v("FMULP")]),t._v(" "),v("td",[t._v("Multiply ST(1) by ST(0), store result in ST(1), and pop the register stack")])]),t._v(" "),v("tr",[v("td",[t._v("DA /1")]),t._v(" "),v("td",[t._v("FIMUL m32int")]),t._v(" "),v("td",[t._v("Multiply ST(0) by m32int and store result in ST(0)")])]),t._v(" "),v("tr",[v("td",[t._v("DE /1")]),t._v(" "),v("td",[t._v("FIMUL m16int")]),t._v(" "),v("td",[t._v("Multiply ST(0) by m16int and store result in ST(0)")])])])]),t._v(" "),v("h2",{attrs:{id:"description"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[t._v("#")]),t._v(" Description")]),t._v(" "),v("p",[t._v("Multiplies the destination and source operands and stores the product in the destination location.")]),t._v(" "),v("p",[t._v("The destination operand is always an FPU data register; the source operand can be an FPU data register or a memory location. Source operands in memory can be in single-precision or doubleprecision floating-point format or in word or doubleword integer format.")]),t._v(" "),v("p",[t._v("The no-operand version of the instruction multiplies the contents of the ST(1) register by the contents of the ST(0) register and stores the product in the ST(1) register. The one-operand version multiplies the contents of the ST(0) register by the contents of a memory location (either a floating point or an integer value) and stores the product in the ST(0) register. The two-operand version, multiplies the contents of the ST(0) register by the contents of the ST(i) register, or vice versa, with the result being stored in the register specified with the first operand (the destination operand).")]),t._v(" "),v("p",[t._v("The FMULP instructions perform the additional operation of popping the FPU register stack after storing the product. To pop the register stack, the processor marks the ST(0) register as empty and increments the stack pointer (TOP) by 1. The no-operand version of the floating-point multiply instructions always results in the register stack being popped. In some assemblers, the mnemonic for this instruction is FMUL rather than FMULP.")]),t._v(" "),v("p",[t._v("The FIMUL instructions convert an integer source operand to double extended-precision floating-point format before performing the multiplication.")]),t._v(" "),v("p",[t._v("The sign of the result is always the exclusive-OR of the source signs, even if one or more of the values being multiplied is 0 or infinite. When the source operand is an integer 0, it is treated as a +0.")]),t._v(" "),v("p",[t._v("The following table shows the results obtained when multiplying various classes of numbers, assuming that neither overflow nor underflow occurs.")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[v("a",{attrs:{href:""}})]),t._v(" "),v("th"),t._v(" "),v("th"),t._v(" "),v("th"),t._v(" "),v("th"),t._v(" "),v("th"),t._v(" "),v("th"),t._v(" "),v("th")])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("-")]),t._v(" "),v("td",[t._v("Destination: -inf")]),t._v(" "),v("td",[t._v("Destination: -F")]),t._v(" "),v("td",[t._v("Destination: -0")]),t._v(" "),v("td",[t._v("Destination: +0")]),t._v(" "),v("td",[t._v("Destination: +F")]),t._v(" "),v("td",[t._v("Destination: +inf")]),t._v(" "),v("td",[t._v("Destination: NaN")])]),t._v(" "),v("tr",[v("td",[t._v("Source: -inf")]),t._v(" "),v("td",[t._v("+inf")]),t._v(" "),v("td",[t._v("+inf")]),t._v(" "),v("td",[t._v("*")]),t._v(" "),v("td",[t._v("*")]),t._v(" "),v("td",[t._v("-inf")]),t._v(" "),v("td",[t._v("-inf")]),t._v(" "),v("td",[t._v("NaN")])]),t._v(" "),v("tr",[v("td",[t._v("Source: -F")]),t._v(" "),v("td",[t._v("+inf")]),t._v(" "),v("td",[t._v("+F")]),t._v(" "),v("td",[t._v("+0")]),t._v(" "),v("td",[t._v("-0")]),t._v(" "),v("td",[t._v("-F")]),t._v(" "),v("td",[t._v("-inf")]),t._v(" "),v("td",[t._v("NaN")])]),t._v(" "),v("tr",[v("td",[t._v("Source: -I")]),t._v(" "),v("td",[t._v("+inf")]),t._v(" "),v("td",[t._v("+F")]),t._v(" "),v("td",[t._v("+0")]),t._v(" "),v("td",[t._v("-0")]),t._v(" "),v("td",[t._v("-F")]),t._v(" "),v("td",[t._v("-inf")]),t._v(" "),v("td",[t._v("NaN")])]),t._v(" "),v("tr",[v("td",[t._v("Source: -0")]),t._v(" "),v("td",[t._v("*")]),t._v(" "),v("td",[t._v("+0")]),t._v(" "),v("td",[t._v("+0")]),t._v(" "),v("td",[t._v("-0")]),t._v(" "),v("td",[t._v("-0")]),t._v(" "),v("td",[t._v("*")]),t._v(" "),v("td",[t._v("NaN")])]),t._v(" "),v("tr",[v("td",[t._v("Source: +0")]),t._v(" "),v("td",[t._v("*")]),t._v(" "),v("td",[t._v("-0")]),t._v(" "),v("td",[t._v("-0")]),t._v(" "),v("td",[t._v("+0")]),t._v(" "),v("td",[t._v("+0")]),t._v(" "),v("td",[t._v("*")]),t._v(" "),v("td",[t._v("NaN")])]),t._v(" "),v("tr",[v("td",[t._v("Source: +I")]),t._v(" "),v("td",[t._v("-inf")]),t._v(" "),v("td",[t._v("-F")]),t._v(" "),v("td",[t._v("-0")]),t._v(" "),v("td",[t._v("+0")]),t._v(" "),v("td",[t._v("+F")]),t._v(" "),v("td",[t._v("+inf")]),t._v(" "),v("td",[t._v("NaN")])]),t._v(" "),v("tr",[v("td",[t._v("Source: +F")]),t._v(" "),v("td",[t._v("-inf")]),t._v(" "),v("td",[t._v("-F")]),t._v(" "),v("td",[t._v("-0")]),t._v(" "),v("td",[t._v("+0")]),t._v(" "),v("td",[t._v("+F")]),t._v(" "),v("td",[t._v("+inf")]),t._v(" "),v("td",[t._v("NaN")])]),t._v(" "),v("tr",[v("td",[t._v("Source: +inf")]),t._v(" "),v("td",[t._v("-inf")]),t._v(" "),v("td",[t._v("-inf")]),t._v(" "),v("td",[t._v("*")]),t._v(" "),v("td",[t._v("*")]),t._v(" "),v("td",[t._v("+inf")]),t._v(" "),v("td",[t._v("+inf")]),t._v(" "),v("td",[t._v("NaN")])]),t._v(" "),v("tr",[v("td",[t._v("Source: NaN")]),t._v(" "),v("td",[t._v("NaN")]),t._v(" "),v("td",[t._v("NaN")]),t._v(" "),v("td",[t._v("NaN")]),t._v(" "),v("td",[t._v("NaN")]),t._v(" "),v("td",[t._v("NaN")]),t._v(" "),v("td",[t._v("NaN")]),t._v(" "),v("td",[t._v("NaN")])]),t._v(" "),v("tr",[v("td",[t._v("F Means finite floating-point value.")]),t._v(" "),v("td"),t._v(" "),v("td"),t._v(" "),v("td"),t._v(" "),v("td"),t._v(" "),v("td"),t._v(" "),v("td"),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("I Means Integer.")]),t._v(" "),v("td"),t._v(" "),v("td"),t._v(" "),v("td"),t._v(" "),v("td"),t._v(" "),v("td"),t._v(" "),v("td"),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("* Indicates invalid-arithmetic-operand (#IA) exception.")]),t._v(" "),v("td"),t._v(" "),v("td"),t._v(" "),v("td"),t._v(" "),v("td"),t._v(" "),v("td"),t._v(" "),v("td"),t._v(" "),v("td")])])]),t._v(" "),v("h2",{attrs:{id:"operation"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#operation"}},[t._v("#")]),t._v(" Operation")]),t._v(" "),v("div",{staticClass:"language-c line-numbers-mode"},[v("pre",{pre:!0,attrs:{class:"language-c"}},[v("code",[v("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Instruction "),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" FIMUL"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" Destination "),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Destination "),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token function"}},[t._v("ConvertToExtendedDouble")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Source"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),v("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" Destination "),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Destination "),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" Source"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//source operand is floating-point value")]),t._v("\n\n"),v("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Instruction "),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" FMULP"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token function"}},[t._v("PopRegisterStack")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])]),t._v(" "),v("div",{staticClass:"line-numbers-wrapper"},[v("span",{staticClass:"line-number"},[t._v("1")]),v("br"),v("span",{staticClass:"line-number"},[t._v("2")]),v("br"),v("span",{staticClass:"line-number"},[t._v("3")]),v("br"),v("span",{staticClass:"line-number"},[t._v("4")]),v("br"),v("span",{staticClass:"line-number"},[t._v("5")]),v("br")])]),v("h2",{attrs:{id:"fpu-flags-affected"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#fpu-flags-affected"}},[t._v("#")]),t._v(" FPU flags affected")]),t._v(" "),v("p",[t._v("C1 Set to 0 if stack underflow occurred.\nSet if result was rounded up; cleared otherwise.\nC0, C2, C3 Undefined.")]),t._v(" "),v("h2",{attrs:{id:"floating-point-exceptions"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#floating-point-exceptions"}},[t._v("#")]),t._v(" Floating-Point Exceptions")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[v("a",{attrs:{href:""}})]),t._v(" "),v("th")])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("#IS")]),t._v(" "),v("td",[t._v("Stack underflow occurred.")])]),t._v(" "),v("tr",[v("td",[t._v("#IS")]),t._v(" "),v("td",[t._v("Stack underflow occurred.")])]),t._v(" "),v("tr",[v("td",[t._v("#IA")]),t._v(" "),v("td",[t._v("Operand is an SNaN value or unsupported format. One operand is +-0 and the other is +-infinite.")])]),t._v(" "),v("tr",[v("td",[t._v("#D")]),t._v(" "),v("td",[t._v("Source operand is a denormal value.")])]),t._v(" "),v("tr",[v("td",[t._v("#U")]),t._v(" "),v("td",[t._v("Result is too small for destination format.")])]),t._v(" "),v("tr",[v("td",[t._v("#O")]),t._v(" "),v("td",[t._v("Result is too large for destination format.")])])])]),t._v(" "),v("h2",{attrs:{id:"protected-mode-exceptions"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#protected-mode-exceptions"}},[t._v("#")]),t._v(" Protected Mode Exceptions")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[v("a",{attrs:{href:""}})]),t._v(" "),v("th")])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("#GP(0)")]),t._v(" "),v("td",[t._v("If a memory operand effective address is outside the CS, DS, ES, FS, or GS segment limit. If the DS, ES, FS, or GS register is used to access memory and it contains a null segment selector.")])]),t._v(" "),v("tr",[v("td",[t._v("#GP(0)")]),t._v(" "),v("td",[t._v("If a memory operand effective address is outside the CS, DS, ES, FS, or GS segment limit. If the DS, ES, FS, or GS register is used to access memory and it contains a null segment selector.")])]),t._v(" "),v("tr",[v("td",[t._v("#SS(0)")]),t._v(" "),v("td",[t._v("If a memory operand effective address is outside the SS segment limit.")])]),t._v(" "),v("tr",[v("td",[t._v("#NM")]),t._v(" "),v("td",[t._v("EM or TS in CR0 is set.")])]),t._v(" "),v("tr",[v("td",[t._v("#PF(fault-code)")]),t._v(" "),v("td",[t._v("If a page fault occurs.")])])])]),t._v(" "),v("h2",{attrs:{id:"real-address-mode-exceptions"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#real-address-mode-exceptions"}},[t._v("#")]),t._v(" Real-Address Mode Exceptions")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[v("a",{attrs:{href:""}})]),t._v(" "),v("th")])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("#GP")]),t._v(" "),v("td",[t._v("If a memory operand effective address is outside the CS, DS, ES, FS, or GS segment limit.")])]),t._v(" "),v("tr",[v("td",[t._v("#GP")]),t._v(" "),v("td",[t._v("If a memory operand effective address is outside the CS, DS, ES, FS, or GS segment limit.")])]),t._v(" "),v("tr",[v("td",[t._v("#SS")]),t._v(" "),v("td",[t._v("If a memory operand effective address is outside the SS segment limit.")])])])]),t._v(" "),v("h2",{attrs:{id:"virtual-8086-mode-exceptions"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#virtual-8086-mode-exceptions"}},[t._v("#")]),t._v(" Virtual-8086 Mode Exceptions")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[v("a",{attrs:{href:""}})]),t._v(" "),v("th")])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("#GP(0)")]),t._v(" "),v("td",[t._v("If a memory operand effective address is outside the CS, DS, ES, FS, or GS segment limit.")])]),t._v(" "),v("tr",[v("td",[t._v("#GP(0)")]),t._v(" "),v("td",[t._v("If a memory operand effective address is outside the CS, DS, ES, FS, or GS segment limit.")])]),t._v(" "),v("tr",[v("td",[t._v("#SS(0)")]),t._v(" "),v("td",[t._v("If a memory operand effective address is outside the SS segment limit.")])]),t._v(" "),v("tr",[v("td",[t._v("#NM")]),t._v(" "),v("td",[t._v("EM or TS in CR0 is set.")])]),t._v(" "),v("tr",[v("td",[t._v("#PF(fault-code)")]),t._v(" "),v("td",[t._v("If a page fault occurs.")])])])]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("Instruction")]),t._v(" "),v("th",[t._v("Latency")]),t._v(" "),v("th",[t._v("Throughput")]),t._v(" "),v("th",[t._v("Execution Unit")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("CPUID")]),t._v(" "),v("td",[t._v("0F3n/0F2n")]),t._v(" "),v("td",[t._v("0F3n/0F2n")]),t._v(" "),v("td",[t._v("0F2n")])]),t._v(" "),v("tr",[v("td",[t._v("FMUL")]),t._v(" "),v("td",[t._v("8/7")]),t._v(" "),v("td",[t._v("2/2")]),t._v(" "),v("td",[t._v("FP_MUL")])])])])])}),[],!1,null,null,null);e.default=_.exports}}]);