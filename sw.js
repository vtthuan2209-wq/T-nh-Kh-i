const CACHE_NAME = "tinhkhoi-cache-v1";
const urlsToCache = [
  "./",
  "./index.html",
  "./manifest.json"
];

// Cài đặt service worker và cache các file
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(urlsToCache))
  );
});

// Lấy file từ cache nếu có, nếu không thì fetch từ server
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => response || fetch(event.request))
  );
});
