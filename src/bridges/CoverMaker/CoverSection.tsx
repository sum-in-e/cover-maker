import { FontContext } from "@/bridges/CoverMaker/Provider/FontProvider";
import { SizeContext } from "@/bridges/CoverMaker/Provider/SizeProvider";
import { ThemeContext } from "@/bridges/CoverMaker/Provider/ThemeProvider";
import { TitleContext } from "@/bridges/CoverMaker/Provider/TitleProvider";
import { Section } from "@/component/Section";
import { VBox } from "@/component/VBox";
import { useCover } from "@/modules/hooks/useCover";
import { colors } from "@/styles/colors";
import { Paper, styled } from "@mui/material";
import { forwardRef, RefObject, useContext } from "react";

const CoverSection = forwardRef((props, ref) => {
  const { size } = useContext(SizeContext);
  const { theme } = useContext(ThemeContext);
  const { mainTitle, subTitle, isShowMainTitleGuide, isShowSubTitleGuide } =
    useContext(TitleContext);
  const { font } = useContext(FontContext);

  const { coverSize, coverTheme, coverFont } = useCover({ size, theme, font });
  console.log(coverFont.fontFamily);
  return (
    <Section
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "4px",
        minWidth: "1000px",
        padding: "20px",
        backgroundColor: colors.white,
        boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
      }}
    >
      <Paper
        ref={ref as RefObject<HTMLDivElement>}
        elevation={3}
        sx={{
          width: coverSize.width,
          height: coverSize.height,
          minWidth: coverSize.width,
          minHeight: coverSize.height,
          borderRadius: "0px",
          backgroundImage: `url(${coverTheme})`,
        }}
      >
        <VBox
          sx={{
            justifyContent: "center",
            alignItems: "center",
            paddingX: coverFont.paddingX,
            width: `calc(100% - ${coverFont.paddingX} - ${coverFont.paddingX})`,
            height: "100%",
            gap: "40px",
          }}
        >
          {isShowMainTitleGuide ? (
            <MainTitle
              sx={{
                color: coverFont.color,
                fontSize: coverFont.fontSize,
                fontFamily: coverFont.fontFamily,
              }}
            >
              제목을 입력하세요
            </MainTitle>
          ) : (
            mainTitle && (
              <MainTitle
                sx={{
                  color: coverFont.color,
                  fontSize: coverFont.fontSize,
                  fontFamily: coverFont.fontFamily,
                }}
              >
                {mainTitle}
              </MainTitle>
            )
          )}
          {isShowSubTitleGuide ? (
            <SubTitle
              sx={{ color: coverFont.color, fontFamily: coverFont.fontFamily }}
            >
              제목을 입력하세요
            </SubTitle>
          ) : (
            subTitle && (
              <SubTitle
                sx={{
                  color: coverFont.color,
                  fontFamily: coverFont.fontFamily,
                }}
              >
                {subTitle}
              </SubTitle>
            )
          )}
        </VBox>
      </Paper>
    </Section>
  );
});

export default CoverSection;

const MainTitle = styled("span")({
  fontSize: "52px",
  fontWeight: 500,
  color: "white",
  wordBreak: "keep-all",
  textAlign: "center",
  lineHeight: "60px",
});

const SubTitle = styled("span")({
  fontSize: "16px",
  color: "white",
  wordBreak: "keep-all",
  textAlign: "center",
  lineHeight: "22px",
});
