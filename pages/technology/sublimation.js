// export async function getStaticPaths() {
//   const paths = products.map((product) => {
//     return {
//       params: { id: product.path.toString() },
//     };
//   });

import TechnologyHero from "../../components/TechnologyHero";
import TechnologySpec from "../../components/TechnologySpec";

//   return {
//     paths,
//     fallback: false,
//   };
// }

// export async function getStaticProps({ params }) {
//   const id = params.id;
//   const singleProduct = products.filter((product) => {
//     return product.path === id;
//   });

//   return {
//     props: { product: singleProduct[0] },
//   };
// }

const Technology = () => {
  return (
    <div className='tech-element'>
      <TechnologyHero />
      <TechnologySpec />
    </div>
  );
};

export default Technology;
