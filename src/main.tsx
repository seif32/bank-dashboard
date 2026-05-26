import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Input } from "./components/ui";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <div className="grid place-items-center h-screen">
      <Input />
    </div>
  </StrictMode>,
);
