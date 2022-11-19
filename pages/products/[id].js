import { useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import products from "../../util/products.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

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

  return (
    <div className='product container'>
      <div className='product-hero'>
        <div className='product-info'>
          <div className='left-icon' onClick={() => router.back()}>
            <FontAwesomeIcon icon={faAngleLeft} />
          </div>
          <p className='breadcrumbs'>
            Produkty {<FontAwesomeIcon className='fa' icon={faAngleRight} />}{" "}
            <span style={{ fontWeight: "700" }}>{product.name}</span>
          </p>
          <h1>{product.name}</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
            quos, corporis asperiores ipsum nesciunt temporibus nam nihil ab
            beatae fugit.
          </p>
          <button className='primary-button'>Przejdź do sklepu</button>
        </div>
        <div className='product-image'>
          <Image src='/beachflag-hero.png' layout='fill' objectFit='cover' />
        </div>
      </div>
    </div>
  );
};

export default Product;
