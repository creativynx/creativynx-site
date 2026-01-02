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
            console.error('Push Messaging not supported');
            return;
        }

        try {
            const registration = await navigator.serviceWorker.register('/service-worker.js');
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
            // Check if already subscribed
            const existingSub = await registration.pushManager.getSubscription();
            if (existingSub) {
                setSubscription(existingSub);
                return existingSub;
            }

            // Create new subscription
            const newSub = await registration.pushManager.subscribe({
                userVisibleOnly: true,
                applicationServerKey: urlBase64ToUint8Array(publicKey)
            });

            setSubscription(newSub);
            return newSub;
        } catch (error) {
            console.error('Failed to subscribe to Push:', error);
            return null;
        }
    }, [registerServiceWorker]);

    // This function sends the subscription object to your backend
    const sendSubscriptionToServer = async (sub: PushSubscription, backendUrl: string) => {
        await fetch(backendUrl, {
            method: 'POST',
            body: JSON.stringify(sub),
            headers: {
                'Content-Type': 'application/json'
            }
        });
    };

    return {
        subscription,
        subscribeToPush,
        sendSubscriptionToServer
    };
};
