import MenuLink from "./MenuLink";
import Hamburger from "./Hamburger";

import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [active, setActive] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  return (
    <div className="navbar__wrapper sticky-element">
      <div className="navbar__container container">
        <Link href="/"><a className="navbar__img"><img src='/logo.svg' alt="" /></a></Link>
        <div className="navbar__menu">
          <ul className={isClicked ? "active" : null}>
            <MenuLink path="/">O nas</MenuLink>
            <MenuLink path="/products">Produkty</MenuLink>
            <MenuLink path="/technology">Technologia</MenuLink>
            <MenuLink path="/help">Pomoc</MenuLink>
            <MenuLink path="/contact">Kontakt</MenuLink>
          </ul>
          <div
            className={`navbar__language ${active ? "active" : null}`}
            onClick={() => setActive(!active)}
          >
            <img src='/arrow.svg' alt="" />
            <p>PL</p>
          </div>
          <Hamburger isClicked={isClicked} setIsClicked={setIsClicked} />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
