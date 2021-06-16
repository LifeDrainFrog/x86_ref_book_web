(window.webpackJsonp=window.webpackJsonp||[]).push([[335],{692:function(t,e,s){"use strict";s.r(e);var a=s(42),r=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"xlat-xlatb"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#xlat-xlatb"}},[t._v("#")]),t._v(" XLAT/XLATB")]),t._v(" "),s("h2",{attrs:{id:"table-look-up-translation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#table-look-up-translation"}},[t._v("#")]),t._v(" Table Look-up Translation")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Opcode")]),t._v(" "),s("th",[t._v("Mnemonic")]),t._v(" "),s("th",[t._v("Description")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("D7")]),t._v(" "),s("td",[t._v("XLAT m8")]),t._v(" "),s("td",[t._v("Set AL to memory byte DS:[(E)BX + unsigned AL].")])]),t._v(" "),s("tr",[s("td",[t._v("D7")]),t._v(" "),s("td",[t._v("XLATB")]),t._v(" "),s("td",[t._v("Set AL to memory byte DS:[(E)BX + unsigned AL].")])])])]),t._v(" "),s("h2",{attrs:{id:"description"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[t._v("#")]),t._v(" Description")]),t._v(" "),s("p",[t._v('Locates a byte entry in a table in memory, using the contents of the AL register as a table index, then copies the contents of the table entry back into the AL register. The index in the AL register is treated as an unsigned integer. The XLAT and XLATB instructions get the base address of the table in memory from either the DS:EBX or the DS:BX registers (depending on the addresssize attribute of the instruction, 32 or 16, respectively). (The DS segment may be overridden with a segment override prefix.) At the assembly-code level, two forms of this instruction are allowed: the "explicit-operand" form and the "no-operand" form. The explicit-operand form (specified with the XLAT mnemonic) allows the base address of the table to be specified explicitly with a symbol. This explicit-operands form is provided to allow documentation; however, note that the documentation provided by this form can be misleading. That is, the symbol does not have to specify the correct base address. The base address is always specified by the DS:(E)BX registers, which must be loaded correctly before the XLAT instruction is executed.')]),t._v(" "),s("p",[t._v('The no-operands form (XLATB) provides a "short form" of the XLAT instructions. Here also the processor assumes that the DS:(E)BX registers contain the base address of the table.')]),t._v(" "),s("h2",{attrs:{id:"operation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#operation"}},[t._v("#")]),t._v(" Operation")]),t._v(" "),s("div",{staticClass:"language-c line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-c"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("AddressSize "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("16")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" AL "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" DS"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("BX "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ZeroExtend")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("AL"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//AddressSize = 32")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" AL "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" DS"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("EBX "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ZeroExtend")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("AL"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br")])]),s("h2",{attrs:{id:"flags-affected"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#flags-affected"}},[t._v("#")]),t._v(" Flags affected")]),t._v(" "),s("p",[t._v("None.")])])}),[],!1,null,null,null);e.default=r.exports}}]);