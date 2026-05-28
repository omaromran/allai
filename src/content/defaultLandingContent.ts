import type { LandingCopy } from "./types";

export const DEFAULT_LANDING_COPY: LandingCopy = {
  site: { brandName: "Allai", companyShort: "Allai" },
  nav: {
    howItWorks: "How it works",
    benefits: "Benefits",
    contact: "Contact",
    pricing: "Pricing",
    login: "Log in",
    getStarted: "Get started",
  },
  hero: {
    headline: "Maintenance, on autopilot.",
    subheadline:
      "One platform to make property maintenance effortless—for owners, residents, and contractors. Powered by AI that understands every issue from report to resolution.",
    cta: "Start now, for free",
    ctaHint: "Currently serving multifamily, STR, and institutional portfolios",
    pressLinks: [
      { label: "As featured in →", href: "#press" },
      { label: "A letter from our founders →", href: "#about" },
    ],
  },
  partners: {
    title: "Trusted by property owners, managers, and service professionals",
    logos: [
      { name: "buildium" },
      { name: "appfolio" },
      { name: "RentManager" },
      { name: "YARDI" },
      { name: "Property Warehouse" },
    ],
  },
  howItWorks: {
    title: "How Allai works",
    prevLabel: "Previous step",
    nextLabel: "Next step",
    playVideoLabel: "Play step video",
    cards: [
      {
        step: "01",
        title: "Report in seconds",
        body: "Residents report issues in seconds with photos, voice, or text.",
        videoSrc: "/videos/how/step-01-report.mp4",
      },
      {
        step: "02",
        title: "Maya gets to work",
        body: "Allai diagnoses the issue, prioritizes it, and finds the right pro.",
        videoSrc: "/videos/how/step-02-maya.mp4",
      },
      {
        step: "03",
        title: "Work gets done",
        body: "Contractors are notified, work is completed, and everyone stays informed.",
        videoSrc: "/videos/how/step-03-done.mp4",
      },
    ],
  },
  maintenanceQueue: {
    eyebrow: "AI concierge + command center",
    title: "Your maintenance queue, handled.",
    body: "Allai gives your portfolio an AI layer to tackle everyday maintenance big and small—and give you your time, money, and sanity back.",
    prefix: "Allai handles",
    tasks: [
      "the leaky kitchen faucet",
      "HVAC not cooling",
      "scheduling the annual inspection",
      "dispatching a licensed plumber",
      "the broken smoke detector",
      "clearing the clogged drain",
      "vendor access coordination",
      "tracking open work orders",
      "approving repair quotes",
      "tenant follow-ups",
      "matching the right contractor",
      "elevator outage triage",
    ],
  },
  features: [
    {
      eyebrow: "AI concierge",
      title: "Expert triage, on call.",
      body: "Maya understands maintenance requests in natural language—prioritizes urgency, gathers photos, and routes work without your team lifting a finger.",
      imageAlt: "AI concierge coordinating maintenance",
    },
    {
      eyebrow: "Command center",
      title: "A full-service hub for your portfolio.",
      body: "Every request, vendor, and SLA in one place. Managers see live status; owners get proof of completion; contractors arrive with full context.",
      imageAlt: "Property maintenance command center dashboard",
    },
  ],
  autopilot: {
    eyebrow: "Autopilot",
    title: "Never think about maintenance again.",
    body: "Subscribe to care plans tailored to each property. Allai handles scheduling, vendors, and follow-up—so you avoid costly surprises down the road.",
  },
  benefits: {
    eyebrow: "More benefits",
    title: "And for the everyday operations.",
    items: [
      {
        title: "Resident requests",
        body: "Omni-channel intake—SMS, email, portal, or voice—with automatic triage and status updates.",
      },
      {
        title: "Vendor marketplace",
        body: "Match verified contractors to real jobs with photos, access notes, and SLA rules built in.",
      },
      {
        title: "Portfolio analytics",
        body: "Spot repeat issues, track spend, and protect NOI across every building you manage.",
      },
      {
        title: "Compliance & proof",
        body: "Timestamps, photos, and sign-off at every step—audit-ready without extra paperwork.",
      },
    ],
  },
  platform: {
    eyebrow: "Platform depth",
    title: "Enabled by a deep understanding of your properties.",
    body: "From unit history to vendor performance, Allai captures the details that matter—so every request starts with full context and resolves faster.",
    pillars: [
      {
        title: "Issue intelligence",
        body: "Category, urgency, and repeat patterns learned from every ticket across your portfolio.",
      },
      {
        title: "Vendor network",
        body: "Licensed trades matched by skill, geography, and availability—with ratings you can trust.",
      },
      {
        title: "Resident experience",
        body: "Proactive updates and clear timelines—so tenants feel heard without flooding your inbox.",
      },
      {
        title: "Owner reporting",
        body: "Spend, SLA compliance, and resolution time—rolled up the way executives actually want to see it.",
      },
    ],
  },
  testimonials: {
    items: [
      {
        quote:
          "Allai has completely transformed how we handle maintenance. Issues get resolved faster, tenants are happier, and we save hours every week.",
        name: "Jessica M.",
        role: "Property Manager",
      },
      {
        quote:
          "Our vendors show up with full context every time. We finally stopped playing phone tag between tenants, owners, and contractors.",
        name: "David R.",
        role: "Portfolio Owner",
      },
      {
        quote:
          "Maya handles the everyday follow-ups so my team can focus on the properties—not the ticket queue.",
        name: "Priya K.",
        role: "Regional Manager",
      },
    ],
  },
  stats: [
    { value: "43%", label: "faster issue resolution", icon: "speed" },
    { value: "28%", label: "reduction in maintenance costs", icon: "cost" },
    { value: "98%", label: "resident satisfaction", icon: "heart" },
    { value: "24/7", label: "AI concierge support", icon: "clock" },
  ],
  finalCta: {
    title: "Ready to simplify property maintenance?",
    body: "Join thousands of property professionals using Allai to save time, cut costs, and keep properties in top shape.",
    cardTitle: "Get started for free",
    cardSubtitle: "No credit card • Cancel anytime",
    button: "Start with Maya",
  },
  trust: {
    aligned: {
      title: "A business model aligned with you.",
      body: "No vendor kickbacks, no ads. We work for property owners and managers—not the highest bidder.",
      cta: "Learn more",
    },
    privacy: {
      title: "Your property data belongs to you.",
      body: "You trust us with operational data across your portfolio. We work to safeguard it every day.",
      cta: "Learn more",
    },
  },
  contact: {
    eyebrow: "Contact us",
    title: "Let's talk about your portfolio",
    body: "Tell us about your properties and maintenance workflow—we'll show you how Allai can run it on autopilot.",
    imageAlt: "Property manager reviewing maintenance with Allai",
    highlight: { value: "< 2 hrs", label: "avg. first response" },
    teamAvatars: ["OM", "NK", "GH"],
    teamNote: "Our team replies within one business day.",
    demoPrompt: "Prefer to explore on your own?",
    demoLink: "Start free",
    form: {
      nameLabel: "Name",
      namePlaceholder: "Jane Smith",
      emailLabel: "Work email",
      emailPlaceholder: "jane@propertyco.com",
      companyLabel: "Company",
      companyPlaceholder: "Your property group",
      messageLabel: "How can we help?",
      messagePlaceholder: "Portfolio size, current tools, and what you'd like Allai to handle…",
      submit: "Send message",
      successTitle: "Message received",
      successNote:
        "Thanks for reaching out. Someone from Allai will get back to you shortly.",
      sendAnother: "Send another message",
    },
    channels: {
      title: "Other ways to reach us",
      items: [
        {
          icon: "mail",
          label: "Email",
          value: "hello@allai.com",
          href: "mailto:hello@allai.com",
        },
        {
          icon: "phone",
          label: "Phone",
          value: "(555) 123-4567",
          href: "tel:+15551234567",
        },
        {
          icon: "calendar",
          label: "Book a demo",
          value: "30 min call",
          href: "/pricing",
        },
      ],
    },
  },
  faq: [
    {
      q: "What is Allai and who is it for?",
      a: "Allai is an AI-powered maintenance platform for property owners, managers, residents, and contractors—built to take every issue from report to resolution.",
    },
    {
      q: "What's included in the platform?",
      a: "AI triage, vendor routing, scheduling, resident updates, portfolio analytics, and autopilot care plans—customized to your properties and SLAs.",
    },
    {
      q: "How does pricing work?",
      a: "Plans scale with portfolio size and features. Book a demo and we'll map a package to your buildings—no surprise vendor markups.",
    },
    {
      q: "How is Allai different from a work order system?",
      a: "Traditional systems track tickets. Allai resolves them—AI handles triage, coordination, and follow-through so your team leads instead of chases.",
    },
  ],
  footer: {
    tagline: "AI-native maintenance for modern portfolios.",
    productLinks: ["How it works", "Benefits", "Pricing", "Integrations", "Security"],
    companyLinks: ["About", "Careers", "Contact", "Privacy"],
    copyright: "© 2026 Allai. All rights reserved.",
  },
};
