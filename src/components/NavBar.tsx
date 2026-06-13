import { NavLink } from "react-router-dom";
import { useNotifications } from "../context/NotificationContext";
import { Bell } from "lucide-react";
import { Badge } from "./ui";

type NavItem = { label: string; to: string };

const navs: NavItem[] = [
  { label: "Dashboard", to: "/dashboard" },
  { label: "Accounts", to: "/accounts" },
  { label: "Transfers", to: "/transfers" },
  { label: "Transactions", to: "/transactions" },
  { label: "Currency Converter", to: "/currency" },
];

export default function NavBar() {
  const { unreadCount } = useNotifications();
  return (
    <nav className="bg-gray-900 fixed w-full z-10 px-4 py-6 flex justify-between">
      <div className=" flex gap-8">
        {navs.map((nav) => (
          <NavLink
            className={({ isActive }) =>
              isActive ? "font-bold text-blue-600" : "text-gray-400"
            }
            to={nav.to}
            key={nav.to}
          >
            {nav.label}
          </NavLink>
        ))}
      </div>
      <NavLink to={"/notifications"} className="text-gray-400 relative">
        <Bell />
        {unreadCount > 0 && (
          <Badge variant="danger" className="absolute -top-3 -right-2 ">
            {unreadCount}
          </Badge>
        )}
      </NavLink>
    </nav>
  );
}
