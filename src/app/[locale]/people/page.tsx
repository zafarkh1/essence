import Cards from "@/components/pages/People/Card";

const url = { id: 1, src: "/assets/people_1.png" };
const repeatedImg = Array(6).fill(url);

const page = () => {
  return (
    <div className="myContainer lg:py-16 py-8">
      <h1 className="font-semibold lg:text-[56px] text-[32px] lg:leading-[72px] leading-[41px] text-center">
        People
      </h1>

      <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 2xl:gap-x-8 lg:gap-x-6 sm:gap-x-4 gap-y-8 lg:mt-8 mt-6">
        {repeatedImg.map((image, index) => (
          <Cards {...image} key={index} />
        ))}
      </div>
    </div>
  );
};

export default page;
