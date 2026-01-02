require('dotenv').config({ path: '../../../.env' }); // Adjust path to root .env
const webpush = require('web-push');

// 1. CONFIGURE YOUR KEYS HERE
const publicVapidKey = process.env.VITE_VAPID_PUBLIC_KEY;
const privateVapidKey = process.env.VAPID_PRIVATE_KEY;

if (!publicVapidKey || !privateVapidKey) {
    console.error('❌ Missing VAPID keys in .env file');
    process.exit(1);
}

// 2. CONFIGURE THE SUBSCRIPTION (Get this from the Frontend console log)
// It looks like: { endpoint: '...', keys: { p256dh: '...', auth: '...' } }
const subscription = { "endpoint": "https://fcm.googleapis.com/fcm/send/dhs7J0xo5ao:APA91bEZrw7deTvkKFhlUD2ck3L8g6n1bU1CXA3gvjE3RCASDftde-eDW9tK0UEoLMxwjn4p02wABnu9FHSRTOyjo9bpMuC03paG0a4wUnjQD2KxPxKKYSU7l9PwMTPhzwC5wi-jbb-x", "expirationTime": null, "keys": { "p256dh": "BOmlQrpeyVos-LF23zct3mQ1z-Ka3JGStOTH-Fu9-v83bhD9BYEaPn3v8r7gtwXPiRhI2ZISWb6NT1_l1GsGGMg", "auth": "zkTX3Lj8rMDJjXg-9hokKQ" } };

// 3. CONFIGURE PAYLOAD
const payload = JSON.stringify({
    title: 'Backend Test',
    body: 'This notification was triggered from Node.js!',
    icon: 'http://localhost:8080/favicon.ico', // Use absolute URL if possible
    url: 'http://localhost:8080/blog'
});

// Setup
webpush.setVapidDetails(
    'mailto:test@example.com',
    publicVapidKey,
    privateVapidKey
);

// Send
webpush.sendNotification(subscription, payload)
    .then(res => console.log('✅ Notification Sent! Status:', res.statusCode))
    .catch(err => console.error('❌ Error sending notification:', err));
