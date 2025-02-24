import Image from "next/image";

const Card = ({
  title,
  description,
  image,
  isLarge,
}: {
  title: string;
  description: string;
  image: string | null;
  isLarge?: boolean;
}) => {
  return (
    <div
      className={`relative group overflow-hidden rounded-lg cursor-pointer h-full lg:w-auto w-full ${
        isLarge ? "aspect-[537/351]" : "aspect-[423/226]"
      }`}
    >
      {image ? (
        <Image
          src={image}
          alt={`image-${title}`}
          fill
          style={{ objectFit: "cover" }}
          className="rounded-lg"
        />
      ) : (
        <div className="w-full h-full bg-gray-200 flex items-center justify-center">
          <span className="text-gray-500">No Image Available</span>
        </div>
      )}

      <div className="absolute inset-0 bg-primary xl:opacity-0 opacity-100 group-hover:opacity-100 transition-opacity duration-300 px-4 pb-9 flex flex-col justify-end text-white">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-sm mt-2 line-clamp-4">{description}</p>
      </div>
    </div>
  );
};

export default Card;
