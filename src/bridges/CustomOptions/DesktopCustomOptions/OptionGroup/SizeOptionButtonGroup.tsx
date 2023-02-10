import { useContext } from "react";
import OptionButtonGroup from "@/bridges/CustomOptions/DesktopCustomOptions/OptionGroup/CommonOptionButtonGroup";
import { useSizeOptions } from "@/modules/hooks/useSizeOptions";
import { SizeContext } from "@/bridges/CoverMaker/Provider/SizeProvider";

const SizeOptionButtonGroup = () => {
  const { size, onClickSize } = useContext(SizeContext);
  const { sizeOptions } = useSizeOptions({ size, onClickSize });

  return <OptionButtonGroup title="사이즈" options={sizeOptions} />;
};

export default SizeOptionButtonGroup;
