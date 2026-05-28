import { useCallback, useState } from "react";
import { HowCardMedia } from "../../components/HowCardMedia";
import { useLandingContent } from "../../content/LandingContentContext";

const POSTERS = [
  "/images/v2/how-report-issue.jpg",
  "/images/v2/how-maya-works.jpg",
  "/images/v2/how-work-done.jpg",
];

const VIDEOS = [
  "/videos/how/step-01-report.mp4",
  "/videos/how/step-02-maya.mp4",
  "/videos/how/step-03-done.mp4",
];

function Chevron({ direction }: { direction: "prev" | "next" }) {
  return (
    <svg viewBox="0 0 24 24" width={18} height={18} aria-hidden="true">
      <path
        fill="currentColor"
        d={direction === "prev" ? "M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" : "M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z"}
      />
    </svg>
  );
}

export function HowItWorksCarousel() {
  const { content } = useLandingContent();
  const cards = content.howItWorks.cards;
  const [active, setActive] = useState(0);

  const go = useCallback(
    (index: number) => {
      setActive((index + cards.length) % cards.length);
    },
    [cards.length],
  );

  const advanceAfterVideo = useCallback(() => {
    go(active + 1);
  }, [active, go]);

  return (
    <section id="how" className="how-it-works">
      <div className="container">
        <h2>{content.howItWorks.title}</h2>
        <div className="how-carousel">
          <button
            type="button"
            className="how-nav how-nav--prev"
            aria-label={content.howItWorks.prevLabel}
            onClick={() => go(active - 1)}
          >
            <Chevron direction="prev" />
          </button>

          <div className="how-track">
            {cards.map((card, i) => {
              const isActive = i === active;
              return (
                <article
                  key={card.step}
                  className={`how-card${isActive ? " how-card--active" : ""}`}
                  onClick={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      setActive(i);
                    }
                  }}
                  tabIndex={0}
                  role="button"
                  aria-pressed={isActive}
                  aria-label={`${card.step} ${card.title}`}
                >
                  <HowCardMedia
                    active={isActive}
                    poster={POSTERS[i] ?? POSTERS[0]}
                    src={card.videoSrc ?? VIDEOS[i] ?? VIDEOS[0]}
                    playLabel={content.howItWorks.playVideoLabel}
                    onEnded={isActive ? advanceAfterVideo : undefined}
                  />
                  <div className="how-card__shade" aria-hidden />
                  <div className="how-card__copy">
                    <span className="how-card__step">{card.step}</span>
                    <h3>{card.title}</h3>
                    <p>{card.body}</p>
                  </div>
                </article>
              );
            })}
          </div>

          <button
            type="button"
            className="how-nav how-nav--next"
            aria-label={content.howItWorks.nextLabel}
            onClick={() => go(active + 1)}
          >
            <Chevron direction="next" />
          </button>
        </div>

        <div className="how-dots" role="tablist" aria-label={content.howItWorks.title}>
          {cards.map((card, i) => (
            <button
              key={card.step}
              type="button"
              role="tab"
              className={`how-dots__btn${i === active ? " how-dots__btn--active" : ""}`}
              aria-selected={i === active}
              aria-label={`${card.step} ${card.title}`}
              onClick={() => setActive(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
