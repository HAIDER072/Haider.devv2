// placeholder file for HeroContent component
export const HeroContent = () => {
  return (
    <div className="relative items-center self-center box-border caret-transparent gap-x-2.5 flex flex-col justify-center max-w-[600px] min-h-[auto] min-w-[auto] order-1 gap-y-2.5 transform-none w-[55%] left-auto top-auto md:absolute md:self-auto md:gap-x-7 md:min-h-0 md:min-w-0 md:order-none md:gap-y-7 md:translate-x-[-50.0%] md:translate-y-[-50.0%] md:w-full md:left-2/4 md:top-2/4">
      <div className="items-center box-border caret-transparent gap-x-[15px] flex flex-col gap-y-[15px] w-full md:gap-x-6 md:gap-y-6">
        <img
          src="https://c.animaapp.com/mhilnokeUA62Ck/assets/portrait-min-DaqZvXHx.png"
          alt="Portrait of Nithish"
          className="aspect-[2_/_3] shadow-[rgba(0,0,0,0.18)_0px_20px_50px_0px,rgba(0,0,0,0.12)_0px_8px_20px_0px] box-border caret-transparent h-auto max-w-[150px] object-cover w-full rounded-[20px] border-2 border-solid border-black/10 md:aspect-auto md:h-[380px] md:max-w-none md:w-[260px]"
        />
        <h1 className="text-[28px] font-bold box-border caret-transparent leading-[30.8px] text-center font-caveat md:text-[68px] md:leading-[74.8px]">
          I&#39;m Nithish
        </h1>
        <p className="text-stone-600 text-xs box-border caret-transparent leading-[19.2px] max-w-[500px] text-center px-[5px] md:text-[21px] md:leading-[33.6px] md:px-0">
          Developer • Problem Solver • Sketching my ideas into code
        </p>
        <div className="items-center box-border caret-transparent gap-x-2.5 flex justify-center gap-y-2.5 mt-1.5 md:gap-x-4 md:gap-y-4 md:mt-2">
          <a
            href="mailto://naninithish988@gmail.com"
            aria-label="Email"
            title="Email me"
            className="items-center bg-white/90 shadow-[rgba(0,0,0,0.08)_0px_3px_8px_0px] box-border caret-transparent flex h-10 justify-center w-10 border border-stone-700/20 rounded-xl border-solid md:h-12 md:w-12 hover:bg-white hover:shadow-[rgba(0,0,0,0.12)_0px_6px_16px_0px] hover:border-orange-300/60"
          >
            <img
              src="https://c.animaapp.com/mhilnokeUA62Ck/assets/icon-2.svg"
              alt="Icon"
              className="box-border caret-transparent h-5 w-5 md:h-6 md:w-6"
            />
          </a>
          <a
            href="https://github.com/Nithish0204"
            aria-label="GitHub"
            title="Visit my GitHub"
            className="items-center bg-white/90 shadow-[rgba(0,0,0,0.08)_0px_3px_8px_0px] box-border caret-transparent flex h-10 justify-center w-10 border border-stone-700/20 rounded-xl border-solid md:h-12 md:w-12 hover:bg-white hover:shadow-[rgba(0,0,0,0.12)_0px_6px_16px_0px] hover:border-zinc-800/60"
          >
            <img
              src="https://c.animaapp.com/mhilnokeUA62Ck/assets/icon-3.svg"
              alt="Icon"
              className="box-border caret-transparent h-5 w-5 md:h-6 md:w-6"
            />
          </a>
          <a
            href="https://linkedin.com/in/nithishdaruvuri"
            aria-label="LinkedIn"
            title="Connect on LinkedIn"
            className="items-center bg-white/90 shadow-[rgba(0,0,0,0.08)_0px_3px_8px_0px] box-border caret-transparent flex h-10 justify-center w-10 border border-stone-700/20 rounded-xl border-solid md:h-12 md:w-12 hover:bg-white hover:shadow-[rgba(0,0,0,0.12)_0px_6px_16px_0px] hover:border-sky-600/60"
          >
            <img
              src="https://c.animaapp.com/mhilnokeUA62Ck/assets/icon-4.svg"
              alt="Icon"
              className="box-border caret-transparent h-5 w-5 md:h-6 md:w-6"
            />
          </a>
        </div>
      </div>
    </div>
  );
};
