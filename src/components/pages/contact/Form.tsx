"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";
import { useFormik } from "formik";
import { usePathname } from "next/navigation";
import toast from "react-hot-toast";
import { getContactValidationSchema } from "@/components/utils/validation";
import { postContact } from "@/api/data";

const ErrorMessage = ({ message }: { message: string }) =>
  message ? (
    <p className="text-red-500 text-sm mt-[3px] ml-2">{message}</p>
  ) : (
    ""
  );

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
      phone: "",
      description: "",
    },
    validationSchema: getContactValidationSchema(t),
    onSubmit: async (values, { resetForm }) => {
      setLoading(true);

      const status = await postContact(values, currentLang);

      if (status === "success") {
        toast.success(t("success_message"));
        resetForm();
        formik.setFieldValue("phone", "+998 ");
      } else {
        toast.error(t("error_message"));
      }

      setLoading(false);
    },
  });

  const formatPhoneNumber: (value: string) => string = (value: string) => {
    let cleaned = value.replace(/[^\d+]/g, "");

    let numbers = cleaned.replace("", "").replace(/\s/g, "");
    if (numbers.length > 9) numbers = numbers.slice(0, 9);
    const formatted = numbers.replace(
      /(\d{2})(\d{3})(\d{2})(\d{2})/,
      "$1 $2 $3 $4"
    );

    return `${formatted}`.trim();
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhoneNumber(e.target.value);
    formik.setFieldValue("phone", formatted);
  };

  const Input_email_phone = [
    {
      name: "email",
      type: "email",
    },
    {
      name: "phone",
      type: "text",
      onChange: handlePhoneChange,
    },
  ];

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="lg:w-3/5 w-full border border-[#C5C5C5] rounded-[32px] lg:p-[50px] px-3 py-4 space-y-4"
    >
      <div className="flex lg:flex-row flex-col gap-[10px]">
        {["first_name", "last_name"].map((field) => (
          <div key={field} className="relative lg:w-[49%] w-full">
            <input
              type="text"
              placeholder={t(field)}
              className="bg-transparent border border-grayish py-[10px] px-4 rounded-[10px] w-full"
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
      {Input_email_phone.map(({ name, type, onChange }) => (
        <div key={name} className="relative">
          <input
            type={type}
            placeholder={t(name)}
            className="bg-transparent border border-grayish py-2 px-4 rounded-[10px] w-full"
            {...formik.getFieldProps(name)}
            onChange={onChange || formik.handleChange}
          />
          <ErrorMessage
            message={(
              (formik.touched[name as keyof typeof formik.touched] &&
                formik.errors[name as keyof typeof formik.touched]) ??
              ""
            ).toString()}
          />
        </div>
      ))}
      <div className="relative">
        <textarea
          cols={10}
          rows={5}
          placeholder={t("message_placeholder")}
          className="bg-transparent border border-grayish py-[10px] px-4 rounded-[10px] w-full resize-none"
          {...formik.getFieldProps("description")}
        ></textarea>
        <ErrorMessage
          message={
            formik.touched.description ? formik.errors.description ?? "" : ""
          }
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
