import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import Link from "next/link";
import products from "../util/products.json";

export default function AsideLinks() {
  const { t } = useTranslation("productMain");
  const router = useRouter();
  const productObj = router.locale === "pl" ? products.pl : products.en;
  const mainPath = router.locale === "pl" ? "produkty" : "products";
  const newProductArray = productObj
    .filter((product) => product.id !== 3)
    .concat(productObj.filter((product) => product.id === 3));

  return (
    <aside className='products__links'>
      <div className='links'>
        <h3>{t("products")}</h3>
        {newProductArray.map((product) => {
          const productPath =
            router.locale === "pl" ? product.path : product.altPath;

          return (
            <Link
              legacyBehavior
              href={`${mainPath}/${productPath}`}
              key={product.id}>
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
