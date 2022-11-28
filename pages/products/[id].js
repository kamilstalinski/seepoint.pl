import { useRouter } from "next/router";
import ProductHero from "../../components/ProductHero";
import ProductParams from "../../components/ProductParams";
import ProductSlider from "../../components/ProductSlider";
import products from "../../util/products.json";

export async function getStaticPaths() {
  const paths = products.map((product) => {
    return {
      params: { id: product.path.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const id = params.id;
  const singleProduct = products.filter((product) => {
    return product.path === id;
  });

  return {
    props: { product: singleProduct[0] },
  };
}

const Product = ({ product }) => {
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
