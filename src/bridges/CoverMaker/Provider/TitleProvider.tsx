import { createContext, ReactNode, useState } from "react";

export interface TitleContextType {
  mainTitle: string;
  onChangeMainTitle: (newTitle: string) => void;
  subTitle: string;
  onChangeSubTitle: (newTitle: string) => void;
}

export const TitleContext = createContext<TitleContextType>({
  mainTitle: "",
  onChangeMainTitle: () => {},
  subTitle: "",
  onChangeSubTitle: () => {},
});

const TitleProvider = ({ children }: { children: ReactNode }) => {
  const [mainTitle, setMainTitle] = useState("");
  const [subTitle, setSubTitle] = useState("");

  const handleChangeMainTitle = (newTitle: string) => {
    setMainTitle(newTitle);
  };

  const handleChangeSubTitle = (newTitle: string) => {
    setSubTitle(newTitle);
  };

  const titleContextValue = {
    mainTitle,
    onChangeMainTitle: handleChangeMainTitle,
    subTitle,
    onChangeSubTitle: handleChangeSubTitle,
  };

  return (
    <TitleContext.Provider value={titleContextValue}>
      {children}
    </TitleContext.Provider>
  );
};

export default TitleProvider;
