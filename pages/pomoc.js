import Image from "next/legacy/image";
import Head from "next/head";
import ContactForm from "../components/ContactForm";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        "help",
        "navbar",
        "footer",
        "searchbar",
        "contactForm",
        "slider",
        "consentPopup",
      ])),
    },
  };
}

const Help = () => {
  const { t } = useTranslation("help");

  return (
    <div className='help'>
      <Head>
        <title>{t("metaTitle")}</title>
        <meta name='description' content={t("metaDescription")} />
        <meta key='robots' name='robots' content='noindex,nofollow' />
        <meta key='googlebot' name='googlebot' content='noindex,nofollow' />
      </Head>
      <div className='help-wrapper'>
        <div className='help-container container'>
          <div className='help-info '>
            <h1>{t("help")}</h1>
            <h2>{t("general")}</h2>
            <ul>
              <li>{t("gen1")}</li>
              <li>{t("gen2")}</li>
              <li>{t("gen3")}</li>
              <li>{t("gen4")}</li>
              <li>{t("gen5")}</li>
              <li>{t("gen6")}</li>
            </ul>
          </div>
          <div className='help-info'>
            <h2>{t("color")}</h2>
            <ul>
              <li>{t("col1")}</li>
              <li>{t("col2")}</li>
              <li>{t("col3")}</li>
              <li>{t("col4")}</li>
            </ul>
          </div>
          <div className='image-container'>
            <Image
              src='https://res.cloudinary.com/dnt5pai0z/image/upload/v1673565451/help1_bumlfj.webp'
              layout='fill'
              objectFit='contain'
              alt='help'
              loading='eager'
              priority={true}
            />
          </div>
        </div>
        <div className='help-container2 container'>
          <div className='help-info'>
            <h2>{t("vinyls")}</h2>
            <ul>
              <li>{t("vin1")}</li>
              <li>{t("vin2")}</li>
              <li>{t("vin3")}</li>
              <li>{t("vin4")}</li>
              <li>{t("vin5")}</li>
            </ul>
          </div>
          <div className='help-info'>
            <h2>{t("pcv")}</h2>
            <ul>
              <li>{t("pcv1")}</li>
              <li>{t("pcv2")}</li>
              <li>{t("pcv3")}</li>
            </ul>
          </div>
          <div className='image-container2'>
            <Image
              src='https://res.cloudinary.com/dnt5pai0z/image/upload/v1673565455/help2_mkvab4.webp'
              layout='fill'
              objectFit='contain'
              alt='help'
              priority={true}
            />
          </div>
        </div>
      </div>
      <ContactForm>{t("contact")}</ContactForm>
    </div>
  );
};

export default Help;

//
