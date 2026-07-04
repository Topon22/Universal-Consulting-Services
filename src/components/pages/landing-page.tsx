"use client";

import { Navbar } from "@/components/sections/navbar";
import { Hero } from "@/components/sections/hero";
import { CredibilityBadges } from "@/components/sections/credibility-badges";
import { Partners } from "@/components/sections/partners";
import { FeaturedUniversities } from "@/components/sections/featured-universities";
import { Services } from "@/components/sections/services";
import { PathFinder } from "@/components/interactive/pathfinder";
import { About } from "@/components/sections/about";
import { WhyUs } from "@/components/sections/why-us";
import { Comparison } from "@/components/sections/comparison";
import { Stats } from "@/components/sections/stats";
import { Process } from "@/components/sections/process";
import { WhoWeServe } from "@/components/sections/who-we-serve";
import { Testimonials } from "@/components/sections/testimonials";
import { Team } from "@/components/sections/team";
import { CTA } from "@/components/sections/cta";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/sections/footer";
import { ScrollProgress } from "@/components/scroll-progress";
import { CustomCursor } from "@/components/interactive/custom-cursor";
import { ContactDock } from "@/components/interactive/contact-dock";
import { ChatWidget } from "@/components/interactive/chat-widget";
import { MobileStickyCTA } from "@/components/interactive/mobile-cta-bar";

/**
 * Landing page = the original 14-section experience, assembled here so that
 * `src/app/page.tsx` can switch between this and the `?view=` sub-pages.
 *
 * New high-impact additions (Task 11, competitor-driven):
 *   • FeaturedUniversities — Shorelight-style proof cards under the marquee
 *   • PathFinder — compact "plan your path" quiz + budget slider lead magnet
 *   • Comparison — "Why UCSG vs others" 3-row head-to-head teaser
 *   • MobileStickyCTA — slim bottom CTA bar on mobile (after hero scroll)
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
        <FeaturedUniversities />
        <Services />
        <PathFinder />
        <About />
        <WhyUs />
        <Comparison />
        <Stats />
        <Process />
        <WhoWeServe />
        <Testimonials />
        <Team />
        <CTA />
        <Contact />
      </main>
      <Footer />
      <ContactDock />
      <ChatWidget />
      <MobileStickyCTA />
    </div>
  );
}
