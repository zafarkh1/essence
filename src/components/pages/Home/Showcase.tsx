"use client";

import { getHome } from "@/api/data";
import { TypeHome } from "@/api/type";
import { useLocale } from "next-intl";
import { useEffect, useState } from "react";
import ReactPlayer from "react-player";

const Showcase = () => {
  const currentLang = useLocale() as "ru" | "en";
  const [data, setData] = useState<TypeHome[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getHome(currentLang);
        setData(response);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [currentLang]);

  return (
    <div className="h-screen flex flex-col items-center justify-center 2xl:py-12 lg:py-8 py-2">
      <h1 className="2xl:text-[56px] lg:text-[48px] text-[32px] font-bold mb-[19px] text-center">
        {data[0]?.title}
      </h1>
      <h5 className="2xl:text-2xl lg:text-xl text-base text-[#F05737] font-semibold mb-7">
        {data[0]?.subtitle}
      </h5>
      <p className="2xl:text-2xl lg:text-xl text-base mb-11">
        {data[0]?.description}
      </p>

      <div className="w-full h-[210px] lg:h-[513px] rounded-3xl overflow-hidden">
        {data[0]?.url ? (
          <ReactPlayer url={data[0]?.url} width="100%" height="100%" controls />
        ) : (
          <p className="text-center">Loading video...</p>
        )}
      </div>
    </div>
  );
};

export default Showcase;
