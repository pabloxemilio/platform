// No-op service worker for LOCAL dev of the mirrored client.
// The original KBP SW aggressively caches and was serving stale/404 responses
// for files that now exist — which broke local loading. This version caches
// nothing and purges any existing cache so the network is always used.
self.addEventListener('install', (e) => { self.skipWaiting(); });
self.addEventListener('activate', (e) => { e.waitUntil((async () => {
  try { const keys = await caches.keys(); await Promise.all(keys.map((k) => caches.delete(k))); } catch (_) {}
  await self.clients.claim();
})()); });
// No fetch handler at all -> browser goes straight to the network for everything.
