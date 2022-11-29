import TechnologyHero from "../../components/TechnologyHero";
import TechnologySpec from "../../components/TechnologySpec";
import TechCarousel from "../../components/TechCarousel";

import technologies from "../../util/technologies.json";

export async function getStaticPaths() {
  const paths = technologies.map((technology) => {
    return {
      params: { id: technology.path.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const id = params.id;
  const singleProduct = technologies.filter((technology) => {
    return technology.path === id;
  });

  return {
    props: { technology: singleProduct[0] },
  };
}

const Technology = ({ technology }) => {
  return (
    <div className='tech-element'>
      <TechnologyHero technology={technology} />
      <TechnologySpec technology={technology} />
      <TechCarousel
        currentSavedTechnology={technology.id}
        children={"Zobacz nasze inne technologie"}
      />
    </div>
  );
};

export default Technology;
