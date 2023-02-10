import { FontContext } from "@/bridges/CoverMaker/Provider/FontProvider";
import { SizeContext } from "@/bridges/CoverMaker/Provider/SizeProvider";
import { ThemeContext } from "@/bridges/CoverMaker/Provider/ThemeProvider";
import OptionButtonGroup from "@/bridges/CustomOptions/MobileCustomOptions/OptionGroup/CommonOptionButtonGroup";
import { VBox } from "@/component/VBox";
import { useFontOptions } from "@/modules/hooks/useFontOptions";
import { useSizeOptions } from "@/modules/hooks/useSizeOptions";
import { useThemeOptions } from "@/modules/hooks/useThemeOptions";
import { useContext } from "react";

const MobileCustomOptions = () => {
  const { theme, onClickTheme } = useContext(ThemeContext);
  const { themeOptions } = useThemeOptions({ theme, onClickTheme });

  const { size, onClickSize } = useContext(SizeContext);
  const { sizeOptions } = useSizeOptions({ size, onClickSize });

  const { font, onClickFont } = useContext(FontContext);
  const { fontOptions } = useFontOptions({ font, onClickFont });

  return (
    <VBox sx={{ gap: "15px" }}>
      <OptionButtonGroup title="사이즈" options={sizeOptions} />
      <OptionButtonGroup title="테마" options={themeOptions} />
      <OptionButtonGroup title="폰트" options={fontOptions} />
    </VBox>
  );
};

export default MobileCustomOptions;
