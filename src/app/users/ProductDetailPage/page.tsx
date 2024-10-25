"use client";
import React from 'react'
import { AiFillHome, AiOutlineRight } from 'react-icons/ai';
import { FaGift } from 'react-icons/fa6';

const page = () => {
    return (
        <div style={{ padding: '0 120px', marginTop: '10px' }}>
            <div style={{ color: '#A7ABC3', display: 'flex', alignItems: 'center' }}>
                <AiFillHome />
                <AiOutlineRight />
                <span style={{ fontSize: '12px' }}>Home</span>
                <AiOutlineRight />
                <span style={{ fontSize: '12px' }}>DetailProduct</span>
            </div>
            <div className='bg-white border border-gray-300 rounded-md shadow-lg overflow-hidden transform transition-all'>
           
                <div className="grid grid-rows-3 grid-flow-col gap-4">
                    <div className="row-span-3">
                   
                        <a href="#">
                            <img className="rounded-t-lg w-40 h-40 object-cover mt-5 mx-auto" src="https://cdn2.cellphones.com.vn/insecure/rs:fill:0:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/x/_/x_m_24.png" alt="iPhone" />
                        </a>
                    </div>
                    <div className="col-span-2">
                        <span className='text-xl'>NameProduct</span>
                        <div className="flex text-xs text-gray-400 mt-3">
                            <span className='mr-5'>Thương hiệu</span>
                            <span>|</span>
                            <span className='ml-5'>SKU:0000011111</span>
                        </div>
                        <div className='mt-5'>
                            <span className='text-red-500 font-medium'>20.000.000đ</span>
                        </div>
                    </div>
                    <div>
                        <div className="flex space-x-6 mt-6"> {/* Giảm khoảng cách giữa các nút */}
                            <button
                                type="button"
                                className=" justify-center px-12 py-2 text-sm- font-semibold text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-md shadow-md transition duration-200 ease-in-out transform hover:scale-105"
                            >
                                Mua ngay
                            </button>
                            <button
                                type="button"
                                className="  justify-center px-12 py-2 text-sm font-semibold text-blue-600 border border-blue-600 hover:text-white hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-md transition duration-200 ease-in-out transform hover:scale-105"
                            >
                                Thêm vào giỏ hàng
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default page
