import { useState } from "react";
import { useLandingContent } from "../../content/LandingContentContext";

const TESTIMONIAL_IMG = "/images/v2/testimonial-living-room.jpg";
const AVATAR = "/images/v2/testimonial-avatar.jpg";

function StatIcon({ kind }: { kind: string }) {
  const paths: Record<string, string> = {
    speed: "M12 2a10 10 0 100 20 10 10 0 000-20zm1 11h4v-2h-3V7h-2v6z",
    cost: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z",
    heart: "M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z",
    clock: "M12 2a10 10 0 100 20 10 10 0 000-20zm1 11h4v-2h-3V7h-2v6z",
  };
  return (
    <svg viewBox="0 0 24 24" width={22} height={22} aria-hidden="true">
      <path fill="currentColor" d={paths[kind] ?? paths.speed} />
    </svg>
  );
}

export function TestimonialSection() {
  const { content } = useLandingContent();
  const items = content.testimonials.items;
  const [active, setActive] = useState(0);
  const item = items[active] ?? items[0];

  if (!item) return null;

  return (
    <>
      <section className="testimonial-block" aria-labelledby="testimonial-heading">
        <div className="testimonial-grid">
          <div className="testimonial-image">
            <img src={TESTIMONIAL_IMG} alt="" loading="lazy" />
          </div>
          <blockquote className="testimonial-quote">
            <div className="testimonial-quote__inner">
              <span className="quote-mark" aria-hidden>
                “
              </span>
              <p id="testimonial-heading">{item.quote}</p>
              <footer>
                <img className="testimonial-avatar" src={AVATAR} alt="" />
                <div>
                  <cite>{item.name}</cite>
                  <span>{item.role}</span>
                </div>
              </footer>
              {items.length > 1 ? (
                <div className="testimonial-dots" role="tablist" aria-label="Testimonials">
                  {items.map((t, i) => (
                    <button
                      key={t.name}
                      type="button"
                      role="tab"
                      className={`testimonial-dots__btn${i === active ? " testimonial-dots__btn--active" : ""}`}
                      aria-selected={i === active}
                      aria-label={`Testimonial from ${t.name}`}
                      onClick={() => setActive(i)}
                    />
                  ))}
                </div>
              ) : null}
            </div>
          </blockquote>
        </div>
      </section>

      <section className="stats-bar" aria-label="Allai impact statistics">
        <div className="container stats-grid">
          {content.stats.map((stat) => (
            <div key={stat.label} className="stat-item">
              <StatIcon kind={stat.icon} />
              <div>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
