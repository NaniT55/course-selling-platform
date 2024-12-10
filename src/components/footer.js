import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faMapLocationDot, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import { courseNavData } from "../constants/CourseNavData";

function Footer() {
  return (
    <footer className="bg-[#180E42] text-white py-8 mt-16">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        
        {/* Logo and Slogan */}
        <div className="col-span-1">
          <img
            src="./ORN-AI-logo.png"
            alt="Logo"
            className="h-20 mb-4"
          />
          <p className="text-lg italic mb-4">The Ultimate Learning Destination</p>
        </div>

        {/* Courses Section */}
        <div className="col-span-1">
          <h3 className="text-xl font-semibold mb-4">Courses</h3>
          <ul className="space-y-2">
            {courseNavData.map((course, index) => (
              <li key={index} className="flex items-center space-x-2">
                <FontAwesomeIcon icon={course.icon} className="hover:text-[#FFC107] " />
                <NavLink to={`/${course.key}`} className="hover:text-[#FFC107]">{course.title}</NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Social Media */}
        <div className="col-span-1">
          <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-6">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFacebook} size="2x" className="text-white hover:text-[#FFC107]" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faTwitter} size="2x" className="text-white hover:text-[#FFC107]" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} size="2x" className="text-white hover:text-[#FFC107]" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} size="2x" className="text-white hover:text-[#FFC107]" />
            </a>
          </div>
        </div>

        {/* Contact */}
        <div className="col-span-1">
          <h3 className="text-xl font-semibold mb-4">Contact</h3>
          <ul className="space-y-2">
            <li className="flex items-center">
              <a href="tel:+91 9059366967">
                <FontAwesomeIcon icon={faPhoneAlt} className="mr-2" />
                <span>+91 9059366967</span>
              </a>
            </li>
            <li className="flex items-center">
              <a href="mailto:connect@orn-ai.com">
                <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
                <span>connect@orn-ai.com</span>
              </a>
              
            </li>
            <li className="flex items-center">
              <FontAwesomeIcon icon={faMapLocationDot} className="mr-2" />
              <span>3rd floor T-hub 2.0, 20, Inorbit Mall Rd, Vittal Rao Nagar, Madhapur, Hyderabad, Telangana 500081</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-[#180E42] text-center py-4 mt-8">
        <div className="flex justify-center space-x-6 mb-2">
          <NavLink to="/terms" className="text-sm hover:text-teal-400">Terms</NavLink>
          <NavLink to="/privacy" className="text-sm hover:text-teal-400">Privacy</NavLink>
          <NavLink to="/refund-policy" className="text-sm hover:text-teal-400">Refund Policy</NavLink>
        </div>
        <p className="text-sm">
          &copy; {new Date().getFullYear()} ORN AI. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
