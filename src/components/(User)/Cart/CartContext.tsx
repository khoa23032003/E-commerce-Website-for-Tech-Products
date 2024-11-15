import React, { createContext, useContext, useState } from "react";

// Định nghĩa kiểu dữ liệu cho item trong giỏ hàng
interface CartItem {
  id: number; // Kiểu id là number
  price: number; // Kiểu price là number
  quantity: number; // Kiểu quantity là number
}

// Tạo một Context mới, sẽ dùng để quản lý và chia sẻ giỏ hàng
const CartContext = createContext<
  | {
      cartItems: CartItem[];
      addToCart: (item: CartItem) => void;
      removeFromCart: (id: number) => void;
      updateQuantity: (id: number, quantity: number) => void;
      total: number;
    }
  | undefined
>(undefined);

// CartProvider là một component bao bọc và cung cấp dữ liệu giỏ hàng cho các component con
export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  // Giỏ hàng sẽ được lưu trong state 'cartItems', khởi tạo là mảng rỗng với kiểu CartItem[]
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  // Hàm thêm mặt hàng vào giỏ hàng
  const addToCart = (item: CartItem) => {
    setCartItems((prevItems) => [
      ...prevItems, // Giữ lại các mặt hàng cũ
      item, // Thêm mặt hàng mới vào cuối
    ]);
  };

  // Hàm loại bỏ mặt hàng khỏi giỏ hàng theo 'id'
  const removeFromCart = (id: number) => {
    setCartItems(
      (prevItems) => prevItems.filter((item) => item.id !== id) // Lọc ra các mặt hàng có 'id' khác với id cần xóa
    );
  };

  // Hàm cập nhật số lượng của mặt hàng trong giỏ hàng
  const updateQuantity = (id: number, quantity: number) => {
    setCartItems((prevItems) =>
      prevItems.map(
        (item) =>
          item.id === id // Nếu 'id' của mặt hàng trùng với id cần cập nhật
            ? { ...item, quantity } // Cập nhật số lượng của mặt hàng đó
            : item // Nếu không trùng, giữ nguyên mặt hàng
      )
    );
  };

  // Tính toán tổng giá trị của giỏ hàng bằng cách nhân giá với số lượng của từng mặt hàng
  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity, // Cộng dồn giá trị của các mặt hàng
    0 // Giá trị khởi tạo là 0
  );

  // Trả về một CartContext.Provider, cung cấp các giá trị như giỏ hàng, hàm xử lý và tổng tiền cho các component con
  return (
    <CartContext.Provider
      value={{
        cartItems, // Danh sách các mặt hàng trong giỏ hàng
        addToCart, // Hàm thêm mặt hàng vào giỏ
        removeFromCart, // Hàm loại bỏ mặt hàng khỏi giỏ
        updateQuantity, // Hàm cập nhật số lượng mặt hàng
        total, // Tổng giá trị giỏ hàng
      }}
    >
      {children} {/* Bao bọc các component con */}
    </CartContext.Provider>
  );
};

// Custom Hook giúp dễ dàng truy cập dữ liệu giỏ hàng trong bất kỳ component nào
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart phải được sử dụng trong CartProvider");
  }
  return context;
};
