"use client";
import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="fixed bottom-0 w-full">
      {/* Footer Top */}
      <div className="bg-white py-8 ">
        {/* Footer container */}
        <div className="container mx-auto grid grid-cols-5 gap-4 text-sm text-gray-600 ">
          {/* Cột 1: SẢN PHẨM */}
          <div>
            <h3 className="text-lg font-semibold text-black mb-4">SẢN PHẨM</h3>
            <ul className="space-y-2">
              <li>
                <a href="#">Giày</a>
              </li>
              <li>
                <a href="#">Quần áo</a>
              </li>
              <li>
                <a href="#">Phụ kiện</a>
              </li>
              <li>
                <a href="#">Hàng Mới Về</a>
              </li>
              <li>
                <a href="#">Release Dates</a>
              </li>
              <li>
                <a href="#">Top Sellers</a>
              </li>
              <li>
                <a href="#">Member exclusives</a>
              </li>
              <li>
                <a href="#">Outlet</a>
              </li>
            </ul>
          </div>

          {/* Cột 2: THỂ THAO */}
          <div>
            <h3 className="text-lg font-semibold text-black mb-4">THỂ THAO</h3>
            <ul className="space-y-2">
              <li>
                <a href="#">Chạy</a>
              </li>
              <li>
                <a href="#">Đánh gôn</a>
              </li>
              <li>
                <a href="#">Gym & Training</a>
              </li>
              <li>
                <a href="#">Bóng đá</a>
              </li>
              <li>
                <a href="#">Bóng Rổ</a>
              </li>
              <li>
                <a href="#">Quần vợt</a>
              </li>
              <li>
                <a href="#">Ngoài trời</a>
              </li>
              <li>
                <a href="#">Bơi lội</a>
              </li>
            </ul>
          </div>

          {/* Cột 3: BỘ SƯU TẬP */}
          <div>
            <h3 className="text-xs font-semibold text-black mb-4">
              BỘ SƯU TẬP
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#">Pharrell Williams</a>
              </li>
              <li>
                <a href="#">Ultra Boost</a>
              </li>
              <li>
                <a href="#">Pureboost</a>
              </li>
              <li>
                <a href="#">Predator</a>
              </li>
              <li>
                <a href="#">Superstar</a>
              </li>
              <li>
                <a href="#">Stan Smith</a>
              </li>
              <li>
                <a href="#">NMD</a>
              </li>
              <li>
                <a href="#">Adicolor</a>
              </li>
            </ul>
          </div>

          {/* Cột 4: THÔNG TIN VỀ CÔNG TY */}
          <div>
            <h3 className="text-xs font-semibold text-black mb-4">
              THÔNG TIN VỀ CÔNG TY
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#">Giới Thiệu Về Chúng Tôi</a>
              </li>
              <li>
                <a href="#">Cơ Hội Nghề Nghiệp</a>
              </li>
              <li>
                <a href="#">Tin tức</a>
              </li>
              <li>
                <a href="#">adidas stories</a>
              </li>
            </ul>
          </div>

          {/* Cột 5: HỖ TRỢ */}
          <div>
            <h3 className="text-lg font-semibold text-black mb-4">HỖ TRỢ</h3>
            <ul className="space-y-2">
              <li>
                <a href="#">Trợ Giúp</a>
              </li>
              <li>
                <a href="#">Công cụ tìm kiếm cửa hàng</a>
              </li>
              <li>
                <a href="#">Biểu Đồ Kích Cỡ</a>
              </li>
              <li>
                <a href="#">Thanh toán</a>
              </li>
              <li>
                <a href="#">Giao hàng</a>
              </li>
              <li>
                <a href="#">Trả Hàng & Hoàn Tiền</a>
              </li>
              <li>
                <a href="#">Khuyến mãi</a>
              </li>
              <li>
                <a href="#">Sơ đồ trang web</a>
              </li>
              <li>
                <a href="#">Trợ Giúp Dịch Vụ Khách Hàng</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Follow Us section */}
        <div className="container mx-auto mt-8 flex justify-center space-x-4 text-black">
          <a href="#">
            <i className="fab fa-facebook text-2xl"></i>
          </a>
          <a href="#">
            <i className="fab fa-instagram text-2xl"></i>
          </a>
          <a href="#">
            <i className="fab fa-twitter text-2xl"></i>
          </a>
          <a href="#">
            <i className="fab fa-pinterest text-2xl"></i>
          </a>
          <a href="#">
            <i className="fab fa-tiktok text-2xl"></i>
          </a>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="bg-black text-white text-xs p-2">
        <ul className="flex gap-4 justify-center items-center">
          <li>
            <a href="">Cài Đặt Cookie</a>
          </li>
          <li>
            <a href="">Chính sách Bảo mật</a>
          </li>
          <li>
            <a href="">Điều Khoản và Điều Kiện</a>
          </li>
          <li>
            <a href="">XUẤT BẢN BỞI</a>
          </li>
          <li>
            <a href="">© 2020 Công ty TNHH Việt Nam</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
