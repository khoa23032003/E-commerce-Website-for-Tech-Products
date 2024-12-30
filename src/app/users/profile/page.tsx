"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

interface User {
  id: string;
  email: string;
  name: string;
}

const ProfilePage = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await axios.get("http://localhost:8080/auth/me", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          },
          withCredentials: true,
        });

        // Trích xuất thông tin người dùng từ result
        const userData = response.data.result;
        setUser(userData);
        setLoading(false);
      } catch (err) {
        setLoading(false);
        // setError(err.response?.data?.message || "Có lỗi xảy ra");
      }
    };

    fetchUserProfile();
  }, []);

  const handleLogout = async () => {
    try {
      await axios.post(
        "http://localhost:8080/auth/logout",
        {},
        {
          withCredentials: true,
        }
      );
      localStorage.removeItem("access_token");
      alert("Đăng xuất thành công!");
      router.push("/users/loginPage");
    } catch (err) {
      alert("Đăng xuất thất bại!");
    }
  };

  if (loading) return <p>Đang tải thông tin...</p>;

  if (error) return <p className="text-red-500">Lỗi: {error}</p>;

  if (!user) return <p>Không có thông tin người dùng.</p>;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 w-full max-w-md rounded-lg shadow-lg border-2 border-gray-300">
        <h1 className="text-2xl font-bold text-center text-blue-700 mb-6">
          Thông tin người dùng
        </h1>
        <div className="mb-4">
          <p className="text-sm font-medium text-gray-700">ID:</p>
          <p className="text-lg font-semibold text-gray-900">{user.id}</p>
        </div>
        <div className="mb-4">
          <p className="text-sm font-medium text-gray-700">Email:</p>
          <p className="text-lg font-semibold text-gray-900">{user.email}</p>
        </div>
        <div className="mb-4">
          <p className="text-sm font-medium text-gray-700">Tên người dùng:</p>
          <p className="text-lg font-semibold text-gray-900">{user.name}</p>
        </div>
        <button
          onClick={handleLogout}
          className="w-full py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition duration-200"
        >
          Đăng xuất
        </button>
      </div>
    </div>
  );
};

export default ProfilePage;
