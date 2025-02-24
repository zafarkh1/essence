"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import { useFormik } from "formik";
import toast from "react-hot-toast";
import { getContactValidationSchema } from "@/components/utils/validation";
import { postContact } from "@/api/api";

const ErrorMessage = ({ message }: { message: string }) =>
  message ? (
    <p className="text-red-500 text-sm mt-[3px] ml-2">{message}</p>
  ) : null;

const Form = () => {
  const t = useTranslations("Contact");
  const pathname = usePathname();
  const currentLang = pathname.split("/")[1] || "en";
  const [loading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      first_name: "",
      last_name: "",
      email: "",
      phone_number: "",
      message: "",
    },
    validationSchema: getContactValidationSchema(t),
    onSubmit: async (values, { resetForm }) => {
      setLoading(true);
      const status = await postContact(values, currentLang);
      console.log(status);

      if (status) {
        toast.success(t("success_message"));
        resetForm();
      } else {
        formik.setFieldValue("phone_number", "+");
        toast.error(t("error_message"));
      }

      setLoading(false);
    },
  });

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\s/g, "");

    if (!value.startsWith("+")) {
      value = "+" + value.replace(/\D/g, "");
    } else {
      value = "+" + value.slice(1).replace(/\D/g, "");
    }

    if (value.length > 20) return;

    formik.setFieldValue("phone_number", value);
  };

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="lg:w-3/5 w-full border border-[#C5C5C5] rounded-[32px] lg:p-[50px] px-3 py-4 space-y-4 h-fit"
    >
      <div className="flex lg:flex-row flex-col gap-[10px]">
        {["first_name", "last_name"].map((field) => (
          <div key={field} className="relative lg:w-[49%] w-full">
            <input
              type="text"
              placeholder={t(field)}
              className="bg-transparent border border-grayish py-[10px] px-4 rounded-[10px] w-full focus:border-primary focus:outline-none transition-colors duration-300"
              {...formik.getFieldProps(field)}
            />
            <ErrorMessage
              message={(
                (formik.touched[field as keyof typeof formik.touched] &&
                  formik.errors[field as keyof typeof formik.touched]) ??
                ""
              ).toString()}
            />
          </div>
        ))}
      </div>

      <div className="relative">
        <input
          type="email"
          placeholder={t("email")}
          className="bg-transparent border border-grayish py-2 px-4 rounded-[10px] w-full focus:border-primary focus:outline-none transition-colors duration-300"
          {...formik.getFieldProps("email")}
        />
        <ErrorMessage
          message={formik.touched.email ? formik.errors.email ?? "" : ""}
        />
      </div>

      <div className="relative">
        <input
          type="text"
          placeholder={t("phone_number")}
          className="bg-transparent border border-grayish py-2 px-4 rounded-[10px] w-full focus:border-primary focus:outline-none transition-colors duration-300"
          {...formik.getFieldProps("phone_number")}
          onChange={handlePhoneChange}
        />
        <ErrorMessage
          message={
            formik.touched.phone_number ? formik.errors.phone_number ?? "" : ""
          }
        />
      </div>

      <div className="relative">
        <textarea
          cols={10}
          rows={5}
          placeholder={t("message_placeholder")}
          className="bg-transparent border border-grayish py-[10px] px-4 rounded-[10px] w-full resize-none focus:border-primary focus:outline-none transition-colors duration-300"
          {...formik.getFieldProps("message")}
        ></textarea>
        <ErrorMessage
          message={formik.touched.message ? formik.errors.message ?? "" : ""}
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="py-[10px] font-semibold rounded-full w-full bg-primary hover:bg-primaryHover text-white mt-10 transition3"
      >
        {loading ? t("sending") : t("send_button")}
      </button>
    </form>
  );
};

export default Form;
