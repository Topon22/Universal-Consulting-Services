"use client";

import { Navbar } from "@/components/sections/navbar";
import { Hero } from "@/components/sections/hero";
import { CredibilityBadges } from "@/components/sections/credibility-badges";
import { Partners } from "@/components/sections/partners";
import { Services } from "@/components/sections/services";
import { About } from "@/components/sections/about";
import { WhyUs } from "@/components/sections/why-us";
import { Stats } from "@/components/sections/stats";
import { Process } from "@/components/sections/process";
import { WhoWeServe } from "@/components/sections/who-we-serve";
import { Testimonials } from "@/components/sections/testimonials";
import { Cases } from "@/components/sections/cases";
import { Team } from "@/components/sections/team";
import { CTA } from "@/components/sections/cta";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/sections/footer";
import { ScrollProgress } from "@/components/scroll-progress";
import { CustomCursor } from "@/components/interactive/custom-cursor";
import { ContactDock } from "@/components/interactive/contact-dock";

/**
 * Landing page = the original 14-section experience, assembled here so that
 * `src/app/page.tsx` can switch between this and the `?view=` sub-pages.
 */
export function LandingPage() {
  return (
    <div id="top" className="relative flex min-h-screen flex-col bg-background">
      <ScrollProgress />
      <CustomCursor />
      <Navbar />
      <main className="flex-1">
        <Hero />
        <CredibilityBadges />
        <Partners />
        <Services />
        <About />
        <WhyUs />
        <Stats />
        <Process />
        <WhoWeServe />
        <Testimonials />
        <Cases />
        <Team />
        <CTA />
        <Contact />
      </main>
      <Footer />
      <ContactDock />
    </div>
  );
}
