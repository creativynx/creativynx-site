import { useState, useCallback } from 'react';

// Helper to convert VAPID key
function urlBase64ToUint8Array(base64String: string) {
    const padding = '='.repeat((4 - base64String.length % 4) % 4);
    const base64 = (base64String + padding)
        .replace(/\-/g, '+')
        .replace(/_/g, '/');

    const rawData = window.atob(base64);
    const outputArray = new Uint8Array(rawData.length);

    for (let i = 0; i < rawData.length; ++i) {
        outputArray[i] = rawData.charCodeAt(i);
    }
    return outputArray;
}

export const useWebPush = () => {
    const [subscription, setSubscription] = useState<PushSubscription | null>(null);

    const registerServiceWorker = useCallback(async () => {
        if (!('serviceWorker' in navigator) || !('PushManager' in window)) {
            console.warn('Push Messaging not supported or Service Workers disabled.');
            return null;
        }

        try {
            // Register the SW located in public/service-worker.js
            const registration = await navigator.serviceWorker.register('/service-worker.js');
            console.log('Service Worker Registered:', registration.scope);
            return registration;
        } catch (error) {
            console.error('Service Worker Registration failed:', error);
            return null;
        }
    }, []);

    const subscribeToPush = useCallback(async (publicKey: string) => {
        const registration = await registerServiceWorker();
        if (!registration) return null;

        try {
            const existingSub = await registration.pushManager.getSubscription();
            if (existingSub) {
                setSubscription(existingSub);
                console.log('Existing Push Subscription found:', existingSub);
                return existingSub;
            }

            const newSub = await registration.pushManager.subscribe({
                userVisibleOnly: true,
                applicationServerKey: urlBase64ToUint8Array(publicKey)
            });

            setSubscription(newSub);
            console.log('New Push Subscription created:', newSub);
            return newSub;
        } catch (error) {
            console.error('Failed to subscribe to Push:', error);
            return null;
        }
    }, [registerServiceWorker]);

    const sendSubscriptionToServer = async (sub: PushSubscription, backendUrl: string) => {
        try {
            await fetch(backendUrl, {
                method: 'POST',
                body: JSON.stringify(sub),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            console.log('Subscription sent to server');
        } catch (error) {
            console.error('Error sending subscription to server:', error);
        }
    };

    return {
        subscription,
        subscribeToPush,
        sendSubscriptionToServer,
        registerServiceWorker // Exposed to allow registration without subscription if needed
    };
};
