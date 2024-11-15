'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';

// Định nghĩa kiểu dữ liệu cho navbar item
interface NavbarItem {
    id: string;
    name: string;
    link: string;
}

const NavbarPage = () => {
    const [navbarItems, setNavbarItems] = useState<NavbarItem[]>([]); // Đặt kiểu cho navbarItems
    const [loading, setLoading] = useState<boolean>(true); // Đặt kiểu cho loading
    const [error, setError] = useState<string | null>(null); // Đặt kiểu cho error

    useEffect(() => {
        // Gửi yêu cầu API để lấy danh sách navbar items
        const fetchNavbarItems = async () => {
            try {
                const response = await axios.get('http://localhost:8080/navbar'); // Thay localhost với API URL của bạn
                console.log(response.data); // Kiểm tra dữ liệu trả về
                // Kiểm tra xem dữ liệu có phải là mảng không
                if (Array.isArray(response.data.data)) {
                    setNavbarItems(response.data.data); // Cập nhật danh sách navbar items
                } else {
                    console.error('Dữ liệu không phải là mảng:', response.data);
                    setError('Dữ liệu không hợp lệ');
                }
                setLoading(false);
            } catch (error) {
                setError('Không thể tải danh sách navbar');
                setLoading(false);
            }
        };

        fetchNavbarItems();
    }, []);

    if (loading) return <div>Đang tải...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div>
            <h1>Danh sách Navbar</h1>
            <ul>
                {navbarItems.map((item) => (
                    <li key={item.id}>
                        <a href={item.link}>{item.name}</a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default NavbarPage;
