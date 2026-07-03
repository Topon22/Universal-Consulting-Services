"use client";

import * as React from "react";

/**
 * Tracks the user's `prefers-reduced-motion` setting.
 * Returns `true` when the user has requested reduced motion.
 *
 * SSR-safe: returns `false` on the server and updates on mount.
 */
export function useReducedMotion(): boolean {
  const [reduced, setReduced] = React.useState(false);

  React.useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) return;
    const mql = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = () => setReduced(mql.matches);
    onChange();
    mql.addEventListener("change", onChange);
    return () => mql.removeEventListener("change", onChange);
  }, []);

  return reduced;
}

export default useReducedMotion;
