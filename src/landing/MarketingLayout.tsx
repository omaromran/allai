import { useEffect, useState, type ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";
import { AllaiLogo } from "../components/brand/AllaiLogo";
import { useLandingContent } from "../content/LandingContentContext";
import { MarketingFooter } from "./MarketingFooter";
import { MARKETING_ROUTES } from "./marketingLinks";
import "./casa.css";
import "./marketing-pages.css";

type MarketingLayoutProps = {
  children: ReactNode;
};

export function MarketingLayout({ children }: MarketingLayoutProps) {
  const { content } = useLandingContent();
  const location = useLocation();
  const [headerSolid, setHeaderSolid] = useState(true);

  useEffect(() => {
    const onScroll = () => setHeaderSolid(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const navClass = `casa-header casa-header--solid${headerSolid ? "" : " casa-header--at-top"}`;

  return (
    <div className="casa mkt-page">
      <header className={navClass}>
        <div className="casa-container casa-header__inner">
          <AllaiLogo variant="color" href={MARKETING_ROUTES.home} />
          <nav className="casa-nav" aria-label="Primary">
            <Link to={MARKETING_ROUTES.how}>{content.nav.howItWorks}</Link>
            <Link to={MARKETING_ROUTES.benefits}>{content.nav.benefits}</Link>
            <Link to={MARKETING_ROUTES.contact}>{content.nav.contact}</Link>
            <Link
              to={MARKETING_ROUTES.pricing}
              className={location.pathname === "/pricing" ? "casa-nav__active" : ""}
            >
              {content.nav.pricing}
            </Link>
          </nav>
          <div className="casa-header__actions">
            <Link to={MARKETING_ROUTES.signIn} className="casa-link">
              {content.nav.login}
            </Link>
            <Link to={MARKETING_ROUTES.signUp} className="casa-btn casa-btn--dark">
              {content.nav.getStarted}
            </Link>
          </div>
        </div>
      </header>

      <main className="mkt-main">{children}</main>
      <MarketingFooter />
    </div>
  );
}
