import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane, faPlaneUp, faRocket, faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import "animate.css";
import PageHeading from "../components/PageHeading";

const plans = [
  {
    id: 1,
    title: "Plan 1",
    name: "Candid Coach",
    description:
      "ORN-AI offers three comprehensive career grooming programs tailored to help you secure promising job opportunities.",
    icon: faPaperPlane,
    features: [
      "Personal Interview Tips",
      "Presenting Yourself as an Ideal Candidate",
      "Workshop participation",
      "Professional CV writing",
    ],
  },
  {
    id: 2,
    title: "Plan 2",
    name: "Skill Builder",
    description: "Grooming on technical interview skills:",
    icon: faPlaneUp,
    features: [
      "Technical Training, Critical Thinking, Problem Solving, and Decision Making",
      "Workshops to enrich practical knowledge",
      "Exchange of knowledge through peer teaching and learning",
      "Academic Project",
    ],
  },
  {
    id: 3,
    title: "Plan 3",
    name: "Career Launchpad",
    description: "Blend of Plans 1 and 2",
    icon: faRocket,
    features: [
      "Internship Opportunities",
      "Job Analysis Training",
      "Job Searching Support",
      "AI-Based Mock Interviews",
      "Professional Networking Training",
      "Bench Sales",
    ],
  },
];

function GroomingPlans() {
  return (
    <>
      <PageHeading name="Grooming Plans"/>
      <div className="bg-[#EDECFF] py-12 px-4 ">
      <div className="max-w-6xl mx-auto text-center mb-8">
        <h1 className="text-4xl font-bold mb-4 text-[#211F54]">ORN-AI GROOMING PLANS</h1>
        <p className="text-lg text-gray-400">
          ORN-AI offers three comprehensive career grooming programs tailored to help you secure promising job opportunities.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 m-12">
        {plans.map((plan) => (
          <div
            key={plan.id}
            className="bg-white shadow-lg rounded-lg p-6 flex flex-col transition-all duration-300 hover:bg-black hover:text-white animate__animated animate__fadeInUp"
          >
            <div className="flex items-center mb-4">
              <FontAwesomeIcon
                icon={plan.icon}
                className="text-indigo-500 text-4xl mr-4 hover:text-white"
              />
              <div>
                <h2 className="text-2xl font-bold">{plan.title}</h2>
                <h3 className="text-xl font-bold">{plan.name}</h3>
              </div>
            </div>

            {/* Line Separator */}
            <div className="border-b-2 border-gray-300 my-4 flex"></div>

            {/* Features Section */}
            <ul className="text-left space-y-2 mb-6 flex-grow">
              <h3 className="text-xl font-semibold">What's included</h3>
              {plan.features.map((feature, index) => (
                <li
                  key={index}
                  className="flex items-center space-x-2 text-grey-800 "
                >
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="text-indigo-500 hover:text-white"
                  />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <div className="text-center">
              <button className="bg-indigo-500 font-semibold text-white py-2 px-4 rounded-3xl hover:bg-white hover:text-indigo-500 transition w-full">
                Get Started
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
}

export default GroomingPlans;

