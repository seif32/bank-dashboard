import { NavLink } from "react-router-dom";

type NavItem = { label: string; to: string };

const navs: NavItem[] = [
  { label: "Dashboard", to: "/dashboard" },
  { label: "Accounts", to: "/accounts" },
  { label: "Transfers", to: "/transfers" },
  { label: "Currency Converter", to: "/currency" },
];

export default function NavBar() {
  return (
    <nav className="bg-gray-900 fixed w-full z-10 px-4 py-6">
      <div className=" flex  gap-8">
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
    </nav>
  );
}
