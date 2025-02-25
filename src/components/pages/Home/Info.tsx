import React from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";

const Info = () => {
  const t = useTranslations("Home");
  return (
    <>
      <div className="bg-[#F9FAFB]">
        <div className="infoContainer flex flex-col lg:flex-row gap-10 lg:gap-16 lg:pt-24 lg:pb-44 lg:mb-0 mb-24">
          <div className="relative lg:hidden mt-8 w-full h-[209px]">
            <Image
              src="/assets/info.png"
              alt="Office setup"
              className="object-cover"
              fill
              priority
            />
          </div>

          {/* Left Section */}
          <div className="lg:w-1/2 relative z-10">
            <h1 className="text-3xl lg:text-4xl font-semibold text-[#101828]">
              {t("subtitle")}
            </h1>
            <p className="pt-4 text-[#475467] leading-[1.6] text-base lg:text-lg">
              {t("text")}
            </p>
          </div>

          {/* Right Section */}
          <div className="lg:w-1/2 w-full  text-[#101828] relative z-10">
            {[
              t("list_1"),
              t("list_2"),
              t("list_3"),
              t("list_4"),
              t("list_5"),
            ].map((item, index) => (
              <div key={index} className="pb-6">
                <p className="font-medium text-lg">{item}</p>
                <div className="w-full h-[1px] bg-[#000] mt-2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Image Section */}
      <div className="relative infoContainer lg:-mt-24 lg:mb-24 lg:block hidden w-full h-[400px]">
        <Image
          src="/assets/info.png"
          alt="Office setup"
          className="object-cover"
          fill
          priority
        />
      </div>
    </>
  );
};

export default Info;
