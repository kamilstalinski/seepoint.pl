import ConsentContext from "../util/ConsentContext";
import { useContext } from "react";
import Link from "next/link";

export default function ConsentPopup() {
  const { handleAccept, handleReject, showPopup } = useContext(ConsentContext);

  return (
    showPopup && (
      <div className='consent'>
        <div className='info'>
          <h2>
            Ta strona korzysta z plików cookies (ciasteczek) aby świadczyć
            usługi na najwyższym poziomie. Dalsze korzystanie ze strony oznacza,
            że zgadzasz się na ich użycie.
          </h2>
          <p>
            Więcej informacji znajdziesz w Polityce Prywatności i{" "}
            <Link href='/rodo'>Obowiązku Informacyjnym RODO</Link>
          </p>
        </div>
        <div className='button-wrapper'>
          <button className='accept' onClick={() => handleAccept()}>
            Zgoda
          </button>
          <button className='reject' onClick={() => handleReject()}>
            Odrzuć
          </button>
        </div>
      </div>
    )
  );
}
