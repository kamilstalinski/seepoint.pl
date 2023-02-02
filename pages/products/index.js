import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import ProductSwiper from "../../components/ProductSwiper";
import ContactForm from "../../components/ContactForm";
import Rewards from "../../components/Rewards";
import ProductLink from "../../components/ProductLink";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        "productMain",
        "navbar",
        "footer",
        "searchbar",
        "contactForm",
        "slider",
        "rewards",
      ])),
    },
  };
}

const Products = () => {
  const { t } = useTranslation("productMain");
  return (
    <div className='products'>
      <Head>
        <title>{t("metaName")} | Seepoint</title>
        <meta name='description' content='Produkty' />
      </Head>
      <div className='products__hero'>
        <div className='products__hero--info'>
          <h1>{t("header")}</h1>
          <a
            className='white-button'
            href='https://sklep.seepoint.pl/'
            rel='noreferrer'
            target='_blank'>
            {t("headerButton")}
          </a>
        </div>
      </div>
      <div className='wrapper container'>
        <aside className='products__links'>
          <div className='links'>
            <h3>{t("products")}</h3>
            <Link href='products/beachflags'>
              <a>{t("beachflags")}</a>
            </Link>
            <Link href='products/rollups'>
              <a>{t("rollups")}</a>
            </Link>
            <Link href='products/banners'>
              <a>{t("banners")}</a>
            </Link>
            <Link href='products/alu-banners'>
              <a>{t("alubanners")}</a>
            </Link>
            <Link href='products/pictures'>
              <a>{t("pictures")}</a>
            </Link>
            <Link href='products/pet-pillows'>
              <a className='animal'>{t("petpillows")}</a>
            </Link>
          </div>
        </aside>
        <section>
          {/* <h2>Najpopularniejsze produkty</h2>
          <ProductSwiper /> */}
          <h2>{t("whyus")}</h2>
          <div className='banner-container'>
            <Image
              src='/static/uv-print.webp'
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
          <h2>{t("allproducts")}</h2>
          <div className='products-container'>
            <ProductLink />
          </div>
          <h2>{t("technology")}</h2>
          <div className='banner-container'>
            <Image
              priority={true}
              src='/static/plotter.webp'
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
      <ContactForm>{t("contact")}</ContactForm>
      <Rewards />
    </div>
  );
};

export default Products;
