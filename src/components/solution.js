import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faChalkboardTeacher, faHandsHelping, faExchangeAlt, faGraduationCap, faLifeRing } from '@fortawesome/free-solid-svg-icons';

function Solution() {
  const solutions = [
    {
      icon: faPen,
      title: 'Tailored CV Writing',
      description: 'Personalized CVs designed to attract employers.',
    },
    {
      icon: faChalkboardTeacher,
      title: 'Cross-Technology Training',
      description: 'Versatile, market-relevant skills across multiple technologies.',
    },
    {
      icon: faHandsHelping,
      title: 'Hands-on Practice',
      description: 'Real-world skills development in a practical learning environment.',
    },
    {
      icon: faExchangeAlt,
      title: 'Interview Preparation',
      description: 'Extensive resources including e-books, Q&A sessions, and expert-led live sessions.',
    },
    {
      icon: faGraduationCap,
      title: 'Placement Services with 100% Job Guarantee',
      description: 'Merit-based placements that match career aspirations.',
    },
    {
      icon: faLifeRing,
      title: 'Ongoing Career Support',
      description: 'Continuous assistance to promote long-term career growth.',
    },
  ];

  return (
    <div className="bg-gradient-to-b from-indigo-50 to-indigo-100 py-12 px-6">
      {/* Heading Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-indigo-900 mb-4">Our Comprehensive Solution</h1>
        <h3 className="text-lg text-indigo-700">
          ORN-AI offers a transparent, ethical path to career success
        </h3>
      </div>
      <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {solutions.map((solution, index) => (
          <div
            key={index}
            className="bg-white rounded-lg p-6 text-center transition-all duration-300 "
          >
            <div className="text-black-500 text-4xl mb-4 ">
              <FontAwesomeIcon icon={solution.icon} />
            </div>
            <h1 className="text-xl font-semibold mb-2">{solution.title}</h1>
            <p className="text-gray-600" >{solution.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Solution;
