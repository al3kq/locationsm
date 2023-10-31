// HomePage.js

import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-100">
      
      {/* Logo */}
      <div className="mb-8 text-blue-500 text-5xl font-bold">
        Your Logo
      </div>
      
      {/* Buttons */}
      <div className="space-x-4">
    <Link to="/signup">
        <button className="bg-blue-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-600 transition duration-300">
          Signup
        </button>
        </Link>
    <Link to="/login">
        <button className="bg-white border border-blue-500 text-blue-500 px-6 py-2 rounded-lg shadow-md hover:bg-blue-100 transition duration-300">
          Login
        </button>
    </Link>
      </div>

    </div>
  );
};

export default HomePage;
