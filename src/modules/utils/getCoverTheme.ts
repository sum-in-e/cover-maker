import { SizeType, ThemeType } from "@/modules/types/optionType";

interface Props {
  size: SizeType;
  theme: ThemeType;
}

export const getCoverTheme = ({ size, theme }: Props) => {
  if (size === "600 x 600") {
    if (theme === "1번 테마") {
      return "/images/theme/theme1-600x600.webp";
    } else if (theme === "2번 테마") {
      return "/images/theme/theme2-600x600.webp";
    } else if (theme === "3번 테마") {
      return "/images/theme/theme3-600x600.webp";
    } else if (theme === "4번 테마") {
      return "/images/theme/theme4-600x600.webp";
    }
  } else if (size === "960 x 540") {
    if (theme === "1번 테마") {
      return "/images/theme/theme1-960x540.webp";
    } else if (theme === "2번 테마") {
      return "/images/theme/theme2-960x540.webp";
    } else if (theme === "3번 테마") {
      return "/images/theme/theme3-960x540.webp";
    } else if (theme === "4번 테마") {
      return "/images/theme/theme4-960x540.webp";
    }
  } else if (size === "960 x 450") {
    if (theme === "1번 테마") {
      return "/images/theme/theme1-960x450.webp";
    } else if (theme === "2번 테마") {
      return "/images/theme/theme2-960x450.webp";
    } else if (theme === "3번 테마") {
      return "/images/theme/theme3-960x450.webp";
    } else if (theme === "4번 테마") {
      return "/images/theme/theme4-960x450.webp";
    }
  } else if (size === "800 x 375") {
    if (theme === "1번 테마") {
      return "/images/theme/theme1-800x375.webp";
    } else if (theme === "2번 테마") {
      return "/images/theme/theme2-800x375.webp";
    } else if (theme === "3번 테마") {
      return "/images/theme/theme3-800x375.webp";
    } else if (theme === "4번 테마") {
      return "/images/theme/theme4-800x375.webp";
    }
  }
};
