import React from "react";

function Choose() {
  const choose = [
    {
      title: '100% Placement and Internship Guarantee',
      description: 'Commit to your career success with our guaranteed placement and internship opportunities for every subscriber.'
    },
    {
      title: 'Flexible Learning',
      description: 'Advance at your own pace with our hybrid approach of self-paced videos and live expert sessions.'
    },
    {
      title: 'Dynamic Training',
      description: 'Engage with our 100+ AI-driven courses that evolve to match current industry demands.'
    },
    {
      title: 'Cross-Technology Skills',
      description: 'Develop a broad set of skills across various technologies to excel in a dynamic job market.'
    },
    {
      title: 'Expert Guidance',
      description: 'Benefit from personalized coaching and insights from experienced industry professionals.'
    },
    {
      title: 'Comprehensive Career Support',
      description: 'We provide end-to-end career support, from CV crafting to interview preparation, ensuring you are fully equipped for the job market.'
    },
    {
      title: 'Global Reach',
      description: 'Our programs are designed to equip you for success both locally and internationally.'
    },
    {
      title: 'Proven Expertise',
      description: 'Leverage the ten years of global placement and internship experience that Aguila Consulting brings to the table.'
    }
  ];

  return (
    <div className="py-12 px-6 bg-gray-100 ml-12">
      <h1 className="text-4xl font-bold text-left mb-8">
        Why Choose <span className="bg-gradient-to-r from-sky-400 to-indigo-800 text-transparent bg-clip-text">ORN-AI?</span>
      </h1>

      <div className="flex flex-col md:flex-row items-start justify-between gap-8">
        <div className="flex-1">
          <ul>
            {choose.map((item, index) => (
              <li key={index} className="mb-3"> {/* Reduced margin between items */}
                <h2 className="text-lg font-semibold leading-tight">{item.title}:</h2> {/* Reduced font size and line height */}
                <p className="text-base text-gray-700 leading-tight">{item.description}</p> {/* Reduced font size and line height */}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex-1 mt-8 md:mt-0">
          <img src="./graphic.png" alt="graphic" className="w-full h-88 object-contain" /> {/* Match the image height */}
        </div>
      </div>
    </div>
  );
}

export default Choose;
