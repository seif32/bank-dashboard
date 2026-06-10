import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";

export default function AppLayout() {
  return (
    <div>
      <NavBar />
      <main className="pt-22">
        <Outlet />
      </main>
      <span>footer</span>
    </div>
  );
}
