import AboutHero from "../components/AboutHero";
import TechCarousel from "../components/TechCarousel";
import ProductSlider from "../components/ProductSlider";
import ContactForm from "../components/ContactForm";
import Rewards from "../components/Rewards";
import Image from "next/image";
import Head from "next/head";
import { useEffect } from "react";

export function getStaticProps({ locale }) {
  return {
    props: { locale },
  };
}

const About = ({ t }) => {
  return (
    <div className='about'>
      <Head>
        <title>{t.titles.about}</title>
        <meta name='description' />
      </Head>
      <AboutHero t={t} />
      <div className='container about__info'>
        <div className='about__description'>
          <h2>{t.navbar.about}</h2>
          <p>{t.aboutPage.description1}</p>
          <p>{t.aboutPage.description2}</p>
        </div>
        <div className='about__pros'>
          <div className='about__pros-item'>
            <img src='/work.svg' alt='work' />
            <p>{t.aboutPage.pros1}</p>
          </div>
          <div className='about__pros-item'>
            <img src='/date.svg' alt='date' />
            <p>{t.aboutPage.pros2}</p>
          </div>
          <div className='about__pros-item'>
            <img src='task.svg' alt='task' />
            <p>{t.aboutPage.pros3}</p>
          </div>
          <div className='about__pros-item'>
            <img src='/people.svg' alt='people' />
            <p>{t.aboutPage.pros4}</p>
          </div>
          <div className='about__pros-item'>
            <img src='/pricetag.svg' alt='pricetag' />
            <p>{t.aboutPage.pros5}</p>
          </div>
        </div>
      </div>
      <div className='about__us'>
        <div className='img-container'>
          <Image
            priority={true}
            src='/static/team.webp'
            layout='fill'
            objectFit='cover'
            alt='team'
          />
        </div>
        <div className='about__us-description'>
          <div className='wrapper'>
            <h2>{t.aboutPage.team.title}</h2>
            <p>{t.aboutPage.team.description}</p>
          </div>
        </div>
      </div>
      <TechCarousel text={"Nasza oferta"} />
      <ProductSlider />
      <ContactForm>{t.navbar.contact}</ContactForm>
      <Rewards />
    </div>
  );
};

export default About;
