"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Linkedin, Mail, BadgeCheck } from "lucide-react";
import { TEAM } from "@/lib/data";
import { SectionHeading, StaggerGroup, staggerItem } from "@/components/animation";

export function Team() {
  return (
    <section id="team" className="relative py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Leadership"
          title={
            <>
              The people who{" "}
              <span className="text-gradient-emerald">guide your journey</span>
            </>
          }
          description="Multilingual counselors, U.S. veterans, and admissions strategists — united by one mission: your success in the United States."
        />

        <StaggerGroup className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {TEAM.map((member) => (
            <motion.article
              key={member.name}
              variants={staggerItem}
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 300, damping: 22 }}
              className="group relative overflow-hidden rounded-2xl border border-border/60 bg-card shadow-premium"
            >
              {/* Avatar header */}
              <div className="relative h-40 overflow-hidden bg-gradient-to-br from-primary to-primary/60">
                <div className="absolute inset-0 grid-pattern opacity-20" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="flex h-24 w-24 items-center justify-center rounded-full border-4 border-background/90 bg-gradient-to-br from-accent to-accent/70 font-serif text-3xl font-bold text-accent-foreground shadow-lg">
                    {member.initials}
                  </div>
                </div>
                <div className="absolute right-3 top-3 inline-flex items-center gap-1 rounded-full bg-background/80 px-2 py-1 text-[10px] font-bold uppercase tracking-wide text-primary backdrop-blur">
                  <BadgeCheck className="h-3 w-3" />
                  Verified
                </div>
              </div>

              {/* Body */}
              <div className="p-5 text-center">
                <h3 className="font-serif text-lg font-bold text-foreground">
                  {member.name}
                </h3>
                <div className="text-xs font-semibold uppercase tracking-wide text-primary">
                  {member.role}
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {member.bio}
                </p>

                <div className="mt-4 flex flex-wrap justify-center gap-1.5">
                  {member.highlights.map((h) => (
                    <span
                      key={h}
                      className="rounded-full bg-secondary px-2.5 py-1 text-[10px] font-semibold text-secondary-foreground"
                    >
                      {h}
                    </span>
                  ))}
                </div>

                <div className="mt-4 flex justify-center gap-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <button
                    aria-label={`${member.name} LinkedIn`}
                    className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary text-secondary-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                  >
                    <Linkedin className="h-3.5 w-3.5" />
                  </button>
                  <button
                    aria-label={`${member.name} email`}
                    className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary text-secondary-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                  >
                    <Mail className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
