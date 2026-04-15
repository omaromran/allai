import { useCallback, useEffect, useRef, useState } from "react";
import { deepMerge } from "../content/deepMerge";
import { DEFAULT_LANDING_COPY } from "../content/defaultLandingContent";
import type { LandingCopy } from "../content/types";
import "./cms.css";

const STORAGE_KEY = "landing-cms-draft";

function humanizeKey(key: string): string {
  return key
    .replace(/([A-Z])/g, " $1")
    .replace(/^./, (s) => s.toUpperCase())
    .trim();
}

function AutoForm({
  value,
  onChange,
  depth = 0,
}: {
  value: unknown;
  onChange: (next: unknown) => void;
  depth?: number;
}) {
  if (typeof value === "string") {
    const rows = value.length > 140 ? 5 : 2;
    return (
      <textarea
        className="cms-field__input cms-field__textarea"
        rows={rows}
        value={value}
        spellCheck
        onChange={(e) => onChange(e.target.value)}
      />
    );
  }

  if (typeof value === "number" || typeof value === "boolean") {
    return (
      <input
        className="cms-field__input"
        type="text"
        value={String(value)}
        onChange={(e) => {
          const v = e.target.value;
          if (typeof value === "number") {
            const n = Number(v);
            onChange(Number.isFinite(n) ? n : 0);
          } else {
            onChange(v === "true");
          }
        }}
      />
    );
  }

  if (Array.isArray(value)) {
    return (
      <div
        className="cms-array"
        style={{ marginLeft: depth ? "0.75rem" : 0 }}
      >
        {value.map((item, i) => (
          <fieldset key={i} className="cms-fieldset">
            <legend className="cms-legend">Item {i + 1}</legend>
            <AutoForm
              value={item}
              depth={depth + 1}
              onChange={(next) => {
                const copy = [...value];
                copy[i] = next;
                onChange(copy);
              }}
            />
            <button
              type="button"
              className="cms-btn cms-btn--small cms-btn--ghost"
              onClick={() => onChange(value.filter((_, j) => j !== i))}
            >
              Remove item
            </button>
          </fieldset>
        ))}
        <button
          type="button"
          className="cms-btn cms-btn--small"
          onClick={() => {
            if (value.length === 0) {
              onChange([{}]);
              return;
            }
            const last = value[value.length - 1];
            onChange([...value, structuredClone(last)]);
          }}
        >
          Add (duplicate last shape)
        </button>
      </div>
    );
  }

  if (value && typeof value === "object") {
    return (
      <div
        className="cms-object"
        style={{ marginLeft: depth ? "0.75rem" : 0 }}
      >
        {Object.entries(value).map(([k, v]) => (
          <div key={k} className="cms-field">
            <label className="cms-field__label">{humanizeKey(k)}</label>
            <AutoForm
              value={v}
              depth={depth + 1}
              onChange={(next) =>
                onChange({ ...(value as Record<string, unknown>), [k]: next })
              }
            />
          </div>
        ))}
      </div>
    );
  }

  return <span className="cms-empty">—</span>;
}

function loadInitialDraft(): LandingCopy {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (raw) {
    try {
      return deepMerge(
        structuredClone(DEFAULT_LANDING_COPY),
        JSON.parse(raw),
      );
    } catch {
      /* fall through */
    }
  }
  return structuredClone(DEFAULT_LANDING_COPY);
}

export default function LandingCMS() {
  const [draft, setDraft] = useState<LandingCopy>(loadInitialDraft);
  const [mode, setMode] = useState<"visual" | "json">("visual");
  const [jsonText, setJsonText] = useState("");
  const [jsonError, setJsonError] = useState<string | null>(null);
  const [saveMessage, setSaveMessage] = useState<string | null>(null);
  const saveFeedbackTimerRef = useRef(0);

  useEffect(() => {
    return () => window.clearTimeout(saveFeedbackTimerRef.current);
  }, []);

  useEffect(() => {
    const t = window.setTimeout(() => {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(draft));
    }, 400);
    return () => window.clearTimeout(t);
  }, [draft]);

  const switchToJson = useCallback(() => {
    setJsonText(JSON.stringify(draft, null, 2));
    setJsonError(null);
    setMode("json");
  }, [draft]);

  const applyJson = useCallback(() => {
    try {
      const parsed: unknown = JSON.parse(jsonText);
      setDraft(deepMerge(structuredClone(DEFAULT_LANDING_COPY), parsed));
      setJsonError(null);
      setMode("visual");
    } catch (e) {
      setJsonError(e instanceof Error ? e.message : "Invalid JSON");
    }
  }, [jsonText]);

  const download = useCallback(() => {
    const blob = new Blob([JSON.stringify(draft, null, 2)], {
      type: "application/json",
    });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "landing-content.json";
    a.click();
    URL.revokeObjectURL(a.href);
  }, [draft]);

  const reset = useCallback(() => {
    localStorage.removeItem(STORAGE_KEY);
    setDraft(structuredClone(DEFAULT_LANDING_COPY));
    setJsonError(null);
    setMode("visual");
  }, []);

  const previewSite = useCallback(() => {
    sessionStorage.setItem("landing-content-preview", JSON.stringify(draft));
    window.location.href = "/?cmsPreview=1";
  }, [draft]);

  const importFile = useCallback((file: File | undefined) => {
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      try {
        const parsed: unknown = JSON.parse(String(reader.result));
        setDraft(deepMerge(structuredClone(DEFAULT_LANDING_COPY), parsed));
        setJsonError(null);
        setMode("visual");
      } catch {
        setJsonError("Could not parse that file as JSON.");
        setMode("json");
      }
    };
    reader.readAsText(file);
  }, []);

  const saveDraft = useCallback(() => {
    try {
      let toStore = draft;
      if (mode === "json") {
        const parsed: unknown = JSON.parse(jsonText);
        toStore = deepMerge(structuredClone(DEFAULT_LANDING_COPY), parsed);
        setDraft(toStore);
        setJsonError(null);
      }
      localStorage.setItem(STORAGE_KEY, JSON.stringify(toStore));
      setSaveMessage("Saved to this browser");
      window.clearTimeout(saveFeedbackTimerRef.current);
      saveFeedbackTimerRef.current = window.setTimeout(
        () => setSaveMessage(null),
        2800,
      );
    } catch (e) {
      if (mode === "json") {
        setJsonError(
          e instanceof Error ? e.message : "Fix JSON before saving.",
        );
        setSaveMessage("Not saved — invalid JSON");
      } else {
        setSaveMessage("Could not save (storage full or blocked)");
      }
      window.clearTimeout(saveFeedbackTimerRef.current);
      saveFeedbackTimerRef.current = window.setTimeout(
        () => setSaveMessage(null),
        4000,
      );
    }
  }, [draft, mode, jsonText]);

  return (
    <div className="cms">
      <header className="cms-header">
        <div className="cms-header__inner">
          <div>
            <h1 className="cms-title">Landing copy</h1>
            <p className="cms-lead">
              Edit any field. Use <strong>Save</strong> (or wait for autosave) to
              keep your draft in this browser. Download{" "}
              <code className="cms-code">landing-content.json</code> and place it
              in <code className="cms-code">public/</code> to ship changes.
              Use Preview to try the homepage with your draft (this tab only).
            </p>
          </div>
          <div className="cms-toolbar">
            <div className="cms-save-group">
              <button
                type="button"
                className="cms-btn cms-btn--primary"
                onClick={saveDraft}
              >
                Save
              </button>
              {saveMessage ? (
                <span
                  className="cms-save-feedback"
                  role="status"
                  aria-live="polite"
                >
                  {saveMessage}
                </span>
              ) : null}
            </div>
            <div className="cms-mode">
              <button
                type="button"
                className={`cms-btn ${mode === "visual" ? "cms-btn--active" : ""}`}
                onClick={() => setMode("visual")}
              >
                Visual
              </button>
              <button
                type="button"
                className={`cms-btn ${mode === "json" ? "cms-btn--active" : ""}`}
                onClick={switchToJson}
              >
                JSON
              </button>
            </div>
            <button type="button" className="cms-btn cms-btn--primary" onClick={previewSite}>
              Preview site
            </button>
            <button type="button" className="cms-btn" onClick={download}>
              Download JSON
            </button>
            <label className="cms-btn cms-btn--file">
              Import JSON
              <input
                type="file"
                accept="application/json,.json"
                className="cms-file-input"
                onChange={(e) => importFile(e.target.files?.[0])}
              />
            </label>
            <button type="button" className="cms-btn cms-btn--ghost" onClick={reset}>
              Reset defaults
            </button>
            <a className="cms-btn cms-btn--ghost" href="/">
              ← Homepage
            </a>
          </div>
        </div>
      </header>

      <main className="cms-main">
        {mode === "visual" ? (
          <AutoForm value={draft} onChange={(v) => setDraft(v as LandingCopy)} />
        ) : (
          <div className="cms-json-panel">
            {jsonError ? <p className="cms-json-error">{jsonError}</p> : null}
            <textarea
              className="cms-json-editor"
              value={jsonText}
              spellCheck={false}
              onChange={(e) => setJsonText(e.target.value)}
            />
            <div className="cms-json-actions">
              <button type="button" className="cms-btn cms-btn--primary" onClick={applyJson}>
                Apply &amp; switch to visual
              </button>
              <button
                type="button"
                className="cms-btn cms-btn--ghost"
                onClick={() => {
                  setJsonText(JSON.stringify(draft, null, 2));
                  setJsonError(null);
                }}
              >
                Reload from draft
              </button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
