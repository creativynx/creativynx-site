import { useState, useCallback, useEffect } from 'react';
import { toast } from 'sonner';

/**
 * Custom hook to handle Browser Notifications.
 * Provides methods to request permission and send notifications.
 */
export const useBrowserNotification = () => {
    const [permission, setPermission] = useState<NotificationPermission>(
        'default'
    );

    useEffect(() => {
        if ('Notification' in window) {
            setPermission(Notification.permission);
        }
    }, []);

    const requestPermission = useCallback(async () => {
        if (!('Notification' in window)) {
            console.log('This browser does not support desktop notification');
            return;
        }

        try {
            const result = await Notification.requestPermission();
            setPermission(result);
            if (result === 'granted') {
                new Notification('Notifications Enabled', {
                    body: 'You will now receive updates.',
                    icon: '/favicon.ico'
                });
            }
        } catch (error) {
            console.error('Error requesting notification permission:', error);
        }
    }, []);

    const sendNotification = useCallback(
        (title: string, options?: NotificationOptions) => {
            if (permission === 'granted') {
                try {
                    const notification = new Notification(title, {
                        icon: '/favicon.ico',
                        requireInteraction: true, // Keep it on screen until user interacts
                        silent: false,
                        ...options,
                    });

                    notification.onclick = () => {
                        window.focus();
                        notification.close();
                    };

                    // Optional: Handle errors silently or log them
                    notification.onerror = (e) => {
                        console.error("Notification display error:", e);
                    };

                } catch (e) {
                    console.error("Notification construction error:", e);
                }
            } else {
                console.warn("Notification permission not granted.");
            }
        },
        [permission]
    );

    const simulateEvents = useCallback(() => {
        if (permission !== 'granted') return;

        const events = [
            { title: 'New Profile View', body: 'Someone viewed your profile.' },
            { title: 'New Message', body: 'You have a new message.' },
            { title: 'Update Available', body: 'A new version is available.' },
        ];

        const randomEvent = events[Math.floor(Math.random() * events.length)];
        sendNotification(randomEvent.title, { body: randomEvent.body });
    }, [permission, sendNotification]);

    return { permission, requestPermission, sendNotification, simulateEvents };
};
