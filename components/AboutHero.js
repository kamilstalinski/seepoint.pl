import Button from "./Button";
import Image from "next/image";

const AboutHero = ({ t }) => {
  return (
    <div className='hero'>
      <div className='hero__img-container2'>
        <Image
          src='https://res.cloudinary.com/dnt5pai0z/image/upload/v1673550073/abouthero_lsfgd9.webp'
          layout='fill'
          objectFit='cover'
          alt='seepoint.pl'
          loading='eager'
          priority='true'
        />
      </div>
      <div className='container'>
        <div className='hero__content'>
          <h1>Power of Quality</h1>
          <p>{t("aboutHero")}</p>
          <Button className={"primary-button"} path={"/products"}>
            {t("seeMore")}
          </Button>
        </div>
      </div>
    </div>
  );
};
export default AboutHero;
