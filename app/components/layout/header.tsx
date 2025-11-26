"use client";

import { Navbar2 } from "@/components/navbar2";
import { useTranslations } from "next-intl";

export default function Header() {
  const t = useTranslations("common");

  return (
    <Navbar2
      logo={{
        url: "/de",
        src: "",
        alt: "",
        title: t("company.name"),
      }}
      menu={[
        { title: t("nav.home"), url: "/de" },
        { title: t("nav.about"), url: "/de/about" },
        { title: t("nav.services"), url: "/de/services" },
      ]}
      auth={{
        login: { title: "", url: "" },
        signup: { title: t("nav.contact"), url: "/de/contact" },
      }}
    />
  );
}
