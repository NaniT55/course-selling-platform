import React from "react";
import { useParams } from "react-router-dom";
import { course } from "../constants/IndividualCourseData";
import {
  FaRegClosedCaptioning,
  FaRegClock,
  FaRegFileAlt,
} from "react-icons/fa";
import { LuFileCheck } from "react-icons/lu";
import { IoLanguageSharp } from "react-icons/io5";
import { PiShootingStarDuotone } from "react-icons/pi";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { RiShieldCheckLine } from "react-icons/ri";
import { IoMdContacts } from "react-icons/io";
import { BsGraphUpArrow } from "react-icons/bs";

function CourseDetails() {
  const { mainCourse, subCourse } = useParams();

  // Find the main course and sub-course data
  const mainCourseData = course[mainCourse];
  const subCourseData = mainCourseData?.[subCourse];

  // Handle invalid course or sub-course
  if (!mainCourseData || !subCourseData) {
    return (
      <div className="flex items-center justify-center h-screen">
        <h1 className="text-center text-3xl font-bold text-red-500">
          Course Not Found
        </h1>
      </div>
    );
  }

  // Destructure sub-course details
  const {
    // title,
    heading,
    tag,
    subinfo,
    youtubeID,
    overview: { description, targetAudience },
    details,
    learningOutcomes,
    skillsAcquired,
    careerReadiness,
    entryRequirements,
    skillQuestCertificationBenefits,
    certificate,
    instructors,
    accelerateYourCareer,
    coursesIncluded,
  } = subCourseData;

  return (
    <>
      <div className="w-full ">
        {/* Display single course card */}
        <div
          className="bg-cover bg-center py-16 h-[400px] bg-black w-full relative flex items-center"
          style={{
            backgroundImage: `url('../subcourse-bg.png')`, // Replace with actual image URL
          }}
        >
          {/* Left Side: Text Content */}
          <div className="flex flex-col justify-center text-white px-8 w-2/3 ml-12">
            <h2 className="text-4xl font-semibold mb-4">Skill Quest:</h2>
            <h1 className="text-5xl font-bold mb-2">{heading}</h1>
            <h2 className="text-xl font-semibold mb-4">{tag}</h2>
            <h3 className="text-lg font-semibold">{subinfo}</h3>
          </div>

          {/* Right Side: YouTube Video */}
          {youtubeID && (
            <div className="w-1/3 flex justify-end pr-8 absolute top-[200px] right-4 ">
              <iframe
                width="100%"
                height="215"
                src={`https://www.youtube.com/embed/${youtubeID}`}
                title="YouTube video"
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-lg"
              ></iframe>
            </div>
          )}
        </div>
      </div>

      <div className="max-w-6xl mx-auto p-6 ">
        {/* Course Header */}
        <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-[90px] py-12 px-2">
          <div className="bg-white  p-4 mb-6 w-[70%]">
            <h1 className="text-3xl font-semibold text-gray-900">Overview</h1>
            <p className="text-gray-700 mt-2 font-semibold">{description}</p>
            <Section title="Target Audience" items={targetAudience} />
            <div className="bg-[#D1FADF] text-start p-3 mt-4 rounded-lg">
              <h2 className="text-[#556175] text-xl font-semibold">
                Courses Included in This Skill Quest
              </h2>
              <h3 className="text-[#556175] text-lg font-semibold">
                Note: Detailed syllabus available post-enrollment.
              </h3>
            </div>
          </div>
          <Section title="">
            <ul className="list-none">
              <li className="bg-[#D1FADF] text-[#556175] text-lg font-semibold px-2 py-2 mb-3 rounded-lg w-[300px]">
                <div className="flex flex-row gap-2 items-center relative">
                  <FaRegClock />
                  <p>
                    Expert Sessions:{" "}
                    <span className="absolute right-0">
                      {details.expertSessions}
                    </span>
                  </p>{" "}
                </div>
              </li>
              <li className="bg-[#D1FADF] text-[#556175] text-lg font-semibold px-2 py-2 mb-3 rounded-lg w-[300px]">
                <div className="flex flex-row gap-2 items-center relative">
                  <LuFileCheck />
                  <p>
                    Quizzes and Assessments:{" "}
                    <span className="absolute right-0">
                      {details.quizzesAndAssessments}
                    </span>
                  </p>{" "}
                </div>
              </li>
              <li className="bg-[#D1FADF] text-[#556175] text-lg font-semibold px-2 py-2 mb-3 rounded-lg w-[300px]">
                <div className="flex flex-row gap-2 items-center relative">
                  <IoLanguageSharp />
                  <p>
                    Language:{" "}
                    <span className="absolute right-0">{details.language}</span>
                  </p>{" "}
                </div>
              </li>
              <li className="bg-[#D1FADF] text-[#556175] text-lg font-semibold px-2 py-2 mb-3 rounded-lg w-[300px]">
                <div className="flex flex-row gap-2 items-center relative">
                  <PiShootingStarDuotone />
                  <p>
                    Premium Content:{" "}
                    <span className="absolute right-0">
                      {details.premiumContent ? details.premiumContent : "No"}
                    </span>
                  </p>{" "}
                </div>
              </li>
              <li className="bg-[#D1FADF] text-[#556175] text-lg font-semibold px-2 py-2 mb-3 rounded-lg w-[300px]">
                <div className="flex flex-row gap-2 items-center relative">
                  <FaRegClosedCaptioning />
                  <p>
                    Subtitles:{" "}
                    <span className="absolute right-0">
                      {details.subtitles ? "English" : "No"}
                    </span>
                  </p>{" "}
                </div>
              </li>
              <li className="bg-[#D1FADF] text-[#556175] text-lg font-semibold px-2 py-2 rounded-lg w-[300px]">
                <div className="flex flex-row gap-2 items-center relative">
                  <FaRegFileAlt />
                  <p>
                    Certificate of completion:{" "}
                    <span className="absolute right-0">
                      {details.certificate ? "Yes" : "No"}
                    </span>
                  </p>{" "}
                </div>
              </li>
            </ul>
          </Section>
        </div>

        <hr className="border-t-1 border-gray-300" />
        <div className=" p-6">
          <Section title="Learning Outcomes" items={learningOutcomes} />
          <Section title="Skills Acquired" items={skillsAcquired} />
          <Section title="Career Readiness" items={careerReadiness} />
          <Section title="Entry Requirements" items={entryRequirements} />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            {/* Skill Quest Certification Benefits */}
            <div className="flex flex-col items-start justify-evenly border border-gray-400 rounded-xl p-9 h-[360px]">
              <div className="bg-[#D3F6C1] p-5 rounded-full ">
              <RiShieldCheckLine style={{ color: "#72A681", fontSize: "2rem" }}/>
              </div>
              <h2 className="text-2xl font-semibold">
                Skill Quest Certification Benefits:
              </h2>
              <p className="text-gray-700 font-semibold text-lg">
                {skillQuestCertificationBenefits?.join(", ")}
              </p>
            </div>

            {/* Certificate Image */}
            <div className="flex items-center justify-center border border-gray-400 rounded-xl h-[360px]">
              <img
                src={certificate}
                alt="certificate"
                className="object-cover h-full w-full rounded-xl"
              />
            </div>

            {/* Instructors */}
            <div className="flex flex-col items-start justify-evenly border border-gray-400 rounded-xl p-9 h-[360px]">
              <div className="bg-[#D3F6C1] p-5 rounded-full ">
                <IoMdContacts style={{ color: "#72A681", fontSize: "2rem" }}/>
              </div>
              <h2 className="text-2xl font-semibold">Instructors:</h2>
              <p className="text-gray-700 font-semibold text-lg">
                {instructors?.join(", ")}
              </p>
            </div>

            {/* Accelerate Your Career */}
            <div className="flex flex-col items-start justify-evenly border border-gray-400 rounded-xl p-9 h-[360px]">
              <div className="bg-[#D3F6C1] p-5 rounded-full ">
              <BsGraphUpArrow style={{ color: "#72A681", fontSize: "2rem" }}/>
              </div>
              <h2 className="text-2xl font-semibold ">
                Accelerate Your Career:
              </h2>
              <p className="text-gray-700 font-semibold text-lg">
                {accelerateYourCareer?.join(", ")}
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-semibold mt-6">Courses Included</h2>
          <ul className="list-none pl-6 mt-2">
            {coursesIncluded?.map((course, index) => (
              <li
                key={index}
                className="text-gray-700 list-decimal font-semibold text-lg"
              >
                {course.title} ({course.hours} hours)
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="bg-gray-50 py-12 m-12">
        {/* Pricing Section Header */}
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="text-[#12B76A] font-semibold text-lg tracking-wide uppercase">
            Pricing
          </h1>
          <h2 className="text-[#211F54] font-bold text-3xl mt-2">
            Enrollment Plans
          </h2>
          <p className="text-[#6E7191] text-md mt-4">
            Choose from three active plans:
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6 lg:px-12 mx-12">
          {/* Card 1 */}
          <div className="bg-[#D1FADF] shadow-lg rounded-2xl text-center py-8 px-6 border border-[#D1FADF] flex flex-col justify-between min-h-[300px] transition-transform duration-300 transform hover:scale-105 hover:bg-[#12B76A] hover:text-white">
            <div>
              <h2 className="text-xl font-semibold">
                Access Only This Skill Quest
              </h2>
            </div>
            <hr className="border-t-2 border-gray-300 my-6 w-3/4 mx-auto" />
            <button className="bg-white text-[#12B76A] px-6 py-2 rounded-full font-medium shadow-md hover:transition duration-300 transform hover:scale-110">
              Get Started
            </button>
          </div>

          {/* Card 2 */}
          <div className="bg-[#D1FADF] shadow-lg rounded-2xl text-center py-8 px-6 border border-[#D1FADF] flex flex-col justify-between min-h-[300px] transition-transform duration-300 transform hover:scale-105 hover:bg-[#12B76A] hover:text-white">
            <div>
              <h2 className="text-xl font-semibold">
                Skill Quest + ORN-AI Career LaunchPad
              </h2>
            </div>
            <hr className="border-t-2 border-gray-300 my-6 w-3/4 mx-auto" />
            <button className="bg-white text-[#12B76A] px-6 py-2 rounded-full font-medium shadow-md hover:transition duration-300 transform hover:scale-110">
              Get Started
            </button>
          </div>

          {/* Card 3 */}
          <div className="bg-[#D1FADF] shadow-lg rounded-2xl text-center py-8 px-6 border border-[#D1FADF] flex flex-col justify-between min-h-[300px] transition-transform duration-300 transform hover:scale-105 hover:bg-[#12B76A] hover:text-white">
            <div>
              <h2 className="text-xl font-semibold">ORN-AI Enterprise</h2>
              <p className="text-[#777A91] mt-2 text-sm">
                Customized solutions for team training.
              </p>
            </div>
            <hr className="border-t-2 border-gray-300 my-6 w-3/4 mx-auto" />
            <button className="bg-white text-[#12B76A] px-6 py-2 rounded-full font-medium shadow-md hover:transition duration-300 transform hover:scale-110">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

// Section Component for Reusability
const Section = ({ title, items, children }) => (
  <div className="mt-6">
    <h2 className="text-2xl font-semibold">{title}</h2>
    {items ? (
      <ul className="list-none pl-6 mt-2">
        {items.map((item, index) => (
          <li key={index} className="text-gray-700 font-semibold text-lg">
            <div className="flex flex-row items-center">
              <MdKeyboardDoubleArrowRight style={{ color: "#00D7DC" }} />
              {item}
            </div>
          </li>
        ))}
      </ul>
    ) : (
      children
    )}
  </div>
);

export default CourseDetails;
