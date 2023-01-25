import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";

const TechSwiperDestails = ({ currentTechnology }) => {
  const router = useRouter();
  const { t } = useTranslation("carousel");

  return (
    <div className='description'>
      <h2>{currentTechnology.name}</h2>
      <p>{currentTechnology.description}</p>
      <button
        onClick={() => router.push(`/technology/${currentTechnology.path}`)}
        className='primary-button'>
        {t("findMore")}
      </button>
    </div>
  );
};

export default TechSwiperDestails;
