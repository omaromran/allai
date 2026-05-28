import { useEffect, useState, type CSSProperties } from "react";

const CATEGORIES = ["Plumbing", "HVAC", "Electrical", "Inspections", "Vendors", "Emergencies"];

const CYCLE_MS = 2600;

function shortLabel(task: string): string {
  const trimmed = task.replace(/^the /, "");
  return trimmed.length > 24 ? `${trimmed.slice(0, 22)}…` : trimmed;
}

export function MaintenanceShowcase({
  prefix,
  tasks,
}: {
  prefix: string;
  tasks: string[];
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState<number | null>(null);

  useEffect(() => {
    if (tasks.length < 2) return;

    const id = window.setInterval(() => {
      setActiveIndex((i) => {
        setPrevIndex(i);
        return (i + 1) % tasks.length;
      });
    }, CYCLE_MS);

    return () => window.clearInterval(id);
  }, [tasks.length]);

  useEffect(() => {
    if (prevIndex === null) return;
    const id = window.setTimeout(() => setPrevIndex(null), 520);
    return () => window.clearTimeout(id);
  }, [prevIndex, activeIndex]);

  const activeTask = tasks[activeIndex] ?? tasks[0];

  return (
    <div className="casa-capability" aria-hidden>
      <div className="casa-capability__panel">
        <div className="casa-capability__topbar">
          <span className="casa-capability__live">
            <span className="casa-capability__live-dot" />
            Live across your portfolio
          </span>
        </div>

        <div className="casa-capability__categories">
          {CATEGORIES.map((label) => (
            <span key={label} className="casa-capability__category">
              {label}
            </span>
          ))}
        </div>

        <div className="casa-capability__hero">
          <p className="casa-capability__prefix">{prefix}</p>
          <div className="casa-capability__spotlight" aria-live="polite">
            {prevIndex !== null ? (
              <span className="casa-capability__spotlight-line casa-capability__spotlight-line--exit">
                {tasks[prevIndex]}
              </span>
            ) : null}
            <span className="casa-capability__spotlight-line casa-capability__spotlight-line--active">
              {activeTask}
            </span>
          </div>
        </div>

        <div className="casa-capability__chips">
          {tasks.map((task, i) => {
            const isActive = i === activeIndex;
            const isDone = i < activeIndex;

            return (
              <span
                key={task}
                className={`casa-capability__chip${
                  isActive ? " casa-capability__chip--lit" : ""
                }${isDone ? " casa-capability__chip--done" : ""}`}
                style={{ "--chip-i": i } as CSSProperties}
              >
                {shortLabel(task)}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
}
