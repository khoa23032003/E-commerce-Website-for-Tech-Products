"use client";
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faCartShopping,
  faBars,
  faTimes,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import Link from "next/link";

const Navbar = () => {
  const [isClick, setIsClick] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [menuItems, setMenuItems] = useState([]); // State để lưu trữ dữ liệu từ API
  const [loading, setLoading] = useState(true); // State để theo dõi trạng thái tải dữ liệu

  // Interface cho menu items
  interface NavBarItem {
    id: string;
    name: string;
    link: string;
  }

  // Hàm để bật/tắt thanh menu trên mobile
  const toggleNavbar = () => setIsClick(!isClick);

  // Hàm để bật/tắt thanh tìm kiếm
  const toggleSearch = () => setIsSearchOpen(!isSearchOpen);

  // Hàm gọi API để lấy dữ liệu navbar
  const fetchMenuItems = async () => {
    try {
      const response = await fetch("http://localhost:8080/navbar"); // Gọi API
      if (!response.ok) {
        throw new Error("Lỗi khi gọi API");
      }
      const result = await response.json(); // Chuyển dữ liệu thành JSON

      // Lấy dữ liệu từ key `data`
      if (result.success && Array.isArray(result.data)) {
        setMenuItems(result.data); // Lưu dữ liệu vào state
      } else {
        console.error("Dữ liệu API không đúng định dạng:", result);
        setMenuItems([]); // Đảm bảo state là mảng
      }
    } catch (error) {
      console.error("Lỗi khi gọi API navbar:", error);
    } finally {
      setLoading(false); // Hoàn tất tải dữ liệu
    }
  };

  // Gọi fetchMenuItems khi component được mount
  useEffect(() => {
    fetchMenuItems();
  }, []);

  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 bg-white shadow-lg text-gray-800 flex h-[65px] items-center border-b border-gray-200">
      {/* Logo */}
      <div className="flex w-1/2 md:w-1/5 text-xl font-bold text-blue-500">
        TTK Store
      </div>

      {/* Các liên kết điều hướng */}
      <div className="hidden md:flex w-3/5 justify-center">
        {loading ? (
          <p>Đang tải...</p>
        ) : (
          <ul className="flex gap-5 lg:gap-8 items-center text-gray-700 text-sm lg:text-lg font-medium">
            {menuItems.map((item: NavBarItem) => (
              <li key={item.id} className="hover:text-blue-500 transition">
                <a href={item.link}>{item.name}</a>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Các biểu tượng và nút menu trên di động */}
      <div className="flex w-1/2 md:w-1/5 justify-end items-center">
        <ul className="flex gap-3 lg:gap-5 text-gray-700 items-center">
          {/* Hiển thị thanh tìm kiếm khi nhấn vào icon tìm kiếm */}
          {isSearchOpen ? (
            <li className="flex items-center">
              <input
                type="text"
                placeholder="Tìm kiếm..."
                className="border border-gray-300 rounded-lg px-3 py-1 w-32 sm:w-48 lg:w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button onClick={toggleSearch} className="ml-2 text-gray-700">
                <FontAwesomeIcon
                  icon={faTimes}
                  className="w-5 h-5 lg:w-6 lg:h-6"
                />
              </button>
            </li>
          ) : (
            <>
              {[
                { icon: faSearch, link: "#", onClick: toggleSearch },
                { icon: faUser, link: "/users/LoginPage" },
                { icon: faHeart, link: "#" },
                { icon: faCartShopping, link: "#" },
              ].map(({ icon, link, onClick }, index) => (
                <li key={index}>
                  <Link
                    href={link}
                    onClick={onClick}
                    className="hover:text-blue-500 transition"
                  >
                    <FontAwesomeIcon
                      icon={icon}
                      className="w-5 h-5 lg:w-6 lg:h-6"
                    />
                  </Link>
                </li>
              ))}
            </>
          )}
          {/* Nút mở menu trên mobile */}
          <li className="md:hidden">
            <button onClick={toggleNavbar} className="p-2 text-gray-700">
              <FontAwesomeIcon
                icon={isClick ? faTimes : faBars}
                className="h-6 w-6"
              />
            </button>
          </li>
        </ul>

        {/* Menu thả xuống trên di động */}
        {isClick && (
          <div className="md:hidden absolute right-0 top-full mt-2 w-11/12 bg-white shadow-lg rounded-lg z-10">
            <ul className="flex flex-col text-gray-700 text-base p-4 space-y-2">
              {menuItems.map((item: NavBarItem) => (
                <li
                  key={item.id}
                  className="py-2 border-b last:border-b-0 hover:text-blue-500 transition"
                >
                  <a href={item.link}>{item.name}</a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
