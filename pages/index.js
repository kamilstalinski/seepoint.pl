import AboutHero from "../components/AboutHero";
import TechCarousel from "../components/TechCarousel";
import ProductSlider from "../components/ProductSlider";
import ContactForm from "../components/ContactForm";
import Rewards from "../components/Rewards";
import Image from "next/image";

import Head from "next/head";
import { useEffect } from "react";

const About = () => {
  return (
    <div className='about'>
      <AboutHero />
      <div className='container about__info'>
        <div className='about__description'>
          <h2>O nas</h2>
          <p>
            Dzięki otwartemu podejściu i satysfakcji odczuwanej z realizacji
            zleceń dla naszych klientów, udało nam się zbudować partnerskie
            relacje, które stawiły czoło fali kryzysu ekonomicznego w Europie.
            Dziś bogaci w doświadczenia możemy pochwalić się szeroko rozwiniętą
            siatką kontrahentów na rynku skandynawskim.
          </p>
          <p>
            Wybierając Seepoint Sp. z o.o. decydujecie się Państwo na współpracę
            z profesjonalistami i wybieracie rzetelnego partnera biznesowego
            ponieważ:
          </p>
        </div>
        <div className='about__pros'>
          <div className='about__pros-item'>
            <img src='/work.svg' alt='work' />
            <p>
              mamy wieloletnie doświadczenie w zakresie prowadzonej działalności
            </p>
          </div>
          <div className='about__pros-item'>
            <img src='/date.svg' alt='date' />
            <p>jesteśmy dokładni, rzetelni i terminowi</p>
          </div>
          <div className='about__pros-item'>
            <img src='task.svg' alt='task' />
            <p>zapewniamy kompleksową obsługę</p>
          </div>
          <div className='about__pros-item'>
            <img src='/people.svg' alt='people' />
            <p>elastycznie dostosowujemy się do wymagań Klienta</p>
          </div>
          <div className='about__pros-item'>
            <img src='/pricetag.svg' alt='pricetag' />
            <p>
              oferujemy korzystne ceny, a dla stałych klientów specjalne rabaty
              na cenę m2.
            </p>
          </div>
        </div>
      </div>
      <div className='about__us'>
        <div className='img-container'>
          <Image src='/team.webp' layout='fill' objectFit='cover' alt='team' />
        </div>
        <div className='about__us-description'>
          <div className='wrapper'>
            <h1>Nasz zespół</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis
              mollitia recusandae nulla ducimus ut, cumque est nesciunt atque
              corrupti et obcaecati illo itaque ipsum ipsam provident rem, totam
              minima optio. Lorem, ipsum dolor sit amet consectetur adipisicing
              elit. Eveniet nihil at, nobis ea ex perspiciatis voluptatibus
              voluptas. Officia, quod sequi!
            </p>
          </div>
        </div>
      </div>
      <TechCarousel text={"Nasza oferta"} />
      <ProductSlider />
      <ContactForm>Kontakt</ContactForm>
      <Rewards />
    </div>
  );
};

export default About;
