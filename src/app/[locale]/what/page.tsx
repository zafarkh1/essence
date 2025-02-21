"use client";

import { getWhat } from "@/api/data";
import { TypeWhat } from "@/api/type";
import Card from "@/components/pages/What/Card";
import Clients from "@/components/pages/What/Clients";
import { useLocale } from "next-intl";
import { useEffect, useState } from "react";

const Page = () => {
  const currentLang = useLocale() as "ru" | "en";
  const [data, setData] = useState<TypeWhat[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getWhat(currentLang);
        setData(response);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [currentLang]);

  return (
    <>
      <div className="myContainer">
        {/* Cards */}
        <div className="grid xl:grid-cols-2 grid-cols-1 xl:gap-x-8 py-16 xl:gap-y-0 gap-y-6">
          {data && (
            <>
              <div className="flex flex-col xl:gap-y-6 gap-y-6">
                <Card {...data[0]} isLarge />
                <Card {...data[1]} isLarge />
              </div>
              <div className="grid xl:gap-y-6 gap-y-6">
                {data?.slice(2, 5).map((item, index) => (
                  <Card key={index} {...item} />
                ))}
              </div>
            </>
          )}
        </div>
      </div>

      {/* Clients */}
      <Clients />
    </>
  );
};

export default Page;
