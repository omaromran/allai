import { AUTH_IMAGES } from "../constants";
import { AuthLogo } from "../components/AuthLogo";
import { ProgressSteps } from "../components/ProgressSteps";

export default function SignUpBusinessPage() {
  return (
    <div className="auth-page auth-page--split">
      <header className="auth-topbar auth-topbar--split">
        <AuthLogo />
      </header>

      <div className="auth-split">
        <div className="auth-split__form">
          <ProgressSteps current="business" contractor />
          <p className="auth-form-role">
            Signing up as <strong>Contractor</strong>
          </p>
          <h1>Business details</h1>
          <p className="auth-form-lead">Step 3 of 3 — tell us about your trade</p>

          <form className="auth-form" onSubmit={(e) => e.preventDefault()}>
            <div className="auth-field">
              <label htmlFor="businessName">Business name</label>
              <input id="businessName" required />
            </div>
            <div className="auth-field">
              <label htmlFor="trade">Trade / Primary service</label>
              <select id="trade" defaultValue="">
                <option value="" disabled>
                  Select trade
                </option>
                <option>Plumbing</option>
                <option>Electrical</option>
                <option>HVAC</option>
                <option>General handyman</option>
                <option>Appliance repair</option>
              </select>
            </div>
            <div className="auth-field">
              <label htmlFor="years">Years in business</label>
              <select id="years" defaultValue="">
                <option value="" disabled>
                  Select range
                </option>
                <option>Less than 1 year</option>
                <option>1–3 years</option>
                <option>3–5 years</option>
                <option>5+ years</option>
              </select>
            </div>
            <div className="auth-field">
              <label htmlFor="license">
                License number <span className="auth-optional">(optional)</span>
              </label>
              <input id="license" />
            </div>

            <button type="submit" className="auth-btn auth-btn--primary auth-btn--block auth-btn--lg">
              Complete setup
            </button>
          </form>
        </div>

        <div className="auth-split__visual">
          <img
            src={AUTH_IMAGES.contractor}
            alt="Professional contractor tools"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}
