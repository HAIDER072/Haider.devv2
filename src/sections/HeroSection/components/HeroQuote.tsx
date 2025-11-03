// placeholder file for HeroQuote component
export const HeroQuote = () => {
  return (
    <div
      aria-label="special note"
      className="relative text-[13px] self-center bg-[linear-gradient(rgb(255,246,194)_0%,rgb(255,233,138)_100%)] shadow-[rgba(0,0,0,0.15)_0px_12px_24px_0px,rgba(0,0,0,0.1)_0px_4px_8px_0px] box-border caret-transparent leading-[15.6px] max-w-40 min-h-[auto] min-w-[auto] order-2 w-2/5 z-10 pt-[15px] pb-3 px-3 rounded-[15px] left-auto top-auto md:absolute md:text-xl md:self-auto md:leading-8 md:max-w-none md:min-h-0 md:min-w-0 md:order-none md:w-[260px] md:pt-6 md:pb-5 md:px-5 md:left-2.5 md:top-[110px]"
    >
      <img
        src="https://c.animaapp.com/mhilnokeUA62Ck/assets/icon-1.svg"
        alt="Icon"
        className="absolute text-[13px] box-border caret-transparent h-[30px] leading-[15.6px] rotate-[-14.99999492786973deg] w-[30px] z-[2] -left-3 -top-3 md:text-xl md:h-10 md:leading-8 md:w-10"
      />
      <blockquote className="relative text-[13px] box-border caret-transparent tracking-[0.2px] leading-[16.9px] z-[1] font-caveat md:text-xl md:leading-[26px]">
        If at first you don&#39;t succeed; call it version 1.0
      </blockquote>
    </div>
  );
};
