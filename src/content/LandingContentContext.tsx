import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { DEFAULT_LANDING_COPY } from "./defaultLandingContent";
import { deepMerge } from "./deepMerge";
import type { LandingCopy } from "./types";

function cloneDefault(): LandingCopy {
  return structuredClone(DEFAULT_LANDING_COPY);
}

type Ctx = {
  content: LandingCopy;
  setContent: React.Dispatch<React.SetStateAction<LandingCopy>>;
};

const LandingContentContext = createContext<Ctx | null>(null);

export function LandingContentProvider({ children }: { children: ReactNode }) {
  const [content, setContent] = useState<LandingCopy>(cloneDefault);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const preview = params.get("cmsPreview") === "1";

    const stripPreviewQuery = () => {
      const u = new URL(window.location.href);
      if (!u.searchParams.has("cmsPreview")) return;
      u.searchParams.delete("cmsPreview");
      const q = u.searchParams.toString();
      window.history.replaceState(
        null,
        "",
        `${u.pathname}${q ? `?${q}` : ""}${u.hash}`,
      );
    };

    if (preview) {
      const raw = sessionStorage.getItem("landing-content-preview");
      if (raw) {
        try {
          setContent(deepMerge(cloneDefault(), JSON.parse(raw)));
          sessionStorage.removeItem("landing-content-preview");
          stripPreviewQuery();
          return;
        } catch {
          sessionStorage.removeItem("landing-content-preview");
        }
      }
      stripPreviewQuery();
    }

    let cancelled = false;
    (async () => {
      try {
        const res = await fetch("/landing-content.json?v=4", {
          cache: "no-store",
        });
        if (!res.ok || cancelled) return;
        const data: unknown = await res.json();
        if (!cancelled) setContent(deepMerge(cloneDefault(), data));
      } catch {
        /* file missing or network error — keep defaults */
      }
    })();

    return () => {
      cancelled = true;
    };
  }, []);

  const value = useMemo(() => ({ content, setContent }), [content]);

  return (
    <LandingContentContext.Provider value={value}>
      {children}
    </LandingContentContext.Provider>
  );
}

export function useLandingContent(): Ctx {
  const ctx = useContext(LandingContentContext);
  if (!ctx) {
    throw new Error("useLandingContent must be used within LandingContentProvider");
  }
  return ctx;
}
