import CustomActionsSection from "@/bridges/CustomActionsSection";
import { HBox } from "@/component/HBox";
import { VBox } from "@/component/VBox";
import { SizeType } from "@/modules/types/actionType";
import { colors } from "@/styles/colors";
import { Alert, Box, Paper, Snackbar, styled, Typography } from "@mui/material";
import { Inter } from "@next/font/google";
import { useState } from "react";
const inter = Inter({ subsets: ["latin"] });

const sizes = {
  first: {
    width: "1080px",
    height: "1080px",
  },
  second: {
    width: "960px",
    height: "540px",
  },
  third: {
    width: "800px",
    height: "375px",
  },
};

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [size, setSize] = useState<SizeType>("first");

  const handleCloseSnackbar = () => {
    setIsOpen(false);
  };

  const handleClickSize = (selectedSize: SizeType) => {
    setSize(selectedSize);
  };

  return (
    <Container>
      <Box>
        <Typography sx={{ fontSize: "40px", fontWeight: 600 }}>
          COVER MAKER
        </Typography>
      </Box>
      <Box sx={{ minHeight: "300px", padding: "20px" }}>
        <Paper
          elevation={2}
          sx={{
            width: sizes[size].width,
            height: sizes[size].height,
          }}
        />
      </Box>
      <VBox
        sx={{
          padding: "16px",
          gap: "15px",
          // alignItems: "center",
          width: "100%",
        }}
      >
        <CustomActionsSection size={size} onClickSize={handleClickSize} />
        <CustomButton onClick={() => setIsOpen(true)}>
          이미지로 저장하기
        </CustomButton>
      </VBox>
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
}

const Container = styled("section")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "20px",
  padding: "20px",
}));

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
