// pages/Page.js
"use client";
import Banner from "@/components/HomePage/Banner";
import FlashSale from "@/components/HomePage/FlashSale";
import ContentBanner from "@/components/HomePage/ContentBanner";

import CategoryHot from "@/components/HomePage/CategoryHot";
import { ModeToggle } from "@/components/(User)/Setting/DarkModeToggle";
import { use, useEffect, useState } from "react";
import axios from "axios";
import CardComponent from "@/components/(User)/(Category)/CardComponent";

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  stock: number;
  categoryId: string;
  createdAt: string;
  updatedAt: string;
}
const Page = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  //lấy sản phẩm
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:8080/product");
        setProducts(response.data);
        setLoading(false);
      } catch (error) {
        setError("Không thể tải dữ liệu sản phẩm");
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div>
      <p className="mt-4 text-primary-light dark:text-primary-dark">
        This is an example of using Dark/Light mode with ShadCN UI and custom
        styles.
      </p>
      <ModeToggle />
      <Banner />
      {/* <FlashSale /> */}
      <ContentBanner />
      <div className="bg-gray-100 pt-2 pr-3 my-4">
        <div className="flex items-center justify-between">
          <div className="bg-red-600 text-white font-bold py-2 px-4 rounded-md rounded-r-full">
            LAPTOP VĂN PHÒNG
          </div>
          <div className="flex space-x-3">
            {["MSI", "Lenovo", "Dell", "HP", "Acer", "Asus", "Xem tất cả"].map(
              (brand, index) => (
                <button
                  key={index}
                  className="border border-gray-300 rounded-full px-4 py-2 hover:bg-gray-100"
                >
                  Laptop {brand}
                </button>
              )
            )}
          </div>
        </div>

        {/* PRODUCT */}
        {/* <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4 sm:gap-2 md:gap-2 lg:gap-2 p-5">
          {products.map((product) => (
            <CardComponent key={product.id} product={product} />
          ))}
        </div> */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-2 md:gap-2 lg:gap-2 p-5">
          {products.map((product) => (
            <CardComponent key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
function setError(arg0: string) {
  throw new Error("Function not implemented.");
}
