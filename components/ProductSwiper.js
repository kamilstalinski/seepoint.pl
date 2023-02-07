import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar, Navigation, Mousewheel } from "swiper";
import { useRouter } from "next/router";
import products from "../util/products.json";

const ProductSwiper = ({ t }) => {
  const router = useRouter();
  const productObj = router.locale === "pl" ? products.pl : products.en;

  const path = router.pathname === "/produkty/[id]" ? "/produkty" : "/produkty";
  const pathEn =
    router.pathname === "/produkty/[id]" ? "/products" : "/products";

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
        {productObj.slice(0, 6).map((product) => (
          <SwiperSlide key={product.id} style={{ maxWidth: "310px" }}>
            <Link
              href={`${router.locale === "pl" ? path : pathEn}/${
                router.locale === "pl" ? product.path : product.altPath
              }`}>
              <a className='link-container'>
                <Image
                  width={300}
                  height={300}
                  objectFit='contain'
                  src={product.sliderImage}
                  alt={product.name}
                />
                <h3>{product.name}</h3>
                <div className='div'></div>
                <p>{t("slideBtn")}</p>
              </a>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default ProductSwiper;
