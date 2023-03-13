import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGoogle,
  faSquareFacebook,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

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
        <div className='socialmedia__icons'>
          <a
            href='https://www.google.com/maps/place/Druk+wielkoformatowy+-+Seepoint/@53.557201,14.847897,15z/data=!4m2!3m1!1s0x0:0xcb2ea3d910f9bd30?sa=X&ved=2ahUKEwj-wt_8gqP4AhWRyIsKHUgwAUAQ_BJ6BAguEAU'
            className='socialmedia__icon google'>
            <FontAwesomeIcon icon={faGoogle} />
          </a>
          <a
            href='https://www.facebook.com/SklepSeepoint'
            className='socialmedia__icon'>
            <FontAwesomeIcon icon={faSquareFacebook} />
          </a>
          <a
            href='https://www.instagram.com/seepoint/'
            className='socialmedia__icon'>
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </div>
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
