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
    "revision": "1297e39a9c1471e1af417269143f00bf"
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
    "url": "assets/js/13.18fb5488.js",
    "revision": "586d25a77f515d7fff5fd5882ba97189"
  },
  {
    "url": "assets/js/14.cf78720a.js",
    "revision": "3fdd0d388729feab43be7233bbfcf0bf"
  },
  {
    "url": "assets/js/15.535608b0.js",
    "revision": "be4742b4f3251d380b5255bb71c07398"
  },
  {
    "url": "assets/js/16.e2a42ce7.js",
    "revision": "731132e585609a82035591ee82396345"
  },
  {
    "url": "assets/js/17.c13e83ef.js",
    "revision": "3fa92defcd80634dc983043f27777932"
  },
  {
    "url": "assets/js/18.e2449f12.js",
    "revision": "9248fdefda570075057e6c4c5c04834f"
  },
  {
    "url": "assets/js/19.4400ced0.js",
    "revision": "c9d02e588be481662929a1e49d0f78fc"
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
    "url": "assets/js/6.925570c8.js",
    "revision": "c10d9fdf99dae0aa40b29d501715a111"
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
    "url": "assets/js/app.d75311eb.js",
    "revision": "392b0fee82593979bf040442d3d8b819"
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
    "revision": "aa80cd12661c6a04948f7eb1409548f0"
  },
  {
    "url": "note/cookie.html",
    "revision": "b146f7485d3ba6467c79fa4651142520"
  },
  {
    "url": "note/types.html",
    "revision": "af7391564c55e1fd6d7694f0c1dc37fd"
  },
  {
    "url": "note/vue_ele.html",
    "revision": "418f39f732cd9f2326e2eb286ee63a62"
  },
  {
    "url": "note/webpack优化.html",
    "revision": "e3b358ae95e173006f5a9c7e1b14ff1d"
  },
  {
    "url": "note/wechat_bot_v2.html",
    "revision": "b03ec7b6763957be160c0d1e7f89d81e"
  },
  {
    "url": "note/wechat_bot.html",
    "revision": "4a94bf0b9e5004629c93b12c930d827f"
  },
  {
    "url": "note/weppack打包优化.html",
    "revision": "9407684aa9a44628acda3ba10aef9a40"
  },
  {
    "url": "note/力扣初级算法.html",
    "revision": "a9d2532640b93f3b89ca1740eb68a68d"
  },
  {
    "url": "note/数组函数.html",
    "revision": "e37d49a326db2fdcb5c133f061bc912d"
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
