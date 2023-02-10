import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel='shortcut icon' type='image/x-icon' href='/favicon.png' />
        <meta
          name='google-site-verification'
          content='HyyuNRLZYF3X4Rw04vbdOaA_OYyVMK8Pkizldz5_b9E'
        />
        <Script
          strategy='afterInteractive'
          src={`https://www.googletagmanager.com/gtag/js?id=UA-136347637-2`}
        />
        <Script
          type='text/javascript'
          async=''
          src='https://www.gstatic.com/recaptcha/releases/gEr-ODersURoIfof1hiDm7R5/recaptcha__pl.js'
          crossorigin='anonymous'
          integrity='sha384-zV7KOdyNuEZ1w0HyTRh+6LEJkIW5fZ2Vh0nz5pAmAyebXK73tFSmDeyk50mQfJCi'></Script>
        <Script
          type='text/javascript'
          async=''
          src='https://www.googletagmanager.com/gtag/js?id=G-M53GGB7HPN&amp;l=dataLayer&amp;cx=c'></Script>
        <Script
          type='text/javascript'
          async=''
          src='https://www.googletagmanager.com/gtag/js?id=UA-230795706-1&amp;l=dataLayer&amp;cx=c'></Script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
