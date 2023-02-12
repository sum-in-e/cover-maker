import { FontContext } from "@/bridges/CoverMaker/Provider/FontProvider";
import OptionButtonGroup from "@/bridges/CustomOptions/OptionGroup/CommonOptionButtonGroup";
import { useFontOptions } from "@/modules/hooks/useFontOptions";
import { useContext } from "react";

const FontOptionButtonGroup = () => {
  const { font, onClickFont } = useContext(FontContext);
  const { fontOptions } = useFontOptions({ font, onClickFont });

  return <OptionButtonGroup title="폰트" options={fontOptions} />;
};

export default FontOptionButtonGroup;
