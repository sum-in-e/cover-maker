import FontOptionButtonGroup from "@/bridges/CustomOptions/DesktopCustomOptions/OptionGroup/FontOptionButtonGroup";
import SizeOptionButtonGroup from "@/bridges/CustomOptions/DesktopCustomOptions/OptionGroup/SizeOptionButtonGroup";
import ThemeOptionButtonGroup from "@/bridges/CustomOptions/DesktopCustomOptions/OptionGroup/ThemeOptionButtonGroup";
import TitleOptionGroup from "@/bridges/CustomOptions/DesktopCustomOptions/OptionGroup/TitleOptionGroup";
import { VBox } from "@/component/VBox";

const DesktopCustomOptions = () => {
  return (
    <VBox sx={{ gap: "15px" }}>
      <TitleOptionGroup />
      <SizeOptionButtonGroup />
      <ThemeOptionButtonGroup />
      <FontOptionButtonGroup />
    </VBox>
  );
};

export default DesktopCustomOptions;
