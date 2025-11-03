// placeholder index for HeroSection
import { HeroQuote } from "@/sections/HeroSection/components/HeroQuote";
import { HeroContent } from "@/sections/HeroSection/components/HeroContent";
import { SignBookButton } from "@/sections/HeroSection/components/SignBookButton";

export const HeroSection = () => {
  return (
    <section className="relative items-center box-border caret-transparent gap-x-2.5 flex justify-center max-w-[1400px] min-h-0 gap-y-2.5 mx-auto pt-5 pb-[70px] px-4 md:[align-items:normal] md:gap-x-[normal] md:block md:justify-normal md:min-h-[850px] md:gap-y-[normal] md:px-[60px] md:py-20">
      <HeroQuote />
      <HeroContent />
      <SignBookButton />
    </section>
  );
};
