export default function ShopButton({ FontAwesomeIcon, faCartShopping }) {
  return (
    <button className='shop-btn'>
      <a href='https://sklep.seepoint.pl/' target='_blank' rel='noreferrer'>
        <FontAwesomeIcon icon={faCartShopping} />
        <p>Sklep</p>
      </a>
    </button>
  );
}
