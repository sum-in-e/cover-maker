import { SizeType } from "@/modules/types/optionType";
import { createContext, ReactNode, useState } from "react";

export interface SizeContextType {
  size: SizeType;
  onClickSize: (newSize: SizeType) => void;
}

export const SizeContext = createContext<SizeContextType>({
  size: "1080 x 1080",
  onClickSize: () => {},
});

const SizeProvider = ({ children }: { children: ReactNode }) => {
  const [size, setSize] = useState<SizeType>("1080 x 1080");

  const handleClickSize = (selectedSize: SizeType) => {
    setSize(selectedSize);
  };

  const sizeContextValue = {
    size,
    onClickSize: handleClickSize,
  };

  return (
    <SizeContext.Provider value={sizeContextValue}>
      {children}
    </SizeContext.Provider>
  );
};

export default SizeProvider;
