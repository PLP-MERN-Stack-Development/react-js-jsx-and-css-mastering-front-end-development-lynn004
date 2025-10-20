import React from "react";
import { useTheme } from "../context/ThemeContext";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="flex items-center justify-between p-4 bg-gray-200 dark:bg-gray-800 shadow-md">
      <h1 className="text-lg font-bold text-gray-800 dark:text-white">
        My React App
      </h1>

      <ul className="flex space-x-4">
        <li><a href="/" className="text-gray-700 dark:text-gray-200 hover:underline">Home</a></li>
        <li><a href="/tasks" className="text-gray-700 dark:text-gray-200 hover:underline">Tasks</a></li>
      </ul>

      <button
        onClick={toggleTheme}
        className="px-3 py-2 rounded bg-blue-500 text-white hover:bg-blue-600 transition"
      >
        {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
      </button>
    </nav>
  );
};

export default Navbar;
