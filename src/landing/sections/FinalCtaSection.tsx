import { Link } from "react-router-dom";
import { useLandingContent } from "../../content/LandingContentContext";

const CTA_BG = "/images/v2/cta-background.jpg";
const MAYA_AVATAR = "/images/v2/maya-avatar.jpg";

export function FinalCtaSection() {
  const { content } = useLandingContent();

  return (
    <section className="final-cta">
      <img className="final-cta__bg" src={CTA_BG} alt="" loading="lazy" />
      <div className="final-cta__overlay" aria-hidden />
      <div className="container final-cta-grid">
        <div className="final-cta-copy">
          <h2>{content.finalCta.title}</h2>
          <p>{content.finalCta.body}</p>
        </div>
        <div className="final-cta-card">
          <div className="final-cta-card__head">
            <span className="final-cta-card__icon">
              <img src={MAYA_AVATAR} alt="" />
            </span>
            <div className="final-cta-card__meta">
              <h3>{content.finalCta.cardTitle}</h3>
              <p>{content.finalCta.cardSubtitle}</p>
            </div>
          </div>
          <Link to="/sign-up" className="auth-btn auth-btn--primary auth-btn--block auth-btn--lg">
            {content.finalCta.button} →
          </Link>
        </div>
      </div>
    </section>
  );
}
