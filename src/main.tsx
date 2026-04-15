import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import LandingCMS from "./cms/LandingCMS.tsx";
import { LandingContentProvider } from "./content/LandingContentContext.tsx";
import "./App.css";

const path = window.location.pathname;
const isAdmin = path === "/admin" || path.startsWith("/admin/");

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {isAdmin ? (
      <LandingCMS />
    ) : (
      <LandingContentProvider>
        <App />
      </LandingContentProvider>
    )}
  </StrictMode>,
);
