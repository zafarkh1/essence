import Image from "next/image";
import { TypePeople } from "@/api/type";

const Cards = ({
  description,
  first_name,
  founder,
  image,
  last_name,
}: TypePeople) => {
  return (
    <div className="relative lg:max-w-[420px] aspect-[4/5] rounded-xl overflow-hidden group cursor-pointer">
      <Image src={image} alt="work" fill className="object-cover" />

      {/* <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black lg:opacity-0 opacity-100 group-hover:opacity-100 transition-opacity duration-300" /> */}

      {/* Blur Effect on Bottom 40% */}
      <div className="absolute bottom-0 left-0 w-full h-[40%] lg:group-hover:backdrop-blur-lg lg:bg-white/0 bg-white/50 group-hover:bg-white/50 transition-all duration-300" />

      {/* Text Container */}
      <div className="absolute bottom-0 left-0 w-full px-5 pb-5 lg:opacity-0 opacity-100 group-hover:opacity-100 transition-opacity duration-300 font-bold text-white mb-auto">
        <h5 className="lg:text-2xl text-xl lg:mb-4 mb-3">
          {`${first_name}  ${last_name}`}
        </h5>
        <p className="lg:text-lg text-base mb-1">{founder}</p>
        <p className="lg:text-base text-sm pr-5 line-clamp-2">{description}</p>
      </div>
    </div>
  );
};

export default Cards;
