import { HeartIcon } from "@heroicons/react/outline";
import { StarIcon } from "@heroicons/react/solid";
import Image from "next/image";
function InfoCard({ img, location, title, description, star, price, total }) {
  return (
    <div className="flex py-7 px-2 cursor-pointer hover:opacity-80 hover:shadow-xl shadow-lg
    pr-4 transition transform duration-200 ease-out first:border-top">
      <div className="relative h-24 w-40 md:h-52 md:w-80 flex-shrink-0">
        <Image src={img} layout="fill" objectFit="cover" className="rounded-2xl" />
      </div>

      <div className="flex flex-col pl-5">
        <div className="flex justify-between ">
          <p className="">{location}</p>
          <HeartIcon className="h-7 cursor-pointer" />
        </div>

        <h4 className="text-xl">{title}</h4>

        <div className="border-b w-10 pt-2"/>

        <p className="pt-2 text-sm text-gray-500 flex-grow">{description}</p>


        <div className="flex justify-between item-end pt-5">
            <p className="item-center">
                <StarIcon className="h-5  text-red-400"/>
                {star}
            </p>


            <div className="">
                <p className="text-lg lg:text-2xl font-semibold pb-2 lg:">{price}</p>
                <p className="text-right">{total}</p>
            </div>

        </div>

      </div>
    </div>
  );
}

export default InfoCard;
