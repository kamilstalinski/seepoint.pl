import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

export default function ProductHero({ product, goBack }) {
  return (
    <div className='product-hero'>
      <div className='product-info'>
        <div className='left-icon'>
          <FontAwesomeIcon icon={faAngleLeft} onClick={goBack} />
        </div>
        <p className='breadcrumbs'>
          <Link href='/products'>Produkty</Link>{" "}
          {<FontAwesomeIcon className='fa' icon={faAngleRight} />}{" "}
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
        <Image
          src={product.heroImage}
          layout='fill'
          objectFit='contain'
          loading='eager'
          alt='hero section image'
        />
      </div>
    </div>
  );
}
