"use client";

import { getWork } from "@/api/data";
import { TypeWork } from "@/api/type";
import Cards from "@/components/pages/Work/Card";
import { useLocale } from "next-intl";
import { useEffect, useState } from "react";

const page = () => {
  const currentLang = useLocale() as "ru" | "en";
  const [data, setData] = useState<TypeWork[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getWork(currentLang);
        setData(response);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [currentLang]);

  return (
    <div className="myContainer lg:py-16 py-8 2xl:min-h-[680px] lg:min-h-[300px] min-h-[200px]">
      <h1 className="font-semibold lg:text-[56px] text-[32px] lg:leading-[72px] leading-[41px] text-center">
        Work
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
