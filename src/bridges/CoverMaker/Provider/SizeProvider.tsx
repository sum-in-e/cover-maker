import { SizeType } from "@/modules/types/optionType";
import { createContext, ReactNode, useState } from "react";

export interface SizeContextType {
  size: SizeType;
  onClickSize: (newSize: SizeType) => void;
}

export const SizeContext = createContext<SizeContextType>({
  size: "600 x 600",
  onClickSize: () => {},
});

const SizeProvider = ({ children }: { children: ReactNode }) => {
  const [size, setSize] = useState<SizeType>("600 x 600");

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
