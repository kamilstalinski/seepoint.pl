import Map from '../components/GoogleMap';
import ContactForm from '../components/ContactForm';


const Contact = () => {
  return(
    <div className="contact">
      <div className="contact__info">
        <div className="img-container">
          
        </div>
        <div className="contact__details--right">
          <h2>Kontakt</h2>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis porro impedit voluptatem, consequuntur culpa doloremque.</p>
          <div className="contact__details">
              <div className="contact__details--container">
                  <p className='description'>Skontaktuj się z nami mailowo/telefonicznie</p>
                  <div className="call">
                    <img src='/call.png' alt="" />
                    <p>t+48 91 418 11 91</p>
                  </div>
                  <div className="email">
                    <img src='/email.png' alt="" />
                    <p>biuro@seepoint.pl</p>
                  </div>
              </div>
              <div className="contact__details--container">
                <p className='description'>Dział handlowy</p>
                <div className="call">
                  <img src='/call.png' alt="" />
                  <p>+48 667 114 119</p>
                </div>
                <div className="email">
                  <img src='/email.png' alt="" />
                  <p>rm@seepoint.pl</p>
                </div>
               </div>
            </div>
        </div>
      </div>
      <div className="location__info">
        <div className="contact__details--left">
          <h2>Lokalizacja</h2>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
          <div className="contact__details">
              <div className="contact__details--container">
                  <p className='description'>ul. I Brygady Legionów 15</p>
                  <p className='description'>72-100, Goleniów, Polska</p>
              </div>
            </div>
        </div>
        <Map />
      </div>
      <ContactForm>Formularz kontaktowy</ContactForm>
    </div>
  )
}
 
export default Contact;

