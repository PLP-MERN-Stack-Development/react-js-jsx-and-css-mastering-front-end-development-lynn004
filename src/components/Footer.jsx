// src/components/Footer.jsx
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-center py-4 mt-6 shadow-inner">
      <p>
        &copy; {new Date().getFullYear()} My React App. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
