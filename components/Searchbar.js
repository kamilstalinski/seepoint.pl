import technologies from "../util/technologies.json";
import products from "../util/products.json";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { useTranslation } from "next-i18next";

import SearchbarDropdown from "./SearchbarDropdown";

const Searchbar = ({ isClicked }) => {
  const { t } = useTranslation("searchbar");
  const [isActive, setIsActive] = useState(false);
  const [filteredResults, setFilteredResult] = useState([]);

  const results = [...technologies, ...products.pl];

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

  return (
    <div className={`searchbar ${isClicked ? "active" : null}`}>
      <div className={`search-wrapper container`}>
        <div className='search'>
          <p>{t("searchWord")}</p>
          <div className='input-wrapper'>
            <input
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
            <Image
              width={23}
              height={20}
              src='/static/call.webp'
              alt='call icon'
            />
            <p>tel. 501 501 501</p>
          </div>
          <div className='email'>
            <Image
              width={23}
              height={20}
              src='/static/email.webp'
              alt='email icon'
            />
            <p>sklep@seepoint.pl</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Searchbar;
