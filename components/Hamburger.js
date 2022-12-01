const Hamburger = ({ isClicked, setIsClicked }) => {
  return (
    <>
      <button
        className={isClicked ? "hamburger active" : "hamburger"}
        onClick={() => setIsClicked(!isClicked)}>
        <div className='line'></div>
        <div className='line'></div>
        <div className='line'></div>
      </button>
    </>
  );
};

export default Hamburger;
