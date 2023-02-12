import { FontContext } from "@/bridges/CoverMaker/Provider/FontProvider";
import { SizeContext } from "@/bridges/CoverMaker/Provider/SizeProvider";
import { ThemeContext } from "@/bridges/CoverMaker/Provider/ThemeProvider";
import { TitleContext } from "@/bridges/CoverMaker/Provider/TitleProvider";
import { Section } from "@/component/Section";
import { VBox } from "@/component/VBox";
import { useCover } from "@/modules/hooks/useCover";
import { colors } from "@/styles/colors";
import { Paper, Typography } from "@mui/material";
import { useContext } from "react";

const CoverSection = () => {
  const { size } = useContext(SizeContext);
  const { theme } = useContext(ThemeContext);
  const { mainTitle, subTitle } = useContext(TitleContext);
  const { font } = useContext(FontContext);

  const { coverSize, coverTheme } = useCover({ size, theme });

  return (
    <Section
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "4px",
        minWidth: "600px",
        padding: "20px",
        backgroundColor: colors.white,
        boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
      }}
    >
      <Paper
        elevation={3}
        sx={{
          width: coverSize.width,
          height: coverSize.height,
          backgroundImage: `url(${coverTheme})`,
          backgroundSize: "100% 100%",
          borderRadius: "0px",
        }}
        // ref={ref}
      >
        <VBox
          sx={{
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
            width: "100%",
          }}
        >
          <Typography
            sx={{
              fontSize: "52px",
              fontWeight: 600,
              color: "white",
              wordBreak: "break-all",
              textAlign: "center",
            }}
          >
            {mainTitle === "" ? "제목을 입력하세요" : mainTitle}
          </Typography>
          <Typography
            sx={{
              fontSize: "16px",
              color: "white",
              wordBreak: "break-all",
              textAlign: "center",
            }}
          >
            {subTitle === "" ? "제목을 입력하세요" : subTitle}
          </Typography>
        </VBox>
      </Paper>
    </Section>
  );
};

export default CoverSection;
