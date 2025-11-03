import { CPHeading } from "@/sections/CompetitiveProgrammingSection/components/CPHeading";
import { CPCards } from "@/sections/CompetitiveProgrammingSection/components/CPCards";

export const CompetitiveProgrammingSection = () => {
  return (
    <section className="relative box-border caret-transparent">
      <CPHeading />
      <CPCards />
      <div className="box-border caret-transparent h-[30px] md:h-[200px]"></div>
      <div className="box-border caret-transparent max-w-[800px] mx-auto my-[60px] px-5">
        <div className="bg-[repeating-linear-gradient(to_right,rgba(62,47,47,0.2)_0px,rgba(62,47,47,0.2)_8px,rgba(0,0,0,0)_8px,rgba(0,0,0,0)_16px)] box-border caret-transparent h-0.5 w-full"></div>
      </div>
    </section>
  );
};
