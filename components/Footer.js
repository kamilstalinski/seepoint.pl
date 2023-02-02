import Image from "next/image";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className='footer'>
      <div className='footer__logo--container'>
        <img src='/logo.svg' alt='logo' />
      </div>
      <p className='footer__description'>©{year} Seepoint</p>
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
      </div>
    </div>
  );
};

export default Footer;
