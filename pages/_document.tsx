import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
        <meta
          name="description"
          content="Here you can order your favorite pizza"
        />
      </Head>
      <body>
        <Main />

        <NextScript />
      </body>
    </Html>
  );
}
