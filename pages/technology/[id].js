import TechnologyHero from "../../components/TechnologyHero";
import TechnologySpec from "../../components/TechnologySpec";
import TechCarousel from "../../components/TechCarousel";
import technologies from "../../util/technologies.json";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

export async function getStaticPaths({ locales, locale }) {
  const technologiesObj = locale === "pl" ? technologies.pl : technologies.en;

  const paths = technologiesObj
    .map((technology) =>
      locales.map((locale) => ({
        params: { id: technology.path.toString() },
        locale,
      })),
    )
    .flat();

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params, locale, locales }) {
  const technologiesObj = locale === "pl" ? technologies.pl : technologies.en;

  const id = params.id;
  const singleTech = technologiesObj.filter((technology) => {
    return technology.path === id;
  });

  return {
    props: {
      technology: singleTech[0],
      locale,
      locales,
      ...(await serverSideTranslations(locale, [
        "navbar",
        "footer",
        "searchbar",
        "contactForm",
        "slider",
        "technology",
        "carousel",
      ])),
    },
  };
}

const Technology = ({ technology }) => {
  const { t } = useTranslation("technology");
  return (
    <div className='tech-element'>
      <TechnologyHero technology={technology} t={t} />
      <TechnologySpec technology={technology} t={t} />
      <TechCarousel
        currentSavedTechnology={technology.id}
        text={t("seeMore")}
      />
    </div>
  );
};

export default Technology;
