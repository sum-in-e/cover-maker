import { FontType, SizeType, ThemeType } from "@/modules/types/optionType";
import { colors } from "@/styles/colors";

interface Props {
  size: SizeType;
  theme: ThemeType;
  font: FontType;
}

interface FontStyleObjectType {
  color: string;
  fontSize: string;
  paddingX: string;
  fontFamily: FontType;
}

export const getCoverFont = ({ size, theme, font }: Props) => {
  const fontStyleObject: FontStyleObjectType = {
    color: colors.black,
    fontSize: "50px",
    paddingX: "90px",
    fontFamily: "Noto Sans KR",
  };

  // 테마 변경 시 -> color 변경
  if (theme === "1번 테마") {
    fontStyleObject.color = colors.white;
  } else {
    fontStyleObject.color = colors.black;
  }

  // 사이즈 변경시 -> paddingX, fontSize 변경
  if (size === "600 x 600") {
    fontStyleObject.paddingX = "90px";
    fontStyleObject.fontSize = "50px";
  } else if (size === "960 x 540") {
    fontStyleObject.paddingX = "140px";
    fontStyleObject.fontSize = "50px";
  } else if (size === "960 x 450") {
    fontStyleObject.paddingX = "145px";
    fontStyleObject.fontSize = "50px";
  } else if (size === "800 x 375") {
    fontStyleObject.paddingX = "120px";
    fontStyleObject.fontSize = "40px";
  }

  // 폰트 변경 시 -> font 변경
  if (font === "Noto Sans KR") {
    fontStyleObject.fontFamily = "Noto Sans KR";
  } else if (font === "Do Hyeon") {
    fontStyleObject.fontFamily = "Do Hyeon";
  } else if (font === "Jua") {
    fontStyleObject.fontFamily = "Jua";
  } else if (font === "Song Myung") {
    fontStyleObject.fontFamily = "Song Myung";
  }

  return fontStyleObject;
};
