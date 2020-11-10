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
    "url": "/vuetifier/_nuxt/index.8769b2a.js",
    "revision": "167881afa2df00a1753e879b2724fcd3"
  },
  {
    "url": "/vuetifier/_nuxt/runtime.0ad3ee2.js",
    "revision": "a8b189aeeb547a42db682f163c2e44df"
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
