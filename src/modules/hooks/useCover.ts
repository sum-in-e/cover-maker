import { FontType, SizeType, ThemeType } from "@/modules/types/optionType";
import { getCoverFont } from "@/modules/utils/getCoverFont";
import { getCoverSize } from "@/modules/utils/getCoverSize";
import { getCoverTheme } from "@/modules/utils/getCoverTheme";

interface Props {
  size: SizeType;
  theme: ThemeType;
  font: FontType;
  // title
  // subtitle
}

/**
 * @remarks 현재 선택된 옵션들을 받아서 최종적으로 커버에 어떤 옵션들이 적용되어야 하는지롤 내려주는 커스텀 훅
 * 모바일 커버하고 데탑 커버가 사이즈 등이 다르기 때문에,, 훅 자체는 분리가 필요한 상황?
 * 근데 둘이 달라지는 건,, 사이즈 뿐이다. 테마도 src도 같고, 폰트도 같고, 텍스트도 같아 그럼,, 훅을 분리할 게 아니라
 * 사이즈 구하는 것만 유틸을 빼도 될 거 같다?
 */
export const useCover = ({ size, theme, font }: Props) => {
  const coverSize = getCoverSize({ size });
  const coverTheme = getCoverTheme({ size, theme });
  const coverFont = getCoverFont({ size, theme, font });

  return {
    coverSize,
    coverTheme,
    coverFont,
    // coverTitle:,
    // coverSubtitle:,
  };
};
