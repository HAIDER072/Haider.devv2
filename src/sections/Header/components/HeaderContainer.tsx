// placeholder file for HeaderContainer component
import { Logo } from "@/sections/Header/components/Logo";
import { MobileMenuButton } from "@/sections/Header/components/MobileMenuButton";
import { DesktopNav } from "@/sections/Header/components/DesktopNav";
import { MobileNav } from "@/sections/Header/components/MobileNav";
import { ResumeButton } from "@/sections/Header/components/ResumeButton";

export const HeaderContainer = () => {
  return (
    <div className="items-center box-border caret-transparent gap-x-3 grid [grid-template-areas:'logo_menu_resume'] grid-cols-[auto_1fr_auto] gap-y-3 px-3 py-1.5 md:[grid-template-areas:none] md:px-10 md:py-2.5">
      <Logo />
      <MobileMenuButton />
      <DesktopNav />
      <MobileNav />
      <ResumeButton />
    </div>
  );
};
