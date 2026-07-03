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
    <section className="relative overflow-hidden py-20 sm:py-24">
      {/* Background band */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary via-primary to-primary/80" />
      <div className="absolute inset-0 -z-10 grid-pattern opacity-20" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-primary/0 via-accent/10 to-primary/0 animate-aurora" />

      {/* Floating blobs */}
      <motion.div
        aria-hidden
        className="absolute -left-10 top-1/3 h-56 w-56 rounded-full bg-accent/20 blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="absolute -right-10 bottom-1/4 h-64 w-64 rounded-full bg-background/15 blur-3xl"
        animate={{ scale: [1, 1.25, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="relative text-center"
            >
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-background/15 backdrop-blur">
                <stat.icon className="h-7 w-7 text-accent" />
              </div>
              <div className="mt-4 font-serif text-4xl font-bold text-primary-foreground sm:text-5xl">
                <Counter value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="mt-2 text-sm font-medium uppercase tracking-wide text-primary-foreground/70">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
