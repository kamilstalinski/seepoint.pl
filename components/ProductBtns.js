import { useState, useEffect } from "react";

export default function ProductBtns({ product, handleClick }) {
  const [active, setActive] = useState(null);

  useEffect(() => {
    setActive(product.type[0].name);
  }, []);

  const typeBtns = product.type.map((type) => {
    return (
      <button
        onClick={() => {
          handleClick(type);
          setActive(type.name);
        }}
        className={`type-btn ${active === type.name && "active-btn"}`}>
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
