// Cozy Village play-test: lets Android install the page as an app. It caches nothing of its own, so every
// launch gets the latest build from the site (the game's own data caching still keeps the big files).
self.addEventListener('install', function () {
    self.skipWaiting();
});

self.addEventListener('activate', function (e) {
    e.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', function (e) {
    e.respondWith(fetch(e.request));
});
