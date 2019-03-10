importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/40582d3e29f17cf6e6d8.js",
    "revision": "96aa4e1b398e41a970de313573896446"
  },
  {
    "url": "/_nuxt/4667c47a4166da065a14.js",
    "revision": "171b85de50497405ba963bb55f0bedd9"
  },
  {
    "url": "/_nuxt/5a888521eb690eb9dbf9.js",
    "revision": "c46f2c64e8c2129e13810781b9dd0aee"
  },
  {
    "url": "/_nuxt/5c563c7a22f54de0f401.js",
    "revision": "8f46fa6d2de11f961ab31e82572891a8"
  },
  {
    "url": "/_nuxt/919e903642e21569aaa1.js",
    "revision": "f15a39a636d068082acae7eeb442e37e"
  },
  {
    "url": "/_nuxt/c03632446d994e91f911.js",
    "revision": "8a1089778a57de7f4c80a2d74bb5a07c"
  }
], {
  "cacheId": "jgregorio-profile",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')
