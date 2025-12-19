const CACHE_NAME = 'eatlyhub-v3-pro';
const ASSETS = [
  './index.html',
  './manifest.json',
  'https://cdn-icons-png.flaticon.com/512/3075/3075977.png'
];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS)));
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request))
  );
});
