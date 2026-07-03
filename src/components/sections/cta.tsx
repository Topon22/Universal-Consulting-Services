"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Phone, Sparkles, CalendarClock } from "lucide-react";
import { COMPANY } from "@/lib/data";
import { Reveal } from "@/components/animation";

export function CTA() {
  return (
    <section className="relative py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-primary/30 bg-gradient-to-br from-primary via-primary to-primary/80 px-6 py-14 shadow-premium sm:px-12 sm:py-20">
            {/* Animated aurora overlay */}
            <div className="absolute inset-0 -z-0 bg-gradient-to-r from-accent/20 via-transparent to-accent/20 animate-aurora" />
            <div className="absolute inset-0 -z-0 grid-pattern opacity-20" />

            {/* Floating blobs */}
            <motion.div
              aria-hidden
              className="absolute -left-10 top-0 h-52 w-52 rounded-full bg-accent/25 blur-3xl"
              animate={{ scale: [1, 1.3, 1], opacity: [0.4, 0.7, 0.4] }}
              transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              aria-hidden
              className="absolute -right-10 bottom-0 h-60 w-60 rounded-full bg-background/15 blur-3xl"
              animate={{ scale: [1, 1.25, 1], opacity: [0.3, 0.5, 0.3] }}
              transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
            />

            <div className="relative z-10 mx-auto max-w-3xl text-center">
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="mx-auto inline-flex items-center gap-2 rounded-full bg-background/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-primary-foreground backdrop-blur"
              >
                <CalendarClock className="h-3.5 w-3.5" />
                Free Consultation · No Obligation
              </motion.div>

              <h2 className="mt-6 font-serif text-3xl font-bold leading-tight tracking-tight text-primary-foreground sm:text-5xl">
                Ready to start your U.S. education journey?
              </h2>
              <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-primary-foreground/80 sm:text-lg">
                Take a free call with our multilingual counselors today. We'll
                match you to affordable, well-ranked colleges with the right
                CPT/OPT and hybrid options — and stand by you from application to
                arrival.
              </p>

              <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <a
                  href="#contact"
                  className="group inline-flex h-12 items-center gap-2 rounded-full bg-accent px-7 text-base font-bold text-accent-foreground shadow-lg transition-all hover:shadow-xl hover:brightness-105"
                >
                  <Sparkles className="h-4 w-4" />
                  Take a Free Call Now
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
                <a
                  href={COMPANY.phoneHref}
                  className="inline-flex h-12 items-center gap-2 rounded-full border border-primary-foreground/30 bg-background/10 px-7 text-base font-semibold text-primary-foreground backdrop-blur transition-colors hover:bg-background/20"
                >
                  <Phone className="h-4 w-4" />
                  {COMPANY.phone}
                </a>
              </div>

              <p className="mt-6 text-sm text-primary-foreground/60">
                Trusted by 5,000+ students across 40+ countries
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
