import { useTranslations } from "next-intl";
import { Location, Mail, Phone } from "@/components/icons/ContactIcons";

const Contact = () => {
  const t = useTranslations("Contact");

  return (
    <div className="lg:w-2/5 w-full">
      <h3 className="text-2xl font-semibold mb-5">{t("title")}</h3>
      <p className="text-sm font-medium mb-8">{t("description")}</p>
      <ul className="space-y-4 font-semibold">
        <li className="flex gap-[10px]">
          <Location />
          <span>{t("address")}</span>
        </li>
        <li className="flex gap-[10px]">
          <Phone />
          {t("phone")}
        </li>
        <li className="flex gap-[10px]">
          <Mail />
          {t("socials")}
        </li>
      </ul>
    </div>
  );
};

export default Contact;
