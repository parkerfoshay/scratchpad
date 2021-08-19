importScripts("precache-manifest.5a98c11d652ce877f1e4bb13575a2588.js", "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

workbox.precaching.precacheAndRoute(self.__precacheManifest);

workbox.routing.registerRoute(
  /https:\/\/api\.exchangeratesapi\.io\/latest/,
  new workbox.strategies.NetworkFirst({
    cacheName: "currencies",
    plugins: [
      new workbox.expiration.Plugin({
        maxAgeSeconds: 10 * 60 // 10 minutes
      })
    ]
  })
);

addEventListener("message", event => {
  if (event.data && event.data.type === "SKIP_WAITING") {
    skipWaiting();
  }
});

