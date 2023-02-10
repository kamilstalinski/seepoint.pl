import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        "navbar",
        "footer",
        "searchbar",
      ])),
    },
  };
}

export default function PrivacyPolicy() {
  return (
    <div className='privacy'>
      {/* <h1>Polityka Prywatności</h1>
      <p>
        Poniższa Polityka Prywatności określa
        <span style={{ fontWeight: "bold" }}>
          zasady zapisywania i uzyskiwania dostępu do danych na Urządzeniach
          Użytkowników
        </span>
        korzystających z Serwisu do celów świadczenia usług drogą elektroniczną
        przez Administratora oraz zasady gromadzenia i przetwarzania danych
        osobowych Użytkowników, które zostały podane przez nich osobiście i
        dobrowolnie za pośrednictwem narzędzi dostępnych w Serwisie.
      </p>
      <h2>§1 Definicje</h2>
      <ul>
        <li>
          <span style={{ fontWeight: "bold" }}>Serwis</span> - serwis
          internetowy "Seepoint" działający pod adresem https://seepoint.pl
        </li>
        <li>
          <span style={{ fontWeight: "bold" }}>Serwis zewnętrzny</span> -
          serwisy internetowe partnerów, usługodawców lub usługobiorców
          współpracujących z Administratorem
        </li>
        <li>
          <span style={{ fontWeight: "bold" }}>
            Administrator Serwisu / Danych
          </span>{" "}
          - Administratorem Serwisu oraz Administratorem Danych (dalej
          Administrator) jest firma "Seepoint Sp. z o.o.", prowadząca
          działalność pod adresem: ul. I Brygady Legionów 15 72-100, Goleniów,
          Polska, o nadanym numerze identyfikacji podatkowej (NIP): 8522492325,
          świadcząca usługi drogą elektroniczną za pośrednictwem Serwi
        </li>
        <li>
          <span style={{ fontWeight: "bold" }}>Użytkownik</span> - osoba
          fizyczna, dla której Administrator świadczy usługi drogą elektroniczną
          za pośrednictwem Serwisu.
        </li>
        <li>
          <span style={{ fontWeight: "bold" }}>Urządzenie</span> - elektroniczne
          urządzenie wraz z oprogramowaniem, za pośrednictwem którego Użytkownik
          uzyskuje dostęp do Serwisu
        </li>
        <li>
          <span style={{ fontWeight: "bold" }}>Cookies (ciasteczka)</span> -
          dane tekstowe gromadzone w formie plików zamieszczanych na Urządzeniu
          Użytkownika
        </li>
        <li>
          <span style={{ fontWeight: "bold" }}>RODO</span>Rozporządzenie
          Parlamentu Europejskiego i Rady (UE) 2016/679 z dnia 27 kwietnia 2016
          r. w sprawie ochrony osób fizycznych w związku z przetwarzaniem danych
          osobowych i w sprawie swobodnego przepływu takich danych oraz
          uchylenia dyrektywy 95/46/WE (ogólne rozporządzenie o ochronie danych)
        </li>
        <li>
          <span style={{ fontWeight: "bold" }}>Dane osobowe</span>oznaczają
          informacje o zidentyfikowanej lub możliwej do zidentyfikowania osobie
          fizycznej („osobie, której dane dotyczą”); możliwa do zidentyfikowania
          osoba fizyczna to osoba, którą można bezpośrednio lub pośrednio
          zidentyfikować, w szczególności na podstawie identyfikatora takiego
          jak imię i nazwisko, numer identyfikacyjny, dane o lokalizacji,
          identyfikator internetowy lub jeden bądź kilka szczególnych czynników
          określających fizyczną, fizjologiczną, genetyczną, psychiczną,
          ekonomiczną, kulturową lub społeczną tożsamość osoby fizycznej
        </li>
        <li>
          <span style={{ fontWeight: "bold" }}>Przetwarzanie</span> - oznacza
          operację lub zestaw operacji wykonywanych na danych osobowych lub
          zestawach danych osobowych w sposób zautomatyzowany lub
          niezautomatyzowany, taką jak zbieranie, utrwalanie, organizowanie,
          porządkowanie, przechowywanie, adaptowanie lub modyfikowanie,
          pobieranie, przeglądanie, wykorzystywanie, ujawnianie poprzez
          przesłanie, rozpowszechnianie lub innego rodzaju udostępnianie,
          dopasowywanie lub łączenie, ograniczanie, usuwanie lub niszczenie;
        </li>
        <li>
          <span style={{ fontWeight: "bold" }}>Ograniczenie przetwarzania</span>{" "}
          - oznacza oznaczenie przechowywanych danych osobowych w celu
          ograniczenia ich przyszłego przetwarzania
        </li>
        <li>
          <span style={{ fontWeight: "bold" }}>Profilowanie</span> - oznacza
          dowolną formę zautomatyzowanego przetwarzania danych osobowych, które
          polega na wykorzystaniu danych osobowych do oceny niektórych czynników
          osobowych osoby fizycznej, w szczególności do analizy lub prognozy
          aspektów dotyczących efektów pracy tej osoby fizycznej, jej sytuacji
          ekonomicznej, zdrowia, osobistych preferencji, zainteresowań,
          wiarygodności, zachowania, lokalizacji lub przemieszczania się
        </li>
        <li>
          <span style={{ fontWeight: "bold" }}>Zgoda</span> - zgoda osoby,
          której dane dotyczą oznacza dobrowolne, konkretne, świadome i
          jednoznaczne okazanie woli, którym osoba, której dane dotyczą, w
          formie oświadczenia lub wyraźnego działania potwierdzającego,
          przyzwala na przetwarzanie dotyczących jej danych osobowych
        </li>
        <li>
          <span style={{ fontWeight: "bold" }}>Pseudonimizacja</span> - oznacza
          przetworzenie danych osobowych w taki sposób, by nie można ich było
          już przypisać konkretnej osobie, której dane dotyczą, bez użycia
          dodatkowych informacji, pod warunkiem że takie dodatkowe informacje są
          przechowywane osobno i są objęte środkami technicznymi i
          organizacyjnymi uniemożliwiającymi ich przypisanie zidentyfikowanej
          lub możliwej do zidentyfikowania osobie fizycznej
        </li>
        <li>
          <span style={{ fontWeight: "bold" }}>
            Naruszenie ochrony danych osobowych
          </span>{" "}
          - oznacza naruszenie bezpieczeństwa prowadzące do przypadkowego lub
          niezgodnego z prawem zniszczenia, utracenia, zmodyfikowania,
          nieuprawnionego ujawnienia lub nieuprawnionego dostępu do danych
          osobowych przesyłanych, przechowywanych lub w inny sposób
          przetwarzanych
        </li>
        <li>
          <span style={{ fontWeight: "bold" }}>Anonimizacja</span> -
          Anonimizacja danych to nieodwracalny proces operacji na danych, który
          niszczy / nadpisuje "dane osobowe" uniemożliwiając identyfikację, lub
          powiązanie danego rekordu z konkretnym użytkownikiem lub osobą
          fizyczną.
        </li>
      </ul> */}
    </div>
  );
}
