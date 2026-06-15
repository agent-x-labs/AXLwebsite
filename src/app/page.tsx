import { SiteNav } from "@/components/sections/site-nav";
import { HeroSection } from "@/components/sections/hero-section";
import { PedigreeStrip } from "@/components/sections/pedigree-strip";
import { ShiftSection } from "@/components/sections/shift-section";
import { AgentsSection } from "@/components/sections/agents-section";
import { MathSection } from "@/components/sections/math-section";
import { HowSection } from "@/components/sections/how-section";
import { WhySection } from "@/components/sections/why-section";
import { FoundersSection } from "@/components/sections/founders-section";
import { FaqSection } from "@/components/sections/faq-section";
import { CtaSection } from "@/components/sections/cta-section";
import { SiteFooter } from "@/components/sections/site-footer";

export default function Home() {
  return (
    <>
      <SiteNav />
      <main>
        <HeroSection />
        <PedigreeStrip />
        <ShiftSection />
        <AgentsSection />
        <MathSection />
        <HowSection />
        <WhySection />
        <FoundersSection />
        <FaqSection />
        <CtaSection />
      </main>
      <SiteFooter />
    </>
  );
}
