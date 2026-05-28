import { useLandingContent } from "../../content/LandingContentContext";

export function PartnersSection() {
  const { content } = useLandingContent();

  return (
    <section className="partners" aria-label={content.partners.title}>
      <div className="container partners-inner">
        <p>{content.partners.title}</p>
        <ul className="partners-logos">
          {content.partners.logos.map((logo) => (
            <li key={logo.name}>{logo.name}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
