import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import ProductSpecs from "./ProductSpecs";
import ProductBtns from "./ProductBtns";
import ProductDropdown from "./ProductDropdown";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";

export default function ProductParams({ product }) {
  const { t } = useTranslation("product");
  const [type, setType] = useState(product.type ? product.type[0] : null);
  const router = useRouter();

  const handleClick = (typeObj) => {
    setType(typeObj);
  };

  return (
    <div>
      <div className='add-description'>
        <h2>{product.h2}</h2>
        <p style={{ lineHeight: "22px" }}>
          {product.description}
          {product.description2 && (
            <a href={product.innerLinkURL}>
              <span id='inner-link'>{product.innerLink}</span>
            </a>
          )}
          {product.description2}
        </p>
      </div>
      <div className='product-type'>
        {/* <div className='type-image'>
          <Image
            src='/static/temporary.webp'
            layout='fill'
            objectFit='cover'
            alt='product'
            priority={true}
          />
        </div> */}
        {type && (
          <div className='product-type-info'>
            <ProductBtns product={product} handleClick={handleClick} t={t} />
            <ProductSpecs type={type} t={t} />
            <div className='params'>
              <h2>{t("params")}</h2>
              <ProductDropdown parameter={type.parameter} t={t} />
            </div>
            <button className='primary-button doc-btn'>{t("doc")}</button>
          </div>
        )}
      </div>
    </div>
  );
}
