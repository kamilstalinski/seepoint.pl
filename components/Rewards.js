const Rewards = () => {
  return (
    <div className='rewards container'>
      <h2>Nasze nagrody</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet,
        aspernatur similique consectetur veniam nisi consequuntur quidem laborum
        numquam minima dolore animi explicabo, molestias ullam eaque alias in
        voluptates ex officia!
      </p>
      <div className='rewards__container'>
        <img className='img1' src='/static/gazele2011.webp' alt='gazele 2011' />
        <img className='img2' src='/static/gazele2013.webp' alt='gazele 2013' />
        <img className='img3' src='/static/gazele2016.webp' alt='gazele 2016' />
        <img className='img4' src='/static/gazele2017.webp' alt='gazele 2017' />
        <img
          className='img5'
          src='/static/golden2015.webp'
          alt='golden award 2015'
        />
      </div>
    </div>
  );
};

export default Rewards;
