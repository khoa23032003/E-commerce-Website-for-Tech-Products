import CardComponent from "@/components/(User)/(Category)/CardComponent";
import Banner from "@/components/HomePage/Banner";
import Image from "next/image";
import React from "react";
import { IoIosFlash } from "react-icons/io";

const Page = () => {
  return (
    <div className="flex-col">
      {/* BANNER */}
      <div className="w-full md:px-5 md:py-5 px-5 py-5">
        {/* BANNER-TOP */}
        <div className="flex w-full lg:h-[50vh] md:h-[55vh] h-[30vh] gap-2 py-2">
          {/* IMAGE-LEFT - Phần hình ảnh chiếm 3/4 chiều rộng màn hình */}
          <div className="w-full lg:w-3/4 relative  border-2 border-white rounded-md shadow-lg p-4 bg-white">
            {/* Đảm bảo container có position: relative */}
            <Image
              src="https://file.hstatic.net/200000722513/file/banner_web_slider_800x400_laptop_gaming_wukong_d33e1e6762764ec799820bfcc5814047.jpg"
              alt="Banner Image"
              layout="fill"
              objectFit="fill"
            />
          </div>

          {/* IMAGE-RIGHT - Hình ảnh thứ hai chiếm 1/4 chiều rộng màn hình và chỉ hiển thị trên màn hình lớn */}
          <div className="w-1/4 relative hidden lg:block border-2 border-white rounded-md shadow-lg p-4 bg-white">
            {/* Đảm bảo container có position: relative */}
            <Image
              src="/Bannertop1.jpg"
              alt="Side Image"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>

        {/* BANNER-BOTTOM */}
        <div className="flex w-full lg:h-[20vh] md:h-[15vh] h-[12vh] gap-2">
          {/* IMAGE-LEFT - Phần hình ảnh chiếm 3/4 chiều rộng màn hình */}
          <div className="flex   w-full lg:w-3/4 relative  border-2 border-white rounded-md shadow-lg  bg-white">
            {/* Đảm bảo container có position: relative */}
            {/* IMAGE-CON */}
            <div className="w-full lg:w-1/3 h-full relative  border-2 border-white rounded-md shadow-lg p-4 bg-white">
              <Image
                src="https://file.hstatic.net/200000722513/file/khuyen_mai_t10_500x250.png"
                alt="Banner Image"
                layout="fill"
                objectFit="fill"
              />
            </div>
            <div className="w-full lg:w-1/3 h-full relative  border-2 border-white rounded-md shadow-lg p-4 bg-white">
              <Image
                src="https://file.hstatic.net/200000722513/file/thang_10_layout_web_-08.png"
                alt="Banner Image"
                layout="fill"
                objectFit="fill"
              />
            </div>
            <div className="w-full lg:w-1/3 h-full relative border-2 border-white rounded-md shadow-lg p-4 bg-white">
              <Image
                src="https://file.hstatic.net/200000722513/file/thang_10_layout_web_-02.png"
                alt="Banner Image"
                layout="fill"
                objectFit="fill"
              />
            </div>
          </div>

          {/* IMAGE-CONLEFT */}
          <div className="w-1/4 h-full relative  border-2 border-white rounded-md shadow-lg p-2 bg-white hidden lg:block">
            <Image
              src="https://i.pinimg.com/564x/1d/fe/0f/1dfe0f0f330ef4b5f234045d4d39b2c9.jpg"
              alt="Banner Image"
              layout="fill"
              objectFit="fill"
            />
          </div>
        </div>
      </div>

      {/* FLASH SALE */}
      <div className="bg-blue-400 h-[50vh]">
        <div className="flex items-center">
          {/* CLOCK */}
          <div className="flex justify-start gap-1">
            <div className="flex space-x-2 bg-blue-400 p-2 rounded-lg">
              <div className="bg-white text-black font-bold py-2 px-4 rounded-md">
                02
              </div>
              <div className="bg-white text-black font-bold py-2 px-4 rounded-md">
                12
              </div>
              <div className="bg-white text-black font-bold py-2 px-4 rounded-md">
                49
              </div>
              <div className="bg-white text-black font-bold py-2 px-4 rounded-md">
                23
              </div>
            </div>
          </div>
          {/* ICON */}
          <IoIosFlash className="text-yellow-500 text-3xl" />

          <div className="text-yellow-300 text-4xl font-bold ">Flash sale</div>
        </div>

        {/* PRODUCT */}
        <div className=""></div>
      </div>

      {/* Laptop bán chạy */}
      <div className="bg-blue-400 h-[50vh]">
        <div className="flex">
          <div>PC bán chạy</div>
          <div> Xem tất cả</div>
        </div>
      </div>
    </div>
  );
};

export default Page;
