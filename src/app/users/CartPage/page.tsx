import Image from "next/image";

const Cart = () => {
  return (
    <div className="lg:container  mx-auto p-5 bg-gray-100 w-full">
      <h1 className="text-2xl font-bold mb-5">Giỏ Hàng của Bạn</h1>
      <div className="bg-white shadow-md rounded-lg p-5">
        {/* SẢN PHẨM */}
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center">
            <Image
              src="/Bannertop1.jpg"
              alt="Sản phẩm"
              width={96}
              height={96}
              className="rounded-lg"
            />
            <div className="ml-4">
              <h2 className="text-xl font-semibold">Tên Sản Phẩm</h2>
              <p className="text-gray-600">Giá: 100.000đ</p>
            </div>
          </div>
          {/* XOÁ */}
          <div className="flex items-center">
            <input
              type="number"
              min="1"
              defaultValue="1"
              className="border border-gray-300 rounded-lg w-16 h-8 text-center "
            />
            <button className="bg-red-500 text-white ml-2 px-4 py-2 rounded-lg">
              Xóa
            </button>
          </div>
        </div>
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center">
            <Image
              src="/Bannertop1.jpg"
              alt="Sản phẩm"
              width={96}
              height={96}
              className="rounded-lg"
            />
            <div className="ml-4">
              <h2 className="text-xl font-semibold">Tên Sản Phẩm</h2>
              <p className="text-gray-600">Giá: 100.000đ</p>
            </div>
          </div>
          <div className="flex items-center">
            <input
              type="number"
              min="1"
              defaultValue="1"
              className="border border-gray-300 rounded-lg w-16 text-center"
            />
            <button className="bg-red-500 text-white ml-2 px-3 py-1 rounded-lg">
              Xóa
            </button>
          </div>
        </div>
        <div className="border-t border-gray-300 mt-4 pt-4">
          <h3 className="text-lg font-semibold">Tổng cộng: 100.000đ</h3>
          <button className="bg-blue-500 text-white mt-4 px-4 py-2 rounded-lg">
            Tiến hành thanh toán
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
