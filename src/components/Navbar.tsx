import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = ({ onLinkClick }: { onLinkClick?: () => void }) => {
  const currentLang = useLocale() as "ru" | "en";
  const pathname = usePathname();
  const t = useTranslations("Navbar");

  const links = [
    {
      id: 1,
      url: `/${currentLang}/who`,
      title: t("who"),
    },
    {
      id: 2,
      url: `/${currentLang}/what`,
      title: t("what"),
    },
    {
      id: 3,
      url: `/${currentLang}/works`,
      title: t("works"),
    },
    {
      id: 4,
      url: `/${currentLang}/people`,
      title: t("people"),
    },
    {
      id: 5,
      url: `/${currentLang}/contact`,
      title: t("contact"),
    },
  ];

  return (
    <>
      {links.map((link) => (
        <Link
          key={link.id}
          href={link.url}
          onClick={onLinkClick} // Close menu on link click
          className={`lg:text-2xl text-base ${
            pathname === link.url ? "text-[#FC2F3C] font-semibold" : ""
          }`}
        >
          {link.title}
        </Link>
      ))}
    </>
  );
};

export default Navbar;
