import { format } from "date-fns";
import { Badge, Card } from "../../components/ui";
import type { BadgeProps } from "../../components/ui/Badge";
import { useNotifications } from "../../context/NotificationContext";
import type { Notification, NotificationType } from "../../types";

type NotificationItemProps = {
  notification: Notification;
};

type NotificationAttributeType = {
  badgeVariant: BadgeProps["variant"];
  label: string;
};

const notificationTypeBadgeMap: Record<
  NotificationType,
  NotificationAttributeType
> = {
  general: { badgeVariant: "info", label: "General" },
  low_balance: { badgeVariant: "danger", label: "Low Balance" },
  transaction: { badgeVariant: "success", label: "Transaction" },
};

export default function NotificationItem({
  notification,
}: NotificationItemProps) {
  const { markRead } = useNotifications();

  return (
    <Card
      className="flex justify-between cursor-pointer border  hover:border-gray-400 border-transparent transition-all duration-500 "
      onClick={() => markRead(notification.id)}
    >
      <div>
        <p
          className={`text-lg  text-gray-900 ${notification.isRead ? "font-light" : "font-bold"}`}
        >
          {notification.title}
        </p>
        <p
          className={`text-gray-800 text-sm ${notification.isRead ? "font-light" : "font-semibold"}`}
        >
          {notification.subtitle}
        </p>
      </div>
      <div className="flex flex-col gap-1">
        <Badge
          variant={notificationTypeBadgeMap[notification.type].badgeVariant}
        >
          {notificationTypeBadgeMap[notification.type].label}
        </Badge>
        <p className="text-xs text-gray-400 text-end">
          {format(new Date(notification.timestamp), "MM/dd/yyyy")}
        </p>
      </div>
    </Card>
  );
}
