importScripts('/vuetifier/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/vuetifier/_nuxt/0275942f6bbac5a6ccb8.js",
    "revision": "5aa79761338b96f227b34c176829cafe"
  },
  {
    "url": "/vuetifier/_nuxt/1de675818c8bc5a7b1a6.js",
    "revision": "fe96d7d8be93dbb144d745f4e0637063"
  },
  {
    "url": "/vuetifier/_nuxt/2dc88896c75e2fc74f22.js",
    "revision": "d0f5db07af8c2a7787d1b6984cf72f57"
  },
  {
    "url": "/vuetifier/_nuxt/3773920ce87b3f760f4e.js",
    "revision": "f5b54f354bda95fbfa8ac16531fb0630"
  },
  {
    "url": "/vuetifier/_nuxt/984d1fc1623aa997b73a.js",
    "revision": "b21b617526ed042a67247ed34655a494"
  },
  {
    "url": "/vuetifier/_nuxt/c3f98e4edfe903e0f3d5.js",
    "revision": "490817451a26c76c79602122c334b42d"
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
