import React from "react";

const DataScientistProgram = {
  title: "Data Scientist Program",
  overview: {
    description:
      "The Data Scientist program is designed to provide deep insights and practical skills in data analytics, machine learning, and advanced data management. This comprehensive course will empower you to analyze, interpret, and leverage data effectively across various business contexts.",
    targetAudience: [
      "Aspiring Data Analysts",
      "Data Scientists",
      "Machine Learning Engineers",
      "IT Professionals",
    ],
  },
  details: {
    expertSessions: "Comprehensive training through expert sessions",
    quizzesAndAssessments: true,
    language: "English",
    premiumContent: true,
    subtitles: "English",
    certificate: true,
  },
  learningOutcomes: [
    "Data Analyst",
    "Data Scientist",
    "Business Intelligence Analyst",
    "Machine Learning Engineer",
    "Database Administrator",
  ],
  skillsAcquired: [
    "Data Analytics",
    "Python Programming",
    "Machine Learning",
    "Statistical Analysis",
    "SQL Database Management",
    "Data Visualization with Tableau and Power BI",
  ],
  careerReadiness: [
    "Data Analyst",
    "Data Scientist",
    "Business Intelligence Analyst",
    "Machine Learning Engineer",
    "Database Administrator",
  ],
  entryRequirements: [
    "Basic knowledge of programming.",
    "Familiarity with the fundamentals of databases and data structures.",
    "A strong inclination towards data-driven problem solving.",
  ],
  instructors: [
    "Courses are conducted by industry experts with extensive experience in data science and analytics.",
  ],
  coursesIncluded: [
    "Data Analytics Basics - Including Python, NumPy, and Pandas fundamentals.",
    "Statistical Analysis - Covering everything from probability to complex statistical methods.",
    "SQL Server Management - Learn to handle databases with proficiency.",
    "Data Visualization - Mastering Tableau and Power BI to present data effectively.",
    "Machine Learning - From theory to practical application using Python.",
  ],
};

const DSCourse = () => {
  const {
    title,
    overview,
    details,
    learningOutcomes,
    skillsAcquired,
    careerReadiness,
    entryRequirements,
    instructors,
    coursesIncluded,
  } = DataScientistProgram;

  return (
    <div className="course-page p-8">
      {/* Course Title */}
      <h1 className="text-4xl font-bold mb-4">{title}</h1>

      {/* Overview */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Overview</h2>
        <p className="text-gray-700">{overview.description}</p>
        <h3 className="text-xl font-medium mt-4">Target Audience</h3>
        <ul className="list-disc pl-6">
          {overview.targetAudience.map((audience, index) => (
            <li key={index} className="text-gray-700">
              {audience}
            </li>
          ))}
        </ul>
      </section>

      {/* Details */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Course Details</h2>
        <p>{details.expertSessions}</p>
        <ul className="list-disc pl-6">
          <li>Language: {details.language}</li>
          <li>Subtitles: {details.subtitles}</li>
          <li>Certificate: {details.certificate ? "Yes" : "No"}</li>
          <li>Premium Content: {details.premiumContent ? "Available" : "Not Available"}</li>
        </ul>
      </section>

      {/* Learning Outcomes */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Learning Outcomes</h2>
        <ul className="list-disc pl-6">
          {learningOutcomes.map((outcome, index) => (
            <li key={index} className="text-gray-700">
              {outcome}
            </li>
          ))}
        </ul>
      </section>

      {/* Skills Acquired */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Skills Acquired</h2>
        <ul className="list-disc pl-6">
          {skillsAcquired.map((skill, index) => (
            <li key={index} className="text-gray-700">
              {skill}
            </li>
          ))}
        </ul>
      </section>

      {/* Career Readiness */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Career Readiness</h2>
        <ul className="list-disc pl-6">
          {careerReadiness.map((career, index) => (
            <li key={index} className="text-gray-700">
              {career}
            </li>
          ))}
        </ul>
      </section>

      {/* Entry Requirements */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Entry Requirements</h2>
        <ul className="list-disc pl-6">
          {entryRequirements.map((requirement, index) => (
            <li key={index} className="text-gray-700">
              {requirement}
            </li>
          ))}
        </ul>
      </section>

      {/* Instructors */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Instructors</h2>
        <p>{instructors}</p>
      </section>

      {/* Courses Included */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Courses Included</h2>
        <ul className="list-disc pl-6">
          {coursesIncluded.map((course, index) => (
            <li key={index} className="text-gray-700">
              {course}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default DSCourse;
