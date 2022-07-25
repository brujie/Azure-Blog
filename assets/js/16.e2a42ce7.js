(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{424:function(e,n,t){"use strict";t.r(n);var r=t(31),a=Object(r.a)({},(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"wechaty搭建个人机器人-进阶篇"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#wechaty搭建个人机器人-进阶篇"}},[e._v("#")]),e._v(" wechaty搭建个人机器人[进阶篇]")]),e._v(" "),t("h4",{attrs:{id:"需求"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#需求"}},[e._v("#")]),e._v(" 需求")]),e._v(" "),t("p",[e._v("自己一直想做一个个人的微信机器人,曾经目睹一位大佬用自己个人微信实现语音控制机器人搭建后台系统，羡慕不已的同时，自己也暗自下定决心做一个自己的微信机器人，发现wechaty的时候，似乎看到了希望，并不是超越谁而是实现目前所可以做到的。")]),e._v(" "),t("p",[e._v("搭建自己的微信公众号，jd转链接，图文翻译，智能对话，个人收藏夹目前就是这几个，可是我发现对于小程序是不可以发送到自己的订阅号的，还有就是jd链接我每次都会重复的打开微信公众号，找到自己订阅号后发送似乎繁琐，所以我决定自己搞一个个人机器人解决以上的痛点。")]),e._v(" "),t("h4",{attrs:{id:"介绍"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#介绍"}},[e._v("#")]),e._v(" 介绍")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://wechaty.js.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Wechaty"),t("OutboundLink")],1)]),e._v(" "),t("p",[e._v("Wechaty是一款适用于Chatbot Makers的现代会话 RPA SDK，可以用几行代码创建一个bot。")]),e._v(" "),t("p",[e._v("Wechaty提供了开箱即用的支持，可以将您的IM帐户转变为聊天机器人，从而为您提供期望的通用功能，开发人员可以轻松地对其进行自定义和扩展，以创建满足其确切需求的聊天机器人。")]),e._v(" "),t("h4",{attrs:{id:"世界上最短的聊天机器人"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#世界上最短的聊天机器人"}},[e._v("#")]),e._v(" 世界上最短的聊天机器人"),t("a",{attrs:{href:"https://wechaty.js.org/docs/wechaty#shortest-chatbot",target:"_blank",rel:"noopener noreferrer"}},[e._v("＃"),t("OutboundLink")],1)]),e._v(" "),t("p",[e._v("我们可以使用Wechaty用最少6行代码构建一个聊天机器人")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("const { Wechaty } = require('wechaty')\n\nasync function main () {\n  conswt bot = new Wechaty()\n  bot\n    .on('scan', (qrcode, status) => console.log(`Scan QR Code to login: ${status}\\nhttps://wechaty.js.org/qrcode/${encodeURIComponent(qrcode)}`))\n    .on('login',            user => console.log(`User ${user} logged in`))\n    .on('message',       message => console.log(`Message: ${message}`))\n  await bot.start()\n}\n\nmain()\n  .catch(console.error)\n")])])]),t("h4",{attrs:{id:"运行代码之前"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#运行代码之前"}},[e._v("#")]),e._v(" 运行代码之前")]),e._v(" "),t("p",[e._v("准备好可运行Wechaty的微信号,已经申请前缀为puppet_padlocal的token")]),e._v(" "),t("ul",[t("li",[e._v("wechaty-puppet-padlocal：wechaty的ipad协议实现")])]),e._v(" "),t("p",[e._v("（每个人申请的token是不同的所以使用的协议也不同，需要在入口做处理）")]),e._v(" "),t("h4",{attrs:{id:"目前实现功能"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#目前实现功能"}},[e._v("#")]),e._v(" 目前实现功能")]),e._v(" "),t("ul",[t("li",[e._v("自动通过好友验证\n"),t("ul",[t("li",[e._v("当有人添加机器人时，判断验证消息关键字后通过或直接通过")]),e._v(" "),t("li",[e._v("通过验证后自动回复并介绍机器人功能")])])]),e._v(" "),t("li",[e._v("私聊关键字回复\n"),t("ul",[t("li",[e._v("例如回复 "),t("code",[e._v("加群")]),e._v(" 推送群聊邀请")]),e._v(" "),t("li",[e._v("例如回复 "),t("code",[e._v("群聊名称")]),e._v(" 自动拉群")])])]),e._v(" "),t("li",[e._v("自动聊天\n"),t("ul",[t("li",[e._v("群聊中配置和自己的机器人聊天")]),e._v(" "),t("li",[e._v("私聊发送消息即可聊天")])])]),e._v(" "),t("li",[e._v("解析小程序信息")]),e._v(" "),t("li",[e._v("加入群聊自动欢迎\n"),t("ul",[t("li",[e._v("当新的小伙伴加入群聊后自动 "),t("code",[e._v("@[新的小伙伴]")]),e._v(" 发一个文字欢迎")]),e._v(" "),t("li",[e._v("关键字触发,发送个人卡片链接")]),e._v(" "),t("li",[e._v("群内发送小程序可获取小程序"),t("code",[e._v("相关信息")])]),e._v(" "),t("li",[e._v("群内发送英文开启翻译功能，最多不可超多2000字")])])])]),e._v(" "),t("h4",{attrs:{id:"api接口"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#api接口"}},[e._v("#")]),e._v(" api接口")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://ai.youdao.com/#/",target:"_blank",rel:"noopener noreferrer"}},[e._v("有道翻译"),t("OutboundLink")],1),e._v(" "),t("a",{attrs:{href:"https://fanyi-api.baidu.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("百度翻译"),t("OutboundLink")],1)]),e._v(" "),t("p",[t("a",{attrs:{href:"https://www.tianapi.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("天行api"),t("OutboundLink")],1)]),e._v(" "),t("h4",{attrs:{id:"核心代码"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#核心代码"}},[e._v("#")]),e._v(" 核心代码")]),e._v(" "),t("h5",{attrs:{id:"入口文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#入口文件"}},[e._v("#")]),e._v(" 入口文件")]),e._v(" "),t("p",[t("strong",[e._v("bot.js")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('const { Wechaty } = require("wechaty");\nconst { PuppetPadlocal } = require("wechaty-puppet-padlocal");  // 引入协议包\nconst QrcodeTerminal = require("qrcode-terminal");  // 控制台二维码\nconst onMessage = require("./onMessage"); // 消息监听回调\nconst config = require("./config"); // 配置文件\n\n\n// 实例化机器人\nconst bot = new Wechaty({\n  puppet: new PuppetPadlocal({\n    token: config.token,\n  }),\n});\n\n// 添加监听事件\nbot\n  // 扫码登录\n  .on("scan", (qrcode, status) => {\n    console.log(\n      `Scan QR Code to login: ${status}\\nhttps://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(\n        qrcode\n      )}`\n    );\n    QrcodeTerminal.generate(qrcode);\n  })\n  // 登录监听\n  .on("login", (user) => {\n    console.log(user, "logined");\n  })\n  // 退出监听\n  .on("logout", (user) => {\n    console.log(user, "logout");\n  })\n  // 消息监听\n  .on("message", onMessage(bot))\n  .start();\n\n')])])]),t("p",[t("strong",[e._v("onMessage.js")])]),e._v(" "),t("p",[e._v("监听消息事件触发，这里只判断了接收的主要类型，文字type7，小程序type9，卡片链接type14，使用群聊@的时候你可能会遇到发送不成功，你可以使用另外的一种方法如果你也遇到room.say失效，然后我在获取文本信息处理的时候加了一层判断，因为消息监听默认也会监听到你所有群聊的消息，我测试的时候就遇到机器人主动和群里的人聊天，很尴尬所以拉了几个好友组了一个测试群方便测试")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v(" // 获取@你的群友\n let member = msg.talker();\n // 群聊@群友回复\n let response = ‘回复给群友的内容’;\n msg.room().say(response,member);\n")])])]),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('const { UrlLink } = require("wechaty");\nconst request = require("request");\nconst urlencode = require("urlencode");\nconst config = require("./config");\nconst miniProrReply = require("../utils/miniProReply");  // 小程序参数\nconst translate = require("../utils/translate"); // 百度翻译\nconst { rainbowFart, circle ,drugInstruction} = require("../utils/txAPI");  // 天行api\nconst name = config.name;\nconst roomList = config.room.roomList;\n\n// 消息监听回调\nmodule.exports = (bot) => {\n  return async function onMessage(msg) {\n    // 判断消息来自自己，直接return\n    if (msg.self()) return;\n    // 消息类型判断\n    switch (msg.type()) {\n      case 7:\n        var reg = /^[\\u4e00-\\u9fa5]+$/; // 文字正则\n        console.log("获取到文本");\n        // 回复信息是关键字 “加群”     测试成功\n        if (await isAddRoom(msg)) return;\n        // 回复信息是所管理的群聊名    测试成功\n        if (await isRoomName(bot, msg)) return;\n          // 开启机器人\n          if (msg.payload.roomId) {\n            // 添加判断 不是指定群聊的信息不触发  [不加判断机器人，机器人会回复任意所在群聊内容。。。]\n            console.log("获取到群聊消息");\n            if (msg.payload.roomId === "20856899751@chatroom") {\n            // 判断群内回复内容不为文字\n              if(!reg.test(msg.text())){\n                translate(msg);\n                return;\n              } else{\n                roomMessageReply(msg);\n                return;\n              }\n            }\n          }\n        break;\n      case 9:\n        console.log("获取到小程序"); // 测试成功\n        miniProrReply(msg);\n        break;\n      case 14:\n        console.log("获取到卡片链接"); // 测试成功\n        break;\n      default:\n        console.log("暂时不支持该类型的接收!");\n        break;\n    }\n  };\n};\n\n/**\n * @description 回复群聊信息 处理函数\n * @param {Object} msg 消息对象\n * @return {Promise} true-是 false-不是\n */\nasync function roomMessageReply(msg) {\n  const room = msg.room();\n  const text = msg.text();\n  if (await msg.mentionSelf()) {\n    // 获取消息内容，拿到整个消息文本，去掉 @名字\n    const sendText = msg.text().replace("@蔚蓝", "");\n    // 请求机器人接口回复\n    let res = await requestRobot(sendText);\n    // 返回消息，并@来自人 只可以padplus调用\n    // room.say(res, msg.fromId());\n    // 此处替换为群内回话\n    // padlocal使用 msg函数@指定人\n    // 获取@你的群友 \n    // let member = msg.talker();\n    // 群聊@群友回复\n    // msg.room().say(response,member);\n    room.say(res);  \n  } else {\n    let content = await requestRobot(msg.text());\n    room.say(content);\n    return \n  }\n\n  // 指定关键字触发\n  if (/互动/.test(text)) {\n    room.say("互动测试");\n    return \n  } else if(/彩虹屁/.test(text)){\n    let reply = await rainbowFart(params);\n    room.say(reply);\n    return \n  } else if(/文案/.test(text)){\n    let reply = await circle(params);\n    room.say(reply);\n    return \n  }else if (/蔚蓝工作室/.test(text)) {\n    room.say(new UrlLink(config.personal.introUrl));\n    return \n  } else if(/药品/.test(text)){\n    params.word = text.substring(2);\n    console.log(params);\n    let reply = await drugInstruction(params);\n    room.say(reply);\n    return \n  }\n}\n\n/**\n * @description 回复信息是关键字 “加群” 处理函数\n * @param {Object} msg 消息对象\n * @return {Promise} true-是 false-不是\n */\nasync function isAddRoom(msg) {\n  // 关键字 加群 处理\n  if (msg.text() == "加群") {\n    let roomListName = Object.keys(roomList);\n    let info = `${name}当前管理群聊有${roomListName.length}个，回复群聊名即可加入哦\\n\\n`;\n    roomListName.map((v) => {\n      info += "【" + v + "】" + "\\n";\n    });\n    msg.say(info);\n    return true;\n  }\n  return false;\n}\n\n/**\n * @description 回复信息是所管理的群聊名 处理函数\n * @param {Object} bot 实例对象\n * @param {Object} msg 消息对象\n * @return {Promise} true-是群聊 false-不是群聊\n */\nasync function isRoomName(bot, msg) {\n  // 回复信息为管理的群聊名\n  if (Object.keys(roomList).some((v) => v == msg.text())) {\n    // 通过群聊id获取到该群聊实例\n    const room = await bot.Room.find({ id: roomList[msg.text()] });\n    // 获取当前room信息\n    console.log(room);\n    // 判断是否在房间中 在-提示并结束\n    if (await room.has(msg.from())) {\n      await msg.say("您已经在房间中了");\n      return true;\n    }\n\n    // 发送群邀请\n    await room.add(msg.from());\n    await msg.say("已发送群邀请");\n    return true;\n  }\n  return false;\n}\n\n/**\n * @description 机器人请求接口 处理函数\n * @param {String} info 发送文字\n * @return {Promise} 相应内容\n */\nfunction requestRobot(info) {\n  return new Promise((resolve, reject) => {\n    let url = `https://open.drea.cc/bbsapi/chat/get?keyWord=${urlencode(info)}`;\n    request(url, (error, response, body) => {\n      if (!error && response.statusCode == 200) {\n        let res = JSON.parse(body);\n        if (res.isSuccess) {\n          let send = res.data.reply;\n          // 免费的接口，所以需要把机器人名字替换成为自己设置的机器人名字\n          send = send.replace(/Smile/g, name);\n          resolve(send);\n        } else {\n          if (res.code == 1010) {\n            resolve("没事别老艾特我，我还以为爱情来了");\n          } else {\n            resolve("你在说什么，我听不懂");\n          }\n        }\n      } else {\n        resolve("你在说什么，我脑子有点短路诶！");\n      }\n    });\n  });\n}\n\n\n')])])]),t("p",[t("strong",[e._v("utils文件夹")])]),e._v(" "),t("p",[e._v("主要存放的是一些onmessage的方法，api请求以及小程序通过xml-js提取参数类的，这部分相对简单一些，此处不再赘述")]),e._v(" "),t("p",[e._v("百度翻译 使用请到utils-translate文件替换appid以及key")]),e._v(" "),t("p",[e._v("天行api 使用请到src-config文件更换key保证正常使用")]),e._v(" "),t("p",[t("strong",[e._v("效果")])]),e._v(" "),t("p",[t("img",{attrs:{src:"https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ee265bdcd5ee4ec68fb92d4fa11c972e~tplv-k3u1fbpfcp-watermark.image",alt:"4de6c65e83c4624b6ea90fe791cd3b1.jpg"}})]),e._v(" "),t("p",[t("img",{attrs:{src:"https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/cd999294c29842378152613368ba63ec~tplv-k3u1fbpfcp-watermark.image",alt:"ad0cf4c464a0ea0e2cbe74c7d6fb1fe.jpg"}})]),e._v(" "),t("p",[t("img",{attrs:{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/285fdc819a3347e1a9ff28133bd815cb~tplv-k3u1fbpfcp-watermark.image",alt:"8e14eaa78b5a28570231048aee0060a.jpg"}})]),e._v(" "),t("p",[t("img",{attrs:{src:"https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/5dc82864ad214ba3a76b082ebbfa93b6~tplv-k3u1fbpfcp-watermark.image",alt:"274fb61aa0bf250fdac31b81acc6922.jpg"}})]),e._v(" "),t("h4",{attrs:{id:"常见问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#常见问题"}},[e._v("#")]),e._v(" 常见问题")]),e._v(" "),t("p",[e._v("github wechaty-puppet-padplus升级说明如下：\n卸载wechaty-puppet-padplus，安装wechaty-puppet-hostie\n代码中启动wechaty的wechaty-puppet-padplus更换成【wechaty-puppet-hostie】")]),e._v(" "),t("p",[e._v("npm官网  Wechaty-Puppet-Hostie模块已重命名为wechaty-puppet-service，请改用【wechaty-puppet-service】\n使用wechaty-puppet-service代替Wechaty-Puppet-Hostie")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://wechaty.js.org/docs/puppet-services/compatibility/",target:"_blank",rel:"noopener noreferrer"}},[e._v("协议使用服务兼容性"),t("OutboundLink")],1)]),e._v(" "),t("h4",{attrs:{id:"免费token"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#免费token"}},[e._v("#")]),e._v(" 免费token")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://github.com/padlocal/wechaty-puppet-padlocal/wiki/TOKEN-%E7%94%B3%E8%AF%B7%E6%96%B9%E6%B3%95",target:"_blank",rel:"noopener noreferrer"}},[e._v("padlocal 7天免费（推荐）"),t("OutboundLink")],1)]),e._v(" "),t("h4",{attrs:{id:"最后"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#最后"}},[e._v("#")]),e._v(" 最后")]),e._v(" "),t("p",[e._v("探索token和对应协议的过程有点痛苦,不过我已经搭建好了，我会给你提供最简单的搭建个人机器人的方式,一起交流学习")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://github.com/brujie/wechaty-robot",target:"_blank",rel:"noopener noreferrer"}},[e._v("项目github"),t("OutboundLink")],1)])])}),[],!1,null,null,null);n.default=a.exports}}]);