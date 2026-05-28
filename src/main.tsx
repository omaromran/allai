import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import App from "./App.tsx";
import InvitePage from "./auth/pages/InvitePage.tsx";
import RoleSelectPage from "./auth/pages/RoleSelectPage.tsx";
import SignInPage from "./auth/pages/SignInPage.tsx";
import SignUpBusinessPage from "./auth/pages/SignUpBusinessPage.tsx";
import SignUpInfoPage from "./auth/pages/SignUpInfoPage.tsx";
import SignUpPropertyPage from "./auth/pages/SignUpPropertyPage.tsx";
import VerifyPage from "./auth/pages/VerifyPage.tsx";
import HomeownerLayout from "./homeowner/HomeownerLayout.tsx";
import DashboardPage from "./homeowner/pages/DashboardPage.tsx";
import MayaChatPage from "./homeowner/pages/MayaChatPage.tsx";
import RequestCreatedPage from "./homeowner/pages/RequestCreatedPage.tsx";
import PlaceholderPage from "./homeowner/pages/PlaceholderPage.tsx";
import LandingCMS from "./cms/LandingCMS.tsx";
import { LandingContentProvider } from "./content/LandingContentContext.tsx";
import PricingPage from "./landing/pages/PricingPage.tsx";
import CompanyPage from "./landing/pages/CompanyPage.tsx";
import IntegrationsPage from "./landing/pages/IntegrationsPage.tsx";
import "./styles/global.css";
import "./components/brand/allai-logo.css";
import "./auth/auth.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/admin/*" element={<LandingCMS />} />
        <Route path="/sign-in" element={<SignInPage />} />
        <Route path="/sign-up" element={<RoleSelectPage />} />
        <Route path="/sign-up/info" element={<SignUpInfoPage />} />
        <Route path="/sign-up/verify" element={<VerifyPage />} />
        <Route path="/sign-up/property" element={<SignUpPropertyPage />} />
        <Route path="/sign-up/business" element={<SignUpBusinessPage />} />
        <Route path="/sign-up/invite" element={<InvitePage />} />
        <Route
          path="/pricing"
          element={
            <LandingContentProvider>
              <PricingPage />
            </LandingContentProvider>
          }
        />
        <Route
          path="/about"
          element={
            <LandingContentProvider>
              <CompanyPage />
            </LandingContentProvider>
          }
        />
        <Route
          path="/integrations"
          element={
            <LandingContentProvider>
              <IntegrationsPage />
            </LandingContentProvider>
          }
        />
        <Route path="/app" element={<HomeownerLayout />}>
          <Route index element={<DashboardPage />} />
          <Route path="maya" element={<MayaChatPage />} />
          <Route path="request-created" element={<RequestCreatedPage />} />
          <Route path="requests" element={<PlaceholderPage title="Requests" />} />
          <Route path="messages" element={<Navigate to="/app/maya" replace />} />
          <Route path="properties" element={<PlaceholderPage title="Properties" />} />
          <Route path="documents" element={<PlaceholderPage title="Documents" />} />
          <Route path="favorites" element={<PlaceholderPage title="Favorites" />} />
          <Route path="notifications" element={<PlaceholderPage title="Notifications" />} />
          <Route path="profile" element={<PlaceholderPage title="Profile" />} />
          <Route path="settings" element={<PlaceholderPage title="Settings" />} />
        </Route>
        <Route
          path="/*"
          element={
            <LandingContentProvider>
              <App />
            </LandingContentProvider>
          }
        />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
