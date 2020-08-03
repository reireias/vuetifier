importScripts('/vuetifier/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/vuetifier/_nuxt/app.a8c0c98.js",
    "revision": "426714494689c7359ba0ecec203b73ce"
  },
  {
    "url": "/vuetifier/_nuxt/commons/app.3859e98.js",
    "revision": "e46ce3b05d36401a66ac3a59ae8efb2d"
  },
  {
    "url": "/vuetifier/_nuxt/index.4efdb12.js",
    "revision": "29f66569c54d4f1981efbafcdafcc9e5"
  },
  {
    "url": "/vuetifier/_nuxt/runtime.f129ccf.js",
    "revision": "ec41845d7ef7fb94edfededdd3608acb"
  },
  {
    "url": "/vuetifier/_nuxt/vendors~app.39edb35.js",
    "revision": "341a3ff9b1740e8c9d279d275e8a5dfd"
  }
], {
  "cacheId": "vuetifier",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/vuetifier/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/vuetifier/.*'), workbox.strategies.networkFirst({}), 'GET')
