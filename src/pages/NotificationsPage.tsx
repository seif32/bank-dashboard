import { Button, PageWrapper } from "../components/ui";
import { useNotifications } from "../context/NotificationContext";
import { NotificationItem } from "../features/notifications";

export default function NotificationsPage() {
  const { notifications, markAllRead, unreadCount } = useNotifications();

  if (notifications.length === 0)
    return (
      <PageWrapper>
        <div className="text-4xl font-bold grid place-items-center text-gray-900">
          No Notifications
        </div>
      </PageWrapper>
    );

  return (
    <PageWrapper>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl text-gray-900 font-bold">Notifications</h1>
          {unreadCount > 0 && (
            <Button onClick={markAllRead}>Mark All Read</Button>
          )}
        </div>
        <div className="space-y-3">
          {notifications.map((notification) => (
            <NotificationItem
              key={notification.id}
              notification={notification}
            />
          ))}
        </div>
      </div>
    </PageWrapper>
  );
}
