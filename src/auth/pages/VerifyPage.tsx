import { useEffect, useRef, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { AuthLogo } from "../components/AuthLogo";
import { ProgressSteps } from "../components/ProgressSteps";
import type { UserRole } from "../types";

export default function VerifyPage() {
  const navigate = useNavigate();
  const [params] = useSearchParams();
  const role = (params.get("role") as UserRole) || "homeowner";
  const contractor = role === "contractor";
  const [seconds, setSeconds] = useState(29);
  const inputsRef = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    if (seconds <= 0) return;
    const t = window.setTimeout(() => setSeconds((s) => s - 1), 1000);
    return () => clearTimeout(t);
  }, [seconds]);

  return (
    <div className="auth-page auth-page--form">
      <header className="auth-topbar auth-topbar--center">
        <AuthLogo />
      </header>

      <div className="auth-form-shell auth-form-shell--narrow">
        <ProgressSteps current="verify" contractor={contractor} />
        <h1>Verify your account</h1>
        <p className="auth-form-lead">
          Enter the 4-digit code we sent to your phone.
        </p>

        <form
          className="auth-form"
          onSubmit={(e) => {
            e.preventDefault();
            navigate(
              contractor
                ? `/sign-up/business?role=${role}`
                : `/sign-up/property?role=${role}`,
            );
          }}
        >
          <div className="auth-otp" role="group" aria-label="Verification code">
            {[0, 1, 2, 3].map((i) => (
              <input
                key={i}
                ref={(el) => {
                  inputsRef.current[i] = el;
                }}
                className="auth-otp__digit"
                inputMode="numeric"
                maxLength={1}
                aria-label={`Digit ${i + 1}`}
                onChange={(e) => {
                  if (e.target.value && i < 3) {
                    inputsRef.current[i + 1]?.focus();
                  }
                }}
              />
            ))}
          </div>

          <button type="submit" className="auth-btn auth-btn--primary auth-btn--block auth-btn--lg">
            Verify & continue
          </button>
        </form>

        <p className="auth-form-footer">
          {seconds > 0 ? (
            <>
              Resend code in{" "}
              <span className="auth-timer">
                00:{String(seconds).padStart(2, "0")}
              </span>
            </>
          ) : (
            <button
              type="button"
              className="auth-link-btn"
              onClick={() => setSeconds(29)}
            >
              Resend code
            </button>
          )}
        </p>
      </div>
    </div>
  );
}
