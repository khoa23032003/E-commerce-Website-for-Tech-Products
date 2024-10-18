"use client";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";

const Navbar = () => {
  return (
    <div className="bg-yellow-300 p-4 flex">
      {/* LOGO */}
      <div className="w-1/5"></div>
      {/* TEXT */}
      <div className="w-3/5">
        <ul className="flex gap-4 justify-center text-white text-sm block  ">
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
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
