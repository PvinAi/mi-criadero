// Mi Criadero - Service Worker
// Permite que la app funcione sin internet una vez instalada

const CACHE_NAME = 'mi-criadero-v10';
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './icons/icon-72.png',
  './icons/icon-96.png',
  './icons/icon-128.png',
  './icons/icon-144.png',
  './icons/icon-152.png',
  './icons/icon-192.png',
  './icons/icon-384.png',
  './icons/icon-512.png',
  './icons/apple-touch-icon.png',
  './icons/favicon-32.png',
  './icons/favicon-16.png',
  './icons/icon-maskable-192.png',
  './icons/icon-maskable-512.png'
];

// Al instalar: cachear todos los archivos esenciales
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS).catch(err => {
        console.warn('Algunos archivos no se pudieron cachear:', err);
      });
    })
  );
  self.skipWaiting();
});

// Al activar: limpiar caches viejos
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k))
      );
    })
  );
  self.clients.claim();
});

// Al hacer petición: servir desde cache, si no, ir a la red
// Cachea también librerías externas (Firebase, SheetJS) para que la app
// pueda abrir y funcionar sin internet después del primer uso.
self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;
  const url = event.request.url;
  // No cachear llamadas a la base de datos / autenticación (deben ir en vivo o las maneja Firestore offline)
  if (url.includes('firestore.googleapis.com') ||
      url.includes('identitytoolkit.googleapis.com') ||
      url.includes('googleapis.com/google.firestore') ||
      url.includes('/google.firestore.')) {
    return; // dejar que Firebase lo maneje (tiene su propia persistencia offline)
  }
  event.respondWith(
    caches.match(event.request).then((cached) => {
      return cached || fetch(event.request).then((response) => {
        // Cachear recursos propios y de CDN (scripts, estilos, fuentes)
        if (response && (response.status === 200 || response.type === 'opaque')) {
          const clone = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
        }
        return response;
      }).catch(() => {
        if (event.request.mode === 'navigate') {
          return caches.match('./index.html');
        }
      });
    })
  );
});
