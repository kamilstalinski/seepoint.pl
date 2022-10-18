import Link from "next/link";
import Image from "next/image";
import ProductSwiper from "../../components/ProductSwiper";
import ContactForm from "../../components/ContactForm";
import Rewards from "../../components/Rewards";

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
            <Link href='/'>
              <a>Beach flagi</a>
            </Link>
            <Link href='/'>
              <a>Rollupy</a>
            </Link>
            <Link href='/'>
              <a>Banery</a>
            </Link>
            <Link href='/'>
              <a>Banery na aluframe</a>
            </Link>
            <Link href='/'>
              <a>Obrazy</a>
            </Link>
            <Link href='/'>
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
              src='/uv-print.png'
              width={100}
              height={30}
              layout='responsive'
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
            <Link href='products/rollups'>
              <a className='product-item'>
                <h3>Rollupy</h3>
                <div className='img-container'>
                  <Image src='/rollups2.png' layout='fill' objectFit='cover' />
                </div>
              </a>
            </Link>
            <Link href='products/rollups'>
              <a className='product-item'>
                <h3>Banery</h3>
                <div className='img-container'>
                  <Image src='/banner2.png' layout='fill' objectFit='cover' />
                </div>
              </a>
            </Link>
            <Link href='products/rollups'>
              <a className='product-item'>
                <h3>Banery na aluframe</h3>
                <div className='img-container'>
                  <Image
                    src='/alu-banner.png'
                    layout='fill'
                    objectFit='cover'
                  />
                </div>
              </a>
            </Link>
            <Link href='products/rollups'>
              <a className='product-item'>
                <h3>Poduszkozwierzaki</h3>
                <div className='img-container'>
                  <Image src='/animals.png' layout='fill' objectFit='cover' />
                </div>
              </a>
            </Link>
            <Link href='products/rollups'>
              <a className='product-item'>
                <h3>Obrazy</h3>
                <div className='img-container'>
                  <Image
                    src='/paintings2.png'
                    layout='fill'
                    objectFit='cover'
                  />
                </div>
              </a>
            </Link>
            <Link href='products/rollups'>
              <a className='product-item'>
                <h3>Beach flagi</h3>
                <div className='img-container'>
                  <Image
                    src='/beachflags2.png'
                    layout='fill'
                    objectFit='cover'
                  />
                </div>
              </a>
            </Link>
          </div>
          <h2>Nasza technologia</h2>
          <div className='banner-container'>
            <Image
              src='/plotter.png'
              width={100}
              height={30}
              layout='responsive'
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
