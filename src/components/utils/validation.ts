import * as Yup from "yup";
import { useTranslations } from "next-intl";

type TFunctionType = ReturnType<typeof useTranslations>;

export const getContactValidationSchema = (t: TFunctionType) => {
  return Yup.object({
    first_name: Yup.string()
      .min(2, t("errors.name_short"))
      .max(50, t("errors.name_long"))
      .required(t("errors.name_required")),
    last_name: Yup.string()
      .min(2, t("errors.surname_short"))
      .max(50, t("errors.surname_long"))
      .required(t("errors.surname_required")),
    email: Yup.string()
      .email(t("errors.invalid_email"))
      .required(t("errors.email_required")),
    phone_number: Yup.string()
      .matches(/^\+\d+$/, t("errors.invalid_phone"))
      .min(10, t("errors.phone_too_short"))
      .max(20, t("errors.phone_too_long"))
      .required(t("errors.phone_required")),
    message: Yup.string()
      .min(10, t("errors.message_short"))
      .max(1000, t("errors.message_long"))
      .required(t("errors.message_required")),
  });
};
