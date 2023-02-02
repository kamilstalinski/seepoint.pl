import MenuLink from "./MenuLink";
import Hamburger from "./Hamburger";
import ShopButton from "./ShopButton";

import { useEffect, useState } from "react";
import Link from "next/link";
import LanguageToggle from "./LanguageToggle";
import { useTranslation } from "next-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRotate, faCartShopping } from "@fortawesome/free-solid-svg-icons";

const Navbar = ({ handleStateChange }) => {
  const { t } = useTranslation("navbar");
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
            <img src='/logo.svg' alt='seepoint logo' />
          </a>
        </Link>
        <div className='navbar__menu'>
          <ul className={isClicked ? "active" : null}>
            <MenuLink
              setIsClicked={setIsClicked}
              isClicked={isClicked}
              path='/'>
              {t("nav1")}
            </MenuLink>
            <MenuLink
              setIsClicked={setIsClicked}
              isClicked={isClicked}
              path='/products'>
              {t("nav2")}
            </MenuLink>
            <MenuLink
              setIsClicked={setIsClicked}
              isClicked={isClicked}
              path='/technology'>
              {t("nav3")}
            </MenuLink>
            <MenuLink
              setIsClicked={setIsClicked}
              isClicked={isClicked}
              path='/help'>
              {t("nav4")}
            </MenuLink>
            <MenuLink
              setIsClicked={setIsClicked}
              isClicked={isClicked}
              path='/contact'>
              {t("nav5")}
            </MenuLink>
            <div className='social-media'></div>
          </ul>
          <ShopButton
            FontAwesomeIcon={FontAwesomeIcon}
            faCartShopping={faCartShopping}
          />
          <LanguageToggle
            active={active}
            FontAwesomeIcon={FontAwesomeIcon}
            isClicked={isClicked}
            faRotate={faRotate}
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
