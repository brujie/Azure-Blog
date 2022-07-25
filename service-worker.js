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
    "revision": "1f043c5d9031edee5027920b557366ab"
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
    "url": "assets/js/12.afc301e4.js",
    "revision": "6773162b99dfd12ed0f16f4bf89931d4"
  },
  {
    "url": "assets/js/13.15d3d093.js",
    "revision": "75f60b0fd61f2f235c4cafb6da25dc6b"
  },
  {
    "url": "assets/js/14.28e6e2b1.js",
    "revision": "f342b8b1da867b1bf65c4b117a90de17"
  },
  {
    "url": "assets/js/15.a9a8e133.js",
    "revision": "e8e05c3f9e5118015f2ab2c4fa113c25"
  },
  {
    "url": "assets/js/16.574bc8f5.js",
    "revision": "dacb390e586fb0697d53c353e89e308f"
  },
  {
    "url": "assets/js/17.ed723490.js",
    "revision": "c9fbd2f9215bf73e34769578d7cc647c"
  },
  {
    "url": "assets/js/18.bc9572ac.js",
    "revision": "56f645a18894ed07dd6278be66671f51"
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
    "url": "assets/js/6.336d3aaa.js",
    "revision": "adc50f387481a76bbef6b712850cbfb0"
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
    "url": "assets/js/app.161d57b4.js",
    "revision": "1e08cbd6aa1e776d154b2314c01b2e18"
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
    "revision": "11cf4c44d6712b9a45ca80a83c964670"
  },
  {
    "url": "note/cookie.html",
    "revision": "d1815148a99b2580ce9d50bf63727aa9"
  },
  {
    "url": "note/types.html",
    "revision": "7c6db370eaa9f4d6115be107e8870ea5"
  },
  {
    "url": "note/vue_ele.html",
    "revision": "fa9b3499efb8946778eb7621d8ae609b"
  },
  {
    "url": "note/webpack优化.html",
    "revision": "97a749afd0ddabbbc6a15fcb271e3de8"
  },
  {
    "url": "note/wechat_bot_v2.html",
    "revision": "36a4dfbffb2cf3e437ec723cf4d8633e"
  },
  {
    "url": "note/wechat_bot.html",
    "revision": "f8f3596280c6f1202ea469b7b0083c38"
  },
  {
    "url": "note/weppack打包优化.html",
    "revision": "92f04d3fa6ef5e4c675dc2cb59445957"
  },
  {
    "url": "note/力扣初级算法.html",
    "revision": "49e6522a7b4ffcde579e38eca5fbe593"
  },
  {
    "url": "note/数组函数.html",
    "revision": "c7641a2bb8c539ffde41ad4af0465831"
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
