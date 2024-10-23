import React from "react";
import { AiFillHome, AiOutlineArrowDown, AiOutlineRight } from "react-icons/ai";
import { FaArrowDownShortWide, FaArrowDownWideShort } from "react-icons/fa6";
import { FiPercent } from "react-icons/fi";
import { IoIosHeartEmpty } from "react-icons/io";
import { IoStar } from "react-icons/io5";

const CardComponent = () => {
    return (

        <div className="w-full max-w-xs bg-white border border-gray-300 rounded-lg shadow-lg overflow-hidden transform transition-all hover:scale-105 hover:shadow-2xl mx-auto">
        <a href="#">
            <img className="rounded-t-lg w-40 h-40 object-cover mt-5 mx-auto" src="https://cdn2.cellphones.com.vn/insecure/rs:fill:0:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/x/_/x_m_24.png" alt="iPhone" />
        </a>
        <div className="p-5">
            <a href="#">
                <h5 className="mb-3 text-lg font-semibold tracking-tight text-gray-800 hover:text-blue-600 transition-colors">IPhone</h5>
            </a>
            <p className="text-red-500 font-medium mb-2 ">20.000.000 đ</p>
            <div className="flex justify-between items-center">
                <div className="flex text-yellow-500 space-x-1">
                    <IoStar /> <IoStar /> <IoStar /> <IoStar /> <IoStar />
                </div>
                <div className="flex items-center text-sm">
                    Yêu thích <IoIosHeartEmpty className="text-red-500 ml-1 text-xl" />
                </div>
            </div>
        </div>
    </div>
    
    
    


    )
}


export default CardComponent;