import Image from "next/image";

export default function TechnologySpec({ technology }) {
  return (
    <div className='tech-spec container'>
      <div className='description'>
        <h2>O technologii</h2>
        <p>{technology.description2}</p>
      </div>
      <div className='params'>
        <div className='param-container'>
          <Image src='/param3.svg' width={100} height={100} />
          <h3>Wielkość</h3>
          <h4>drukujemy w jednym kawałku do szerokości</h4>
          <p>{technology.size}</p>
        </div>
        <div className='param-container'>
          <Image src='/param2.svg' width={100} height={100} />
          <h3>Media do druku</h3>
          {technology.media.map((media, index) => {
            return (
              <p key={index}>
                <span>{media[0]} </span>
                {media[1]}
              </p>
            );
          })}
        </div>
        <div className='param-container'>
          <Image src='/param1.svg' width={100} height={100} />
          <h3>Zastosowanie</h3>
          {technology.use.map((use, index) => (
            <p key={index}>{use}</p>
          ))}
        </div>
      </div>
    </div>
  );
}
