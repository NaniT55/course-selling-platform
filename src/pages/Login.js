import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login Form Data Submitted:", formData);
  };

  return (
    <div className="h-full w-full bg-gradient-to-br from-blue-100 to-blue-300 flex items-center justify-center overflow-hidden p-8">
      <div className="max-w-sm bg-white rounded-lg shadow-lg p-8 transform transition-transform duration-500 hover:scale-105">
        {/* Header Section */}
        <h2 className="text-2xl font-extrabold text-gray-800 text-start">
          Welcome Back to ORN-AI!
        </h2>
        <p className="text-lg font-semibold text-gray-700 mt-1 mb-4 text-start">
          Log in to access your personalized dashboard.
        </p>

        {/* Login Form */}
        <form onSubmit={handleSubmit}>
          {/* Email Field */}
          <div className="mb-3">
            <label
              htmlFor="email"
              className="block text-gray-700 font-medium mb-1"
            >
              Email Address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full h-10 px-4 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 transition duration-300"
              required
            />
          </div>

          {/* Password Field */}
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-gray-700 font-medium mb-1"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              className="w-full h-10 px-4 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 transition duration-300"
              required
            />
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full h-10 bg-[#092781] text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
          >
            Log In
          </button>
        </form>

        {/* Additional Links */}
        <div className="mt-4 text-center">
          <p className="text-gray-600">
            Don't have an account?{" "}
            <NavLink
              to="/register"
              className="text-blue-600 font-semibold hover:underline"
            >
              Sign Up
            </NavLink>
          </p>
          <p className="text-gray-600 mt-2">
            Forgot Password?{" "}
            <NavLink
              to="/forgot-password"
              className="text-blue-600 font-semibold hover:underline"
            >
              Reset Here
            </NavLink>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;


