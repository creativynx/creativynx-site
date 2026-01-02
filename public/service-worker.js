/**
 * Service Worker for Push Notifications
 * 
 * Registers event listeners for 'push' and 'notificationclick'.
 */

self.addEventListener('push', function (event) {
    if (!event.data) return;

    // Parse the payload sent from the backend
    let data = {};
    try {
        data = event.data.json();
    } catch (e) {
        data = { body: event.data.text() };
    }

    const { title, body, icon, url } = data;

    const options = {
        body: body || 'New update available',
        icon: icon || '/favicon.ico',
        data: {
            url: url || '/' // Link to open on click
        },
        requireInteraction: true // Keep notification visible
    };

    event.waitUntil(
        self.registration.showNotification(title || 'CreativynX', options)
    );
});

self.addEventListener('notificationclick', function (event) {
    event.notification.close();

    event.waitUntil(
        clients.matchAll({ type: 'window', includeUncontrolled: true }).then(function (clientList) {
            const urlToOpen = event.notification.data.url || '/';

            // Focus existing tab if open
            for (let i = 0; i < clientList.length; i++) {
                const client = clientList[i];
                if (client.url === urlToOpen && 'focus' in client) {
                    return client.focus();
                }
            }
            // Otherwise open update
            if (clients.openWindow) {
                return clients.openWindow(urlToOpen);
            }
        })
    );
});
