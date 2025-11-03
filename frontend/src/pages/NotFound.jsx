import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <h1 className="text-6xl font-bold text-blue-600">404</h1>
      <p className="text-gray-600 mb-6">Page Not Found</p>
      <Link to="/" className="text-blue-500 underline">
        Go Home
      </Link>
    </div>
  );
};

export default NotFound;
