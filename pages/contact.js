import Map from "../components/GoogleMap";
import ContactForm from "../components/ContactForm";
import Image from "next/image";
import contact from "../public/contact.webp";

const Contact = () => {
  return (
    <div className='contact'>
      <div className='contact__info'>
        <div className='img-container'>
          <Image
            src={contact}
            layout='fill'
            objectFit='cover'
            alt='contact image'
            priority
          />
        </div>
        <div className='contact__details--right'>
          <h1>Kontakt</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Perferendis porro impedit voluptatem, consequuntur culpa doloremque.
          </p>
          <div className='contact__details'>
            <div className='contact__details--container'>
              <p className='description'>
                Skontaktuj się z nami mailowo/telefonicznie
              </p>
              <div className='call-contact'>
                <Image
                  width={23}
                  height={20}
                  src='/call.webp'
                  alt='call icon'
                />
                <p>+48 91 418 11 91</p>
              </div>
              <div className='email-contact'>
                <Image
                  width={23}
                  height={20}
                  src='/email.webp'
                  alt='call icon'
                />
                <p>biuro@seepoint.pl</p>
              </div>
            </div>
            <div className='contact__details--container'>
              <p className='description'>Dział handlowy</p>
              <div className='call-contact'>
                <Image
                  width={23}
                  height={20}
                  src='/call.webp'
                  alt='call icon'
                />
                <p>+48 667 114 119</p>
              </div>
              <div className='email-contact'>
                <Image
                  width={23}
                  height={20}
                  src='/email.webp'
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
          <h2>Lokalizacja</h2>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
          <div className='contact__details'>
            <div className='contact__details--container'>
              <p className='description'>ul. I Brygady Legionów 15</p>
              <p className='description'>72-100, Goleniów, Polska</p>
            </div>
          </div>
        </div>
        <Map />
      </div>
      <ContactForm>Formularz kontaktowy</ContactForm>
    </div>
  );
};

export default Contact;
