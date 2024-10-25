"use client";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";

const Navbar = () => {
  const [isClick, setisClick] = useState(false);
  const toggleNavbar = () => {
    setisClick(!isClick);
  };

  return (
    <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 bg-yellow-300 p-0 flex h-[65px] items-center">
      {/* LOGO */}
      <div className="w-1/5"></div>
      {/* TEXT */}
      <div className="hidden md:block w-3/5">
        <ul className="flex gap-4 justify-center text-white text-[12px]">
          <li>
            <a href="">Trang chủ</a>
          </li>
          <li>
            <a href="">Sản phẩm mới</a>
          </li>
          <li>
            <a href="">Sản phẩm bán chạy</a>
          </li>
          <li>
            <a href="">Sản phẩm</a>
          </li>
          <li>
            <a href="">Sản phẩm</a>
          </li>
          <li>
            <a href="">Sản phẩm</a>
          </li>
        </ul>
      </div>

      {/* ICON */}
      <div className="w-1/5">
        <ul className="flex justify-end gap-4 px-4 text-white items-center">
          <li>
            <a href="">
              <FontAwesomeIcon
                icon={faUser}
                style={{ width: "10px", height: "10px" }}
              />
            </a>
          </li>
          <li>
            <a href="">
              <FontAwesomeIcon
                icon={faHeart}
                style={{ width: "10px", height: "10px" }}
              />
            </a>
          </li>
          <li>
            <a href="">
              <FontAwesomeIcon
                icon={faCartShopping}
                style={{ width: "10px", height: "10px" }}
              />
            </a>
          </li>
          <li className="md:hidden flex items-center">
            <button
              className="inline-flex items-center justify-center p-2 rounded-md text-white"
              onClick={toggleNavbar}
            >
              Hiển thị
            </button>
          </li>
        </ul>
        {/* Dropdown menu */}
        <div
          className={`mg:hidden absolute right-0 mt-2 w-full bg-white shadow-lg rounded-lg z-10 ${
            isClick ? "block" : "hidden"
          }`}
        >
          <ul className="flex flex-col text-black text-[12px] p-4">
            <li className="py-1 border-b">
              <a href="">Trang chủ</a>
            </li>
            <li className="py-1 border-b">
              <a href="">Sản phẩm mới</a>
            </li>
            <li className="py-1 border-b">
              <a href="">Sản phẩm bán chạy</a>
            </li>
            <li className="py-1 border-b">
              <a href="">Sản phẩm</a>
            </li>
            <li className="py-1 border-b">
              <a href="">Sản phẩm</a>
            </li>
            <li className="py-1">
              <a href="">Sản phẩm</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
