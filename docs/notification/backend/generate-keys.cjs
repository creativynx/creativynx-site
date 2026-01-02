const webpush = require('web-push');

// Generate VAPID keys
const vapidKeys = webpush.generateVAPIDKeys();

console.log('=======================================');
console.log('Paste these into your application:');
console.log('=======================================');
console.log('');
console.log('VAPID_PUBLIC_KEY:', vapidKeys.publicKey);
console.log('');
console.log('VAPID_PRIVATE_KEY:', vapidKeys.privateKey);
console.log('');
console.log('=======================================');
