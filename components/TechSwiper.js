import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import TechSwiperDestails from "./TechSwiperDetails";
import { useRouter } from "next/router";

import technologies from "../util/technologies";

const TechSwiper = ({ setSwiper }) => {
  const router = useRouter();
  const [currentTechnology, setCurrentTechnology] = useState("");
  const technologiesObj =
    router.locale === "pl" ? technologies.pl : technologies.en;

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
          setCurrentTechnology(technologiesObj[swiper.realIndex]);
        }}
        onRealIndexChange={(swiper) => {
          setCurrentTechnology(technologiesObj[swiper.realIndex]);
        }}>
        {technologiesObj.map((tech) => {
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
