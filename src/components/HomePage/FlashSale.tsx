// components/HomePage/FlashSale.js
import CardComponent from "@/components/(User)/(Category)/CardComponent";
import { IoIosFlash } from "react-icons/io";

const FlashSale = () => {
  return (
    <div className="bg-blue-400 pt-2 pr-3">
      <div className="flex items-center">
        <div className="flex justify-start gap-1">
          <div className="flex space-x-2 bg-blue-400 p-2 rounded-lg">
            {["02", "12", "49", "23"].map((time, index) => (
              <div
                key={index}
                className="bg-white text-black font-bold py-2 px-4 rounded-md"
              >
                {time}
              </div>
            ))}
          </div>
        </div>
        <IoIosFlash className="text-yellow-500 text-3xl" />
        <div className="text-yellow-300 text-4xl font-bold ">Flash sale</div>
      </div>

      {/* PRODUCT */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4 sm:gap-2 md:gap-2 lg:gap-2 p-5">
        {[...Array(4)].map((_, index) => (
          <CardComponent key={index} />
        ))}
      </div>
    </div>
  );
};

export default FlashSale;
