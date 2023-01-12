import Image from "next/image";
import { useTranslation } from "next-i18next";

const ContactForm = ({ children }) => {
  const { t } = useTranslation("contactForm");
  return (
    <div className='form'>
      <div className='form__wrapper container'>
        <h2>{children}</h2>
        <div className='form__form'>
          <form action='submit'>
            <p>{t("contactHeader")}</p>
            <div className='input-container'>
              <input type='name' name='name' placeholder={t("name")} />
              <input type='email' name='email' id='email' placeholder='Email' />
            </div>
            <textarea name='message' placeholder={t("message")}></textarea>
            <button className='primary-button' type='submit'>
              {t("send")}
            </button>
          </form>
          <div className='contact__details'>
            <div className='contact__details--container'>
              <p className='description'>{t("con1")}</p>
              <div className='call'>
                <Image
                  width={20}
                  height={20}
                  src='/static/call.webp'
                  alt='call icon'
                />
                <p>+48 91 418 11 91</p>
              </div>
              <div className='email'>
                <Image
                  width={20}
                  height={20}
                  src='/static/email.webp'
                  alt='mail icon'
                />
                <p>biuro@seepoint.pl</p>
              </div>
            </div>
            <div className='contact__details--container'>
              <p className='description'>{t("con2")}</p>
              <div className='call'>
                <Image
                  width={20}
                  height={20}
                  src='/static/call.webp'
                  alt='call icon'
                />
                <p>+48 667 114 119</p>
              </div>
              <div className='email'>
                <Image
                  width={20}
                  height={20}
                  src='/static/email.webp'
                  alt='mail icon'
                />
                <p>rm@seepoint.pl</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
