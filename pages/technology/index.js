import ContactForm from '../../components/ContactForm'
import TechCarousel from '../../components/TechCarousel'
import technology from '../../public/technology.png'

const Technology = () => {
  return (
      <div className="technology">
        <div className="hero" style={{marginBottom: '8rem'}}>
          <div className="hero__img-container">
              {/* <img className='img' src={abouthero} alt="" /> */}
          </div>
          <div className="container">
              <div className="hero__content">
                  <h1 style={{color: '#6B7786'}}>Nasza Technologia</h1>
                  <p>Firma została założona w 2006r. wchodząc na rynek jako producent flag metodą sitodrukową. W krótkim czasie przeprowadzono inwestycje w nowe technologie i dziś jest cyfrową drukarnią wielkoformatową, oferującą druk sublimacyjny, solwentowy, uv.</p>
              </div>
          </div>
        </div>
        <TechCarousel />
        <ContactForm>Kontakt</ContactForm>
      </div>
  )
} 

export default Technology;