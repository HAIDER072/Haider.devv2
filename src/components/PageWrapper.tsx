import { Header } from "@/sections/Header";
import { Main } from "@/components/Main";
import { Footer } from "@/sections/Footer";

export const PageWrapper = () => {
  return (
    <div className="box-border caret-transparent h-full">
      <div className="bg-stone-100 box-border caret-transparent min-h-[1000px]">
        <Header />
        <Main />
        <Footer />
      </div>
    </div>
  );
};
