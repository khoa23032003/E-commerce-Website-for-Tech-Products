"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import axios from "axios";
import qs from "qs"; // Thêm qs để encode dữ liệu nếu backend yêu cầu

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // Gửi yêu cầu login với mã hóa dữ liệu dạng x-www-form-urlencoded
      const response = await axios.post(
        "http://localhost:8080/auth/login",
        qs.stringify({
          email,
          password,
        }),
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          withCredentials: true, // Bật để gửi cookie tự động
        }
      );

      // Nếu bạn dùng cookie thì không cần phải lưu token ở đây nữa
      alert("Đăng nhập thành công!");

      // Chuyển hướng đến trang thông tin người dùng
      router.push("/users/profile");
    } catch (error: any) {
      console.error("Error during login:", error.response?.data || error.message);
      alert(
        error.response?.data?.message ||
          "Đăng nhập thất bại! Vui lòng kiểm tra thông tin."
      );
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="flex flex-col bg-white mx-auto w-full max-w-md p-8 h-auto border-2 border-gray-300 rounded-xl shadow-lg">
        <h1 className="text-2xl font-bold text-center text-blue-700 mb-6">
          Đăng nhập
        </h1>
        <form onSubmit={handleLogin}>
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
              required
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
              required
            />
          </div>
          <div className="flex justify-between items-center mb-6">
            <label className="flex items-center text-sm text-gray-600">
              <input type="checkbox" className="mr-2 rounded" />
              Nhớ mật khẩu
            </label>
            <div
              onClick={() => router.push("/users/registerPage")}
              className="text-sm text-blue-600 hover:underline cursor-pointer"
            >
              Bạn chưa có tài khoản?
            </div>
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-blue-700 text-white font-semibold rounded-lg hover:bg-blue-800 transition duration-200"
          >
            Đăng nhập
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;