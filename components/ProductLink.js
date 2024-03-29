import products from "../util/products.json";
import Link from "next/link";
import Image from "next/legacy/image";
import { useRouter } from "next/router";

const ProductLink = () => {
  const router = useRouter();

  const productObj = router.locale === "pl" ? products.pl : products.en;
  return (
    <>
      {productObj.map((product) => {
        return (
          <Link
            legacyBehavior
            key={product.id}
            href={
              router.locale === "pl"
                ? "/produkty/" + product.path
                : "/products/" + product.altPath
            }>
            <a className='product-item'>
              <h3>{product.name}</h3>
              <div className='img-container'>
                <Image
                  src={product.image}
                  layout='fill'
                  objectFit='contain'
                  alt={product.name}
                  priority={true}
                />
              </div>
            </a>
          </Link>
        );
      })}
    </>
  );
};

export default ProductLink;
