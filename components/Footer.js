import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const Footer = () => {
  const router = useRouter();

  const year = new Date().getFullYear();
  const privacyPath =
    router.locale === "pl" ? "/polityka-prywatnosci" : "/privacy-policy";
  const rodoPath =
    router.locale === "pl"
      ? "/obowiazek-informacyjny"
      : "/information-obligation";
  return (
    <div className='footer'>
      <div className='footer__logo--container'>
        <img src='/logo.svg' alt='logo' />
      </div>
      <div className='info'>
        <p className='footer__description'>©{year} Seepoint</p>
      </div>
      <div className='footer__contact--container'>
        <div className='call'>
          <a id='contact-link' href='tel:+48-501-501-501'>
            <Image
              width={23}
              height={20}
              src='/static/call.webp'
              alt='call icon'
            />
            <p>tel. 501 501 501</p>
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
        <Link href={privacyPath}>Polityka Prywatności</Link>
        <Link href={rodoPath}>Obowiązek Informacyjny RODO</Link>
      </div>
    </div>
  );
};

export default Footer;
