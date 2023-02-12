import FontOptionButtonGroup from "@/bridges/CustomOptions/OptionGroup/FontOptionButtonGroup";
import SizeOptionButtonGroup from "@/bridges/CustomOptions/OptionGroup/SizeOptionButtonGroup";
import ThemeOptionButtonGroup from "@/bridges/CustomOptions/OptionGroup/ThemeOptionButtonGroup";
import TitleOptionGroup from "@/bridges/CustomOptions/OptionGroup/TitleOptionGroup";
import { VBox } from "@/component/VBox";

const CustomOptions = () => {
  return (
    <VBox sx={{ gap: "15px" }}>
      <TitleOptionGroup />
      <SizeOptionButtonGroup />
      <ThemeOptionButtonGroup />
      <FontOptionButtonGroup />
    </VBox>
  );
};

export default CustomOptions;
