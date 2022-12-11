import Image from "next/image";
import { useState } from "react";

const LanguageToggle = ({ active, isClicked, setActive }) => {
  const [activeLng, setActiveLng] = useState("PL");

  return (
    <div className='language'>
      <div
        className={`navbar__language ${active ? "active" : null} ${
          isClicked ? "active-menu" : null
        }`}
        onClick={() => setActive(!active)}>
        <Image
          className='img'
          width={10}
          height={10}
          src='/arrow.svg'
          alt='arrow'
        />
        <p>{activeLng}</p>
      </div>
      <div className={`dropdown ${active ? "active" : null}`}>
        <button>PL</button>
        <button>EN</button>
      </div>
    </div>
  );
};

export default LanguageToggle;
