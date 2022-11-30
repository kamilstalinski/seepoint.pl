import { useRef, useEffect } from "react";

import Image from "next/image";
import Link from "next/link";

export default function SearchbarDropdown({
  isActive,
  setIsActive,
  filteredResults,
  setFilteredResult,
}) {
  const ref = useRef();

  useEffect(() => {
    const clickedOutside = (e) => {
      if (isActive && ref.current && !ref.current.contains(e.target)) {
        setIsActive(false);
      }
    };
    document.addEventListener("click", clickedOutside);
    return () => {
      document.removeEventListener("click", clickedOutside);
    };
  }, [isActive]);

  useEffect(() => {
    if (filteredResults.length === 0)
      setFilteredResult(["Brak wyników wyszukiwania"]);
  }, [filteredResults]);

  return (
    <>
      {isActive && (
        <div ref={ref} className='results'>
          {filteredResults.map((result) => {
            return (
              <Link href={`${result.category}/${result.path}`}>
                <div key={result.is + Math.random() * 100} id='result-item'>
                  {result.name ? <p>{result.name}</p> : <p>{result}</p>}
                  {result.image || result.linkImage ? (
                    <Image
                      src={result.image || result.linkImage}
                      width={65}
                      height={65}
                    />
                  ) : null}
                </div>
              </Link>
            );
          })}
        </div>
      )}
    </>
  );
}
