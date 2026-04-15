import type {
  AboutPillarIconId,
  HubFeatureIconId,
  RoleCardIconId,
} from "./content/types";

export function HubFeatureGlyph({ id }: { id: HubFeatureIconId }) {
  switch (id) {
    case "intake":
      return (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden>
          <path
            d="M4 6h16M4 12h10M4 18h7"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <circle cx="18" cy="6" r="2" fill="currentColor" />
        </svg>
      );
    case "routing":
      return (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden>
          <path
            d="M12 3v18M7 8l5-5 5 5M7 16l5 5 5-5"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "evidence":
      return (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden>
          <path
            d="M9 12l2 2 4-4M5 8h4l2-3h6l2 3h4v10a2 2 0 01-2 2H7a2 2 0 01-2-2V8z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "portfolio":
      return (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden>
          <path
            d="M4 20V9l8-5 8 5v11M9 20v-6h6v6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    default:
      return null;
  }
}

export function AboutPillarGlyph({ id }: { id: AboutPillarIconId }) {
  switch (id) {
    case "operator":
      return (
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
      );
    case "trust":
      return (
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
      );
    case "scale":
      return (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden>
          <path
            d="M3 3v18h18M7 16l4-4 4 4 5-5"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    default:
      return null;
  }
}

export function RoleCardGlyph({ id }: { id: RoleCardIconId }) {
  switch (id) {
    case "homeOwner":
      return (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden>
          <path
            d="M3 10.5L12 4l9 6.5V20a1 1 0 01-1 1h-5v-6H9v6H4a1 1 0 01-1-1v-9.5z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "landlord":
      return (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden>
          <path
            d="M3 21V8l4-3 4 3v13M11 21V12h10v9"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9 17h2M9 13h2M15 17h2M15 14h2"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      );
    case "tenant":
      return (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden>
          <circle cx="12" cy="8" r="3.5" stroke="currentColor" strokeWidth="2" />
          <path
            d="M5 20v-1.5C5 15.8 8.13 14 12 14s7 1.8 7 4.5V20"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      );
    case "contractor":
      return (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden>
          <path
            d="M14.7 6.3a1 1 0 011.4 0l1 1a1 1 0 010 1.4l-8.2 8.2a3 3 0 11-4.24-4.24l8.2-8.2z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M11.3 17.7L6 22M15 11l2-2"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      );
    default:
      return null;
  }
}

