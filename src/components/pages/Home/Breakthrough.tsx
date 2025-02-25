"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";

const Breakthrough = () => {
  const t = useTranslations("Home");
  return (
    <div className="breakthroughContainer xl:min-h-[calc(100vh-90px)] min-h-screen relative flex flex-col xl:justify-start gap-20 lg:pb-0 pb-10">
      {/* Text Section */}
      <h1
        className="xl:w-[50%] xl:text-5xl lg:text-4xl text-3xl font-semibold xl:leading-[60px] leading-10 text-center xl:text-left lg:pt-40 pt-14"
        dangerouslySetInnerHTML={{ __html: t("title") }}
      />

      {/* Images Section */}
      <div className="xl:absolute right-0 lg:left-auto left-0 lg:top-10 bottom-20">
        {/* Top Row */}
        <div className="flex gap-4 mb-4 xl:ml-[170px] ml-0 items-end justify-center px-4">
          <Image
            src="/assets/breakthrough_5.png"
            width={233}
            height={179}
            alt="section1"
            className="object-cover w-[165px] h-[132px] lg:w-[200px] lg:h-[155px] xl:w-[233px] xl:h-[179px]"
          />
          <Image
            src="/assets/breakthrough_1.png"
            width={233}
            height={269}
            alt="section2"
            className="object-cover w-[165px] h-[199px] lg:w-[200px] lg:h-[175px] xl:w-[233px] xl:h-[269px]"
          />
          <div className="w-20 h-20 rounded-full bg-[#FF4D8D] lg:block hidden" />
        </div>

        {/* Bottom Row */}
        <div className="flex gap-4 lg:items-start xl:justify-normal items-end">
          <div className="flex flex-col gap-4">
            <Image
              src="/assets/breakthrough_3.png"
              width={281}
              height={144}
              alt="section3"
              className="object-cover md:block hidden"
            />
            <div className="w-[74px] h-[74px] xl:w-[100px] xl:h-[100px] rounded-full bg-[#FF4D8D] lg:ml-auto" />
          </div>
          <Image
            src="/assets/breakthrough_2.png"
            width={233}
            height={269}
            alt="section4"
            className="object-cover w-[170px] h-[199px] lg:w-[200px] lg:h-[175px] xl:w-[233px] xl:h-[269px]"
          />
          <Image
            src="/assets/breakthrough_4.png"
            width={281}
            height={144}
            alt="section5"
            className="object-cover  md:block hidden"
          />
        </div>
      </div>
    </div>
  );
};

export default Breakthrough;
