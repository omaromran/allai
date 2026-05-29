import { Link, useNavigate } from "react-router-dom";
import { AUTH_IMAGES, ROLE_META, WELCOME_BENEFITS } from "../constants";
import { AuthBackHomeLink } from "../components/AuthBackHomeLink";
import { AuthLogo } from "../components/AuthLogo";
import { SecurityFooter } from "../components/SecurityFooter";
import type { UserRole } from "../types";

function BenefitIcon({ kind }: { kind: string }) {
  const paths: Record<string, string> = {
    detect:
      "M12 2a7 7 0 00-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 00-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z",
    match:
      "M16 11c1.66 0 3-1.34 3-3S17.66 5 16 5s-3 1.34-3 3 1.34 3 3 3zm-8 0c1.66 0 3-1.34 3-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-1.5C15 14.17 10.33 13 8 13zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-1.5c0-2.33-4.67-3.5-7-3.5z",
    track:
      "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 14l-5-5 1.41-1.41L12 14.17l7.59-7.59L21 8l-9 9z",
  };
  return (
    <svg viewBox="0 0 24 24" width={20} height={20} aria-hidden="true">
      <path fill="currentColor" d={paths[kind] ?? paths.detect} />
    </svg>
  );
}

export default function RoleSelectPage() {
  const navigate = useNavigate();
  const roles: UserRole[] = ["homeowner", "landlord", "tenant", "contractor"];

  return (
    <div className="auth-page auth-page--role">
      <header className="auth-topbar">
        <AuthLogo />
        <AuthBackHomeLink />
      </header>

      <div className="auth-role-layout">
        <div className="auth-role-welcome">
          <h1>Welcome to Allai</h1>
          <p className="auth-role-welcome__lead">
            AI-powered maintenance that connects everyone on a property—from the
            first report to the final fix.
          </p>
          <ul className="auth-benefits">
            {WELCOME_BENEFITS.map((b) => (
              <li key={b.label}>
                <BenefitIcon kind={b.icon} />
                {b.label}
              </li>
            ))}
          </ul>
          <div className="auth-role-welcome__image">
            <img src={AUTH_IMAGES.roleHero} alt="" loading="eager" />
          </div>
        </div>

        <div className="auth-role-cards">
          <p className="auth-role-cards__heading">I am a…</p>
          <div className="auth-role-grid">
            {roles.map((role) => {
              const meta = ROLE_META[role];
              return (
                <article key={role} className="auth-role-card">
                  {meta.badge ? (
                    <span className="auth-role-card__badge">{meta.badge}</span>
                  ) : null}
                  <div className="auth-role-card__media">
                    <img src={AUTH_IMAGES.cards[role]} alt="" loading="lazy" />
                  </div>
                  <h2>{meta.title}</h2>
                  <p>{meta.description}</p>
                  <button
                    type="button"
                    className="auth-btn auth-btn--primary auth-btn--block"
                    onClick={() =>
                      navigate(`/sign-up/info?role=${role}`)
                    }
                  >
                    Get started
                  </button>
                </article>
              );
            })}
          </div>
          <p className="auth-form-footer auth-role-layout__login">
            Already have an account? <Link to="/sign-in">Log in</Link>
          </p>
          <SecurityFooter />
        </div>
      </div>
    </div>
  );
}
