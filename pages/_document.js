import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel='shortcut icon' type='image/x-icon' href='/favicon.png' />
        <meta key='robots' name='robots' content='noindex,follow' />
        <meta key='googlebot' name='googlebot' content='noindex,follow' />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
