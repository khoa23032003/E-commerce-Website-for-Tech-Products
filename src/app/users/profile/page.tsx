"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

const Profile = () => {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchUserData = async () => {
      const token = localStorage.getItem("access_token");
      if (!token) {
        alert("Vui lòng đăng nhập trước!");
        router.push("/login");
        return;
      }

      try {
        const response = await axios.get("http://localhost:8080/auth/me", {
          headers: {
            Authorization: `Bearer ${token}`, // Gửi token trong header
          },
        });

        setUser(response.data.result); // Đặt thông tin người dùng từ API
      } catch (error: any) {
        console.error(
          "Error fetching user data:",
          error.response?.data || error.message
        );
        alert(
          error.response?.data?.message ||
            "Không thể lấy thông tin người dùng. Vui lòng đăng nhập lại."
        );
        router.push("/login");
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [router]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p>Đang tải...</p>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white w-full max-w-md p-8 rounded-xl shadow-lg border-2 border-gray-300">
        <h1 className="text-2xl font-bold text-center text-blue-700 mb-6">
          Thông tin cá nhân
        </h1>
        <div className="space-y-4">
          <div>
            <p className="text-sm text-gray-600 font-medium">Tên người dùng:</p>
            <p className="text-lg font-semibold text-gray-800">{user.name}</p>
          </div>
          <div>
            <p className="text-sm text-gray-600 font-medium">Email:</p>
            <p className="text-lg font-semibold text-gray-800">{user.email}</p>
          </div>
          <div>
            <p className="text-sm text-gray-600 font-medium">Vai trò:</p>
            <p className="text-lg font-semibold text-gray-800">{user.role}</p>
          </div>
        </div>
        <button
          onClick={() => {
            localStorage.removeItem("access_token");
            alert("Đăng xuất thành công!");
            router.push("/login");
          }}
          className="mt-6 w-full py-3 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 transition duration-200"
        >
          Đăng xuất
        </button>
      </div>
    </div>
  );
};

export default Profile;
