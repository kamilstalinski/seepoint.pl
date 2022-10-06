const Help = () => {
  return(
    <div className="help">
      <h1>Pomoc</h1>
      <div className="help__section">
        <div className="help__section--details">
          <h2>Ogólne</h2>
          <ul>
            <li>Praca powinna być dostarczona w formacie PDF. Dopuszcza się również użycie plików TIFF z kompresją LZW. Niedopuszczalne jest użycie plików z programów typu Word, PowerPoint etc.</li>
            <li>Należy upewnić się, że wszystkie czcionki wykorzystane w projekcie są zamienione na krzywe.</li>
            <li>Nie należy używać opcji ‘Overprint’ (Nadruk wypełnienia).</li>
            <li>Pojedyncze pliki nie powinny zawierać kilku grafik w postaci oddzielnych projektów flag, bannerów, etc. Każda flaga, banner, etc. musi być oddzielnym plikiem.</li>
            <li>Pliki prosimy przesyłać bez ukrytych warstw.</li>
            <li>Pliki PDF do wydruków o boku powyżej 5m powinny zostać proporcjonalnie pomniejszone, aby żaden z boków nie przekraczał długości 5m (np. wydruk 12m x 3m = plik 4m x 1m – pomniejszony 3 razy lub 1,2m x 0,3m – pomniejszony 10x).</li>
          </ul>
        </div>
        <div className="help__section--details">
          <h2>Kolorystyka</h2>
          <ul>
            <li>Pliki powinny być w trybie koloru CMYK (w przypadku stosowania innych trybów kolorów typu RGB, Lab, Index kolorystyka wydruków może znacznie odbiegać od oczekiwań klienta).</li>
            <li>Pliki bez osadzonych profili kolorystycznych.</li>
            <li>Czarne płaszczyzny (tzw. aple) powinny być podbite pozostałymi kolorami - podbicie powinno wynosić co najmniej 20% na jedną składową np. C:20% M:20% Y:20% B:100%.</li>
            <li>Należy pamiętać, iż nieskalibrowany monitor, a także zwykła drukarka nie przedstawia kolorów w sposób wiarygodny.</li>
          </ul>
        </div>
        <div className="circle1"></div>
      </div>
    </div>
  )
}

export default Help;
   