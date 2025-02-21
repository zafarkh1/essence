import Image from "next/image";

const Cards = ({ src }: { src: string }) => {
  return (
    <div className="relative lg:max-w-[420px] w-full lg:h-[480px] h-[432px] rounded-xl overflow-hidden group cursor-pointer">
      <Image src={src} alt="work" fill className="object-cover" />

      {/* Gradient Overlay */}
      {/* <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black lg:opacity-0 opacity-100 group-hover:opacity-100 transition-opacity duration-300" /> */}

      {/* Blur Effect on Bottom 40% */}
      <div className="absolute bottom-0 left-0 w-full h-[40%] lg:group-hover:backdrop-blur-lg lg:bg-white/0 bg-white/50 group-hover:bg-white/50 transition-all duration-300" />

      {/* Text Container */}
      <div className="absolute bottom-0 left-0 w-full p-5 lg:opacity-0 opacity-100 group-hover:opacity-100 transition-opacity duration-300 font-bold text-white">
        <h5 className="lg:text-2xl text-xl lg:mb-4 mb-3">Alisa Hester</h5>
        <p className="lg:text-lg text-base mb-1">Founder & CEO</p>
        <p className="lg:text-base text-sm">
          Former co-founder of Opendoor. Early staff at Spotify and Clearbit.
        </p>
      </div>
    </div>
  );
};

export default Cards;
