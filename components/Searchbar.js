import technologies from "../util/technologies.json";
import products from "../util/products.json";
import { useState, useEffect } from "react";
import Image from "next/image";

const Searchbar = () => {
  const [text, setText] = useState("");
  const [filteredResults, setFilteredResult] = useState([]);
  const results = [...technologies, ...products];

  const handleChange = (e) => {
    setFilteredResult(
      results.filter((result) => {
        return result.name
          .toLocaleLowerCase()
          .includes(e.target.value.toLowerCase());
      }),
    );

    if (e.target.value === "") setFilteredResult();
    if (e.target.value && filteredResults === [])
      setFilteredResult(["Brak wyników wyszukiwania"]);
  };

  useEffect(() => {
    console.log(filteredResults);
  });

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
            {filteredResults && (
              <div className='results'>
                {filteredResults.map((result) => {
                  return (
                    <div className='result-item'>
                      <p>{result.name}</p>
                      {result.image || result.linkImage ? (
                        <Image
                          src={result.image || result.linkImage}
                          width={50}
                          height={50}
                        />
                      ) : null}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
        <div className='contact-items'>
          <div className='call'>
            <img src='/call.png' alt='' />
            <p>tel. 501 501 501</p>
          </div>
          <div className='email'>
            <img src='/email.png' alt='' />
            <p>sklep@seepoint.pl</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Searchbar;
