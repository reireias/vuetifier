importScripts('/vuetifier/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/vuetifier/_nuxt/app.bcb4671.js",
    "revision": "8315030370fd1a1809f1e40811768a9f"
  },
  {
    "url": "/vuetifier/_nuxt/commons/app.861dfba.js",
    "revision": "2b9712811a48947c9ef0b4a55d82f783"
  },
  {
    "url": "/vuetifier/_nuxt/index.eadadef.js",
    "revision": "816bdc2ee151ed406415eeaaf404ebdc"
  },
  {
    "url": "/vuetifier/_nuxt/runtime.1e14e6a.js",
    "revision": "96ed91387c53bd9541096d64c517e571"
  },
  {
    "url": "/vuetifier/_nuxt/vendors~app.4537504.js",
    "revision": "8b6b330dfcd01fe83b0eb0f0b264e2f1"
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
