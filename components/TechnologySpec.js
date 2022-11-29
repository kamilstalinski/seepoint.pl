import Image from "next/image";

export default function TechnologySpec() {
  return (
    <div className='tech-spec'>
      <div className='description'>
        <h2>O technologii</h2>
        <p>
          Technika druku wykorzystująca zjawisko sublimacji. Wydruk (CMYK)
          wykonywany jest specjalnymi atramentami na papierze transferowym, a
          następnie w warunkach wysokiego ciśnienia i temperatury przenoszony
          jest na materiał. Wydruk o dużej wytrzymałości, możliwość prania
          wydruków przy zachowaniu kolorów w temp. około 30 stopni. Sublimacja
          pozwala uzyskać szeroki gamut kolorystyczny i bardzo dużą
          rozdzielczość.
        </p>
      </div>
      <div className='params'>
        <div className='param-container'>
          <Image />
          <h3>Wielkość</h3>
          <p>drukujemy w 1 kawałku do szerokości</p>
          <p></p>
        </div>
        <div className='param-container'>
          <Image />
          <h3>Media do druku</h3>
          <p>poliester od 100g do 300g.</p>
          <p>poliester od 100g do 300g.</p>
          <p>poliester od 100g do 300g.</p>
          <p>poliester od 100g do 300g.</p>
          <p></p>
        </div>
        <div className='param-container'>
          <Image />
          <h3>Zastosowanie</h3>
          <p>flagi,</p>
          <p>flagi,</p>
          <p>flagi,</p>
          <p>flagi,</p>
          <p></p>
        </div>
      </div>
    </div>
  );
}
