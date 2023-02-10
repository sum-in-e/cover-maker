import { SizeContext } from "@/bridges/CoverMaker/Provider/SizeProvider";
import { ThemeContext } from "@/bridges/CoverMaker/Provider/ThemeProvider";
import { MobileCustomOptions } from "@/bridges/CustomOptions";
import { VBox } from "@/component/VBox";
import { useCover } from "@/modules/hooks/useCover";
import { colors } from "@/styles/colors";
import { Paper, styled, Typography } from "@mui/material";
import { forwardRef, useContext } from "react";

const MobileCoverMaker = forwardRef((ref) => {
  const { size, onClickSize } = useContext(SizeContext);
  const { theme } = useContext(ThemeContext);
  const { coverSize, coverTheme } = useCover({ size, theme });

  const handleClickSaveToImage = () => {
    // getImage();
  };

  return (
    <Container>
      <Header>
        <Typography sx={{ fontSize: "40px", fontWeight: 600 }}>
          COVER MAKER
        </Typography>
      </Header>
      <Section
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minWidth: "320px",
          minHeight: "320px",
          backgroundColor: colors.primary.lightest,
          borderRadius: "4px",
        }}
      >
        <Paper
          elevation={2}
          sx={{
            width: coverSize(size).width,
            height: coverSize(size).height,
            backgroundImage: `url(${coverTheme})`,
            backgroundSize: "100% 100%",
            borderRadius: "0px",
          }}
          //   ref={ref}
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
              sx={{ fontSize: "40px", fontWeight: 600, color: "white" }}
            >
              COVER MAKER
            </Typography>
            {/* <Typography sx={{ fontSize: "14px", color: "white" }}>
                  COVER MAKER
                </Typography> */}
          </VBox>
        </Paper>
      </Section>
      <Section
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "15px",
          width: "100%",
        }}
      >
        <MobileCustomOptions />
        <CustomButton onClick={handleClickSaveToImage}>
          이미지로 저장하기
        </CustomButton>
      </Section>
    </Container>
  );
});

export default MobileCoverMaker;

const Header = styled("header")({});

const Container = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "20px",
  padding: "20px",
});

const Section = styled("section")({});

const CustomButton = styled("button")(({ theme }) => ({
  padding: "15px",
  borderRadius: "20px",
  backgroundColor: colors.primary.main,
  color: colors.white,
  fontSize: "15px",
  border: "none",
  maxWidth: "360px",
  ":hover": {
    backgroundColor: colors.primary.dark,
    cursor: "pointer",
  },
}));
