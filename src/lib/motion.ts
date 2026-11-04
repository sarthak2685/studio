export const MOTION_QUERY = "(prefers-reduced-motion: reduce)";

export function prefersReducedMotion() {
  if (typeof window === "undefined") return true;
  return window.matchMedia(MOTION_QUERY).matches;
}
