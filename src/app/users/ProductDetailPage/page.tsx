"use client";
import React from 'react'
import { AiFillHome, AiOutlineRight } from 'react-icons/ai';
import { FaCheck } from 'react-icons/fa6';
import { IoStar } from 'react-icons/io5';


const page = () => {
    return (
        <div className="px-4 md:px-20 mt-2">
            <div className="text-gray-400 flex items-center mb-5 text-xs">
                <AiFillHome />
                <AiOutlineRight className="mx-2" />
                <span >Home</span>
                <AiOutlineRight className="mx-2" />
                <span >ProductDetail</span>
            </div>
            <div className="flex flex-col md:flex-row gap-4">
                {/* Cột chi tiết sản phẩm */}
                <div className="bg-white border rounded-md overflow-hidden transform transition-all shadow-lg ">
                    <div className="flex flex-col md:flex-row gap-4 p-4">
                        {/* Phần hình ảnh sản phẩm */}
                        <div className='relative flex justify-center md:block '>
                            <a href="#">
                                <img
                                    className=" h-64 md:h-80  "
                                    src="https://product.hstatic.net/200000722513/product/wift-go-ai-2024-gen-2-sfg14-73-71zx_1_ccc2cc55cf11451086e09eac92cae064_7ff907dccc634ba2ab1a5d42a52e095a_grande.png"
                                    alt="Laptop Acer Swift Go 14"
                                />
                            </a>
                        </div>

                        {/* Phần thông tin chi tiết sản phẩm */}
                        <div className="space-y-2 ">
                            <span className="text-lg md:text-xl font-semibold">Laptop Acer Swift Go 14 SFG14 73 57FZ</span>
                            <div className="flex text-yellow-500 font-bold">
                                <div className="text-xs">0.0</div> <div className="text-sm ml-1"><IoStar /></div>
                            </div>
                            <div className="flex text-xs text-gray-400 space-x-2 ">
                                <span>Thương hiệu</span>
                                <span>|</span>
                                <span>SKU: 0000011111</span>
                            </div>
                            <div className='my-2'>
                                <span className="text-red-500 font-medium text-lg md:text-xl">20.000.000đ</span>
                            </div>

                            {/* Các nút hành động */}
                            <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 my-2 ">
                                <button
                                    type="button"
                                    className="w-full md:w-auto px-6 py-2 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-sm transition duration-200 ease-in-out transform hover:scale-105"
                                >
                                    Mua ngay
                                </button>
                                <button
                                    type="button"
                                    className="w-full md:w-auto px-6 py-2 text-sm font-semibold text-blue-600 border border-blue-600 hover:text-white hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-sm transition duration-200 ease-in-out transform hover:scale-105"
                                >
                                    Thêm vào giỏ hàng
                                </button>
                            </div>
                            <div className=' p-2 '>
                                <div className='h-[1px] w-full bg-gray-300 my-2' />
                                <div className='flex'><FaCheck /><p>Bảo hành chính hãng 12 tháng</p></div>
                                <div className='flex'><FaCheck /><p>Hỗ trợ đổi mới trong 7 ngày</p></div>
                                <div className='flex'><FaCheck /><p>Miễn phí giao toàn quốc</p></div>
                                <div className='h-[1px] w-full bg-gray-300 my-2' />



                            </div>
                        </div>
                    </div>
                </div>

                {/* Cột thông số kỹ thuật */}
                <div className="md:w-1/3 bg-white p-4 rounded-md border shadow-md">
                    <h2 className="text-lg font-semibold mb-3">Thông số kỹ thuật</h2>
                    <table className="text-sm text-gray-600 w-full">
                        <tbody>
                            <tr>
                                <td className="font-semibold py-2 w-32">CPU:</td>
                                <td>Intel® Core™ i5-13420H (2.1 GHz - 4.6 GHz / 12MB / 8 nhân, 12 luồng)</td>
                            </tr>
                            <tr>
                                <td className="font-semibold py-2 w-32">RAM:</td>
                                <td>8GB LPDDR4X</td>
                            </tr>
                            <tr>
                                <td className="font-semibold py-2 w-32">Lưu trữ:</td>
                                <td>512GB SSD M.2 NVMe (1 x M.2 NVMe)</td>
                            </tr>
                            <tr>
                                <td className="font-semibold py-2 w-32">Màn hình:</td>
                                <td>14 inch FHD (1920x1080)</td>
                            </tr>
                            <tr>
                                <td className="font-semibold py-2 w-32">GPU:</td>
                                <td>Intel Iris Xe</td>
                            </tr>
                        </tbody>
                    </table>
                    <div className='text-center mt-3 text-blue-500 text-xs'><p>Xem chi tiết</p></div>
                </div>

            </div>


        </div >

    )
}


export default page
