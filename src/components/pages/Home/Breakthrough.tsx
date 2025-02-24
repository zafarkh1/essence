"use client";

import Image from "next/image";

const Breakthrough = () => {
  return (
    <div className="min-h-[calc(100vh-200px)] flex items-center">
      <div className=" flex lg:flex-row flex-col justify-center  lg:justify-between items-start gap-8">
        {/* Text Section */}
        <div className="xl:max-w-[620px] w-full pt-10 mx-auto">
          <h1 className="xl:text-5xl lg:text-[42px] text-[32px] font-semibold  xl:leading-[60px] leading-10 text-center lg:text-left">
            Breakthrough for brands in the new communications economy
          </h1>
        </div>

        {/* Images Section */}
        <div className="relative flex-col justify-center items-center">
          {/* Top Row */}
          <div className="flex gap-4 mb-4 xl:ml-[170px] ml-0 items-end justify-center px-4">
            <Image
              src="/assets/breakthrough_4.png"
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
          <div className="flex gap-4 items-start xl:justify-normal justify-center">
            <div className="flex flex-col gap-4">
              <Image
                src="/assets/breakthrough_3.png"
                width={281}
                height={144}
                alt="section3"
                className="object-cover  lg:block hidden"
              />
              <div className="w-16 h-16 xl:w-[100px] xl:h-[100px]  rounded-full bg-[#FF4D8D] ml-auto" />
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
              className="object-cover  lg:block hidden"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Breakthrough;
