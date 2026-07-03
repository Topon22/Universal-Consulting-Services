"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useMagnetic } from "@/hooks/use-magnetic";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { cn } from "@/lib/utils";

type Ripple = { id: number; x: number; y: number; size: number };

/**
 * Magnetic + ripple wrapper for any clickable / linkable element.
 *
 * Usage:
 * ```tsx
 * <MagneticButton>
 *   <Link href="#contact">Click me</Link>
 * </MagneticButton>
 * ```
 *
 * Renders a `motion.span` wrapper that translates toward the cursor (magnetic)
 * and emits a material-style ripple from the click point. Honors
 * `prefers-reduced-motion`.
 */
export function MagneticButton({
  children,
  className,
  strength = 0.4,
  radius = 90,
  as = "span",
  ripple = true,
  ...rest
}: {
  children: React.ReactNode;
  className?: string;
  strength?: number;
  radius?: number;
  as?: "span" | "div";
  ripple?: boolean;
} & Omit<React.HTMLAttributes<HTMLElement>, "children" | "className">) {
  const { ref, style } = useMagnetic<HTMLSpanElement>({ strength, radius });
  const reduced = useReducedMotion();
  const [ripples, setRipples] = React.useState<Ripple[]>([]);
  const idRef = React.useRef(0);

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    if (!ripple || reduced) {
      rest.onClick?.(e as unknown as React.MouseEvent<HTMLElement>);
      return;
    }
    const target = e.currentTarget as HTMLElement;
    const rect = target.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;
    const id = idRef.current++;
    setRipples((prev) => [...prev, { id, x, y, size }]);
    // Auto-remove after animation.
    window.setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== id));
    }, 650);
    rest.onClick?.(e as unknown as React.MouseEvent<HTMLElement>);
  };

  const MotionTag = as === "div" ? motion.div : motion.span;

  return (
    <MotionTag
      ref={ref as unknown as React.Ref<HTMLSpanElement>}
      style={reduced ? undefined : style}
      className={cn("relative inline-flex isolate overflow-visible", className)}
      onClick={handleClick}
      data-magnetic
    >
      {children}
      {/* Ripples — rendered absolutely inside an overflow-hidden mask. */}
      {ripple && !reduced && (
        <span className="pointer-events-none absolute inset-0 overflow-hidden rounded-[inherit]">
          <AnimatePresence>
            {ripples.map((r) => (
              <motion.span
                key={r.id}
                initial={{ scale: 0, opacity: 0.5 }}
                animate={{ scale: 2.5, opacity: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                style={{
                  position: "absolute",
                  left: r.x,
                  top: r.y,
                  width: r.size,
                  height: r.size,
                  borderRadius: "9999px",
                  background:
                    "radial-gradient(circle, oklch(0.99 0.012 95 / 0.55) 0%, oklch(0.99 0.012 95 / 0) 70%)",
                  mixBlendMode: "overlay",
                }}
              />
            ))}
          </AnimatePresence>
        </span>
      )}
    </MotionTag>
  );
}

export default MagneticButton;
