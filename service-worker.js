/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "1.png",
    "revision": "437f890fe1fae1830fb5afc9d2d70f5c"
  },
  {
    "url": "2.png",
    "revision": "a83b0dc448e25286df6c1393a70b385d"
  },
  {
    "url": "3.png",
    "revision": "6366dadee2a38c7ed97b92d9606b6810"
  },
  {
    "url": "404.html",
    "revision": "777b303a3a4aeb0552b3e33c80b2b857"
  },
  {
    "url": "assets/css/0.styles.3e704693.css",
    "revision": "cfa8389d3a9e636127249fa759992a17"
  },
  {
    "url": "assets/img/1.437f890f.png",
    "revision": "437f890fe1fae1830fb5afc9d2d70f5c"
  },
  {
    "url": "assets/img/2.a83b0dc4.png",
    "revision": "a83b0dc448e25286df6c1393a70b385d"
  },
  {
    "url": "assets/img/3.6366dade.png",
    "revision": "6366dadee2a38c7ed97b92d9606b6810"
  },
  {
    "url": "assets/img/book1.ce22cfc5.png",
    "revision": "ce22cfc550e9ed45760148d9e6b2121c"
  },
  {
    "url": "assets/img/book2.bf9b4a21.png",
    "revision": "bf9b4a21e6eae5da28b20af6f415d09a"
  },
  {
    "url": "assets/img/book3.298d0edc.png",
    "revision": "298d0edc6087a221f1192d1bdafa2f16"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.9e6da9f8.js",
    "revision": "c4addfb7e25cb0a62a2e849c6250e7a3"
  },
  {
    "url": "assets/js/11.226fa1ad.js",
    "revision": "cdfeae66e0a180184b723fd729f52576"
  },
  {
    "url": "assets/js/12.f0c43c66.js",
    "revision": "1326ea75fb9aeca32f805f83314d9574"
  },
  {
    "url": "assets/js/13.07042c34.js",
    "revision": "48e1b95e420bb02c8b4c5dacfb73e466"
  },
  {
    "url": "assets/js/14.b12a708e.js",
    "revision": "5aed73c35c94df92d0227774186a6d1f"
  },
  {
    "url": "assets/js/15.a333f84f.js",
    "revision": "bdb88e24046a2caa5db9a655d878b309"
  },
  {
    "url": "assets/js/16.07422923.js",
    "revision": "4a728132c6e7aa2ce3885578473f8a06"
  },
  {
    "url": "assets/js/17.946fd42f.js",
    "revision": "14f8cf3e0bd280ffccb6caaf2c6cdc42"
  },
  {
    "url": "assets/js/18.e2449f12.js",
    "revision": "9248fdefda570075057e6c4c5c04834f"
  },
  {
    "url": "assets/js/19.7d983a80.js",
    "revision": "bb8757218b5acb03178c6c58b7939f0e"
  },
  {
    "url": "assets/js/2.8e2865ab.js",
    "revision": "6353533f71335a77541f8493b4575cad"
  },
  {
    "url": "assets/js/20.50441486.js",
    "revision": "4ab6097ed7195f6cae2ef47e261250d6"
  },
  {
    "url": "assets/js/21.f38f2bb9.js",
    "revision": "e3319807514289a0b58ae82ddf994e03"
  },
  {
    "url": "assets/js/3.b55d8d3a.js",
    "revision": "57e9d4abf61fca6d86af1bfa8dab0544"
  },
  {
    "url": "assets/js/4.08bb3e8b.js",
    "revision": "ffb16498bd4c3fd4511b443d558b6f47"
  },
  {
    "url": "assets/js/5.69f3d3a9.js",
    "revision": "ea17d806722b73381429d8c688a4a187"
  },
  {
    "url": "assets/js/6.960dd675.js",
    "revision": "f25ce48381e18b6c0b2efa5a2e6f2973"
  },
  {
    "url": "assets/js/7.fa6dc4d3.js",
    "revision": "fb5becb38bd69d0863d710849b140663"
  },
  {
    "url": "assets/js/8.70703c9b.js",
    "revision": "3d33049c6c267aa8331e0f6c06c7e7a0"
  },
  {
    "url": "assets/js/9.a91721b5.js",
    "revision": "d7a2eb2998715ffa0bfd6830f90d54b8"
  },
  {
    "url": "assets/js/app.4ff84c4f.js",
    "revision": "875c72c4845a51e0fb0fb71f1b54d877"
  },
  {
    "url": "book1.png",
    "revision": "ce22cfc550e9ed45760148d9e6b2121c"
  },
  {
    "url": "book2.png",
    "revision": "bf9b4a21e6eae5da28b20af6f415d09a"
  },
  {
    "url": "book3.png",
    "revision": "298d0edc6087a221f1192d1bdafa2f16"
  },
  {
    "url": "index.html",
    "revision": "591ea65149478bafd024e3bd64ba350e"
  },
  {
    "url": "note/cookie.html",
    "revision": "1dbb3103cf67e9933b7ecd19bf3cfc56"
  },
  {
    "url": "note/types.html",
    "revision": "8e8c56f14fe9507091c839ed0bf74617"
  },
  {
    "url": "note/vue_ele.html",
    "revision": "f83bf2da61154ac85f6d868ac9704f24"
  },
  {
    "url": "note/webpack优化.html",
    "revision": "f8b77aa6091e742a4e88aad6af040f0c"
  },
  {
    "url": "note/wechat_bot_v2.html",
    "revision": "91edcbac26c70a07435b3be1753cf996"
  },
  {
    "url": "note/wechat_bot.html",
    "revision": "2cfc89ca9c6e01ea612d37daa748188f"
  },
  {
    "url": "note/weppack打包优化.html",
    "revision": "28ca19d7dfbb2143a0e229c8cad8669b"
  },
  {
    "url": "note/力扣初级算法.html",
    "revision": "303978227c4b03072b884f73c721fbb6"
  },
  {
    "url": "note/数组函数.html",
    "revision": "c1c0954c210ab7100fd6f79c981214c5"
  },
  {
    "url": "note/深克隆进阶.html",
    "revision": "3e7a4ab755ccb96ffa5c94b944310e32"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
