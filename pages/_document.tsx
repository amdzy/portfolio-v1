import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta name="author" content="Soul Remix" />
          <meta property="og:locale" content="en_US" />
          <meta
            property="og:description"
            content="Soul Remix is a Software engineer, Full stack Developer"
          />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:title" content="Soul Remix" />
          <meta
            name="twitter:description"
            content="Soul Remix is a Software engineer, Full stack Developer"
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
