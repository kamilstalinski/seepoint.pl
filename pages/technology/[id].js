import TechnologyHero from "../../components/TechnologyHero";
import TechnologySpec from "../../components/TechnologySpec";
import TechCarousel from "../../components/TechCarousel";
import technologies from "../../util/technologies.json";

export async function getStaticPaths({ locales }) {
  const paths = technologies
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
  const id = params.id;
  const singleTech = technologies.filter((technology) => {
    return technology.path === id;
  });

  return {
    props: { technology: singleTech[0], locale, locales },
  };
}

const Technology = ({ technology }) => {
  return (
    <div className='tech-element'>
      <TechnologyHero technology={technology} />
      <TechnologySpec technology={technology} />
      <TechCarousel
        currentSavedTechnology={technology.id}
        text={"Zobacz nasze inne technologie"}
      />
    </div>
  );
};

export default Technology;
