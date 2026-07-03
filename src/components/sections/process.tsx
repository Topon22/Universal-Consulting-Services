"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { PROCESS } from "@/lib/data";
import { SectionHeading, Reveal } from "@/components/animation";

export function Process() {
  return (
    <section id="process" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="How We Work"
          title={
            <>
              Your journey from{" "}
              <span className="text-gradient-emerald">application to arrival</span>
            </>
          }
          description="A proven four-step process that turns the dream of studying in the U.S. into a clear, supported, and transparent path forward."
        />

        <div className="relative mt-20">
          {/* Connecting line */}
          <div className="absolute left-0 right-0 top-9 hidden h-px bg-gradient-to-r from-transparent via-border to-transparent lg:block" />
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1.4, ease: "easeInOut" }}
            style={{ transformOrigin: "left" }}
            className="absolute left-0 right-0 top-9 hidden h-0.5 bg-gradient-to-r from-primary via-accent to-primary lg:block"
          />

          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {PROCESS.map((step, i) => (
              <Reveal
                key={step.step}
                delay={i * 0.12}
                className="relative text-center lg:text-left"
              >
                {/* Node */}
                <div className="relative mx-auto flex h-[72px] w-[72px] items-center justify-center lg:mx-0">
                  <motion.div
                    whileHover={{ scale: 1.08, rotate: 4 }}
                    transition={{ type: "spring", stiffness: 300, damping: 18 }}
                    className="relative flex h-16 w-16 items-center justify-center rounded-2xl border border-border/60 bg-card shadow-premium"
                  >
                    <step.icon className="h-7 w-7 text-primary" />
                    <span className="absolute -right-2 -top-2 flex h-7 w-7 items-center justify-center rounded-full bg-accent text-xs font-bold text-accent-foreground shadow-md">
                      {i + 1}
                    </span>
                  </motion.div>
                </div>

                <div className="mt-5">
                  <div className="font-serif text-xs font-bold uppercase tracking-[0.2em] text-accent-foreground/80">
                    Step {step.step}
                  </div>
                  <h3 className="mt-1 font-serif text-xl font-bold text-foreground">
                    {step.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
