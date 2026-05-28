import { Link } from "react-router-dom";
import { PRICING_PAGE } from "../../content/marketingPages";
import { SectionVisual } from "../SectionVisual";
import { MarketingLayout } from "../MarketingLayout";
import { MARKETING_ROUTES } from "../marketingLinks";

const HERO_IMG = "/images/v2/hero-living-room.jpg";

export default function PricingPage() {
  const p = PRICING_PAGE;

  return (
    <MarketingLayout>
      <section className="mkt-hero mkt-hero--beige">
        <div className="casa-container mkt-hero__grid">
          <div>
            <p className="casa-eyebrow">{p.eyebrow}</p>
            <h1 className="casa-h2">{p.title}</h1>
            <p className="casa-lead">{p.lead}</p>
            <div className="mkt-hero__actions">
              <Link to={MARKETING_ROUTES.signUp} className="casa-btn casa-btn--dark">
                Start now, for free
              </Link>
              <Link to={MARKETING_ROUTES.contact} className="casa-btn casa-btn--ghost mkt-btn-on-beige">
                Talk to sales
              </Link>
            </div>
          </div>
          <div className="mkt-hero__visual">
            <SectionVisual src={HERO_IMG} alt="" frame="cream" aspect="4-3" />
          </div>
        </div>
      </section>

      <section className="casa-section casa-section--white">
        <div className="casa-container">
          <div className="mkt-tiers">
            {p.tiers.map((tier) => (
              <article
                key={tier.name}
                className={`mkt-tier${tier.highlighted ? " mkt-tier--featured" : ""}`}
              >
                <p className="mkt-tier__name">{tier.name}</p>
                <p className="mkt-tier__price">{tier.price}</p>
                <p className="mkt-tier__period">{tier.period}</p>
                <p className="mkt-tier__desc">{tier.description}</p>
                <ul className="mkt-tier__features">
                  {tier.features.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
                <Link
                  to={tier.highlighted ? MARKETING_ROUTES.contact : MARKETING_ROUTES.signUp}
                  className={`casa-btn ${tier.highlighted ? "casa-btn--dark" : "casa-btn--outline-mkt"}`}
                >
                  {tier.cta}
                </Link>
              </article>
            ))}
          </div>
          <p className="mkt-note">{p.note}</p>
        </div>
      </section>

      <section className="casa-section casa-section--beige">
        <div className="casa-container">
          <div className="mkt-cta-band">
            <h2>Not sure which plan fits?</h2>
            <p>We'll map Allai to your portfolio size, integrations, and SLAs in one short call.</p>
            <Link to={MARKETING_ROUTES.contact} className="casa-btn casa-btn--hero">
              Get in touch
            </Link>
          </div>
        </div>
      </section>
    </MarketingLayout>
  );
}
