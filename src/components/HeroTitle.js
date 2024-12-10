import React from "react";

function HeroTitle() {
  return (
    <div className="flex flex-col items-start justify-center text-left bg-white py-12 px-6 space-y-6 ml-12">
      <h1 className="text-3xl font-bold leading-snug md:text-2xl lg:text-4xl ">
        Learn Purposefully and <br /> Lead Passionately:
        <br />
        An Innovative Approach<br /> to Generative{" "}<br />
        <span className="bg-gradient-to-r from-sky-400 to-indigo-800 text-transparent bg-clip-text">
          AI Professional Training
        </span>
      </h1>
      <button className="px-6 py-3 bg-[#FFC107] text-white font-semibold text-lg rounded-3xl shadow-md hover:bg-[#8BC34A] transition duration-300">
        REGISTER
      </button>
    </div>
  );
}

export default HeroTitle;

