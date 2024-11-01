"use client";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faCartShopping,
  faBars,
  faTimes,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";

const Navbar = () => {
  const [isClick, setIsClick] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // Hàm để bật/tắt thanh menu trên mobile
  const toggleNavbar = () => setIsClick(!isClick);

  // Hàm để bật/tắt thanh tìm kiếm
  const toggleSearch = () => setIsSearchOpen(!isSearchOpen);

  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 bg-white shadow-lg text-gray-800 flex h-[65px] items-center border-b border-gray-200">
      {/* Logo */}
      <div className="flex w-1/2 md:w-1/5 text-xl font-bold text-blue-500">
        KHOA
      </div>

      {/* Các liên kết điều hướng */}
      <div className="hidden md:flex w-3/5 justify-center">
        <ul className="flex gap-5 lg:gap-8 items-center text-gray-700 text-sm lg:text-lg font-medium">
          {["Trang chủ", "Sản phẩm mới", "Sản phẩm bán chạy", "Sản phẩm"].map(
            (text, index) => (
              <li key={index} className="hover:text-blue-500 transition">
                <a href="#">{text}</a>
              </li>
            )
          )}
        </ul>
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
                { icon: faUser, link: "#" },
                { icon: faHeart, link: "#" },
                { icon: faCartShopping, link: "#" },
              ].map(({ icon, link, onClick }, index) => (
                <li key={index}>
                  <a
                    href={link}
                    onClick={onClick}
                    className="hover:text-blue-500 transition"
                  >
                    <FontAwesomeIcon
                      icon={icon}
                      className="w-5 h-5 lg:w-6 lg:h-6"
                    />
                  </a>
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
              {[
                "Trang chủ",
                "Sản phẩm mới",
                "Sản phẩm bán chạy",
                "Sản phẩm",
              ].map((text, index) => (
                <li
                  key={index}
                  className="py-2 border-b last:border-b-0 hover:text-blue-500 transition"
                >
                  <a href="#">{text}</a>
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
