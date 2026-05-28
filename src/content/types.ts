export interface LandingCopy {
  site: { brandName: string; companyShort: string };
  nav: {
    howItWorks: string;
    benefits: string;
    contact: string;
    pricing: string;
    login: string;
    getStarted: string;
  };
  hero: {
    headline: string;
    subheadline: string;
    cta: string;
    ctaHint: string;
    pressLinks: { label: string; href: string }[];
  };
  howItWorks: {
    title: string;
    prevLabel: string;
    nextLabel: string;
    playVideoLabel: string;
    cards: { step: string; title: string; body: string; videoSrc?: string }[];
  };
  partners: {
    title: string;
    logos: { name: string }[];
  };
  testimonials: {
    items: { quote: string; name: string; role: string }[];
  };
  stats: { value: string; label: string; icon: string }[];
  finalCta: {
    title: string;
    body: string;
    cardTitle: string;
    cardSubtitle: string;
    button: string;
  };
  maintenanceQueue: {
    eyebrow: string;
    title: string;
    body: string;
    prefix: string;
    tasks: string[];
  };
  features: {
    eyebrow: string;
    title: string;
    body: string;
    imageAlt: string;
  }[];
  autopilot: {
    eyebrow: string;
    title: string;
    body: string;
  };
  benefits: {
    eyebrow: string;
    title: string;
    items: { title: string; body: string }[];
  };
  platform: {
    eyebrow: string;
    title: string;
    body: string;
    pillars: { title: string; body: string }[];
  };
  trust: {
    aligned: { title: string; body: string; cta: string };
    privacy: { title: string; body: string; cta: string };
  };
  faq: { q: string; a: string }[];
  contact: {
    eyebrow: string;
    title: string;
    body: string;
    imageAlt: string;
    highlight: { value: string; label: string };
    teamAvatars: string[];
    teamNote: string;
    demoPrompt: string;
    demoLink: string;
    form: {
      nameLabel: string;
      namePlaceholder: string;
      emailLabel: string;
      emailPlaceholder: string;
      companyLabel: string;
      companyPlaceholder: string;
      messageLabel: string;
      messagePlaceholder: string;
      submit: string;
      successTitle: string;
      successNote: string;
      sendAnother: string;
    };
    channels: {
      title: string;
      items: {
        icon: "mail" | "phone" | "calendar";
        label: string;
        value: string;
        href: string;
      }[];
    };
  };
  footer: {
    tagline: string;
    productLinks: string[];
    companyLinks: string[];
    copyright: string;
  };
}
