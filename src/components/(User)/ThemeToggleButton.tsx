// components/ThemeToggle.tsx
import React, { useState, useEffect } from "react";

const ThemeToggle: React.FC = () => {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  // Kiểm tra chế độ hiện tại và cập nhật state
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
    <div className="flex items-center justify-center min-h-screen bg-background-light dark:bg-background-dark transition-colors duration-300">
      <button
        onClick={toggleTheme}
        className="px-4 py-2 text-white bg-button-light dark:bg-button-dark rounded-md transition-colors duration-300"
      >
        {darkMode ? "Chuyển sang chế độ sáng" : "Chuyển sang chế độ tối"}
      </button>
    </div>
  );
};

export default ThemeToggle;
