import { useEffect } from "react";

export default function ProductBtns({ product, handleClick }) {
  const typeBtns = product.type.map((type) => {
    return (
      <button onClick={() => handleClick(type)} className={`type-btn`}>
        {type.name}
      </button>
    );
  });

  return (
    <div className='type'>
      <h2>Rodzaj</h2>
      <div className='type-btns'>{typeBtns}</div>
    </div>
  );
}
