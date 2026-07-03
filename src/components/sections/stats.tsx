"use client";

import * as React from "react";
import {
  motion,
  useInView,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { STATS } from "@/lib/data";

function Counter({
  value,
  suffix = "",
  duration = 2,
}: {
  value: number;
  suffix?: string;
  duration?: number;
}) {
  const ref = React.useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, {
    duration: duration * 1000,
    bounce: 0,
  });
  const display = useTransform(spring, (latest) =>
    Math.floor(latest).toLocaleString("en-US")
  );

  React.useEffect(() => {
    if (inView) motionValue.set(value);
  }, [inView, value, motionValue]);

  return (
    <span ref={ref} className="tabular-nums">
      <motion.span>{display}</motion.span>
      {suffix}
    </span>
  );
}

export function Stats() {
  return (
    <section className="relative overflow-hidden border-y border-border/40 py-16 sm:py-20">
      {/* Subtle premium background — keeps the dark aesthetic clean */}
      <div className="absolute inset-0 -z-10 bg-background" />
      <div className="absolute inset-0 -z-10 grid-pattern opacity-30" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-primary/[0.04] via-accent/[0.04] to-primary/[0.04] animate-aurora" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="mb-10 text-center"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">
            By the Numbers
          </span>
          <h3 className="mt-2 font-serif text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            A track record built on trust
          </h3>
        </motion.div>

        <div className="grid grid-cols-2 gap-y-10 lg:grid-cols-4">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.6,
                delay: i * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative px-4 text-center sm:px-6"
            >
              {/* Thin vertical divider between stats (desktop) */}
              {i > 0 && (
                <span
                  aria-hidden
                  className="absolute left-0 top-1/2 hidden h-16 w-px -translate-y-1/2 bg-border/60 lg:block"
                />
              )}
              {/* Thin horizontal divider between rows (mobile 2-col) */}
              {i >= 2 && (
                <span
                  aria-hidden
                  className="absolute -top-5 left-1/4 right-1/4 h-px bg-border/60 lg:hidden"
                />
              )}

              <stat.icon className="mx-auto h-7 w-7 text-accent" />
              <div className="mt-4 font-serif text-5xl font-bold tracking-tight text-foreground sm:text-6xl">
                <Counter value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="mt-2 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
