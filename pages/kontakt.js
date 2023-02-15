import Map from "../components/GoogleMap";
import ContactForm from "../components/ContactForm";
import Image from "next/image";
import Head from "next/head";
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
        "consentPopup",
      ])),
    },
  };
}

const Contact = () => {
  const { t } = useTranslation("contact");
  return (
    <div className='contact'>
      <Head>
        <title>{t("metaTitle")}</title>
        <meta name='description' content={t("metaDescription")} />
        <meta key='robots' name='robots' content='noindex,nofollow' />
        <meta key='googlebot' name='googlebot' content='noindex,nofollow' />
      </Head>
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
              <div className='call'>
                <a id='contact-link' href='tel:+48-91-418-11-91'>
                  <Image
                    width={23}
                    height={20}
                    src='/static/call.webp'
                    alt='call icon'
                  />
                  <p>+48 91 418 11 91</p>
                </a>
              </div>
              <div className='email'>
                <a id='contact-link' href='mailto:biuro@seepoint.pl'>
                  <Image
                    width={23}
                    height={20}
                    src='/static/email.webp'
                    alt='email icon'
                  />
                  <p>biuro@seepoint.pl</p>
                </a>
              </div>
            </div>
            <div className='contact__details--container'>
              <p className='description'>{t("con2")}</p>
              <div className='call'>
                <a id='contact-link' href='tel:+48-667-114-119'>
                  <Image
                    width={23}
                    height={20}
                    src='/static/call.webp'
                    alt='call icon'
                  />
                  <p>+48 667 114 119</p>
                </a>
              </div>
              <div className='email'>
                <a id='contact-link' href='mailto:rm@seepoint.pl'>
                  <Image
                    width={23}
                    height={20}
                    src='/static/email.webp'
                    alt='email icon'
                  />
                  <p>rm@seepoint.pl</p>
                </a>
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
