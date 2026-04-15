import { useEffect, useLayoutEffect, useState } from "react";
import { useLandingContent } from "./content/LandingContentContext";
import {
  AboutPillarGlyph,
  HubFeatureGlyph,
  RoleCardGlyph,
} from "./landingVisuals";

/**
 * Legacy hero: 2×2 image mosaic (revert by replacing `.hero-visual` contents — see snippet below).
 * Previous build also used a CSS float-grid collage; see git history for `HERO_FLOAT_CARDS` / `hero-float-*`.
 */
const HERO_MOSAIC_LEGACY_URLS = [
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=450&fit=crop",
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&h=450&fit=crop",
  "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&h=450&fit=crop",
  "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=600&h=450&fit=crop",
] as const;
void HERO_MOSAIC_LEGACY_URLS;

/*
  Revert snippet:
  <div className="hero-mosaic">
    {HERO_MOSAIC_LEGACY_URLS.map((src) => (
      <img key={src} src={src} alt="" loading="lazy" />
    ))}
  </div>
*/

const IMG = {
  /** Hero right rail — composite (tenant ↔ AI collage); asset: `public/images/hero-landing-page.png` */
  heroComposite: "/images/hero-landing-page.png",
  /** Hub — vector illustration (AI agents + tenant / landlord / contractor) */
  hubCommandCenter: "/images/hub-command-agents.svg",
  /** About — people & operations, distinct from hub */
  aboutSpotlight:
    "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1200&h=800&fit=crop",
  video:
    "https://images.unsplash.com/photo-1531746797551-097c76b4304a?w=1600&h=900&fit=crop",
  gpt: [
    "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=800&h=600&fit=crop",
  ],
};

function LinkedInIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={18}
      height={18}
      aria-hidden="true"
      focusable="false"
    >
      <path
        fill="currentColor"
        d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
      />
    </svg>
  );
}

function GptChatGlyph() {
  return (
    <svg
      className="bubble-glyph"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7H8.5L5 21v-3.5A8.5 8.5 0 014.5 8a8.38 8.38 0 013.8-.9h.7a8.48 8.48 0 018.2 8.4z"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function LogoWordmark() {
  return (
    <>
      <span className="logo-prefix">all</span>
      <span className="logo-ai">ai</span>
    </>
  );
}

/** Must match CSS: `.clients-marquee__track` keyframes use calc(-100% / N) */
const CLIENT_MARQUEE_COPIES = 6;

export default function App() {
  const { content } = useLandingContent();
  const [openKey, setOpenKey] = useState<string | null>(null);
  const [faqFilter, setFaqFilter] = useState<"all" | "general">("all");
  const [gptStart, setGptStart] = useState(0);
  const [gptPerView, setGptPerView] = useState(3);

  const gptCards = content.gpt.cards;

  useEffect(() => {
    const qs = new Set(content.faq.items.map((i) => i.q));
    setOpenKey((k) =>
      k !== null && qs.has(k)
        ? k
        : content.faq.items[2]?.q ?? content.faq.items[0]?.q ?? null,
    );
  }, [content]);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 900px)");
    const sync = () => {
      const per = mq.matches ? 1 : 3;
      setGptPerView(per);
      setGptStart((s) =>
        Math.min(s, Math.max(0, gptCards.length - per)),
      );
    };
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, [gptCards.length]);

  const gptMaxStart = Math.max(0, gptCards.length - gptPerView);
  const gptVisible = gptCards.slice(gptStart, gptStart + gptPerView).map((card, i) => ({
    ...card,
    img: IMG.gpt[gptStart + i],
    idx: gptStart + i,
  }));

  const filteredFaq =
    faqFilter === "general"
      ? content.faq.items.slice(0, 2)
      : content.faq.items;

  const [heroInView, setHeroInView] = useState(true);

  useLayoutEffect(() => {
    const hero = document.querySelector(".hero");
    if (!hero) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setHeroInView(entry.isIntersecting);
      },
      { threshold: 0, rootMargin: "0px 0px 0px 0px" },
    );

    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="app">
      <header
        className={`site-header${heroInView ? "" : " site-header--past-hero"}`}
      >
        <div className="container header-inner">
          <a href="#top" className="logo">
            <LogoWordmark />
          </a>
          <nav className="nav" aria-label="Primary">
            <a href="#top">{content.nav.home}</a>
            <a href="#how">{content.nav.howItWorks}</a>
            <a href="#features">{content.nav.features}</a>
            <a href="#about">{content.nav.about}</a>
            <a href="#contact">{content.nav.contact}</a>
          </nav>
          <div className="header-actions">
            {heroInView ? (
              <a href="#contact">
                <button type="button" className="btn btn-primary">
                  {content.header.requestDemo}
                </button>
              </a>
            ) : (
              <>
                <a href="#contact">
                  <button type="button" className="btn btn-primary">
                    {content.header.getStarted}
                  </button>
                </a>
                <a className="sign-in" href="/sign-in">
                  {content.header.signIn}
                </a>
              </>
            )}
          </div>
        </div>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-glow" aria-hidden />
          <div className="container hero-grid">
            <div className="hero-copy">
              <h1>
                <span className="line">{content.hero.line1}</span>
                <span className="line">
                  <span className="accent">{content.hero.accentPhrase}</span>
                  {content.hero.accentAfter}
                </span>
                <span className="line">{content.hero.linePowered}</span>
              </h1>
              <p className="hero-tag">{content.hero.tagline}</p>
              <div className="hero-actions">
                <a href="#contact">
                  <button type="button" className="btn btn-primary">
                    {content.hero.getStarted}
                  </button>
                </a>
                <a href="/sign-in">
                  <button type="button" className="btn btn-outline">
                    {content.hero.signIn}
                  </button>
                </a>
              </div>
            </div>
            <div className="hero-visual">
              <div className="hero-composite-wrap">
                <img
                  src={IMG.heroComposite}
                  alt="All AI handling tenant maintenance messages: AC issues, leaks, and scheduling in a single conversation view"
                  className="hero-composite"
                  loading="eager"
                  decoding="async"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="clients" aria-labelledby="clients-heading">
          <div className="container clients__inner">
            <h2 id="clients-heading">{content.clients.title}</h2>
          </div>
          <div
            className="clients-marquee"
            role="region"
            aria-label={content.clients.marqueeAriaLabel}
          >
            <div className="clients-marquee__track">
              {Array.from({ length: CLIENT_MARQUEE_COPIES }, (_, copyIndex) =>
                content.clients.logos.map((logo, i) => (
                  <div
                    key={`${copyIndex}-${logo.src}-${i}`}
                    className="clients-marquee__item"
                  >
                    <img
                      src={logo.src}
                      alt={logo.name}
                      loading={copyIndex === 0 ? "eager" : "lazy"}
                    />
                  </div>
                )),
              ).flat()}
            </div>
          </div>
        </section>

        <section
          className="value-proposition"
          aria-labelledby="value-prop-heading"
        >
          <div className="container">
            <h2 id="value-prop-heading" className="visually-hidden">
              {[
                `${content.valueProposition.gradientText}${content.valueProposition.line1Suffix}`,
                content.valueProposition.line2,
                content.valueProposition.line3,
                content.valueProposition.line4,
              ]
                .map((s) => s.trim())
                .filter(Boolean)
                .join(" ")}
            </h2>
            <p className="value-proposition__statement" aria-hidden="true">
              {(content.valueProposition.gradientText ||
                content.valueProposition.line1Suffix) && (
                <span className="value-proposition__line">
                  {content.valueProposition.gradientText ? (
                    <span className="value-proposition__gradient">
                      {content.valueProposition.gradientText}
                    </span>
                  ) : null}
                  {content.valueProposition.line1Suffix}
                </span>
              )}
              {[content.valueProposition.line2, content.valueProposition.line3, content.valueProposition.line4]
                .map((s) => s.trim())
                .filter(Boolean)
                .map((line, i) => (
                  <span key={i} className="value-proposition__line">
                    {line}
                  </span>
                ))}
            </p>
          </div>
        </section>

        <section
          id="features"
          className="built-for"
          aria-labelledby="features-heading"
        >
          <div className="built-for__bg" aria-hidden />
          <div className="container built-for__inner">
            <header className="built-for__head">
              <h2 id="features-heading" className="built-for__title">
                {content.builtForEveryone.title}
              </h2>
              <p className="built-for__subtitle">
                {content.builtForEveryone.subtitle}
              </p>
              <p className="built-for__tagline">
                <span className="built-for__tagline-icon" aria-hidden>
                  ★
                </span>
                {content.builtForEveryone.tagline}
                <span className="built-for__tagline-spark" aria-hidden>
                  ✦
                </span>
              </p>
            </header>
            <ul className="built-for__grid">
              {content.builtForEveryone.cards.map((card) => (
                <li key={card.icon} className="built-for__cell">
                  <article
                    className={`built-for-card${card.popular ? " built-for-card--popular" : ""}`}
                  >
                    {card.popular ? (
                      <span className="built-for-card__badge">
                        {content.builtForEveryone.popularLabel}
                      </span>
                    ) : null}
                    <div className="built-for-card__icon" aria-hidden>
                      <RoleCardGlyph id={card.icon} />
                    </div>
                    <h3 className="built-for-card__title">{card.title}</h3>
                    <p className="built-for-card__desc">{card.description}</p>
                    <ul className="built-for-card__list">
                      {card.features.map((line) => (
                        <li key={line} className="built-for-card__item">
                          <span className="built-for-card__check" aria-hidden>
                            <svg viewBox="0 0 16 16" fill="none">
                              <path
                                d="M3.5 8.2l2.8 2.8 6.2-6.2"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </span>
                          {line}
                        </li>
                      ))}
                    </ul>
                  </article>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section
          id="how"
          className="coordination"
          aria-labelledby="coordination-heading"
        >
          <div className="coordination-bg" aria-hidden />
          <div className="container">
            <header className="coordination-head">
              <h2
                id="coordination-heading"
                className="coordination-title gradient-heading"
              >
                {content.coordination.title}
              </h2>
              <p className="coordination-lead">{content.coordination.lead}</p>
            </header>
            <ul className="coordination-grid">
              {content.coordination.items.map((item) => (
                <li key={item.step} className="coordination-card">
                  <span className="coordination-card__step" aria-hidden>
                    {item.step}
                  </span>
                  <h3 className="coordination-card__title">{item.title}</h3>
                  <p className="coordination-card__body">{item.body}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="hub" aria-labelledby="hub-heading">
          <div className="hub-deco" aria-hidden />
          <div className="container">
            <header className="hub-head">
              <p className="hub-eyebrow">{content.hub.eyebrow}</p>
              <h2 id="hub-heading" className="hub-title gradient-heading">
                {content.hub.title}
              </h2>
              <p className="hub-lead">{content.hub.lead}</p>
            </header>
            <div className="hub-showcase">
              {content.hub.features.map((f) => (
                <article key={f.title} className={`hub-feature ${f.mod}`}>
                  <div className="hub-feature__icon">
                    <HubFeatureGlyph id={f.icon} />
                  </div>
                  <h3 className="hub-feature__title">{f.title}</h3>
                  <p className="hub-feature__body">{f.body}</p>
                </article>
              ))}
              <div className="hub-spotlight">
                <div className="hub-glow" aria-hidden />
                <div className="hub-panel">
                  <img
                    src={IMG.hubCommandCenter}
                    alt={content.hub.diagramAlt}
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="video-section" id="demo" aria-labelledby="video-heading">
          <div className="container">
            <h2 id="video-heading" className="gradient-heading">
              {content.video.title}
            </h2>
            <p className="vid-desc">{content.video.description}</p>
            <div className="video-frame">
              <img src={IMG.video} alt="" loading="lazy" />
              <button
                type="button"
                className="play"
                aria-label={content.video.playLabel}
              >
                ▶
              </button>
            </div>
            <button type="button" className="btn btn-primary">
              {content.video.seeDemo}
            </button>
          </div>
        </section>

        <section className="gpt" aria-labelledby="gpt-heading">
          <div className="container">
            <h2 id="gpt-heading" className="gradient-heading">
              {content.gpt.title}
            </h2>
            <p className="gpt-desc">{content.gpt.description}</p>
            <div
              className="gpt-showcase"
              aria-roledescription="carousel"
              aria-label={content.gpt.carouselLabel}
            >
              <div className="gpt-grid" aria-live="polite">
                {gptVisible.map((c) => (
                  <article key={c.idx} className="gpt-card">
                    <img src={c.img} alt="" loading="lazy" />
                    <div className="gpt-overlay" aria-hidden />
                    <div className="gpt-bubbles">
                      <div className="bubble user">
                        <GptChatGlyph />
                        <span>{c.user}</span>
                      </div>
                      <div className="bubble ai">
                        <GptChatGlyph />
                        <span>{c.ai}</span>
                      </div>
                    </div>
                    <div className="gpt-card-foot">
                      <h3>{c.title}</h3>
                      <p>{c.desc}</p>
                    </div>
                  </article>
                ))}
              </div>
              <div className="gpt-nav">
                <button
                  type="button"
                  className="gpt-nav-btn"
                  aria-label={content.gpt.prevLabel}
                  disabled={gptStart <= 0}
                  onClick={() => setGptStart((s) => Math.max(0, s - 1))}
                >
                  <svg
                    viewBox="0 0 24 24"
                    width="20"
                    height="20"
                    aria-hidden="true"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 6l-6 6 6 6"
                    />
                  </svg>
                </button>
                <button
                  type="button"
                  className="gpt-nav-btn"
                  aria-label={content.gpt.nextLabel}
                  disabled={gptStart >= gptMaxStart}
                  onClick={() =>
                    setGptStart((s) => Math.min(gptMaxStart, s + 1))
                  }
                >
                  <svg
                    viewBox="0 0 24 24"
                    width="20"
                    height="20"
                    aria-hidden="true"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 6l6 6-6 6"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="about" aria-labelledby="about-heading">
          <div className="about-deco" aria-hidden />
          <div className="container">
            <div className="about-layout">
              <div className="about-copy">
                <p className="about-eyebrow">{content.about.eyebrow}</p>
                <h2 id="about-heading" className="about-title gradient-heading">
                  {content.about.title}
                </h2>
                <div className="about-body">
                  <p>
                    {content.about.p1Before}
                    <span className="about-brand">{content.site.brandName}</span>
                    {content.about.p1After}
                  </p>
                  <p>
                    {content.about.p2Before}
                    <strong>{content.about.p2Emphasis}</strong>
                    {content.about.p2After}
                  </p>
                </div>
                <ul className="about-pillars">
                  {content.about.pillars.map((item) => (
                    <li key={item.title} className="about-pillar">
                      <span className="about-pillar__icon">
                        <AboutPillarGlyph id={item.icon} />
                      </span>
                      <div>
                        <h3 className="about-pillar__title">{item.title}</h3>
                        <p className="about-pillar__body">{item.body}</p>
                      </div>
                    </li>
                  ))}
                </ul>
                <div className="about-actions">
                  <a href="#team">
                    <button type="button" className="btn btn-primary">
                      {content.about.meetTeam}
                    </button>
                  </a>
                  <a href="#contact">
                    <button type="button" className="btn btn-outline">
                      {content.about.bookConversation}
                    </button>
                  </a>
                </div>
              </div>
              <div className="about-visual">
                <div className="about-glow" aria-hidden />
                <div className="about-panel">
                  <img
                    src={IMG.aboutSpotlight}
                    alt={content.about.spotlightAlt}
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="team" className="team" aria-labelledby="team-heading">
          <div className="container">
            <div className="team-head">
              <h2 id="team-heading" className="gradient-heading">
                {content.team.title}
              </h2>
            </div>
            <div className="team-grid">
              {content.team.members.map((m) => (
                <article key={m.name} className="team-card">
                  <div className="team-card__media">
                    <img
                      className="photo"
                      src={m.imageSrc}
                      alt={m.name}
                      loading="lazy"
                    />
                    <a
                      href={m.linkedin}
                      className="team-card__linkedin"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={m.linkedinAriaLabel}
                    >
                      <LinkedInIcon />
                    </a>
                  </div>
                  <div className="body">
                    <h3>{m.name}</h3>
                    <p className="role">{m.role}</p>
                    <ul>
                      {m.bio.map((line) => (
                        <li key={line}>{line}</li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-light" style={{ paddingTop: 0 }}>
          <div className="container">
            <div className="cta-banner" id="contact">
              <h2>{content.ctaBanner.title}</h2>
              <div className="cta-actions">
                <button type="button" className="btn btn-light">
                  {content.ctaBanner.bookDemo}
                </button>
                <button type="button" className="btn btn-ghost">
                  {content.ctaBanner.chatWithAi}
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="testimonials" aria-labelledby="testimonials-heading">
          <div className="container">
            <h2 id="testimonials-heading" className="gradient-heading">
              {content.testimonials.title}
            </h2>
            <p className="lead">
              {content.testimonials.leadBefore}
              <span className="brand">{content.site.brandName}</span>
              {content.testimonials.leadAfter}
            </p>
            <div className="testimonial-row">
              {content.testimonials.items.map((t) => (
                <article
                  key={`${t.who}-${t.quote.slice(0, 24)}`}
                  className={`t-card${t.featured ? " featured" : ""}`}
                >
                  <div className="quote-mark">“</div>
                  <blockquote>{t.quote}</blockquote>
                  <div className="who">{t.who}</div>
                  <div className="meta">{t.meta}</div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="faq-wrap" aria-labelledby="faq-heading">
          <div className="container">
            <div className="pre-footer-inner" style={{ border: "none", paddingBottom: "1.5rem" }}>
              <h2 id="faq-heading" className="gradient-heading" style={{ margin: 0, fontSize: "clamp(1.5rem, 2.5vw, 2rem)" }}>
                {content.faq.heading}
              </h2>
              <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                <button type="button" className="btn btn-primary">
                  {content.ctaBanner.bookDemo}
                </button>
                <button
                  type="button"
                  className="btn btn-outline"
                  style={{
                    color: "var(--text-dark)",
                    borderColor: "rgba(24,33,61,0.2)",
                  }}
                >
                  {content.ctaBanner.chatWithAi}
                </button>
              </div>
            </div>
            <div className="faq-head">
              <div />
              <div className="faq-filters">
                <button
                  type="button"
                  className={faqFilter === "all" ? "active" : ""}
                  onClick={() => setFaqFilter("all")}
                >
                  {content.faq.filterAll}
                </button>
                <button
                  type="button"
                  className={faqFilter === "general" ? "active" : ""}
                  onClick={() => setFaqFilter("general")}
                >
                  {content.faq.filterGeneral}
                </button>
              </div>
            </div>
            <div className="faq-list">
              {filteredFaq.map((item) => {
                const isOpen = openKey === item.q;
                return (
                  <div key={item.q} className="faq-item">
                    <button
                      type="button"
                      className="toggle"
                      onClick={() => setOpenKey(isOpen ? null : item.q)}
                      aria-expanded={isOpen}
                    >
                      <span>{item.q}</span>
                      <span className="icon" aria-hidden>
                        {isOpen ? "−" : "+"}
                      </span>
                    </button>
                    {isOpen ? <div className="answer">{item.a}</div> : null}
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <div className="footer-logo">
                <LogoWordmark />
              </div>
              <p className="footer-brand__company">{content.site.companyShort}</p>
              <p className="footer-brand__tagline">{content.footer.tagline}</p>
            </div>
            <nav className="footer-col" aria-label="Quick links">
              <h4>{content.footer.quickLinksTitle}</h4>
              <a href="#top">{content.nav.home}</a>
              <a href="#features">{content.nav.features}</a>
              <a href="#about">{content.nav.about}</a>
              <a href="#contact">{content.nav.contact}</a>
            </nav>
            <nav className="footer-col" aria-label="Legal and policies">
              <h4>{content.footer.legalTitle}</h4>
              <a href="#privacy">{content.footer.privacy}</a>
              <a href="#terms">{content.footer.terms}</a>
              <a href="#security">{content.footer.dataSecurity}</a>
            </nav>
            <div className="footer-col footer-col--social">
              <h4>{content.footer.followTitle}</h4>
              <ul className="footer-social">
                <li>
                  <a
                    className="footer-social-btn"
                    href="#twitter"
                    aria-label={content.footer.socialX}
                  >
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                      <path
                        fill="currentColor"
                        d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
                      />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    className="footer-social-btn"
                    href="#facebook"
                    aria-label={content.footer.socialFacebook}
                  >
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                      <path
                        fill="currentColor"
                        d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
                      />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    className="footer-social-btn"
                    href="#instagram"
                    aria-label={content.footer.socialInstagram}
                  >
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                      <path
                        fill="currentColor"
                        d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"
                      />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p className="footer-copyright">{content.footer.copyright}</p>
            <p className="footer-bottom__tagline">
              {content.footer.bottomTagline}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
