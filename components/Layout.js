import Navbar from "./Navbar";
import Searchbar from "./Searchbar";
import Footer from "./Footer";
import { useState } from "react";

const Layout = ({ children, t }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleStateChange = (isClicked) => {
    setIsClicked(isClicked);
  };

  return (
    <div className='content'>
      <Navbar handleStateChange={handleStateChange} t={t} />
      <Searchbar isClicked={isClicked} t={t} />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
