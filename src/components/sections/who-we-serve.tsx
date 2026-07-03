"use client";

import * as React from "react";
import { motion } from "framer-motion";
import {
  GraduationCap,
  Briefcase,
  Repeat,
  Globe2,
  Languages,
  TrendingUp,
} from "lucide-react";
import { SectionHeading, StaggerGroup, staggerItem } from "@/components/animation";

const AUDIENCES = [
  {
    icon: GraduationCap,
    title: "High School Graduates",
    description:
      "First-time college seekers aiming for an affordable, well-ranked U.S. undergraduate start.",
  },
  {
    icon: Briefcase,
    title: "Working Professionals",
    description:
      "Pursue a U.S. master's with day-1 CPT that lets you keep working while you study.",
  },
  {
    icon: Repeat,
    title: "Transfer Students",
    description:
      "Already enrolled but looking for a better fit — we maximize your credits and minimize loss.",
  },
  {
    icon: Globe2,
    title: "International Applicants",
    description:
      "From Bangladesh to Lagos to Kathmandu — multilingual counselors who understand your journey.",
  },
  {
    icon: Languages,
    title: "English Learners",
    description:
      "Build fluency through pathway and ESL programs before stepping into a full degree.",
  },
  {
    icon: TrendingUp,
    title: "Career Changers",
    description:
      "Pivot into tech, business, or analytics with programs designed around real outcomes.",
  },
];

export function WhoWeServe() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Who We Serve"
          title={
            <>
              Every student has a{" "}
              <span className="text-gradient-emerald">different story</span>
            </>
          }
          description="Whatever your background or goal, we tailor a U.S. pathway that fits your budget, timeline, and ambition."
        />

        <StaggerGroup className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {AUDIENCES.map((a) => (
            <motion.div
              key={a.title}
              variants={staggerItem}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 300, damping: 22 }}
              className="group relative flex items-start gap-4 rounded-2xl border border-border/60 bg-card p-6 shadow-sm transition-shadow hover:shadow-premium"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary/15 to-accent/15 text-primary transition-all duration-500 group-hover:from-primary group-hover:to-primary/70 group-hover:text-primary-foreground">
                <a.icon className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-serif text-base font-bold text-foreground">
                  {a.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                  {a.description}
                </p>
              </div>
            </motion.div>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
