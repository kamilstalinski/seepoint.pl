import Navbar from "./Navbar";
import Searchbar from "./Searchbar";
import Footer from "./Footer";
import { useState } from "react";
import ConsentPopup from "./ConsentPopup";
// import { useTranslation } from "next-i18next";

const Layout = ({ children }) => {
  // const { t } = useTranslation("navigation");
  const [isClicked, setIsClicked] = useState(false);

  const handleStateChange = (isClicked) => {
    setIsClicked(isClicked);
  };

  return (
    <div className='content'>
      <ConsentPopup />
      <Navbar handleStateChange={handleStateChange} />
      <Searchbar isClicked={isClicked} />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
