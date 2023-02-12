import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="ko">
        <title>COVER MAKER</title>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <Head>
          <link rel="icon" href="/LOGO_covermaker.svg" />
          <meta name="description" content="내가 만드는 COVER MAKER" />
          <meta property="og:title" content="COVER MAKER" />
          <meta property="og:type" content="website" />
          <meta property="og:image" content="/images/og_image.png" />
          <meta property="og:image:alt" content="내가 만드는 COVER MAKER" />
          <meta property="og:description" content="내가 만드는 COVER MAKER" />
          <meta
            property="og:url"
            content="https://cover-maker-olive.vercel.app/"
          />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin={"use-credentials"}
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Do+Hyeon&family=Jua&family=Noto+Sans+KR:wght@400;500&family=Song+Myung&display=swap"
            rel="stylesheet"
          />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
