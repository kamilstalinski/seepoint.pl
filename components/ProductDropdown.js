import { useEffect, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

export default function ProductDropdown({ parameter, t }) {
  const [isVisible, setIsVisible] = useState(false);
  const handleDropdown = () => {
    setIsVisible(!isVisible);
  };

  return (
    <>
      <div className='dropdown-title' onClick={handleDropdown}>
        <h3>{t("size")}</h3>
        <FontAwesomeIcon className='fa2' icon={faAngleDown} />
      </div>
      <div className={isVisible ? "dropdown-active" : "dropdown"}>
        {parameter.map((param) => {
          return <p key={Math.random() * 1231231}>{param}</p>;
        })}
      </div>
    </>
  );
}
