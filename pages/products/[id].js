import { useRouter } from "next/router";
import { useEffect } from "react";
import Image from "next/image";
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
  return (
    <div>
      <h1>{product.name}</h1>
      <Image src={product.linkImage} layout='fill' objectFit='cover' />
    </div>
  );
};

export default Product;
