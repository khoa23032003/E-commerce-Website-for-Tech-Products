"use client";
import React from "react";

const Page = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="flex flex-col bg-white mx-auto w-full max-w-md p-8 h-auto border-2 border-gray-300 rounded-xl shadow-lg">
        {/* đăng nhập  */}
        <div>
          <h1 className="text-2xl font-bold text-center text-blue-700 mb-6">
            Đăng nhập
          </h1>

          {/* Tên đăng nhập */}
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Nhập tên đăng nhập
            </label>
            <input
              id="username"
              type="text"
              placeholder="Tên đăng nhập"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Mật khẩu */}
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Nhập mật khẩu
            </label>
            <input
              id="password"
              type="password"
              placeholder="Mật khẩu"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Ghi nhớ mật khẩu và đăng ký */}
          <div className="flex justify-between items-center mb-6">
            <label className="flex items-center text-sm text-gray-600">
              <input type="checkbox" className="mr-2 rounded" />
              Nhớ mật khẩu
            </label>
            <a href="#" className="text-sm text-blue-600 hover:underline">
              Bạn chưa có tài khoản?
            </a>
          </div>

          {/* Nút đăng nhập */}
          <button className="w-full py-3 bg-blue-700 text-white font-semibold rounded-lg hover:bg-blue-800 transition duration-200">
            Đăng nhập
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page;
