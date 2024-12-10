import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Register = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    userType: "student",
    termsAccepted: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { password, confirmPassword, termsAccepted } = formData;

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    if (!termsAccepted) {
      alert("You must accept the Terms & Conditions to proceed.");
      return;
    }

    console.log("Form Data Submitted:", formData);
  };

  return (
    <div className="h-full w-full bg-gradient-to-br from-blue-100 to-blue-300 flex items-center justify-center px-4 py-5 ">
  {/* Registration Form */}
  <div className="w-full md:w-3/4 lg:w-2/3 bg-white shadow-lg rounded-lg p-8 transform transition-transform duration-500 hover:scale-105">
    <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
      Create Your Account
    </h1>
    <form onSubmit={handleSubmit}>
      {/* Input Fields in 3 Rows and 2 Columns */}
      <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-3 gap-4 mb-4">
        {/* Full Name */}
        <div>
          <label htmlFor="fullName" className="block text-gray-600 font-medium">
            Full Name
          </label>
          <input
            type="text"
            name="fullName"
            id="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Enter your full name"
            className="w-[250px] h-8 px-4 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-gray-600 font-medium">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            className="w-[250px] h-8 px-4 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className="block text-gray-600 font-medium">
            Phone Number
          </label>
          <input
            type="tel"
            name="phone"
            id="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Enter your phone number"
            className="w-[250px] h-8 px-4 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>

        {/* Password */}
        <div>
          <label htmlFor="password" className="block text-gray-600 font-medium">
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Create a password"
            className="w-[250px] h-8 px-4 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>

        

        {/* User Type */}
        <div>
          <label htmlFor="userType" className="block text-gray-600 font-medium">
            I am a
          </label>
          <select
            name="userType"
            id="userType"
            value={formData.userType}
            onChange={handleChange}
            className="w-[250px] h-8 px-4 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            required
          >
            <option value="student">Student</option>
            <option value="professional">Professional</option>
          </select>
        </div>

        {/* Confirm Password */}
        <div>
          <label
            htmlFor="confirmPassword"
            className="block text-gray-600 font-medium"
          >
            Confirm Password
          </label>
          <input
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder="Confirm your password"
            className="w-[250px] h-8 px-4 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>
      </div>

      {/* Terms & Conditions */}
      <div className="mb-6 flex items-center">
        <input
          type="checkbox"
          name="termsAccepted"
          id="termsAccepted"
          checked={formData.termsAccepted}
          onChange={handleChange}
          className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
        />
        <label
          htmlFor="termsAccepted"
          className="ml-2 block text-gray-600 font-medium"
        >
          I agree to the{" "}
          <NavLink to="/terms" className="text-blue-600 hover:underline">
            Terms & Conditions
          </NavLink>
        </label>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full h-12 bg-[#092781] text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
      >
        Register
      </button>
    </form>
  </div>
</div>

  );
}
export default Register;


