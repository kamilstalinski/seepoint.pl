import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import Head from "next/head";

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        "navbar",
        "footer",
        "searchbar",
        "consentPopup",
        "privacy",
      ])),
    },
  };
}

export default function PrivacyPolicy() {
  const { t } = useTranslation("privacy");

  return (
    <div className='document container'>
      <Head>
        <title>Polityka Prywatności</title>
      </Head>
      <h1>{t("privacyPolicy")}</h1>
      <h2>{t("url")}</h2>
      <hr />
      <ol>
        <li>
          <h2>{t("general")}</h2>
        </li>
        <ol className='inner'>
          <li>{t("general1")}</li>
          <li>{t("general2")}</li>
        </ol>
        <li>
          <h2>{t("type")}</h2>
        </li>
        <ol className='inner'>
          <li>
            {t("type1")}
            <ol id='internal-letters'>
              <li>{t("type1a")}</li>
            </ol>
          </li>
          <li>
            {t("type2")}
            <ol id='internal-letters'>
              <li>{t("type2a")}</li>
              <li>{t("type2b")}</li>
            </ol>
          </li>
          <li>
            {t("type3")}
            <ol id='internal-letters'>
              <li>{t("type3a")}</li>
              <li>{t("type3b")}</li>
            </ol>
          </li>
          <li>{t("type4")}</li>
          <li>{t("type5")}</li>
          <li>{t("type6")}</li>
          <li>{t("type7")}</li>
          <li>
            {t("type8")}
            <ol id='internal-letters'>
              <li>{t("type8a")}</li>
              <li>{t("type8b")}</li>
              <li>{t("type8c")}</li>
            </ol>
          </li>
        </ol>
        <li>
          <h2>{t("share")}</h2>
        </li>
        <ol className='inner'>
          <li>{t("share1")}</li>
          <li>{t("share2")}</li>
        </ol>
        <li>
          <h2>{t("rights")}</h2>
          <ol className='inner'>
            <li>{t("rights1")}</li>
            <li>
              {t("rights2")}
              <ol id='internal-letters'>
                <li>{t("rights2a")}</li>
                <li>{t("rights2b")}</li>
                <li>{t("rights2c")}</li>
                <li>{t("rights2d")}</li>
                <li>{t("rights2e")}</li>
                <li>{t("rights2f")}</li>
                <li>{t("rights2g")}</li>
              </ol>
            </li>
            <li>{t("rights3")}</li>
            <li>{t("rights4")}</li>
            <li>{t("rights5")}</li>
          </ol>
        </li>
        <li>
          <h2>{t("cookies")}</h2>
          <ol className='inner'>
            <li>{t("cookies1")}</li>
            <li>{t("cookies2")}</li>
            <li>
              {t("cookies3")}
              <ol id='internal-letters'>
                <li>{t("cookies3a")}</li>
              </ol>
            </li>
            <li>{t("cookies4")}</li>
            <li>{t("cookies5")}</li>
          </ol>
        </li>
        <li>
          <h2>{t("provisions")}</h2>
          <ol className='inner'>
            <li>{t("provisions1")}</li>
            <li>{t("provisions2")}</li>
            <li>{t("provisions3")}</li>
          </ol>
        </li>
      </ol>
      <hr />
    </div>
  );
}
