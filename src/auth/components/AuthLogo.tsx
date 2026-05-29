import { AllaiLogo } from "../../components/brand/AllaiLogo";
import type { AllaiLogoVariant } from "../../components/brand/AllaiLogoIcon";

export function AuthLogo({ variant = "color" }: { variant?: AllaiLogoVariant }) {
  return <AllaiLogo variant={variant} className="auth-logo" />;
}
