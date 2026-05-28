import type { UserRole } from "./types";

export const AUTH_IMAGES = {
  roleHero: "/images/auth/role-hero-house.jpg",
  property: "/images/auth/property-living-room.jpg",
  contractor: "/images/auth/contractor-tools.jpg",
  cards: {
    homeowner: "/images/auth/card-homeowner.jpg",
    landlord: "/images/auth/card-landlord.jpg",
    tenant: "/images/auth/card-tenant.jpg",
    contractor: "/images/auth/card-contractor.jpg",
  },
} as const;

export const ROLE_META: Record<
  UserRole,
  { title: string; description: string; badge?: string }
> = {
  homeowner: {
    title: "Homeowner",
    description: "Maintain your home without the hassle.",
    badge: "Most common",
  },
  landlord: {
    title: "Landlord",
    description: "Manage properties, tenants, and maintenance.",
  },
  tenant: {
    title: "Tenant",
    description: "Report issues and track repairs in one place.",
  },
  contractor: {
    title: "Contractor",
    description: "Get matched to verified maintenance jobs.",
  },
};

export const WELCOME_BENEFITS = [
  { icon: "detect", label: "Smart issue detection" },
  { icon: "match", label: "Right pros instantly" },
  { icon: "track", label: "Track everything" },
] as const;
