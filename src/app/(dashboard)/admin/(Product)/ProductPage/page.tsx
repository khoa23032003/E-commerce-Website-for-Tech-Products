"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    imageUrl: string;
    stock: number;
    categoryId: string;

}

interface Category {
    id: string
    name: string
}

const Page = () => {
    const [product, setProduct] = useState<Product[]>([]);
    const router = useRouter();
    const [loading, setLoading] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isModalUpdateOpen, setIsModalUpdateOpen] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [stock, setStock] = useState("");
    const [categoryId, setCategoryId] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("");
    const [categories, setCategories] = useState<Category[]>([]);
    const [image, setImage] = useState<File | null>(null);
    const [previewImage, setPreviewImage] = useState<string | null>(null);
    const [productId, setProductId] = useState<string>('');


    const fetchProducts = async () => {
        try {
            const response = await axios.get("http://localhost:8080/product");
            setProduct(response.data);
            setLoading(false);
        } catch (error) {

            setLoading(false);
        }
    };



    const resetForm = () => {
        setName("");
        setPrice("");
        setDescription("");
        setStock("");
        setSelectedCategory("");
        setPreviewImage(null);
        setPreviewImage(null);
        setError("");
        setSuccess("");
    };



    useEffect(() => {

        fetchProducts();
    }, []);

    // Xóa product
    const deleteCategory = async (id: string) => {
        if (confirm("Bạn có chắc muốn xóa danh mục này?")) {
            try {
                await axios.delete(`http://localhost:8080/product/${id}`);
                alert("Xóa thành công!");
                await fetchProducts(); // Tải lại danh sách sau khi xóa
            } catch (error) {
                console.error("Lỗi khi xóa danh mục", error);
                alert("Xóa thất bại! Vui lòng thử lại sau.");
            }
        }
    };


    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setImage(file);
            setPreviewImage(URL.createObjectURL(file));
        }
    };

    useEffect(() => {
        // Gọi API để lấy danh sách danh mục
        const fetchCategories = async () => {
            try {
                const response = await axios.get("http://localhost:8080/categories"); // Thay API_URL bằng URL API của bạn
                setCategories(response.data); // Giả sử API trả về một mảng các danh mục
            } catch (error) {
                console.error("Lỗi khi tải danh mục:", error);
            }
        };

        fetchCategories();
    }, []);

    const toggleModal = () => {
        resetForm();
        setIsModalOpen(!isModalOpen);

    };



    //Add product
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");
        setSuccess("");
        // Tạo đối tượng FormData để gửi dữ liệu dưới dạng multipart/form-data
        const formData = new FormData();
        formData.append("name", name);
        formData.append("description", description);
        formData.append("price", price);
        formData.append("stock", stock);
        formData.append("categoryId", selectedCategory);

        // Nếu có hình ảnh, thêm nó vào FormData
        if (image) {
            formData.append("imageUrl", image);
        }

        try {
            const res = await axios.post("http://localhost:8080/product", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },

            });

            setSuccess("Product created successfully!");
            // Refetch products to update the list
            toggleModal(); // Close the modal
            resetForm();
            fetchProducts();
            if (res.status === 201) {
                // alert("Thêm sản phẩm thành công!");
                setSuccess("Product created successfully!");
                // Refetch products to update the list
                toggleModal(); // Close the modal
                fetchProducts();
                // router.push("/admin/ProductPage")// Tải lại danh sách sản phẩm sau khi thêm thành công
            } else {
                // Nếu status khác 200, có thể là một lỗi khác
                alert("Có lỗi xảy ra khi thêm sản phẩm!");
            }


        } catch (err) {
            // Xử lý lỗi
            setError("Có lỗi xảy ra khi tạo sản phẩm");
            console.error(err);
        }
    };


    //Update product
    const toggleModalUpdate = () => {
        setIsModalUpdateOpen(!isModalUpdateOpen);
    };
    const fetchProductDetails = async (id: string) => {
        try {
            const response = await axios.get(`http://localhost:8080/product/${id}`);
            const product = response.data;

            // Gán giá trị cho các trường thông tin
            setProductId(id); // Đảm bảo productId được gán trước khi mở modal
            setName(product.name);
            setDescription(product.description);
            setPrice(product.price);
            setStock(product.stock);
            setSelectedCategory(product.categoryId);
            setImageUrl(product.imageUrl); // Lấy imageUrl của sản phẩm
            setPreviewImage(product.imageUrl); // Dùng URL ảnh của sản phẩm để xem trước

            setIsModalUpdateOpen(true); // Mở modal cập nhật
        } catch (error) {
            console.error("Error fetching product details:", error);
        }
    };


    const handleUpdateSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");
        setSuccess("");

        const formData = new FormData();
        formData.append("name", name);
        formData.append("description", description);
        formData.append("price", price);
        formData.append("stock", stock);
        formData.append("categoryId", selectedCategory);

        if (image) {
            formData.append("imageUrl", image);
        }

        try {
            const res = await axios.patch(
                `http://localhost:8080/product/${productId}`,
                formData,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                }
            );

            if (res.status === 200) {
                setSuccess("Product updated successfully!");
                setIsModalUpdateOpen(false);
                fetchProducts(); // Cập nhật lại danh sách sản phẩm
            } else {
                alert("Error updating product");
            }
        } catch (err) {
            setError("Error occurred while updating the product");
            console.error(err);
        }
    };



    return (
        <div className="container mx-auto p-5">
            <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
                Danh sách Sản phẩm
            </h1>
            <div>
                {/* Modal toggle button */}
                <button
                    onClick={toggleModal}
                    className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mb-5"
                    type="button"
                >
                    Thêm sản phẩm
                </button>

                {/* Main modal */}
                {isModalOpen && (
                    <div className="fixed inset-0 z-50 flex justify-center items-center w-full h-full bg-black bg-opacity-50">
                        <div className="relative p-4 w-full max-w-md max-h-full">
                            {/* Modal content */}
                            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                                {/* Modal header */}
                                <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                        Thêm mới sản phẩm
                                    </h3>
                                    <button
                                        type="button"
                                        onClick={toggleModal}
                                        className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                                    >
                                        <svg
                                            className="w-3 h-3"
                                            aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 14 14"
                                        >
                                            <path
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M1 1l6 6m0 0l6 6M7 7l6-6M7 7l-6 6"
                                            />
                                        </svg>
                                        <span className="sr-only">Close modal</span>
                                    </button>
                                </div>

                                {/* Modal body */}
                                <form onSubmit={handleSubmit} className="p-4 md:p-5">
                                    <div className="grid gap-4 mb-4 grid-cols-2">
                                        <div className="col-span-2">
                                            <label
                                                htmlFor="name"
                                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                            >
                                                Tên sản phẩm
                                            </label>
                                            <input
                                                type="text"
                                                name="name"
                                                id="name"
                                                value={name}
                                                onChange={(e) => setName(e.target.value)}
                                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                                placeholder="Tên sản phẩm"
                                                required
                                            />
                                        </div>
                                        <div className="col-span-2 sm:col-span-1">
                                            <label
                                                htmlFor="price"
                                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                            >
                                                Giá
                                            </label>
                                            <input
                                                type="text"
                                                name="price"
                                                value={price}
                                                onChange={(e) => setPrice(e.target.value)}

                                                id="price"
                                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                                placeholder="1000.000.000 VNĐ"
                                                required
                                            />
                                        </div>
                                        <div className="col-span-2 sm:col-span-1">
                                            <label
                                                htmlFor="category"
                                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                            >
                                                Loại sản phẩm
                                            </label>
                                            <select
                                                id="category"
                                                value={selectedCategory}
                                                onChange={(e) => setSelectedCategory(e.target.value)}
                                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                                required
                                            >
                                                <option value="">Chọn</option>
                                                {categories.map((category) => (
                                                    <option key={category.id} value={category.id}>
                                                        {category.name}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                        <div className="col-span-2">
                                            <label
                                                htmlFor="description"
                                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                            >
                                                Mô tả sản phẩm
                                            </label>
                                            <textarea
                                                id="description"
                                                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                placeholder="Mô tả sản phẩm"
                                                value={description}
                                                onChange={(e) => setDescription(e.target.value)}
                                            ></textarea>
                                        </div>
                                        <div className="col-span-2 sm:col-span-1">
                                            <label
                                                htmlFor="stock"
                                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                            >
                                                Số lượng
                                            </label>
                                            <input
                                                type="text"
                                                name="price"
                                                value={stock}
                                                onChange={(e) => setStock(e.target.value)}
                                                id="price"
                                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                                placeholder="10"
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="col-span-2">
                                        <label htmlFor="image" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                            Hình ảnh sản phẩm
                                        </label>
                                        <input
                                            type="file"
                                            id="image"
                                            accept="image/*"
                                            onChange={handleImageChange}
                                            className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400"
                                        />
                                        {previewImage && (
                                            <img
                                                src={previewImage}
                                                alt="Product Preview"
                                                className="mt-2 w-32 h-32 object-cover rounded"
                                            />
                                        )}
                                    </div>


                                    <button
                                        type="submit"
                                        className="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                    >
                                        <svg
                                            className="me-1 -ms-1 w-5 h-5"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                                                clipRule="evenodd"
                                            ></path>
                                        </svg>
                                        Thêm mới sản phẩm
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                )}
            </div>


            {/* form update product */}
            {isModalUpdateOpen && (
                <div className="fixed inset-0 z-50 flex justify-center items-center bg-black bg-opacity-50">
                    <div className="relative p-4 w-full max-w-md max-h-full bg-white rounded-lg">
                        <div className="flex justify-between p-4 border-b">
                            <h3 className="text-lg font-semibold text-gray-900">Cập nhật</h3>
                            <button onClick={toggleModalUpdate} className="text-gray-400">
                                <svg className="w-3 h-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1l6 6m0 0l6 6M7 7l6-6M7 7l-6 6" />
                                </svg>
                            </button>
                        </div>

                        <form onSubmit={handleUpdateSubmit} className="p-4">
                            <div className="grid gap-4 mb-4 grid-cols-2">
                                <div className="col-span-2">
                                    <label htmlFor="name" className="block text-sm text-gray-900">Tên sản phẩm</label>
                                    <input
                                        type="text"
                                        id="name"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        className="bg-gray-50 text-sm border text-gray-900 p-2.5 w-full"
                                        required
                                    />
                                </div>


                                <div className="col-span-2 sm:col-span-1">
                                    <label htmlFor="price" className="block text-sm text-gray-900">Giá</label>
                                    <input
                                        type="text"
                                        id="price"
                                        value={price}
                                        onChange={(e) => setPrice(e.target.value)}
                                        className="bg-gray-50 text-sm border text-gray-900 p-2.5 w-full"
                                    />
                                </div>

                                <div className="col-span-2 sm:col-span-1">
                                    <label htmlFor="category" className="block text-sm text-gray-900">Loại sản phẩm</label>
                                    <select
                                        id="category"
                                        value={selectedCategory}
                                        onChange={(e) => setSelectedCategory(e.target.value)}
                                        className="bg-gray-50 text-sm border text-gray-900 p-2.5 w-full"
                                    >
                                        {categories.map((category) => (
                                            <option key={category.id} value={category.id}>
                                                {category.name}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <div className="col-span-2">
                                    <label htmlFor="description" className="block text-sm text-gray-900">Mô tả sản phẩm</label>
                                    <textarea
                                        id="description"
                                        value={description}
                                        onChange={(e) => setDescription(e.target.value)}
                                        className="bg-gray-50 text-sm border text-gray-900 p-2.5 w-full"
                                    ></textarea>
                                </div>




                                <div className="col-span-2">
                                    <label htmlFor="stock" className="block text-sm text-gray-900">Số lượng</label>
                                    <input
                                        type="text"
                                        id="stock"
                                        value={stock}
                                        onChange={(e) => setStock(e.target.value)}
                                        className="bg-gray-50 text-sm border text-gray-900 p-2.5 w-full"
                                    />
                                </div>

                                <div className="col-span-2">
                                    <label htmlFor="image" className="block text-sm text-gray-900">Hình ảnh sản phẩm</label>
                                    <input
                                        type="file"
                                        id="image"
                                        accept="image/*"
                                        onChange={handleImageChange}
                                        className="bg-gray-50 text-sm text-gray-900 p-2.5 w-full"
                                    />
                                    {previewImage && (
                                        <img src={previewImage} alt="Image preview" className="mt-2 w-32 h-32 object-cover" />
                                    )}
                                </div>
                            </div>

                            {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
                            {success && <p className="text-green-500 text-sm mb-2">{success}</p>}

                            <button
                                type="submit"
                                className="w-full bg-blue-500 text-white py-2 rounded-lg mt-4"
                            >
                                Update Product
                            </button>
                        </form>
                    </div>
                </div>
            )}


            <table className="table-auto w-full border-collapse border border-gray-300 bg-white shadow-md rounded-md">
                <thead className="bg-gray-100">
                    <tr>
                        <th className="border border-gray-300 p-3 text-gray-700">ID</th>
                        <th className="border border-gray-300 p-3 text-gray-700">Tên sản phẩm</th>
                        <th className="border border-gray-300 p-3 text-gray-700">Giá</th>
                        <th className="border border-gray-300 p-3 text-gray-700">Hình ảnh</th>
                        <th className="border border-gray-300 p-3 text-gray-700">Số lượng</th>
                        <th className="border border-gray-300 p-3 text-gray-700">
                            Tác vụ
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {product.map((products) => (
                        <tr key={products.id} className="hover:bg-gray-50 transition-colors">
                            <td className="border border-gray-300 p-3 text-center">
                                {products.id}
                            </td>
                            <td className="border border-gray-300 p-3 text-center">
                                {products.name}
                            </td>
                            <td className="border border-gray-300 p-3 text-center">
                                {products.price}
                            </td>
                            <td className="border border-gray-300 p-3 text-center">
                                <img src={products.imageUrl} alt="Product" className="w-16 h-16 object-cover mx-auto" />
                            </td>
                            <td className="border border-gray-300 p-3 text-center">
                                {products.stock}
                            </td>
                            <td className="border border-gray-300 p-3 text-center">
                                <button
                                    className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded mr-2"
                                    // onClick={() => router.push(`/editNavbar/${products.id}`)}
                                    onClick={() => fetchProductDetails(products.id)}
                                >
                                    Sửa
                                </button>
                                <button
                                    className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
                                    onClick={() => deleteCategory(products.id)}
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
