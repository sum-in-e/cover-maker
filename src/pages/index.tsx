import SizeProvider from "@/bridges/CoverMaker/Provider/SizeProvider";
import ThemeProvider from "@/bridges/CoverMaker/Provider/ThemeProvider";
import FontProvider from "@/bridges/CoverMaker/Provider/FontProvider";
import TitleProvider from "@/bridges/CoverMaker/Provider/TitleProvider";
import CoverMaker from "@/bridges/CoverMaker";

export default function HomePage() {
  return (
    <SizeProvider>
      <ThemeProvider>
        <FontProvider>
          <TitleProvider>
            <CoverMaker />
          </TitleProvider>
        </FontProvider>
      </ThemeProvider>
    </SizeProvider>
  );
}
