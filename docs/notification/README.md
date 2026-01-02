# Notification System Architecture

This directory contains a modular, reusable implementation of Browser Push Notifications for React applications. It is designed to be drop-in ready.

## 📂 Contents

1.  **`useBrowserNotification.ts`**: Standard Browser API hook (Simple, Foreground only).
2.  **`NotificationManager.tsx`**: Headless manager for prompts and simulation.
3.  **`useWebPush.ts`** (New): Advanced hook for Background Push Notifications (Web Push API).
4.  **`service-worker.js`** (New): Service worker for handling background events.

## 🚀 Installation & Usage (Standard)

### 1. Dependencies

This implementation uses `sonner` for the "Enable Notifications" toast prompt.

```bash
npm install sonner
```

### 2. Basic Integration

Copy the files into your project. Mount the `<NotificationManager />` component inside your root `App.tsx`.

```tsx
// App.tsx
import NotificationManager from './components/NotificationManager';

const App = () => {
  return (
    <>
      <NotificationManager /> 
      {/* Rest of app */}
    </>
  );
};
```

---

## 🌐 Advanced: Background Notifications (Web Push)

Use this method if you need to send notifications to users **even when the tab is closed**.

### 1. Setup Service Worker
Copy `service-worker.js` to your project's **`public/`** folder. It must be at the root (`/service-worker.js`) to have the correct scope.

### 2. Generate VAPID Keys
You need a Public/Private key pair for security. You can generate these using the `web-push` library in Node.js:
`npx web-push generate-vapid-keys`

### 3. Usage in React Component
Use the `useWebPush` hook to subscribe the user.

```tsx
import { useWebPush } from '@/hooks/useWebPush';
import { Button } from "@/components/ui/button";

const PushButton = () => {
    const { subscribeToPush, sendSubscriptionToServer } = useWebPush();
    const VAPID_PUBLIC_KEY = "YOUR_GENERATED_PUBLIC_KEY_HERE";

    const handleSubscribe = async () => {
        const sub = await subscribeToPush(VAPID_PUBLIC_KEY);
        if (sub) {
            // Send 'sub' to your backend API to save it in DB
            await sendSubscriptionToServer(sub, '/api/save-subscription');
            alert("Subscribed!");
        }
    };

    return <Button onClick={handleSubscribe}>Enable Background Updates</Button>;
}
```

### 4. Sending from Backend (Node.js Example)
Use the `web-push` library on your server.

```javascript
const webpush = require('web-push');

const pushSubscription = { ... }; // Retrieve from DB for specific user
const payload = JSON.stringify({ 
    title: 'Hello Backend', 
    body: 'This works even if Chrome is closed!' 
});

webpush.sendNotification(pushSubscription, payload).catch(error => {
    console.error(error.stack);
});
```
