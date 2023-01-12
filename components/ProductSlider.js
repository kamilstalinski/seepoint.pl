import Link from "next/link";
import ProductSwiper from "./ProductSwiper";
import { useTranslation } from "next-i18next";

const ProductSlider = () => {
  const { t } = useTranslation("slider");

  return (
    <div className='product-slider container'>
      <h2>{t("header")}</h2>
      <ProductSwiper t={t} />
      <Link href='/products'>
        <a className='primary-button'>{t("seeProducts")}</a>
      </Link>
    </div>
  );
};

export default ProductSlider;
