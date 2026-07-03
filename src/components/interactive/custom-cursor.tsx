"use client";

import * as React from "react";
import { motion, useMotionValue, useSpring, AnimatePresence } from "framer-motion";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

/**
 * Premium custom cursor: a small dot + outer ring that lags with spring.
 * Grows when hovering interactive elements (`a`, `button`, `[data-cursor]`,
 * `[data-magnetic]`, `[data-tilt]`). Hidden on touch devices and when the user
 * prefers reduced motion.
 *
 * Mount once at the page root. Renders nothing on the server.
 */
export function CustomCursor() {
  const reduced = useReducedMotion();
  const [enabled, setEnabled] = React.useState(false);
  const [hovering, setHovering] = React.useState(false);
  const [down, setDown] = React.useState(false);

  const dotX = useMotionValue(-100);
  const dotY = useMotionValue(-100);
  const ringX = useSpring(dotX, { stiffness: 350, damping: 28, mass: 0.5 });
  const ringY = useSpring(dotY, { stiffness: 350, damping: 28, mass: 0.5 });

  React.useEffect(() => {
    if (reduced) return;
    if (typeof window === "undefined") return;
    // Skip on touch / coarse pointers.
    if (window.matchMedia("(pointer: coarse)").matches) return;
    setEnabled(true);
    document.documentElement.classList.add("has-custom-cursor");

    const move = (e: PointerEvent) => {
      dotX.set(e.clientX);
      dotY.set(e.clientY);
      const target = e.target as HTMLElement | null;
      if (!target) return;
      const interactive = target.closest(
        'a, button, input, textarea, select, label, [role="button"], [data-cursor], [data-magnetic], [data-tilt]'
      );
      setHovering(!!interactive);
    };
    const downH = () => setDown(true);
    const upH = () => setDown(false);
    const leave = () => {
      dotX.set(-100);
      dotY.set(-100);
    };

    window.addEventListener("pointermove", move);
    window.addEventListener("pointerdown", downH);
    window.addEventListener("pointerup", upH);
    document.addEventListener("pointerleave", leave);
    return () => {
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerdown", downH);
      window.removeEventListener("pointerup", upH);
      document.removeEventListener("pointerleave", leave);
      document.documentElement.classList.remove("has-custom-cursor");
    };
  }, [reduced, dotX, dotY]);

  if (!enabled) return null;

  return (
    <>
      {/* Center dot — tracks pointer precisely. */}
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[100] h-2 w-2 rounded-full bg-primary"
        style={{
          x: dotX,
          y: dotY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{ scale: down ? 0.7 : hovering ? 0.4 : 1 }}
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
      />
      {/* Outer ring — lags with spring, grows on hover. */}
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[100] rounded-full border border-primary/60"
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
          width: 36,
          height: 36,
        }}
        animate={{
          scale: down ? 0.85 : hovering ? 1.8 : 1,
          opacity: hovering ? 1 : 0.55,
          backgroundColor: hovering
            ? "oklch(0.44 0.095 172 / 0.10)"
            : "oklch(0.44 0.095 172 / 0)",
        }}
        transition={{ type: "spring", stiffness: 250, damping: 20 }}
      />
      <AnimatePresence />
      <style>{`
        @media (pointer: fine) {
          html.has-custom-cursor, html.has-custom-cursor * {
            cursor: none !important;
          }
        }
      `}</style>
    </>
  );
}

export default CustomCursor;
