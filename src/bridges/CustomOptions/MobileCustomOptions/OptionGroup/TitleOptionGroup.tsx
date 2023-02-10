import { TitleContext } from "@/bridges/CoverMaker/Provider/TitleProvider";
import { HBox } from "@/component/HBox";
import { TextField } from "@mui/material";
import { ChangeEvent, useContext } from "react";

const TitleOptionGroup = () => {
  const { mainTitle, subTitle, onChangeMainTitle, onChangeSubTitle } =
    useContext(TitleContext);

  const handleChangeMainTitle = (event: ChangeEvent<HTMLInputElement>) => {
    onChangeMainTitle(event.target.value);
  };

  const handleChangeSubTitle = (event: ChangeEvent<HTMLInputElement>) => {
    onChangeSubTitle(event.target.value);
  };

  return (
    <HBox sx={{ gap: "4px" }}>
      <TextField
        variant="outlined"
        value={mainTitle}
        placeholder="제목을 입력하세요"
        onChange={handleChangeMainTitle}
        autoComplete="off"
      />
      <TextField
        variant="outlined"
        value={subTitle}
        placeholder="제목을 입력하세요"
        onChange={handleChangeSubTitle}
        autoComplete="off"
      />
    </HBox>
  );
};

export default TitleOptionGroup;
