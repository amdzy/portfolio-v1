import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en" className="dark">
        <Head>
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta name="author" content="A. Zabadany (amdzy)" />
          <meta property="og:locale" content="en_US" />
          <meta
            property="og:description"
            content="A. Zabadany (amdzy) is a Software engineer, Full stack Web Developer"
          />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:title" content="amdzy" />
          <meta
            name="twitter:description"
            content="A. Zabadany (amdzy) is a Software engineer, Full stack Web Developer"
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
