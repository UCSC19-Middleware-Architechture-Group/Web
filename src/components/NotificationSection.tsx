import { useEffect, useState } from 'react';
import { getNotifications } from '../services/api';

interface Notification {
    title: string;
    description: string;
    timestamp: string;
}

const NotificationsSection = () => {
    const [notifications, setNotifications] = useState<Notification[]>([]);

    useEffect(() => {
        getNotifications().then((response) => setNotifications(response.data));
    }, []);

    return (
        <div className="mb-4">
            <h2 className="text-2xl font-bold mb-4">Notifications</h2>
            <div className="grid grid-cols-1 gap-4">
                {notifications.map((notification, index) => (
                    <div key={index} className="p-4 border rounded-lg bg-white">
                        <h3 className="font-bold">{notification.title}</h3>
                        <p>{notification.description}</p>
                        <small>{notification.timestamp}</small>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default NotificationsSection;
