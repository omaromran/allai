export const PRICING_PAGE = {
  eyebrow: "Pricing",
  title: "Plans that scale with your portfolio",
  lead: "Transparent pricing for owners, operators, and managers—no surprise vendor markups. Start free, upgrade when you're ready.",
  tiers: [
    {
      name: "Starter",
      price: "Free",
      period: "for residents & small owners",
      description: "Self-serve triage with Maya, basic request tracking, and resident messaging.",
      features: [
        "AI triage with Maya",
        "Photo & video intake",
        "Request status updates",
        "Email support",
      ],
      cta: "Start now, for free",
      highlighted: false,
    },
    {
      name: "Portfolio",
      price: "Custom",
      period: "per building / month",
      description: "For growing multifamily and STR operators who need coordination at scale.",
      features: [
        "Everything in Starter",
        "Vendor routing & scheduling",
        "PMS integrations",
        "Portfolio analytics",
        "Priority support",
      ],
      cta: "Talk to sales",
      highlighted: true,
    },
    {
      name: "Enterprise",
      price: "Let's talk",
      period: "institutional & REIT",
      description: "Custom SLAs, security reviews, and dedicated success for large portfolios.",
      features: [
        "Everything in Portfolio",
        "SSO & advanced permissions",
        "Custom integrations",
        "Dedicated CSM",
        "On-site onboarding",
      ],
      cta: "Book a demo",
      highlighted: false,
    },
  ],
  note: "All plans include encrypted data, role-based access, and audit-friendly request history.",
};

export const COMPANY_PAGE = {
  eyebrow: "Company",
  title: "AI-native maintenance for modern property",
  lead: "Allai connects residents, owners, and contractors in one flow—from first report to verified completion.",
  stats: [
    { value: "3×", label: "Faster time to first response" },
    { value: "40%", label: "Less coordinator back-and-forth" },
    { value: "24/7", label: "Maya triage coverage" },
    { value: "1", label: "Platform across your stack" },
  ],
  mission: {
    title: "Our mission",
    body: "Property maintenance shouldn't depend on whoever answers the phone. We built Allai so every issue is understood, routed, and resolved—with AI doing the heavy lifting and humans staying in control.",
  },
  vision: {
    title: "Where we're headed",
    body: "A single command center that speaks your PMS, your vendors, and your residents—finding the best match across property, maintenance, and parts platforms automatically.",
  },
  values: [
    { title: "Resident-first", body: "Clear updates and fewer runaround calls." },
    { title: "Operator clarity", body: "One queue, real status, no spreadsheet chasing." },
    { title: "Trusted vendors", body: "Vetted pros, fair routing, documented work." },
    { title: "Security by design", body: "Enterprise-ready permissions and data handling." },
  ],
  foundersTitle: "Founders",
  founders: [
    { name: "Omar Omran", role: "Co-founder & CEO", image: "/images/founders/omar.jpeg" },
    { name: "Ghassan", role: "Co-founder", image: "/images/founders/ghassan.jpeg" },
    { name: "Nihal", role: "Co-founder", image: "/images/founders/nihal.jpeg" },
  ],
  careers: {
    title: "Careers",
    body: "We're hiring across engineering, design, and customer success. If you care about housing operations and great product craft, we'd love to hear from you.",
    cta: "View open roles",
    email: "careers@allai.com",
  },
  privacy: {
    title: "Privacy",
    body: "We collect only what's needed to run maintenance workflows. Data is encrypted in transit and at rest. We don't sell resident data. Contact us for a DPA or security questionnaire.",
  },
};

export const INTEGRATIONS_PAGE = {
  eyebrow: "Integrations",
  title: "One brain across your entire stack",
  lead: "Allai connects property platforms, maintenance tools, and parts suppliers—then finds the best match for every job, end to end.",
  hubLabel: "Allai routes every request",
  categories: [
    {
      id: "property",
      title: "Property & PMS",
      subtitle: "Sync units, residents, and work orders from the systems you already use.",
      platforms: ["AppFolio", "Buildium", "Yardi", "Rent Manager", "Entrata"],
      image: "/images/v2/role-owners.jpg",
    },
    {
      id: "maintenance",
      title: "Maintenance & field service",
      subtitle: "Dispatch vetted pros and keep Jobber-style workflows in sync.",
      platforms: ["Jobber", "ServiceTitan", "Housecall Pro", "FieldEdge"],
      image: "/images/v2/how-work-done.jpg",
    },
    {
      id: "parts",
      title: "Parts & supplies",
      subtitle: "Source the right materials fast—from big-box to specialty suppliers.",
      platforms: ["Home Depot", "Lowe's", "Ferguson", "Grainger"],
      image: "/images/v2/how-report-issue.jpg",
    },
  ],
  flow: [
    { step: "01", title: "Issue reported", body: "Resident or staff opens a request; Maya triages with photos and video." },
    { step: "02", title: "Stack-aware routing", body: "We read your PMS, vendor roster, and parts catalog to shortlist the best fit." },
    { step: "03", title: "Coordinated execution", body: "Schedule, parts, and status updates stay in sync until the job is done." },
  ],
  cta: {
    title: "Don't see your platform?",
    body: "We're adding integrations every month. Tell us what you use—we'll prioritize it.",
    button: "Request an integration",
  },
};
