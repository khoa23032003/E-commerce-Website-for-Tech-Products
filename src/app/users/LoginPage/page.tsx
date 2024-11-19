"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = async (e: any) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8080/user/login", {
        email,
        password,
      });
      localStorage.setItem("access_token", response.data.access_token);
      alert("Login thành công!");
      router.push("/users/profile");
    } catch (error) {
      console.error("Error during login:", error);
      alert("Đăng nhập thất bại! Vui lòng kiểm tra thông tin.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="flex flex-col bg-white mx-auto w-full max-w-md p-8 h-auto border-2 border-gray-300 rounded-xl shadow-lg">
        <h1 className="text-2xl font-bold text-center text-blue-700 mb-6">
          Đăng nhập
        </h1>
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
        <div className="flex justify-between items-center mb-6">
          <label className="flex items-center text-sm text-gray-600">
            <input type="checkbox" className="mr-2 rounded" />
            Nhớ mật khẩu
          </label>
          <div
            onClick={() => router.push("/users/registerPage")}
            className="text-sm text-blue-600 hover:underline"
          >
            Bạn chưa có tài khoản?
          </div>
        </div>
        <button
          onClick={handleLogin}
          className="w-full py-3 bg-blue-700 text-white font-semibold rounded-lg hover:bg-blue-800 transition duration-200"
        >
          Đăng nhập
        </button>
      </div>
    </div>
  );
};

export default Login;
