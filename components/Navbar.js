import MenuLink from "./MenuLink";
import Hamburger from "./Hamburger";
import ShopButton from "./ShopButton";

import { useEffect, useState } from "react";
import Link from "next/link";
import LanguageToggle from "./LanguageToggle";
import { useTranslation } from "next-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRotate, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";

const Navbar = ({ handleStateChange }) => {
  const { t } = useTranslation("navbar");
  const [active, setActive] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const router = useRouter();

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
        <Link legacyBehavior href='/'>
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
              path={router.locale === "pl" ? "/produkty" : "/products"}>
              {t("nav2")}
            </MenuLink>
            <MenuLink
              setIsClicked={setIsClicked}
              isClicked={isClicked}
              path={router.locale === "pl" ? "/technologie" : "/technology"}>
              {t("nav3")}
            </MenuLink>
            <MenuLink
              setIsClicked={setIsClicked}
              isClicked={isClicked}
              path={router.locale === "pl" ? "/pomoc" : "/help"}>
              {t("nav4")}
            </MenuLink>
            <MenuLink
              setIsClicked={setIsClicked}
              isClicked={isClicked}
              path={router.locale === "pl" ? "/kontakt" : "/contact"}>
              {t("nav5")}
            </MenuLink>
            <div className='btn'>
              <ShopButton
                FontAwesomeIcon={FontAwesomeIcon}
                faCartShopping={faCartShopping}
                text={t("store")}
              />
            </div>
          </ul>

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
