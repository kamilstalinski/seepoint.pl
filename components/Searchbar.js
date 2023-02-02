import technologies from "../util/technologies.json";
import products from "../util/products.json";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";

import SearchbarDropdown from "./SearchbarDropdown";

const Searchbar = ({ isClicked }) => {
  const router = useRouter();
  const inputRef = useRef(null);

  const { t } = useTranslation("searchbar");

  const [isActive, setIsActive] = useState(false);
  const [filteredResults, setFilteredResult] = useState([]);

  const technologiesObj =
    router.locale === "pl" ? technologies.pl : technologies.en;
  const productObj = router.locale === "pl" ? products.pl : products.en;

  const results = [...technologiesObj, ...productObj];

  const handleChange = (e) => {
    setIsActive(e.target.value ? true : false);
    setFilteredResult(
      results.filter((result) => {
        return result.name
          .toLocaleLowerCase()
          .includes(e.target.value.toLowerCase());
      }),
    );

    if (e.target.value === "") setFilteredResult([]);
  };

  // useEffect(() => {
  //   document.addEventListener("click", () => {
  //     setIsActive(false);
  //     inputRef.current.value = "";
  //   });
  // }, [setIsActive]);

  return (
    <div className={`searchbar ${isClicked ? "active" : null}`}>
      <div className={`search-wrapper container`}>
        <div className='search'>
          <p>{t("searchWord")}</p>
          <div className='input-wrapper'>
            <input
              ref={inputRef}
              onChange={(e) => handleChange(e)}
              type='text'
              placeholder={t("search")}
            />
            <SearchbarDropdown
              results={results}
              isActive={isActive}
              setIsActive={setIsActive}
              filteredResults={filteredResults}
              setFilteredResult={setFilteredResult}
            />
          </div>
        </div>
        <div className='contact-items'>
          <div className='call'>
            <a id='contact-link' href='tel:+48-501-501-501'>
              <Image
                width={23}
                height={20}
                src='/static/call.webp'
                alt='call icon'
              />
              <p>tel. 501 501 501</p>
            </a>
          </div>
          <div className='email'>
            <a id='contact-link' href='mailto:sklep@seepoint.pl'>
              <Image
                width={23}
                height={20}
                src='/static/email.webp'
                alt='email icon'
              />
              <p>sklep@seepoint.pl</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Searchbar;
