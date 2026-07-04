"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  CheckCircle2,
  ArrowRight,
  Sparkles,
  ChevronRight,
} from "lucide-react";
import Link from "next/link";
import { PROCESS } from "@/lib/data";
import { Reveal } from "@/components/animation";
import { MagneticButton } from "@/components/interactive/magnetic-button";
import { cn } from "@/lib/utils";

/* Per-step detailed content. */
const STEP_DETAILS: Record<
  string,
  { points: string[]; deliverable: string; duration: string }
> = {
  "01": {
    points: [
      "Free 30-minute consultation with a multilingual counselor",
      "Profile deep-dive: budget, English level, timeline, career goals",
      "Honest assessment — including whether the U.S. is right for you",
    ],
    deliverable: "Personalized U.S. pathway roadmap",
    duration: "Day 1 — Free",
  },
  "02": {
    points: [
      "Shortlist of 5–7 colleges matched to your goals & budget",
      "Filter for CPT-eligibility, hybrid options, STEM OPT, scholarships",
      "Compare tuition, location, and post-graduation outcomes side by side",
    ],
    deliverable: "Curated college shortlist with rationale",
    duration: "Week 1",
  },
  "03": {
    points: [
      "Every document, deadline & essay tracked in our proprietary CRM",
      "Essay coaching, interview prep, and document review by admissions experts",
      "Direct submission to partner universities — fast-tracked review",
    ],
    deliverable: "Accepted admission offer(s) in hand",
    duration: "Weeks 2–6",
  },
  "04": {
    points: [
      "Visa interview prep, I-20 guidance, and travel logistics handled",
      "Onshore Delaware team meets you at the airport — housing & setup help",
      "Ongoing mentorship: CPT/OPT transitions, academics, career coaching",
    ],
    deliverable: "You, thriving on a U.S. campus",
    duration: "Ongoing",
  },
};

export function Process() {
  const [active, setActive] = React.useState(0);
  const step = PROCESS[active];
  const details = STEP_DETAILS[step.step];
  const Icon = step.icon;

  return (
    <section id="process" className="relative py-16 sm:py-20">
      <div className="absolute inset-0 -z-10 mesh-bg opacity-40" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Heading row */}
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-accent-foreground">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                How We Work
              </span>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-5 font-serif text-4xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-5xl">
                Your journey from{" "}
                <span className="text-gradient-emerald">application to arrival</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.16}>
            <p className="max-w-sm text-sm leading-relaxed text-muted-foreground sm:text-base">
              A proven four-step process — click any step to explore it.
            </p>
          </Reveal>
        </div>

        {/* Step selector rail — compact, clickable tabs */}
        <Reveal delay={0.12}>
          <div className="mt-10 grid grid-cols-2 gap-2 sm:grid-cols-4 sm:gap-3">
            {PROCESS.map((s, i) => {
              const SIcon = s.icon;
              const isActive = i === active;
              return (
                <button
                  key={s.step}
                  type="button"
                  onClick={() => setActive(i)}
                  aria-pressed={isActive}
                  aria-label={`View step ${s.step} — ${s.title}`}
                  className={cn(
                    "group relative flex items-center gap-3 rounded-2xl border p-3 text-left transition-all sm:p-4",
                    isActive
                      ? "border-primary/50 bg-primary/5 shadow-premium"
                      : "border-border/60 bg-card hover:border-primary/30 hover:bg-card/60"
                  )}
                >
                  <span
                    className={cn(
                      "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-all sm:h-12 sm:w-12",
                      isActive
                        ? "bg-gradient-to-br from-primary to-primary/70 text-primary-foreground shadow"
                        : "bg-primary/10 text-primary"
                    )}
                  >
                    <SIcon className="h-5 w-5" />
                  </span>
                  <div className="min-w-0">
                    <div
                      className={cn(
                        "font-serif text-xs font-bold tabular-nums transition-colors",
                        isActive ? "text-primary" : "text-muted-foreground"
                      )}
                    >
                      Step {s.step}
                    </div>
                    <div
                      className={cn(
                        "truncate text-sm font-bold transition-colors",
                        isActive ? "text-foreground" : "text-foreground/70"
                      )}
                    >
                      {s.title}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* Active step detail panel — single panel, swapped via AnimatePresence */}
        <div className="mt-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="grid gap-5 rounded-3xl border border-border/60 bg-card p-6 shadow-premium sm:p-8 lg:grid-cols-12 lg:gap-8"
            >
              {/* Left — step header */}
              <div className="lg:col-span-5">
                <div className="flex items-center gap-4">
                  <span className="font-serif text-6xl font-bold tabular-nums text-gradient-emerald sm:text-7xl">
                    {step.step}
                  </span>
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-border/60 bg-background shadow-sm">
                    <Icon className="h-7 w-7 text-primary" />
                  </div>
                </div>
                <h3 className="mt-4 font-serif text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {step.description}
                </p>
                <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-accent-foreground">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  {details.duration}
                </div>
              </div>

              {/* Right — points + deliverable */}
              <div className="lg:col-span-7 lg:border-l lg:border-border/60 lg:pl-8">
                <div className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                  What happens in this step
                </div>
                <ul className="mt-4 space-y-3">
                  {details.points.map((point, i) => (
                    <motion.li
                      key={point}
                      initial={{ opacity: 0, x: 12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.05 * i }}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <span className="text-sm leading-relaxed text-foreground/90 sm:text-base">
                        {point}
                      </span>
                    </motion.li>
                  ))}
                </ul>
                <div className="mt-5 flex items-center gap-2 border-t border-border/60 pt-4">
                  <span className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    Deliverable:
                  </span>
                  <span className="text-sm font-bold text-foreground">
                    {details.deliverable}
                  </span>
                </div>

                {/* Step nav + CTA row */}
                <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => setActive((a) => Math.max(0, a - 1))}
                      disabled={active === 0}
                      className="inline-flex h-9 items-center gap-1 rounded-full border border-border/60 px-3 text-xs font-semibold text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary disabled:cursor-not-allowed disabled:opacity-40"
                    >
                      <ChevronRight className="h-3.5 w-3.5 rotate-180" />
                      Prev
                    </button>
                    <span className="text-xs font-medium text-muted-foreground">
                      {active + 1} / {PROCESS.length}
                    </span>
                    <button
                      type="button"
                      onClick={() =>
                        setActive((a) => Math.min(PROCESS.length - 1, a + 1))
                      }
                      disabled={active === PROCESS.length - 1}
                      className="inline-flex h-9 items-center gap-1 rounded-full border border-border/60 px-3 text-xs font-semibold text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary disabled:cursor-not-allowed disabled:opacity-40"
                    >
                      Next
                      <ChevronRight className="h-3.5 w-3.5" />
                    </button>
                  </div>
                  {active === PROCESS.length - 1 && (
                    <MagneticButton className="rounded-full">
                      <Link
                        href="#contact"
                        className="inline-flex h-10 items-center gap-2 rounded-full bg-primary px-5 text-sm font-bold text-primary-foreground shadow-premium transition-shadow hover:shadow-lg"
                      >
                        <Sparkles className="h-4 w-4" />
                        Start your journey
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </MagneticButton>
                  )}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
