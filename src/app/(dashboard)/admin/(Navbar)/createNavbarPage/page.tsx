"use client";
import axios from "axios";
import React, { useState } from "react";

const page = () => {
  const [name, setName] = useState("");
  const [link, setLink] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    try {
      const response = await axios.post("http://localhost:8080/navbar", {
        name,
        link,
      });
      setSuccess("Navbar đã được tạo thành công!");
    } catch (err) {}
  };
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-md bg-white shadow-md rounded-lg p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Thêm Danh Mục
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Tên navbar
            </label>
            <input
              type="text"
              id="name"
              value={name}
              // lắng nghe sự kiện khi người dùng nhập
              onChange={(e) => setName(e.target.value)}
              placeholder="Nhập navbar"
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-gray-700"
            />
          </div>

          <div>
            <label
              htmlFor="link"
              className="block text-sm font-medium text-gray-700"
            >
              Link
            </label>
            <input
              type="text"
              id="name"
              value={link}
              // lắng nghe sự kiện khi người dùng nhập
              onChange={(e) => setLink(e.target.value)}
              placeholder="Nhập navbar"
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-gray-700"
            />
          </div>
          {error && (
            <p className="text-sm text-red-600 bg-red-100 p-2 rounded-md">
              {error}
            </p>
          )}
          {success && (
            <p className="text-sm text-green-600 bg-green-100 p-2 rounded-md">
              {success}
            </p>
          )}
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Thêm
          </button>
        </form>
      </div>
    </div>
  );
};

export default page;
