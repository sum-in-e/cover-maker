import { SizeType } from "@/modules/types/optionType";

type sizeObjType = {
  [size in SizeType]: {
    width: string;
    height: string;
  };
};

export const getCoverSize = ({ size }: { size: SizeType }) => {
  const sizeObj: sizeObjType = {
    "600 x 600": {
      width: "600px",
      height: "600px",
    },
    "960 x 540": {
      width: "960px",
      height: "540px",
    },
    "960 x 450": {
      width: "960px",
      height: "450px",
    },
    "800 x 375": {
      width: "800px",
      height: "375px",
    },
  };

  return sizeObj[size];
};
