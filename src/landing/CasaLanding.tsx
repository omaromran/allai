import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AllaiLogo } from "../components/brand/AllaiLogo";
import { MARKETING_ROUTES } from "./marketingLinks";
import { MarketingFooter } from "./MarketingFooter";
import { useLandingContent } from "../content/LandingContentContext";
import { MaintenanceShowcase } from "./MaintenanceShowcase";
import { SectionVisual } from "./SectionVisual";
import { ContactSection } from "./sections/ContactSection";
import { FinalCtaSection } from "./sections/FinalCtaSection";
import { HowItWorksCarousel } from "./sections/HowItWorksCarousel";
import { PartnersSection } from "./sections/PartnersSection";
import { TestimonialSection } from "./sections/TestimonialSection";
import "./casa.css";
import "./v2-sections.css";

const MEDIA = {
  heroPoster: "/images/v2/hero-living-room.jpg",
  heroVideo: "/videos/how/step-03-done.mp4",
  feature1: "/images/v2/how-maya-works.jpg",
  feature2: "/images/v2/how-work-done.jpg",
  autopilot: "/images/v2/cta-background.jpg",
  benefits: [
    "/images/v2/role-residents.jpg",
    "/images/v2/role-owners.jpg",
    "/images/v2/role-contractors.jpg",
    "/images/v2/testimonial-living-room.jpg",
  ],
  platform: "/images/v2/hero-living-room.jpg",
  trust: ["/images/v2/role-owners.jpg", "/images/v2/testimonial-living-room.jpg"],
};

const FEATURE_BG = ["casa-section--beige", "casa-section--white"] as const;

export default function CasaLanding() {
  const { content } = useLandingContent();
  const [headerSolid, setHeaderSolid] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  useEffect(() => {
    const onScroll = () => setHeaderSolid(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="casa">
      <header className={`casa-header${headerSolid ? " casa-header--solid" : ""}`}>
        <div className="casa-container casa-header__inner">
          <AllaiLogo variant={headerSolid ? "color" : "reversed"} />
          <nav className="casa-nav" aria-label="Primary">
            <a href="#how">{content.nav.howItWorks}</a>
            <a href="#benefits">{content.nav.benefits}</a>
            <a href="#contact">{content.nav.contact}</a>
            <Link to={MARKETING_ROUTES.pricing}>{content.nav.pricing}</Link>
          </nav>
          <div className="casa-header__actions">
            <Link to={MARKETING_ROUTES.signIn} className="casa-link">
              {content.nav.login}
            </Link>
            <Link to={MARKETING_ROUTES.signUp} className="casa-btn casa-btn--dark">
              {content.nav.getStarted}
            </Link>
          </div>
        </div>
      </header>

      <main id="top">
        <section className="casa-hero">
          <video
            className="casa-hero__video"
            autoPlay
            muted
            loop
            playsInline
            poster={MEDIA.heroPoster}
          >
            <source src={MEDIA.heroVideo} type="video/mp4" />
          </video>
          <div className="casa-hero__overlay" aria-hidden />
          <div className="casa-hero__inner">
            <div className="casa-hero__copy">
              <h1>{content.hero.headline}</h1>
              <p>{content.hero.subheadline}</p>
            </div>

            <div className="casa-hero__bottom">
              <a href="/sign-up" className="casa-hero__glass-cta">
                <span className="casa-hero__glass-cta-icon" aria-hidden>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path
                      d="M7 1.5l.9 2.6 2.6.9-2.6.9-.9 2.6-.9-2.6-2.6-.9 2.6-.9.9-2.6z"
                      fill="currentColor"
                    />
                  </svg>
                </span>
                <span className="casa-hero__glass-cta-text">{content.hero.cta}</span>
                <span className="casa-hero__glass-cta-thumb">
                  <img src={MEDIA.heroPoster} alt="" />
                </span>
              </a>
              <p className="casa-hero__hint">{content.hero.ctaHint}</p>
            </div>
          </div>
        </section>

        <PartnersSection />

        <HowItWorksCarousel />

        <section className="casa-section casa-section--white casa-queue">
          <div className="casa-container casa-queue__grid">
            <div className="casa-queue__copy">
              <p className="casa-eyebrow">{content.maintenanceQueue.eyebrow}</p>
              <h2 className="casa-h2">{content.maintenanceQueue.title}</h2>
              <p className="casa-lead">{content.maintenanceQueue.body}</p>
            </div>
            <MaintenanceShowcase
              prefix={content.maintenanceQueue.prefix}
              tasks={content.maintenanceQueue.tasks}
            />
          </div>
        </section>

        {content.features.map((feature, i) => (
          <section
            key={feature.title}
            className={`casa-section casa-feature ${FEATURE_BG[i % 2]}${i % 2 ? " casa-feature--reverse" : ""}`}
          >
            <div className="casa-container casa-feature__grid">
              <div className="casa-feature__copy">
                <p className="casa-eyebrow">{feature.eyebrow}</p>
                <h2 className="casa-h2">{feature.title}</h2>
                <p className="casa-lead">{feature.body}</p>
              </div>
              <SectionVisual
                src={i === 0 ? MEDIA.feature1 : MEDIA.feature2}
                alt={feature.imageAlt}
                frame="beige"
                aspect="4-3"
              />
            </div>
          </section>
        ))}

        <section className="casa-section casa-section--green casa-autopilot">
          <div className="casa-container casa-autopilot__inner">
            <div className="casa-autopilot__copy">
              <p className="casa-eyebrow casa-eyebrow--light">{content.autopilot.eyebrow}</p>
              <h2 className="casa-h2 casa-h2--light">{content.autopilot.title}</h2>
              <p className="casa-lead casa-lead--light">{content.autopilot.body}</p>
            </div>
            <SectionVisual
              src={MEDIA.autopilot}
              alt=""
              frame="cream"
              aspect="16-10"
              className="casa-autopilot__visual"
            />
          </div>
        </section>

        <section id="benefits" className="casa-section casa-section--white">
          <div className="casa-container">
            <p className="casa-eyebrow casa-eyebrow--center">{content.benefits.eyebrow}</p>
            <h2 className="casa-h2 casa-h2--center">{content.benefits.title}</h2>
            <div className="casa-benefits">
              {content.benefits.items.map((item, i) => (
                <article key={item.title} className="casa-benefit">
                  <SectionVisual
                    src={MEDIA.benefits[i] ?? MEDIA.benefits[0]}
                    alt={item.title}
                    frame="beige"
                    aspect="16-10"
                    className="casa-benefit__visual"
                  />
                  <div className="casa-benefit__body">
                    <h3>{item.title}</h3>
                    <p>{item.body}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="casa-section casa-section--beige casa-platform">
          <div className="casa-container">
            <div className="casa-platform__header">
              <div>
                <p className="casa-eyebrow">{content.platform.eyebrow}</p>
                <h2 className="casa-h2">{content.platform.title}</h2>
                <p className="casa-lead casa-lead--narrow">{content.platform.body}</p>
              </div>
              <SectionVisual
                src={MEDIA.platform}
                alt="Allai platform overview"
                frame="cream"
                aspect="16-10"
                className="casa-platform__hero-visual"
              />
            </div>
            <div className="casa-pillars">
              {content.platform.pillars.map((pillar, i) => (
                <article key={pillar.title} className="casa-pillar">
                  <SectionVisual
                    src={MEDIA.benefits[i] ?? MEDIA.benefits[0]}
                    alt={pillar.title}
                    frame="beige"
                    aspect="1-1"
                    className="casa-pillar__visual"
                  />
                  <h3>{pillar.title}</h3>
                  <p>{pillar.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <TestimonialSection />

        <section className="casa-section casa-section--white casa-trust">
          <div className="casa-container casa-trust__grid">
            {[content.trust.aligned, content.trust.privacy].map((block, i) => (
              <article key={block.title} className="casa-trust-card">
                <SectionVisual
                  src={MEDIA.trust[i] ?? MEDIA.trust[0]}
                  alt={block.title}
                  frame="beige"
                  aspect="16-10"
                  className="casa-trust-card__visual"
                />
                <h2 className="casa-h3">{block.title}</h2>
                <p>{block.body}</p>
                <a href="#top" className="casa-link casa-link--arrow">
                  {block.cta}
                </a>
              </article>
            ))}
          </div>
        </section>

        <ContactSection />

        <section className="casa-section casa-section--cream casa-faq">
          <div className="casa-container">
            <div className="casa-faq__header">
              <p className="casa-eyebrow">FAQ</p>
              <h2 className="casa-h2">Questions, answered.</h2>
            </div>
            <div className="casa-faq__list">
              {content.faq.map((item, i) => {
                const open = openFaq === i;
                return (
                  <article
                    key={item.q}
                    className={`casa-faq-card${open ? " casa-faq-card--open" : ""}`}
                  >
                    <button
                      type="button"
                      className="casa-faq-card__toggle"
                      aria-expanded={open}
                      onClick={() => setOpenFaq(open ? null : i)}
                    >
                      <span className="casa-faq-card__num">{String(i + 1).padStart(2, "0")}</span>
                      <span className="casa-faq-card__q">{item.q}</span>
                      <span className="casa-faq-card__icon" aria-hidden />
                    </button>
                    <div className="casa-faq-card__panel">
                      <div className="casa-faq-card__panel-inner">
                        <p className="casa-faq-card__answer">{item.a}</p>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <FinalCtaSection />
      </main>

      <MarketingFooter />
    </div>
  );
}
