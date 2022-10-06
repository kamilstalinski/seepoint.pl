const Hamburger = ({isClicked, setIsClicked}) => {

    return (
        <div className={isClicked ? 'hamburger active' : 'hamburger'} onClick={() => setIsClicked(!isClicked)}>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
        </div>
    )
}

export default Hamburger;