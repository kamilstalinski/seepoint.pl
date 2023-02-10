import Layout from "../components/Layout";
import "../styles/index.scss";
import { appWithTranslation } from "next-i18next";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { DefaultSeo, LocalBusinessJsonLd } from "next-seo";
import { useEffect, useState } from "react";
import Script from "next/script";
import ConsentContext from "../util/ConsentContext";
import Cookies from "js-cookie";

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
  const [consent, setConsent] = useState();

  // useEffect(() => {
  //   if (Cookies.get("Consent") === undefined) {
  //     console.log("Wchodzę na stronę pierwszy raz");
  //     if (window.ga) window.ga("remove");
  //   }
  //   if (Cookies.get("Consent") === "false") {
  //     // document.cookie.split(";").forEach(function (c) {
  //     //   document.cookie = c
  //     //     .replace(/^ +/, "")
  //     //     .replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/");
  //     // });
  //     Cookies.remove("_ga");
  //     Cookies.remove("_gid");
  //     Cookies.remove("_gat");
  //     console.log("Ciasteczko Straciło wazność");
  //   }
  //   if (Cookies.get("Consent") === "true") {
  //     console.log("ciasteczko jest wazne");
  //   }
  // }, [consent]);

  useEffect(() => {
    setConsent(Cookies.get("Consent"));
    console.log("pobieram informację o cookie");
  }, []);

  useEffect(() => {
    console.log(consent);
  }, [consent]);

  const handleAccept = () => {
    setConsent(true);
    Cookies.set("Consent", true, { expires: 365 });
  };

  const handleReject = () => {
    setConsent(false);
    Cookies.set("Consent", false, { expires: 365 });
  };

  return (
    <ConsentContext.Provider value={{ handleAccept, handleReject, consent }}>
      <Layout>
        {consent && (
          <Script id='google-analytics' strategy='afterInteractive'>
            {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'UA-136347637-2');
        gtag('config', 'G-M53GGB7HPN');
        `}
          </Script>
        )}

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
            streetAddress: "ul. I Brygady Legionów 15",
            addressLocality: "Goleniów",
            postalCode: "72-100",
            addressCountry: "PL",
          }}
          geo={{
            latitude: "53.5574121",
            longitude: "14.8476345",
          }}
          location={{
            logo: "https://seepoint.pl/app/themes/seepoint-theme/assets/img/logo_seepoint@2x.png",
            url: "https://seepoint.pl/",
            hasMap: "https://goo.gl/maps/sRHgiNPSsbgbv4h89",
          }}
        />
        <Component {...pageProps} />
      </Layout>
    </ConsentContext.Provider>
  );
};

export default appWithTranslation(MyApp);
