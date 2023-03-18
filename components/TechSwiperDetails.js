import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";

const TechSwiperDestails = ({ currentTechnology }) => {
  const router = useRouter();
  const { t } = useTranslation("carousel");

  const mainPath = router.locale === "pl" ? "technologie" : "technologies";
  const currentPath =
    router.locale === "pl" ? currentTechnology.path : currentTechnology.altPath;

  return (
    <div className='description'>
      <h2>{currentTechnology.name}</h2>
      <p>{currentTechnology.description}</p>
      <button
        onClick={() => router.push(`/${mainPath}/${currentPath}`)}
        className='primary-button'>
        {t("findMore")}
      </button>
    </div>
  );
};

export default TechSwiperDestails;
