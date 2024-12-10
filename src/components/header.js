import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { ChevronDownIcon } from "@heroicons/react/solid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { courseNavData } from "../constants/CourseNavData";

function Header() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className="bg-[#340385] text-white shadow-md sticky top-0 z-50 ">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div>
          <img
            src="./ORN-AI-logo.png"
            alt="ORN AI Logo"
            className="h-16 md:h-20 object-contain"
          />
        </div>

        {/* Hamburger Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>

        {/* Navigation */}
        <nav
          className={`${
            isMobileMenuOpen ? "block" : "hidden"
          } md:flex flex-col md:flex-row md:items-center md:space-x-6 bg-gray-900 md:bg-transparent w-full md:w-auto absolute md:relative top-[70px] left-0 md:top-0 px-6 py-4 md:py-0 shadow-lg md:shadow-none`}
        >
          <NavLink
            to="/"
            className="block md:inline-block text-lg font-semibold py-2 border-b md:border-none border-gray-700 hover:text-[#FF5722] transition-colors"
          >
            Home
          </NavLink>

          {/* Dropdown for Courses */}
          <div
            className="relative group block md:inline-block"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <button
              className="text-lg font-semibold py-2 border-b md:border-none border-gray-700 hover:text-[#FF5722] transition-colors flex items-center space-x-2"
              onClick={toggleDropdown}
            >
              <span>Courses</span>
              <ChevronDownIcon
                className={`w-5 h-5 text-white transition-transform transform ${
                  isDropdownOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* Dropdown Menu */}
            <div
              className={`absolute left-0 ${
                isDropdownOpen ? "block" : "hidden"
              } bg-[#F5F5F5] text-white shadow-lg  rounded-lg w-[650px] p-4`}
            >
              <div className="grid grid-cols-2 gap-4">
                {courseNavData.map((course, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <FontAwesomeIcon
                      icon={course.icon}
                      size="1x"
                      className="text-black mt-2 hover:text-[#FF5722]"
                    />
                    <div>
                      <NavLink
                        to={`/${course.key}`}
                        className="text-sm text-black font-semibold hover:text-[#FF5722]"
                      >
                        {course.title}
                      </NavLink>
                      <p className="text-xs text-gray-800">
                        {course.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <NavLink
            to="/groomingplans"
            className="block md:inline-block text-lg font-semibold py-2 border-b md:border-none border-gray-700 hover:text-[#FF5722] transition-colors"
          >
            Grooming Plans
          </NavLink>
          <NavLink
            to="/about"
            className="block md:inline-block text-lg font-semibold py-2 hover:text-[#FF5722] transition-colors"
          >
            About Us
          </NavLink>
          <div className="hidden md:flex space-x-4 items-center">
            <button className="px-6 py-2  text-white rounded-lg hover:bg-[#FF5722] transition" onClick={() => navigate("/login")}>
              Log in
            </button>
            <button className="px-6 py-2 border-2 border-[#FFC107] text-white rounded-lg hover:bg-[#FFC107] transition" onClick={() => navigate("/register")}>
              Register
            </button>
          </div>
          <div className="mt-4 md:hidden space-y-4">
            <button className="w-full px-6 py-2 text-white rounded-lg hover:bg-[#FF5722] transition" onClick={() => navigate("/login")}>
              Log in
            </button>
            <button className="w-full px-6 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition" onClick={() => navigate("/register")}>
              Register
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
