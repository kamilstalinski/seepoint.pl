export default function ShopButton({ FontAwesomeIcon, faCartShopping, text }) {
  return (
    <button className='shop-btn'>
      <a href='https://sklep.seepoint.pl/' target='_blank' rel='noreferrer'>
        <FontAwesomeIcon icon={faCartShopping} />
        <p>{text}</p>
      </a>
    </button>
  );
}
