import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar, Navigation, Mousewheel } from "swiper";

const ProductSwiper = () => {
  return (
    <>
      <Swiper
          spaceBetween={20}
          slidesPerView={'auto'}
          navigation={true}
          scrollbar={{
            hide: false,
            draggable: true
        }}
          modules={[Scrollbar, Navigation, Mousewheel]}
          className="product-swiper"
      >
        <SwiperSlide style={{maxWidth: '310px'}}>
            <Link href='/beachflags'>
                <a className="link-container">
                    <img src='/beachflag.svg' alt="" />
                    <h3>Beach Flagi</h3>
                    <div className="div"></div>
                    <p>Sprawdź produkt</p>
                </a>
            </Link>
        </SwiperSlide>
        <SwiperSlide style={{maxWidth: '310px'}}> 
            <Link href='/rollups'>
                <a className="link-container">
                    <img src='/rollups.svg' alt="" />
                    <h3>Rollupy</h3>
                    <div className="div"></div>
                    <p>Sprawdź produkt</p>
                </a>
            </Link>
        </SwiperSlide>
        <SwiperSlide style={{maxWidth: '310px'}}>
            <Link href='/banners'>
                <a className="link-container">
                    <img src='banners.svg' alt="" />
                    <h3>Banery</h3>
                    <div className="div"></div>
                    <p>Sprawdź produkt</p>
                </a>
            </Link>
        </SwiperSlide>
        <SwiperSlide style={{maxWidth: '310px'}}>
            <Link href='/paintings'>
                <a className="link-container">
                    <img src='paintings.svg' alt="" />
                    <h3>Obrazy</h3>
                    <div className="div"></div>
                    <p>Sprawdź produkt</p>
                </a>
            </Link>
        </SwiperSlide>
        <SwiperSlide style={{maxWidth: '310px'}}>
            <Link href='/alu-banners'>
                <a className="link-container">
                    <img src='paintings.svg' alt="" />
                    <h3>Obrazy</h3>
                    <div className="div"></div>
                    <p>Sprawdź produkt</p>
                </a>
            </Link>
        </SwiperSlide>
        <SwiperSlide style={{maxWidth: '310px'}}>
            <Link href='/beachflag' className="link-container">
                <a className="link-container">
                    <img src="" alt="" />
                    <h3>Poduszkozwierzaki</h3>
                    <div className="div"></div>
                    <p>Sprawdź produkt</p>
                </a>
            </Link>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default ProductSwiper;
