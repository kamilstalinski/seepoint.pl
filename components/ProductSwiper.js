import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar, Navigation, Mousewheel } from "swiper";

const ProductSwiper = () => {
  return (
    <>
      <Swiper
        spaceBetween={20}
        slidesPerView={"auto"}
        navigation={true}
        scrollbar={{
          hide: false,
          draggable: true,
        }}
        modules={[Scrollbar, Navigation, Mousewheel]}
        className='product-swiper'>
        <SwiperSlide style={{ maxWidth: "310px" }}>
          <Link href='/products/beachflags'>
            <a className='link-container'>
              <img src='/beachflag.svg' alt='beachflag' />
              <h3>Beach Flagi</h3>
              <div className='div'></div>
              <p>Sprawdź produkt</p>
            </a>
          </Link>
        </SwiperSlide>
        <SwiperSlide style={{ maxWidth: "310px" }}>
          <Link href='/products/rollups'>
            <a className='link-container'>
              <img src='/rollups.svg' alt='rollups' />
              <h3>Rollupy</h3>
              <div className='div'></div>
              <p>Sprawdź produkt</p>
            </a>
          </Link>
        </SwiperSlide>
        <SwiperSlide style={{ maxWidth: "310px" }}>
          <Link href='/products/banners'>
            <a className='link-container'>
              <img src='banners.svg' alt='banners' />
              <h3>Banery</h3>
              <div className='div'></div>
              <p>Sprawdź produkt</p>
            </a>
          </Link>
        </SwiperSlide>
        <SwiperSlide style={{ maxWidth: "310px" }}>
          <Link href='/products/paintings'>
            <a className='link-container'>
              <img src='paintings.svg' alt='paintings' />
              <h3>Obrazy</h3>
              <div className='div'></div>
              <p>Sprawdź produkt</p>
            </a>
          </Link>
        </SwiperSlide>
        <SwiperSlide style={{ maxWidth: "310px" }}>
          <Link href='/products/alu-banners'>
            <a className='link-container'>
              <img src='paintings.svg' alt='alu-banners' />
              <h3>Obrazy</h3>
              <div className='div'></div>
              <p>Sprawdź produkt</p>
            </a>
          </Link>
        </SwiperSlide>
        <SwiperSlide style={{ maxWidth: "310px" }}>
          <Link href='/products/animalpillows' className='link-container'>
            <a className='link-container'>
              <img src='/banners.svg' alt='animal pillows' />
              <h3>Poduszkozwierzaki</h3>
              <div className='div'></div>
              <p>Sprawdź produkt</p>
            </a>
          </Link>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default ProductSwiper;
