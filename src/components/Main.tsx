import { HeroSection } from "@/sections/HeroSection";
import { AboutSection } from "@/sections/AboutSection";
import { SkillsSection } from "@/sections/SkillsSection";
import { CompetitiveProgrammingSection } from "@/sections/CompetitiveProgrammingSection";
import { ContactSection } from "@/sections/ContactSection";

export const Main = () => {
  return (
    <main className="box-border caret-transparent max-w-[1100px] mx-auto p-6">
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <CompetitiveProgrammingSection />
      <ContactSection />
    </main>
  );
};
