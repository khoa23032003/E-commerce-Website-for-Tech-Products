"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";
import axios from "axios";

const Register = () => {
  const [name, setName] = useState(""); // Trạng thái cho tên người dùng
  const [email, setEmail] = useState(""); // Trạng thái cho email
  const [password, setPassword] = useState(""); // Trạng thái cho mật khẩu
  const router = useRouter();

  const handleRegister = async (e: any) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8080/user", {
        name,
        email,
        password,
      });
      alert("Đăng ký thành công! Bạn có thể đăng nhập ngay.");
      router.push("/login"); // Điều hướng đến trang đăng nhập
    } catch (error) {
      console.error("Error during registration:", error);
      alert("Đăng ký thất bại! Vui lòng kiểm tra thông tin.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="flex flex-col bg-white mx-auto w-full max-w-md p-8 h-auto border-2 border-gray-300 rounded-xl shadow-lg">
        <h1 className="text-2xl font-bold text-center text-blue-700 mb-6">
          Đăng ký
        </h1>
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Tên của bạn
          </label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Tên đầy đủ"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Nhập email
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
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
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Mật khẩu"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <button
          onClick={handleRegister}
          className="w-full py-3 bg-blue-700 text-white font-semibold rounded-lg hover:bg-blue-800 transition duration-200"
        >
          Đăng ký
        </button>
        <p className="text-center text-sm text-gray-600 mt-4">
          Đã có tài khoản?{" "}
          <a
            href="/login"
            className="text-blue-600 hover:underline font-semibold"
          >
            Đăng nhập
          </a>
        </p>
      </div>
    </div>
  );
};

export default Register;
