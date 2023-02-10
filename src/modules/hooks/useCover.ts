import { SizeType, ThemeType } from "@/modules/types/optionType";
import {
  getDesktopCoverSize,
  getMobileCoverSize,
} from "@/modules/utils/getCoverSize";
import { useMediaQuery } from "@mui/material";

interface Props {
  size: SizeType;
  theme: ThemeType;
  // font
  // title
  // subtitle
}

/**
 * @remarks 현재 선택된 옵션들을 받아서 최종적으로 커버에 어떤 옵션들이 적용되어야 하는지롤 내려주는 커스텀 훅
 * 모바일 커버하고 데탑 커버가 사이즈 등이 다르기 때문에,, 훅 자체는 분리가 필요한 상황?
 * 근데 둘이 달라지는 건,, 사이즈 뿐이다. 테마도 src도 같고, 폰트도 같고, 텍스트도 같아 그럼,, 훅을 분리할 게 아니라
 * 사이즈 구하는 것만 유틸을 빼도 될 거 같다?
 */
export const useCover = ({ size, theme }: Props) => {
  const isDesktop = useMediaQuery("(min-width:1024px)");

  //* 최종 사이즈 내려주기
  const coverSize = isDesktop ? getDesktopCoverSize : getMobileCoverSize;

  //* 테마 타입에 따른 최종 테마 src 내려주기
  const getTheme = () => {
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
  return {
    coverSize,
    coverTheme: getTheme(),
    // coverFont:,
    // coverTitle:,
    // coverSubtitle:,
  };
};
