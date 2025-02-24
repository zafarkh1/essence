import Image from "next/image";
import { TypeWork } from "@/api/type";

interface CardsProps extends TypeWork {}

const Cards: React.FC<CardsProps> = ({ title, content, url, image }) => {
  return (
    <div className="relative lg:max-w-[420px] w-full lg:max-h-[300px] h-[220px] rounded-xl overflow-hidden group cursor-pointer">
      <a href={url || "#"} target="_blank" rel="noopener noreferrer">
        {image && (
          <Image
            src={image}
            alt={`image-${title}`}
            fill
            className="object-cover"
          />
        )}

        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black lg:opacity-0 opacity-100 group-hover:opacity-100 transition-opacity duration-300" />

        <div className="absolute inset-0 lg:opacity-0 opacity-100 group-hover:opacity-100 transition-opacity duration-300 font-bold text-white p-3 flex flex-col justify-end">
          <h5 className="lg:text-xl text-lg">{title}</h5>
          <p className="text-sm">{content}</p>
        </div>
      </a>
    </div>
  );
};

export default Cards;
