import { createContext, useContext, useReducer, type ReactNode } from "react";
import type { Notification } from "../types";
import { mockNotifications } from "../services/mockData";

type NotificationAction =
  | { type: "ADD"; notification: Notification }
  | { type: "MARK_READ"; id: string }
  | { type: "MARK_ALL_READ" }
  | { type: "REMOVE"; id: string };

export function notificationReducer(
  state: Notification[],
  action: NotificationAction,
): Notification[] {
  switch (action.type) {
    case "ADD": {
      return [...state, action.notification];
    }
    case "MARK_READ": {
      return state.map((notification) => {
        if (notification.id === action.id) {
          return { ...notification, isRead: true };
        }
        return notification;
      });
    }
    case "MARK_ALL_READ": {
      return state.map((notification) => ({ ...notification, isRead: true }));
    }
    case "REMOVE": {
      return state.filter((notification) => notification.id !== action.id);
    }
  }
}

type NotificationContextType = {
  notifications: Notification[];
  unreadCount: number;
  addNotification: (notification: Notification) => void;
  markRead: (id: string) => void;
  removeNotification: (id: string) => void;
  markAllRead: () => void;
};

export const NotificationContext =
  createContext<NotificationContextType | null>(null);

export function NotificationProvider({ children }: { children: ReactNode }) {
  const [notifications, dispatch] = useReducer(
    notificationReducer,
    mockNotifications,
  );

  const unreadCount = notifications.filter(
    (notification) => notification.isRead === false,
  ).length;

  function addNotification(notification: Notification) {
    dispatch({ type: "ADD", notification });
  }

  function markRead(id: string) {
    dispatch({ type: "MARK_READ", id });
  }

  function markAllRead() {
    dispatch({ type: "MARK_ALL_READ" });
  }

  function removeNotification(id: string) {
    dispatch({ type: "REMOVE", id });
  }

  return (
    <NotificationContext.Provider
      value={{
        notifications,
        unreadCount,
        addNotification,
        markRead,
        markAllRead,
        removeNotification,
      }}
    >
      {children}
    </NotificationContext.Provider>
  );
}

export function useNotifications() {
  const ctx = useContext(NotificationContext);
  if (!ctx)
    throw new Error(
      "useNotifications must be used inside NotificationProvider",
    );

  return ctx;
}
