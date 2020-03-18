importScripts('/vuetifier/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/vuetifier/_nuxt/0ac4c4538558493f1f8e.js",
    "revision": "aa62ce9848cd5e8aef6bd419bb5f95d0"
  },
  {
    "url": "/vuetifier/_nuxt/69260af391ad91a12d83.js",
    "revision": "ac5185c541ed1dd87a9ab5a764efa23a"
  },
  {
    "url": "/vuetifier/_nuxt/8662898630d02a0861fa.js",
    "revision": "5e8265591aa683fe6fc1a0e08c9ef5ba"
  },
  {
    "url": "/vuetifier/_nuxt/a641ff5d2ea42beab453.js",
    "revision": "70f23f4e74f27b183dc2f16e84549b0b"
  },
  {
    "url": "/vuetifier/_nuxt/c3f98e4edfe903e0f3d5.js",
    "revision": "490817451a26c76c79602122c334b42d"
  },
  {
    "url": "/vuetifier/_nuxt/e385ac79cfe3363124f9.js",
    "revision": "3574d9fa0755f0df35fecd8c3d28cb43"
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
