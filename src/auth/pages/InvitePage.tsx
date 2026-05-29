import { Link } from "react-router-dom";
import { AuthBackHomeLink } from "../components/AuthBackHomeLink";
import { AuthLogo } from "../components/AuthLogo";

export default function InvitePage() {
  return (
    <div className="auth-page auth-page--form">
      <header className="auth-topbar auth-topbar--balanced">
        <AuthBackHomeLink />
        <AuthLogo />
      </header>

      <div className="auth-form-shell auth-form-shell--narrow">
        <h1>You&apos;ve been invited</h1>
        <p className="auth-form-lead">
          Join <strong>105 Maple Street Apartments</strong> on Allai.
        </p>

        <div className="auth-invite-card">
          <div className="auth-invite-card__avatar">LJ</div>
          <div>
            <strong>Larry Johnson</strong>
            <span>Landlord</span>
          </div>
        </div>

        <form className="auth-form" onSubmit={(e) => e.preventDefault()}>
          <div className="auth-field">
            <label htmlFor="inviteName">Your name</label>
            <input id="inviteName" autoComplete="name" required />
          </div>
          <div className="auth-field">
            <label htmlFor="inviteEmail">Email</label>
            <input
              id="inviteEmail"
              type="email"
              defaultValue="jessica@email.com"
              readOnly
              className="auth-field--readonly"
            />
          </div>

          <button type="submit" className="auth-btn auth-btn--primary auth-btn--block auth-btn--lg">
            Accept invitation
          </button>
        </form>

        <p className="auth-form-footer">
          Wrong invite? <Link to="/sign-up">Start fresh</Link>
        </p>
      </div>
    </div>
  );
}
