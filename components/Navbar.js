import MenuLink from "./MenuLink";
import Hamburger from "./Hamburger";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import LanguageToggle from "./LanguageToggle";

const Navbar = ({ handleStateChange }) => {
  const [active, setActive] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    if (isClicked === true) {
      document.body.style.overflowY = "hidden";
    } else if (isClicked === false) {
      document.body.style.overflowY = "scroll";
    }
  }, [isClicked]);

  return (
    <div className='navbar__wrapper sticky-element'>
      <div className='navbar__container container'>
        <Link href='/'>
          <a className={`navbar__img`}>
            <img src='/logo.svg' alt='' />
          </a>
        </Link>
        <div className='navbar__menu'>
          <ul className={isClicked ? "active" : null}>
            <MenuLink
              setIsClicked={setIsClicked}
              isClicked={isClicked}
              path='/'>
              O nas
            </MenuLink>
            <MenuLink
              setIsClicked={setIsClicked}
              isClicked={isClicked}
              path='/products'>
              Produkty
            </MenuLink>
            <MenuLink
              setIsClicked={setIsClicked}
              isClicked={isClicked}
              path='/technology'>
              Technologia
            </MenuLink>
            <MenuLink
              setIsClicked={setIsClicked}
              isClicked={isClicked}
              path='/help'>
              Pomoc
            </MenuLink>
            <MenuLink
              setIsClicked={setIsClicked}
              isClicked={isClicked}
              path='/contact'>
              Kontakt
            </MenuLink>
            <div className='social-media'></div>
          </ul>
          <LanguageToggle
            active={active}
            setActive={setActive}
            isClicked={isClicked}
          />
          <Hamburger
            isClicked={isClicked}
            setIsClicked={setIsClicked}
            handleStateChange={handleStateChange}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
