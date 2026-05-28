import { Link } from "react-router-dom";
import { INTEGRATIONS_PAGE } from "../../content/marketingPages";
import { MarketingLayout } from "../MarketingLayout";
import { MARKETING_ROUTES } from "../marketingLinks";

export default function IntegrationsPage() {
  const data = INTEGRATIONS_PAGE;

  return (
    <MarketingLayout>
      <section className="mkt-hero mkt-hero--beige">
        <div className="casa-container mkt-hero__grid mkt-hero__grid--center">
          <div>
            <p className="casa-eyebrow casa-eyebrow--center">{data.eyebrow}</p>
            <h1 className="casa-h2 casa-h2--center">{data.title}</h1>
            <p className="casa-lead casa-lead--center">{data.lead}</p>
            <div className="mkt-hero__actions">
              <Link to={MARKETING_ROUTES.signUp} className="casa-btn casa-btn--dark">
                Start now, for free
              </Link>
              <Link to={MARKETING_ROUTES.contact} className="casa-link casa-link--arrow">
                Request an integration
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="casa-section casa-section--white">
        <div className="casa-container">
          <div className="mkt-hub">
            <div className="mkt-hub__center">
              <span>Allai</span>
              <strong>{data.hubLabel}</strong>
            </div>
            <div className="mkt-hub__rings">
              {data.categories.map((cat) => (
                <div key={cat.id} className="mkt-hub__ring">
                  <h3>{cat.title}</h3>
                  <div className="mkt-logo-grid">
                    {cat.platforms.map((name) => (
                      <span key={name} className="mkt-logo-pill">
                        {name}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="casa-section casa-section--beige">
        <div className="casa-container">
          <div className="mkt-section-head mkt-section-head--center">
            <p className="casa-eyebrow casa-eyebrow--center">Connected categories</p>
            <h2 className="casa-h2 casa-h2--center">Property, maintenance & parts</h2>
            <p className="casa-lead casa-lead--center">
              We integrate where your data already lives—then orchestrate the best match for each
              job.
            </p>
          </div>
          <div className="mkt-int-grid">
            {data.categories.map((cat) => (
              <article key={cat.id} className="mkt-int-card">
                <div className="mkt-int-card__img">
                  <img src={cat.image} alt="" loading="lazy" />
                </div>
                <div className="mkt-int-card__body">
                  <h3>{cat.title}</h3>
                  <p>{cat.subtitle}</p>
                  <div className="mkt-logo-grid">
                    {cat.platforms.map((name) => (
                      <span key={name} className="mkt-logo-pill">
                        {name}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="casa-section casa-section--white">
        <div className="casa-container">
          <div className="mkt-section-head mkt-section-head--center">
            <p className="casa-eyebrow casa-eyebrow--center">How it works</p>
            <h2 className="casa-h2 casa-h2--center">Best match, end to end</h2>
          </div>
          <div className="mkt-flow">
            {data.flow.map((step) => (
              <article key={step.step} className="mkt-flow-step">
                <span className="mkt-flow-step__num">{step.step}</span>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="casa-section casa-section--beige">
        <div className="casa-container">
          <div className="mkt-cta-band">
            <h2>{data.cta.title}</h2>
            <p>{data.cta.body}</p>
            <Link to={MARKETING_ROUTES.contact} className="casa-btn casa-btn--hero">
              {data.cta.button}
            </Link>
          </div>
        </div>
      </section>
    </MarketingLayout>
  );
}
