"use client";

import { Navbar2 } from "@/components/navbar2";
import { useTranslations, useLocale } from "next-intl";

export default function Header() {
  const t = useTranslations("common");
  const locale = useLocale();

  return (
    <Navbar2
      logo={{
        url: `/${locale}`,
        src: "",
        alt: "",
        title: t("company.name"),
      }}
      menu={[
        { title: t("nav.home"), url: `/${locale}` },
        { title: t("nav.about"), url: `/${locale}/about` },
        { title: t("nav.services"), url: `/${locale}/services` },
      ]}
      auth={{
        login: { title: "", url: "" },
        signup: { title: t("nav.contact"), url: `/${locale}/contact` },
      }}
    />
  );
}
