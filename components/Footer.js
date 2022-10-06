const Footer = () => {
    return(
        <div className="footer">
            <div className="footer__logo--container">
                <img src='/logo.svg' alt="" />
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel ipsa commodi tenetur molestias asperiores maxime incidunt similique aperiam temporibus eaque!</p>
            <div className="footer__contact--container">
                <div className="call">
                    <img src='/call.png' alt="" />
                    <p>t+48 91 418 11 91</p>
                </div>
                <div className="email">
                    <img src='/email.png' alt="" />
                    <p>biuro@seepoint.pl</p>
                </div>
            </div>
        </div>
    )
}

export default Footer;