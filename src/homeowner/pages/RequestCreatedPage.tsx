import { Link } from "react-router-dom";
import { HOMEOWNER, REQUEST_TIMELINE } from "../data";
import { IconCheck, IconPhone } from "../icons";

const LEAK_IMG = "/images/v2/how-report-issue.jpg";

export default function RequestCreatedPage() {
  return (
    <div className="ho-request-created">
      <header className="ho-request-created__head">
        <span className="ho-request-created__check" aria-hidden>
          <IconCheck size={18} />
        </span>
        <h1>Request created</h1>
        <p>Maya has created your maintenance request.</p>
      </header>

      <article className="ho-request-card">
        <div className="ho-request-card__main">
          <div>
            <div className="ho-request-card__title-row">
              <h2>Kitchen sink is leaking</h2>
              <span className="ho-badge ho-badge--amber">New</span>
            </div>
            <p className="ho-request-card__addr">{HOMEOWNER.address}</p>
            <p className="ho-request-card__time">Created on May 22, 2024 at 9:05 AM</p>
          </div>
          <img src={LEAK_IMG} alt="Kitchen sink plumbing" />
        </div>
      </article>

      <section className="ho-timeline-panel" aria-labelledby="timeline-heading">
        <h2 id="timeline-heading">What happens next?</h2>
        <ol className="ho-timeline">
          {REQUEST_TIMELINE.map((step, i) => (
            <li
              key={step.id}
              className={`ho-timeline__item ho-timeline__item--${step.state}`}
            >
              <div className="ho-timeline__marker" aria-hidden>
                {step.state === "done" ? <IconCheck size={12} /> : null}
              </div>
              {i < REQUEST_TIMELINE.length - 1 ? (
                <div className="ho-timeline__line" aria-hidden />
              ) : null}
              <div className="ho-timeline__body">
                <div className="ho-timeline__row">
                  <h3>{step.title}</h3>
                  {step.time ? <time>{step.time}</time> : null}
                </div>
                <p>{step.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <div className="ho-request-created__actions">
        <button type="button" className="ho-btn ho-btn--primary ho-btn--block">
          View request details
        </button>
        <Link to="/app" className="ho-btn ho-btn--outline ho-btn--block">
          Back to home
        </Link>
      </div>

      <aside className="ho-help-card">
        <p>Need immediate help?</p>
        <a href="tel:+18001234567" className="ho-help-card__phone">
          <IconPhone size={16} />
          Call (800) 123-4567
        </a>
      </aside>
    </div>
  );
}
