const CACHE_NAME = 'eatlyhub-v4-app';
const ASSETS = [
  './',
  './index.html',
  './loging.html',
  './home.html',
  './manifest.json',
  'https://cdn-icons-png.flaticon.com/512/3075/3075977.png',
  'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap',
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request))
  );
});
