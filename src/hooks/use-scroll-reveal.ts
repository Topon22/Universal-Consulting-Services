"use client";

import * as React from "react";
import {
  useScroll,
  useTransform,
  type MotionValue,
  type MotionStyle,
} from "framer-motion";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

export type ScrollRevealOptions = {
  /** Start of the transform range as a scroll-progress fraction. */
  start?: number;
  /** End of the transform range. */
  end?: number;
  /** Initial scale (before entering viewport). */
  fromScale?: number;
  /** Initial opacity. */
  fromOpacity?: number;
  /** Vertical offset to animate from (px). */
  fromY?: number;
};

/**
 * Scroll-linked scale/opacity reveal — the element scales from `fromScale` → 1
 * and fades from `fromOpacity` → 1 as it scrolls through the viewport (tied to
 * scroll progress, not just an in-view trigger). Returns `ref` and `style`.
 *
 * Honors `prefers-reduced-motion` (returns a no-op style).
 */
export function useScrollReveal<T extends HTMLElement = HTMLDivElement>(
  options: ScrollRevealOptions = {}
) {
  const {
    start = 0,
    end = 0.4,
    fromScale = 0.92,
    fromOpacity = 0,
    fromY = 30,
  } = options;
  const reduced = useReducedMotion();

  const ref = React.useRef<T | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(
    scrollYProgress,
    [start, end],
    reduced ? [1, 1] : [fromScale, 1]
  );
  const opacity = useTransform(
    scrollYProgress,
    [start, end],
    reduced ? [1, 1] : [fromOpacity, 1]
  );
  const y = useTransform(
    scrollYProgress,
    [start, end],
    reduced ? [0, 0] : [fromY, 0]
  );

  const style: MotionStyle = { scale, opacity, y };
  return { ref, style, scrollYProgress };
}

/**
 * Tracks scroll velocity and produces a skew transform for subtle "speed"
 * feedback. Returns `ref` and `skewY` MotionValue.
 */
export function useScrollVelocity<T extends HTMLElement = HTMLDivElement>() {
  const ref = React.useRef<T | null>(null);
  const { scrollYProgress, velocity } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const skewY = useTransform(velocity, [-3, 0, 3], [-4, 0, 4], {
    clamp: true,
  });

  return { ref, skewY, scrollYProgress, velocity };
}

export type { MotionValue };

export default useScrollReveal;

