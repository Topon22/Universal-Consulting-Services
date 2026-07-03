"use client";

import * as React from "react";
import { useMotionValue, useSpring, type MotionStyle } from "framer-motion";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

export type MagneticOptions = {
  /** Strength of the pull (0–1). Higher = larger displacement. */
  strength?: number;
  /** Radius (in px) around the element within which the magnet activates. */
  radius?: number;
  /** Spring config for return-to-center. */
  spring?: { stiffness?: number; damping?: number; mass?: number };
};

/**
 * Makes the wrapped element "magnetic" — it translates toward the cursor while
 * the pointer is inside (or near) it, then springs back on exit.
 *
 * Returns a `ref` (attach to the moving element) and `style` (apply to a
 * `motion.*` element). Honors `prefers-reduced-motion` (no-op).
 */
export function useMagnetic<T extends HTMLElement = HTMLButtonElement>(
  options: MagneticOptions = {}
) {
  const { strength = 0.35, radius = 120, spring } = options;
  const reduced = useReducedMotion();

  const ref = React.useRef<T | null>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const sx = useSpring(x, {
    stiffness: spring?.stiffness ?? 250,
    damping: spring?.damping ?? 18,
    mass: spring?.mass ?? 0.5,
  });
  const sy = useSpring(y, {
    stiffness: spring?.stiffness ?? 250,
    damping: spring?.damping ?? 18,
    mass: spring?.mass ?? 0.5,
  });

  React.useEffect(() => {
    if (reduced) return;
    const el = ref.current;
    if (!el) return;

    const handle = (e: PointerEvent) => {
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = e.clientX - cx;
      const dy = e.clientY - cy;
      const dist = Math.hypot(dx, dy);
      // Only attract when inside the element OR within the magnetic radius.
      const inside =
        e.clientX >= rect.left - radius &&
        e.clientX <= rect.right + radius &&
        e.clientY >= rect.top - radius &&
        e.clientY <= rect.bottom + radius;
      if (!inside) {
        x.set(0);
        y.set(0);
        return;
      }
      // Falloff by distance so the pull is strongest at center.
      const falloff = Math.max(0, 1 - dist / (radius + rect.width));
      x.set(dx * strength * falloff);
      y.set(dy * strength * falloff);
    };
    const reset = () => {
      x.set(0);
      y.set(0);
    };

    window.addEventListener("pointermove", handle);
    window.addEventListener("pointerup", reset);
    window.addEventListener("pointerleave", reset);
    return () => {
      window.removeEventListener("pointermove", handle);
      window.removeEventListener("pointerup", reset);
      window.removeEventListener("pointerleave", reset);
    };
  }, [reduced, strength, radius, x, y]);

  const style: MotionStyle = { x: sx, y: sy };
  return { ref, style };
}

export default useMagnetic;
