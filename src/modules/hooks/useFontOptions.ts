import { FontContextType } from "@/bridges/CoverMaker/Provider/FontProvider";
import { OptionButtonProps } from "@/bridges/CustomOptions/OptionGroup/CommonOptionButtonGroup";

export const useFontOptions = ({ font, onClickFont }: FontContextType) => {
  const fontOptions: OptionButtonProps[] = [
    {
      value: "Noto Sans KR",
      onClick: () => onClickFont("Noto Sans KR"),
      isSelected: font === "Noto Sans KR",
    },
    {
      value: "Do Hyeon",
      onClick: () => onClickFont("Do Hyeon"),
      isSelected: font === "Do Hyeon",
    },
    {
      value: "Jua",
      onClick: () => onClickFont("Jua"),
      isSelected: font === "Jua",
    },
    {
      value: "Song Myung",
      onClick: () => onClickFont("Song Myung"),
      isSelected: font === "Song Myung",
    },
  ];

  return { fontOptions };
};
