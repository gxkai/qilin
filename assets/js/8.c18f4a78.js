(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{350:function(e,a,s){"use strict";s.r(a);var t=s(40),v=Object(t.a)({},(function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"构建"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#构建"}},[e._v("#")]),e._v(" 构建")]),e._v(" "),s("p",[e._v("Qilin 基于 webpack, 以下为 webpack 的相关配置, 配置文件约定为项目根目录下"),s("code",[e._v(".qilinrc.ts")]),e._v("文件")]),e._v(" "),s("h2",{attrs:{id:"outputpath"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#outputpath"}},[e._v("#")]),e._v(" outputPath")]),e._v(" "),s("ul",[s("li",[e._v("Type: "),s("code",[e._v("string")])]),e._v(" "),s("li",[e._v("Default: "),s("code",[e._v("dist")])])]),e._v(" "),s("p",[e._v("输出路径")]),e._v(" "),s("h2",{attrs:{id:"publicpath"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#publicpath"}},[e._v("#")]),e._v(" publicPath")]),e._v(" "),s("ul",[s("li",[e._v("Type: "),s("code",[e._v("string")])]),e._v(" "),s("li",[e._v("Default: "),s("code",[e._v("/")])])]),e._v(" "),s("p",[e._v("webpack 的 publicPath")]),e._v(" "),s("h2",{attrs:{id:"alias"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#alias"}},[e._v("#")]),e._v(" alias")]),e._v(" "),s("ul",[s("li",[e._v("Type: "),s("code",[e._v("object")])]),e._v(" "),s("li",[e._v("Default: "),s("code",[e._v("{}")]),e._v("\n配置别名")])]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("alias: {\n  pages: path.join(__dirname, './src/pages')\n},\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br")])]),s("h2",{attrs:{id:"define"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#define"}},[e._v("#")]),e._v(" define")]),e._v(" "),s("ul",[s("li",[e._v("Type: "),s("code",[e._v("object")])]),e._v(" "),s("li",[e._v("Default: "),s("code",[e._v("{}")]),e._v("\n定义代码可以使用的变量, 打包时会替换掉")])]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("define: {\n  __DEVTOOLS__: false,\n  __DEVLOGGER__: false\n},\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br")])]),s("h2",{attrs:{id:"copy"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#copy"}},[e._v("#")]),e._v(" copy")]),e._v(" "),s("ul",[s("li",[e._v("Type: "),s("code",[e._v("Array(string|object)")])]),e._v(" "),s("li",[e._v("Default: "),s("code",[e._v("['public']")]),e._v("\n配置复制到输出目录下的文件, 可以是字符串, 也可以是带有 from, to 字段的对象, 默认会复制项目根目录下的 public 文件夹中的文件")])]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("  copy:[\n    'copyDir',\n    { from: path.join(__dirname, './src/copy'), to: path.join(__dirname, './dist/copy') }\n  ],\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br")])]),s("h2",{attrs:{id:"inlinelimit"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#inlinelimit"}},[e._v("#")]),e._v(" inlineLimit")]),e._v(" "),s("ul",[s("li",[e._v("Type: "),s("code",[e._v("number")])]),e._v(" "),s("li",[e._v("Default: "),s("code",[e._v("10000 (10k)")]),e._v("\n配置图片文件是否使用 base64 编译的文件大小阀值")])]),e._v(" "),s("h2",{attrs:{id:"externals"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#externals"}},[e._v("#")]),e._v(" externals")]),e._v(" "),s("ul",[s("li",[e._v("Type: "),s("code",[e._v("object")])]),e._v(" "),s("li",[e._v("Default: "),s("code",[e._v("{}")]),e._v("\n不被打包的模块")])]),e._v(" "),s("h2",{attrs:{id:"lessvars"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#lessvars"}},[e._v("#")]),e._v(" lessVars")]),e._v(" "),s("ul",[s("li",[e._v("Type: "),s("code",[e._v("object")])]),e._v(" "),s("li",[e._v("Default: "),s("code",[e._v("{}")]),e._v("\n配置 less 变量")])]),e._v(" "),s("h2",{attrs:{id:"browsers"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#browsers"}},[e._v("#")]),e._v(" browsers")]),e._v(" "),s("ul",[s("li",[e._v("Type: "),s("code",[e._v("array")])]),e._v(" "),s("li",[e._v("Default: "),s("code",[e._v("['last 2 version', '> 1%', 'iOS >= 8', 'Android >= 4']")]),e._v("\n配置浏览器兼容性")])]),e._v(" "),s("h2",{attrs:{id:"postcssplugins"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#postcssplugins"}},[e._v("#")]),e._v(" postcssPlugins")]),e._v(" "),s("ul",[s("li",[e._v("Type: "),s("code",[e._v("array")])]),e._v(" "),s("li",[e._v("Default: "),s("code",[e._v("[]")]),e._v("\n配置 postcss 插件")])]),e._v(" "),s("p",[e._v("已使用的插件如下")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("postcss-flexbugs-fixes\npostcss-preset-env\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br")])]),s("h2",{attrs:{id:"htmlwebpack"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#htmlwebpack"}},[e._v("#")]),e._v(" htmlWebpack")]),e._v(" "),s("ul",[s("li",[e._v("Type: "),s("code",[e._v("object")])]),e._v(" "),s("li",[e._v("Default: "),s("code",[e._v("{}")]),e._v("\n配置 html-webpack-plugin 插件选项")])]),e._v(" "),s("h2",{attrs:{id:"babelpresets"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#babelpresets"}},[e._v("#")]),e._v(" babelPresets")]),e._v(" "),s("ul",[s("li",[e._v("Type: "),s("code",[e._v("array")])]),e._v(" "),s("li",[e._v("Default: "),s("code",[e._v("[]")]),e._v("\n配置 babel preset 项")])]),e._v(" "),s("h2",{attrs:{id:"babelplugins"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#babelplugins"}},[e._v("#")]),e._v(" babelPlugins")]),e._v(" "),s("ul",[s("li",[e._v("Type: "),s("code",[e._v("array")])]),e._v(" "),s("li",[e._v("Default: "),s("code",[e._v("[]")]),e._v("\n配置 babel 插件")])]),e._v(" "),s("h2",{attrs:{id:"proxy"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#proxy"}},[e._v("#")]),e._v(" proxy")]),e._v(" "),s("ul",[s("li",[e._v("Type: "),s("code",[e._v("object")])]),e._v(" "),s("li",[e._v("Default: "),s("code",[e._v("{}")]),e._v("\n配置 webpack-dev-server 代理")])]),e._v(" "),s("h2",{attrs:{id:"devserver"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#devserver"}},[e._v("#")]),e._v(" devServer")]),e._v(" "),s("ul",[s("li",[e._v("Type: "),s("code",[e._v("object")])]),e._v(" "),s("li",[e._v("Default: "),s("code",[e._v("{}")]),e._v("\n配置 webpack-dev-server 选项")])]),e._v(" "),s("h2",{attrs:{id:"analyze"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#analyze"}},[e._v("#")]),e._v(" analyze")]),e._v(" "),s("ul",[s("li",[e._v("Type: "),s("code",[e._v("object")])]),e._v(" "),s("li",[e._v("Default: "),s("code",[e._v("{}")]),e._v("\n配置 webpack-bundle-analyzer 插件选项")])]),e._v(" "),s("h2",{attrs:{id:"splitchunks"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#splitchunks"}},[e._v("#")]),e._v(" splitChunks")]),e._v(" "),s("ul",[s("li",[e._v("Type: "),s("code",[e._v("object")])]),e._v(" "),s("li",[e._v("Default: "),s("code",[e._v("{}")]),e._v("\nwebpack optimization splitChunks 配置")])])])}),[],!1,null,null,null);a.default=v.exports}}]);