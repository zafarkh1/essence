"use client";

import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { ToTop } from "./icons/icons";
import { Logo } from "./icons/Logo";

const Footer = () => {
  const currentLang = useLocale() as "ru" | "en";
  const t = useTranslations("Navbar");

  const links = [
    { id: 1, url: `/${currentLang}`, title: t("who") },
    { id: 2, url: `/${currentLang}/what`, title: t("what") },
    { id: 3, url: `/${currentLang}/works`, title: t("works") },
    { id: 4, url: `/${currentLang}/people`, title: t("people") },
    { id: 5, url: `/${currentLang}/contact`, title: t("contact") },
  ];

  return (
    <div className="bg-[#18191B] text-[#D4D5D9]">
      <div className="myContainer grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-5 py-6">
        {/* Logo & Links */}
        <div className="relative flex flex-col justify-between lg:gap-32 sm:gap-24 gap-8">
          <Link href="/">
            <Logo />
          </Link>
          <div className="text-sm flex flex-wrap gap-x-4 gap-y-1">
            {links.map((link, index) => (
              <div key={link.id} className="flex items-center">
                <Link href={link.url}>{link.title}</Link>
                {index < links.length - 1 && <span className="mx-2">/</span>}
              </div>
            ))}
          </div>
          <button
            className="absolute right-0 top-0 lg:hidden"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <ToTop />
          </button>
        </div>

        {/* Contact & Email Section (Updated) */}
        <div className="lg:grid grid-rows-3">
          <div className="row-start-2 row-span-1">
            <span className="text-[10px] uppercase opacity-60">
              {t("Footer.contactUs")}
            </span>
            <p className="text-xl mt-2">+1 999 888-76-54</p>
          </div>
          <div className="row-start-3 row-span-1 self-end">
            <span className="text-[10px] uppercase opacity-60">
              {t("Footer.email")}
            </span>
            <p className="text-sm mt-2">hello@logoipsum.com</p>
          </div>
        </div>

        {/* Address Section (Updated) */}
        <div className="lg:grid grid-rows-3">
          <div className="row-start-2 row-span-1">
            <span className="text-[10px] uppercase opacity-60">
              {t("Footer.address")}
            </span>
            <p className="text-sm mt-2">
              2118 Thornridge Cir. Syracuse, Connecticut 35624
            </p>
          </div>
        </div>

        {/* Copyright & ToTop Button */}
        <div className="lg:ml-auto flex flex-col justify-between">
          <button
            className="self-end hidden lg:block"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <ToTop />
          </button>
          <span className="text-[10px] opacity-60">© 2024 — GFORCE</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
