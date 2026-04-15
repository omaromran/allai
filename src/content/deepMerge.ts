import type { LandingCopy } from "./types";

function isPlainObject(v: unknown): v is Record<string, unknown> {
  return v !== null && typeof v === "object" && !Array.isArray(v);
}

function deepMergeRecursive<T>(base: T, patch: unknown): T {
  if (!isPlainObject(patch)) return base;
  if (!isPlainObject(base)) return patch as T;
  const out = { ...base } as Record<string, unknown>;
  for (const key of Object.keys(patch)) {
    const p = patch[key];
    if (p === undefined) continue;
    const b = out[key];
    if (isPlainObject(b) && isPlainObject(p)) {
      out[key] = deepMergeRecursive(b, p);
    } else {
      out[key] = p;
    }
  }
  return out as T;
}

/** Deep-merge objects; arrays and primitives from patch replace entirely. */
export function deepMerge(base: LandingCopy, patch: unknown): LandingCopy {
  return deepMergeRecursive(base, patch);
}
