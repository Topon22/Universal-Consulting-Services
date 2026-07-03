import { Navbar } from "@/components/sections/navbar";
import { Hero } from "@/components/sections/hero";
import { Partners } from "@/components/sections/partners";
import { Services } from "@/components/sections/services";
import { About } from "@/components/sections/about";
import { WhyUs } from "@/components/sections/why-us";
import { Stats } from "@/components/sections/stats";
import { Process } from "@/components/sections/process";
import { WhoWeServe } from "@/components/sections/who-we-serve";
import { Testimonials } from "@/components/sections/testimonials";
import { Team } from "@/components/sections/team";
import { CTA } from "@/components/sections/cta";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/sections/footer";
import { ScrollProgress } from "@/components/scroll-progress";

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col bg-background">
      <ScrollProgress />
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Partners />
        <Services />
        <About />
        <WhyUs />
        <Stats />
        <Process />
        <WhoWeServe />
        <Testimonials />
        <Team />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
