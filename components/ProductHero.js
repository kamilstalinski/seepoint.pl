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
          onClick={() => router.push(`/produkty`)}
          className='breadcrumbs'>
          <p>{t("breadcrumb")}</p>
          <FontAwesomeIcon icon={faAngleRight} size='lg'></FontAwesomeIcon>
          <span style={{ fontWeight: "700" }}>{product.name}</span>
        </button>
        <h1>{product.h1}</h1>
        <p style={{ lineHeight: "22px" }}>
          {product.heroDescription}
          {product.heroDescription2 ? (
            <a href={product.innerLinkURL}>
              <span id='inner-link'>{product.innerLink}</span>
            </a>
          ) : (
            ""
          )}
          {product.heroDescription2}
        </p>
        <button className='primary-button'>
          <a
            className='aclass'
            href='https://sklep.seepoint.pl/'
            rel='noreferrer'
            target='_blank'>
            {t("button")}
          </a>
        </button>
      </div>
      <div className='product-image'>
        <div className='img-wrapper' style={{ display: "block" }}>
          <Image
            src={product.image}
            layout='responsive'
            width={400}
            height={400}
            objectFit='contain'
            alt={product.name}
            priority={true}
          />
        </div>
      </div>
    </div>
  );
}
