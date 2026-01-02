const webpush = require('web-push');

// 1. CONFIGURE YOUR KEYS HERE
const publicVapidKey = 'PASTE_YOUR_PUBLIC_KEY_HERE';
const privateVapidKey = 'PASTE_YOUR_PRIVATE_KEY_HERE';

// 2. CONFIGURE THE SUBSCRIPTION (Get this from the Frontend console log)
// It looks like: { endpoint: '...', keys: { p256dh: '...', auth: '...' } }
const subscription = {
    endpoint: 'PASTE_ENDPOINT_HERE',
    keys: {
        p256dh: 'PASTE_P256DH_HERE',
        auth: 'PASTE_AUTH_HERE'
    }
};

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
