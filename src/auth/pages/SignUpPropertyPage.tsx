import { useSearchParams } from "react-router-dom";
import { AUTH_IMAGES, ROLE_META } from "../constants";
import { AuthBackHomeLink } from "../components/AuthBackHomeLink";
import { AuthLogo } from "../components/AuthLogo";
import { ProgressSteps } from "../components/ProgressSteps";
import type { UserRole } from "../types";

export default function SignUpPropertyPage() {
  const [params] = useSearchParams();
  const role = (params.get("role") as UserRole) || "homeowner";
  const meta = ROLE_META[role] ?? ROLE_META.homeowner;

  return (
    <div className="auth-page auth-page--split">
      <header className="auth-topbar auth-topbar--split">
        <AuthLogo />
        <AuthBackHomeLink />
      </header>

      <div className="auth-split">
        <div className="auth-split__form">
          <ProgressSteps current="property" />
          <p className="auth-form-role">
            Signing up as <strong>{meta.title}</strong>
          </p>
          <h1>Property details</h1>
          <p className="auth-form-lead">Step 3 of 3 — where maintenance happens</p>

          <form className="auth-form" onSubmit={(e) => e.preventDefault()}>
            <div className="auth-field">
              <label htmlFor="street">Street address</label>
              <input id="street" autoComplete="street-address" required />
            </div>
            <div className="auth-field">
              <label htmlFor="unit">Unit / Apt #</label>
              <input id="unit" />
            </div>
            <div className="auth-form-row">
              <div className="auth-field">
                <label htmlFor="city">City</label>
                <input id="city" autoComplete="address-level2" required />
              </div>
              <div className="auth-field">
                <label htmlFor="state">State</label>
                <input id="state" autoComplete="address-level1" required />
              </div>
            </div>
            <div className="auth-field">
              <label htmlFor="homeType">Home type</label>
              <select id="homeType" defaultValue="">
                <option value="" disabled>
                  Select type
                </option>
                <option>Single-family home</option>
                <option>Condo / Apartment</option>
                <option>Townhouse</option>
                <option>Multi-unit building</option>
              </select>
            </div>

            <fieldset className="auth-checkgroup">
              <legend className="visually-hidden">Ownership</legend>
              <label className="auth-checkbox">
                <input type="checkbox" name="owns" /> I own this home
              </label>
              <label className="auth-checkbox">
                <input type="checkbox" name="manages" /> I manage for someone else
              </label>
            </fieldset>

            <button type="submit" className="auth-btn auth-btn--primary auth-btn--block auth-btn--lg">
              Complete setup
            </button>
          </form>
        </div>

        <div className="auth-split__visual">
          <img
            src={AUTH_IMAGES.property}
            alt="Cozy modern living room"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}
