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
    "revision": "89dd671edd9bf9b74692937ed7c4abf6"
  },
  {
    "url": "assets/css/0.styles.4b1907c1.css",
    "revision": "2d46b9953507678bcaa58a96c0f7e184"
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
    "url": "assets/js/10.fb91bdc5.js",
    "revision": "903a515100294a6a89a7b4f5c3678776"
  },
  {
    "url": "assets/js/11.226fa1ad.js",
    "revision": "cdfeae66e0a180184b723fd729f52576"
  },
  {
    "url": "assets/js/12.a1563c38.js",
    "revision": "5d1b985a07440d149c219be5cd7cac55"
  },
  {
    "url": "assets/js/13.7a36cba5.js",
    "revision": "9a2353cb5bf7e6526b7216f818328dcc"
  },
  {
    "url": "assets/js/14.34ca0eb8.js",
    "revision": "af4d39a9141f772a17b4d039489495ee"
  },
  {
    "url": "assets/js/15.535608b0.js",
    "revision": "be4742b4f3251d380b5255bb71c07398"
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
    "url": "assets/js/18.19128097.js",
    "revision": "a19a1a5531f5690354b3977d58a1a383"
  },
  {
    "url": "assets/js/19.4f965571.js",
    "revision": "e34f6322e4da520b6310b88b36baf3d1"
  },
  {
    "url": "assets/js/2.8e2865ab.js",
    "revision": "6353533f71335a77541f8493b4575cad"
  },
  {
    "url": "assets/js/20.394445a4.js",
    "revision": "74d7e13ef225add3d2a9733f965d92f1"
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
    "url": "assets/js/5.7122eecc.js",
    "revision": "e47179ef84e304cac1802d31b963d087"
  },
  {
    "url": "assets/js/6.60f99556.js",
    "revision": "02762b2acb97340d17595bcaec6a8a4e"
  },
  {
    "url": "assets/js/7.fa6dc4d3.js",
    "revision": "fb5becb38bd69d0863d710849b140663"
  },
  {
    "url": "assets/js/8.b13f6e59.js",
    "revision": "626b41fef41835ad47234e533003f210"
  },
  {
    "url": "assets/js/9.6e10d94b.js",
    "revision": "3c8d5b79dd265c385cae113d87282741"
  },
  {
    "url": "assets/js/app.200a8a8b.js",
    "revision": "ae110676a83c40e220534d9a2313b614"
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
    "revision": "6137c2143128a3184cc8e794e1b83761"
  },
  {
    "url": "note/cookie.html",
    "revision": "6175e3491141fe4f65ea544c35489f2a"
  },
  {
    "url": "note/types.html",
    "revision": "95f82b8dcb0861970c7517ab16b02de6"
  },
  {
    "url": "note/vue_ele.html",
    "revision": "69ebb588dc4535d8272f12e1a0f95a27"
  },
  {
    "url": "note/webpack优化.html",
    "revision": "ff634da13348acd4cf5d902389a3610a"
  },
  {
    "url": "note/wechat_bot_v2.html",
    "revision": "8e2475bb65485ed37f4343c0a5db3a12"
  },
  {
    "url": "note/wechat_bot.html",
    "revision": "cb113f9dd652ce8e77a005792a43c878"
  },
  {
    "url": "note/weppack打包优化.html",
    "revision": "18df28c5b5988a66c7f236a5beaa4c4f"
  },
  {
    "url": "note/力扣初级算法.html",
    "revision": "48546794814ed2d0058a82a030eff64f"
  },
  {
    "url": "note/数组函数.html",
    "revision": "d3d6ff85b0b980086af334083e68ea39"
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
