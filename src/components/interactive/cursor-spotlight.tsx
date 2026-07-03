"use client";

import * as React from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { cn } from "@/lib/utils";

/**
 * Cursor-follow radial spotlight. Place inside a `relative` container (it
 * fills 100% of its parent). The spotlight smoothly trails the cursor using a
 * motion value + spring-less CSS variable for perf.
 *
 * Honors `prefers-reduced-motion` (renders nothing).
 */
export function CursorSpotlight({
  className,
  color = "oklch(0.82 0.13 78 / 0.18)",
  size = 480,
  children,
}: {
  className?: string;
  color?: string;
  size?: number;
  children?: React.ReactNode;
}) {
  const ref = React.useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const visible = React.useRef(false);
  const [active, setActive] = React.useState(false);

  React.useEffect(() => {
    if (reduced) return;
    const el = ref.current;
    if (!el) return;
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(pointer: coarse)").matches
    ) {
      return;
    }

    const handle = (e: PointerEvent) => {
      const rect = el.getBoundingClientRect();
      mx.set(e.clientX - rect.left);
      my.set(e.clientY - rect.top);
      if (!visible.current) {
        visible.current = true;
        setActive(true);
      }
    };
    const leave = () => {
      visible.current = false;
      setActive(false);
    };
    el.addEventListener("pointermove", handle);
    el.addEventListener("pointerenter", handle);
    el.addEventListener("pointerleave", leave);
    return () => {
      el.removeEventListener("pointermove", handle);
      el.removeEventListener("pointerenter", handle);
      el.removeEventListener("pointerleave", leave);
    };
  }, [reduced, mx, my]);

  const background = useMotionTemplate`radial-gradient(${size}px circle at ${mx}px ${my}px, ${color}, transparent 70%)`;

  return (
    <div ref={ref} className={cn("relative", className)}>
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-300"
        style={{ background, opacity: active ? 1 : 0 }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}

export default CursorSpotlight;
