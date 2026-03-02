const CACHE_NAME = 'mizan-academy-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/styles/main.css',
  '/js/app.js',
  '/images/icon-192.png',
  '/images/icon-512.png'
];

// Install event - تخزين الملفات الأساسية
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache).catch(err => {
          console.log('بعض الملفات لم تتمكن من الحفظ:', err);
          return cache.addAll(['/', '/index.html']);
        });
      })
      .then(() => self.skipWaiting())
  );
});

// Activate event - تنظيف الـ cache القديمة
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch event - استراتيجية Network First مع fallback للـ cache
self.addEventListener('fetch', event => {
  const { request } = event;
  
  // تجاهل الطلبات غير GET
  if (request.method !== 'GET') {
    return;
  }

  // للصور والموارد الثابتة - استخدم cache أولاً
  if (request.destination === 'image' || request.destination === 'font' || request.destination === 'style' || request.destination === 'script') {
    event.respondWith(
      caches.match(request)
        .then(response => response || fetch(request))
        .then(response => {
          if (!response) return caches.match('/index.html');
          
          // تحديث الـ cache في الخلفية
          if (request.destination === 'image' || request.destination === 'font') {
            caches.open(CACHE_NAME).then(cache => {
              cache.put(request, response.clone());
            });
          }
          return response;
        })
        .catch(() => caches.match(request))
    );
  } else {
    // للصفحات والبيانات - جرب الانترنت أولاً
    event.respondWith(
      fetch(request)
        .then(response => {
          if (!response || response.status !== 200) {
            return caches.match(request) || caches.match('/index.html');
          }
          
          // حفظ نسخة جديدة من الصفحة
          const responseClone = response.clone();
          caches.open(CACHE_NAME).then(cache => {
            cache.put(request, responseClone);
          });
          
          return response;
        })
        .catch(() => {
          return caches.match(request) || caches.match('/index.html');
        })
    );
  }
});

// معالجة الرسائل من الصفحة
self.addEventListener('message', event => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});
