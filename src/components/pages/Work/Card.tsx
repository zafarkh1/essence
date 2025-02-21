import { TypeWork } from "@/api/type";
import ReactPlayer from "react-player";

const Cards = ({ title, content, url }: TypeWork) => {
  return (
    <div className="relative lg:max-w-[420px] w-full lg:max-h-[300px] h-[220px] rounded-xl overflow-hidden group cursor-pointer">
      {/* <Image src={src} alt="work" fill className="object-cover" /> */}
      <ReactPlayer url={url} width="100%" height="100%" controls />

      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black lg:opacity-0 opacity-100 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="absolute inset-0 lg:opacity-0 opacity-100 group-hover:opacity-100 transition-opacity duration-300 font-bold text-white p-3 flex flex-col justify-end">
        <h5 className="lg:text-2xl text-xl">{title}</h5>
        <p className="text-base">{content}</p>
      </div>
    </div>
  );
};

export default Cards;
