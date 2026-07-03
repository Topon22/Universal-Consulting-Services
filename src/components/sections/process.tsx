"use client";

import * as React from "react";
import { motion, useInView } from "framer-motion";
import {
  Search,
  Target,
  ClipboardCheck,
  Plane,
  CheckCircle2,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import Link from "next/link";
import { PROCESS } from "@/lib/data";
import { Reveal } from "@/components/animation";
import { MagneticButton } from "@/components/interactive/magnetic-button";
import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";

// Per-step detailed content (Norrspark-style detailed scroll content).
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

function StepBlock({
  step,
  index,
  active,
  onActivate,
}: {
  step: (typeof PROCESS)[number];
  index: number;
  active: boolean;
  onActivate: () => void;
}) {
  const ref = React.useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { margin: "-45% 0px -45% 0px" });
  React.useEffect(() => {
    if (inView) onActivate();
  }, [inView, onActivate]);

  const details = STEP_DETAILS[step.step];
  const Icon = step.icon;

  return (
    <div
      ref={ref}
      className="relative scroll-mt-32 py-10 lg:py-16"
      id={`process-step-${step.step}`}
    >
      {/* Mobile node — sticky on desktop is handled by parent */}
      <div className="grid gap-6 lg:grid-cols-12 lg:gap-12">
        {/* Left sticky column on desktop, mobile shows compact */}
        <div className="lg:col-span-5">
          <div
            className={cn(
              "lg:sticky lg:top-32 transition-all duration-500",
              active ? "opacity-100" : "opacity-50 lg:opacity-30"
            )}
          >
            <div className="flex items-center gap-4">
              <span
                className={cn(
                  "font-serif text-6xl font-bold tabular-nums transition-colors sm:text-7xl",
                  active ? "text-gradient-emerald" : "text-muted-foreground/40"
                )}
              >
                {step.step}
              </span>
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-border/60 bg-card shadow-premium">
                <Icon className="h-7 w-7 text-primary" />
              </div>
            </div>
            <h3 className="mt-5 font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              {step.title}
            </h3>
            <p className="mt-3 max-w-md text-base leading-relaxed text-muted-foreground">
              {step.description}
            </p>
            <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-accent-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              {details.duration}
            </div>
          </div>
        </div>

        {/* Right — detailed points */}
        <div className="lg:col-span-7">
          <div className="rounded-2xl border border-border/60 bg-card p-6 shadow-premium sm:p-8">
            <div className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              What happens in this step
            </div>
            <ul className="mt-5 space-y-4">
              {details.points.map((point, i) => (
                <motion.li
                  key={point}
                  initial={{ opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <span className="text-sm leading-relaxed text-foreground/90 sm:text-base">
                    {point}
                  </span>
                </motion.li>
              ))}
            </ul>
            <div className="mt-6 flex items-center gap-2 border-t border-border/60 pt-5">
              <span className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                Deliverable:
              </span>
              <span className="text-sm font-bold text-foreground">
                {details.deliverable}
              </span>
            </div>
          </div>

          {/* Per-step CTA on the last step */}
          {index === PROCESS.length - 1 && (
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <MagneticButton className="rounded-full">
                <Link
                  href="#contact"
                  className="inline-flex h-11 items-center gap-2 rounded-full bg-primary px-6 text-sm font-bold text-primary-foreground shadow-premium transition-shadow hover:shadow-lg"
                >
                  <Sparkles className="h-4 w-4" />
                  Start your journey
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </MagneticButton>
              <span className="text-xs text-muted-foreground">
                Free consultation · No obligation
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// Mobile vertical timeline fallback.
function MobileTimeline({
  activeIndex,
  onActivate,
}: {
  activeIndex: number;
  onActivate: (i: number) => void;
}) {
  return (
    <div className="relative mt-14">
      {/* Vertical line */}
      <div className="absolute left-[27px] top-4 bottom-4 w-px bg-gradient-to-b from-primary via-accent to-primary" />
      <div className="space-y-8">
        {PROCESS.map((step, i) => {
          const Icon = step.icon;
          const active = i === activeIndex;
          return (
            <button
              key={step.step}
              type="button"
              onClick={() => onActivate(i)}
              className="flex w-full items-start gap-4 text-left"
              aria-label={`View step ${step.step} — ${step.title}`}
            >
              <div
                className={cn(
                  "relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border transition-all",
                  active
                    ? "border-primary bg-primary text-primary-foreground shadow-premium scale-105"
                    : "border-border bg-card text-primary"
                )}
              >
                <Icon className="h-6 w-6" />
                <span className="absolute -right-1 -top-1 flex h-6 w-6 items-center justify-center rounded-full bg-accent text-[10px] font-bold text-accent-foreground shadow">
                  {i + 1}
                </span>
              </div>
              <div className="flex-1 pt-1">
                <div className="font-serif text-xs font-bold uppercase tracking-[0.2em] text-accent-foreground/80">
                  Step {step.step}
                </div>
                <h3 className="mt-1 font-serif text-xl font-bold text-foreground">
                  {step.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}

export function Process() {
  const isMobile = useIsMobile();
  const [activeIndex, setActiveIndex] = React.useState(0);

  return (
    <section id="process" className="relative py-20 sm:py-28">
      <div className="absolute inset-0 -z-10 mesh-bg opacity-40" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-accent-foreground">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                How We Work
              </span>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-5 font-serif text-4xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-5xl md:text-6xl">
                Your journey from{" "}
                <span className="text-gradient-emerald">application to arrival</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.16}>
            <p className="max-w-md text-base leading-relaxed text-muted-foreground">
              A proven four-step process that turns the dream of studying in
              the U.S. into a clear, supported, and transparent path forward.
            </p>
          </Reveal>
        </div>

        {/* Mobile timeline */}
        {isMobile && (
          <MobileTimeline
            activeIndex={activeIndex}
            onActivate={setActiveIndex}
          />
        )}

        {/* Desktop sticky pinned experience */}
        {!isMobile && (
          <div className="mt-8">
            {/* Sticky step indicator rail (top of section as you scroll) */}
            <div className="sticky top-20 z-20 mb-6 hidden lg:block">
              <div className="flex items-center justify-center gap-2 rounded-full border border-border/60 bg-background/80 p-1.5 shadow-premium backdrop-blur">
                {PROCESS.map((step, i) => (
                  <button
                    key={step.step}
                    type="button"
                    onClick={() => {
                      document
                        .getElementById(`process-step-${step.step}`)
                        ?.scrollIntoView({ behavior: "smooth", block: "center" });
                    }}
                    className={cn(
                      "flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition-all",
                      i === activeIndex
                        ? "bg-primary text-primary-foreground shadow"
                        : "text-muted-foreground hover:text-foreground"
                    )}
                  >
                    <span className="font-serif font-bold">{step.step}</span>
                    {step.title}
                  </button>
                ))}
              </div>
            </div>

            {PROCESS.map((step, i) => (
              <StepBlock
                key={step.step}
                step={step}
                index={i}
                active={i === activeIndex}
                onActivate={() => setActiveIndex(i)}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
