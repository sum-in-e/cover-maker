import { TitleContext } from "@/bridges/CoverMaker/Provider/TitleProvider";
import { VBox } from "@/component/VBox";
import { colors } from "@/styles/colors";
import { TextField, Typography } from "@mui/material";
import { ChangeEvent, useContext } from "react";

const TitleOptionGroup = () => {
  const {
    mainTitle,
    subTitle,
    onChangeMainTitle,
    onChangeSubTitle,
    isShowMainTitleGuide,
    isShowSubTitleGuide,
    onChangeShowMainTitleGuide,
    onChangeShowSubTitleGuide,
  } = useContext(TitleContext);

  const handleChangeMainTitle = (event: ChangeEvent<HTMLInputElement>) => {
    onChangeMainTitle(event.target.value);
    if (isShowMainTitleGuide) {
      onChangeShowMainTitleGuide(false);
    }
  };

  const handleChangeSubTitle = (event: ChangeEvent<HTMLInputElement>) => {
    onChangeSubTitle(event.target.value);
    if (isShowSubTitleGuide) {
      onChangeShowSubTitleGuide(false);
    }
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
          placeholder="제목을 입력하세요."
          onChange={handleChangeMainTitle}
          size="small"
          autoComplete="off"
        />
        <Typography variant="caption" color={colors.primary.lighter}>
          *최초 입력 시 미리보기의 가이드 문구가 사라집니다.
        </Typography>
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
        <Typography variant="caption" color={colors.primary.lighter}>
          *최초 입력 시 미리보기의 가이드 문구가 사라집니다.
        </Typography>
      </VBox>
    </VBox>
  );
};

export default TitleOptionGroup;
