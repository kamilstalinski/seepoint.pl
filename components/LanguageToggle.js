import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRotate } from "@fortawesome/free-solid-svg-icons";

const LanguageToggle = ({ active, isClicked, setActive }) => {
  const [nextLng, setNextLng] = useState("EN");
  const { locale } = useRouter();
  const router = useRouter();

  useEffect(() => {
    if (locale === "en") setNextLng("PL");
    else if (locale === "pl") setNextLng("EN");
  });

  const handleLanguageToggle = () => {
    switch (locale) {
      case "pl":
        router.push("/", "/", { locale: "en" });
        break;
      case "en":
        router.push("/", "/", { locale: "pl" });
        break;
    }
  };

  return (
    <div className='language'>
      <div
        className={`navbar__language ${active ? "active" : null} ${
          isClicked ? "active-menu" : null
        }`}
        onClick={handleLanguageToggle}>
        <FontAwesomeIcon
          icon={faRotate}
          size='2x'
          className='icon'></FontAwesomeIcon>
        <p>{nextLng}</p>
      </div>
    </div>
  );
};

export default LanguageToggle;
