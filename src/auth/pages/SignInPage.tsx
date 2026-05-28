import { useState, type ReactNode } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthLogo } from "../components/AuthLogo";

type LoginTab = "email" | "phone" | "magic";

function PasswordField({ id, label }: { id: string; label: string }) {
  const [visible, setVisible] = useState(false);
  return (
    <div className="auth-field">
      <label htmlFor={id}>{label}</label>
      <div className="auth-field__password">
        <input id={id} type={visible ? "text" : "password"} autoComplete="current-password" />
        <button
          type="button"
          className="auth-field__toggle"
          aria-label={visible ? "Hide password" : "Show password"}
          onClick={() => setVisible((v) => !v)}
        >
          {visible ? "Hide" : "Show"}
        </button>
      </div>
    </div>
  );
}

function SocialButton({ label, children }: { label: string; children: ReactNode }) {
  return (
    <button type="button" className="auth-social-btn" aria-label={label}>
      {children}
    </button>
  );
}

export default function SignInPage() {
  const navigate = useNavigate();
  const [tab, setTab] = useState<LoginTab>("email");

  const goToApp = () => navigate("/app");

  return (
    <div className="auth-page auth-page--form">
      <header className="auth-topbar auth-topbar--center">
        <AuthLogo />
      </header>

      <div className="auth-form-shell auth-form-shell--narrow">
        <h1>Welcome back</h1>
        <p className="auth-form-lead">Sign in to your Allai account</p>

        <div className="auth-tabs" role="tablist" aria-label="Sign in method">
          {(
            [
              ["email", "Email & Password"],
              ["phone", "Phone"],
              ["magic", "Magic Link"],
            ] as const
          ).map(([key, label]) => (
            <button
              key={key}
              type="button"
              role="tab"
              aria-selected={tab === key}
              className={`auth-tabs__btn${tab === key ? " auth-tabs__btn--active" : ""}`}
              onClick={() => setTab(key)}
            >
              {label}
            </button>
          ))}
        </div>

        {tab === "email" ? (
          <form
            className="auth-form"
            onSubmit={(e) => {
              e.preventDefault();
              goToApp();
            }}
          >
            <div className="auth-field">
              <label htmlFor="loginEmail">Email</label>
              <input id="loginEmail" type="email" autoComplete="email" />
            </div>
            <PasswordField id="loginPassword" label="Password" />
            <div className="auth-form-row auth-form-row--between">
              <label className="auth-checkbox">
                <input type="checkbox" /> Remember me
              </label>
              <Link to="/sign-in" className="auth-link">
                Forgot password?
              </Link>
            </div>
            <button type="submit" className="auth-btn auth-btn--primary auth-btn--block auth-btn--lg">
              Sign in
            </button>
          </form>
        ) : null}

        {tab === "phone" ? (
          <form
            className="auth-form"
            onSubmit={(e) => {
              e.preventDefault();
              goToApp();
            }}
          >
            <div className="auth-field">
              <label htmlFor="loginPhone">Phone number</label>
              <div className="auth-field__phone">
                <select aria-label="Country code" defaultValue="+1">
                  <option value="+1">+1</option>
                </select>
                <input id="loginPhone" type="tel" autoComplete="tel" />
              </div>
            </div>
            <button type="submit" className="auth-btn auth-btn--primary auth-btn--block auth-btn--lg">
              Send code
            </button>
          </form>
        ) : null}

        {tab === "magic" ? (
          <form
            className="auth-form"
            onSubmit={(e) => {
              e.preventDefault();
              goToApp();
            }}
          >
            <div className="auth-field">
              <label htmlFor="magicEmail">Email</label>
              <input id="magicEmail" type="email" autoComplete="email" />
            </div>
            <p className="auth-form-hint">
              We&apos;ll email you a secure link—no password needed.
            </p>
            <button type="submit" className="auth-btn auth-btn--primary auth-btn--block auth-btn--lg">
              Email me a link
            </button>
          </form>
        ) : null}

        <div className="auth-divider">
          <span>or continue with</span>
        </div>

        <div className="auth-social-row">
          <SocialButton label="Continue with Google">
            <span>G</span>
          </SocialButton>
          <SocialButton label="Continue with Apple">
            <span aria-hidden="true">&#63743;</span>
          </SocialButton>
          <SocialButton label="Continue with Microsoft">
            <span>M</span>
          </SocialButton>
        </div>

        <p className="auth-form-footer">
          New to Allai? <Link to="/sign-up">Create account</Link>
        </p>
      </div>
    </div>
  );
}
