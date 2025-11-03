// placeholder file for MobileNav component
export const MobileNav = () => {
  return (
    <nav
      aria-label="Primary"
      className="fixed backdrop-blur-[10px] bg-black/90 box-border caret-transparent block translate-y-[-100.0%] z-[1000] inset-0 md:hidden md:transform-none"
    >
      <ul className="items-center box-border caret-transparent gap-x-8 flex flex-col h-full justify-center list-none gap-y-8 pl-0">
        <li className="box-border caret-transparent min-h-[auto] min-w-[auto] md:min-h-0 md:min-w-0">
          <a
            href="#home"
            className="text-white text-2xl box-border caret-transparent leading-[38.4px] min-w-[200px] text-center px-6 py-3 rounded-xl font-patrick_hand hover:bg-white/10"
          >
            Home
          </a>
        </li>
        <li className="box-border caret-transparent min-h-[auto] min-w-[auto] md:min-h-0 md:min-w-0">
          <a
            href="#about"
            className="text-white text-2xl box-border caret-transparent leading-[38.4px] min-w-[200px] text-center px-6 py-3 rounded-xl font-patrick_hand hover:bg-white/10"
          >
            About
          </a>
        </li>
        <li className="box-border caret-transparent min-h-[auto] min-w-[auto] md:min-h-0 md:min-w-0">
          <a
            href="#skills"
            className="text-white text-2xl box-border caret-transparent leading-[38.4px] min-w-[200px] text-center px-6 py-3 rounded-xl font-patrick_hand hover:bg-white/10"
          >
            Skills
          </a>
        </li>
        <li className="box-border caret-transparent min-h-[auto] min-w-[auto] md:min-h-0 md:min-w-0">
          <a
            href="#projects"
            className="text-white text-2xl box-border caret-transparent leading-[38.4px] min-w-[200px] text-center px-6 py-3 rounded-xl font-patrick_hand hover:bg-white/10"
          >
            Projects
          </a>
        </li>
        <li className="box-border caret-transparent min-h-[auto] min-w-[auto] md:min-h-0 md:min-w-0">
          <a
            href="#cp"
            className="text-white text-2xl box-border caret-transparent leading-[38.4px] min-w-[200px] text-center px-6 py-3 rounded-xl font-patrick_hand hover:bg-white/10"
          >
            Competitive Programming
          </a>
        </li>
        <li className="box-border caret-transparent min-h-[auto] min-w-[auto] md:min-h-0 md:min-w-0">
          <a
            href="#achievements"
            className="text-white text-2xl box-border caret-transparent leading-[38.4px] min-w-[200px] text-center px-6 py-3 rounded-xl font-patrick_hand hover:bg-white/10"
          >
            Achievements
          </a>
        </li>
        <li className="box-border caret-transparent min-h-[auto] min-w-[auto] md:min-h-0 md:min-w-0">
          <a
            href="#contact"
            className="text-white text-2xl box-border caret-transparent leading-[38.4px] min-w-[200px] text-center px-6 py-3 rounded-xl font-patrick_hand hover:bg-white/10"
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};
