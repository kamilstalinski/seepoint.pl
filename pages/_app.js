import Layout from "../components/Layout";
import "../styles/index.scss";
import { appWithTranslation } from "next-i18next";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Script from "next/script";

config.autoAddCss = false;

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        "navbar",
        "footer",
        "searchbar",
        "contactForm",
        "slider",
      ])),
    },
  };
}

const MyApp = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Script
        strategy='afterInteractive'
        src={`https://www.googletagmanager.com/gtag/js?id=UA-136347637-2`}
      />
      <Script id='google-analytics' strategy='afterInteractive'>
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'UA-136347637-2');
        `}
      </Script>
      <Component {...pageProps} />
    </Layout>
  );
};

export default appWithTranslation(MyApp);
