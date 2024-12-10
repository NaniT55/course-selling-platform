import React from "react";

function VisionMission() {
  return (
    <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 px-6 py-16 bg-gradient-to-b from-white to-gray-100 m-12">
      <div className="lg:w-1/2 text-gray-800">
        <h1 className="text-3xl font-bold text-black-600 mb-4">Our Vision</h1>
        <p className="text-lg leading-relaxed mb-8 text-gray-700">
          We empower individuals worldwide by delivering top-quality,
          career-oriented education with guaranteed job placements, fostering
          equal opportunities and shaping the future of work through innovative
          training and ethical career-building.
        </p>
        <h1 className="text-3xl font-bold text-black-600 mb-4">Our Mission</h1>
        <p className="text-lg leading-relaxed text-gray-700">
          We unlock potential globally by offering high-quality, accessible, and
          innovative education. Whether you're kickstarting a new career,
          upgrading your skills, or seeking enrichment, ORN-AI is your learning
          partner at the cutting edge of industry developments.
        </p>
      </div>
      <div className="relative lg:w-1/2">
        <img
          src="./about-img/about3.png"
          alt="about3"
          className="w-full h-auto max-h-[450px] rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-500"
        />
      </div>
    </div>
  );
}

export default VisionMission;
