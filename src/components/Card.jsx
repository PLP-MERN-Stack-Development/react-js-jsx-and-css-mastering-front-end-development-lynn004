// src/components/Card.jsx
import React from "react";

const Card = ({ title, children }) => {
  return (
    <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 transition-colors duration-300">
      {title && (
        <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-gray-100">
          {title}
        </h2>
      )}
      {children}
    </div>
  );
};

export default Card;
