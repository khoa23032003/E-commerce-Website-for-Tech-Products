// components/Banner.js
"use client";
import Image from "next/image";

const Banner = () => {
  return (
    <div className="grid grid-cols-2 gap-4 p-4">
      <div className="bg-gray-100 p-4 rounded-md">
        <h2 className="text-lg font-bold">
          Digital SLR Camera High Definition
        </h2>
        <p className="text-sm">Surpass, bring, and strong</p>
        <p className="text-red-500 font-bold">
          $70.00 <span className="line-through text-gray-500">$180.99</span>
        </p>
        <button className="mt-2 px-4 py-2 bg-black text-white rounded-md">
          Shop Now
        </button>
      </div>
      <div className="bg-gray-100 p-4 rounded-md">
        <h2 className="text-lg font-bold">Dried Fruit Natural Fruit</h2>
        <p className="text-red-500 font-bold">$70.00</p>
        <Image
          src="/bannerconten.jpg"
          alt="Product"
          width={200}
          height={200}
          className="mt-2"
        />
      </div>
    </div>
  );
};

export default Banner;
