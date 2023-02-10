import { ThemeContext } from "@/bridges/CoverMaker/Provider/ThemeProvider";
import OptionButtonGroup from "@/bridges/CustomOptions/MobileCustomOptions/OptionGroup/CommonOptionButtonGroup";
import { useThemeOptions } from "@/modules/hooks/useThemeOptions";
import { useContext } from "react";

const ThemeOptionButtonGroup = () => {
  const { theme, onClickTheme } = useContext(ThemeContext);
  const { themeOptions } = useThemeOptions({ theme, onClickTheme });

  return <OptionButtonGroup title="테마" options={themeOptions} />;
};

export default ThemeOptionButtonGroup;
