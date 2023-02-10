import { SizeType } from "@/modules/types/optionType";

type sizeObjType = {
  [size in SizeType]: {
    width: string;
    height: string;
  };
};

export const getMobileCoverSize = (size: SizeType) => {
  const sizeObj: sizeObjType = {
    "1080 x 1080": {
      width: "320px",
      height: "320px",
    },
    "960 x 540": {
      width: "320px",
      height: "180px",
    },
    "960 x 450": {
      width: "320px",
      height: "150px",
    },
    "800 x 375": {
      width: "300px",
      height: "140.625px",
    },
  };

  return sizeObj[size];
};

export const getDesktopCoverSize = (size: SizeType) => {
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
