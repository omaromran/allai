import { Outlet } from "react-router-dom";
import { HomeownerSidebar } from "./components/HomeownerSidebar";
import { HomeownerTopbar } from "./components/HomeownerTopbar";
import "./homeowner.css";

export default function HomeownerLayout() {
  return (
    <div className="ho-app">
      <HomeownerSidebar />
      <div className="ho-main">
        <HomeownerTopbar />
        <div className="ho-main__content">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
