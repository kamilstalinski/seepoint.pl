import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";

export default function TechnologyHero() {
  return (
    <>
      <div className='hero' style={{ marginBottom: "8rem" }}>
        <div className='hero__img-container2'></div>
        <div className='container'>
          <div className='hero__content'>
            <div className='prev-page'>
              <FontAwesomeIcon className='icon' icon={faAngleLeft} />
              <p className='text'>Nasza technologia</p>
            </div>
            <h1 style={{ color: "#6B7786" }}>Druk Sublimacyjny</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet
              fuga a alias hic voluptatum culpa modi ea animi adipisci
              asperiores? Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Aspernatur, possimus.
            </p>
            <button className='primary-button'>Zobacz Produkty</button>
          </div>
        </div>
      </div>
    </>
  );
}
