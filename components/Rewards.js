import { useTranslation } from "next-i18next";

const Rewards = () => {
  const { t } = useTranslation("rewards");

  return (
    <div className='rewards container'>
      <h2>{t("rewards")}</h2>
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
