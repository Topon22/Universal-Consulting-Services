"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Building2 } from "lucide-react";
import { PARTNER_UNIVERSITIES } from "@/lib/data";

export function Partners() {
  const doubled = [...PARTNER_UNIVERSITIES, ...PARTNER_UNIVERSITIES];
  return (
    <section
      aria-label="Partner universities"
      className="relative border-y border-border/50 bg-secondary/30 py-12"
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
          <h3 className="font-serif text-xl font-semibold text-foreground sm:text-2xl">
            120+ U.S. Colleges & Universities
          </h3>
        </motion.div>
      </div>

      {/* Marquee */}
      <div className="marquee-pause relative overflow-hidden">
        {/* Edge fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent" />
        <div className="flex w-max animate-marquee gap-4">
          {doubled.map((name, i) => (
            <div
              key={`${name}-${i}`}
              className="flex items-center gap-2.5 rounded-xl border border-border/60 bg-background/70 px-5 py-3.5 shadow-sm"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10">
                <Building2 className="h-4 w-4 text-primary" />
              </span>
              <span className="whitespace-nowrap font-serif text-base font-medium text-foreground">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
