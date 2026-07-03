"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";
import Link from "next/link";
import { SERVICES } from "@/lib/data";
import { Reveal } from "@/components/animation";
import { MagneticButton } from "@/components/interactive/magnetic-button";
import { cn } from "@/lib/utils";

/**
 * Norrspark-inspired Services section.
 *
 * Each service is rendered as a FULL-WIDTH horizontal marquee row that
 * scrolls infinitely, alternating direction for visual rhythm. On hover the
 * row pauses, the service name highlights in emerald, and an arrow CTA
 * slides in. Below the marquees is a "Start your journey" CTA strip.
 */
function ServiceRow({
  index,
  icon: Icon,
  title,
  description,
  features,
  tag,
}: {
  index: number;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  features: string[];
  tag?: string;
}) {
  // Alternate direction per row for visual rhythm.
  const reverse = index % 2 === 1;
  // Alternate speed slightly per row so they don't all sync.
  const speedClass = reverse
    ? index % 3 === 0
      ? "animate-marquee-rev"
      : index % 3 === 1
        ? "animate-marquee-fast-rev"
        : "animate-marquee-slow-rev"
    : index % 3 === 0
      ? "animate-marquee"
      : index % 3 === 1
        ? "animate-marquee-fast"
        : "animate-marquee-slow";

  // Build the repeating content — the same row repeated enough times to
  // fill the screen and loop seamlessly when animated by -50%.
  const unit = (
    <div className="flex shrink-0 items-center gap-6 pr-6">
      {/* Service identity */}
      <div className="flex shrink-0 items-center gap-3">
        <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
          <Icon className="h-5 w-5" />
        </span>
        <span className="font-serif text-2xl font-bold tracking-tight text-foreground transition-colors group-hover:text-primary sm:text-3xl">
          {title}
        </span>
        {tag && (
          <span className="hidden rounded-full bg-accent/15 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-accent-foreground sm:inline-block">
            {tag}
          </span>
        )}
      </div>
      {/* Divider bullet */}
      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
      {/* Feature tags */}
      <div className="flex shrink-0 flex-wrap items-center gap-x-5 gap-y-1">
        {features.map((f) => (
          <span
            key={f}
            className="text-sm font-medium uppercase tracking-[0.15em] text-muted-foreground transition-colors group-hover:text-foreground/80"
          >
            {f}
          </span>
        ))}
      </div>
      {/* Inline description for the long marquee */}
      <span className="hidden max-w-md shrink-0 text-sm text-muted-foreground lg:inline-block">
        {description}
      </span>
      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
    </div>
  );

  // Duplicate the unit 4x — gives us enough horizontal content to loop.
  const content = (
    <div className="flex w-max items-center">
      {Array.from({ length: 4 }).map((_, i) => (
        <React.Fragment key={i}>{unit}</React.Fragment>
      ))}
    </div>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: (index % 4) * 0.05 }}
      className="group relative border-t border-border/40 first:border-t-0"
    >
      {/* Hover background wash */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-r from-transparent via-primary/[0.04] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
      />
      {/* Edge fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-background to-transparent sm:w-28" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-background to-transparent sm:w-28" />
      {/* Hover CTA — slides in from right */}
      <Link
        href="#contact"
        className="absolute right-4 top-1/2 z-20 hidden -translate-y-1/2 items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-xs font-bold uppercase tracking-wide text-primary-foreground opacity-0 shadow-premium transition-all duration-300 group-hover:opacity-100 lg:inline-flex"
        aria-label={`Start ${title} — free consultation`}
      >
        Start now
        <ArrowUpRight className="h-3.5 w-3.5" />
      </Link>

      {/* Marquee track */}
      <div
        className="marquee-pause relative flex overflow-hidden py-5"
        aria-label={`${title} — ${features.join(", ")}`}
      >
        <div className={cn("flex", speedClass)}>
          {content}
          {/* Duplicate for seamless loop */}
          {content}
        </div>
      </div>
    </motion.div>
  );
}

export function Services() {
  return (
    <section id="services" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-accent-foreground">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                What We Do
              </span>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-5 font-serif text-4xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-5xl md:text-6xl">
                Everything you need to{" "}
                <span className="text-gradient-emerald">study in the USA</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.16}>
            <p className="max-w-md text-base leading-relaxed text-muted-foreground">
              From your first consultation to landing on campus and beyond —
              UCSG delivers end-to-end guidance across admissions,
              scholarships, visas, and career pathways. Hover any row to pause.
            </p>
          </Reveal>
        </div>
      </div>

      {/* Full-width marquee rows */}
      <div className="mt-14 w-full border-y border-border/40 bg-secondary/20">
        {SERVICES.map((service, i) => (
          <ServiceRow
            key={service.title}
            index={i}
            icon={service.icon}
            title={service.title}
            description={service.description}
            features={service.features}
            tag={service.tag || undefined}
          />
        ))}
      </div>

      {/* Slim CTA strip after Services */}
      <div className="mx-auto mt-14 max-w-7xl px-4 sm:px-6">
        <Reveal>
          <div className="flex flex-col items-center justify-between gap-4 rounded-2xl border border-border/40 bg-card p-6 shadow-sm sm:flex-row sm:p-7">
            <div className="text-center sm:text-left">
              <h3 className="font-serif text-xl font-bold text-foreground sm:text-2xl">
                Not sure which service fits you?
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Book a free call — we'll match you in 15 minutes.
              </p>
            </div>
            <MagneticButton className="rounded-full">
              <Link
                href="#contact"
                className="inline-flex h-12 items-center gap-2 rounded-full bg-primary px-7 text-base font-bold text-primary-foreground shadow-premium transition-shadow hover:shadow-lg"
              >
                <Sparkles className="h-4 w-4" />
                Start your journey
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </MagneticButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
