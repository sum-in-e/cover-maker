import { SizeType } from "@/modules/types/optionType";

type sizeObjType = {
  [size in SizeType]: {
    width: string;
    height: string;
  };
};

export const getPreviewCoverSize = (size: SizeType) => {
  const sizeObj: sizeObjType = {
    "1080 x 1080": {
      width: "600px",
      height: "600px",
    },
    "960 x 540": {
      width: "600px",
      height: "337.5px",
    },
    "960 x 450": {
      width: "600px",
      height: "281.25px",
    },
    "800 x 375": {
      width: "520px",
      height: "243.75px",
    },
  };

  return sizeObj[size];
};

export const getResultCoverSize = (size: SizeType) => {
  const sizeObj: sizeObjType = {
    "1080 x 1080": {
      width: "1080px",
      height: "1080px",
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
