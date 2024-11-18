"use client";
<<<<<<< HEAD

import { AiFillHome, AiOutlineRight } from "react-icons/ai";
import { FaCheck } from "react-icons/fa6";
import { IoStar } from "react-icons/io5";

=======
import CardComponent from '@/components/(User)/(Category)/CardComponent';
import React from 'react';
import { AiFillHome, AiOutlineRight } from "react-icons/ai";
import { FaCheck } from "react-icons/fa6";
import { IoStar } from "react-icons/io5";

>>>>>>> 463ee69 (Update page.tsx)

// Định nghĩa interface cho Product
interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    imageUrl: string;
    stock: number;
}

// Sử dụng async function để fetch dữ liệu trong Server Component
const ProductDetail = async ({ params }: { params: { id: string } }) => {
    const { id } = params;
    let product: Product | null = null;
    let error: string | null = null;

    try {
        // Gọi API từ backend NestJS
        const res = await fetch(`http://localhost:8080/product/${id}`);
        const data = await res.json();

        if (res.ok && data.success) {
            product = data.data;  // Trả về dữ liệu sản phẩm nếu thành công
        } else {
            error = data.message || 'Không thể lấy dữ liệu sản phẩm';
        }
    } catch (err) {
        error = `Lỗi kết nối với server`;
    }

    // Xử lý lỗi và trường hợp không tìm thấy sản phẩm
    if (error) {
        return <div>{error}</div>;
    }

    if (!product) {
        return <div>Không tìm thấy sản phẩm.</div>;
    }
<<<<<<< HEAD

=======
>>>>>>> 463ee69 (Update page.tsx)
    return (
        <div className="px-4 sm:px-6 lg:px-12 xl:px-20 mt-5">
            {/* Breadcrumb */}
            <div className="text-gray-400 flex items-center mb-5 text-xs">
                <AiFillHome />
                <AiOutlineRight className="mx-2" />
                <span>Home</span>
                <AiOutlineRight className="mx-2" />
                <span>ProductDetail</span>
            </div>

            <div className="flex flex-col md:flex-row gap-4">

                {/* Product details column */}
                <div className="flex-1 bg-white border rounded-md shadow-lg transition-all transform overflow-hidden">
                    <div className="flex flex-col md:flex-row gap-4 p-4">
                        {/* Product image */}
                        <div className="relative flex justify-center md:block">
                            <a href="#">
                                <img
                                    className="h-64 md:h-80"
                                    // src="https://product.hstatic.net/200000722513/product/wift-go-ai-2024-gen-2-sfg14-73-71zx_1_ccc2cc55cf11451086e09eac92cae064_7ff907dccc634ba2ab1a5d42a52e095a_grande.png"
                                    // alt="Laptop Acer Swift Go 14"
                                    src={product.imageUrl}
                                    alt={product.name}
                                />
                            </a>
                        </div>

                        {/* Product information */}
                        <div className="space-y-2">
                            <span className="text-lg md:text-xl font-semibold">{product.name}</span>
                            <div className="flex text-yellow-500 font-bold">
                                <div className="text-xs">0.0</div>
                                <div className="text-sm ml-1"><IoStar /></div>
                            </div>
                            <div className="flex text-xs text-gray-400 space-x-2">
                                <span>Thương hiệu</span>
                                <span>|</span>
                                <span>SKU: {product.id}</span>
                            </div>
                            <div className="my-2">
                                <span className="text-red-500 font-medium text-lg md:text-xl">{product.price} đ</span>
                            </div>

                            {/* Action buttons */}
                            <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 my-2">
                                <button
                                    type="button"
                                    className="w-full md:w-auto px-6 py-2 text-sm font-semibold text-white bg-button-light hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-sm transition duration-200 ease-in-out transform hover:scale-105"
                                >
                                    Mua ngay
                                </button>
                                <button
                                    type="button"
                                    className="w-full md:w-auto px-6 py-2 text-sm font-semibold text-button-light border border-button-light hover:text-white hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-sm transition duration-200 ease-in-out transform hover:scale-105"
                                >
                                    Thêm vào giỏ hàng
                                </button>
                            </div>

                            {/* Additional information */}
                            <div className="p-2">
                                <div className="h-[1px] w-full bg-gray-300 my-2" />
                                <div className="flex"><FaCheck /><p>Bảo hành chính hãng 12 tháng</p></div>
                                <div className="flex"><FaCheck /><p>Hỗ trợ đổi mới trong 7 ngày</p></div>
                                <div className="flex"><FaCheck /><p>Miễn phí giao toàn quốc</p></div>
                                <div className="h-[1px] w-full bg-gray-300 my-2" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Specifications column */}
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
                    <div className="text-center mt-3 text-blue-500 text-xs"><a href='#'>Xem chi tiết</a></div>
                </div>
            </div>

            {/* Phần mô tả sản phẩm */}
            <div className="bg-white border rounded-md shadow-lg overflow-hidden p-4 mt-4 px-8">
                <p className="text-xl font-semibold mb-1">Mô tả sản phẩm</p>
                {product.description}
                <p className='text-justify text-md'>
                    Acer Swift Go 14 AI SFG14-73-53X7 là chiếc laptop văn phòng mỏng nhẹ tiên phong,
                    sở hữu sức mạnh vượt trội từ bộ vi xử lý laptop Intel® Core™ Ultra 5 125H thế hệ mới nhất,
                    kết hợp cùng màn hình OLED 2.8K 14 inch sống động,
                    cho bạn trải nghiệm hình ảnh tuyệt đẹp và hiệu năng mượt mà trong mọi tác vụ.
                    RAM 16GB LPDDR5X cùng ổ cứng SSD 512GB PCIe NVMe đảm bảo khả năng đa nhiệm nhanh chóng và lưu trữ dữ liệu hiệu quả.
                    Thiết kế vỏ nhôm nguyên khối chỉ 14.9mm, trọng lượng 1.3kg, Swift Go AI SFG14-73-53X7 là người bạn đồng hành lý tưởng cho phong cách sống năng động.
                </p>
                <p className='text-justify text-md'>Thiết kế mỏng nhẹ, gọn gàng trên Acer Swift Go 14 AI 2024
                    Laptop Acer Swift Go 14 AI SFG14-73-53X7 là hiện thân của sự thanh lịch và tiện dụng với thiết kế siêu mỏng chỉ 14.9mm và trọng lượng siêu nhẹ 1.3kg,
                    dễ dàng đồng hành cùng bạn mọi lúc mọi nơi. Thân máy được chế tác từ nhôm cao cấp, không chỉ mang đến vẻ ngoài sang trọng mà còn đảm bảo độ bền vượt trội.
                    Bản lề mở 180 độ linh hoạt, cho phép bạn chia sẻ nội dung dễ dàng với người đối diện. Bàn di chuột OceanGlass™ thân thiện môi trường,
                    lớn hơn 44% so với thế hệ trước, mang lại trải nghiệm điều khiển mượt mà và chính xác.</p>
                <p className='font-bold my-1 text-xl'>Acer Swift Go AI Gen 2 sở hữu hiệu năng vượt trội</p>
                <p className='text-justify text-md'>Sức mạnh của Acer Swift Go 14 AI SFG14-73-53X7 không chỉ đến từ bộ vi xử lý laptop Intel® Core™ Ultra 5 125H thế hệ mới nhất với 14 nhân và 18 luồng,
                    tốc độ xung nhịp lên đến 4.5 GHz, cùng 16GB RAM LPDDR5X tốc độ cao, chiếc laptop này đảm bảo khả năng xử lý mượt mà mọi tác vụ,
                    từ công việc văn phòng, học tập, giải trí đa phương tiện đến các ứng dụng sáng tạo đòi hỏi cấu hình cao,
                    thậm chí cả các tác vụ xử lý AI chuyên sâu với NPU chuyên biệt biến chiếc laptop này thành một chiếc laptop AI thực thụ.
                    Ổ cứng SSD 512GB PCIe NVMe không chỉ mang đến không gian lưu trữ rộng rãi mà còn giúp tăng tốc độ khởi động máy và truy xuất dữ liệu,
                    tiết kiệm thời gian quý báu của bạn. Hơn nữa, bạn có thể dễ dàng nâng cấp lên đến 2TB để đáp ứng nhu cầu lưu trữ ngày càng tăng.</p>
                <div className='flex flex-col md:flex-row my-4'>
                    <img
                        className="object-cover mx-auto h-96 "
                        src="https://lh3.googleusercontent.com/_DstqDvDDOMB40DVRl6zhmr2zSGkQCkHa0cyyzBNVckCPPEFQz2iMk7vBNZKk3tfgpk9KFts3IgfxEkDLmu_3D4EOBO_XDg=w1000-rw"
                        alt="Product"
                    />
                    <img
                        className="object-cover mx-auto h-96 "
                        src="https://storage.googleapis.com/teko-gae.appspot.com/media/image/2024/4/17/641044d4-7837-4af8-a1fe-385e93602173/image.png"
                        alt="Product"
                    />
                </div>
                <p className='text-justify text-md'>Acer Swift Go 14 AI 2024 Gen 2 SFG14-73-53X7 sở hữu hiệu năng vượt trội
                    Ngoài ra, laptop còn được chứng nhận đạt chuẩn Intel® Evo™, Swift Go 14 AI mang đến hiệu năng tổng thể mạnh mẽ hơn 47% so với phiên bản tiền nhiệm,
                    đồng thời đảm bảo khả năng phản hồi nhanh nhạy và thời lượng pin ấn tượng. Kèm theo đó là card đồ họa tích hợp Intel® Arc™ mới nhất.
                    Công nghệ nâng cấp chi tiết bằng AI - XeSS cùng tính năng Xe sẽ mang đến trải nghiệm phát video mượt mà hơn bao giờ hết.
                    Từ xem phim, chơi game đến các tác vụ đồ họa chuyên sâu, Swift Go 14 AI sẽ không làm bạn thất vọng.</p>
                <p className='font-bold my-1 text-xl'>Màn hình OLED 2.8K chuẩn màu hoàn hảo</p>
                <p className='text-justify text-md'>Acer Swift Go 14 AI SFG14-73-53X7 được trang bị màn hình 14 inch OLED với độ phân giải lên đến 2.8K,
                    mang đến chất lượng hình ảnh tuyệt đẹp và sống động. Tấm nền OLED với độ phủ màu 100% sRGB đảm bảo màu sắc hiển thị chính xác và rực rỡ,
                    đáp ứng hoàn hảo nhu cầu của các nhà sáng tạo nội dung. Độ sáng 400nits và tần số quét 120Hz mang đến trải nghiệm xem mượt mà và thoải mái,
                    dù là làm việc, giải trí hay sáng tạo.</p>
            </div>

        </div>
    );
};

export default ProductDetail;
