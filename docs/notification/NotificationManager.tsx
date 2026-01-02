import { useEffect, useRef } from "react";
import { useBrowserNotification } from "./useBrowserNotification"; // Adjust import path as needed
import { toast } from "sonner";

/**
 * NotificationManager Component
 * 
 * Responsibilities:
 * 1. Mounting the notification hook.
 * 2. Prompting the user for permission via a Toast if not yet granted.
 * 3. Handling background simulation or socket event listening (if implemented).
 * 
 * Usage: Place this component inside your main App provider tree (e.g., inside App.tsx).
 */
const NotificationManager = () => {
    const { permission, requestPermission, simulateEvents } = useBrowserNotification();
    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    // Example: Simulation Logic (Replace with real socket/polling events)
    useEffect(() => {
        if (permission === 'granted') {
            if (intervalRef.current) clearInterval(intervalRef.current);

            // Simulate an event every 30-60 seconds
            intervalRef.current = setInterval(() => {
                simulateEvents(); // Or replace with real event listener
            }, 30000 + Math.random() * 30000);
        }

        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current);
        };
    }, [permission, simulateEvents]);

    // Request permission on mount logic
    useEffect(() => {
        // If permission is default (neither granted nor denied), ask the user
        if (permission === 'default') {
            toast("Enable Notifications?", {
                description: "Stay updated with important alerts.",
                action: {
                    label: "Allow",
                    onClick: () => requestPermission()
                },
                duration: Infinity,
                // Important: duration Infinity ensures it waits for user interaction
            });
        }

        // If denied, you might want to show a different message or nothing at all
    }, [permission, requestPermission]);

    return null; // This component renders nothing visibly (except the toast trigger)
};

export default NotificationManager;
