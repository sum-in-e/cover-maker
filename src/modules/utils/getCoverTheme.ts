import { SizeType, ThemeType } from "@/modules/types/optionType";

interface Props {
  size: SizeType;
  theme: ThemeType;
}

export const getCoverTheme = ({ size, theme }: Props) => {
  if (size === "1080 x 1080") {
    if (theme === "1번 테마") {
      return "/images/theme/theme1-1080x1080.png";
    } else if (theme === "2번 테마") {
      return "/images/theme/theme2-1080x1080.png";
    } else if (theme === "3번 테마") {
      return "/images/theme/theme3-1080x1080.png";
    }
  } else if (size === "960 x 540") {
    if (theme === "1번 테마") {
      return "/images/theme/theme1-960x540.png";
    } else if (theme === "2번 테마") {
      return "/images/theme/theme2-960x540.png";
    } else if (theme === "3번 테마") {
      return "/images/theme/theme3-960x540.png";
    }
  } else if (size === "960 x 450") {
    if (theme === "1번 테마") {
      return "/images/theme/theme1-960x450.png";
    } else if (theme === "2번 테마") {
      return "/images/theme/theme2-960x450.png";
    } else if (theme === "3번 테마") {
      return "/images/theme/theme3-960x450.png";
    }
  } else if (size === "800 x 375") {
    if (theme === "1번 테마") {
      return "/images/theme/theme1-800x375.png";
    } else if (theme === "2번 테마") {
      return "/images/theme/theme2-800x375.png";
    } else if (theme === "3번 테마") {
      return "/images/theme/theme3-800x375.png";
    }
  }
};
