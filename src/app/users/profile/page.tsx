"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";

const Profile = () => {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const token = localStorage.getItem("access_token");
        if (!token) {
          alert("Bạn chưa đăng nhập!");
          return;
        }
        const response = await axios.get("http://localhost:8080/user/profile", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUser(response.data);
      } catch (error) {
        console.error("Error fetching profile:", error);
        alert("Không thể tải thông tin người dùng.");
      } finally {
        setLoading(false);
      }
    };

    fetchUserProfile();
  }, []);

  if (loading) {
    return <p>Đang tải thông tin...</p>;
  }

  if (!user) {
    return <p>Không tìm thấy thông tin người dùng.</p>;
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold text-blue-700 text-center mb-6">
          Thông tin người dùng
        </h1>
        <div className="space-y-4">
          <div>
            <span className="block text-gray-600 text-sm">Họ và tên:</span>
            <p className="font-medium text-lg">
              {user.name || "Chưa cập nhật"}
            </p>
          </div>
          <div>
            <span className="block text-gray-600 text-sm">Email:</span>
            <p className="font-medium text-lg">{user.email}</p>
          </div>
          <div>
            <span className="block text-gray-600 text-sm">Số điện thoại:</span>
            <p className="font-medium text-lg">
              {user.phone || "Chưa cập nhật"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
