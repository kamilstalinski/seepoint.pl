// import Button from "./Button";
import Image from "next/image";
import Link from "next/link";

const AboutHero = ({ t }) => {
  return (
    <div className='hero'>
      <div className='hero__img-container2'>
        <Image
          src='/static/aboutHero.png'
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
          {/* <Button className={"primary-button"} path={"/products"}>
            {t("seeMore")}
          </Button> */}
          <Link href='/products'>
            <a className='primary-button'>{t("seeMore")}</a>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default AboutHero;
