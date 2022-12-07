import Link from "next/link";
import Image from "next/image";
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
              <Image
                width={300}
                height={300}
                objectFit='contain'
                src='/beachflag.webp'
                alt='beachflag'
              />
              <h3>Beach Flagi</h3>
              <div className='div'></div>
              <p>Sprawdź produkt</p>
            </a>
          </Link>
        </SwiperSlide>
        <SwiperSlide style={{ maxWidth: "310px" }}>
          <Link href='/products/rollups'>
            <a className='link-container'>
              <Image
                width={300}
                height={300}
                objectFit='contain'
                src='/rollups.webp'
                alt='rollups'
              />
              <h3>Rollupy</h3>
              <div className='div'></div>
              <p>Sprawdź produkt</p>
            </a>
          </Link>
        </SwiperSlide>
        <SwiperSlide style={{ maxWidth: "310px" }}>
          <Link href='/products/banners'>
            <a className='link-container'>
              <Image
                width={300}
                height={300}
                objectFit='contain'
                src='/banners.webp'
                alt='banners'
              />
              <h3>Banery</h3>
              <div className='div'></div>
              <p>Sprawdź produkt</p>
            </a>
          </Link>
        </SwiperSlide>
        <SwiperSlide style={{ maxWidth: "310px" }}>
          <Link href='/products/paintings'>
            <a className='link-container'>
              <Image
                width={300}
                height={300}
                objectFit='contain'
                src='/paintings.webp'
                alt='paintings'
              />
              <h3>Obrazy</h3>
              <div className='div'></div>
              <p>Sprawdź produkt</p>
            </a>
          </Link>
        </SwiperSlide>
        <SwiperSlide style={{ maxWidth: "310px" }}>
          <Link href='/products/alu-banners'>
            <a className='link-container'>
              <Image
                width={300}
                height={300}
                objectFit='contain'
                src='/alu-banners.webp'
                alt='alu-banners'
              />
              <h3>Banery na alu</h3>
              <div className='div'></div>
              <p>Sprawdź produkt</p>
            </a>
          </Link>
        </SwiperSlide>
        <SwiperSlide style={{ maxWidth: "310px" }}>
          <Link href='/products/animal-pillows' className='link-container'>
            <a className='link-container'>
              <Image
                width={300}
                height={300}
                objectFit='contain'
                src='/animals.webp'
                alt='animal pillows'
              />
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
