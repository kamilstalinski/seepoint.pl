import Button from "./Button";
import Image from "next/image";

const AboutHero = () => {
  return (
    <div className='hero'>
      <div className='hero__img-container2'>
        <Image
          src='/abouthero.webp'
          layout='fill'
          objectFit='cover'
          alt='seepoint.pl'
          priority
        />
      </div>
      <div className='container'>
        <div className='hero__content'>
          <h1>Power of Quality</h1>
          <p>
            Firma została założona w 2006r. wchodząc na rynek jako producent
            flag metodą sitodrukową. W krótkim czasie przeprowadzono inwestycje
            w nowe technologie i dziś jest cyfrową drukarnią wielkoformatową,
            oferującą druk sublimacyjny, solwentowy, uv.
          </p>
          <Button className={"primary-button"} path={"/products"}>
            Zobacz Produkty
          </Button>
        </div>
      </div>
    </div>
  );
};
export default AboutHero;
