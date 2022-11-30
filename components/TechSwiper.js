import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import TechSwiperDestails from "./TechSwiperDetails";

import technologies from "../util/technologies";

const TechSwiper = ({ setSwiper }) => {
  const [currentTechnology, setCurrentTechnology] = useState("");

  return (
    <>
      <Swiper
        speed={200}
        initialSlide={0}
        slidesPerView={5}
        loop={true}
        centeredSlides={true}
        onSwiper={(swiper) => {
          setSwiper(swiper);
          setCurrentTechnology(technologies[swiper.realIndex]);
        }}
        onRealIndexChange={(swiper) => {
          setCurrentTechnology(technologies[swiper.realIndex]);
        }}>
        {technologies.map((tech) => {
          return (
            <SwiperSlide key={tech.id}>
              <img src={tech.image} alt={tech.name} />
            </SwiperSlide>
          );
        })}
        <TechSwiperDestails currentTechnology={currentTechnology} />
      </Swiper>
    </>
  );
};

export default TechSwiper;
