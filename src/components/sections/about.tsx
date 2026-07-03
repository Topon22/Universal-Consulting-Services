"use client";

import * as React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Award,
  ShieldCheck,
  HeartHandshake,
  BadgeCheck,
  ArrowRight,
} from "lucide-react";
import { COMPANY } from "@/lib/data";
import { Reveal } from "@/components/animation";

export function About() {
  const ref = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const yImg = useTransform(scrollYProgress, [0, 1], ["-6%", "8%"]);

  const highlights = [
    { icon: Award, label: "Founded 2022", value: "By a U.S. Army Veteran" },
    { icon: HeartHandshake, label: "Our Promise", value: "Students always come first" },
    { icon: ShieldCheck, label: "Trust & Transparency", value: "End-to-end guidance" },
  ];

  return (
    <section
      id="about"
      ref={ref}
      className="relative overflow-hidden py-24 sm:py-32"
    >
      <div className="absolute inset-0 -z-10 mesh-bg opacity-50" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Visual */}
          <Reveal className="relative order-2 lg:order-1">
            <div className="relative">
              {/* Decorative gradient frame */}
              <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-br from-primary/20 via-accent/15 to-primary/10 blur-2xl" />

              <motion.div
                style={{ y: yImg }}
                className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-border/60 shadow-premium"
              >
                {/* Gradient art panel instead of stock image */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/85 to-primary/60" />
                <div className="absolute inset-0 opacity-30 mix-blend-overlay grid-pattern" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent" />

                {/* Floating glass quote card */}
                <div className="absolute inset-x-6 bottom-6">
                  <div className="glass rounded-2xl p-5 shadow-premium">
                    <div className="flex items-center gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-accent to-accent/70 font-serif text-lg font-bold text-accent-foreground">
                        JC
                      </div>
                      <div>
                        <div className="font-serif text-base font-bold text-foreground">
                          {COMPANY.founder}
                        </div>
                        <div className="text-xs font-medium text-muted-foreground">
                          Founder & Managing Director
                        </div>
                      </div>
                    </div>
                    <p className="mt-3 font-serif text-sm italic leading-relaxed text-foreground/80">
                      “We are committed to trust, transparency, and your success.
                      Let UCSG be your trusted partner in building a brighter future.”
                    </p>
                  </div>
                </div>

                {/* Top badge */}
                <div className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full bg-background/80 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-primary backdrop-blur">
                  <BadgeCheck className="h-3.5 w-3.5" />
                  U.S. Army Veteran
                </div>
              </motion.div>

              {/* Floating stat card */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -right-3 top-10 glass rounded-2xl p-4 shadow-premium sm:-right-6"
              >
                <div className="font-serif text-3xl font-bold text-primary">5K+</div>
                <div className="text-[11px] font-medium uppercase tracking-wide text-muted-foreground">
                  Students Guided
                </div>
              </motion.div>
            </div>
          </Reveal>

          {/* Text */}
          <div className="order-1 lg:order-2">
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-accent-foreground">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                About UCSG
              </span>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-5 font-serif text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl md:text-5xl">
                A trusted resource for{" "}
                <span className="text-gradient-emerald">
                  international students
                </span>{" "}
                pursuing U.S. education
              </h2>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
                Founded in {COMPANY.founded} by {COMPANY.founder} — a multilingual
                U.S. Army veteran, former student government president, and
                respected community leader — Universal Consulting Services Group
                (UCSG) is built on a simple promise: students come first.
              </p>
            </Reveal>
            <Reveal delay={0.24}>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                With a proven track record of guiding thousands of students through
                their U.S. educational journey, we specialize in connecting you to
                affordable, well-ranked colleges and universities that offer hybrid
                programs, CPT/OPT opportunities, and real-world career pathways.
              </p>
            </Reveal>

            <Reveal delay={0.32}>
              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                {highlights.map((h) => (
                  <div
                    key={h.label}
                    className="rounded-xl border border-border/60 bg-card p-4 shadow-sm"
                  >
                    <h.icon className="h-5 w-5 text-primary" />
                    <div className="mt-2 text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">
                      {h.label}
                    </div>
                    <div className="text-sm font-bold text-foreground">
                      {h.value}
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.4}>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href="#contact"
                  className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-premium transition-all hover:shadow-lg"
                >
                  Start Your Journey
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
                <span className="text-sm text-muted-foreground">
                  Free consultation · Multilingual counselors
                </span>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
