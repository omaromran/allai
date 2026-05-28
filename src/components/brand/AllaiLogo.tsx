import { Link } from "react-router-dom";
import { AllaiLogoIcon, BRAND, type AllaiLogoLayout, type AllaiLogoVariant } from "./AllaiLogoIcon";

export type AllaiLogoProps = {
  variant?: AllaiLogoVariant;
  layout?: AllaiLogoLayout;
  href?: string;
  className?: string;
  iconSize?: number;
};

export function AllaiLogo({
  variant = "color",
  layout = "full",
  href = "/",
  className = "",
  iconSize = 28,
}: AllaiLogoProps) {
  const wordmarkColor =
    variant === "reversed" ? BRAND.reversed : BRAND.wordmark;

  const content =
    layout === "app-icon" ? (
      <span className="allai-logo__app-icon" aria-hidden="true">
        <AllaiLogoIcon variant="reversed" size={iconSize} />
      </span>
    ) : layout === "icon" ? (
      <AllaiLogoIcon variant={variant} size={iconSize} />
    ) : (
      <>
        <AllaiLogoIcon variant={variant} size={iconSize} />
        <span className="allai-logo__wordmark" style={{ color: wordmarkColor }}>
          Allai
        </span>
      </>
    );

  const label = layout === "icon" || layout === "app-icon" ? "Allai" : undefined;

  return (
    <Link
      to={href}
      className={`allai-logo allai-logo--${variant} allai-logo--${layout} ${className}`.trim()}
      aria-label={label}
    >
      {content}
    </Link>
  );
}

/** Static logo mark without navigation (e.g. footer). */
export function AllaiLogoMark({
  variant = "color",
  layout = "full",
  className = "",
  iconSize = 28,
}: Omit<AllaiLogoProps, "href">) {
  const wordmarkColor =
    variant === "reversed" ? BRAND.reversed : BRAND.wordmark;

  return (
    <span
      className={`allai-logo allai-logo--${variant} allai-logo--${layout} ${className}`.trim()}
    >
      {layout === "app-icon" ? (
        <span className="allai-logo__app-icon" aria-hidden="true">
          <AllaiLogoIcon variant="reversed" size={iconSize} />
        </span>
      ) : layout === "icon" ? (
        <AllaiLogoIcon variant={variant} size={iconSize} />
      ) : (
        <>
          <AllaiLogoIcon variant={variant} size={iconSize} />
          <span className="allai-logo__wordmark" style={{ color: wordmarkColor }}>
            Allai
          </span>
        </>
      )}
    </span>
  );
}
