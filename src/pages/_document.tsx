import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="ko">
        <title>COVER MAKER</title>
        <Head>
          <meta content="width=device-width, initial-scale=1" name="viewport" />
          <meta name="description" content="내가 만드는 COVER MAKER" />
          <link rel="icon" href="/LOGO_covermaker.svg" />
          <meta property="og:title" content="COVER MAKER" />
          <meta property="og:type" content="website" />
          <meta property="og:image" content="%PUBLIC_URL%/og_image.png" />
          <meta property="og:image:alt" content="내가 만드는 COVER MAKER" />
          <meta property="og:description" content="내가 만드는 COVER MAKER" />
          <meta property="og:url" content="https://dahhnym.github.io/checo/" />
          {/* TODO: 배포 후 url 수정 */}
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
