/** Footer & nav hrefs for marketing pages */
export const MARKETING_ROUTES = {
  home: "/",
  how: "/#how",
  benefits: "/#benefits",
  contact: "/#contact",
  pricing: "/pricing",
  integrations: "/integrations",
  about: "/about",
  signUp: "/sign-up",
  signIn: "/sign-in",
} as const;

const PRODUCT_LINKS: Record<string, string> = {
  "How it works": MARKETING_ROUTES.how,
  Benefits: MARKETING_ROUTES.benefits,
  Pricing: MARKETING_ROUTES.pricing,
  Integrations: MARKETING_ROUTES.integrations,
  Security: `${MARKETING_ROUTES.about}#security`,
};

const COMPANY_LINKS: Record<string, string> = {
  About: MARKETING_ROUTES.about,
  Careers: `${MARKETING_ROUTES.about}#careers`,
  Contact: MARKETING_ROUTES.contact,
  Privacy: `${MARKETING_ROUTES.about}#privacy`,
};

export function footerProductHref(label: string): string {
  return PRODUCT_LINKS[label] ?? MARKETING_ROUTES.home;
}

export function footerCompanyHref(label: string): string {
  return COMPANY_LINKS[label] ?? MARKETING_ROUTES.home;
}
