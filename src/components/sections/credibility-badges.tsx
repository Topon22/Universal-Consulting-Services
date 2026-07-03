"use client";

import * as React from "react";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Users,
  Building2,
  PlaneTakeoff,
  Award,
  Globe2,
  Trophy,
  Star,
} from "lucide-react";

/**
 * Slim credibility badge strip — Norrspark-style award band.
 * Static pills (with subtle motion) listing UCSG credentials.
 * Designed to sit just under the hero as a slim full-width band.
 */
const BADGES = [
  { icon: ShieldCheck, label: "ICEF Certified" },
  { icon: Users, label: "5,000+ Students Placed" },
  { icon: Building2, label: "120+ Partner Universities" },
  { icon: PlaneTakeoff, label: "F1 Visa Experts" },
  { icon: Globe2, label: "40+ Countries Reached" },
  { icon: Award, label: "U.S. Army Veteran-Led" },
  { icon: Trophy, label: "98% Satisfaction Rate" },
  { icon: Star, label: "4.9/5 Student Reviews" },
];

export function CredibilityBadges() {
  return (
    <section
      aria-label="UCSG credentials"
      className="relative border-y border-border/40 bg-secondary/30 py-5"
    >
      <div className="absolute inset-0 -z-10 grid-pattern opacity-20" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3"
        >
          {BADGES.map((b, i) => (
            <motion.span
              key={b.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.4,
                delay: i * 0.05,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ y: -2 }}
              className="inline-flex items-center gap-1.5 rounded-full border border-border/60 bg-background/60 px-3 py-1.5 text-xs font-semibold text-foreground/80 backdrop-blur transition-colors hover:border-primary/40 hover:text-primary"
            >
              <b.icon className="h-3.5 w-3.5 text-accent" />
              {b.label}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default CredibilityBadges;
