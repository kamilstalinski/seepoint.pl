import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";
import Link from "next/link";

export default function TechnologyHero({ technology, t }) {
  const router = useRouter();

  const goBack = () =>
    router.push(router.locale === "pl" ? "technologie" : "technologies");

  return (
    <>
      <div className='hero' style={{ marginBottom: "8rem" }}>
        <div className='hero__img-container2'>
          <Image
            src={technology.imageHero}
            layout='fill'
            objectFit='cover'
            alt={technology.name}
            priority={true}
          />
        </div>
        <div className='container'>
          <div className='hero__content'>
            <Link
              href={router.locale === "pl" ? "/technologie" : "/technologies"}>
              <div className='prev-page'>
                <FontAwesomeIcon
                  className='icon'
                  icon={faAngleLeft}
                  onClick={goBack}
                />
                <p className='text'>{t("backBtn")}</p>
              </div>
            </Link>
            <h1 style={{ color: "#6B7786" }}>{technology.name}</h1>
            <p>{technology.description2}</p>
            <button className='primary-button'>
              <a
                className='aclass'
                href='https://sklep.seepoint.pl/'
                rel='noreferrer'
                target='_blank'>
                {t("seeProducts")}
              </a>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
