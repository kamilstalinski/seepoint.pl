import Link from "next/link";
import Image from "next/image";
import ProductSwiper from "../../components/ProductSwiper";
import ContactForm from "../../components/ContactForm";
import Rewards from "../../components/Rewards";
import ProductLink from "../../components/ProductLink";

const Products = () => {
  return (
    <div className='products'>
      <div className='products__hero'>
        <div className='products__hero--info'>
          <h1>Zobacz równiez nasz sklep</h1>
          <a className='white-button' href='https://sklep.seepoint.pl/'>
            Zobacz nasz sklep
          </a>
        </div>
      </div>
      <div className='wrapper container'>
        <aside className='products__links'>
          <div className='links'>
            <h3>Nasze produkty</h3>
            <Link href='products/beachflags'>
              <a>Beach flagi</a>
            </Link>
            <Link href='productss/rollups'>
              <a>Rollupy</a>
            </Link>
            <Link href='products/banners'>
              <a>Banery</a>
            </Link>
            <Link href='products/alu-banners'>
              <a>Banery na aluframe</a>
            </Link>
            <Link href='products/paintings'>
              <a>Obrazy</a>
            </Link>
            <Link href='products/animal-pillows'>
              <a className='animal'>Poduszkozwierzaki</a>
            </Link>
          </div>
        </aside>
        <section>
          {/* <h2>Najpopularniejsze produkty</h2>
          <ProductSwiper /> */}
          <h2>Dlaczego my?</h2>
          <div className='banner-container'>
            <Image
              priority
              src='/uv-print.webp'
              width={100}
              height={30}
              layout='responsive'
              alt='uv print'
            />
            <div className='text-container'>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laudantium eius placeat doloribus nobis natus. Velit ab placeat
                iusto ipsa! Dolorem!
              </p>
            </div>
          </div>
          <h2>Wszystkie produkty</h2>
          <div className='products-container'>
            <ProductLink />
          </div>
          <h2>Nasza technologia</h2>
          <div className='banner-container'>
            <Image
              priority
              src='/plotter.webp'
              width={100}
              height={30}
              layout='responsive'
              alt='plotter'
            />
            <div className='text-container'>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laudantium eius placeat doloribus nobis natus. Velit ab placeat
                iusto ipsa! Dolorem!
              </p>
            </div>
          </div>
        </section>
      </div>
      <ContactForm>Nie znalazłeś tego czego szukasz?</ContactForm>
      <Rewards />
    </div>
  );
};

export default Products;
