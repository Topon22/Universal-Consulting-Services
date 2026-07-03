"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Building2, GraduationCap, ShieldCheck, PlaneTakeoff } from "lucide-react";
import { PARTNER_UNIVERSITIES } from "@/lib/data";

/**
 * Norrspark-style dual-row partner marquee.
 * Top row scrolls left, bottom row scrolls right (reverse), both pause on
 * hover and use edge-fade masks. Includes university names + a few
 * tech/method tags to match Norrspark's "tech stack" ticker.
 */

// A few method/credential tags to mix in alongside universities (Norrspark
// shows tech-stack tags like "Shopify • WooCommerce • Klarna" — for UCSG
// these are program types & credentials).
const METHOD_TAGS = [
  { label: "Day-1 CPT", icon: PlaneTakeoff },
  { label: "Hybrid Programs", icon: GraduationCap },
  { label: "STEM OPT", icon: ShieldCheck },
  { label: "F1 Visa Pathway", icon: Building2 },
  { label: "Scholarship Track", icon: GraduationCap },
  { label: "Pathway English", icon: ShieldCheck },
];

type Item = { label: string; icon: React.ComponentType<{ className?: string }> };

const topRow: Item[] = [
  ...PARTNER_UNIVERSITIES.slice(0, 6).map((u) => ({
    label: u,
    icon: Building2,
  })),
  METHOD_TAGS[0],
  METHOD_TAGS[1],
];

const bottomRow: Item[] = [
  ...PARTNER_UNIVERSITIES.slice(4).map((u) => ({
    label: u,
    icon: Building2,
  })),
  METHOD_TAGS[2],
  METHOD_TAGS[3],
  METHOD_TAGS[4],
  METHOD_TAGS[5],
];

function Row({
  items,
  reverse,
  speedClass,
}: {
  items: Item[];
  reverse: boolean;
  speedClass: string;
}) {
  // Duplicate the items enough times to fill the screen for seamless loop.
  const doubled = [...items, ...items, ...items, ...items];
  return (
    <div className="marquee-pause relative flex overflow-hidden">
      {/* Edge fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-background to-transparent sm:w-32" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-background to-transparent sm:w-32" />
      <div className={`flex w-max ${speedClass} gap-4`}>
        {doubled.map((item, i) => (
          <div
            key={`${item.label}-${i}`}
            className="flex items-center gap-2.5 rounded-xl border border-border/60 bg-background/70 px-5 py-3.5 shadow-sm transition-colors hover:border-primary/40"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10">
              <item.icon className="h-4 w-4 text-primary" />
            </span>
            <span className="whitespace-nowrap font-serif text-base font-medium text-foreground">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function Partners() {
  return (
    <section
      aria-label="Partner universities"
      className="relative border-y border-border/40 bg-secondary/20 py-14"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="mb-8 flex flex-col items-center gap-2 text-center"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">
            Trusted Institutional Partners
          </span>
          <h3 className="font-serif text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            120+ U.S. Colleges & Universities
          </h3>
          <p className="max-w-xl text-sm text-muted-foreground">
            From Harrisburg to Trine to Westcliff — we've built direct
            relationships with institutions that offer the CPT, OPT, and hybrid
            programs international students need.
          </p>
        </motion.div>
      </div>

      <div className="flex flex-col gap-3">
        <Row
          items={topRow}
          reverse={false}
          speedClass="animate-marquee-slow"
        />
        <Row
          items={bottomRow}
          reverse
          speedClass="animate-marquee-slow-rev"
        />
      </div>
    </section>
  );
}
