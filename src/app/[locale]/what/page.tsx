"use client";

import { useLocale } from "next-intl";
import { useFetchData } from "@/api/api";
import { TypeWhat } from "@/api/type";
import Card from "@/components/pages/What/Card";
import Clients from "@/components/pages/What/Clients";

const Page = () => {
  const { data } = useFetchData<TypeWhat[]>(
    "api/creative",
    useLocale() as "ru" | "en"
  );

  return (
    <>
      <div className="whatContainer min-h-screen">
        {/* Cards */}
        {data && (
          <div className="flex flex-col lg:flex-row justify-center gap-8 py-16">
            {/* Left Column - 2 Large Cards */}
            <div className="flex flex-col gap-6 flex-auto max-h-[calc(100vh-200px)]">
              {data.slice(0, 2).map((item, index) => (
                <Card key={index} {...item} isLarge />
              ))}
            </div>

            {/* Right Column - 3 Small Cards */}
            <div className="flex flex-col gap-6 flex-auto max-h-[calc(100vh-200px)]">
              {data.slice(2, 5).map((item, index) => (
                <Card key={index} {...item} />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Clients */}
      <Clients />
    </>
  );
};

export default Page;
