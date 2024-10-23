"use client";
import CardComponent from "@/components/(Category)/CardComponent";
import React from "react";
import { AiFillHome, AiOutlineArrowDown, AiOutlineRight } from "react-icons/ai";
import { FaArrowDownShortWide, FaArrowDownWideShort } from "react-icons/fa6";
import { FiPercent } from "react-icons/fi";
import { IoIosHeartEmpty } from "react-icons/io";
import { IoStar } from "react-icons/io5";

const Page = () => {

    return (
        <div style={{ padding: '0 120px', marginTop: '10px' }}>
            <div style={{ color: '#A7ABC3', display: 'flex' }}><AiFillHome /><AiOutlineRight /><span style={{ fontSize: '12px' }}>Home</span>
                <AiOutlineRight /><span style={{ fontSize: '12px' }}>Category</span>
            </div>
            <div className="flex " >
                <div className=" border border-gray-300 rounded-xl p-4 w-auto h-auto text-center text-xs mt-5 mr-3 font-bold" >IPhone</div>
                <div className=" border border-gray-300 rounded-xl p-4 w-auto h-auto text-center text-xs mt-5 mr-3 font-bold" >IPhone</div>
                <div className=" border border-gray-300 rounded-xl p-4 w-auto h-auto text-center text-xs mt-5 mr-3 font-bold" >IPhone</div>
            </div>
            <h1 className="mt-5 font-bold">Sắp xếp theo</h1>
            <div className="flex">
                <div className=" border border-gray-300 rounded-xl p-4 w-auto h-auto text-center text-xs mt-5 mr-3 "><span className="flex "><FaArrowDownShortWide className="mr-2" style={{ fontSize: '15px' }} />Giá cao - thấp</span></div>
                <div className=" border border-gray-300 rounded-xl p-4 w-auto h-auto text-center text-xs mt-5 mr-3 "><span className="flex "><FaArrowDownWideShort className="mr-2" style={{ fontSize: '15px' }} />Giá thấp - cao</span></div>
                <div className=" border border-gray-300 rounded-xl p-4 w-auto h-auto text-center text-xs mt-5 mr-3 "><span className="flex "><FiPercent className="mr-2" style={{ fontSize: '15px' }} />Khuyến mãi</span></div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 p-4">
                <CardComponent />
                <CardComponent />
                <CardComponent />
                <CardComponent />
                <CardComponent />
                <CardComponent />
                <CardComponent />
                <CardComponent />
                <CardComponent />
                <CardComponent />

            </div>








        </div>
    )
};

export default Page;
