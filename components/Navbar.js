import MenuLink from "./MenuLink";
import Hamburger from "./Hamburger";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import LanguageToggle from "./LanguageToggle";

const Navbar = ({ handleStateChange, t }) => {
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
              {t.navbar.about}
            </MenuLink>
            <MenuLink
              setIsClicked={setIsClicked}
              isClicked={isClicked}
              path='/products'>
              {t.navbar.products}
            </MenuLink>
            <MenuLink
              setIsClicked={setIsClicked}
              isClicked={isClicked}
              path='/technology'>
              {t.navbar.technology}
            </MenuLink>
            <MenuLink
              setIsClicked={setIsClicked}
              isClicked={isClicked}
              path='/help'>
              {t.navbar.help}
            </MenuLink>
            <MenuLink
              setIsClicked={setIsClicked}
              isClicked={isClicked}
              path='/contact'>
              {t.navbar.contact}
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
