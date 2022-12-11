import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

export default function ProductHero({ product, goBack }) {
  const router = useRouter();
  return (
    <div className='product-hero'>
      <div className='product-info'>
        <button className='left-icon'>
          <FontAwesomeIcon
            onClick={goBack}
            icon={faAngleLeft}
            size='3x'></FontAwesomeIcon>
        </button>
        <button
          onClick={() => router.push(`/products`)}
          className='breadcrumbs'>
          <p>Produkty</p>
          <FontAwesomeIcon icon={faAngleRight} size='lg'></FontAwesomeIcon>
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
          src={product.image}
          layout='fill'
          objectFit='contain'
          alt='hero section image'
          priority={true}
        />
      </div>
    </div>
  );
}
