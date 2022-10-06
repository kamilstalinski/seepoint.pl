const Searchbar = () => {
  return (
    <div className="searchbar container">
      <div className="search">
        <p>Szukaj frazą</p>
        <input type="text" placeholder="Wyszukaj..." />
      </div>
      <div className="contact-items">
        <div className="call">
          <img src='/call.png' alt="" />
          <p>tel. 501 501 501</p>
        </div>
        <div className="email">
          <img src='/email.png' alt="" />
          <p>sklep@seepoint.pl</p>
        </div>
      </div>
    </div>
  )
}

export default Searchbar;


