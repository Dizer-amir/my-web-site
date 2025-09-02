const CACHE_NAME = 'dawa-app-v1';
const urlsToCache = [
  '/',
  '/manifest.json',
  '/icons/icon-192x192.png',
  '/icons/icon-512x512.png',
  'https://fonts.googleapis.com/css2?family=Cairo:wght@400;500;600;700&family=Noto+Sans+Arabic:wght@400;500;600;700&display=swap'
];

// تثبيت Service Worker
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('فتح cache');
        return cache.addAll(urlsToCache);
      })
  );
});

// استلام الطلبات
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // إرجاع الملف المخزن أو جلبه من الشبكة
        if (response) {
          return response;
        }
        return fetch(event.request);
      }
    )
  );
});

// تحديث Service Worker
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log('حذف cache قديم:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});