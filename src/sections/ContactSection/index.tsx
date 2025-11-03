import { ContactHeading } from "@/sections/ContactSection/components/ContactHeading";
import { ContactContainer } from "@/sections/ContactSection/components/ContactContainer";

export const ContactSection = () => {
  return (
    <section className="relative bg-[linear-gradient(135deg,rgba(255,246,194,0.1),rgba(244,162,97,0.05))] box-border caret-transparent overflow-hidden px-5 py-[60px] md:px-[60px] md:py-20">
      <ContactHeading />
      <ContactContainer />
    </section>
  );
};
