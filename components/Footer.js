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
          <div className='relative'>
            <Image src='/static/call.webp' layout='fill' alt='call icon' />
          </div>
          <p>+48 91 418 11 91</p>
        </div>
        <div className='email'>
          <div className='relative'>
            <Image src='/static/email.webp' layout='fill' alt='email icon' />
          </div>
          <p>biuro@seepoint.pl</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
