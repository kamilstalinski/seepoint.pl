import { useState } from "react";

import TechSwiper from "./TechSwiper";

const TechCarousel = ({ text, currentSavedTechnology }) => {
  const [swiper, setSwiper] = useState("");

  return (
    <div className='carousel'>
      <div className='offer'>
        <h2>{text}</h2>
        <p>Drukujemy w następujących technologiach</p>
      </div>
      <TechSwiper
        setSwiper={setSwiper}
        currentSavedTechnology={currentSavedTechnology}
      />
      <div className='buttons'>
        <button
          className='prev-btn'
          onClick={() => {
            swiper.slidePrev();
          }}>
          <img
            style={{ rotate: "180deg" }}
            src='/forward-arrow.svg'
            alt='backward arrow'
          />
        </button>
        <button
          className='next-btn'
          onClick={() => {
            swiper.slideNext();
          }}>
          <img src='/forward-arrow.svg' alt='forward arrow' />
        </button>
      </div>
    </div>
  );
};

export default TechCarousel;
