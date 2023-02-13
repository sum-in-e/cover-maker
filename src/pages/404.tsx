import { colors } from "@/styles/colors";
import { styled } from "@mui/material";
import { useRouter } from "next/router";

const Page404 = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/");
  };
  return (
    <Container style={{}}>
      <Text>찾을 수 없는 페이지 입니다. 🥲</Text>
      <CustomButton onClick={handleClick}>COVER MAKER로 돌아가기</CustomButton>
    </Container>
  );
};

export default Page404;

const Container = styled("div")({
  minWidth: "100vw",
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "20px",
});

const Text = styled("span")({
  fontSize: "30px",
  fontWeight: 600,
});

const CustomButton = styled("button")({
  padding: "10px 30px",
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
});
