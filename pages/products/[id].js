import { useRouter } from "next/router";
import ProductHero from "../../components/ProductHero";
import ProductParams from "../../components/ProductParams";
import ProductSlider from "../../components/ProductSlider";
import products from "../../util/products.json";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

export async function getStaticPaths({ locale, locales }) {
  const productObj = locale === "pl" ? products.pl : products.en;

  const paths = productObj
    .map((product) =>
      locales.map((locale) => ({
        params: { id: product.path.toString() },
        locale,
      })),
    )
    .flat();

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params, locale, locales }) {
  const productObj = locale === "pl" ? products.pl : products.en;

  const id = params.id;
  const singleProduct = productObj.filter((product) => {
    return product.path === id;
  });

  return {
    props: {
      product: singleProduct[0],
      locale,
      locales,
      ...(await serverSideTranslations(locale, [
        "product",
        "navbar",
        "footer",
        "searchbar",
        "contactForm",
        "slider",
      ])),
    },
  };
}

const Product = ({ product, locale }) => {
  const router = useRouter();

  const goBack = () => router.back();

  return (
    <div className='product container'>
      <ProductHero product={product} goBack={goBack} />
      <ProductParams product={product} />
      <ProductSlider />
    </div>
  );
};

export default Product;
