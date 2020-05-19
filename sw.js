importScripts('/vuetifier/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/vuetifier/_nuxt/1bb1dd7670ae3116f771.js",
    "revision": "5846b67cfa85fcd2b7b176c92eb440e4"
  },
  {
    "url": "/vuetifier/_nuxt/334de37b6426e35d71eb.js",
    "revision": "25ed3440b192bb428a49490bb072a44d"
  },
  {
    "url": "/vuetifier/_nuxt/5b78caf2da452c8ac987.js",
    "revision": "e193492fa453ff87406df6f75ebf9f56"
  },
  {
    "url": "/vuetifier/_nuxt/5f9a32d52481401ae5e0.js",
    "revision": "443389d0be902b6bfcaa6456d4c90027"
  },
  {
    "url": "/vuetifier/_nuxt/624aa4bc3da3de1b1e85.js",
    "revision": "262d8e2693a1c8a3ece37ca18df65f05"
  },
  {
    "url": "/vuetifier/_nuxt/f0c81d727c53a21f1ad9.js",
    "revision": "e51f0b6eb028a8bee006fb77d908fafc"
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
