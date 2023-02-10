import { colors } from "@/styles/colors";
import { styled, Typography } from "@mui/material";
import { forwardRef } from "react";
import { Section } from "@/component/Section";
import CoverSection from "@/bridges/CoverMaker/DesktopCoverMaker/CoverSection";
import { DesktopCustomOptions } from "@/bridges/CustomOptions";
import { VBox } from "@/component/VBox";
import { HBox } from "@/component/HBox";

const DesktopCoverMaker = forwardRef((ref) => {
  const handleClickSaveToImage = () => {
    // getImage();
  };

  return (
    <Container>
      <Box>
        <Header>
          <Typography sx={{ fontSize: "40px", fontWeight: 600 }}>
            COVER MAKER
          </Typography>
        </Header>
        <HBox sx={{ justifyContent: "space-between", gap: "40px" }}>
          <CoverSection />
          <Section
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
              padding: "20px",
              borderRadius: "4px",
              backgroundColor: colors.white,
            }}
          >
            <DesktopCustomOptions />
            <CustomButton
              onClick={handleClickSaveToImage}
              sx={{ width: "100%", marginTop: "30px" }}
            >
              이미지로 저장하기
            </CustomButton>
          </Section>
        </HBox>
      </Box>
    </Container>
  );
});

export default DesktopCoverMaker;

const Header = styled("header")({});

const Container = styled("div")({
  display: "flex",
  justifyContent: "center",
});

const Box = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "20px",
  padding: "20px 40px",
  maxWidth: "1024px",
  backgroundColor: colors.primary.lightest,
});

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
