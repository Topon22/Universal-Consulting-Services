"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { useTilt, type TiltOptions } from "@/hooks/use-tilt";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { cn } from "@/lib/utils";

/**
 * 3D tilt card wrapper — element rotates toward the cursor with spring
 * physics, optional glare overlay, and animated gradient border on hover.
 *
 * The inner content should keep `transform: translateZ(0)` on items you want
 * to "pop" in 3D (e.g. an icon).
 *
 * Honors `prefers-reduced-motion` and is auto-disabled on touch / coarse
 * pointers.
 */
export function TiltCard({
  children,
  className,
  glare = true,
  border = true,
  tilt,
  ...rest
}: {
  children: React.ReactNode;
  className?: string;
  /** Show the moving radial glare overlay. */
  glare?: boolean;
  /** Show the animated rotating gradient border on hover. */
  border?: boolean;
  tilt?: TiltOptions;
} & Omit<React.HTMLAttributes<HTMLDivElement>, "children" | "className">) {
  const { ref, style, glareBackground } = useTilt<HTMLDivElement>(tilt);
  const reduced = useReducedMotion();

  return (
    <motion.div
      ref={ref}
      style={reduced ? undefined : style}
      className={cn(
        "group relative rounded-2xl",
        border && "before:absolute before:inset-0 before:rounded-[inherit] before:p-[1.5px] before:opacity-0 before:transition-opacity before:duration-500 hover:before:opacity-100",
        className
      )}
      data-tilt
      {...rest}
    >
      {/* Animated gradient border (CSS conic gradient that rotates on hover). */}
      {border && (
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 rounded-[inherit] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{
            padding: "1.5px",
            background:
              "conic-gradient(from 0deg, oklch(0.55 0.11 172), oklch(0.82 0.13 78), oklch(0.50 0.10 185), oklch(0.65 0.08 145), oklch(0.55 0.11 172))",
            WebkitMask:
              "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
            WebkitMaskComposite: "xor",
            maskComposite: "exclude",
            animation: "tilt-border-spin 6s linear infinite",
          }}
        />
      )}

      {/* Glare overlay. */}
      {glare && !reduced && (
        <motion.span
          aria-hidden
          className="pointer-events-none absolute inset-0 z-20 rounded-[inherit] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{ background: glareBackground }}
        />
      )}

      {/* Content. */}
      <div className="relative z-10 h-full">{children}</div>
    </motion.div>
  );
}

export default TiltCard;
