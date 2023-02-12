import { SizeContextType } from "@/bridges/CoverMaker/Provider/SizeProvider";
import { OptionButtonProps } from "@/bridges/CustomOptions/OptionGroup/CommonOptionButtonGroup";

export const useSizeOptions = ({ size, onClickSize }: SizeContextType) => {
  const sizeOptions: OptionButtonProps[] = [
    {
      value: "1080 x 1080",
      onClick: () => onClickSize("1080 x 1080"),
      isSelected: size === "1080 x 1080",
    },
    {
      value: "960 x 540",
      onClick: () => onClickSize("960 x 540"),
      isSelected: size === "960 x 540",
    },
    {
      value: "960 x 450",
      onClick: () => onClickSize("960 x 450"),
      isSelected: size === "960 x 450",
    },
    {
      value: "800 x 375",
      onClick: () => onClickSize("800 x 375"),
      isSelected: size === "800 x 375",
    },
  ];

  return { sizeOptions };
};
