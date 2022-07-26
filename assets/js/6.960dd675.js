(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{397:function(e,n,t){e.exports=t.p+"assets/img/book1.ce22cfc5.png"},398:function(e,n,t){e.exports=t.p+"assets/img/book2.bf9b4a21.png"},399:function(e,n,t){e.exports=t.p+"assets/img/book3.298d0edc.png"},422:function(e,n,t){"use strict";t.r(n);var s=t(31),a=Object(s.a)({},(function(){var e=this,n=e.$createElement,s=e._self._c||n;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"webpack从零构建一个vue-element项目"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#webpack从零构建一个vue-element项目"}},[e._v("#")]),e._v(" webpack从零构建一个vue+element项目")]),e._v(" "),s("h6",{attrs:{id:"利用webpack-vue-element实现一个简易书签收藏-利用css媒体查询做了简单的响应式处理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#利用webpack-vue-element实现一个简易书签收藏-利用css媒体查询做了简单的响应式处理"}},[e._v("#")]),e._v(" 利用webpack+vue+element实现一个简易书签收藏,利用css媒体查询做了简单的响应式处理")]),e._v(" "),s("h5",{attrs:{id:"实现效果-网页版和移动版"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#实现效果-网页版和移动版"}},[e._v("#")]),e._v(" 实现效果 网页版和移动版")]),e._v(" "),s("p",[s("img",{attrs:{src:t(397),alt:"Image text"}}),e._v(" "),s("img",{attrs:{src:t(398),alt:"Image text"}}),e._v(" "),s("img",{attrs:{src:t(399),alt:"Image text"}})]),e._v(" "),s("h5",{attrs:{id:"文件目录配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#文件目录配置"}},[e._v("#")]),e._v(" 文件目录配置")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("├─config\t// webpack配置文件\n├─dist\t\t// 单入口打包输入文件\n│  ├─css\n│  ├─fonts\n│  ├─images\n│  │  ├─icon\n│  │  └─logos\n│  └─js\n└─src\t\t\n    ├─images\t\n    │  ├─icon\n    │  └─logos\n    ├─pages\t\t// 页面文件\n    ├─public\t// index.html模板 \n    ├─router\t// 路由配置\n    ├─static\t// 静态资源\n    │  ├─fonts\t// 文字\n    │  └─images\t// 图片\n    |-- App.vue // 挂载模板\t\n    |-- main.js // 入口文件\n    └─style\t\t// 样式\n")])])]),s("h5",{attrs:{id:"package-json"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#package-json"}},[e._v("#")]),e._v(" package.json")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('{\n  "name": "webpack-vue-ele",\n  "version": "1.0.0",\n  "description": "",\n  "main": "index.js",\n  "scripts": {\n    "test": "echo \\"Error: no test specified\\" && exit 1",\n    "build": "webpack --config ./config/webpack.pro.js",\n    "dev": "webpack-dev-server --inline --progress --config  ./config/webpack.dev.js"\n  },\n  "keywords": [],\n  "author": "bairujie",\n  "license": "ISC",\n  "devDependencies": {\n    "@babel/core": "^7.16.0",\t// 处理js兼容\n    "@babel/preset-env": "^7.16.4",  // 处理js兼容\n    "autoprefixer": "^10.4.0",  // 自动补全浏览器前缀\n    "babel-loader": "^8.2.3",\t// 处理js兼容loader\n    "clean-webpack-plugin": "^4.0.0",\t// 清空dist目录\n    "copy-webpack-plugin": "^4.0.1",\t// 拷贝静态资源到dist目录\n    "css-loader": "^1.0.1",\t\t// 处理css的loader\n    "css-minimizer-webpack-plugin": "^1.1.5",\t// 压缩css\n    "file-loader": "^1.1.6",\t// 处理文件的loader\n    "friendly-errors-webpack-plugin": "^1.7.0",\t  // 友好提示插件\n    "html-loader": "^3.0.1",\t// 处理html的loader\n    "html-webpack-plugin": "^3.2.0",\t// 处理index.html模板\n    "jquery": "^3.6.0",\t\t// 测试js抽离引入的jq测试\n    "less": "^3.9.0",\t\t// 引入less\n    "less-loader": "^5.0.0",\t// 引入处理less的loader\n    "mini-css-extract-plugin": "^0.9.0",\t// 抽离css的插件\n    "node-notifier": "^5.1.2",\t\t// 弹窗提示\n    "nprogress": "^0.2.0",\t\t\t// 进度提示\n    "portfinder": "^1.0.13",\t\t// 处理端口号\n    "postcss": "^8.4.4",\t\t\t// 处理css\n    "postcss-loader": "^4.0.3",\t\t// 处理css\n    "style-loader": "^0.23.1",\t\t// 转化为style标签输出\n    "uglifyjs-webpack-plugin": "^2.2.0",\t// 处理js压缩\n    "url-loader": "^0.6.2",\t\t\t// 处理路径\n    "vue": "^2.6.11",\t\t\t\t// vue\n    "vue-loader": "^15.9.8",\t\t// 处理vue\n    "vue-router": "^3.5.3",\t\t\t// vue路由\n    "vue-template-compiler": "^2.6.14",\t\t// 处理vue模板\n    "webpack": "^4.41.5",\t\t\t// webpack4\n    "webpack-cli": "^3.3.10",\t\t// webpackcli\n    "webpack-dev-server": "^3.10.1",\t// 热更新\n    "webpack-merge": "^4.1.0",\t\t\t// webpack处理合并\n    "workbox-webpack-plugin": "^6.4.2"\t// 离线网页缓存插件\n  },\n  "dependencies": {\n    "element-ui": "^2.15.6"\t\t\t\t// element-ui\n  }\n}\n\n')])])]),s("h5",{attrs:{id:"webpack-base-js"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#webpack-base-js"}},[e._v("#")]),e._v(" webpack.base.js")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("const path = require('path');\nconst HtmlWebpackPlugin = require('html-webpack-plugin');\nconst MiniCssExtractPlugin = require(\"mini-css-extract-plugin\");\nconst {\n    CleanWebpackPlugin\n} = require('clean-webpack-plugin');\nconst VueLoaderPlugin = require(\"vue-loader/lib/plugin\");\nconst CopyWebpackPlugin = require(\"copy-webpack-plugin\");\n\nmodule.exports = {\n    entry: './src/main.js', // 单入口打包\n    output: {\n        path: path.join(__dirname, '../dist'),\n        filename: 'js/[name].bundle.js',\t// 打包出去的js存放目录\n    },\n    module: {\n        rules: [{\n                test: /\\.vue/,\n                loader: 'vue-loader'\n\n            },\n            {\n                test: /\\.js$/,\n                exclude: /(node_modules)/,\n                use: {\n                    loader: 'babel-loader',\n                    options: {\n                        presets: ['@babel/preset-env']\n                    }\n                }\n            },\n            {\n                test: /\\.(css|less)$/,\n                use: [{\n                        loader: MiniCssExtractPlugin.loader,\n                        options: {\n                            // you can specify a publicPath here\n                            // by default it use publicPath in webpackOptions.output\n                            publicPath: '/'\n                        }\n                    },\n                    \"css-loader\",\n                    \"less-loader\",\n                    \"postcss-loader\"\n                ]\n            },\n            {\n                test: /\\.(png|jpg|gif|jpe?g)$/i,\n                use: [{\n                        loader: 'file-loader',\n                        options: {\n                            limit: 8 * 1024,\n                            // url使用es6解析,与html-loader冲突,需要关闭\n                            // esModule: false,\n                            encoding: \"base64\",\n                            publicPath: '../',\n                            name: \"images/[name].[ext]\",\n                        }\n                    },\n                    \n                ]\n            },\n            {\n                test: /\\.(eot|woff|svg|ttf|woff2|appcache|ico)(\\?|$)/,\n                exclude: /^node_modules$/,\n                loader: \"file-loader\",\n                options: {\n                    name: \"fonts/[name].[ext]\"\n                }\n            },\n        ],\n    },\n    plugins: [\n        new HtmlWebpackPlugin({\n            template: './src/public/index.html',\t// 模板文件入口\n            filename: 'index.html',\n        }),\n        new MiniCssExtractPlugin({\n            filename: \"css/[name].css\",\n            // chunkFilename: \"[id].css\"\n        }),\n        new CopyWebpackPlugin([{\n            from: \"./src/images\", \n            to: \"images\" // 打包出去的images存放目录\n        }]),\n        new CleanWebpackPlugin(),\n        new VueLoaderPlugin()\n    ],\n}\n\n")])])])])}),[],!1,null,null,null);n.default=a.exports}}]);