"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { WHY_US } from "@/lib/data";
import {
  SectionHeading,
  StaggerGroup,
  staggerItem,
  Reveal,
} from "@/components/animation";

export function WhyUs() {
  return (
    <section
      id="why-us"
      className="relative overflow-hidden bg-secondary/30 py-12 sm:py-16"
    >
      <div className="absolute inset-0 -z-10 grid-pattern opacity-40" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="How Are We Different"
          title={
            <>
              Built different.{" "}
              <span className="text-gradient-emerald">Built for you.</span>
            </>
          }
          description="We're not just another agency. UCSG was engineered from the ground up to put students first — with proprietary tooling, onshore support, and counselors who genuinely care."
        />

        <StaggerGroup className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {WHY_US.map((feature, i) => (
            <motion.article
              key={feature.title}
              variants={staggerItem}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 300, damping: 22 }}
              className="group relative overflow-hidden rounded-2xl border border-border/60 bg-card p-6 shadow-premium"
            >
              {/* Number watermark */}
              <span className="pointer-events-none absolute right-4 top-2 font-serif text-6xl font-bold text-foreground/5">
                0{i + 1}
              </span>
              <div className="relative">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary/15 to-accent/15 text-primary transition-all duration-500 group-hover:from-primary group-hover:to-primary/70 group-hover:text-primary-foreground">
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-serif text-lg font-bold text-foreground">
                  {feature.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                  {feature.description}
                </p>
              </div>
              {/* Bottom accent line */}
              <div className="mt-6 h-px w-full bg-gradient-to-r from-accent/50 via-primary/20 to-transparent" />
            </motion.article>
          ))}
        </StaggerGroup>

        {/* Mission & Vision row */}
        <div className="mt-16">
          <Reveal className="text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-accent-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              Mission &amp; Vision
            </span>
            <h3 className="mx-auto mt-5 max-w-2xl font-serif text-2xl font-bold tracking-tight text-foreground sm:text-4xl">
              Three commitments that shape every decision we make
            </h3>
          </Reveal>

          <StaggerGroup className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-3">
            {[
              {
                icon: WHY_US[1].icon,
                title: "Partnerships of Mutual Benefit",
                description:
                  "Build an extensive network of institutional partnerships grounded in mutual benefits and long-term trust.",
              },
              {
                icon: WHY_US[2].icon,
                title: "Continual Innovation",
                description:
                  "Continually develop new ideas and projects to improve and surpass our partners' evolving needs.",
              },
              {
                icon: WHY_US[0].icon,
                title: "Students & Families First",
                description:
                  "Always put the students and their families first — their success is the measure of ours.",
              },
            ].map((m) => (
              <motion.div
                key={m.title}
                variants={staggerItem}
                className="relative overflow-hidden rounded-2xl border border-border/60 bg-gradient-to-br from-card to-secondary/40 p-7 shadow-sm"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/15 text-accent-foreground">
                  <m.icon className="h-5 w-5" />
                </div>
                <h4 className="mt-4 font-serif text-lg font-bold text-foreground">
                  {m.title}
                </h4>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {m.description}
                </p>
              </motion.div>
            ))}
          </StaggerGroup>
        </div>
      </div>
    </section>
  );
}
