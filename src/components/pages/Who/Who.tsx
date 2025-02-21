"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useLocale } from "next-intl";
import { getWho } from "@/api/data";
import { TypeWho } from "@/api/type";

const Who = () => {
  const currentLang = useLocale() as "ru" | "en";
  const [data, setData] = useState<TypeWho[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getWho(currentLang);
        setData(response);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [currentLang]);

  return (
    <div className="flex items-center min-h-screen 2xl:py-16 py-6">
      <div className="myContainer">
        <h2 className="2xl:text-[48px] lg:text-[40px] text-[24px] 2xl:leading-[72px] lg:leading-[64px] leading-[31px] font-medium">
          {data[0]?.content}
        </h2>

        <div className="grid grid-cols-3 2xl:gap-x-10 lg:gap-x-8 gap-x-3 2xl:mt-[54px] lg:mt-12 mt-10">
          {data[0]?.images?.map((image, index) => (
            <div
              key={index}
              className="2xl:h-[266px] lg:h-[180px] h-[80px] relative"
            >
              <Image src={image.image} alt={`who-${index}`} layout="fill" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Who;
