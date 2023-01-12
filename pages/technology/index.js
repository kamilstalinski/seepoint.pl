import ContactForm from "../../components/ContactForm";
import TechCarousel from "../../components/TechCarousel";
import Image from "next/image";
import techImage from "../../public/static/technology.webp";
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
      ])),
    },
  };
}

const Technology = () => {
  const { t } = useTranslation("technologies");
  return (
    <div className='technology'>
      <div className='hero' style={{ marginBottom: "8rem" }}>
        <div className='hero__img-container2'>
          <Image
            priority={true}
            src={techImage}
            layout='fill'
            objectFit='cover'
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
