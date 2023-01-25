import { useState, useEffect } from "react";
import Image from "next/image";

import ProductSpecs from "./ProductSpecs";
import ProductBtns from "./ProductBtns";
import ProductDropdown from "./ProductDropdown";
import { useTranslation } from "next-i18next";

export default function ProductParams({ product }) {
  const { t } = useTranslation("product");
  const [type, setType] = useState(product.type[0]);

  const handleClick = (typeObj) => {
    setType(typeObj);
  };

  return (
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
      <div className='product-type-info'>
        <ProductBtns product={product} handleClick={handleClick} t={t} />
        <ProductSpecs type={type} t={t} />
        <div className='params'>
          <h2>{t("params")}</h2>
          <ProductDropdown parameter={type.parameter} t={t} />
        </div>
        <button className='primary-button doc-btn'>{t("doc")}</button>
      </div>
    </div>
  );
}
