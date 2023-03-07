import Image from "next/image";

export default function TechnologySpec({ technology, t }) {
  return (
    <div className='tech-spec container'>
      <div className='description'>
        <h2>{t("about")}</h2>
      </div>
      <div className='params'>
        <div className='param-container'>
          <Image src='/param3.svg' width={100} height={100} alt='size' />
          <h3>{t("size")}</h3>
          <h4>{t("sizeDescription")}</h4>
          <p>{technology.size}</p>
        </div>
        <div className='param-container'>
          <Image src='/param2.svg' width={100} height={100} alt='media' />
          <h3>{t("media")}</h3>
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
          <Image src='/param1.svg' width={100} height={100} alt='use' />
          <h3>{t("use")}</h3>
          {technology.use.map((use, index) => (
            <p key={index}>{use}</p>
          ))}
        </div>
      </div>
    </div>
  );
}
