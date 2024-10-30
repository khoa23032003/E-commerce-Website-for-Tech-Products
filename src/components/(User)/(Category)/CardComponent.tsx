import React from "react";


import { BsDeviceSsdFill, BsGpuCard } from "react-icons/bs";
import { FaArrowDownShortWide, FaArrowDownWideShort, FaGift, FaMemory, FaMicrochip } from "react-icons/fa6";
import { IoIosHeartEmpty } from "react-icons/io";
import { IoStar } from "react-icons/io5";
import { MdMonitor } from "react-icons/md";


const CardComponent = () => {
    return (


        <div className=" mx-auto w-full bg-white border border-gray-200 rounded-md shadow-lg overflow-hidden   ">

            <div className="relative">
                <a href="#">
                    <img
                        className="object-cover mx-auto h-50"
                        src="https://product.hstatic.net/200000722513/product/wift-go-ai-2024-gen-2-sfg14-73-71zx_1_ccc2cc55cf11451086e09eac92cae064_7ff907dccc634ba2ab1a5d42a52e095a_grande.png"
                        alt="Product"
                    />
                   
                </a>
                
                <div className="absolute top-3 right-3 text-red-600">
                    <FaGift />
                </div>
            </div>

            <div className="p-3">
                <a href="#">
                    <span className="mb-3 text-sm font-semibold tracking-tight">
                        Laptop Acer Swift Go 14 SFG14 73 57FZ
                    </span>
                </a>
                <div className="border rounded-sm bg-gray-200 text-xs text-gray-500 font-medium flex flex-wrap py-1 px-1 mt-2 ">
                    <span className="w-1/2 mb-1 flex"><FaMicrochip className="mr-1" />Ultra 7 15H</span>
                    <span className="w-1/2 mb-1 flex"><BsGpuCard className="mr-1" />Intel Arc</span>
                    <span className="w-1/2 mb-1 flex"><FaMemory className="mr-1" />16 GB</span>
                    <span className="w-1/2 mb-1 flex"><BsDeviceSsdFill className="mr-1" />512 GB</span>
                    <span className="flex mb-1"><MdMonitor className="mr-1" />14 inch 2.8K IPS</span>
                </div>



                <p className="text-red-500 font-medium mt-2">20.000.000 đ</p>
                <div className="lg:flex sm:flex-none justify-between mt-2">
                    <div className="flex text-yellow-500 ">
                        <div className="text-xs">0.0</div> <div className="text-sm ml-1"><IoStar /></div>
                    </div>
                    <div className="text-red-500 text-xl">
                        <IoIosHeartEmpty />
                    </div>
                </div>
            </div>
        </div>







    )
}


export default CardComponent;