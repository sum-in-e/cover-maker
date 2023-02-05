import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="ko">
        <title>COVER MAKER</title>
        <Head>
          <link rel="icon" href="/LOGO_covermaker.svg" />
          <meta name="description" content="내가 만드는 COVER MAKER" />
          <meta content="width=device-width, initial-scale=1" name="viewport" />
          <meta property="og:title" content="COVER MAKER" />
          <meta property="og:type" content="website" />
          <meta property="og:image" content="/images/og_image.png" />
          <meta property="og:image:alt" content="내가 만드는 COVER MAKER" />
          <meta property="og:description" content="내가 만드는 COVER MAKER" />
          <meta
            property="og:url"
            content="https://cover-maker-olive.vercel.app/"
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
