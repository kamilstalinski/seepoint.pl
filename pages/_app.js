import Layout from "../components/Layout";
import "../styles/index.scss";
import { appWithTranslation } from "next-i18next";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { DefaultSeo, LocalBusinessJsonLd } from "next-seo";
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
      <DefaultSeo
        openGraph={{
          type: "website",
          locale: "pl_PL",
          localeAlternate: "en_GB",
          title: "Seepoint: PRODUCENT REKLAMY WIZUALNEJ",
          description:
            "Oferujemy: druk sublimacyjny, solwentowy, uv oraz plotery tnące. Wybierając Seepoint Sp. z o.o. decydujecie się Państwo na współpracę z profesjonalistami.",
          url: "https://seepoint.pl/",
          siteName: "Seepoint",
          images: [
            {
              url: "https://seepoint.pl/app/uploads/2019/06/LOGOFoot.png",
              width: 345,
              height: 126,
              alt: "Seepoint Logo",
              type: "image/png",
            },
          ],
        }}
        twitter={{
          cardType: "summary_large_image",
        }}
      />
      <LocalBusinessJsonLd
        name='Seepoint'
        images={[
          "https://seepoint.pl/app/themes/seepoint-theme/assets/img/logo_seepoint@2x.png",
        ]}
        telephone={["+48914181191", "+48667114119"]}
        address={{
          streetAdress: "ul. I Brygady Legionów 15",
          adressLocality: "Goleniów",
          postalCode: "72-100",
          adressCountry: "PL",
        }}
        geo={{
          latitude: "53.5574121",
          longitude: "14.8476345",
        }}
      />
      <Component {...pageProps} />
    </Layout>
  );
};

export default appWithTranslation(MyApp);
