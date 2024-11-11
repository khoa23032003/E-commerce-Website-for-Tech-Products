import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class", // Kích hoạt chế độ tối bằng cách thêm class 'dark'
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {

      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        lamaSky: "#C3EBFA",
        lamaSkyLight: "#EDF9FD",
        lamaPurple: "#CFCEFF",
        lamaPurpleLight: "#F1F0FF",
        lamaYellow: "#FAE27C",
        lamaYellowLight: "#FEFCE8",

        // Định nghĩa các màu chính, phụ, và nút với biến thể sáng/tối
        primary: {
          light: "#001D3F", // Màu cho chế độ sáng
          dark: "#FF6600", // Màu cho chế độ tối
          DEFAULT: "#001D3F", // Màu mặc định (có thể dùng chung cho cả sáng/tối)
        },
        secondary: {
          light: "#8BC34A", // Màu phụ cho chế độ sáng
          dark: "#689F38", // Màu phụ cho chế độ tối
          DEFAULT: "#8BC34A",
        },
        button: {
          light: "#255deb", // Màu cho nút trong chế độ sáng
          dark: "#1976D2", // Màu cho nút trong chế độ tối
          DEFAULT: "#255deb",
        },
        // Thêm các màu tùy chỉnh khác nếu cần
        background: {
          light: "#FFFFFF", // Nền cho chế độ sáng
          dark: "#121212", // Nền cho chế độ tối
          DEFAULT: "#FFFFFF",
        },
        text: {
          light: "#000000", // Màu chữ cho chế độ sáng
          dark: "#FFFFFF", // Màu chữ cho chế độ tối
          DEFAULT: "#000000",
        },
      },
    },
  },
  plugins: [],
};

export default config;
