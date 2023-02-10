import ConsentContext from "../util/ConsentContext";
import { useContext } from "react";

export default function ConsentPopup() {
  const { handleAccept, handleReject, consent } = useContext(ConsentContext);

  return (
    <div className={`consent ${!consent ? "active" : ""}`}>
      <h2>This website is collecting cookies data</h2>
      <div className='button-wrapper'>
        <button className='accept' onClick={() => handleAccept()}>
          Accept
        </button>
        <button className='reject' onClick={() => handleReject()}>
          Reject
        </button>
      </div>
    </div>
  );
}
