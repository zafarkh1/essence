"use client";

import { useLocale, useTranslations } from "next-intl";
import { useFetchData } from "@/api/api";
import { TypeWork } from "@/api/type";
import Cards from "@/components/pages/Work/Card";

const page = () => {
  const t = useTranslations("Headings");
  const { data } = useFetchData<TypeWork[]>(
    "api/work",
    useLocale() as "ru" | "en"
  );

  return (
    <div className="workContainer lg:py-16 py-8 2xl:min-h-[720px] lg:min-h-[300px] min-h-[calc(100vh-200px)]">
      <h1 className="font-semibold lg:text-[56px] text-[32px] lg:leading-[72px] leading-[41px] text-center">
        {t("works")}
      </h1>

      <div className="grid 2xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 lg:gap-x-5 sm:gap-x-4 lg:gap-y-8 gap-y-4 lg:mt-8 mt-6">
        {data?.map((item, index) => (
          <Cards {...item} key={index} />
        ))}
      </div>
    </div>
  );
};

export default page;
