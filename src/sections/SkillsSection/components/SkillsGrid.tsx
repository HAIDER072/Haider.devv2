export const SkillsGrid = () => {
  return (
    <div className="relative box-border caret-transparent max-w-[1000px] mx-auto pt-[30px]">
      <div className="absolute bg-stone-300 shadow-[rgba(0,0,0,0.15)_0px_2px_4px_0px] box-border caret-transparent h-2 w-[90%] rounded-bl rounded-br rounded-tl rounded-tr left-[5%] top-2.5"></div>
      <div className="box-border caret-transparent gap-x-2 flex flex-wrap justify-center gap-y-3 md:gap-x-[15px] md:gap-y-5">
        <div className="box-border caret-transparent contents"></div>
        <div className="box-border caret-transparent contents"></div>
        <div className="box-border caret-transparent contents"></div>
        <div className="box-border caret-transparent contents"></div>
        <div className="box-border caret-transparent contents"></div>
        <div className="box-border caret-transparent contents"></div>
      </div>
    </div>
  );
};
