// service-worker.js - مدينتنا نظيفة
var CACHE_NAME = 'm-ville-propre-v2';
var urlsToCache = [
  '/school-/',
  '/school-/index.html',
  '/school-/login.html',
  '/school-/reset.html',
  '/school-/home.html',
  '/school-/report.html',
  '/school-/sort.html',
  '/school-/driver.html',
  '/school-/dashboard.html',
  '/school-/company.html',
  '/school-/schedule.html',
  '/school-/invoice.html',
  '/school-/notifications.html',
  '/school-/rewards.html',
  '/school-/my-requests.html',
  '/school-/qrcode.html'
];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});

self.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.filter(function(name) {
          return name !== CACHE_NAME;
        }).map(function(name) {
          return caches.delete(name);
        })
      );
    })
  );
});

self.addEventListener('push', function(event) {
  var data = event.data ? event.data.json() : {};
  var title = data.title || 'مدينتنا نظيفة';
  var options = {
    body: data.message || 'هناك تحديث جديد',
    vibrate: [200, 100, 200],
    tag: 'm-ville-propre',
    renotify: true
  };
  event.waitUntil(self.registration.showNotification(title, options));
});

self.addEventListener('notificationclick', function(event) {
  event.notification.close();
  event.waitUntil(
    clients.openWindow('/school-/')
  );
});
