import Image from "next/image";
import Head from "next/head";
import ContactForm from "../../components/ContactForm";
import Rewards from "../../components/Rewards";
import ProductLink from "../../components/ProductLink";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import AsideLinks from "../../components/AsideLinks";

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
        <title>{t("metaName")}</title>
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
        <AsideLinks />
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
                Jako firma zajmująca się produkcją rozmaitych typów materiałów
                reklamowych w swojej działalności wykorzystujemy rozmaite
                techniki. Sprawia to, że nasza oferta jest różnorodna i dociera
                do szerokiego grona klientów. Możemy wydrukować nieduże banery,
                jak i przygotować dla Ciebie reklamę wielkoformatową.
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
                Bez względu na to, na którą z nich się zdecydujesz, za każdym
                razem będzie ona estetyczna i wyrazista. Taki efekt uzyskujemy
                dzięki temu, że stosujemy różne typy druku.
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
