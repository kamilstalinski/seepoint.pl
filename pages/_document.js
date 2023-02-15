import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel='shortcut icon' type='image/x-icon' href='/favicon.png' />
        <meta name='robots' content='noindex, follow' />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
