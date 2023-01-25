import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "next-i18next";

export default function ProductHero({ product, goBack }) {
  const router = useRouter();
  const { t } = useTranslation("product");
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
          <p>{t("breadcrumb")}</p>
          <FontAwesomeIcon icon={faAngleRight} size='lg'></FontAwesomeIcon>
          <span style={{ fontWeight: "700" }}>{product.name}</span>
        </button>
        <h1>{product.name}</h1>
        <p>{product.heroDescription}</p>
        <button className='primary-button'>
          <a
            className='aclass'
            href='https://sklep.seepoint.pl/'
            target='_blank'>
            {t("button")}
          </a>
        </button>
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
