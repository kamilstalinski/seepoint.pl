import Navbar from "./Navbar";
import Searchbar from "./Searchbar";
import Footer from "./Footer";
import { useState } from "react";

const Layout = ({ children }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleStateChange = (isClicked) => {
    setIsClicked(isClicked);
  };

  return (
    <div className='content'>
      <Navbar handleStateChange={handleStateChange} />
      <Searchbar isClicked={isClicked} />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
