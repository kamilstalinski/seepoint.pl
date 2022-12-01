import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

export default function ProductHero({ product, goBack }) {
  return (
    <div className='product-hero'>
      <div className='product-info'>
        <button className='left-icon'>
          {/* <FontAwesomeIcon icon={faAngleLeft} onClick={goBack} size='xs' /> */}
        </button>
        <button className='breadcrumbs'>
          <Link href='/products'>Produkty</Link>
          {/* <FontAwesomeIcon icon={faAngleRight} /> */}
          <span style={{ fontWeight: "700" }}>{product.name}</span>
        </button>
        <h1>{product.name}</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
          quos, corporis asperiores ipsum nesciunt temporibus nam nihil ab
          beatae fugit.
        </p>
        <button className='primary-button'>Przejdź do sklepu</button>
      </div>
      <div className='product-image'>
        <Image
          src={product.heroImage}
          layout='fill'
          objectFit='contain'
          alt='hero section image'
          priority={true}
        />
      </div>
    </div>
  );
}
