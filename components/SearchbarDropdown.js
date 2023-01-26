import { useRef, useEffect } from "react";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import Link from "next/link";

export default function SearchbarDropdown({
  isActive,
  filteredResults,
  setFilteredResult,
}) {
  const ref = useRef();

  const { t } = useTranslation("searchbar");

  useEffect(() => {
    if (filteredResults.length === 0) setFilteredResult([t("results")]);
  }, [filteredResults]);

  return (
    <>
      {isActive && (
        <div ref={ref} className='results'>
          {filteredResults.map((result) => {
            return (
              <Link
                key={result.id + Math.random() * 100}
                href={`${result.category}/${result.path}`}>
                <div id='result-item'>
                  {result.name ? <p>{result.name}</p> : <p>{result}</p>}
                  {result.image || result.linkImage ? (
                    <Image
                      src={result.image || result.linkImage}
                      width={50}
                      height={50}
                      objectFit='contain'
                      alt={result.name}
                      priority={true}
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
