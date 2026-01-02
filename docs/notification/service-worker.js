/**
 * Service Worker for Push Notifications
 * 
 * Instructions:
 * 1. Place this file in your public/ directory (e.g., public/service-worker.js).
 * 2. Register it using the useWebPush hook.
 */

self.addEventListener('push', function (event) {
    if (!event.data) return;

    const data = event.data.json();
    const { title, body, icon, url } = data;

    const options = {
        body: body || 'New notification',
        icon: icon || '/favicon.ico',
        data: {
            url: url || '/' // URL to open on click
        },
        requireInteraction: true // Optional: Keeps notification on screen
    };

    event.waitUntil(
        self.registration.showNotification(title, options)
    );
});

self.addEventListener('notificationclick', function (event) {
    event.notification.close();

    // Check if the current tab is already open and focus it, otherwise open new
    event.waitUntil(
        clients.matchAll({ type: 'window', includeUncontrolled: true }).then(function (clientList) {
            const urlToOpen = event.notification.data.url || '/';

            for (let i = 0; i < clientList.length; i++) {
                const client = clientList[i];
                // If specific URL logic is needed, check client.url
                if ('focus' in client) {
                    return client.focus();
                }
            }
            if (clients.openWindow) {
                return clients.openWindow(urlToOpen);
            }
        })
    );
});
