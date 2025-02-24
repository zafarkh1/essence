"use client";

import { useLocale } from "next-intl";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import { useFetchData } from "@/api/api";
import { TypeClients } from "@/api/type";

const Clients = () => {
  const { data } = useFetchData<TypeClients[]>(
    "api/partners",
    useLocale() as "ru" | "en"
  );

  return (
    <div className="overflow-hidden lg:mb-16 mb-8">
      <h2 className="lg:text-[40px] text-3xl font-semibold lg:leading-[52px] leading-[40px] text-center lg:mb-8 pb-4">
        Clients
      </h2>
      <div className="overflow-hidden w-full">
        <Marquee direction="right" gradient={false} className="overflow-hidden">
          <div className="flex space-x-4">
            {data?.map((item, index) => (
              <div
                key={index}
                className="lg:py-[60px] py-6 lg:px-[87px] px-7 flex items-center justify-center border border-[#DCDCDC] lg:rounded-3xl rounded-lg ml-4"
              >
                <div className="relative lg:w-[166px] w-[132px] lg:h-[48px] h-[32px]">
                  <Image
                    src={item.logo}
                    alt={`ads-${index}`}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
              </div>
            ))}
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default Clients;
