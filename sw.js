importScripts('/vuetifier/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/vuetifier/_nuxt/00ec06073d1a25caa156.js",
    "revision": "ffc491e2266a91e6071e4667912bb3e2"
  },
  {
    "url": "/vuetifier/_nuxt/48d1a2214b1e6fada3c8.js",
    "revision": "98305ce1f7f6098209fc6b8a7f8da497"
  },
  {
    "url": "/vuetifier/_nuxt/600da93328c82089c2da.js",
    "revision": "e435cd5d8ffd40e8f5bade55c32dddec"
  },
  {
    "url": "/vuetifier/_nuxt/7e48d97e34404c1f1ce7.js",
    "revision": "9e056b3e09887c52a446c524cd0fbef9"
  },
  {
    "url": "/vuetifier/_nuxt/adc7f7f57ebb9e619609.js",
    "revision": "9149d1aea8aa3068b2995a3ff84d0e2f"
  },
  {
    "url": "/vuetifier/_nuxt/d9b1f1ea1edf725f6353.js",
    "revision": "9688017a839c6fcc95548216e6832392"
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
