import React from "react";
import Link from "next/link";
import { FaGift, FaMemory, FaMicrochip } from "react-icons/fa6";
import { BsDeviceSsdFill, BsGpuCard } from "react-icons/bs";
import { MdMonitor } from "react-icons/md";
import { IoIosHeartEmpty } from "react-icons/io";
import { IoStar } from "react-icons/io5";

interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    imageUrl: string;
    stock: number;
    categoryId: string;

}

interface CardComponentProps {
    product: Product;
}

const CardComponent: React.FC<CardComponentProps> = ({ product }) => {
    return (
        <div className=" mx-auto w-full bg-white border border-gray-200 rounded-md shadow-lg overflow-hidden">
            <Link href={`/ProductDetailPage/${product.id}`}>
                <div className="relative">
                    <img
                        className="object-cover mx-auto h-50 hover:scale-105 transition-transform duration-300 ease-in-out"
                        src={product.imageUrl}
                        alt={product.name}
                    />
                    <div className="absolute top-3 right-3 text-red-600">
                        <FaGift />
                    </div>
                </div>

                <div className="p-3">
                    <span className="mb-3 text-sm font-semibold tracking-tight">
                        {product.name}
                    </span>
                    <div className="border rounded-sm bg-gray-200 text-xs text-gray-500 font-medium flex flex-wrap py-1 px-1 mt-2 ">
                        <span className="w-1/2 mb-1 flex">
                            <FaMicrochip className="mr-1" /> Ultra 7 15H
                        </span>
                        <span className="w-1/2 mb-1 flex">
                            <BsGpuCard className="mr-1" /> Intel Arc
                        </span>
                        <span className="w-1/2 mb-1 flex">
                            <FaMemory className="mr-1" /> 16 GB
                        </span>
                        <span className="w-1/2 mb-1 flex">
                            <BsDeviceSsdFill className="mr-1" /> 512 GB
                        </span>
                        <span className="flex mb-1">
                            <MdMonitor className="mr-1" /> 14 inch 2.8K IPS
                        </span>
                    </div>
                    <p className="text-red-500 font-medium mt-2">
                        {product.price.toLocaleString()} đ
                    </p>
                    <div className="lg:flex sm:flex-none justify-between mt-2">
                        <div className="flex text-yellow-500 ">
                            <div className="text-xs">0.0</div>
                            <div className="text-sm ml-1">
                                <IoStar />
                            </div>
                        </div>
                        <div className="text-red-500 text-xl">
                            <IoIosHeartEmpty />
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default CardComponent;
