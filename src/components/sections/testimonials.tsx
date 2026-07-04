"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Star, Quote, Globe2 } from "lucide-react";
import { TESTIMONIALS } from "@/lib/data";
import { SectionHeading, StaggerGroup, staggerItem } from "@/components/animation";

// Map origin city → flag emoji for the reviews grid.
const FLAG_BY_ORIGIN: Record<string, string> = {
  Dhaka: "🇧🇩",
  Chittagong: "🇧🇩",
  Kathmandu: "🇳🇵",
  Lagos: "🇳🇬",
  Shanghai: "🇨🇳",
  Dubai: "🇦🇪",
};

function flagFor(location: string): string {
  const city = location.split("→")[0]?.trim().split(",")[0]?.trim() ?? "";
  return FLAG_BY_ORIGIN[city] ?? "🌍";
}

export function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative overflow-hidden py-12 sm:py-16"
    >
      <div className="absolute inset-0 -z-10 mesh-bg opacity-40" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Student Reviews"
          title={
            <>
              Real journeys.{" "}
              <span className="text-gradient-emerald">Real success.</span>
            </>
          }
          description="Thousands of students have trusted UCSG with their U.S. education. Here's what a few of them have to say — all verified 5-star reviews."
        />

        <StaggerGroup className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <motion.article
              key={t.name}
              variants={staggerItem}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 300, damping: 22 }}
              className="group relative flex flex-col rounded-2xl border border-border/60 bg-card p-6 shadow-premium"
            >
              <Quote className="absolute right-5 top-5 h-10 w-10 text-accent/15 transition-colors group-hover:text-accent/30" />

              {/* 5 stars */}
              <div className="flex gap-1" aria-label="5 out of 5 stars">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-accent text-accent"
                  />
                ))}
              </div>

              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-foreground/90">
                “{t.quote}”
              </blockquote>

              <div className="mt-5 flex items-center gap-3 border-t border-border/60 pt-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary/70 font-serif text-sm font-bold text-primary-foreground">
                  {t.initials}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="truncate font-bold text-foreground">
                    {t.name}
                  </div>
                  <div className="truncate text-xs text-muted-foreground">
                    {t.role}
                  </div>
                </div>
                <span
                  className="text-xl"
                  aria-label={`From ${t.location}`}
                  title={t.location}
                >
                  {flagFor(t.location)}
                </span>
              </div>

              <div className="mt-3 flex items-center gap-1.5 text-xs font-medium text-primary">
                <Globe2 className="h-3 w-3" />
                {t.location}
              </div>
            </motion.article>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
