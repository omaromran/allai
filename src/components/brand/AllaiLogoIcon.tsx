import { useId } from "react";

export type AllaiLogoVariant = "color" | "reversed" | "monochrome";
export type AllaiLogoLayout = "full" | "icon" | "app-icon";

export const BRAND = {
  green: "#10362B",
  wordmark: "#1C1C1C",
  reversed: "#FFFFFF",
} as const;

/** Triangle network mark — hollow rings at vertices, hub spokes, curved base (Figma 5:16). */
const MARK = {
  top: { x: 24, y: 8 },
  bl: { x: 7.5, y: 39 },
  br: { x: 40.5, y: 39 },
  hub: { x: 24, y: 28.7 },
  ringR: 3.6,
} as const;

function markPaths() {
  const { top, bl, br, hub } = MARK;
  return {
    outer: `M ${top.x} ${top.y} L ${bl.x} ${bl.y} Q 24 33.5 ${br.x} ${br.y} L ${top.x} ${top.y}`,
    spokes: [
      `M ${hub.x} ${hub.y} L ${top.x} ${top.y}`,
      `M ${hub.x} ${hub.y} L ${bl.x} ${bl.y}`,
      `M ${hub.x} ${hub.y} L ${br.x} ${br.y}`,
    ],
    rings: [top, bl, br] as const,
  };
}

export function AllaiLogoIcon({
  variant = "color",
  size = 28,
}: {
  variant?: AllaiLogoVariant;
  size?: number;
}) {
  const uid = useId().replace(/:/g, "");
  const paths = markPaths();
  const glass = variant === "reversed";
  const mono = variant === "monochrome";

  const stroke = mono ? BRAND.wordmark : glass ? "url(#glass-stroke-" + uid + ")" : BRAND.green;
  const strokeWidth = 2;
  const ringStroke = stroke;

  return (
    <svg
      viewBox="0 0 48 48"
      width={size}
      height={size}
      aria-hidden="true"
      className={`allai-logo__icon${glass ? " allai-logo__icon--glass" : ""}`}
    >
      <defs>
        {glass ? (
          <>
            <linearGradient id={`glass-stroke-${uid}`} x1="20%" y1="0%" x2="80%" y2="100%">
              <stop offset="0%" stopColor="rgba(255,255,255,0.98)" />
              <stop offset="55%" stopColor="rgba(255,255,255,0.72)" />
              <stop offset="100%" stopColor="rgba(255,255,255,0.52)" />
            </linearGradient>
            <filter id={`glass-soft-${uid}`} x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="1" stdDeviation="1.2" floodColor="rgba(255,255,255,0.35)" />
              <feDropShadow dx="0" dy="2" stdDeviation="2.5" floodColor="rgba(0,0,0,0.18)" />
            </filter>
          </>
        ) : null}
      </defs>

      <g
        fill="none"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        filter={glass ? `url(#glass-soft-${uid})` : undefined}
      >
        <path d={paths.outer} />
        {paths.spokes.map((d) => (
          <path key={d} d={d} />
        ))}
        {paths.rings.map(({ x, y }) => (
          <circle
            key={`${x}-${y}`}
            cx={x}
            cy={y}
            r={MARK.ringR}
            stroke={ringStroke}
            fill={glass ? "rgba(255,255,255,0.08)" : "none"}
          />
        ))}
        <circle
          cx={MARK.hub.x}
          cy={MARK.hub.y}
          r="1.35"
          fill={mono ? BRAND.wordmark : glass ? "rgba(255,255,255,0.85)" : BRAND.green}
          stroke="none"
        />
      </g>
    </svg>
  );
}
