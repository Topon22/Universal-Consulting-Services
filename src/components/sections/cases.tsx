"use client";

import * as React from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  animate,
  type PanInfo,
} from "framer-motion";
import {
  Star,
  Quote,
  ArrowRight,
  ArrowLeft,
  GripHorizontal,
  GraduationCap,
  Briefcase,
  Award,
  Plane,
} from "lucide-react";
import Link from "next/link";
import { Reveal } from "@/components/animation";
import { MagneticButton } from "@/components/interactive/magnetic-button";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { cn } from "@/lib/utils";

type Outcome =
  | "F1 Visa Approved"
  | "$15k Scholarship Won"
  | "Day-1 CPT Secured"
  | "Transfer Accepted"
  | "OPT Extension Approved"
  | "STEM OPT Approved";

type CaseStory = {
  name: string;
  flag: string;
  initials: string;
  origin: string;
  destination: string;
  program: string;
  outcome: Outcome;
  outcomeIcon: React.ComponentType<{ className?: string }>;
  quote: string;
  accent: string; // tailwind gradient classes
  rating: number;
};

const CASES: CaseStory[] = [
  {
    name: "Ayesha Rahman",
    flag: "🇧🇩",
    initials: "AR",
    origin: "Dhaka, Bangladesh",
    destination: "Wilmington, Delaware",
    program: "MS Information Systems · Harrisburg University",
    outcome: "F1 Visa Approved",
    outcomeIcon: Plane,
    quote:
      "From my first call to landing in Delaware — 11 weeks. UCSG matched me with a hybrid day-1 CPT program that fit my budget perfectly.",
    accent: "from-emerald-500/30 to-teal-700/30",
    rating: 5,
  },
  {
    name: "Mohammed Tanvir",
    flag: "🇧🇩",
    initials: "MT",
    origin: "Chittagong, Bangladesh",
    destination: "Houston, Texas",
    program: "BS Computer Science Transfer · Trine University",
    outcome: "Transfer Accepted",
    outcomeIcon: GraduationCap,
    quote:
      "I had 64 credits and was terrified of losing them. UCSG's CRM mapped every credit — I transferred with zero lost time.",
    accent: "from-amber-500/30 to-orange-700/30",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    flag: "🇳🇵",
    initials: "PS",
    origin: "Kathmandu, Nepal",
    destination: "New York, NY",
    program: "MBA · Monroe College",
    outcome: "$15k Scholarship Won",
    outcomeIcon: Award,
    quote:
      "The scholarship they secured covered nearly 40% of my MBA tuition. The counselors spoke my language — literally.",
    accent: "from-emerald-600/30 to-emerald-900/30",
    rating: 5,
  },
  {
    name: "Daniel Okoye",
    flag: "🇳🇬",
    initials: "DO",
    origin: "Lagos, Nigeria",
    destination: "San Jose, California",
    program: "MS Data Analytics · Westcliff University",
    outcome: "Day-1 CPT Secured",
    outcomeIcon: Briefcase,
    quote:
      "Day-1 CPT meant I could keep my remote SWE job while studying. UCSG knew exactly which programs qualified.",
    accent: "from-teal-500/30 to-cyan-800/30",
    rating: 5,
  },
  {
    name: "Ling Wei",
    flag: "🇨🇳",
    initials: "LW",
    origin: "Shanghai, China",
    destination: "Boston, Massachusetts",
    program: "Pathway → MS Cybersecurity · Merrimack College",
    outcome: "OPT Extension Approved",
    outcomeIcon: Award,
    quote:
      "Started in the pathway program, transitioned to a STEM-designated MS, then got my OPT extension approved. Full circle with UCSG.",
    accent: "from-amber-600/30 to-yellow-800/30",
    rating: 5,
  },
  {
    name: "Fatima Al-Sayed",
    flag: "🇦🇪",
    initials: "FA",
    origin: "Dubai, UAE",
    destination: "Daytona Beach, Florida",
    program: "BS Aviation · Daytona State College",
    outcome: "STEM OPT Approved",
    outcomeIcon: Plane,
    quote:
      "STEM OPT approved in 4 months. The onshore team handled every document — I just showed up to my interviews.",
    accent: "from-emerald-400/30 to-teal-800/30",
    rating: 5,
  },
];

const CARD_WIDTH = 380; // px
const CARD_GAP = 20; // px

export function Cases() {
  const reduced = useReducedMotion();
  const containerRef = React.useRef<HTMLDivElement>(null);
  const trackRef = React.useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const [maxDrag, setMaxDrag] = React.useState(0);
  const [atStart, setAtStart] = React.useState(true);
  const [atEnd, setAtEnd] = React.useState(false);

  // Compute drag bounds based on container/track widths.
  const recompute = React.useCallback(() => {
    const container = containerRef.current;
    const track = trackRef.current;
    if (!container || !track) return;
    const cw = container.clientWidth;
    const tw = track.scrollWidth;
    const m = Math.max(0, tw - cw);
    setMaxDrag(m);
    const current = x.get();
    setAtStart(current >= -4);
    setAtEnd(current <= -m + 4);
  }, [x]);

  React.useEffect(() => {
    recompute();
    const ro = new ResizeObserver(recompute);
    if (containerRef.current) ro.observe(containerRef.current);
    if (trackRef.current) ro.observe(trackRef.current);
    const unsub = x.on("change", (v) => {
      setAtStart(v >= -4);
      setAtEnd(v <= -maxDrag + 4);
    });
    return () => {
      ro.disconnect();
      unsub();
    };
  }, [recompute, x, maxDrag]);

  const onDragEnd = (_: unknown, info: PanInfo) => {
    // Snap to nearest card boundary for clean alignment.
    const current = x.get();
    const velocity = info.velocity.x;
    const stride = CARD_WIDTH + CARD_GAP;
    // Estimate intended position with a velocity nudge.
    const projected = current + velocity * 0.18;
    let nearestIndex = Math.round(-projected / stride);
    nearestIndex = Math.max(0, Math.min(CASES.length - 1, nearestIndex));
    let target = -nearestIndex * stride;
    // Clamp within drag bounds.
    target = Math.max(-maxDrag, Math.min(0, target));
    animate(x, target, {
      type: "spring",
      stiffness: 220,
      damping: 30,
    });
  };

  const go = (dir: -1 | 1) => {
    const stride = CARD_WIDTH + CARD_GAP;
    const current = x.get();
    const currentIndex = Math.round(-current / stride);
    const next = Math.max(0, Math.min(CASES.length - 1, currentIndex + dir));
    const target = Math.max(-maxDrag, Math.min(0, -next * stride));
    animate(x, target, {
      type: "spring",
      stiffness: 220,
      damping: 30,
    });
  };

  return (
    <section
      id="cases"
      className="relative overflow-hidden py-20 sm:py-28"
    >
      <div className="absolute inset-0 -z-10 mesh-bg opacity-40" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-accent-foreground">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                Success Stories
              </span>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-5 font-serif text-4xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-5xl md:text-6xl">
                Real students.{" "}
                <span className="text-gradient-emerald">Real outcomes.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
                Drag the cards to explore six UCSG journeys — visas approved,
                scholarships won, CPT secured. Each one started with a free
                call.
              </p>
            </Reveal>
          </div>
          <Reveal delay={0.2}>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => go(-1)}
                disabled={atStart}
                aria-label="Previous case"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-border/70 bg-background/60 text-foreground transition-all hover:border-primary/40 hover:text-primary disabled:cursor-not-allowed disabled:opacity-40"
              >
                <ArrowLeft className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={() => go(1)}
                disabled={atEnd}
                aria-label="Next case"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-border/70 bg-background/60 text-foreground transition-all hover:border-primary/40 hover:text-primary disabled:cursor-not-allowed disabled:opacity-40"
              >
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Draggable carousel */}
      <div
        ref={containerRef}
        className="relative mt-12 w-full overflow-hidden"
        style={{ touchAction: "pan-y" }}
      >
        {/* Edge fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-background to-transparent sm:w-24" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-background to-transparent sm:w-24" />

        {/* Drag hint */}
        <div className="mb-3 ml-4 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground sm:ml-6">
          <GripHorizontal className="h-3.5 w-3.5" />
          Drag to explore
          <ArrowRight className="h-3 w-3" />
        </div>

        <motion.div
          ref={trackRef}
          drag={reduced ? false : "x"}
          style={{ x }}
          dragConstraints={{ left: -maxDrag, right: 0 }}
          dragElastic={0.08}
          dragMomentum={false}
          onDragEnd={onDragEnd}
          className="flex cursor-grab gap-5 px-4 active:cursor-grabbing sm:px-6"
        >
          {CASES.map((c, i) => (
            <CaseCard key={c.name} story={c} index={i} />
          ))}
        </motion.div>
      </div>

      {/* CTA after cases */}
      <div className="mx-auto mt-14 max-w-7xl px-4 sm:px-6">
        <Reveal>
          <div className="flex flex-col items-center justify-between gap-4 rounded-2xl border border-border/40 bg-card p-6 shadow-sm sm:flex-row sm:p-7">
            <div className="text-center sm:text-left">
              <h3 className="font-serif text-xl font-bold text-foreground sm:text-2xl">
                Your story could be next.
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Book a free consultation — multilingual counselors, 24h reply.
              </p>
            </div>
            <MagneticButton className="rounded-full">
              <Link
                href="#contact"
                className="inline-flex h-12 items-center gap-2 rounded-full bg-primary px-7 text-base font-bold text-primary-foreground shadow-premium transition-shadow hover:shadow-lg"
              >
                Start your journey
                <ArrowRight className="h-4 w-4" />
              </Link>
            </MagneticButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function CaseCard({ story, index }: { story: CaseStory; index: number }) {
  const OutcomeIcon = story.outcomeIcon;
  return (
    <motion.article
      style={{ width: CARD_WIDTH }}
      className="group relative shrink-0 overflow-hidden rounded-2xl border border-border/60 bg-card shadow-premium"
      data-tilt
    >
      {/* Header — gradient + initial avatar */}
      <div
        className={cn(
          "relative h-32 overflow-hidden bg-gradient-to-br",
          story.accent
        )}
      >
        <div className="absolute inset-0 grid-pattern opacity-25" />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
        {/* Initial avatar */}
        <div className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-4 border-background/80 bg-gradient-to-br from-accent to-accent/70 font-serif text-2xl font-bold text-accent-foreground shadow-lg">
          {story.initials}
        </div>
        {/* Index badge */}
        <span className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-full bg-background/80 px-2 py-1 text-[10px] font-bold uppercase tracking-wide text-primary backdrop-blur">
          0{index + 1} / 0{CASES.length}
        </span>
        {/* Flag */}
        <span className="absolute right-3 top-3 text-2xl" aria-hidden>
          {story.flag}
        </span>
      </div>

      {/* Body */}
      <div className="p-5">
        <div className="flex items-center justify-between gap-2">
          <h3 className="font-serif text-lg font-bold text-foreground">
            {story.name}
          </h3>
          <div className="flex" aria-label={`${story.rating} out of 5 stars`}>
            {Array.from({ length: story.rating }).map((_, i) => (
              <Star key={i} className="h-3.5 w-3.5 fill-accent text-accent" />
            ))}
          </div>
        </div>
        <div className="mt-1 text-xs font-medium text-muted-foreground">
          {story.origin} → {story.destination}
        </div>

        {/* Outcome badge */}
        <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1.5 text-xs font-bold uppercase tracking-wide text-primary">
          <OutcomeIcon className="h-3.5 w-3.5" />
          {story.outcome}
        </div>

        <div className="mt-4 flex items-start gap-2">
          <Quote className="mt-1 h-4 w-4 shrink-0 text-accent/60" />
          <p className="text-sm italic leading-relaxed text-foreground/90">
            “{story.quote}”
          </p>
        </div>

        <div className="mt-4 border-t border-border/60 pt-3">
          <div className="text-[10px] font-semibold uppercase tracking-wide text-muted-foreground">
            Program
          </div>
          <div className="mt-0.5 text-sm font-bold text-foreground">
            {story.program}
          </div>
        </div>
      </div>
    </motion.article>
  );
}
