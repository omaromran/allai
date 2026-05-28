import { Link } from "react-router-dom";

export default function PlaceholderPage({ title }: { title: string }) {
  return (
    <div className="ho-dashboard">
      <h1>{title}</h1>
      <p style={{ color: "var(--ho-muted)" }}>This section is coming soon.</p>
      <Link to="/app" className="ho-btn ho-btn--outline" style={{ marginTop: "1rem" }}>
        Back to home
      </Link>
    </div>
  );
}
