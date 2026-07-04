"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin, Building2, ArrowRight, GraduationCap } from "lucide-react";
import { FEATURED_UNIVERSITIES, type FeaturedUniversity } from "@/lib/data";
import {
  Reveal,
  StaggerGroup,
  staggerItem,
} from "@/components/animation";
import { cn } from "@/lib/utils";

const TAG_STYLES: Record<FeaturedUniversity["tag"], string> = {
  "Day-1 CPT": "border-accent/40 bg-accent/10 text-accent-foreground",
  Hybrid: "border-primary/40 bg-primary/10 text-primary",
  "STEM OPT": "border-primary/40 bg-primary/10 text-primary",
  "Scholarship Track": "border-accent/40 bg-accent/10 text-accent-foreground",
};

/**
 * Featured Partner Universities — a compact, scannable card grid (Shorelight-
 * style: name + location + starting tuition + program-fit tag). Sits right
 * after the Partners marquee to turn "we partner with 120+ schools" into
 * concrete, credible proof points.
 */
export function FeaturedUniversities() {
  return (
    <section
      aria-label="Featured partner universities"
      className="relative bg-background py-10 sm:py-12"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-5 flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-end">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">
              A closer look
            </span>
            <h3 className="mt-1.5 font-serif text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Featured partner universities
            </h3>
            <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
              Real partners. Real starting tuition. Real program-fit tags —
              the kind of detail most agencies hide behind a logo wall.
            </p>
          </div>
          <Reveal>
            <Link
              href="/?view=services"
              className="group inline-flex items-center gap-1.5 rounded-full border border-border/70 bg-background/60 px-4 py-2 text-xs font-semibold text-foreground transition-colors hover:border-primary/40 hover:text-primary"
            >
              See all services
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </Reveal>
        </div>

        <StaggerGroup className="grid grid-cols-2 gap-3.5 sm:gap-4 lg:grid-cols-4">
          {FEATURED_UNIVERSITIES.map((u) => (
            <motion.article
              key={u.name}
              variants={staggerItem}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 300, damping: 22 }}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-border/60 bg-card p-4 shadow-premium sm:p-5"
            >
              {/* Top: emblem + tag */}
              <div className="flex items-start justify-between gap-2">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Building2 className="h-5 w-5" />
                </span>
                <span
                  className={cn(
                    "inline-flex items-center rounded-full border px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide",
                    TAG_STYLES[u.tag]
                  )}
                >
                  {u.tag}
                </span>
              </div>

              {/* Name + location */}
              <h4 className="mt-3 font-serif text-base font-bold leading-tight text-foreground sm:text-lg">
                {u.name}
              </h4>
              <div className="mt-1 flex items-center gap-1 text-xs font-medium text-muted-foreground">
                <MapPin className="h-3 w-3 text-primary" />
                {u.location}
              </div>

              {/* Blurb */}
              <p className="mt-2.5 text-xs leading-relaxed text-muted-foreground/90">
                {u.blurb}
              </p>

              {/* Tuition footer */}
              <div className="mt-auto pt-3">
                <div className="rounded-lg border border-border/60 bg-background/60 px-2.5 py-1.5">
                  <div className="text-[9px] font-semibold uppercase tracking-wide text-muted-foreground">
                    Starting tuition
                  </div>
                  <div className="font-serif text-sm font-bold text-foreground">
                    {u.tuitionFrom}
                  </div>
                </div>
              </div>

              {/* Hover accent line */}
              <span
                aria-hidden
                className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-gradient-to-r from-primary to-accent transition-transform duration-300 group-hover:scale-x-100"
              />
            </motion.article>
          ))}
        </StaggerGroup>

        {/* Footnote */}
        <div className="mt-5 flex items-center justify-center gap-1.5 text-center text-[11px] text-muted-foreground">
          <GraduationCap className="h-3.5 w-3.5 text-primary" />
          Tuition figures are representative starting rates for international
          graduate students. Your counselor confirms the exact figure.
        </div>
      </div>
    </section>
  );
}

export default FeaturedUniversities;
