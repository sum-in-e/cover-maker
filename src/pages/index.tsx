import { Inter } from "@next/font/google";
import { useRef, useState } from "react";
import { toPng } from "html-to-image";
import { Alert, Snackbar } from "@mui/material";
import SizeProvider from "@/bridges/CoverMaker/Provider/SizeProvider";
import ThemeProvider from "@/bridges/CoverMaker/Provider/ThemeProvider";
import FontProvider from "@/bridges/CoverMaker/Provider/FontProvider";
import TitleProvider from "@/bridges/CoverMaker/Provider/TitleProvider";
import CoverMaker from "@/bridges/CoverMaker";

const inter = Inter({ subsets: ["latin"] });

export default function HomePage() {
  const [isOpen, setIsOpen] = useState(false);

  const handleCloseSnackbar = () => {
    setIsOpen(false);
  };

  const coverRef = useRef(null);

  const getImage = () => {
    const coverElement = coverRef.current;

    if (coverElement) {
      toPng(coverElement).then((image) => {
        const link = window.document.createElement("a");
        link.download = "my-cover" + ".png";
        link.href = image;
        link.click();
        setIsOpen(true);
      });
    }
  };

  return (
    <SizeProvider>
      <ThemeProvider>
        <FontProvider>
          <TitleProvider>
            <CoverMaker />
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
          </TitleProvider>
        </FontProvider>
      </ThemeProvider>
    </SizeProvider>
  );
}
