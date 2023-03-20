import Image from "next/legacy/image";
import Link from "next/link";

const AboutHero = ({ t }) => {
  return (
    <div className='hero'>
      <div className='hero__img-container2'>
        <Image
          src='/static/aboutHero.webp'
          layout='fill'
          objectFit='cover'
          alt='seepoint.pl'
          priority={true}
        />
      </div>
      <div className='container'>
        <div className='hero__content'>
          <h1>Power of Quality</h1>
          <p>{t("aboutHero")}</p>
          <Link legacyBehavior href='/produkty'>
            <a className='primary-button'>{t("seeMore")}</a>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default AboutHero;
