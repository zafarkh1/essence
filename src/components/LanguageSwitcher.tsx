"use client";

import { useRouter, usePathname } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";
import { Menu } from "@headlessui/react";
import { ArrowDown, ArrowUp, Check } from "@/components/icons/icons";

export const LanguageSwitcher = () => {
  const router = useRouter();
  const pathname = usePathname();
  const currentLang = useLocale() as "ru" | "en";
  const t = useTranslations("Navbar");

  const handleLanguageChange = (newLang: "ru" | "en") => {
    if (newLang === currentLang) return;
    const newPath = `/${newLang}${pathname.replace(/^\/[a-z]{2}/, "")}`;
    router.push(newPath);
  };

  return (
    <>
      <Menu
        as="div"
        className="relative hidden lg:flex items-center gap-2 lg:text-2xl text-base"
      >
        <Menu.Button className="flex items-center gap-2 cursor-pointer">
          {currentLang === "ru" ? "Рус" : "Eng"}
          <ArrowDown />
        </Menu.Button>

        <Menu.Items className="absolute z-10 top-full mt-2 border border-gray-200 rounded-lg bg-white shadow-md lg:text-base">
          <Menu.Item>
            {({ active }) => (
              <button
                onClick={() => handleLanguageChange("en")}
                className={`block px-3 py-2 w-full text-left ${
                  currentLang === "en" ? "text-primary font-semibold" : ""
                } ${active ? "bg-[#F5F5F5]" : ""}`}
              >
                English
              </button>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <button
                onClick={() => handleLanguageChange("ru")}
                className={`block px-3 py-2 w-full text-left ${
                  currentLang === "ru" ? "text-primary font-semibold" : ""
                } ${active ? "bg-[#F5F5F5]" : ""}`}
              >
                Русский
              </button>
            )}
          </Menu.Item>
        </Menu.Items>
      </Menu>

      {/* Mobile Version (Simple Text Buttons) */}
      <div className="lg:hidden flex flex-col items-start gap-4 text-lg font-medium mt-2">
        <p className="text-sm font-medium">{t("language")}</p>
        <div className="flex justify-between items-center w-full">
          <button
            onClick={() => handleLanguageChange("en")}
            className={currentLang === "en" ? "font-bold text-primary" : ""}
          >
            English
          </button>
          {currentLang === "en" && <Check />}
        </div>

        <div className="flex justify-between items-center w-full">
          <button
            onClick={() => handleLanguageChange("ru")}
            className={currentLang === "ru" ? "font-bold text-primary" : ""}
          >
            Русский
          </button>
          {currentLang === "ru" && <Check />}
        </div>
      </div>
    </>
  );
};
