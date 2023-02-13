import { ThemeContextType } from "@/bridges/CoverMaker/Provider/ThemeProvider";
import { OptionButtonProps } from "@/bridges/CustomOptions/OptionGroup/CommonOptionButtonGroup";

export const useThemeOptions = ({ theme, onClickTheme }: ThemeContextType) => {
  const themeOptions: OptionButtonProps[] = [
    {
      value: "1번 테마",
      onClick: () => onClickTheme("1번 테마"),
      isSelected: theme === "1번 테마",
    },
    {
      value: "2번 테마",
      onClick: () => onClickTheme("2번 테마"),
      isSelected: theme === "2번 테마",
    },
    {
      value: "3번 테마",
      onClick: () => onClickTheme("3번 테마"),
      isSelected: theme === "3번 테마",
    },
    {
      value: "4번 테마",
      onClick: () => onClickTheme("4번 테마"),
      isSelected: theme === "4번 테마",
    },
  ];

  return { themeOptions };
};
