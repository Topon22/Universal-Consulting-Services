"use client";

import * as React from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Target,
  Wallet,
  Languages,
  Sparkles,
  ArrowRight,
  RotateCcw,
  CheckCircle2,
  GraduationCap,
  Briefcase,
  Repeat2,
  ShieldCheck,
  BookOpen,
  PlaneTakeoff,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { cn } from "@/lib/utils";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

/**
 * PathFinder — a compact, self-contained "Plan Your U.S. Path" lead-magnet
 * widget. Three quick inputs (goal, annual budget slider, English level)
 * produce a live recommendation: a UCSG service + an estimated tuition
 * range + a "Book a free call" CTA.
 *
 * Inspired by Shorelight's "school match quiz" and ApplyBoard's program
 * search, but distilled into a compact two-column card that fits a single
 * beat on the landing page (no multi-step scroll). Pure client-side logic.
 */

type Goal = "study" | "transfer" | "work" | "visa";
type EnglishLevel = "beginner" | "intermediate" | "advanced";

const GOALS: { key: Goal; label: string; icon: React.ComponentType<{ className?: string }>; blurb: string }[] = [
  { key: "study", label: "Study in USA", icon: GraduationCap, blurb: "Start a degree" },
  { key: "transfer", label: "Transfer", icon: Repeat2, blurb: "Switch schools" },
  { key: "work", label: "Work (CPT/OPT)", icon: Briefcase, blurb: "Work while studying" },
  { key: "visa", label: "Visa / Immigration", icon: ShieldCheck, blurb: "Visa & status help" },
];

const ENGLISH_LEVELS: { key: EnglishLevel; label: string }[] = [
  { key: "beginner", label: "Beginner" },
  { key: "intermediate", label: "Intermediate" },
  { key: "advanced", label: "Advanced / Fluent" },
];

type Recommendation = {
  service: string;
  slug: string;
  summary: string;
  estTuition: string;
  estTimeline: string;
  highlights: string[];
  pathwayNote?: string;
};

function recommend(goal: Goal, budget: number, english: EnglishLevel): Recommendation {
  // Budget is in $k/yr. Tuition bands are representative of UCSG's partner
  // network — the free call finalizes the exact figure.
  let base: Omit<Recommendation, "estTuition" | "highlights" | "pathwayNote">;

  if (goal === "transfer") {
    base = {
      service: "College Transfer",
      slug: "college-transfer",
      summary:
        "Maximize your credits and minimize lost time with a transfer to a UCSG partner that fits your goals.",
      estTimeline: "6–10 weeks",
    };
  } else if (goal === "work") {
    base = {
      service: "CPT / OPT Guidance",
      slug: "cpt-opt",
      summary:
        "Day-1 CPT and STEM-OPT programs designed around real-world work authorization — keep your job while you study.",
      estTimeline: "4–8 weeks",
    };
  } else if (goal === "visa") {
    base = {
      service: "Visa & Immigration",
      slug: "visa-immigration",
      summary:
        "F1 visas, extensions, and status changes handled by trained, multilingual counselors — approved on the first try, ideally.",
      estTimeline: "3–8 weeks",
    };
  } else {
    base = {
      service: "Study in the USA",
      slug: "study-in-usa",
      summary:
        "End-to-end guidance to an affordable, well-ranked U.S. college with hybrid programs and real career pathways.",
      estTimeline: "8–16 weeks",
    };
  }

  // Tuition band from budget
  let estTuition: string;
  if (budget < 10) {
    estTuition = "$8,000 – $11,000 / yr";
  } else if (budget < 15) {
    estTuition = "$11,000 – $15,000 / yr";
  } else if (budget < 22) {
    estTuition = "$15,000 – $22,000 / yr";
  } else {
    estTuition = "$22,000+ / yr";
  }

  // Highlights depend on goal + english
  const highlights: string[] = [];
  if (goal === "work") highlights.push("Day-1 CPT eligible", "STEM-OPT track");
  if (goal === "transfer") highlights.push("Credit evaluation", "Seamless onboarding");
  if (goal === "visa") highlights.push("First-try F1 focus", "Status change support");
  if (goal === "study") highlights.push("Hybrid programs", "Scholarship track");
  if (english === "beginner") highlights.push("Pathway English first");
  if (budget < 12) highlights.push("Low-tuition partners");

  // Pathway note if English is beginner
  const pathwayNote =
    english === "beginner"
      ? "Your English level suggests a pathway or ESL program first — we'll bundle that in."
      : undefined;

  return { ...base, estTuition, highlights, pathwayNote };
}

export function PathFinder() {
  const reduced = useReducedMotion();
  const [goal, setGoal] = React.useState<Goal>("study");
  const [budget, setBudget] = React.useState(15); // $k/yr
  const [english, setEnglish] = React.useState<EnglishLevel>("intermediate");

  const result = React.useMemo(
    () => recommend(goal, budget, english),
    [goal, budget, english]
  );

  const reset = () => {
    setGoal("study");
    setBudget(15);
    setEnglish("intermediate");
  };

  return (
    <section
      id="pathfinder"
      aria-label="Plan your U.S. education path"
      className="relative overflow-hidden border-y border-border/40 bg-secondary/30 py-10 sm:py-12"
    >
      <div className="absolute inset-0 -z-10 grid-pattern opacity-30" />
      <div
        aria-hidden
        className="absolute -left-16 top-8 -z-10 h-56 w-56 rounded-full bg-primary/15 blur-3xl"
      />
      <div
        aria-hidden
        className="absolute -right-16 bottom-8 -z-10 h-56 w-56 rounded-full bg-accent/15 blur-3xl"
      />

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Heading */}
        <div className="mx-auto mb-6 max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-accent-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            Plan Your Path · 60 seconds
          </span>
          <h2 className="mt-4 font-serif text-2xl font-bold tracking-tight text-foreground sm:text-3xl md:text-4xl">
            Find your U.S. program fit
          </h2>
          <p className="mt-3 text-sm text-muted-foreground sm:text-base">
            Answer three quick questions. Get an instant recommendation and
            estimated tuition range — no signup required.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-[1.15fr_1fr] lg:gap-6">
          {/* INPUTS CARD */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="relative rounded-3xl border border-border/60 bg-card p-4 shadow-premium sm:p-5"
          >
            {/* Q1 — Goal */}
            <fieldset>
              <legend className="flex items-center gap-2 text-sm font-semibold text-foreground">
                <Target className="h-4 w-4 text-primary" />
                1. What&apos;s your main goal?
              </legend>
              <div
                role="radiogroup"
                aria-label="Your main goal"
                className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-4"
              >
                {GOALS.map((g) => {
                  const active = goal === g.key;
                  return (
                    <button
                      key={g.key}
                      type="button"
                      role="radio"
                      aria-checked={active}
                      onClick={() => setGoal(g.key)}
                      className={cn(
                        "group flex flex-col items-center gap-1.5 rounded-xl border p-3 text-center transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                        active
                          ? "border-primary bg-primary/10 shadow-sm"
                          : "border-border/60 bg-background/50 hover:border-primary/40 hover:bg-primary/5"
                      )}
                    >
                      <span
                        className={cn(
                          "flex h-9 w-9 items-center justify-center rounded-lg transition-colors",
                          active
                            ? "bg-primary text-primary-foreground"
                            : "bg-primary/10 text-primary group-hover:bg-primary/15"
                        )}
                      >
                        <g.icon className="h-4 w-4" />
                      </span>
                      <span
                        className={cn(
                          "text-xs font-bold leading-tight",
                          active ? "text-primary" : "text-foreground"
                        )}
                      >
                        {g.label}
                      </span>
                      <span className="text-[10px] leading-tight text-muted-foreground">
                        {g.blurb}
                      </span>
                    </button>
                  );
                })}
              </div>
            </fieldset>

            {/* Q2 — Budget slider */}
            <fieldset className="mt-4">
              <legend className="flex items-center justify-between text-sm font-semibold text-foreground">
                <span className="flex items-center gap-2">
                  <Wallet className="h-4 w-4 text-primary" />
                  2. Annual tuition budget
                </span>
                <span className="rounded-full bg-primary/10 px-2.5 py-0.5 font-serif text-base font-bold text-primary tabular-nums">
                  ${budget},000
                  <span className="ml-0.5 text-xs font-medium text-muted-foreground">
                    /yr
                  </span>
                </span>
              </legend>
              <div className="mt-3 px-1">
                <Slider
                  value={[budget]}
                  onValueChange={(v) => setBudget(v[0] ?? 15)}
                  min={6}
                  max={35}
                  step={1}
                  aria-label="Annual tuition budget in thousands of US dollars"
                  className="mt-2"
                />
                <div className="mt-1.5 flex justify-between text-[10px] font-medium uppercase tracking-wide text-muted-foreground">
                  <span>$6k</span>
                  <span>$20k</span>
                  <span>$35k+</span>
                </div>
              </div>
            </fieldset>

            {/* Q3 — English level */}
            <fieldset className="mt-4">
              <legend className="flex items-center gap-2 text-sm font-semibold text-foreground">
                <Languages className="h-4 w-4 text-primary" />
                3. Your English level
              </legend>
              <div
                role="radiogroup"
                aria-label="English proficiency level"
                className="mt-3 grid grid-cols-3 gap-2"
              >
                {ENGLISH_LEVELS.map((lvl) => {
                  const active = english === lvl.key;
                  return (
                    <button
                      key={lvl.key}
                      type="button"
                      role="radio"
                      aria-checked={active}
                      onClick={() => setEnglish(lvl.key)}
                      className={cn(
                        "rounded-xl border px-3 py-2.5 text-xs font-bold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                        active
                          ? "border-primary bg-primary/10 text-primary shadow-sm"
                          : "border-border/60 bg-background/50 text-foreground/80 hover:border-primary/40 hover:text-primary"
                      )}
                    >
                      {lvl.label}
                    </button>
                  );
                })}
              </div>
            </fieldset>

            <button
              type="button"
              onClick={reset}
              className="mt-4 inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              <RotateCcw className="h-3 w-3" />
              Reset
            </button>
          </motion.div>

          {/* RESULT CARD */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex flex-col overflow-hidden rounded-3xl border border-primary/30 bg-gradient-to-br from-primary/10 via-card to-card p-4 shadow-premium sm:p-5"
          >
            <div
              aria-hidden
              className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-accent/20 blur-2xl"
            />
            <div className="relative">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                <Sparkles className="h-3.5 w-3.5" />
                Your recommended path
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={`${result.service}-${result.estTuition}`}
                  initial={reduced ? { opacity: 0 } : { opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={reduced ? { opacity: 0 } : { opacity: 0, y: -8 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                >
                  <h3 className="mt-2 font-serif text-2xl font-bold tracking-tight text-foreground">
                    {result.service}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {result.summary}
                  </p>

                  {/* Estimate chips */}
                  <div className="mt-3 grid grid-cols-2 gap-2.5">
                    <div className="rounded-xl border border-border/60 bg-background/60 p-3">
                      <div className="text-[10px] font-semibold uppercase tracking-wide text-muted-foreground">
                        Est. tuition
                      </div>
                      <div className="mt-0.5 font-serif text-base font-bold text-foreground">
                        {result.estTuition}
                      </div>
                    </div>
                    <div className="rounded-xl border border-border/60 bg-background/60 p-3">
                      <div className="text-[10px] font-semibold uppercase tracking-wide text-muted-foreground">
                        Est. timeline
                      </div>
                      <div className="mt-0.5 font-serif text-base font-bold text-foreground">
                        {result.estTimeline}
                      </div>
                    </div>
                  </div>

                  {/* Highlights */}
                  <ul className="mt-3 flex flex-wrap gap-1.5">
                    {result.highlights.map((h) => (
                      <li
                        key={h}
                        className="inline-flex items-center gap-1 rounded-full border border-primary/30 bg-primary/5 px-2.5 py-1 text-xs font-semibold text-primary"
                      >
                        <CheckCircle2 className="h-3 w-3" />
                        {h}
                      </li>
                    ))}
                  </ul>

                  {result.pathwayNote && (
                    <p className="mt-2.5 flex items-start gap-1.5 rounded-lg bg-accent/10 p-2.5 text-xs font-medium text-accent-foreground">
                      <BookOpen className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent" />
                      {result.pathwayNote}
                    </p>
                  )}
                </motion.div>
              </AnimatePresence>

              {/* CTA row */}
              <div className="mt-4 flex flex-col gap-2.5 sm:flex-row">
                <Button
                  asChild
                  size="sm"
                  className="h-11 flex-1 rounded-full bg-primary px-5 text-sm font-bold shadow-premium hover:shadow-lg"
                >
                  <Link href="/?view=contact">
                    <PlaneTakeoff className="h-4 w-4" />
                    Book a Free Call
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="sm"
                  variant="outline"
                  className="h-11 rounded-full border-border/70 px-5 text-sm font-semibold"
                >
                  <Link href={`/?view=${result.slug}`}>
                    Explore service
                  </Link>
                </Button>
              </div>
              <p className="mt-2 text-center text-[11px] text-muted-foreground sm:text-left">
                Estimates only. A counselor confirms your exact match.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default PathFinder;
