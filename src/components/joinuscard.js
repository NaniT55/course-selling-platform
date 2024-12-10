import React from "react";
import { HiOutlineSparkles } from "react-icons/hi";

function JoinusCard() {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 flex items-center space-x-6 max-w-6xl mx-auto border-2 mt-8">
      <div className="border-2 p-2">
      <HiOutlineSparkles style={{fontSize:'30px'}}/>
      </div>
      <div className="flex-grow">
        <h3 className="text-l font-semibold text-gray-800">
          Step into a successful future with ORN-AI, where your career advancement is our priority.
          <br />
          Join us today and transform your professional journey!
        </h3>
      </div>
      <div>
        <button className="bg-[#382781] text-white py-2 px-6 rounded hover:bg-indigo-700 transition">
          Join Us
        </button>
      </div>
    </div>
  );
}

export default JoinusCard;
