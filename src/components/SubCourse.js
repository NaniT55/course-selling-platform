import React from "react";
import { NavLink } from "react-router-dom";

function SubCourseCard({ image, tag, title, description, link }) {
  return (
    <div className="bg-[#E2FFFF] shadow-md rounded-lg p-4 flex flex-col items-start text-start transition-transform hover:scale-105">
      <img
        src={image}
        alt={title}
        className="w-full h-40 object-cover rounded-md mb-4"
      />
      <span className="text-sm font-semibold text-teal-500 uppercase mb-2">
        {tag}
      </span>
      <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-sm text-gray-600 mb-4">{description}</p>
      <NavLink
        to={link}
        className="text-teal-500 font-semibold hover:underline"
      >
        Learn More &rarr;
      </NavLink>
    </div>
  );
}

export default SubCourseCard;
