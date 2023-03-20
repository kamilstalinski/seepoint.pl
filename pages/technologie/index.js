import ContactForm from "../../components/ContactForm";
import TechCarousel from "../../components/TechCarousel";
import Image from "next/legacy/image";
import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        "technologies",
        "navbar",
        "footer",
        "searchbar",
        "contactForm",
        "slider",
        "carousel",
        "consentPopup",
      ])),
    },
  };
}

const Technology = () => {
  const { t } = useTranslation("technologies");
  return (
    <div className='technology'>
      <Head>
        <title>{t("metaName")}</title>
        <meta name='description' content='Technologie' />
        <meta key='robots' name='robots' content='noindex,nofollow' />
        <meta key='googlebot' name='googlebot' content='noindex,nofollow' />
      </Head>
      <div className='hero' style={{ marginBottom: "8rem" }}>
        <div className='hero__img-container2'>
          <img
            src='https://res.cloudinary.com/dnt5pai0z/image/upload/v1673565496/technology_fad5o9.webp'
            alt='tech-image'
          />
        </div>
        <div className='container'>
          <div className='hero__content'>
            <h1 style={{ color: "#6B7786" }}>{t("ourTech")}</h1>
            <p>{t("description")}</p>
          </div>
        </div>
      </div>
      <TechCarousel />
      <ContactForm>{t("contact")}</ContactForm>
    </div>
  );
};

export default Technology;
