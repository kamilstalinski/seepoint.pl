import { useState, useEffect } from "react";
import Image from "next/image";

import ProductSpecs from "./ProductSpecs";
import ProductBtns from "./ProductBtns";
import ProductDropdown from "./ProductDropdown";

export default function ProductParams({ product }) {
  const [type, setType] = useState(product.type[0]);

  const handleClick = (typeObj) => {
    setType(typeObj);
  };

  return (
    <div className='product-type'>
      <div className='type-image'>
        <Image
          src='/temporary.webp'
          layout='fill'
          objectFit='cover'
          alt='product'
          priority={true}
        />
      </div>
      <div className='product-type-info'>
        <ProductBtns product={product} handleClick={handleClick} />
        <ProductSpecs type={type} />
        <div className='params'>
          <h2>Parametry</h2>
          <ProductDropdown parameter={type.parameter} />
        </div>
        <button className='primary-button doc-btn'>Pobierz dokumentację</button>
      </div>
    </div>
  );
}
