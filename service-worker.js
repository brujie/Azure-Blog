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
    "revision": "40cbbd0dabefadc9dce7ff1aea9eaf4d"
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
    "url": "assets/js/12.0d911da3.js",
    "revision": "9e4ae4455d978c22da8d0f24d54d070b"
  },
  {
    "url": "assets/js/13.6fca1973.js",
    "revision": "0cdbd9fca3040b283a2171b3598bcaaa"
  },
  {
    "url": "assets/js/14.9089e494.js",
    "revision": "4aa781d6463e9ada1c5ccf2c9e28a880"
  },
  {
    "url": "assets/js/15.cece68d5.js",
    "revision": "ad4c9c40f9d821b63302ef02add9c3c6"
  },
  {
    "url": "assets/js/16.17b90aea.js",
    "revision": "bd3c614e1a9ca34e105f281d2eb1f543"
  },
  {
    "url": "assets/js/17.ba7b80c7.js",
    "revision": "72c03dc22e7f25ade66efa4b924d68f6"
  },
  {
    "url": "assets/js/18.6e22bc27.js",
    "revision": "d2e66e7d53a523a0d5c655cdfb882616"
  },
  {
    "url": "assets/js/19.f675a374.js",
    "revision": "edc180b9daa433b09f956e2cc4491e82"
  },
  {
    "url": "assets/js/2.8e2865ab.js",
    "revision": "6353533f71335a77541f8493b4575cad"
  },
  {
    "url": "assets/js/20.3f274f3f.js",
    "revision": "e92e5ccda428f2c95cda7f094b1ffe0b"
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
    "url": "assets/js/5.7122eecc.js",
    "revision": "e47179ef84e304cac1802d31b963d087"
  },
  {
    "url": "assets/js/6.3b7f9c7f.js",
    "revision": "c575ae176efc8e2b4647b961a38cc460"
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
    "url": "assets/js/9.6e10d94b.js",
    "revision": "3c8d5b79dd265c385cae113d87282741"
  },
  {
    "url": "assets/js/app.d3a22b07.js",
    "revision": "a5fe1a085a738ddfb48a76f04cc93ab3"
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
    "revision": "7ff758734e881e838bb9df52be00cafb"
  },
  {
    "url": "note/cookie.html",
    "revision": "7f855d38c95164d8618eccc97c9a7201"
  },
  {
    "url": "note/messageInfo.html",
    "revision": "8777a29e6c2fccf7927eb398c8eaef11"
  },
  {
    "url": "note/types.html",
    "revision": "014d717e74c4a8ab4a3ea4903cdf56dd"
  },
  {
    "url": "note/vue_ele.html",
    "revision": "9b628b2bec4767832625b96f45e6efc1"
  },
  {
    "url": "note/webpack优化.html",
    "revision": "5212f00ebab4dc9c5af8163fe22ab58e"
  },
  {
    "url": "note/wechat_bot_v2.html",
    "revision": "d8379b04e98abe04f537acd6eb950700"
  },
  {
    "url": "note/wechat_bot.html",
    "revision": "dc68d6215dbb9ac30130974b3d9b1548"
  },
  {
    "url": "note/weppack打包优化.html",
    "revision": "7651dae38a3033040c7029c4c638a680"
  },
  {
    "url": "note/力扣初级算法.html",
    "revision": "c26d6b979817555923cbb052aadfe6db"
  },
  {
    "url": "note/装饰者模式.html",
    "revision": "249e67146126e6d8d1e46c6b8c7f9aa9"
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
