import { useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { AuthLogo } from "../components/AuthLogo";
import { ProgressSteps } from "../components/ProgressSteps";
import { ROLE_META } from "../constants";
import type { UserRole } from "../types";

function PasswordField({
  id,
  label,
  value,
  onChange,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (v: string) => void;
}) {
  const [visible, setVisible] = useState(false);
  return (
    <div className="auth-field">
      <label htmlFor={id}>{label}</label>
      <div className="auth-field__password">
        <input
          id={id}
          type={visible ? "text" : "password"}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          autoComplete="new-password"
        />
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

export default function SignUpInfoPage() {
  const navigate = useNavigate();
  const [params] = useSearchParams();
  const role = (params.get("role") as UserRole) || "homeowner";
  const meta = ROLE_META[role] ?? ROLE_META.homeowner;
  const contractor = role === "contractor";

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phone, setPhone] = useState("");

  return (
    <div className="auth-page auth-page--form">
      <header className="auth-topbar auth-topbar--center">
        <AuthLogo />
      </header>

      <div className="auth-form-shell">
        <ProgressSteps current="info" contractor={contractor} />
        <p className="auth-form-role">
          Signing up as <strong>{meta.title}</strong>
        </p>
        <h1>Create your account</h1>
        <p className="auth-form-lead">Step 1 of 3 — your personal details</p>

        <form
          className="auth-form"
          onSubmit={(e) => {
            e.preventDefault();
            navigate(`/sign-up/verify?role=${role}`);
          }}
        >
          <div className="auth-form-row">
            <div className="auth-field">
              <label htmlFor="firstName">First name</label>
              <input
                id="firstName"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                autoComplete="given-name"
                required
              />
            </div>
            <div className="auth-field">
              <label htmlFor="lastName">Last name</label>
              <input
                id="lastName"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                autoComplete="family-name"
                required
              />
            </div>
          </div>

          <div className="auth-field">
            <label htmlFor="email">Email</label>
            <div className="auth-field__email">
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="email"
                required
              />
              {email.includes("@") ? (
                <span className="auth-field__valid" aria-label="Valid email">
                  ✓
                </span>
              ) : null}
            </div>
          </div>

          <PasswordField
            id="password"
            label="Password"
            value={password}
            onChange={setPassword}
          />
          <PasswordField
            id="confirmPassword"
            label="Confirm password"
            value={confirmPassword}
            onChange={setConfirmPassword}
          />

          <div className="auth-field">
            <label htmlFor="phone">Phone number</label>
            <div className="auth-field__phone">
              <select aria-label="Country code" defaultValue="+1">
                <option value="+1">+1</option>
                <option value="+44">+44</option>
              </select>
              <input
                id="phone"
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                autoComplete="tel"
                placeholder="(555) 000-0000"
              />
            </div>
          </div>

          <div className="auth-info-box">
            <svg viewBox="0 0 24 24" width={20} height={20} aria-hidden="true">
              <path
                fill="currentColor"
                d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"
              />
            </svg>
            <p>
              We&apos;ll send you important updates about requests, quotes, and
              appointments.
            </p>
          </div>

          <button type="submit" className="auth-btn auth-btn--primary auth-btn--block auth-btn--lg">
            Continue
          </button>
        </form>

        <p className="auth-form-footer">
          Already have an account?{" "}
          <Link to="/sign-in">Log in</Link>
        </p>
      </div>
    </div>
  );
}
