"use client";

import * as React from "react";
import {
  useMotionValue,
  useSpring,
  useTransform,
  type MotionStyle,
} from "framer-motion";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

export type TiltOptions = {
  /** Max rotation in degrees on each axis. */
  max?: number;
  /** Spring config. */
  spring?: { stiffness?: number; damping?: number; mass?: number };
  /** Optional scale on hover (1 = none). */
  scale?: number;
  /** Perspective in px (lower = more dramatic). */
  perspective?: number;
};

/**
 * 3D tilt effect — element rotates toward the cursor (rotateX / rotateY) based
 * on pointer position over the element. Returns `ref`, `style`, and `position`
 * for downstream consumers (e.g. a glare overlay).
 *
 * Honors `prefers-reduced-motion` and disables on touch devices.
 */
export function useTilt<T extends HTMLElement = HTMLDivElement>(
  options: TiltOptions = {}
) {
  const {
    max = 10,
    spring = { stiffness: 220, damping: 18, mass: 0.6 },
    scale = 1.02,
    perspective = 700,
  } = options;
  const reduced = useReducedMotion();

  const ref = React.useRef<T | null>(null);
  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const sc = useMotionValue(1);

  const rotateX = useSpring(rx, spring);
  const rotateY = useSpring(ry, spring);
  const scaleMv = useSpring(sc, spring);

  // Glare position (0–1) for optional overlay.
  const glareX = useMotionValue(0.5);
  const glareY = useMotionValue(0.5);

  React.useEffect(() => {
    if (reduced) return;
    const el = ref.current;
    if (!el) return;
    // Skip on touch / coarse pointers.
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(pointer: coarse)").matches
    ) {
      return;
    }

    const handle = (e: PointerEvent) => {
      const rect = el.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width; // 0..1
      const py = (e.clientY - rect.top) / rect.height; // 0..1
      // Center-origin normalized [-0.5, 0.5]
      const nx = px - 0.5;
      const ny = py - 0.5;
      // Invert Y so cursor pulls the top toward you.
      rx.set(-ny * max * 2);
      ry.set(nx * max * 2);
      sc.set(scale);
      glareX.set(px);
      glareY.set(py);
    };
    const reset = () => {
      rx.set(0);
      ry.set(0);
      sc.set(1);
      glareX.set(0.5);
      glareY.set(0.5);
    };

    el.addEventListener("pointermove", handle);
    el.addEventListener("pointerenter", handle);
    el.addEventListener("pointerleave", reset);
    return () => {
      el.removeEventListener("pointermove", handle);
      el.removeEventListener("pointerenter", handle);
      el.removeEventListener("pointerleave", reset);
    };
  }, [reduced, max, scale, rx, ry, sc, glareX, glareY]);

  const glareBackground = useTransform(
    [glareX, glareY],
    ([gx, gy]: number[]) =>
      `radial-gradient(360px circle at ${gx * 100}% ${gy * 100}%, oklch(0.82 0.13 78 / 0.18), transparent 60%)`
  );

  const style: MotionStyle = {
    rotateX,
    rotateY,
    scale: scaleMv,
    transformPerspective: perspective,
    transformStyle: "preserve-3d",
  };

  return { ref, style, glareBackground };
}

export default useTilt;
