import Layout from "../components/Layout";
import "../styles/index.scss";
import { appWithTranslation } from "next-i18next";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import { useRouter } from "next/router";
import { pl, en } from "../translation";
config.autoAddCss = false;

const MyApp = ({ Component, pageProps }) => {
  const router = useRouter();
  const { locale } = router;

  const t = locale === "pl" ? pl : en;
  return (
    <Layout t={t}>
      <Component {...pageProps} />
    </Layout>
  );
};

export default appWithTranslation(MyApp);
