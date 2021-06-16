(window.webpackJsonp=window.webpackJsonp||[]).push([[99],{452:function(t,e,v){"use strict";v.r(e);var _=v(42),s=Object(_.a)({},(function(){var t=this,e=t.$createElement,v=t._self._c||e;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"fdiv-fdivp-fidiv"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#fdiv-fdivp-fidiv"}},[t._v("#")]),t._v(" FDIV/FDIVP/FIDIV")]),t._v(" "),v("h2",{attrs:{id:"divide"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#divide"}},[t._v("#")]),t._v(" Divide")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("Opcode")]),t._v(" "),v("th",[t._v("Mnemonic")]),t._v(" "),v("th",[t._v("Description")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("D8 /6")]),t._v(" "),v("td",[t._v("FDIV m32fp")]),t._v(" "),v("td",[t._v("Divide ST(0) by m32fp and store result in ST(0).")])]),t._v(" "),v("tr",[v("td",[t._v("DC /6")]),t._v(" "),v("td",[t._v("FDIV m64fp")]),t._v(" "),v("td",[t._v("Divide ST(0) by m64fp and store result in ST(0).")])]),t._v(" "),v("tr",[v("td",[t._v("D8 F0+i")]),t._v(" "),v("td",[t._v("FDIV ST(0), ST(i)")]),t._v(" "),v("td",[t._v("Divide ST(0) by ST(i) and store result in ST(0).")])]),t._v(" "),v("tr",[v("td",[t._v("DC F8+i")]),t._v(" "),v("td",[t._v("FDIV ST(i), ST(0)")]),t._v(" "),v("td",[t._v("Divide ST(i) by ST(0) and store result in ST(i).")])]),t._v(" "),v("tr",[v("td",[t._v("DE F8+i")]),t._v(" "),v("td",[t._v("FDIVP ST(i), ST(0)")]),t._v(" "),v("td",[t._v("Divide ST(i) by ST(0), store result in ST(i), and pop the register stack.")])]),t._v(" "),v("tr",[v("td",[t._v("DE F9")]),t._v(" "),v("td",[t._v("FDIVP")]),t._v(" "),v("td",[t._v("Divide ST(1) by ST(0), store result in ST(1), and pop the register stack.")])]),t._v(" "),v("tr",[v("td",[t._v("DA /6")]),t._v(" "),v("td",[t._v("FIDIV m32int")]),t._v(" "),v("td",[t._v("Divide ST(0) by m32int and store result in ST(0).")])]),t._v(" "),v("tr",[v("td",[t._v("DE /6")]),t._v(" "),v("td",[t._v("FIDIV m16int")]),t._v(" "),v("td",[t._v("Divide ST(0) by m64int and store result in ST(0).")])])])]),t._v(" "),v("h2",{attrs:{id:"description"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[t._v("#")]),t._v(" Description")]),t._v(" "),v("p",[t._v("Divides the destination operand by the source operand and stores the result in the destination location. The destination operand (dividend) is always in an FPU register; the source operand (divisor) can be a register or a memory location. Source operands in memory can be in singleprecision or double-precision floating-point format, word or doubleword integer format.")]),t._v(" "),v("p",[t._v("The no-operand version of the instruction divides the contents of the ST(1) register by the contents of the ST(0) register. The one-operand version divides the contents of the ST(0) register by the contents of a memory location (either a floating-point or an integer value). The twooperand version, divides the contents of the ST(0) register by the contents of the ST(i) register or vice versa.")]),t._v(" "),v("p",[t._v("The FDIVP instructions perform the additional operation of popping the FPU register stack after storing the result. To pop the register stack, the processor marks the ST(0) register as empty and increments the stack pointer (TOP) by 1. The no-operand version of the floating-point divide instructions always results in the register stack being popped. In some assemblers, the mnemonic for this instruction is FDIV rather than FDIVP.")]),t._v(" "),v("p",[t._v("The FIDIV instructions convert an integer source operand to double extended-precision floating-point format before performing the division. When the source operand is an integer 0, it is treated as a +0.")]),t._v(" "),v("p",[t._v("If an unmasked divide-by-zero exception (#Z) is generated, no result is stored; if the exception is masked, an infinite of the appropriate sign is stored in the destination operand.")]),t._v(" "),v("p",[t._v("The following table shows the results obtained when dividing various classes of numbers, assuming that neither overflow nor underflow occurs.")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[v("a",{attrs:{href:""}})]),t._v(" "),v("th"),t._v(" "),v("th"),t._v(" "),v("th"),t._v(" "),v("th"),t._v(" "),v("th"),t._v(" "),v("th"),t._v(" "),v("th")])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("-")]),t._v(" "),v("td",[t._v("Destination: -inf")]),t._v(" "),v("td",[t._v("Destination: -F")]),t._v(" "),v("td",[t._v("Destination: -0")]),t._v(" "),v("td",[t._v("Destination: +0")]),t._v(" "),v("td",[t._v("Destination: +F")]),t._v(" "),v("td",[t._v("Destination: +inf")]),t._v(" "),v("td",[t._v("Destination: NaN")])]),t._v(" "),v("tr",[v("td",[t._v("Source: -inf")]),t._v(" "),v("td",[t._v("*")]),t._v(" "),v("td",[t._v("+0")]),t._v(" "),v("td",[t._v("+0")]),t._v(" "),v("td",[t._v("-0")]),t._v(" "),v("td",[t._v("-0")]),t._v(" "),v("td",[t._v("*")]),t._v(" "),v("td",[t._v("NaN")])]),t._v(" "),v("tr",[v("td",[t._v("Source: -F")]),t._v(" "),v("td",[t._v("+inf")]),t._v(" "),v("td",[t._v("+F")]),t._v(" "),v("td",[t._v("+0")]),t._v(" "),v("td",[t._v("-0")]),t._v(" "),v("td",[t._v("-F")]),t._v(" "),v("td",[t._v("-inf")]),t._v(" "),v("td",[t._v("NaN")])]),t._v(" "),v("tr",[v("td",[t._v("Source: -I")]),t._v(" "),v("td",[t._v("+inf")]),t._v(" "),v("td",[t._v("+F")]),t._v(" "),v("td",[t._v("+0")]),t._v(" "),v("td",[t._v("-0")]),t._v(" "),v("td",[t._v("-F")]),t._v(" "),v("td",[t._v("-inf")]),t._v(" "),v("td",[t._v("NaN")])]),t._v(" "),v("tr",[v("td",[t._v("Source: -0")]),t._v(" "),v("td",[t._v("+inf")]),t._v(" "),v("td",[t._v("**")]),t._v(" "),v("td",[t._v("*")]),t._v(" "),v("td",[t._v("*")]),t._v(" "),v("td",[t._v("**")]),t._v(" "),v("td",[t._v("-inf")]),t._v(" "),v("td",[t._v("NaN")])]),t._v(" "),v("tr",[v("td",[t._v("Source: +0")]),t._v(" "),v("td",[t._v("-inf")]),t._v(" "),v("td",[t._v("**")]),t._v(" "),v("td",[t._v("*")]),t._v(" "),v("td",[t._v("*")]),t._v(" "),v("td",[t._v("**")]),t._v(" "),v("td",[t._v("+inf")]),t._v(" "),v("td",[t._v("NaN")])]),t._v(" "),v("tr",[v("td",[t._v("Source: +I")]),t._v(" "),v("td",[t._v("-inf")]),t._v(" "),v("td",[t._v("-F")]),t._v(" "),v("td",[t._v("-0")]),t._v(" "),v("td",[t._v("+0")]),t._v(" "),v("td",[t._v("+F")]),t._v(" "),v("td",[t._v("+inf")]),t._v(" "),v("td",[t._v("NaN")])]),t._v(" "),v("tr",[v("td",[t._v("Source: +F")]),t._v(" "),v("td",[t._v("-inf")]),t._v(" "),v("td",[t._v("-F")]),t._v(" "),v("td",[t._v("-0")]),t._v(" "),v("td",[t._v("+0")]),t._v(" "),v("td",[t._v("+F")]),t._v(" "),v("td",[t._v("+inf")]),t._v(" "),v("td",[t._v("NaN")])]),t._v(" "),v("tr",[v("td",[t._v("Source: +8")]),t._v(" "),v("td",[t._v("*")]),t._v(" "),v("td",[t._v("-0")]),t._v(" "),v("td",[t._v("-0")]),t._v(" "),v("td",[t._v("+0")]),t._v(" "),v("td",[t._v("+0")]),t._v(" "),v("td",[t._v("*")]),t._v(" "),v("td",[t._v("NaN")])]),t._v(" "),v("tr",[v("td",[t._v("Source: NaN NaN NaN NaN NaN NaN NaN NaN")]),t._v(" "),v("td"),t._v(" "),v("td"),t._v(" "),v("td"),t._v(" "),v("td"),t._v(" "),v("td"),t._v(" "),v("td"),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("F Means finite floating-point value.")]),t._v(" "),v("td"),t._v(" "),v("td"),t._v(" "),v("td"),t._v(" "),v("td"),t._v(" "),v("td"),t._v(" "),v("td"),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("I Means integer.")]),t._v(" "),v("td"),t._v(" "),v("td"),t._v(" "),v("td"),t._v(" "),v("td"),t._v(" "),v("td"),t._v(" "),v("td"),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("* Indicates floating-point invalid-arithmetic-operand (#IA) exception.")]),t._v(" "),v("td"),t._v(" "),v("td"),t._v(" "),v("td"),t._v(" "),v("td"),t._v(" "),v("td"),t._v(" "),v("td"),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("** Indicates floating-point zero-divide (#Z) exception.")]),t._v(" "),v("td"),t._v(" "),v("td"),t._v(" "),v("td"),t._v(" "),v("td"),t._v(" "),v("td"),t._v(" "),v("td"),t._v(" "),v("td")])])]),t._v(" "),v("h2",{attrs:{id:"operation"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#operation"}},[t._v("#")]),t._v(" Operation")]),t._v(" "),v("div",{staticClass:"language-c line-numbers-mode"},[v("pre",{pre:!0,attrs:{class:"language-c"}},[v("code",[v("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Source "),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token function"}},[t._v("Exception")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Z"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),v("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),v("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Instruction "),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" FIDIV"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" Destination "),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token function"}},[t._v("ConvertToExtendedDouble")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Source"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),v("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" Destination "),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Destination "),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" Source"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),v("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Instruction "),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" FDIVP"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token function"}},[t._v("PopRegisterStack")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])]),t._v(" "),v("div",{staticClass:"line-numbers-wrapper"},[v("span",{staticClass:"line-number"},[t._v("1")]),v("br"),v("span",{staticClass:"line-number"},[t._v("2")]),v("br"),v("span",{staticClass:"line-number"},[t._v("3")]),v("br"),v("span",{staticClass:"line-number"},[t._v("4")]),v("br"),v("span",{staticClass:"line-number"},[t._v("5")]),v("br"),v("span",{staticClass:"line-number"},[t._v("6")]),v("br"),v("span",{staticClass:"line-number"},[t._v("7")]),v("br")])]),v("h2",{attrs:{id:"fpu-flags-affected"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#fpu-flags-affected"}},[t._v("#")]),t._v(" FPU flags affected")]),t._v(" "),v("p",[t._v("C1 Set to 0 if stack underflow occurred.\nSet if result was rounded up; cleared otherwise.\nC0, C2, C3 Undefined.")]),t._v(" "),v("h2",{attrs:{id:"floating-point-exceptions"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#floating-point-exceptions"}},[t._v("#")]),t._v(" Floating-Point Exceptions")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[v("a",{attrs:{href:""}})]),t._v(" "),v("th")])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("#IS")]),t._v(" "),v("td",[t._v("Stack underflow occurred.")])]),t._v(" "),v("tr",[v("td",[t._v("#IS")]),t._v(" "),v("td",[t._v("Stack underflow occurred.")])]),t._v(" "),v("tr",[v("td",[t._v("#IA")]),t._v(" "),v("td",[t._v("Operand is an SNaN value or unsupported format. +-infinite / +-infinite; +-0 / +-0")])]),t._v(" "),v("tr",[v("td",[t._v("#D")]),t._v(" "),v("td",[t._v("Source is a denormal value.")])]),t._v(" "),v("tr",[v("td",[t._v("#Z")]),t._v(" "),v("td",[t._v("Destination / +-0, where Destination is not equal to +-0.")])]),t._v(" "),v("tr",[v("td",[t._v("#U")]),t._v(" "),v("td",[t._v("Result is too small for destination format.")])]),t._v(" "),v("tr",[v("td",[t._v("#O")]),t._v(" "),v("td",[t._v("Result is too large for destination format.")])])])]),t._v(" "),v("h2",{attrs:{id:"protected-mode-exceptions"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#protected-mode-exceptions"}},[t._v("#")]),t._v(" Protected Mode Exceptions")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[v("a",{attrs:{href:""}})]),t._v(" "),v("th")])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("#GP(0)")]),t._v(" "),v("td",[t._v("If a memory operand effective address is outside the CS, DS, ES, FS, or GS segment limit. If the DS, ES, FS, or GS register contains a null segment selector.")])]),t._v(" "),v("tr",[v("td",[t._v("#GP(0)")]),t._v(" "),v("td",[t._v("If a memory operand effective address is outside the CS, DS, ES, FS, or GS segment limit. If the DS, ES, FS, or GS register contains a null segment selector.")])]),t._v(" "),v("tr",[v("td",[t._v("#SS(0)")]),t._v(" "),v("td",[t._v("If a memory operand effective address is outside the SS segment limit.")])]),t._v(" "),v("tr",[v("td",[t._v("#NM")]),t._v(" "),v("td",[t._v("EM or TS in CR0 is set.")])]),t._v(" "),v("tr",[v("td",[t._v("#PF(fault-code)")]),t._v(" "),v("td",[t._v("If a page fault occurs.")])])])]),t._v(" "),v("h2",{attrs:{id:"real-address-mode-exceptions"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#real-address-mode-exceptions"}},[t._v("#")]),t._v(" Real-Address Mode Exceptions")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[v("a",{attrs:{href:""}})]),t._v(" "),v("th")])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("#GP")]),t._v(" "),v("td",[t._v("If a memory operand effective address is outside the CS, DS, ES, FS, or GS segment limit.")])]),t._v(" "),v("tr",[v("td",[t._v("#GP")]),t._v(" "),v("td",[t._v("If a memory operand effective address is outside the CS, DS, ES, FS, or GS segment limit.")])]),t._v(" "),v("tr",[v("td",[t._v("#SS")]),t._v(" "),v("td",[t._v("If a memory operand effective address is outside the SS segment limit.")])])])]),t._v(" "),v("h2",{attrs:{id:"virtual-8086-mode-exceptions"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#virtual-8086-mode-exceptions"}},[t._v("#")]),t._v(" Virtual-8086 Mode Exceptions")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[v("a",{attrs:{href:""}})]),t._v(" "),v("th")])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("#GP(0)")]),t._v(" "),v("td",[t._v("If a memory operand effective address is outside the CS, DS, ES, FS, or GS segment limit.")])]),t._v(" "),v("tr",[v("td",[t._v("#GP(0)")]),t._v(" "),v("td",[t._v("If a memory operand effective address is outside the CS, DS, ES, FS, or GS segment limit.")])]),t._v(" "),v("tr",[v("td",[t._v("#SS(0)")]),t._v(" "),v("td",[t._v("If a memory operand effective address is outside the SS segment limit.")])]),t._v(" "),v("tr",[v("td",[t._v("#NM")]),t._v(" "),v("td",[t._v("EM or TS in CR0 is set.")])]),t._v(" "),v("tr",[v("td",[t._v("#PF(fault-code)")]),t._v(" "),v("td",[t._v("If a page fault occurs.")])])])]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("Instruction")]),t._v(" "),v("th",[t._v("Latency")]),t._v(" "),v("th",[t._v("Throughput")]),t._v(" "),v("th",[t._v("Execution Unit")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("CPUID")]),t._v(" "),v("td",[t._v("0F3n/0F2n")]),t._v(" "),v("td",[t._v("0F3n/0F2n")]),t._v(" "),v("td",[t._v("0F2n")])]),t._v(" "),v("tr",[v("td",[t._v("FDIV SP")]),t._v(" "),v("td",[t._v("30/23")]),t._v(" "),v("td",[t._v("30/23")]),t._v(" "),v("td",[t._v("FP_DIV")])]),t._v(" "),v("tr",[v("td",[t._v("FDIV DP")]),t._v(" "),v("td",[t._v("40/38")]),t._v(" "),v("td",[t._v("40/38")]),t._v(" "),v("td",[t._v("FP_DIV")])]),t._v(" "),v("tr",[v("td",[t._v("FDIV EP")]),t._v(" "),v("td",[t._v("44/43")]),t._v(" "),v("td",[t._v("44/43")]),t._v(" "),v("td",[t._v("FP_DIV")])])])])])}),[],!1,null,null,null);e.default=s.exports}}]);