import { NavLink, useLocation } from "react-router-dom";
import { AllaiLogo } from "../../components/brand/AllaiLogo";
import { IconLogout, NAV_ICONS } from "../icons";

type NavIconKey = keyof typeof NAV_ICONS;

const NAV_MAIN: { to: string; label: string; icon: NavIconKey; end?: boolean; activePaths?: string[] }[] = [
  { to: "/app", label: "Home", icon: "home", end: true },
  { to: "/app/requests", label: "Requests", icon: "requests" },
  { to: "/app/maya", label: "Messages", icon: "messages", activePaths: ["/app/maya", "/app/request-created"] },
  { to: "/app/properties", label: "Properties", icon: "properties" },
  { to: "/app/documents", label: "Documents", icon: "documents" },
  { to: "/app/favorites", label: "Favorites", icon: "favorites" },
];

const NAV_BOTTOM: { to: string; label: string; icon: NavIconKey }[] = [
  { to: "/app/notifications", label: "Notifications", icon: "bell" },
  { to: "/app/profile", label: "Profile", icon: "profile" },
  { to: "/app/settings", label: "Settings", icon: "settings" },
];

function SidebarLink({
  to,
  label,
  icon,
  end,
  activePaths,
}: {
  to: string;
  label: string;
  icon: NavIconKey;
  end?: boolean;
  activePaths?: string[];
}) {
  const location = useLocation();
  const IconComponent = NAV_ICONS[icon];
  const isCustomActive = activePaths?.some((p) => location.pathname.startsWith(p)) ?? false;

  return (
    <NavLink
      to={to}
      end={end}
      className={({ isActive }) =>
        `ho-sidebar__link${isActive || isCustomActive ? " ho-sidebar__link--active" : ""}`
      }
    >
      <IconComponent size={18} />
      {label}
    </NavLink>
  );
}

export function HomeownerSidebar() {
  return (
    <aside className="ho-sidebar">
      <div className="ho-sidebar__brand">
        <AllaiLogo layout="full" href="/app" iconSize={24} />
      </div>
      <nav className="ho-sidebar__nav" aria-label="Main">
        {NAV_MAIN.map((item) => (
          <SidebarLink key={item.to} {...item} />
        ))}
      </nav>
      <nav className="ho-sidebar__nav ho-sidebar__nav--bottom" aria-label="Account">
        {NAV_BOTTOM.map((item) => (
          <SidebarLink key={item.to} {...item} />
        ))}
        <a href="/sign-in" className="ho-sidebar__logout">
          <IconLogout size={18} />
          Log out
        </a>
      </nav>
    </aside>
  );
}
