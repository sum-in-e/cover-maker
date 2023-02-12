import { createContext, ReactNode, useState } from "react";

export interface TitleContextType {
  mainTitle: string;
  onChangeMainTitle: (newTitle: string) => void;
  subTitle: string;
  onChangeSubTitle: (newTitle: string) => void;
  isShowMainTitleGuide: boolean;
  onChangeShowMainTitleGuide: (isShowGuide: boolean) => void;
  isShowSubTitleGuide: boolean;
  onChangeShowSubTitleGuide: (isShowGuide: boolean) => void;
}

export const TitleContext = createContext<TitleContextType>({
  mainTitle: "",
  onChangeMainTitle: () => {},
  subTitle: "",
  onChangeSubTitle: () => {},
  isShowMainTitleGuide: true,
  onChangeShowMainTitleGuide: () => {},
  isShowSubTitleGuide: true,
  onChangeShowSubTitleGuide: () => {},
});

const TitleProvider = ({ children }: { children: ReactNode }) => {
  const [mainTitle, setMainTitle] = useState("");
  const [subTitle, setSubTitle] = useState("");
  const [isShowMainTitleGuide, setIsShowMainTitleGuide] = useState(true);
  const [isShowSubTitleGuide, setIsShowSubTitleGuide] = useState(true);

  const handleChangeMainTitle = (newTitle: string) => {
    setMainTitle(newTitle);
  };

  const handleChangeSubTitle = (newTitle: string) => {
    setSubTitle(newTitle);
  };

  const handleChangeShowMainTitleGuide = (isShowGuide: boolean) => {
    setIsShowMainTitleGuide(isShowGuide);
  };

  const handleChangeShowSubTitleGuide = (isShowGuide: boolean) => {
    setIsShowSubTitleGuide(isShowGuide);
  };

  const titleContextValue = {
    mainTitle,
    onChangeMainTitle: handleChangeMainTitle,
    subTitle,
    onChangeSubTitle: handleChangeSubTitle,
    isShowMainTitleGuide,
    onChangeShowMainTitleGuide: handleChangeShowMainTitleGuide,
    isShowSubTitleGuide,
    onChangeShowSubTitleGuide: handleChangeShowSubTitleGuide,
  };

  return (
    <TitleContext.Provider value={titleContextValue}>
      {children}
    </TitleContext.Provider>
  );
};

export default TitleProvider;
