import { AppProps } from "next/app";
import { Global } from "@emotion/react";
import { global } from "@/styles/global";
import Layout from "@/component/Layout";
import { ThemeProvider } from "@mui/material";
import theme from "@/styles/theme";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={global} />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
};

export default App;
