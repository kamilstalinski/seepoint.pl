const ContactForm = ({children}) => {
    return (
        <div className="form">
            <div className="form__wrapper container">
                <h2>{children}</h2>
                <div className="form__form">
                    <form action="submit">
                        <p>Wypełnij formularz i skontaktuj się z nami w sprawe indywidualngeo projektu.</p>
                        <div className="input-container">
                            <input type="name" name="name" placeholder='Imię'/>
                            <input type="email" name="email" id="email" placeholder='Email' />
                        </div>
                        <textarea name="message" placeholder='Wiadomość'></textarea>
                        <button className='primary-button' type="submit">Wyślij</button>
                    </form>
                    <div className="contact__details">
                        <div className="contact__details--container">
                            <p className='description'>Lub skontaktuj się z nami mailowo/telefonicznie</p>
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
                            <   img src='/email.png' alt="" />
                                <p>rm@seepoint.pl</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactForm;