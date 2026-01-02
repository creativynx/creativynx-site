# Backend Notification Scripts

This folder contains scripts to help you simulate backend triggers.

## Prerequisites
You need to install `web-push`:

```bash
npm install web-push
```

## Step 1: Generate Keys
Run the generator to get your VAPID keys.

```bash
node generate-keys.cjs
```

1.  Copy the **Public Key** and put it in your React frontend (where you call `subscribeToPush`).
2.  Copy the **Private Key** and put it in `trigger-push.cjs`.

## Step 2: Get a Subscription
1.  Run your React App.
2.  Grant notification permissions.
3.  Check the Console (`F12`). You should see a "Subscription" object logged (if you integrated `useWebPush` correctly).
4.  Copy that object.

## Step 3: Send Notification
1.  Open `trigger-push.cjs`.
2.  Paste your keys and the subscription object.
3.  Run the script:

```bash
node trigger-push.cjs
```

You should see the notification appear immediately.
