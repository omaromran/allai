import { Link } from "react-router-dom";
import { COMPANY_PAGE } from "../../content/marketingPages";
import { SectionVisual } from "../SectionVisual";
import { MarketingLayout } from "../MarketingLayout";
import { MARKETING_ROUTES } from "../marketingLinks";

const HERO_IMG = "/images/v2/role-residents.jpg";
const MISSION_IMG = "/images/v2/how-maya-works.jpg";

export default function CompanyPage() {
  const c = COMPANY_PAGE;

  return (
    <MarketingLayout>
      <section className="mkt-hero mkt-hero--green">
        <div className="casa-container mkt-hero__grid mkt-hero__grid--center">
          <div>
            <p className="casa-eyebrow casa-eyebrow--light">{c.eyebrow}</p>
            <h1 className="casa-h2 casa-h2--light">{c.title}</h1>
            <p className="casa-lead casa-lead--light">{c.lead}</p>
          </div>
        </div>
      </section>

      <section className="casa-section casa-section--white">
        <div className="casa-container">
          <div className="mkt-stats">
            {c.stats.map((stat) => (
              <div key={stat.label} className="mkt-stat">
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="casa-section casa-section--beige">
        <div className="casa-container mkt-split">
          <div className="mkt-split__copy">
            <h2 className="casa-h2">{c.mission.title}</h2>
            <p className="casa-lead">{c.mission.body}</p>
          </div>
          <div className="mkt-split__visual">
            <SectionVisual src={MISSION_IMG} alt="" frame="cream" aspect="4-3" />
          </div>
        </div>
      </section>

      <section className="casa-section casa-section--white">
        <div className="casa-container mkt-split mkt-split--reverse">
          <div className="mkt-split__copy">
            <h2 className="casa-h2">{c.vision.title}</h2>
            <p className="casa-lead">{c.vision.body}</p>
            <Link to={MARKETING_ROUTES.integrations} className="casa-link casa-link--arrow">
              See integrations
            </Link>
          </div>
          <div className="mkt-split__visual">
            <SectionVisual src={HERO_IMG} alt="" frame="beige" aspect="4-3" />
          </div>
        </div>
      </section>

      <section className="casa-section casa-section--beige">
        <div className="casa-container">
          <div className="mkt-section-head mkt-section-head--center">
            <p className="casa-eyebrow casa-eyebrow--center">What we believe</p>
            <h2 className="casa-h2 casa-h2--center">Built on four principles</h2>
          </div>
          <div className="mkt-values">
            {c.values.map((v) => (
              <article key={v.title} className="mkt-value">
                <h3>{v.title}</h3>
                <p>{v.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="casa-section casa-section--white">
        <div className="casa-container">
          <div className="mkt-section-head">
            <p className="casa-eyebrow">{c.foundersTitle}</p>
            <h2 className="casa-h2">The team behind Allai</h2>
          </div>
          <div className="mkt-founders">
            {c.founders.map((f) => (
              <article key={f.name} className="mkt-founder">
                <img src={f.image} alt={f.name} loading="lazy" />
                <h3>{f.name}</h3>
                <p>{f.role}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="careers" className="casa-section casa-section--beige">
        <div className="casa-container mkt-split">
          <div className="mkt-split__copy">
            <h2 className="casa-h2">{c.careers.title}</h2>
            <p className="casa-lead">{c.careers.body}</p>
            <a href={`mailto:${c.careers.email}`} className="casa-btn casa-btn--dark">
              {c.careers.cta}
            </a>
          </div>
          <div className="mkt-split__visual">
            <SectionVisual src="/images/v2/role-contractors.jpg" alt="" frame="cream" aspect="4-3" />
          </div>
        </div>
      </section>

      <section id="security" className="casa-section casa-section--white">
        <div className="casa-container">
          <div className="mkt-section-head">
            <p className="casa-eyebrow">Security</p>
            <h2 className="casa-h2">Enterprise-ready from day one</h2>
            <p className="casa-lead">
              Role-based access, encrypted data, and audit-friendly history for every maintenance
              request. We work with your IT and compliance teams on reviews and DPAs.
            </p>
          </div>
        </div>
      </section>

      <section id="privacy" className="casa-section casa-section--cream">
        <div className="casa-container">
          <h2 className="casa-h2">{c.privacy.title}</h2>
          <p className="casa-lead">{c.privacy.body}</p>
        </div>
      </section>
    </MarketingLayout>
  );
}
