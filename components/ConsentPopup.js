import ConsentContext from "../util/ConsentContext";
import { useContext } from "react";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";

export default function ConsentPopup() {
  const { handleAccept, handleReject, showPopup } = useContext(ConsentContext);
  const { t } = useTranslation("consentPopup");
  const router = useRouter();

  const privacyPath =
    router.locale === "pl" ? "/polityka-prywatnosci" : "/privacy-policy";
  const rodoPath =
    router.locale === "pl"
      ? "/obowiazek-informacyjny"
      : "/information-obligation";

  return (
    showPopup && (
      <div className='consent'>
        <div className='info'>
          <h2>{t("consentInfo")}</h2>
          <p>
            {t("moreInfo")} <Link href={privacyPath}>{t("privacyPolicy")}</Link>{" "}
            {t("and")} <Link href={rodoPath}>{t("rodo")}</Link>
          </p>
        </div>
        <div className='button-wrapper'>
          <button className='accept' onClick={() => handleAccept()}>
            {t("consent")}
          </button>
          <button className='reject' onClick={() => handleReject()}>
            {t("reject")}
          </button>
        </div>
      </div>
    )
  );
}
