import { useEffect, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

export default function ProductDropdown({ type }) {
  const [isVisible, setIsVisible] = useState(false);
  const [parameter, setParameter] = useState();
  const handleDropdown = () => {
    setIsVisible(!isVisible);
  };

  if (type.hasOwnProperty("material"))
    return (
      <>
        <div className='dropdown-title' onClick={handleDropdown}>
          <h3>Rozmiar</h3>
          <FontAwesomeIcon className='fa2' icon={faAngleDown} />
        </div>
        <div className={isVisible ? "dropdown-active" : "dropdown"}>
          {parameter.map((param) => {
            return <p>{param}</p>;
          })}
        </div>
      </>
    );
}
