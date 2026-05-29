import { Link } from "react-router-dom";

export function AuthBackHomeLink() {
  return (
    <Link to="/" className="auth-topbar__link auth-topbar__link--back">
      <svg viewBox="0 0 24 24" width={16} height={16} aria-hidden="true">
        <path
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 18l-6-6 6-6"
        />
      </svg>
      Go back home
    </Link>
  );
}
