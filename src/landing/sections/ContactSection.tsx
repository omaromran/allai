import { useState, type FormEvent } from "react";
import { Link } from "react-router-dom";
import { useLandingContent } from "../../content/LandingContentContext";
import { SectionVisual } from "../SectionVisual";
import "./contact-section.css";

const CONTACT_IMAGE = "/images/v2/role-owners.jpg";

function ChannelIcon({ kind }: { kind: "mail" | "phone" | "calendar" }) {
  if (kind === "phone") {
    return (
      <svg viewBox="0 0 24 24" width={22} height={22} aria-hidden="true">
        <path
          fill="currentColor"
          d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C10.85 21 3 13.15 3 3a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.24 1.01l-2.2 2.2z"
        />
      </svg>
    );
  }
  if (kind === "calendar") {
    return (
      <svg viewBox="0 0 24 24" width={22} height={22} aria-hidden="true">
        <path
          fill="currentColor"
          d="M19 4h-1V2h-2v2H8V2H6v2H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V6a2 2 0 00-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2z"
        />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" width={22} height={22} aria-hidden="true">
      <path
        fill="currentColor"
        d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"
      />
    </svg>
  );
}

export function ContactSection() {
  const { content } = useLandingContent();
  const c = content.contact;
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="contact-section casa-section casa-section--beige">
      <div className="casa-container">
        <header className="contact-section__header">
          <p className="casa-eyebrow casa-eyebrow--center">{c.eyebrow}</p>
          <h2 className="casa-h2 casa-h2--center">{c.title}</h2>
          <p className="casa-lead casa-lead--center">{c.body}</p>
        </header>

        <div className="contact-section__grid">
          <div className="contact-section__visual">
            <div className="contact-section__photo-wrap">
              <SectionVisual
                src={CONTACT_IMAGE}
                alt={c.imageAlt}
                frame="cream"
                aspect="4-3"
                className="contact-section__photo"
              />
              <div className="contact-section__float contact-section__float--top" aria-hidden>
                <span className="contact-section__float-dot" />
                <div>
                  <strong>{c.highlight.value}</strong>
                  <span>{c.highlight.label}</span>
                </div>
              </div>
            </div>
            <div className="contact-section__team-card">
              <div className="contact-section__avatars">
                {c.teamAvatars.map((initial) => (
                  <span key={initial}>{initial}</span>
                ))}
              </div>
              <p>{c.teamNote}</p>
            </div>
          </div>

          <div className="contact-section__panel">
            {submitted ? (
              <div className="contact-section__success" role="status">
                <span className="contact-section__success-icon" aria-hidden>
                  ✓
                </span>
                <h3>{c.form.successTitle}</h3>
                <p>{c.form.successNote}</p>
                <button
                  type="button"
                  className="casa-btn casa-btn--dark"
                  onClick={() => setSubmitted(false)}
                >
                  {c.form.sendAnother}
                </button>
              </div>
            ) : (
              <form className="contact-form" onSubmit={onSubmit}>
                <div className="contact-form__row">
                  <label className="contact-form__field">
                    <span>{c.form.nameLabel}</span>
                    <input
                      type="text"
                      name="name"
                      required
                      autoComplete="name"
                      placeholder={c.form.namePlaceholder}
                    />
                  </label>
                  <label className="contact-form__field">
                    <span>{c.form.emailLabel}</span>
                    <input
                      type="email"
                      name="email"
                      required
                      autoComplete="email"
                      placeholder={c.form.emailPlaceholder}
                    />
                  </label>
                </div>
                <label className="contact-form__field">
                  <span>{c.form.companyLabel}</span>
                  <input
                    type="text"
                    name="company"
                    autoComplete="organization"
                    placeholder={c.form.companyPlaceholder}
                  />
                </label>
                <label className="contact-form__field">
                  <span>{c.form.messageLabel}</span>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    placeholder={c.form.messagePlaceholder}
                  />
                </label>
                <button type="submit" className="casa-btn casa-btn--dark contact-form__submit">
                  {c.form.submit}
                </button>
              </form>
            )}

            <div className="contact-channels">
              <p className="contact-channels__title">{c.channels.title}</p>
              <ul className="contact-channels__list">
                {c.channels.items.map((item) => (
                  <li key={item.label}>
                    <a href={item.href} className="contact-channel">
                      <span className="contact-channel__icon">
                        <ChannelIcon kind={item.icon} />
                      </span>
                      <span className="contact-channel__text">
                        <span className="contact-channel__label">{item.label}</span>
                        <span className="contact-channel__value">{item.value}</span>
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <p className="contact-section__demo">
              {c.demoPrompt}{" "}
              <Link to="/sign-up" className="casa-link casa-link--arrow">
                {c.demoLink}
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
