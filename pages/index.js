import AboutHero from "../components/AboutHero";
import TechCarousel from "../components/TechCarousel";
import ProductSlider from "../components/ProductSlider";
import ContactForm from "../components/ContactForm";
import Rewards from "../components/Rewards";
import Image from "next/image";
import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

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
        "consentPopup",
      ])),
    },
  };
}

const About = () => {
  const { t } = useTranslation(["about"]);

  return (
    <div className='about'>
      <Head>
        <title>{t("metaTitle")}</title>
        <meta name='description' content={t("metaDescription")} />
        <meta key='robots' name='robots' content='noindex,nofollow' />
        <meta key='googlebot' name='googlebot' content='noindex,nofollow' />
      </Head>
      <AboutHero t={t} />
      <div className='container about__info'>
        <div className='about__description'>
          <h2>{t("about")}</h2>
          <p>{t("description1")}</p>
          <p>{t("description2")}</p>
        </div>
        <div className='about__pros'>
          <div className='about__pros-item'>
            <img src='/work.svg' alt='work' />
            <p>{t("pros1")}</p>
          </div>
          <div className='about__pros-item'>
            <img src='/date.svg' alt='date' />
            <p>{t("pros2")}</p>
          </div>
          <div className='about__pros-item'>
            <img src='task.svg' alt='task' />
            <p>{t("pros3")}</p>
          </div>
          <div className='about__pros-item'>
            <img src='/people.svg' alt='people' />
            <p>{t("pros4")}</p>
          </div>
          <div className='about__pros-item'>
            <img src='/pricetag.svg' alt='pricetag' />
            <p>{t("pros5")}</p>
          </div>
        </div>
      </div>
      <div className='about__us container full-bleed'>
        <div className='img-container'>
          <Image
            priority={true}
            src='/static/team.webp'
            layout='responsive'
            width={1036}
            height={703}
            alt='team'
          />
        </div>
        <div className='about__us-description'>
          <div className='wrapper'>
            <h2>{t("teamTitle")}</h2>
            <p>{t("teamDescription")}</p>
          </div>
        </div>
      </div>
      <TechCarousel text={t("ourOffer")} />
      <ProductSlider />
      <ContactForm>{t("contactForm")}</ContactForm>
      <Rewards />
    </div>
  );
};

export default About;
