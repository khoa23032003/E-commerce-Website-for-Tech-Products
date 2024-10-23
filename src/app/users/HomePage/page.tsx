// src/app/users/Page.tsx
import Image from "next/image";
import React from "react";

const Page = () => {
  return (
    <div className="w-full">
      {/* BANNER */}
      <div className="px-4">
        {/* BANNER-TOP */}
        <div className="flex">
          {/* BANNER-TOP-LEFT */}
          <div className="w-3/4">
            {/* IMAGE-BIG */}
            <div className="  h-[250px] p-2">
              <img
                src="/Bannertop1.jpg"
                className="w-full h-full rounded-lg "
              />
            </div>
            {/* IMaGE-ITEM */}
            <div className="flex">
              <div className="w-1/3  h-[125px] p-2">
                <img
                  src="/Bannertop1.jpg"
                  className="w-full h-full rounded-lg "
                />
              </div>
              <div className="w-1/3  h-[125px] p-2">
                <img
                  src="/Bannertop1.jpg"
                  className="w-full h-full rounded-lg "
                />
              </div>
              <div className="w-1/3  h-[125px] p-2">
                <img
                  src="/Bannertop1.jpg"
                  className="w-full h-full rounded-lg "
                />
              </div>
            </div>
          </div>
          {/* BANNER-TOP-RIGHT */}
          <div className="w-1/4">
            <div className="  h-[250px] p-2">
              <img
                src="/Bannertop1.jpg"
                className="w-full h-full rounded-lg "
              />
            </div>
            <div className=" h-[125px] p-2">
              <img
                src="/Bannertop1.jpg"
                className="w-full h-full rounded-lg "
              />
            </div>
          </div>
        </div>
        {/* BANNER-BOTTOM */}
        <div className="flex"></div>
      </div>

      {/* CONTENT */}
      <div className="flex w-full">
        <div className="w-1/5 bg-blue-400 h-full mx-2">
          <img src="/bannerconten.jpg" alt="" className="h-[150px] w-full" />

          <div className="w-1/5 bg-blue-400 h-full r  shadow-lg w-full">
            <div className="text-[10px] font-bold text-white mb-2 flex flex-col items-start">
              Danh mục
              <span className="w-full h-[2px] bg-white mt-1"></span>
            </div>

            <ul className="text-[8px] text-gray-800 mx-2">
              <li className="mb-1">
                <a
                  href=""
                  className="hover:text-blue-600 transition duration-200"
                >
                  Màn hình
                </a>
              </li>
              <li className="mb-1">
                <a
                  href=""
                  className="hover:text-blue-600 transition duration-200"
                >
                  Máy tính
                </a>
              </li>
              <li className="mb-1">
                <a
                  href=""
                  className="hover:text-blue-600 transition duration-200"
                >
                  PC
                </a>
              </li>
              <li className="mb-1">
                <a
                  href=""
                  className="hover:text-blue-600 transition duration-200"
                >
                  PC
                </a>
              </li>
              <li className="mb-1">
                <a
                  href=""
                  className="hover:text-blue-600 transition duration-200"
                >
                  PC
                </a>
              </li>
              <li>
                <a
                  href=""
                  className="hover:text-blue-600 transition duration-200"
                >
                  PC
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
