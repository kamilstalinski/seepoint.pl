import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import Head from "next/head";

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        "about",
        "common",
        "navbar",
        "footer",
        "searchbar",
        "contactForm",
        "slider",
        "rewards",
        "carousel",
        "error",
        "consentPopup",
      ])),
    },
  };
}

export default function FourOFour() {
  const { t } = useTranslation("error");

  return (
    <div className='wrapper-404'>
      <Head>
        <title>{t("404")}</title>
        <meta key='robots' name='robots' content='noindex,nofollow' />
        <meta key='googlebot' name='googlebot' content='noindex,nofollow' />
      </Head>
      <h1>Ooops!</h1>
      <h2>{t("404")}</h2>
      <button className='primary-button'>
        <Link href={"/"}>{t("button")}</Link>
      </button>
      <div className='circle'></div>
      <div className='circle2'></div>
    </div>
  );
}
