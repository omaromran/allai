export type RoleCardIconId =
  | "homeOwner"
  | "landlord"
  | "tenant"
  | "contractor";

export type HubFeatureIconId = "intake" | "routing" | "evidence" | "portfolio";

export type AboutPillarIconId = "operator" | "trust" | "scale";

export interface LandingCopy {
  site: {
    brandName: string;
    companyShort: string;
  };
  nav: {
    home: string;
    howItWorks: string;
    features: string;
    about: string;
    contact: string;
  };
  header: {
    requestDemo: string;
    getStarted: string;
    signIn: string;
  };
  hero: {
    line1: string;
    accentPhrase: string;
    accentAfter: string;
    linePowered: string;
    tagline: string;
    getStarted: string;
    signIn: string;
  };
  clients: {
    title: string;
    marqueeAriaLabel: string;
    logos: { src: string; name: string }[];
  };
  /** Centered statement below the logo marquee (light band + gradient lead-in). */
  valueProposition: {
    gradientText: string;
    line1Suffix: string;
    line2: string;
    line3: string;
    line4: string;
  };
  builtForEveryone: {
    title: string;
    subtitle: string;
    tagline: string;
    popularLabel: string;
    cards: {
      icon: RoleCardIconId;
      title: string;
      description: string;
      popular?: boolean;
      features: string[];
    }[];
  };
  coordination: {
    title: string;
    lead: string;
    items: { step: string; title: string; body: string }[];
  };
  hub: {
    eyebrow: string;
    title: string;
    lead: string;
    diagramAlt: string;
    features: {
      mod: "hub-feature--tl" | "hub-feature--bl" | "hub-feature--tr" | "hub-feature--br";
      icon: HubFeatureIconId;
      title: string;
      body: string;
    }[];
  };
  video: {
    title: string;
    description: string;
    playLabel: string;
    seeDemo: string;
  };
  gpt: {
    title: string;
    description: string;
    carouselLabel: string;
    prevLabel: string;
    nextLabel: string;
    cards: { user: string; ai: string; title: string; desc: string }[];
  };
  about: {
    eyebrow: string;
    title: string;
    p1Before: string;
    p1After: string;
    p2Before: string;
    p2Emphasis: string;
    p2After: string;
    spotlightAlt: string;
    pillars: {
      icon: AboutPillarIconId;
      title: string;
      body: string;
    }[];
    meetTeam: string;
    bookConversation: string;
  };
  team: {
    title: string;
    members: {
      name: string;
      role: string;
      linkedin: string;
      linkedinAriaLabel: string;
      bio: string[];
      imageSrc: string;
    }[];
  };
  ctaBanner: {
    title: string;
    bookDemo: string;
    chatWithAi: string;
  };
  testimonials: {
    title: string;
    leadBefore: string;
    leadAfter: string;
    items: {
      quote: string;
      who: string;
      meta: string;
      featured?: boolean;
    }[];
  };
  faq: {
    heading: string;
    filterAll: string;
    filterGeneral: string;
    items: { q: string; a: string }[];
  };
  footer: {
    tagline: string;
    quickLinksTitle: string;
    legalTitle: string;
    followTitle: string;
    privacy: string;
    terms: string;
    dataSecurity: string;
    socialX: string;
    socialFacebook: string;
    socialInstagram: string;
    copyright: string;
    bottomTagline: string;
  };
}
