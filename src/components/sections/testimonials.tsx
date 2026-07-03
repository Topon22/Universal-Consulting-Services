"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, Star, Globe2 } from "lucide-react";
import { TESTIMONIALS } from "@/lib/data";
import { SectionHeading } from "@/components/animation";
import { cn } from "@/lib/utils";

export function Testimonials() {
  const [index, setIndex] = React.useState(0);
  const [direction, setDirection] = React.useState(1);
  const [paused, setPaused] = React.useState(false);

  const total = TESTIMONIALS.length;

  const go = React.useCallback(
    (dir: number) => {
      setDirection(dir);
      setIndex((prev) => (prev + dir + total) % total);
    },
    [total]
  );

  React.useEffect(() => {
    if (paused) return;
    const id = setInterval(() => go(1), 6000);
    return () => clearInterval(id);
  }, [go, paused]);

  const active = TESTIMONIALS[index];

  return (
    <section
      id="testimonials"
      className="relative overflow-hidden py-24 sm:py-32"
    >
      <div className="absolute inset-0 -z-10 mesh-bg opacity-60" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Student Voices"
          title={
            <>
              Real journeys.{" "}
              <span className="text-gradient-emerald">Real success.</span>
            </>
          }
          description="Thousands of students have trusted UCSG with their U.S. education. Here's what a few of them have to say."
        />

        <div
          className="relative mx-auto mt-16 max-w-4xl"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="relative overflow-hidden rounded-3xl border border-border/60 bg-card p-8 shadow-premium sm:p-12">
            <Quote className="absolute right-8 top-8 h-16 w-16 text-accent/15" />

            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={index}
                custom={direction}
                initial={{ opacity: 0, x: direction * 60 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction * -60 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              >
                {/* Stars */}
                <div className="flex gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>

                <blockquote className="mt-5 font-serif text-xl font-medium leading-relaxed text-foreground sm:text-2xl">
                  “{active.quote}”
                </blockquote>

                <div className="mt-8 flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary/70 font-serif text-lg font-bold text-primary-foreground">
                    {active.initials}
                  </div>
                  <div>
                    <div className="font-bold text-foreground">{active.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {active.role}
                    </div>
                    <div className="mt-0.5 flex items-center gap-1.5 text-xs font-medium text-primary">
                      <Globe2 className="h-3 w-3" />
                      {active.location}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Controls */}
            <div className="mt-8 flex items-center justify-between border-t border-border/60 pt-5">
              <div className="flex gap-2">
                {TESTIMONIALS.map((_, i) => (
                  <button
                    key={i}
                    aria-label={`Go to testimonial ${i + 1}`}
                    onClick={() => {
                      setDirection(i > index ? 1 : -1);
                      setIndex(i);
                    }}
                    className={cn(
                      "h-2 rounded-full transition-all duration-300",
                      i === index
                        ? "w-8 bg-primary"
                        : "w-2 bg-border hover:bg-primary/40"
                    )}
                  />
                ))}
              </div>
              <div className="flex gap-2">
                <button
                  aria-label="Previous testimonial"
                  onClick={() => go(-1)}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-border/70 text-foreground transition-colors hover:border-primary/40 hover:bg-primary/5 hover:text-primary"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <button
                  aria-label="Next testimonial"
                  onClick={() => go(1)}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-border/70 text-foreground transition-colors hover:border-primary/40 hover:bg-primary/5 hover:text-primary"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
