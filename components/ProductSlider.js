import Link from "next/link";
import ProductSwiper from "./ProductSwiper";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";

const ProductSlider = () => {
  const { t } = useTranslation("slider");
  const router = useRouter();

  return (
    <div className='product-slider container'>
      <h2>{t("header")}</h2>
      <ProductSwiper t={t} />
      <Link href={router.locale === "pl" ? "/produkty" : "/products"}>
        <a className='primary-button'>{t("seeProducts")}</a>
      </Link>
    </div>
  );
};

export default ProductSlider;
