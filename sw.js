// NAMA CACHE (Ingatan Browser)
const CACHE_NAME = 'pgri-samarang-v1';

// DAFTAR FILE YANG DISIMPAN KE HP PENGGUNA (Biar loadingnya secepat kilat)
const urlsToCache = [
  './',
  './index.html',
  './logo_pgri.png',
  './logo_pgri.jpg'
];

// PROSES INSTALL SERVICE WORKER (Sihir Dimulai)
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Cache berhasil dibuka');
        return cache.addAll(urlsToCache);
      })
  );
});

// PROSES PENGAMBILAN DATA (Memprioritaskan internet, kalau putus pakai cache)
self.addEventListener('fetch', event => {
  event.respondWith(
    fetch(event.request).catch(() => {
      return caches.match(event.request);
    })
  );
});
