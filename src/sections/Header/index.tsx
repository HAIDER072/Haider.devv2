// placeholder index for Header components
import { HeaderContainer } from "@/sections/Header/components/HeaderContainer";

export const Header = () => {
  return (
    <header
      role="banner"
      aria-label="Main site header"
      className="relative box-border caret-transparent w-full z-[100] mt-5"
    >
      <HeaderContainer />
    </header>
  );
};
