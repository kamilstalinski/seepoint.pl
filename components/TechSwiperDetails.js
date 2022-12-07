import { useRouter } from "next/router";

const TechSwiperDestails = ({ currentTechnology }) => {
  const router = useRouter();

  return (
    <div className='description'>
      <h2>{currentTechnology.name}</h2>
      <p>{currentTechnology.description}</p>
      <a
        onClick={() => router.push(`/technology/${currentTechnology.path}`)}
        className='primary-button'>
        Dowiedz się więcej
      </a>
    </div>
  );
};

export default TechSwiperDestails;
