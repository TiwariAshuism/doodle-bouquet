import { SiteChrome } from "@/components/layout/SiteChrome";
import { BentoSection } from "@/components/sections/BentoSection";
import { CtaSection } from "@/components/sections/CtaSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { LoveNotesSection } from "@/components/sections/LoveNotesSection";
import { StorySection } from "@/components/sections/StorySection";

export default function Home() {
  return (
    <SiteChrome>
      <main>
        <HeroSection />
        <StorySection />
        <LoveNotesSection />
        <BentoSection />
        <CtaSection />
      </main>
    </SiteChrome>
  );
}
