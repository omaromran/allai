import type { ReactNode } from "react";

type IconProps = { size?: number; className?: string };

function Icon({ size = 20, className, children }: IconProps & { children: ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

export function IconHome(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M4 10.5L12 4l8 6.5V19a1 1 0 01-1 1h-5v-6H10v6H5a1 1 0 01-1-1v-8.5z" />
    </Icon>
  );
}

export function IconRequests(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2" />
      <path d="M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
    </Icon>
  );
}

export function IconMessages(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7H8.5L5 21v-3.5A8.5 8.5 0 014.5 8a8.38 8.38 0 013.8-.9h.7a8.48 8.48 0 018.2 8.4z" />
    </Icon>
  );
}

export function IconProperties(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M3 21h18M5 21V9l7-5 7 5v12M9 21v-6h6v6" />
    </Icon>
  );
}

export function IconDocuments(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6z" />
      <path d="M14 2v6h6" />
    </Icon>
  );
}

export function IconFavorites(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
    </Icon>
  );
}

export function IconBell(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M15 17h5l-1.4-1.4A2 2 0 0118 14.2V11a6 6 0 10-12 0v3.2a2 2 0 01-.6 1.4L4 17h5" />
      <path d="M9 17v1a3 3 0 006 0v-1" />
    </Icon>
  );
}

export function IconProfile(props: IconProps) {
  return (
    <Icon {...props}>
      <circle cx="12" cy="8" r="4" />
      <path d="M4 20v-1a4 4 0 014-4h8a4 4 0 014 4v1" />
    </Icon>
  );
}

export function IconSettings(props: IconProps) {
  return (
    <Icon {...props}>
      <circle cx="12" cy="12" r="3" />
      <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
    </Icon>
  );
}

export function IconLogout(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4M16 17l5-5-5-5M21 12H9" />
    </Icon>
  );
}

export function IconArrowRight(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </Icon>
  );
}

export function IconPaperclip(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M21.44 11.05l-9.19 9.19a6 6 0 01-8.49-8.49l9.19-9.19a4 4 0 015.66 5.66l-9.2 9.19a2 2 0 01-2.83-2.83l8.49-8.48" />
    </Icon>
  );
}

export function IconMic(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M12 1a3 3 0 00-3 3v7a3 3 0 006 0V4a3 3 0 00-3-3z" />
      <path d="M19 10v1a7 7 0 01-14 0v-1M12 18v3M8 21h8" />
    </Icon>
  );
}

export function IconSend(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width={props.size ?? 18} height={props.size ?? 18} aria-hidden="true">
      <path fill="currentColor" d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
    </svg>
  );
}

export function IconMore(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width={props.size ?? 20} height={props.size ?? 20} aria-hidden="true">
      <circle cx="5" cy="12" r="1.5" fill="currentColor" />
      <circle cx="12" cy="12" r="1.5" fill="currentColor" />
      <circle cx="19" cy="12" r="1.5" fill="currentColor" />
    </svg>
  );
}

export function IconPhone(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
    </Icon>
  );
}

export function IconBook(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M4 19.5A2.5 2.5 0 016.5 17H20" />
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" />
    </Icon>
  );
}

export function IconSpark(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M12 2l1.2 4.2L17.5 7.5l-4.3 1.3L12 13l-1.2-4.2L6.5 7.5l4.3-1.3L12 2z" />
      <path d="M19 14l.6 2.1 2.1.6-2.1.6-.6 2.1-.6-2.1-2.1-.6 2.1-.6.6-2.1z" />
    </Icon>
  );
}

export function IconSearch(props: IconProps) {
  return (
    <Icon {...props}>
      <circle cx="11" cy="11" r="7" />
      <path d="M21 21l-4.35-4.35" />
    </Icon>
  );
}

export function IconDroplet(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M12 2.69l5.66 5.66a8 8 0 11-11.32 0L12 2.69z" />
    </Icon>
  );
}

export function IconWind(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M9.59 4.59A2 2 0 1111 8H2M12.59 19.41A2 2 0 1014 16H2M17.73 7.05A2.5 2.5 0 1119.5 12H2" />
    </Icon>
  );
}

export function IconGarage(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M3 9l9-6 9 6v11a1 1 0 01-1 1h-5v-6H9v6H4a1 1 0 01-1-1V9z" />
    </Icon>
  );
}

export function IconChevronRight(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M9 18l6-6-6-6" />
    </Icon>
  );
}

export function IconChevronLeft(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M15 18l-6-6 6-6" />
    </Icon>
  );
}

export function IconCheck(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M20 6L9 17l-5-5" />
    </Icon>
  );
}

export function IconPlus(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M12 5v14M5 12h14" />
    </Icon>
  );
}

export function IconPlay(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width={props.size ?? 16} height={props.size ?? 16} aria-hidden="true">
      <path fill="currentColor" d="M8 5v14l11-7z" />
    </svg>
  );
}

export const NAV_ICONS = {
  home: IconHome,
  requests: IconRequests,
  messages: IconMessages,
  properties: IconProperties,
  documents: IconDocuments,
  favorites: IconFavorites,
  bell: IconBell,
  profile: IconProfile,
  settings: IconSettings,
} as const;
