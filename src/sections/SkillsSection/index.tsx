import { SkillsHeading } from "@/sections/SkillsSection/components/SkillsHeading";
import { SkillsGrid } from "@/sections/SkillsSection/components/SkillsGrid";

export const SkillsSection = () => {
  return (
    <section className="relative box-border caret-transparent px-3 py-10 md:px-5 md:py-20">
      <SkillsHeading />
      <SkillsGrid />
    </section>
  );
};
