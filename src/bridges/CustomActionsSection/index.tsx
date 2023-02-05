import ButtonActionGroup, {
  ButtonProps,
} from "@/bridges/CustomActionsSection/ButtonActionGroup";
import { FontType, SizeType, ThemeType } from "@/modules/types/actionType";
import { Box, Slider, styled, Typography } from "@mui/material";
import { useState } from "react";

interface Props {
  size: SizeType;
  themeButtons: ButtonProps[];
  onClickSize: (selectedSize: SizeType) => void;
}

const CustomActionsSection = ({ size, themeButtons, onClickSize }: Props) => {
  const [font, setFont] = useState<FontType>("Noto Sans Korean");

  const handleClickSize = (selectedSize: SizeType) => {
    onClickSize(selectedSize);
  };

  const handleClickFont = (selectedFont: FontType) => {
    setFont(selectedFont);
  };

  const fontButtons: ButtonProps[] = [
    {
      value: "Noto Sans Korean",
      onClick: () => handleClickFont("Noto Sans Korean"),
      isSelected: font === "Noto Sans Korean",
    },
    {
      value: "Do Hyeon",
      onClick: () => handleClickFont("Do Hyeon"),
      isSelected: font === "Do Hyeon",
    },
    {
      value: "Jua",
      onClick: () => handleClickFont("Jua"),
      isSelected: font === "Jua",
    },
    {
      value: "Song Myung",
      onClick: () => handleClickFont("Song Myung"),
      isSelected: font === "Song Myung",
    },
  ];

  const sizeButtons: ButtonProps[] = [
    {
      value: "1080 x 1080",
      onClick: () => handleClickSize("first"),
      isSelected: size === "first",
    },
    {
      value: "960 x 540",
      onClick: () => handleClickSize("second"),
      isSelected: size === "second",
    },
    {
      value: "960 x 450",
      onClick: () => handleClickSize("third"),
      isSelected: size === "third",
    },
    {
      value: "800 x 375",
      onClick: () => handleClickSize("fourth"),
      isSelected: size === "fourth",
    },
  ];

  return (
    <Section>
      <ButtonActionGroup title="사이즈" actions={sizeButtons} />
      <ButtonActionGroup title="테마" actions={themeButtons} />
      <ButtonActionGroup title="폰트" actions={fontButtons} />
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Box pl={0.5}>
          <Typography variant="body1" fontWeight={600} color="black">
            메인 타이틀 사이즈
          </Typography>
        </Box>
        <Slider
          defaultValue={30}
          aria-label="fontsize slider"
          sx={{ width: "300px" }}
        />
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Box pl={0.5}>
          <Typography variant="body1" fontWeight={600} color="black">
            서브 타이틀 사이즈
          </Typography>
        </Box>
        <Slider
          defaultValue={30}
          aria-label="fontsize slider"
          sx={{ width: "300px" }}
        />
      </Box>
    </Section>
  );
};

export default CustomActionsSection;

const Section = styled("section")({
  display: "flex",
  flexDirection: "column",
  gap: "15px",
});
