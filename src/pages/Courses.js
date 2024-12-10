import React from "react";
import {courses} from "../constants/IndividualCourseData"
import { useParams } from 'react-router-dom';

function IndividualCourse() {
  const { category, courseId } = useParams(); // Get dynamic course ID from the URL

  const course = courses[category]?.[courseId]; // Access the specific course data

  if (!course) {
    return <div>Course not found.</div>; // If course doesn't exist
  }

  return (
    <div className="course-page">
      <h1>{course.title}</h1>
      <h2>{course.subtitle}</h2>

      <section>
        <h3>Overview</h3>
        <p>{course.overview.description}</p>
        <h4>Target Audience</h4>
        <ul>
          {course.overview.targetAudience.map((audience, index) => (
            <li key={index}>{audience}</li>
          ))}
        </ul>
      </section>

      <section>
        <h3>Course Details</h3>
        <p><strong>Expert Sessions:</strong> {course.details.expertSessions}</p>
        <p><strong>Quizzes and Assessments:</strong> {course.details.quizzesAndAssessments}</p>
        <p><strong>Language:</strong> {course.details.language}</p>
        <p><strong>Premium Content:</strong> {course.details.premiumContent}</p>
        <p><strong>Certificate:</strong> {course.details.certificate ? "Yes" : "No"}</p>
      </section>

      <section>
        <h3>Learning Outcomes</h3>
        <ul>
          {course.learningOutcomes.map((outcome, index) => (
            <li key={index}>{outcome}</li>
          ))}
        </ul>
      </section>

      <section>
        <h3>Skills Acquired</h3>
        <ul>
          {course.skillsAcquired.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </section>

      <section>
        <h3>Career Readiness</h3>
        <ul>
          {course.careerReadiness.map((career, index) => (
            <li key={index}>{career}</li>
          ))}
        </ul>
      </section>

      <section>
        <h3>Entry Requirements</h3>
        <ul>
          {course.entryRequirements.map((req, index) => (
            <li key={index}>{req}</li>
          ))}
        </ul>
      </section>

      <section>
        <h3>Instructors</h3>
        <p>{course.instructors}</p>
      </section>

      <section>
        <h3>Courses Included</h3>
        <ul>
          {course.coursesIncluded.map((subCourse, index) => (
            <li key={index}>{subCourse.title} - {subCourse.hours} hours</li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default IndividualCourse;




