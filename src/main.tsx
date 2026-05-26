import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Button from "./components/ui/Button";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <div className="grid place-items-center h-screen">
      <Button />
    </div>
  </StrictMode>,
);
