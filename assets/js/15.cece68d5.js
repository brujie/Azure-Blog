(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{424:function(n,a,e){"use strict";e.r(a);var l=e(31),s=Object(l.a)({},(function(){var n=this,a=n.$createElement,e=n._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[e("p",[n._v("1.启用构建压缩, sourceMap: false,")]),n._v(" "),e("p",[n._v("2.使用happypack")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("npm i -D webpack-parallel-uglify-plugin\n")])])]),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("const HappyPack = require('happypack');\nconst os = require('os');\nconst happyThreadPool = HappyPack.ThreadPool({ size: os.cpus().length });\n\n\nplugins.push(new HappyPack({\n    /*\n     * 必须配置\n     */\n    // id 标识符，要和 rules 中指定的 id 对应起来\n    id: 'babel',\n    // 需要使用的 loader，用法和 rules 中 Loader 配置一样\n    // 可以直接是字符串，也可以是对象形式\n    loaders: ['babel-loader?cacheDirectory']\n}))\n")])])]),e("p",[n._v("3.使用强压缩")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("npm i -D webpack-parallel-uglify-plugin\n")])])]),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("// 引入 ParallelUglifyPlugin 插件\nconst ParallelUglifyPlugin = require('webpack-parallel-uglify-plugin');\n\nmodule.exports = {\n  plugins: [\n    // 使用 ParallelUglifyPlugin 并行压缩输出JS代码\n    new ParallelUglifyPlugin({\n      // 传递给 UglifyJS的参数如下：\n      uglifyJS: {\n        output: {\n          /*\n           是否输出可读性较强的代码，即会保留空格和制表符，默认为输出，为了达到更好的压缩效果，\n           可以设置为false\n          */\n          beautify: false,\n          /*\n           是否保留代码中的注释，默认为保留，为了达到更好的压缩效果，可以设置为false\n          */\n          comments: false\n        },\n        compress: {\n          /*\n           是否在UglifyJS删除没有用到的代码时输出警告信息，默认为输出，可以设置为false关闭这些作用\n           不大的警告\n          */\n          warnings: false,\n\n          /*\n           是否删除代码中所有的console语句，默认为不删除，开启后，会删除所有的console语句\n          */\n          drop_console: true,\n\n          /*\n           是否内嵌虽然已经定义了，但是只用到一次的变量，比如将 var x = 1; y = x, 转换成 y = 5, 默认为不\n           转换，为了达到更好的压缩效果，可以设置为false\n          */\n          collapse_vars: true,\n\n          /*\n           是否提取出现了多次但是没有定义成变量去引用的静态值，比如将 x = 'xxx'; y = 'xxx'  转换成\n           var a = 'xxxx'; x = a; y = a; 默认为不转换，为了达到更好的压缩效果，可以设置为false\n          */\n          reduce_vars: true\n        }\n      }\n    }),\n  ]\n}\n")])])])])}),[],!1,null,null,null);a.default=s.exports}}]);