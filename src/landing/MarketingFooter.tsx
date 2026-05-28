import { Link } from "react-router-dom";
import { useLandingContent } from "../content/LandingContentContext";
import { AllaiLogoMark } from "../components/brand/AllaiLogo";
import { footerCompanyHref, footerProductHref } from "./marketingLinks";

export function MarketingFooter() {
  const { content } = useLandingContent();

  return (
    <footer className="casa-footer">
      <div className="casa-container casa-footer__grid">
        <div>
          <AllaiLogoMark variant="reversed" />
          <p className="casa-footer__tagline">{content.footer.tagline}</p>
          <p className="casa-footer__copy">{content.footer.copyright}</p>
        </div>
        <nav aria-label="Product">
          {content.footer.productLinks.map((link) => (
            <Link key={link} to={footerProductHref(link)}>
              {link}
            </Link>
          ))}
        </nav>
        <nav aria-label="Company">
          {content.footer.companyLinks.map((link) => (
            <Link key={link} to={footerCompanyHref(link)}>
              {link}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
