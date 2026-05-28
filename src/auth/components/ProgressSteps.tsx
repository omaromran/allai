import type { SignUpStep } from "../types";

const STEPS: { key: SignUpStep; label: string }[] = [
  { key: "info", label: "Info" },
  { key: "verify", label: "Verify" },
  { key: "property", label: "Property" },
];

const CONTRACTOR_STEPS: { key: SignUpStep; label: string }[] = [
  { key: "info", label: "Info" },
  { key: "verify", label: "Verify" },
  { key: "business", label: "Business" },
];

export function ProgressSteps({
  current,
  contractor = false,
}: {
  current: SignUpStep;
  contractor?: boolean;
}) {
  const steps = contractor ? CONTRACTOR_STEPS : STEPS;
  const currentIndex = steps.findIndex((s) => s.key === current);

  return (
    <ol className="auth-progress" aria-label="Sign up progress">
      {steps.map((step, i) => {
        const done = i < currentIndex;
        const active = i === currentIndex;
        return (
          <li
            key={step.key}
            className={`auth-progress__step${active ? " auth-progress__step--active" : ""}${done ? " auth-progress__step--done" : ""}`}
            aria-current={active ? "step" : undefined}
          >
            <span className="auth-progress__dot">{done ? "✓" : i + 1}</span>
            <span className="auth-progress__label">{step.label}</span>
          </li>
        );
      })}
    </ol>
  );
}
