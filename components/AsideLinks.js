import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import Link from "next/link";
import products from "../util/products.json";

export default function AsideLinks() {
  const { t } = useTranslation("productMain");
  const router = useRouter();
  const productObj = router.locale === "pl" ? products.pl : products.en;
  const mainPath = router.locale === "pl" ? "produkty" : "products";

  return (
    <aside className='products__links'>
      <div className='links'>
        <h3>{t("products")}</h3>
        {productObj.map((product) => {
          const productPath =
            router.locale === "pl" ? product.path : product.altPath;

          return (
            <Link href={`${mainPath}/${productPath}`} key={product.id}>
              <a className={product.id === 3 ? "animal" : null}>
                {product.name}
              </a>
            </Link>
          );
        })}
      </div>
    </aside>
  );
}
