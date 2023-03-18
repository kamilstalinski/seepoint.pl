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
        "rodo",
      ])),
    },
  };
}

export default function Rodo() {
  const { t } = useTranslation("rodo");

  return (
    <div className='document container'>
      <Head>
        <title>{t("metaTitle")}</title>
        <meta key='robots' name='robots' content='noindex,nofollow' />
        <meta key='googlebot' name='googlebot' content='noindex,nofollow' />
      </Head>
      <h1>{t("h1")}</h1>
      <h2>{t("h2")}</h2>
      <h2>{t("valid")}</h2>
      <hr />
      <p>{t("regulation")}</p>
      <p>{t("article")}</p>
      <ol>
        <li>{t("article1")}</li>
        <li>{t("article2")}</li>
        <li>
          {t("article3")}
          <ol id='internal-letters'>
            <li>{t("article3a")}</li>
            <li>{t("article3b")}</li>
          </ol>
        </li>
        <li>{t("article4")}</li>
        <li>
          {t("article5")}
          <ol id='internal-letters'>
            <li>{t("article5a")}</li>
            <li>{t("article5b")}</li>
            <li>
              {t("article5c")}
              <ul id='internal'>
                <li>{t("article5c1")}</li>
                <li>{t("article5c2")}</li>
                <li>{t("article5c3")}</li>
                <li>{t("article5c4")}</li>
                <li>{t("article5c5")}</li>
              </ul>
            </li>
            <li>
              {t("article5d")}
              <ul id='internal'>
                <li>{t("article5d1")}</li>
                <li>{t("article5d2")}</li>
                <li>{t("article5d3")}</li>
                <li>{t("article5d4")}</li>
              </ul>
            </li>
            <li>
              {t("article5e")}
              <ul id='internal'>
                <li>{t("article5e1")}</li>
                <li>{t("article5e2")}</li>
              </ul>
            </li>
            <li>
              {t("article5f")}
              <ul id='internal'>
                <li>{t("article5f1")}</li>
                <li>{t("article5f2")}</li>
              </ul>
            </li>
          </ol>
        </li>
        <li>{t("article6")}</li>
        <li>
          {t("article7")}
          <p className='adress'>
            {t("article7-UODP1")}
            <br />
            {t("article7-UODP2")}
            <br />
            {t("article7-UODP3")}
          </p>
        </li>
        <li>{t("article8")}</li>
      </ol>
      <hr />
    </div>
  );
}
