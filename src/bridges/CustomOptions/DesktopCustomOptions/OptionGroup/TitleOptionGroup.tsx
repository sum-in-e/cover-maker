import { TitleContext } from "@/bridges/CoverMaker/Provider/TitleProvider";
import { VBox } from "@/component/VBox";
import { TextField, Typography } from "@mui/material";
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
    <VBox sx={{ gap: "15px" }}>
      <VBox sx={{ gap: "3px" }}>
        <Typography variant="body1" fontWeight={600} color="black">
          메인 타이틀
        </Typography>
        <TextField
          variant="outlined"
          value={mainTitle}
          placeholder="제목을 입력하세요"
          onChange={handleChangeMainTitle}
          size="small"
          autoComplete="off"
        />
      </VBox>
      <VBox sx={{ gap: "3px" }}>
        <Typography variant="body1" fontWeight={600} color="black">
          서브 타이틀
        </Typography>
        <TextField
          variant="outlined"
          value={subTitle}
          placeholder="제목을 입력하세요"
          onChange={handleChangeSubTitle}
          size="small"
          autoComplete="off"
        />
      </VBox>
    </VBox>
  );
};

export default TitleOptionGroup;
