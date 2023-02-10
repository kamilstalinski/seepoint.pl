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

export default function Rodo() {
  return (
    <div className='rodo'>
      <h1>INFORMACJA O PRZETWARZANIU DANYCH OSOBOWYCH</h1>
      <h2>
        (ogólna dla jednostek w przypadku, gdy przetwarzanie danych nastąpi na
        podstawie zrealizowania przepisów prawa, umów, ewentualnie zgody)
      </h2>
      <h2>Obowiązuje od 25 maja 2018 r.</h2>
      <hr />
      <p>
        Ze względu na wejście w życie w dniu 25 maja 2018 roku Rozporządzenia
        Parlamentu Europejskiego i Rady (UE) 2016/679 z dnia 27 kwietnia 2016 r.
        w sprawie ochrony osób fizycznych w związku z przetwarzaniem danych
        osobowych i w sprawie swobodnego przepływu takich danych oraz uchylenia
        dyrektywy 95/46/WE (określane jako „RODO”) informujemy, o następujących
        zasadach na jakich przetwarzamy dane:
      </p>
      <p>Zgodnie z art. 13 ust. 1 i ust. 2 RODO informuję, iż:</p>
      <ol>
        <li>
          Administratorem Pani/Pana danych osobowych jest spółka „Seepoint
          Spółka z ograniczoną odpowiedzialnością” z siedzibą przy ul. I Brygady
          Legionów 15, Goleniów tel. +48 91 418 11 91 e-mail: biuro@seepoint.pl;
        </li>
        <li>
          Pani/Pana dane będą, zgodnie z rozporządzeniem Parlamentu
          Europejskiego i Rady UE 2016/679 z dnia 27 kwietnia 2016 r. w sprawie
          ochrony osób fizycznych w związku z przetwarzaniem danych osobowych i
          w sprawie swobodnego przepływu takich danych oraz uchylenia dyrektywy
          95/46/WE (ogólne rozporządzenie o ochronie danych) przetwarzane w celu
          wypełnienia obowiązków wynikających z przepisów prawa, realizacji
          umowy, bądź udzielonej zgody.
        </li>
        <li>
          W związku z przetwarzaniem danych w celu wypełniania obowiązków
          wynikających z przepisów prawa odbiorcami Pani/Pana danych osobowych
          mogą być:
          <ol id='internal-letters'>
            <li>
              organy władzy publicznej oraz podmioty wykonujące zadania
              publiczne lub działające na zlecenie organów władzy publicznej, w
              zakresie i w celach, które wynikają z przepisów powszechnie
              obowiązującego;
            </li>
            <li>
              inne podmioty, które na podstawie stosownych umów podpisanych z
              „Seepoint Sp. z o.o.” w przetwarzają dane osobowe dla których
              Administratorem jest „Seepoint Sp. z o.o.”.
            </li>
          </ol>
        </li>
        <li>
          Dane po zrealizowaniu celu, dla którego zostały zebrane, będą
          przetwarzane do celów archiwalnych i przechowywane przez okres
          niezbędny do zrealizowania przepisów dotyczących archiwizowania danych
          przez Administratora.
        </li>
        <li>
          W związku z przetwarzaniem Pani/Pana danych osobowych przysługują
          Pani/Panu następujące uprawnienia:
          <ol id='internal-letters'>
            <li>
              prawo dostępu do danych osobowych, w tym prawo do uzyskania kopii
              tych danych;
            </li>
            <li>
              prawo do żądania sprostowania (poprawiania) danych osobowych – w
              przypadku gdy dane są nieprawidłowe lub niekompletne;
            </li>
            <li>
              prawo do żądania usunięcia danych osobowych (tzw. prawo do bycia
              zapomnianym), w przypadku gdy:
              <ul id='internal'>
                <li>
                  dane nie są już niezbędne do celów, dla których były zebrane
                  lub w inny sposób przetwarzane,
                </li>
                <li>
                  osoba, której dane dotyczą, wniosła sprzeciw wobec
                  przetwarzania danych osobowych,
                </li>
                <li>
                  osoba, której dane dotyczą wycofała zgodę na przetwarzanie
                  danych osobowych, która jest podstawą przetwarzania danych i
                  nie ma innej podstawy prawnej przetwarzania danych,
                </li>
                <li>dane osobowe przetwarzane są niezgodnie z prawem,</li>
                <li>
                  dane osobowe muszą być usunięte w celu wywiązania się z
                  obowiązku wynikającego z przepisów prawa;
                </li>
              </ul>
            </li>
            <li>
              prawo do żądania ograniczenia przetwarzania danych osobowych – w
              przypadku, gdy:
              <ul id='internal'>
                <li>
                  osoba, której dane dotyczą kwestionuje prawidłowość danych
                  osobowych,
                </li>
                <li>
                  przetwarzanie danych jest niezgodne z prawem, a osoba, której
                  dane dotyczą, sprzeciwia się usunięciu danych, żądając w
                  zamian ich ograniczenia,
                </li>
                <li>
                  Administrator nie potrzebuje już danych dla swoich celów, ale
                  osoba, której dane dotyczą, potrzebuje ich do ustalenia,
                  obrony lub dochodzenia roszczeń,
                </li>
                <li>
                  osoba, której dane dotyczą, wniosła sprzeciw wobec
                  przetwarzania danych, do czasu ustalenia czy prawnie
                  uzasadnione podstawy po stronie administratora są nadrzędne
                  wobec podstawy sprzeciwu;
                </li>
              </ul>
            </li>
            <li>
              prawo do przenoszenia danych – w przypadku gdy łącznie spełnione
              są następujące przesłanki:
              <ul id='internal'>
                <li>
                  przetwarzanie danych odbywa się na podstawie umowy zawartej z
                  osobą, której dane dotyczą lub na podstawie zgody wyrażonej
                  przez tą osobę,
                </li>
                <li>przetwarzanie odbywa się w sposób zautomatyzowany;</li>
              </ul>
            </li>
            <li>
              prawo sprzeciwu wobec przetwarzania danych – w przypadku gdy
              łącznie spełnione są następujące:
              <ul id='internal'>
                <li>
                  zaistnieją przyczyny związane z Pani/Pana szczególną sytuacją,
                  w przypadku przetwarzania danych na podstawie zadania
                  realizowanego w interesie publicznym lub w ramach sprawowania
                  władzy publicznej przez Administratora,
                </li>
                <li>
                  przetwarzanie jest niezbędne do celów wynikających z prawnie
                  uzasadnionych interesów realizowanych przez Administratora lub
                  przez stronę trzecią, z wyjątkiem sytuacji, w których
                  nadrzędny charakter wobec tych interesów mają interesy lub
                  podstawowe prawa i wolności osoby, której dane dotyczą,
                  wymagające ochrony danych osobowych, w szczególności gdy
                  osoba, której dane dotyczą jest dzieckiem.
                </li>
              </ul>
            </li>
          </ol>
        </li>
        <li>
          W przypadku gdy przetwarzanie danych osobowych odbywa się na podstawie
          zgody osoby na przetwarzanie danych osobowych (art. 6 ust. 1 lit a
          RODO), przysługuje Pani/Panu prawo do cofnięcia tej zgody w dowolnym
          momencie. Cofnięcie to nie ma wpływu na zgodność przetwarzania,
          którego dokonano na podstawie zgody przed jej cofnięciem, z
          obowiązującym prawem.
        </li>
        <li>
          Przysługuje Pani/Panu również prawo wniesienia skargi do organu
          nadzorczego zajmującego się ochroną danych osobowych w państwie
          członkowskim Pani/Pana zwykłego pobytu, miejsca pracy lub miejsca
          popełnienia domniemanego naruszenia.
          <p className='adress'>
            Biuro Prezesa Urzędu Ochrony Danych Osobowych (PUODO)
            <br />
            Ul. Stawki 2, 00-193 Warszawa
            <br />
            Telefon: 22 860 70 86
          </p>
        </li>
        <li>
          Pani/Pana dane mogą być przetwarzane w sposób zautomatyzowany i nie
          będą profilowane.
        </li>
      </ol>
      <hr />
    </div>
  );
}
