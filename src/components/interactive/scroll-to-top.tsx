"use client";

import * as React from "react";
import { motion, AnimatePresence, useMotionValue, useSpring } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { useMagnetic } from "@/hooks/use-magnetic";
import { cn } from "@/lib/utils";

/**
 * Floating "scroll to top" button — appears after scrolling past 600px, with
 * smooth fade/scale entrance. Magnetic hover toward the cursor. Smooth scroll
 * to top on click. Keyboard accessible (Space / Enter activate).
 */
export function ScrollToTop() {
  const [visible, setVisible] = React.useState(false);
  const reduced = useReducedMotion();
  const { ref, style } = useMagnetic<HTMLButtonElement>({
    strength: 0.4,
    radius: 70,
  });

  // Progress (0–1) for the circular progress ring around the button.
  const progressMv = useMotionValue(0);
  const progress = useSpring(progressMv, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  React.useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docH =
        document.documentElement.scrollHeight - window.innerHeight;
      const p = docH > 0 ? scrollTop / docH : 0;
      progressMv.set(p);
      setVisible(scrollTop > 600);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [progressMv]);

  const handleClick = () => {
    if (reduced) {
      window.scrollTo(0, 0);
      return;
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // SVG circle for the progress ring.
  const R = 22;
  const C = 2 * Math.PI * R;
  const ring = (
    <svg
      className="absolute inset-0 -rotate-90"
      viewBox="0 0 56 56"
      aria-hidden
    >
      <circle
        cx="28"
        cy="28"
        r={R}
        fill="none"
        stroke="oklch(0.50 0.095 172 / 0.18)"
        strokeWidth="2.5"
      />
      <motion.circle
        cx="28"
        cy="28"
        r={R}
        fill="none"
        stroke="oklch(0.55 0.11 172)"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeDasharray={C}
        style={{ strokeDashoffset: useSpring(progress, { stiffness: 120, damping: 30 }) as unknown as number }}
        // We need strokeDashoffset to track scroll progress.
      />
    </svg>
  );

  // Compute strokeDashoffset from the live progress value via a transform.
  const offset = useTransform(progress, (v) => C * (1 - v));

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          ref={ref}
          style={reduced ? undefined : style}
          type="button"
          onClick={handleClick}
          aria-label="Scroll back to top"
          initial={{ opacity: 0, scale: 0.6, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, y: 12 }}
          transition={{ type: "spring", stiffness: 320, damping: 24 }}
          className={cn(
            "fixed bottom-5 right-5 z-50 flex h-12 w-12 items-center justify-center rounded-full",
            "border border-border/60 bg-card/85 text-primary shadow-premium backdrop-blur",
            "transition-colors hover:border-primary/40 hover:text-primary",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
            "lg:bottom-7 lg:right-7"
          )}
        >
          {/* Progress ring */}
          <svg
            className="pointer-events-none absolute inset-0 -rotate-90"
            viewBox="0 0 56 56"
            aria-hidden
          >
            <circle
              cx="28"
              cy="28"
              r={R}
              fill="none"
              stroke="oklch(0.50 0.095 172 / 0.18)"
              strokeWidth="2.5"
            />
            <motion.circle
              cx="28"
              cy="28"
              r={R}
              fill="none"
              stroke="oklch(0.55 0.11 172)"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeDasharray={C}
              style={{ strokeDashoffset: offset }}
            />
          </svg>
          <motion.span
            animate={{ y: [0, -2, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowUp className="h-5 w-5" />
          </motion.span>
        </motion.button>
      )}
    </AnimatePresence>
  );
}

// Pull useTransform in here so it's available in the component scope.
import { useTransform } from "framer-motion";

export default ScrollToTop;
