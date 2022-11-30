import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";
import Link from "next/link";

export default function TechnologyHero({ technology }) {
  const router = useRouter();

  const goBack = () => router.back();

  return (
    <>
      <div className='hero' style={{ marginBottom: "8rem" }}>
        <div className='hero__img-container2'>
          <Image
            src={technology.imageHero}
            layout='fill'
            objectFit='cover'
            alt={technology.name}
            priority
          />
        </div>
        <div className='container'>
          <div className='hero__content'>
            <Link href='/technology'>
              <div className='prev-page'>
                <FontAwesomeIcon
                  className='icon'
                  icon={faAngleLeft}
                  onClick={goBack}
                />
                <p className='text'>Nasza technologia</p>
              </div>
            </Link>
            <h1 style={{ color: "#6B7786" }}>{technology.name}</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet
              fuga a alias hic voluptatum culpa modi ea animi adipisci
              asperiores? Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Aspernatur, possimus.
            </p>
            <button className='primary-button'>Zobacz Produkty</button>
          </div>
        </div>
      </div>
    </>
  );
}
