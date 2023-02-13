import { colors } from "@/styles/colors";
import {
  Alert,
  CircularProgress,
  Snackbar,
  styled,
  Typography,
} from "@mui/material";
import { forwardRef, useRef, useState } from "react";
import { Section } from "@/component/Section";
import CoverSection from "@/bridges/CoverMaker/CoverSection";
import { HBox } from "@/component/HBox";
import CustomOptions from "@/bridges/CustomOptions";
import { toPng } from "html-to-image";

const CoverMaker = forwardRef((ref) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  const coverRef = useRef<HTMLDivElement>(null);

  const saveToImage = () => {
    const coverElement = coverRef.current;

    if (coverElement) {
      setIsSaving(true);

      toPng(coverElement).then((image) => {
        const link = window.document.createElement("a");
        link.download = "my-cover" + ".png";
        link.href = image;
        link.click();
        setIsSaving(false);
        setIsOpen(true);
      });
    }
  };

  const handleClickSaveToImage = () => {
    saveToImage();
  };

  const handleCloseSnackbar = () => {
    setIsOpen(false);
  };

  return (
    <Container>
      <Box>
        <Header>
          <Typography sx={{ fontSize: "40px", fontWeight: 600 }}>
            COVER MAKER
          </Typography>
        </Header>
        <HBox sx={{ justifyContent: "space-between", gap: "20px" }}>
          <CoverSection ref={coverRef} />
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
            <CustomOptions />
            <CustomButton
              onClick={handleClickSaveToImage}
              sx={{ width: "100%", marginTop: "30px" }}
            >
              {isSaving ? (
                <CircularProgress
                  sx={{
                    color: colors.white,
                    width: "15px !important",
                    height: "15px !important",
                  }}
                />
              ) : (
                "이미지로 저장하기"
              )}
            </CustomButton>
          </Section>
        </HBox>
      </Box>
      <Snackbar
        open={isOpen}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity="success"
          sx={{ width: "100%" }}
        >
          커버가 저장되었습니다!
        </Alert>
      </Snackbar>
    </Container>
  );
});

export default CoverMaker;

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
