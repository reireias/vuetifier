importScripts('/vuetifier/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/vuetifier/_nuxt/1bb1dd7670ae3116f771.js",
    "revision": "5846b67cfa85fcd2b7b176c92eb440e4"
  },
  {
    "url": "/vuetifier/_nuxt/2ebf388d30c933d492a6.js",
    "revision": "a43d3a3468486e9597b891a0d31108c6"
  },
  {
    "url": "/vuetifier/_nuxt/385d33ae641430d7b299.js",
    "revision": "762807a80d2a2e4ce17122bb362bf255"
  },
  {
    "url": "/vuetifier/_nuxt/77bb99e6d86b9f553451.js",
    "revision": "29e8cf6cc4472f28c615b111b75f55b1"
  },
  {
    "url": "/vuetifier/_nuxt/f71770aae535747f6753.js",
    "revision": "147b748b30677774e0b4543380362caa"
  },
  {
    "url": "/vuetifier/_nuxt/fcc93c307d8d3f484d32.js",
    "revision": "3675b04f014aa29f18a26eaae7c01d1e"
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
