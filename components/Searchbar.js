import technologies from "../util/technologies.json";
import products from "../util/products.json";
import { useState, useEffect, useRef } from "react";

import SearchbarDropdown from "./SearchbarDropdown";

const Searchbar = () => {
  const [isActive, setIsActive] = useState(true);
  const [filteredResults, setFilteredResult] = useState([]);

  const results = [...technologies, ...products];

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
    <div className='searchbar'>
      <div className='search-wrapper container'>
        <div className='search'>
          <p>Szukaj frazą</p>
          <div className='input-wrapper'>
            <input
              onChange={(e) => handleChange(e)}
              type='text'
              placeholder='Wyszukaj...'
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
            <img src='/call.webp' alt='' />
            <p>tel. 501 501 501</p>
          </div>
          <div className='email'>
            <img src='/email.webp' alt='' />
            <p>sklep@seepoint.pl</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Searchbar;
