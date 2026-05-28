import { Link } from "react-router-dom";
import {
  HOMEOWNER,
  RECENT_REQUESTS,
  REQUEST_STATS,
  RESOURCE_CARDS,
} from "../data";
import {
  IconArrowRight,
  IconBook,
  IconChevronRight,
  IconDroplet,
  IconGarage,
  IconSearch,
  IconSpark,
  IconWind,
} from "../icons";

const HERO_IMG = "/images/v2/hero-living-room.jpg";

const RESOURCE_ICONS = {
  book: IconBook,
  spark: IconSpark,
  search: IconSearch,
} as const;

const REQUEST_ICONS = {
  droplet: IconDroplet,
  wind: IconWind,
  garage: IconGarage,
} as const;

function StatusBadge({
  label,
  tone,
}: {
  label: string;
  tone: "amber" | "green" | "muted";
}) {
  return <span className={`ho-badge ho-badge--${tone}`}>{label}</span>;
}

export default function DashboardPage() {
  return (
    <div className="ho-dashboard">
      <header className="ho-dashboard__head">
        <h1>Good morning, {HOMEOWNER.name} 👋</h1>
        <p>Here&apos;s what&apos;s happening with your home.</p>
      </header>

      <section className="ho-cta-banner" aria-labelledby="ho-cta-title">
        <div className="ho-cta-banner__copy">
          <h2 id="ho-cta-title">Start a new request</h2>
          <p>Chat with Maya or create a request in just a few steps.</p>
          <Link to="/app/maya" className="ho-btn ho-btn--white ho-btn--pill">
            Start with Maya
            <IconArrowRight size={16} />
          </Link>
        </div>
        <div className="ho-cta-banner__media">
          <img src={HERO_IMG} alt="" loading="eager" />
        </div>
      </section>

      <section className="ho-panel" aria-labelledby="overview-heading">
        <div className="ho-panel__head">
          <h2 id="overview-heading">Request overview</h2>
          <button type="button" className="ho-link-btn">
            View all
          </button>
        </div>
        <div className="ho-stat-grid">
          {REQUEST_STATS.map((stat) => (
            <article key={stat.label} className={`ho-stat ho-stat--${stat.tone}`}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="ho-panel" aria-labelledby="recent-heading">
        <div className="ho-panel__head">
          <h2 id="recent-heading">Recent requests</h2>
          <button type="button" className="ho-link-btn">
            View all
          </button>
        </div>
        <ul className="ho-request-list">
          {RECENT_REQUESTS.map((req) => {
            const RequestIcon = REQUEST_ICONS[req.icon];
            return (
              <li key={req.id}>
                <article className="ho-request-row">
                  <div className="ho-request-row__icon" aria-hidden>
                    <RequestIcon size={18} />
                  </div>
                  <div className="ho-request-row__body">
                    <h3>{req.title}</h3>
                    <p className="ho-request-row__addr">{req.address}</p>
                  </div>
                  <div className="ho-request-row__meta">
                    <StatusBadge label={req.status} tone={req.statusTone} />
                    <span>{req.meta}</span>
                  </div>
                </article>
              </li>
            );
          })}
        </ul>
      </section>

      <section className="ho-panel ho-panel--resources" aria-labelledby="resources-heading">
        <div className="ho-panel__resources-head">
          <h2 id="resources-heading">Need something else?</h2>
          <p>Quick links to help you maintain your home.</p>
        </div>
        <div className="ho-resource-list">
          {RESOURCE_CARDS.map((card) => {
            const CardIcon = RESOURCE_ICONS[card.icon];
            return (
              <button key={card.title} type="button" className="ho-resource-btn">
                <span className="ho-resource-btn__icon">
                  <CardIcon size={18} />
                </span>
                <span className="ho-resource-btn__text">
                  <strong>{card.title}</strong>
                  <span>{card.desc}</span>
                </span>
                <IconChevronRight size={18} className="ho-resource-btn__chevron" />
              </button>
            );
          })}
        </div>
      </section>
    </div>
  );
}
