"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Check, X, Minus, ArrowRight, ShieldCheck } from "lucide-react";
import { COMPARISON } from "@/lib/data";
import { Reveal } from "@/components/animation";
import { cn } from "@/lib/utils";

/**
 * "Why UCSG vs others" — a compact 3-row comparison teaser that surfaces
 * the dedicated Why Us page. UCSG column is highlighted; the typical-agency
 * and DIY columns show what students give up by going elsewhere.
 *
 * Inspired by competitors that lean on success rates — UCSG's edge is the
 * veteran-led, onshore, CPT/OPT-niche differentiation, so we put that
 * head-to-head instead of generic numbers.
 */
export function Comparison() {
  return (
    <section
      aria-label="Why UCSG compared to other options"
      className="relative overflow-hidden py-10 sm:py-12"
    >
      <div className="absolute inset-0 -z-10 grid-pattern opacity-20" />
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="mb-5 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-accent-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            The UCSG Difference
          </span>
          <h2 className="mt-4 font-serif text-2xl font-bold tracking-tight text-foreground sm:text-3xl md:text-4xl">
            Why students choose UCSG
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-muted-foreground sm:text-base">
            A quick head-to-head against the other paths to a U.S. education.
          </p>
        </div>

        <Reveal>
          {/* Desktop / tablet table */}
          <div className="hidden overflow-hidden rounded-3xl border border-border/60 shadow-premium sm:block">
            {/* Header row */}
            <div className="grid grid-cols-[1.6fr_1fr_1fr_1fr] bg-secondary/40">
              <div className="px-5 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                Factor
              </div>
              <div className="relative border-l border-primary/30 bg-primary/5 px-5 py-3">
                <div className="flex items-center gap-1.5 font-serif text-sm font-bold text-primary">
                  <ShieldCheck className="h-4 w-4" />
                  UCSG
                </div>
              </div>
              <div className="border-l border-border/60 px-5 py-3 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                Typical agency
              </div>
              <div className="border-l border-border/60 px-5 py-3 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                DIY
              </div>
            </div>

            {/* Rows */}
            {COMPARISON.map((row, i) => (
              <div
                key={row.factor}
                className={cn(
                  "grid grid-cols-[1.6fr_1fr_1fr_1fr] border-t border-border/60",
                  i % 2 === 1 && "bg-background/40"
                )}
              >
                <div className="px-5 py-3 text-sm font-semibold text-foreground">
                  {row.factor}
                </div>
                <div className="relative border-l border-primary/30 bg-primary/5 px-5 py-3">
                  <div className="flex items-start gap-1.5 text-sm font-medium text-foreground">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span>{row.ucsg}</span>
                  </div>
                </div>
                <div className="border-l border-border/60 px-5 py-3">
                  <div className="flex items-start gap-1.5 text-sm text-muted-foreground">
                    <Minus className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground/60" />
                    <span>{row.typicalAgency}</span>
                  </div>
                </div>
                <div className="border-l border-border/60 px-5 py-3">
                  <div className="flex items-start gap-1.5 text-sm text-muted-foreground">
                    <X className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground/60" />
                    <span>{row.diy}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile stacked cards */}
          <div className="space-y-3 sm:hidden">
            {COMPARISON.map((row) => (
              <div
                key={row.factor}
                className="rounded-2xl border border-border/60 bg-card p-4 shadow-premium"
              >
                <div className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  {row.factor}
                </div>
                <div className="mt-2.5 space-y-1.5">
                  <div className="flex items-start gap-1.5 rounded-lg bg-primary/10 px-2.5 py-1.5">
                    <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" />
                    <div className="text-xs">
                      <span className="font-bold text-primary">UCSG:</span>{" "}
                      <span className="text-foreground">{row.ucsg}</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-1.5 px-2.5 py-1">
                    <Minus className="mt-0.5 h-3.5 w-3.5 shrink-0 text-muted-foreground/60" />
                    <div className="text-xs text-muted-foreground">
                      <span className="font-semibold">Agency:</span>{" "}
                      {row.typicalAgency}
                    </div>
                  </div>
                  <div className="flex items-start gap-1.5 px-2.5 py-1">
                    <X className="mt-0.5 h-3.5 w-3.5 shrink-0 text-muted-foreground/60" />
                    <div className="text-xs text-muted-foreground">
                      <span className="font-semibold">DIY:</span> {row.diy}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        {/* CTA */}
        <Reveal delay={0.1}>
          <div className="mt-5 text-center">
            <Link
              href="/?view=why-us"
              className="group inline-flex items-center gap-1.5 rounded-full border border-border/70 bg-background/60 px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:border-primary/40 hover:text-primary"
            >
              See the full UCSG difference
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default Comparison;
