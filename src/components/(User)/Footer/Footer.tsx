"use client";
import React from "react";
import FooterColumn from "./FooterColumn";
import SocialLinks from "./SocialLinks";
import FooterBottom from "./FooterBottom";

const Footer = () => {
  return (
    <div className=" w-full ">
      {/* Footer Top */}
      <div className="bg-blue-50 py-8 flex flex-col items-center">
        {" "}
        {/* Thay đổi ở đây */}
        {/* Footer container */}
        <div className="container mx-2 flex flex-wrap justify-center gap-2 text-sm text-gray-600 items-center">
          {" "}
          {/* Thay đổi ở đây */}
          <FooterColumn
            title="SẢN PHẨM"
            items={[
              "Giày",
              "Quần áo",
              "Phụ kiện",
              "Hàng Mới Về",
              "Release Dates",
              "Top Sellers",
              "Member exclusives",
              "Outlet",
            ]}
          />
          <FooterColumn
            title="THỂ THAO"
            items={[
              "Chạy",
              "Đánh gôn",
              "Gym & Training",
              "Bóng đá",
              "Bóng Rổ",
              "Quần vợt",
              "Ngoài trời",
              "Bơi lội",
            ]}
          />
          <FooterColumn
            title="BỘ SƯU TẬP"
            items={[
              "Pharrell Williams",
              "Ultra Boost",
              "Pureboost",
              "Predator",
              "Superstar",
              "Stan Smith",
              "NMD",
              "Adicolor",
            ]}
          />
          <FooterColumn
            title="THÔNG TIN VỀ CÔNG TY"
            items={[
              "Giới Thiệu Về Chúng Tôi",
              "Cơ Hội Nghề Nghiệp",
              "Tin tức",
              "adidas stories",
            ]}
          />
          <FooterColumn
            title="HỖ TRỢ"
            items={[
              "Trợ Giúp",
              "Công cụ tìm kiếm cửa hàng",
              "Biểu Đồ Kích Cỡ",
              "Thanh toán",
              "Giao hàng",
              "Trả Hàng & Hoàn Tiền",
              "Khuyến mãi",
              "Sơ đồ trang web",
              "Trợ Giúp Dịch Vụ Khách Hàng",
            ]}
          />
        </div>
        <SocialLinks />
      </div>

      {/* Footer Bottom */}
      <FooterBottom />
    </div>
  );
};

export default Footer;
