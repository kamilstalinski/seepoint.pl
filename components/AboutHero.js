import Button from "./Button";
import Image from "next/image";

const AboutHero = ({ t }) => {
  return (
    <div className='hero'>
      <div className='hero__img-container2'>
        <Image
          src='/static/abouthero.webp'
          layout='fill'
          objectFit='cover'
          alt='seepoint.pl'
          priority={true}
        />
      </div>
      <div className='container'>
        <div className='hero__content'>
          <h1>Power of Quality</h1>
          <p>{t.aboutPage.aboutHero}</p>
          <Button className={"primary-button"} path={"/products"}>
            {t.common.seeProducts}
          </Button>
        </div>
      </div>
    </div>
  );
};
export default AboutHero;
