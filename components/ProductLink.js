import products from "../util/products.json";
import Link from "next/link";
import Image from "next/image";

const ProductLink = () => {
  return (
    <>
      {products.map((product) => {
        return (
          <Link key={product.id} href={"products/" + product.path}>
            <a className='product-item'>
              <h3>{product.name}</h3>
              <div className='img-container'>
                <Image
                  src={product.linkImage}
                  layout='fill'
                  objectFit='cover'
                  alt='product image'
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
