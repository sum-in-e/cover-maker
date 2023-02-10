import { ThemeType } from "@/modules/types/optionType";
import { createContext, ReactNode, useState } from "react";

export interface ThemeContextType {
  theme: ThemeType;
  onClickTheme: (newTheme: ThemeType) => void;
}

export const ThemeContext = createContext<ThemeContextType>({
  theme: "1번 테마",
  onClickTheme: () => {},
});

const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<ThemeType>("1번 테마");

  const handleClickTheme = (selectedTheme: ThemeType) => {
    setTheme(selectedTheme);
  };

  const themeContextValue = {
    theme,
    onClickTheme: handleClickTheme,
  };
  return (
    <ThemeContext.Provider value={themeContextValue}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
