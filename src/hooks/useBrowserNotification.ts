import { useState, useCallback, useEffect } from 'react';
import { toast } from 'sonner';

/**
 * useBrowserNotification
 * 
 * Clean implementation for foreground notifications.
 * Can be used alongside Web Push for local interaction feedback.
 */
export const useBrowserNotification = () => {
    const [permission, setPermission] = useState<NotificationPermission>(() => {
        if (typeof window !== 'undefined' && 'Notification' in window) {
            return Notification.permission;
        }
        return 'default';
    });

    useEffect(() => {
        if ('Notification' in window) {
            setPermission(Notification.permission);
        }
    }, []);

    const requestPermission = useCallback(async () => {
        if (!('Notification' in window)) {
            return;
        }

        try {
            const result = await Notification.requestPermission();
            setPermission(result);
            if (result === 'granted') {
                new Notification('Notifications Enabled', {
                    body: 'You are now subscribed to updates.',
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
                        requireInteraction: true,
                        silent: false,
                        ...options,
                    });

                    notification.onclick = () => {
                        window.focus();
                        notification.close();
                    };

                } catch (e) {
                    console.error("Notification error:", e);
                }
            }
        },
        [permission]
    );

    return { permission, requestPermission, sendNotification };
};
