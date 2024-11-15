"use client";
import CardComponent from "@/components/(User)/(Category)/CardComponent";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { AiFillHome, AiOutlineRight } from "react-icons/ai";
import { FaArrowDownShortWide, FaArrowDownWideShort } from "react-icons/fa6";
import { FiPercent } from "react-icons/fi";

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

interface Category {
    id: string;
    name: string;
}

const Page = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [categories, setCategories] = useState<Category[]>([]);

    // Fetch products
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('http://localhost:8080/product');
                setProducts(response.data);
                setLoading(false);
            } catch (error) {
                setError('Không thể tải dữ liệu sản phẩm');
                setLoading(false);
            }
        };
        fetchProducts();
    }, []);

    // Fetch categories
    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await axios.get('http://localhost:8080/categories');
                setCategories(response.data);
                setLoading(false);
            } catch (error) {
                setError('Không thể tải dữ liệu danh mục');
                setLoading(false);
            }
        };
        fetchCategories();
    }, []);

    if (loading) return <div>Đang tải...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div className="px-4 sm:px-6 lg:px-12 xl:px-20 mt-5">
            {/* Breadcrumb */}
            <div className="text-gray-400 flex items-center mb-5">
                <AiFillHome />
                <AiOutlineRight className="mx-2" />
                <span className="text-sm">Home</span>
                <AiOutlineRight className="mx-2" />
                <span className="text-sm">Category</span>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-3 mb-5">
                {categories.map((category) => (
                    <div key={category.id} className="border border-gray-300 rounded-xl p-4 text-center text-xs font-bold w-auto">
                        {category.name}
                    </div>
                ))}
            </div>

            {/* Sort Options */}
            <h1 className="font-bold text-lg mb-3">Sắp xếp theo</h1>
            <div className="flex flex-wrap gap-3 mb-5">
                <div className="border border-gray-300 rounded-xl p-4 text-center text-xs w-auto">
                    <span className="flex items-center">
                        <FaArrowDownShortWide className="mr-2" style={{ fontSize: '15px' }} />
                        Giá cao - thấp
                    </span>
                </div>
                <div className="border border-gray-300 rounded-xl p-4 text-center text-xs w-auto">
                    <span className="flex items-center">
                        <FaArrowDownWideShort className="mr-2" style={{ fontSize: '15px' }} />
                        Giá thấp - cao
                    </span>
                </div>
                <div className="border border-gray-300 rounded-xl p-4 text-center text-xs w-auto">
                    <span className="flex items-center">
                        <FiPercent className="mr-2" style={{ fontSize: '15px' }} />
                        Khuyến mãi
                    </span>
                </div>
            </div>

            {/* Card Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-2 md:gap-2 lg:gap-2">
                {products.map((product) => (
                    <CardComponent key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default Page;
