import { useEffect, useLayoutEffect, useState } from "react";

const IMG = {
  mosaic: [
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=450&fit=crop",
    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&h=450&fit=crop",
    "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&h=450&fit=crop",
    "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=600&h=450&fit=crop",
  ],
  triage: "/images/triage-landing-page.jpg",
  coordinate: "/images/coordinate-landing-page.png",
  relax: "/images/relax-landing-page.jpg",
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
  team: [
    "/images/founders/ghassan.jpeg",
    "/images/founders/nihal.jpeg",
    "/images/founders/omar.jpeg",
  ],
};

const GPT_AGENT_CARDS = [
  {
    user: "Hi, my kitchen faucet is leaking.",
    ai: "Thanks for reporting! Is it a steady drip or a continuous flow?",
    title: "Human-Like Conversations",
    desc: "Understands tenant requests naturally—no rigid scripts required.",
  },
  {
    user: "The AC isn't cooling my apartment properly.",
    ai: "Got it. Have you checked whether the filter needs cleaning?",
    title: "Advanced Diagnostics",
    desc: "Pinpoints likely causes fast with contextual follow-up questions.",
  },
  {
    user: "The living room lights won't turn on.",
    ai: "Understood. Did you already check the circuit breaker?",
    title: "Adaptive Problem Solving",
    desc: "Learns from each thread so the next conversation is even smoother.",
  },
  {
    user: "Can you send someone before Friday?",
    ai: "I’ve matched this to your SLA and penciled Wed 1–3 PM—confirm?",
    title: "Vendor-Aware Scheduling",
    desc: "Respects your vendors, access rules, and time windows automatically.",
  },
  {
    user: "Did the plumber actually show up?",
    ai: "Yes—check-in at 2:14 PM with a photo of the completed repair.",
    title: "Proof & Transparency",
    desc: "Photos, timestamps, and status in one place for tenants and owners.",
  },
  {
    user: "Same unit keeps reporting clogged drains.",
    ai: "Flagging a repeat pattern for your portfolio dashboard and PM inbox.",
    title: "Portfolio Intelligence",
    desc: "Surfaces repeat issues across buildings before they hit your NOI.",
  },
] as const;

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

const CLIENT_LOGOS = [
  {
    src: "/images/clients/lakeside-partners.png",
    name: "Lakeside Partners Real Estate",
  },
  {
    src: "/images/clients/lake-greystone.png",
    name: "Lake Greystone Properties",
  },
  {
    src: "/images/clients/motown-realty.png",
    name: "Motown Realty",
  },
  {
    src: "/images/clients/the-real-big-company.png",
    name: "The Real Big Company",
  },
  {
    src: "/images/clients/my-town-realty.png",
    name: "My Town Realty",
  },
] as const;

/** Must match CSS: `.clients-marquee__track` keyframes use calc(-100% / N) */
const CLIENT_MARQUEE_COPIES = 6;

const FAQ_ITEMS = [
  {
    q: "How does All AI handle my data?",
    a: "We apply industry-standard encryption, strict access controls, and clear data retention policies. Tenant and property data is processed to deliver maintenance outcomes and is never sold to third parties.",
  },
  {
    q: "Is my information secure with AI?",
    a: "Yes. Our infrastructure follows security best practices, and AI interactions are logged for auditability while minimizing sensitive data exposure in prompts.",
  },
  {
    q: "What if the AI can't solve an issue?",
    a: "If All AI can't resolve a problem, it seamlessly escalates to your team or a technician, ensuring no request goes unresolved.",
  },
  {
    q: "How do I get started with my portfolio?",
    a: "Book a demo and we'll map your workflows, connect channels tenants already use, and tailor escalation paths to your vendors and staff.",
  },
];

export default function App() {
  const [openKey, setOpenKey] = useState<string | null>(FAQ_ITEMS[2].q);
  const [faqFilter, setFaqFilter] = useState<"all" | "general">("all");
  const [gptStart, setGptStart] = useState(0);
  const [gptPerView, setGptPerView] = useState(3);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 900px)");
    const sync = () => {
      const per = mq.matches ? 1 : 3;
      setGptPerView(per);
      setGptStart((s) =>
        Math.min(s, Math.max(0, GPT_AGENT_CARDS.length - per)),
      );
    };
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  const gptMaxStart = Math.max(0, GPT_AGENT_CARDS.length - gptPerView);
  const gptVisible = GPT_AGENT_CARDS.slice(
    gptStart,
    gptStart + gptPerView,
  ).map((card, i) => ({
    ...card,
    img: IMG.gpt[gptStart + i],
    idx: gptStart + i,
  }));

  const filteredFaq =
    faqFilter === "general" ? FAQ_ITEMS.slice(0, 2) : FAQ_ITEMS;

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
            <a href="#top">Home</a>
            <a href="#how">How it works</a>
            <a href="#features">Features</a>
            <a href="#about">About Us</a>
            <a href="#contact">Contact</a>
          </nav>
          <div className="header-actions">
            {heroInView ? (
              <a href="#contact">
                <button type="button" className="btn btn-primary">
                  Request demo
                </button>
              </a>
            ) : (
              <>
                <a href="#contact">
                  <button type="button" className="btn btn-primary">
                    Get started
                  </button>
                </a>
                <a className="sign-in" href="/sign-in">
                  Sign in
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
                <span className="line">Stress-free </span>
                <span className="line">
                  <span className="accent">Property Maintenance</span>.{" "}
                </span>
                <span className="line">Powered by AI.</span>
              </h1>
              <p className="hero-tag">
                Automate interactions with tenants and vendors. Resolve basic
                issues automatically. Escalate only if necessary.
              </p>
              <div className="hero-actions">
                <a href="#contact">
                  <button type="button" className="btn btn-primary">
                    Get started
                  </button>
                </a>
                <a href="/sign-in">
                  <button type="button" className="btn btn-outline">
                    Sign in
                  </button>
                </a>
              </div>
            </div>
            <div className="hero-visual">
              <div className="hero-mosaic">
                {IMG.mosaic.map((src) => (
                  <img key={src} src={src} alt="" loading="lazy" />
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="clients" aria-labelledby="clients-heading">
          <div className="container clients__inner">
            <h2 id="clients-heading">Clients Who Believe In Us</h2>
          </div>
          <div
            className="clients-marquee"
            role="region"
            aria-label="Client logos"
          >
            <div className="clients-marquee__track">
              {Array.from({ length: CLIENT_MARQUEE_COPIES }, (_, copyIndex) =>
                CLIENT_LOGOS.map((logo, i) => (
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
          id="features"
          className="section-features"
          aria-labelledby="features-heading"
        >
          <div className="container">
            <div className="features-head">
              <h2 id="features-heading">
                Smarter Property Care in Every Step
              </h2>
              <p className="features-sub">
                Detect issues early, coordinate repairs effortlessly, and keep
                tenants satisfied — all without the usual hassle.
              </p>
            </div>
            <div className="feature-cards">
              <article
                className="feature-card"
                style={
                  {
                    "--feature-image": `url("${IMG.triage}")`,
                  } as React.CSSProperties
                }
              >
                <div className="feature-card__copy">
                  <h3>Triage</h3>
                  <p>
                    Prevent Small Issues From Ballooning Into Disasters. Help
                    Tenants Solve Basic Problems On Their Own.
                  </p>
                </div>
              </article>
              <article
                className="feature-card feature-card--mid"
                style={
                  {
                    "--feature-image": `url("${IMG.coordinate}")`,
                  } as React.CSSProperties
                }
              >
                <div className="feature-card__copy">
                  <h3>Coordinate</h3>
                  <p>
                    Eliminate The Tedious Back-And-Forth Coordinating On-Site
                    Repairs.
                  </p>
                </div>
              </article>
              <article
                className="feature-card"
                style={
                  {
                    "--feature-image": `url("${IMG.relax}")`,
                  } as React.CSSProperties
                }
              >
                <div className="feature-card__copy">
                  <h3>Relax</h3>
                  <p>
                    Reduced Call Volumes And Faster Resolutions Lower Your Costs
                    And Retain Satisfied Tenants.
                  </p>
                </div>
              </article>
            </div>
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
                Coordinate Everyone—Without the Chase
              </h2>
              <p className="coordination-lead">
                All AI keeps tenants, your team, and vendors on one shared
                timeline. Fewer status checks, fewer dropped threads—and
                maintenance that keeps moving even when you step away.
              </p>
            </header>
            <ul className="coordination-grid">
              {[
                {
                  step: "01",
                  title: "Single source of truth",
                  body: "Live status and history everyone can trust—no duplicate emails or conflicting stories between parties.",
                },
                {
                  step: "02",
                  title: "Handoffs that stick",
                  body: "Issues leave your queue with context, photos, and access notes bundled so vendors show up prepared.",
                },
                {
                  step: "03",
                  title: "Smarter time windows",
                  body: "Scheduling that respects tenant availability and your SLAs, with confirmations handled automatically.",
                },
                {
                  step: "04",
                  title: "Proof, then done",
                  body: "Close the loop with tenant sign-off or photo evidence—clear accountability from report to resolution.",
                },
              ].map((item) => (
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
              <p className="hub-eyebrow">Live operations</p>
              <h2 id="hub-heading" className="hub-title gradient-heading">
                Your Maintenance Command Center
              </h2>
              <p className="hub-lead">
                Every request, message, and work order in one place. All AI
                centralizes intake, triage, and follow-through so your team leads
                instead of chasing threads across inboxes and spreadsheets.
              </p>
            </header>
            <div className="hub-showcase">
              {(
                [
                  {
                    mod: "hub-feature--tl",
                    icon: (
                      <svg viewBox="0 0 24 24" fill="none" aria-hidden>
                        <path
                          d="M4 6h16M4 12h10M4 18h7"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                        <circle cx="18" cy="6" r="2" fill="currentColor" />
                      </svg>
                    ),
                    title: "Omni-channel intake",
                    body: "Chat, SMS, and email normalize into one thread—context and attachments stay attached from the first ping.",
                  },
                  {
                    mod: "hub-feature--bl",
                    icon: (
                      <svg viewBox="0 0 24 24" fill="none" aria-hidden>
                        <path
                          d="M12 3v18M7 8l5-5 5 5M7 16l5 5 5-5"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    ),
                    title: "Intelligent routing",
                    body: "Urgency, category, and property rules drive the next step—self-serve answers, your staff, or the right vendor.",
                  },
                  {
                    mod: "hub-feature--tr",
                    icon: (
                      <svg viewBox="0 0 24 24" fill="none" aria-hidden>
                        <path
                          d="M9 12l2 2 4-4M5 8h4l2-3h6l2 3h4v10a2 2 0 01-2 2H7a2 2 0 01-2-2V8z"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    ),
                    title: "Evidence & SLAs",
                    body: "Photos, timestamps, and status history from report to close-out—audit-ready without extra paperwork.",
                  },
                  {
                    mod: "hub-feature--br",
                    icon: (
                      <svg viewBox="0 0 24 24" fill="none" aria-hidden>
                        <path
                          d="M4 20V9l8-5 8 5v11M9 20v-6h6v6"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    ),
                    title: "Portfolio-wide clarity",
                    body: "Roll up activity across buildings and units to spot repeat issues early and protect NOI.",
                  },
                ]
              ).map((f) => (
                <article key={f.title} className={`hub-feature ${f.mod}`}>
                  <div className="hub-feature__icon">{f.icon}</div>
                  <h3 className="hub-feature__title">{f.title}</h3>
                  <p className="hub-feature__body">{f.body}</p>
                </article>
              ))}
              <div className="hub-spotlight">
                <div className="hub-glow" aria-hidden />
                <div className="hub-panel">
                  <img
                    src={IMG.hubCommandCenter}
                    alt="Diagram: AI agents relay messages between tenant, landlord, and contractor through a central All AI hub"
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
              Walk Through the Future of Maintenance
            </h2>
            <p className="vid-desc">
              See step-by-step how All AI handles tenant requests, triages
              issues, and drives resolutions—without the back-and-forth.
            </p>
            <div className="video-frame">
              <img src={IMG.video} alt="" loading="lazy" />
              <button type="button" className="play" aria-label="Play demo">
                ▶
              </button>
            </div>
            <button type="button" className="btn btn-primary">
              See Demo
            </button>
          </div>
        </section>

        <section className="gpt" aria-labelledby="gpt-heading">
          <div className="container">
            <h2 id="gpt-heading" className="gradient-heading">
              The All AI Agent — A First-of-Its-Kind Partner for Stress-Free Home
              Maintenance
            </h2>
            <p className="gpt-desc">
              All AI is an intelligent agent built to take the friction out of home
              maintenance. It keeps tenants, property teams, and vendors in sync
              automatically — triaging requests, sharing updates, and driving
              resolutions so every stakeholder stays informed without the usual
              back-and-forth.
            </p>
            <div
              className="gpt-showcase"
              aria-roledescription="carousel"
              aria-label="All AI agent capabilities"
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
                  aria-label="Previous agent features"
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
                  aria-label="Next agent features"
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
                <p className="about-eyebrow">Our mission</p>
                <h2 id="about-heading" className="about-title gradient-heading">
                  Built by People Who Felt the Friction
                </h2>
                <div className="about-body">
                  <p>
                    Great portfolios shouldn’t be held back by voicemails,
                    spreadsheets, and “who’s covering the inbox today?” We
                    started <span className="about-brand">All AI</span> after
                    watching capable teams drown in coordination—not in strategy.
                  </p>
                  <p>
                    Our founders blend{" "}
                    <strong>real estate, technology, and operations</strong> so
                    the product matches how maintenance really gets done on the
                    ground: fast triage, clear ownership, and proof when the
                    job is done.
                  </p>
                </div>
                <ul className="about-pillars">
                  {[
                    {
                      title: "Operator-led product",
                      body: "Built around portfolios, SLAs, and vendors—not a generic chat widget bolted onto your stack.",
                      icon: (
                        <svg viewBox="0 0 24 24" fill="none" aria-hidden>
                          <path
                            d="M12 15a3 3 0 100-6 3 3 0 000 6z"
                            stroke="currentColor"
                            strokeWidth="2"
                          />
                          <path
                            d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                          />
                        </svg>
                      ),
                    },
                    {
                      title: "Trust in the open",
                      body: "Tenants, managers, and vendors see the same timeline—accountability beats black-box automation.",
                      icon: (
                        <svg viewBox="0 0 24 24" fill="none" aria-hidden>
                          <path
                            d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M9 12l2 2 4-4"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                          />
                        </svg>
                      ),
                    },
                    {
                      title: "Scale without chaos",
                      body: "More doors shouldn’t mean more inbox anxiety—automation should absorb the noise, not add to it.",
                      icon: (
                        <svg viewBox="0 0 24 24" fill="none" aria-hidden>
                          <path
                            d="M3 3v18h18M7 16l4-4 4 4 5-5"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      ),
                    },
                  ].map((item) => (
                    <li key={item.title} className="about-pillar">
                      <span className="about-pillar__icon">{item.icon}</span>
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
                      Meet the team
                    </button>
                  </a>
                  <a href="#contact">
                    <button type="button" className="btn btn-outline">
                      Book a conversation
                    </button>
                  </a>
                </div>
              </div>
              <div className="about-visual">
                <div className="about-glow" aria-hidden />
                <div className="about-panel">
                  <img
                    src={IMG.aboutSpotlight}
                    alt="Property team collaborating on maintenance and tenant coordination"
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
                Meet Our Team
              </h2>
            </div>
            <div className="team-grid">
              {[
                {
                  name: "Ghassan Ghorayeb",
                  role: "Co Founder",
                  linkedin: "https://www.linkedin.com/in/ghassan-ghorayeb/",
                  bio: [
                    "Retinal Surgeon & Chief of Division",
                    "Co-Founder of RBC, a multimillion-dollar commercial and medical real estate portfolio, driving development of advanced healthcare facilities",
                    "MIT MBA; Published innovator applying AI to healthcare and property technology solutions",
                  ],
                  img: IMG.team[0],
                },
                {
                  name: "Nihal Bhujle",
                  role: "Co Founder",
                  linkedin: "https://www.linkedin.com/in/nihal-bhujle/",
                  bio: [
                    "Led Digital Product Innovation at UBS and Gartner's CxO global advisory practice",
                    "Co-founder of RBC, a multi-million dollar commercial and residential real estate portfolio, delivering an annualized return of 16% over the last decade to investors",
                    "MIT MBA, BS Finance Wharton School, deep background in corporate finance advisory",
                  ],
                  img: IMG.team[1],
                },
                {
                  name: "Omar Jacques Omran",
                  role: "Co Founder",
                  linkedin: "https://www.linkedin.com/in/omar-omran/",
                  bio: [
                    "Led Technology for 3 large public companies (Six Flags, Welbilt, Middleby, : $3B–10B) generating $500M in net profit increase",
                    "Named 2024 Top Global Innovator",
                    "MIT MBA; 1st prize winner largest global hackathon",
                  ],
                  img: IMG.team[2],
                },
              ].map((m) => (
                <article key={m.name} className="team-card">
                  <div className="team-card__media">
                    <img
                      className="photo"
                      src={m.img}
                      alt={m.name}
                      loading="lazy"
                    />
                    <a
                      href={m.linkedin}
                      className="team-card__linkedin"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${m.name} on LinkedIn`}
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
              <h2>Ready to Upgrade Your Maintenance Game?</h2>
              <div className="cta-actions">
                <button type="button" className="btn btn-light">
                  Book a Demo
                </button>
                <button type="button" className="btn btn-ghost">
                  Chat with All AI
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="testimonials" aria-labelledby="testimonials-heading">
          <div className="container">
            <h2 id="testimonials-heading" className="gradient-heading">
              How All AI Makes a Difference
            </h2>
            <p className="lead">
              Real Stories of How <span className="brand">All AI</span> Is
              Transforming Property Management—From Seamless Maintenance to
              Happier Living Experiences.
            </p>
            <div className="testimonial-row">
              <article className="t-card">
                <div className="quote-mark">“</div>
                <blockquote>
                  All AI has made managing multiple rental units effortless. I
                  get instant updates on maintenance requests, and repairs are
                  handled before they affect tenant satisfaction.
                </blockquote>
                <div className="who">John Harris</div>
                <div className="meta">Tenant, Brookside Residences</div>
              </article>
              <article className="t-card featured">
                <div className="quote-mark">“</div>
                <blockquote>
                  Before All AI, reporting an issue meant endless calls and
                  delays. Now, I just log it on the chat, and it’s fixed in no
                  time. Living here feels stress-free.
                </blockquote>
                <div className="who">David Reynolds</div>
                <div className="meta">Tenant, Brookside Residences</div>
              </article>
              <article className="t-card">
                <div className="quote-mark">“</div>
                <blockquote>
                  Before All AI, reporting an issue meant endless calls and
                  delays. Now, I just log it on the app, and it’s fixed in no
                  time. Living here feels stress-free.
                </blockquote>
                <div className="who">David Reynolds</div>
                <div className="meta">Tenant, Brookside Residences</div>
              </article>
            </div>
          </div>
        </section>

        <section className="faq-wrap" aria-labelledby="faq-heading">
          <div className="container">
            <div className="pre-footer-inner" style={{ border: "none", paddingBottom: "1.5rem" }}>
              <h2 id="faq-heading" className="gradient-heading" style={{ margin: 0, fontSize: "clamp(1.5rem, 2.5vw, 2rem)" }}>
                Frequently Asked Questions
              </h2>
              <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                <button type="button" className="btn btn-primary">
                  Book a Demo
                </button>
                <button
                  type="button"
                  className="btn btn-outline"
                  style={{
                    color: "var(--text-dark)",
                    borderColor: "rgba(24,33,61,0.2)",
                  }}
                >
                  Chat with All AI
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
                  All Questions
                </button>
                <button
                  type="button"
                  className={faqFilter === "general" ? "active" : ""}
                  onClick={() => setFaqFilter("general")}
                >
                  General
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
              <p className="footer-brand__company">All AI</p>
              <p className="footer-brand__tagline">
                Smart, AI-powered property maintenance from issue report to
                resolution.
              </p>
            </div>
            <nav className="footer-col" aria-label="Quick links">
              <h4>Quick Links</h4>
              <a href="#top">Home</a>
              <a href="#features">Features</a>
              <a href="#about">About Us</a>
              <a href="#contact">Contact</a>
            </nav>
            <nav className="footer-col" aria-label="Legal and policies">
              <h4>Legal &amp; Policies</h4>
              <a href="#privacy">Privacy Policy</a>
              <a href="#terms">Terms of Service</a>
              <a href="#security">Data Security</a>
            </nav>
            <div className="footer-col footer-col--social">
              <h4>Follow</h4>
              <ul className="footer-social">
                <li>
                  <a
                    className="footer-social-btn"
                    href="#twitter"
                    aria-label="All AI on X"
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
                    aria-label="All AI on Facebook"
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
                    aria-label="All AI on Instagram"
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
            <p className="footer-copyright">
              © 2026 All AI. All rights reserved.
            </p>
            <p className="footer-bottom__tagline">
              AI-native maintenance for modern portfolios.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
