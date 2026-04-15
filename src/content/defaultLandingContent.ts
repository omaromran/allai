import type { LandingCopy } from "./types";

export const DEFAULT_LANDING_COPY: LandingCopy = {
  site: {
    brandName: "All AI",
    companyShort: "All AI",
  },
  nav: {
    home: "Home",
    howItWorks: "How it works",
    features: "Features",
    about: "About Us",
    contact: "Contact",
  },
  header: {
    requestDemo: "Request demo",
    getStarted: "Get started",
    signIn: "Sign in",
  },
  hero: {
    line1: "Stress-free ",
    accentPhrase: "Property Maintenance",
    accentAfter: ". ",
    linePowered: "Powered by AI.",
    tagline:
      "Automate interactions with tenants and vendors. Resolve basic issues automatically. Escalate only if necessary.",
    getStarted: "Get started",
    signIn: "Sign in",
  },
  clients: {
    title: "Clients Who Believe In Us",
    marqueeAriaLabel: "Client logos",
    logos: [
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
    ],
  },
  valueProposition: {
    gradientText: "Smart Property Care",
    line1Suffix: " that helps property managers and owners",
    line2: "automate maintenance—from intake and triage to",
    line3: "vendor coordination—so tenants stay informed and",
    line4: "operations run with less noise and clearer accountability.",
  },
  featureJourney: {
    eyebrow: "How it flows",
    titleMuted: "From the first message ",
    titleGradient: "to a clean close",
    lead: "A deliberate three-stage loop—built for portfolios that cannot afford vague tickets, noisy inboxes, or mystery resolutions.",
    steps: [
      {
        step: "01",
        title: "Clarify before it escalates",
        body: "Guided follow-ups capture photos, severity, and access details—so the first human touch starts with context, not twenty questions.",
        icon: "clarify",
      },
      {
        step: "02",
        title: "Route with confidence",
        body: "Issues match your playbooks, vendors, and SLAs. Windows get proposed and confirmed without the usual scheduling thread.",
        icon: "route",
      },
      {
        step: "03",
        title: "Close with a paper trail",
        body: "Check-ins, completion proof, and tenant acknowledgment live in one timeline—clean handbacks and fewer “what happened?” reruns.",
        icon: "proof",
      },
    ],
  },
  coordination: {
    title: "Coordinate Everyone—Without the Chase",
    lead: "All AI keeps tenants, your team, and vendors on one shared timeline. Fewer status checks, fewer dropped threads—and maintenance that keeps moving even when you step away.",
    items: [
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
    ],
  },
  hub: {
    eyebrow: "Live operations",
    title: "Your Maintenance Command Center",
    lead: "Every request, message, and work order in one place. All AI centralizes intake, triage, and follow-through so your team leads instead of chasing threads across inboxes and spreadsheets.",
    diagramAlt:
      "Diagram: AI agents relay messages between tenant, landlord, and contractor through a central All AI hub",
    features: [
      {
        mod: "hub-feature--tl",
        icon: "intake",
        title: "Omni-channel intake",
        body: "Chat, SMS, and email normalize into one thread—context and attachments stay attached from the first ping.",
      },
      {
        mod: "hub-feature--bl",
        icon: "routing",
        title: "Intelligent routing",
        body: "Urgency, category, and property rules drive the next step—self-serve answers, your staff, or the right vendor.",
      },
      {
        mod: "hub-feature--tr",
        icon: "evidence",
        title: "Evidence & SLAs",
        body: "Photos, timestamps, and status history from report to close-out—audit-ready without extra paperwork.",
      },
      {
        mod: "hub-feature--br",
        icon: "portfolio",
        title: "Portfolio-wide clarity",
        body: "Roll up activity across buildings and units to spot repeat issues early and protect NOI.",
      },
    ],
  },
  video: {
    title: "Walk Through the Future of Maintenance",
    description:
      "See step-by-step how All AI handles tenant requests, triages issues, and drives resolutions—without the back-and-forth.",
    playLabel: "Play demo",
    seeDemo: "See Demo",
  },
  gpt: {
    title:
      "The All AI Agent — A First-of-Its-Kind Partner for Stress-Free Home Maintenance",
    description:
      "All AI is an intelligent agent built to take the friction out of home maintenance. It keeps tenants, property teams, and vendors in sync automatically — triaging requests, sharing updates, and driving resolutions so every stakeholder stays informed without the usual back-and-forth.",
    carouselLabel: "All AI agent capabilities",
    prevLabel: "Previous agent features",
    nextLabel: "Next agent features",
    cards: [
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
    ],
  },
  about: {
    eyebrow: "Our mission",
    title: "Built by People Who Felt the Friction",
    p1Before:
      "Great portfolios shouldn’t be held back by voicemails, spreadsheets, and “who’s covering the inbox today?” We started ",
    p1After:
      " after watching capable teams drown in coordination—not in strategy.",
    p2Before: "Our founders blend ",
    p2Emphasis: "real estate, technology, and operations",
    p2After:
      " so the product matches how maintenance really gets done on the ground: fast triage, clear ownership, and proof when the job is done.",
    spotlightAlt:
      "Property team collaborating on maintenance and tenant coordination",
    pillars: [
      {
        icon: "operator",
        title: "Operator-led product",
        body: "Built around portfolios, SLAs, and vendors—not a generic chat widget bolted onto your stack.",
      },
      {
        icon: "trust",
        title: "Trust in the open",
        body: "Tenants, managers, and vendors see the same timeline—accountability beats black-box automation.",
      },
      {
        icon: "scale",
        title: "Scale without chaos",
        body: "More doors shouldn’t mean more inbox anxiety—automation should absorb the noise, not add to it.",
      },
    ],
    meetTeam: "Meet the team",
    bookConversation: "Book a conversation",
  },
  team: {
    title: "Meet Our Team",
    members: [
      {
        name: "Ghassan Ghorayeb",
        role: "Co Founder",
        linkedin: "https://www.linkedin.com/in/ghassan-ghorayeb/",
        linkedinAriaLabel: "Ghassan Ghorayeb on LinkedIn",
        bio: [
          "Retinal Surgeon & Chief of Division",
          "Co-Founder of RBC, a multimillion-dollar commercial and medical real estate portfolio, driving development of advanced healthcare facilities",
          "MIT MBA; Published innovator applying AI to healthcare and property technology solutions",
        ],
        imageSrc: "/images/founders/ghassan.jpeg",
      },
      {
        name: "Nihal Bhujle",
        role: "Co Founder",
        linkedin: "https://www.linkedin.com/in/nihal-bhujle/",
        linkedinAriaLabel: "Nihal Bhujle on LinkedIn",
        bio: [
          "Led Digital Product Innovation at UBS and Gartner's CxO global advisory practice",
          "Co-founder of RBC, a multi-million dollar commercial and residential real estate portfolio, delivering an annualized return of 16% over the last decade to investors",
          "MIT MBA, BS Finance Wharton School, deep background in corporate finance advisory",
        ],
        imageSrc: "/images/founders/nihal.jpeg",
      },
      {
        name: "Omar Jacques Omran",
        role: "Co Founder",
        linkedin: "https://www.linkedin.com/in/omar-omran/",
        linkedinAriaLabel: "Omar Jacques Omran on LinkedIn",
        bio: [
          "Led Technology for 3 large public companies (Six Flags, Welbilt, Middleby, : $3B–10B) generating $500M in net profit increase",
          "Named 2024 Top Global Innovator",
          "MIT MBA; 1st prize winner largest global hackathon",
        ],
        imageSrc: "/images/founders/omar.jpeg",
      },
    ],
  },
  ctaBanner: {
    title: "Ready to Upgrade Your Maintenance Game?",
    bookDemo: "Book a Demo",
    chatWithAi: "Chat with All AI",
  },
  testimonials: {
    title: "How All AI Makes a Difference",
    leadBefore: "Real Stories of How ",
    leadAfter:
      " Is Transforming Property Management—From Seamless Maintenance to Happier Living Experiences.",
    items: [
      {
        quote:
          "All AI has made managing multiple rental units effortless. I get instant updates on maintenance requests, and repairs are handled before they affect tenant satisfaction.",
        who: "John Harris",
        meta: "Tenant, Brookside Residences",
      },
      {
        featured: true,
        quote:
          "Before All AI, reporting an issue meant endless calls and delays. Now, I just log it on the chat, and it’s fixed in no time. Living here feels stress-free.",
        who: "David Reynolds",
        meta: "Tenant, Brookside Residences",
      },
      {
        quote:
          "Before All AI, reporting an issue meant endless calls and delays. Now, I just log it on the app, and it’s fixed in no time. Living here feels stress-free.",
        who: "David Reynolds",
        meta: "Tenant, Brookside Residences",
      },
    ],
  },
  faq: {
    heading: "Frequently Asked Questions",
    filterAll: "All Questions",
    filterGeneral: "General",
    items: [
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
    ],
  },
  footer: {
    tagline:
      "Smart, AI-powered property maintenance from issue report to resolution.",
    quickLinksTitle: "Quick Links",
    legalTitle: "Legal & Policies",
    followTitle: "Follow",
    privacy: "Privacy Policy",
    terms: "Terms of Service",
    dataSecurity: "Data Security",
    socialX: "All AI on X",
    socialFacebook: "All AI on Facebook",
    socialInstagram: "All AI on Instagram",
    copyright: "© 2026 All AI. All rights reserved.",
    bottomTagline: "AI-native maintenance for modern portfolios.",
  },
};
