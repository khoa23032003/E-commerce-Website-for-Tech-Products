"use client";
// pages/themeTogglePage.tsx
import React, { useEffect, useState } from "react";

const ThemeTogglePage: React.FC = () => {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  useEffect(() => {
    const currentTheme = localStorage.getItem("theme");
    if (currentTheme === "dark") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      setDarkMode(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    setDarkMode((prev) => !prev);
    const newTheme = !darkMode ? "dark" : "light";
    localStorage.setItem("theme", newTheme);
    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background-light dark:bg-background-dark transition-colors duration-300">
      <h1 className="text-4xl text-text-light dark:text-text-dark mb-4">
        Chào mừng đến với trang giao diện!
      </h1>
      <p className="text-lg text-text-light dark:text-text-dark mb-4">
        Đây là một ví dụ về cách chuyển đổi giữa chế độ sáng và tối.
      </p>
      <button
        onClick={toggleTheme}
        className="px-6 py-3 text-white bg-button-light dark:bg-button-dark rounded-md transition-colors duration-300"
      >
        {darkMode ? "Chuyển sang chế độ sáng" : "Chuyển sang chế độ tối"}
      </button>
    </div>
  );
};

export default ThemeTogglePage;
