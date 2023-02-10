import { FontType } from "@/modules/types/optionType";
import { createContext, ReactNode, useState } from "react";

export interface FontContextType {
  font: FontType;
  onClickFont: (newFont: FontType) => void;
}

export const FontContext = createContext<FontContextType>({
  font: "Do Hyeon",
  onClickFont: () => {},
});

const FontProvider = ({ children }: { children: ReactNode }) => {
  const [font, setFont] = useState<FontType>("Noto Sans Korean");

  const handleClickFont = (selectedFont: FontType) => {
    setFont(selectedFont);
  };

  const fontContextValue = {
    font,
    onClickFont: handleClickFont,
  };

  return (
    <FontContext.Provider value={fontContextValue}>
      {children}
    </FontContext.Provider>
  );
};

export default FontProvider;
