import Image from "next/legacy/image";
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
        "consentPopup",
      ])),
    },
  };
}

const Products = () => {
  const { t } = useTranslation("productMain");
  return (
    <div className='products'>
      <Head>
        <title>{t("metaTitle")}</title>
        <meta name='description' content={t("metaDescription")} />
        <meta key='robots' name='robots' content='noindex,nofollow' />
        <meta key='googlebot' name='googlebot' content='noindex,nofollow' />
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
              priority={true}
            />
            <div className='text-container'>
              <p>{t("whyusdesc")}</p>
            </div>
          </div>
          <h2>{t("allproducts")}</h2>
          <div className='products-container'>
            <ProductLink />
          </div>
          <h2>{t("technology")}</h2>
          <div className='banner-container'>
            <Image
              src='/static/plotter.webp'
              width={100}
              height={30}
              layout='responsive'
              alt='plotter'
              priority={true}
            />
            <div className='text-container'>
              <p>{t("technologydesc")}</p>
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
