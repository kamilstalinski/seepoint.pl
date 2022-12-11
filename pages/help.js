import Image from "next/image";
import ContactForm from "../components/ContactForm";
import help1 from "../public/static/help1.webp";
import help2 from "../public/static/help2.webp";

export function getStaticProps({ locale }) {
  return {
    props: { locale },
  };
}

const Help = () => {
  return (
    <div className='help'>
      <div className='help-wrapper'>
        <div className='help-container container'>
          <div className='help-info '>
            <h1>Pomoc</h1>
            <h2>Ogólne</h2>
            <ul>
              <li>
                Praca powinna być dostarczona w formacie PDF. Dopuszcza się
                również użycie plików TIFF z kompresją LZW. Niedopuszczalne jest
                użycie plików z programów typu Word, PowerPoint etc.
              </li>
              <li>
                Należy upewnić się, że wszystkie czcionki wykorzystane w
                projekcie są zamienione na krzywe.
              </li>
              <li>Nie należy używać opcji ‘Overprint’ (Nadruk wypełnienia).</li>
              <li>
                Pojedyncze pliki nie powinny zawierać kilku grafik w postaci
                oddzielnych projektów flag, bannerów, etc. Każda flaga, banner,
                etc. musi być oddzielnym plikiem.
              </li>
              <li>Pliki prosimy przesyłać bez ukrytych warstw.</li>
              <li>
                Pliki PDF do wydruków o boku powyżej 5m powinny zostać
                proporcjonalnie pomniejszone, aby żaden z boków nie przekraczał
                długości 5m (np. wydruk 12m x 3m = plik 4m x 1m – pomniejszony 3
                razy lub 1,2m x 0,3m – pomniejszony 10x).
              </li>
            </ul>
          </div>
          <div className='help-info'>
            <h2>Kolorystyka</h2>
            <ul>
              <li>
                Pliki powinny być w trybie koloru CMYK (w przypadku stosowania
                innych trybów kolorów typu RGB, Lab, Index kolorystyka wydruków
                może znacznie odbiegać od oczekiwań klienta).
              </li>
              <li>Pliki bez osadzonych profili kolorystycznych.</li>
              <li>
                Czarne płaszczyzny (tzw. aple) powinny być podbite pozostałymi
                kolorami - podbicie powinno wynosić co najmniej 20% na jedną
                składową np. C:20% M:20% Y:20% B:100%.
              </li>
              <li>
                Należy pamiętać, iż nieskalibrowany monitor, a także zwykła
                drukarka nie przedstawia kolorów w sposób wiarygodny.
              </li>
            </ul>
          </div>
          <div className='image-container'>
            <Image
              src={help1}
              layout='fill'
              objectFit='contain'
              alt='help'
              priority={true}
            />
          </div>
        </div>
        <div className='help-container2 container'>
          <div className='help-info'>
            <h2>Folie i płyty</h2>
            <ul>
              <li>
                Minimalna rozdzielczość bitmap w pracy to 300 dpi, w miarę
                możliwości zaleca się używanie grafik wektorowych.
              </li>
              <li>Spady powinny mieć 3mm.</li>
              <li>
                Odległość tekstów i grafik od linii cięcia to co najmniej 3mm.
              </li>
              <li>
                Minimalny rozmiar wycinanych ploterowo elementów grafiki to 1mm.
              </li>
              <li>
                W przypadku cięcia produktu do kształtu innego niż prostokąt
                należy dostarczyć wektorowy szablon cięcia.
              </li>
            </ul>
          </div>
          <div className='help-info'>
            <h2>Tekstylia i PCV</h2>
            <ul>
              <li>
                Minimalna rozdzielczość bitmap w pracy to 150 dpi dla wydruków
                do ok. 10m2, 100 dpi dla 10-30m2, ok. 50 dpi dla wydruków ponad
                30m2, w miarę możliwości zaleca się używanie grafik wektorowych.
              </li>
              <li>Spady powinny mieć 2cm.</li>
              <li>
                Minimalna odległość tekstów i grafik od linii cięcia to co
                najmniej „rozmiar wykończenia + 1cm” (np. tunel 5cm = odległość
                grafik od krawędzi min. 6cm). Zalecana większa odległość ze
                względu na elastyczność materiału.
              </li>
            </ul>
          </div>
          <div className='image-container2'>
            <Image
              priority={true}
              src={help2}
              layout='fill'
              objectFit='contain'
              alt='help'
            />
          </div>
        </div>
      </div>
      <ContactForm>Kontakt</ContactForm>
    </div>
  );
};

export default Help;

//
