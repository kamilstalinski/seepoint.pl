import Map from "../components/GoogleMap";
import ContactForm from "../components/ContactForm";
import Image from "next/image";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        "contact",
        "navbar",
        "footer",
        "searchbar",
        "contactForm",
        "slider",
      ])),
    },
  };
}

const Contact = () => {
  const { t } = useTranslation("contact");
  return (
    <div className='contact'>
      <div className='contact__info'>
        <div className='img-container'>
          <Image
            src='https://res.cloudinary.com/dnt5pai0z/image/upload/v1673565429/contact_qehebj.webp'
            layout='fill'
            objectFit='cover'
            alt='contact image'
            loading='eager'
            priority='true'
          />
        </div>
        <div className='contact__details--right'>
          <h1>{t("contact")}</h1>
          <div className='contact__details'>
            <div className='contact__details--container'>
              <p className='description'>{t("con1")}</p>
              <div className='call-contact'>
                <Image
                  width={23}
                  height={20}
                  src='/static/call.webp'
                  alt='call icon'
                />
                <p>+48 91 418 11 91</p>
              </div>
              <div className='email-contact'>
                <Image
                  width={23}
                  height={20}
                  src='/static/email.webp'
                  alt='call icon'
                />
                <p>biuro@seepoint.pl</p>
              </div>
            </div>
            <div className='contact__details--container'>
              <p className='description'>{t("con2")}</p>
              <div className='call-contact'>
                <Image
                  width={23}
                  height={20}
                  src='/static/call.webp'
                  alt='call icon'
                />
                <p>+48 667 114 119</p>
              </div>
              <div className='email-contact'>
                <Image
                  width={23}
                  height={20}
                  src='/static/email.webp'
                  alt='call icon'
                />
                <p>rm@seepoint.pl</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='location__info'>
        <div className='contact__details--left'>
          <h2>{t("location")}</h2>
          <div className='contact__details'>
            <div className='contact__details--container'>
              <p className='description'>ul. I Brygady Legionów 15</p>
              <p className='description'>72-100, Goleniów, Polska</p>
            </div>
          </div>
        </div>
        <Map />
      </div>
      <ContactForm>{t("contactForm")}</ContactForm>
    </div>
  );
};

export default Contact;
