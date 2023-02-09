import { Html, Head, Main, NextScript } from "next/document";
import { ConsentProvider } from "../util/ConsentContext";
import { useContext } from "react";
import Script from "next/script";

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel='shortcut icon' type='image/x-icon' href='/favicon.png' />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
