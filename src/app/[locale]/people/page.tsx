"use client";

import { useLocale, useTranslations } from "next-intl";
import { useFetchData } from "@/api/api";
import { TypePeople } from "@/api/type";
import Cards from "@/components/pages/People/Card";

const page = () => {
  const t = useTranslations("Headings");
  const { data } = useFetchData<TypePeople[]>(
    "api/people",
    useLocale() as "ru" | "en"
  );

  return (
    <div className="peopleContainer lg:py-16 py-8">
      <h1 className="font-semibold lg:text-[56px] text-[32px] lg:leading-[72px] leading-[41px] text-center">
        {t("people")}
      </h1>

      <div className="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 2xl:gap-x-8 lg:gap-x-6 sm:gap-x-4 gap-y-8 lg:mt-8 mt-6 lg:mb-20 mb-5">
        {data?.map((item, index) => (
          <Cards {...item} key={index} />
        ))}
      </div>
    </div>
  );
};

export default page;
