import { useRouter } from "next/router";
import ProductHero from "../../components/ProductHero";
import ProductParams from "../../components/ProductParams";
import ProductSlider from "../../components/ProductSlider";
import products from "../../util/products.json";

export async function getStaticPaths({ locales }) {
  const paths = products
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
  const id = params.id;
  const singleProduct = products.filter((product) => {
    return product.path === id;
  });

  return {
    props: { product: singleProduct[0], locale, locales },
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
