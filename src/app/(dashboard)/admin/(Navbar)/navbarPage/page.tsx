"use client";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

interface Navbar {
  id: string;
  name: string;
  link: string;
}

const Page = () => {
  const [navbar, setNavbar] = useState<Navbar[]>([]);
  const router = useRouter();

  // Lấy danh sách navbar
  const fetchNavbar = async () => {
    try {
      const response = await axios.get("http://localhost:8080/navbar");
      // Truy cập đúng vào `data` chứa mảng navbar
      const data = response.data?.data || []; // Nếu không có `data`, đặt giá trị mặc định là mảng rỗng
      setNavbar(data);
    } catch (error) {
      console.error("Lỗi khi lấy danh sách navbar", error);
      alert("Không thể tải danh sách, vui lòng thử lại sau.");
    }
  };

  useEffect(() => {
    fetchNavbar();
  }, []);

  // Xóa danh mục
  const deleteCategory = async (id: string) => {
    if (confirm("Bạn có chắc muốn xóa danh mục này?")) {
      try {
        await axios.delete(`http://localhost:8080/navbar/${id}`);
        alert("Xóa thành công!");
        await fetchNavbar(); // Tải lại danh sách sau khi xóa
      } catch (error) {
        console.error("Lỗi khi xóa danh mục", error);
        alert("Xóa thất bại! Vui lòng thử lại sau.");
      }
    }
  };

  return (
    <div className="container mx-auto p-5">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
        Danh sách Navbar
      </h1>
      <div>
        <Link href="/admin/createNavbarPage"> Add</Link>
      </div>
      <table className="table-auto w-full border-collapse border border-gray-300 bg-white shadow-md rounded-md">
        <thead className="bg-gray-100">
          <tr>
            <th className="border border-gray-300 p-3 text-gray-700">ID</th>
            <th className="border border-gray-300 p-3 text-gray-700">Navbar</th>
            <th className="border border-gray-300 p-3 text-gray-700">Link</th>
            <th className="border border-gray-300 p-3 text-gray-700">
              Hành động
            </th>
          </tr>
        </thead>
        <tbody>
          {navbar.map((navbars) => (
            <tr key={navbars.id} className="hover:bg-gray-50 transition-colors">
              <td className="border border-gray-300 p-3 text-center">
                {navbars.id}
              </td>
              <td className="border border-gray-300 p-3 text-center">
                {navbars.name}
              </td>
              <td className="border border-gray-300 p-3 text-center">
                <a href={navbars.link} className="text-blue-500 underline">
                  {navbars.link}
                </a>
              </td>
              <td className="border border-gray-300 p-3 text-center">
                <button
                  className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded mr-2"
                  onClick={() => router.push(`/editNavbar/${navbars.id}`)}
                >
                  Sửa
                </button>
                <button
                  className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
                  onClick={() => deleteCategory(navbars.id)}
                >
                  Xóa
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Page;
