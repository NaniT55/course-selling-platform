import React from "react";

function Welcome() {
  return (
    <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 px-6 py-12 bg-gradient-to-b from-white to-gray-100 m-12">
      <div className="relative flex-shrink-0 w-full lg:w-1/2">
        <img
          src="./about-img/about1.png"
          alt="about1"
          className="w-full h-[450px] rounded-lg shadow-lg animate-popup"
        />
        <img
          src="./about-img/about2.png"
          alt="about2"
          className="absolute w-1/3 h-auto bottom-[-10px] right-[-10px] top-[300px] rounded-lg shadow-lg transform scale-110 border-4 border-white animate-popup"
        />
      </div>
      <div className="lg:w-1/2 text-gray-800">
        <h3 className="text-xl font-semibold text-indigo-600 mb-2">About ORN-AI</h3>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Welcome to ORN-AI E-learning
        </h1>
        <p className="text-lg leading-relaxed text-gray-700">
          ORN-AI champions the transformative power of education as a boutique
          training platform, providing tailored, high-quality career development
          solutions. Specializing in cross-technology training, personalized CV
          writing, interview preparation, and placement services, we offer a
          hands-on learning experience that addresses the unique needs of each
          candidate. Focused on underserved regions, expats, and niche markets,
          ORN-AI combines expert-led sessions with AI-powered content, delivering
          holistic, career-focused training that ensures long-term success in
          today’s competitive job market. From Cyber Security to Business
          Management, our courses are crafted to build expertise and confidence.
        </p>
      </div>
    </div>
  );
}

export default Welcome;
