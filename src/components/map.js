import React from "react";

function Map() {
  return (
    <div className="bg-gradient-to-b from-gray-100 to-gray-300 py-12 px-6">
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <h1 className="text-4xl font-bold text-gray-800">Global Expansion</h1>
        <p className="text-gray-700 text-lg leading-relaxed">
          We’re broadening our reach into key European markets to provide expats 
          and international job seekers with tailored career support, including 
          CV writing, interview prep, skill upgrades, and networking opportunities, 
          tailored to the European job market's demands.
        </p>
        <div>
          <img
            src="./about-img/worldmap.png"
            alt="Map showing global expansion"
            className="w-full max-w-3xl mx-auto rounded-lg shadow-md"
          />
        </div>
      </div>
    </div>
  );
}

export default Map;
