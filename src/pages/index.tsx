import CustomActionsSection from "@/bridges/CustomActionsSection";
import { VBox } from "@/component/VBox";
import { SizeType } from "@/modules/types/actionType";
import { colors } from "@/styles/colors";
import { Alert, Box, Paper, Snackbar, styled, Typography } from "@mui/material";
import { Inter } from "@next/font/google";
import { useState } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [size, setSize] = useState<SizeType>("first");
  const isOver760px = useMediaQuery("(min-width:760px)");

  const sizes = {
    // 1080 1080 - 1:1
    first: {
      width: isOver760px ? "500px" : "300px",
      height: isOver760px ? "500px" : "300px",
    },
    // 960 540 - 16:9
    second: {
      width: isOver760px ? "500px" : "300px",
      height: isOver760px ? "281.25px" : "168.75px",
    },
    // 960 450 - 32:15
    third: {
      width: isOver760px ? "500px" : "300px",
      height: isOver760px ? "234.375px" : "140.625px",
    },
    // 800 375 - 32:15
    fourth: {
      width: isOver760px ? "480px" : "280px",
      height: isOver760px ? "225px" : "131.25px",
    },
  };

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
      <VBox
        sx={{
          alignItems: "center",
          justifyContent: "center",
          minWidth: isOver760px ? "550px" : "320px",
          minHeight: isOver760px ? "550px" : "320px",
          backgroundColor: colors.primary.lightest,
        }}
      >
        <Paper
          elevation={2}
          sx={{
            width: sizes[size].width,
            height: sizes[size].height,
          }}
        />
      </VBox>
      <VBox
        sx={{
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
