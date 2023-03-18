const Hamburger = ({ isClicked, setIsClicked, handleStateChange }) => {
  return (
    <>
      <button
        className={isClicked ? "hamburger active" : "hamburger"}
        onClick={() => {
          setIsClicked(!isClicked);
          handleStateChange(!isClicked);
        }}>
        <div className='line'></div>
        <div className='line'></div>
        <div className='line'></div>
      </button>
    </>
  );
};

export default Hamburger;
