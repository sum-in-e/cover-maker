import CustomActionsSection from "@/bridges/CustomActionsSection";
import { VBox } from "@/component/VBox";
import { SizeType, ThemeType } from "@/modules/types/actionType";
import { colors } from "@/styles/colors";
import { Alert, Box, Paper, Snackbar, styled, Typography } from "@mui/material";
import { Inter } from "@next/font/google";
import { useRef, useState } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import { toPng } from "html-to-image";
import { ButtonProps } from "@/bridges/CustomActionsSection/ButtonActionGroup";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [size, setSize] = useState<SizeType>("first");
  const [theme, setTheme] = useState<ThemeType>("1번 테마");

  const isOver760px = useMediaQuery("(min-width:760px)");
  const coverRef = useRef(null);

  const sizes = {
    // 1080 1080 - 1:1
    first: {
      width: isOver760px ? "500px" : "300px",
      height: isOver760px ? "500px" : "300px",
      padding: isOver760px ? "" : "",
    },
    // 960 540 - 16:9
    second: {
      width: isOver760px ? "500px" : "300px",
      height: isOver760px ? "281.25px" : "168.75px",
      padding: isOver760px ? "" : "",
    },
    // 960 450 - 32:15
    third: {
      width: isOver760px ? "500px" : "300px",
      height: isOver760px ? "234.375px" : "140.625px",
      padding: isOver760px ? "" : "",
    },
    // 800 375 - 32:15
    fourth: {
      width: isOver760px ? "480px" : "280px",
      height: isOver760px ? "225px" : "131.25px",
      padding: "30%",
    },
  };

  const handleClickTheme = (selectedTheme: ThemeType) => {
    setTheme(selectedTheme);
  };

  const themeButtons: ButtonProps[] = [
    {
      value: "1번 테마",
      onClick: () => handleClickTheme("1번 테마"),
      isSelected: theme === "1번 테마",
    },
    {
      value: "2번 테마",
      onClick: () => handleClickTheme("2번 테마"),
      isSelected: theme === "2번 테마",
    },
    {
      value: "3번 테마",
      onClick: () => handleClickTheme("3번 테마"),
      isSelected: theme === "3번 테마",
    },
  ];

  const getImage = () => {
    const coverElement = coverRef.current;

    if (coverElement) {
      toPng(coverElement).then((image) => {
        // TODO: 저장할때 원본 사이즈로 저장되도록 해야함..
        const link = window.document.createElement("a");
        link.download = "my-cover" + ".png";
        link.href = image;
        link.click();
        setIsOpen(true);
      });
    }
  };

  const handleClickSaveToImage = () => {
    getImage();
  };

  const handleCloseSnackbar = () => {
    setIsOpen(false);
  };

  const handleClickSize = (selectedSize: SizeType) => {
    setSize(selectedSize);
  };

  // TODO: 조합에 따른 src, style을 반환하는 하나의 object 만들어서 관리 필요
  const getTheme = () => {
    if (size === "first") {
      if (theme === "1번 테마") {
        return "/images/theme/theme1-1080x1080.png";
      } else if (theme === "2번 테마") {
        return "/images/theme/theme2-1080x1080.png";
      } else if (theme === "3번 테마") {
        return "/images/theme/theme3-1080x1080.png";
      }
    } else if (size === "second") {
      if (theme === "1번 테마") {
        return "/images/theme/theme1-960x540.png";
      } else if (theme === "2번 테마") {
        return "/images/theme/theme2-960x540.png";
      } else if (theme === "3번 테마") {
        return "/images/theme/theme3-960x540.png";
      }
    } else if (size === "third") {
      if (theme === "1번 테마") {
        return "/images/theme/theme1-960x450.png";
      } else if (theme === "2번 테마") {
        return "/images/theme/theme2-960x450.png";
      } else if (theme === "3번 테마") {
        return "/images/theme/theme3-960x450.png";
      }
    } else if (size === "fourth") {
      if (theme === "1번 테마") {
        return "/images/theme/theme1-800x375.png";
      } else if (theme === "2번 테마") {
        return "/images/theme/theme2-800x375.png";
      } else if (theme === "3번 테마") {
        return "/images/theme/theme3-800x375.png";
      }
    }
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
          borderRadius: "4px",
        }}
      >
        <Paper
          elevation={2}
          sx={{
            width: sizes[size].width,
            height: sizes[size].height,
            backgroundImage: `url(${getTheme()})`,
            backgroundSize: "100% 100%",
            borderRadius: "0px",
          }}
          ref={coverRef}
        >
          <VBox sx={{ alignItems: "center", padding: "10% 15%" }}>
            <Typography
              sx={{ fontSize: "40px", fontWeight: 600, color: "white" }}
            >
              COVER MAKER
            </Typography>
            <Typography sx={{ fontSize: "14px", color: "white" }}>
              COVER MAKER
            </Typography>
          </VBox>
        </Paper>
      </VBox>
      <VBox
        sx={{
          gap: "15px",
          width: "100%",
        }}
      >
        <CustomActionsSection
          size={size}
          themeButtons={themeButtons}
          onClickSize={handleClickSize}
        />
        <CustomButton onClick={handleClickSaveToImage}>
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
