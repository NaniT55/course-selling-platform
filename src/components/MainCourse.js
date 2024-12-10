import React from "react";
import { useParams } from "react-router-dom";
import { courses } from "../constants/CourseData"; // Import the course data
import SubCourseCard from "./SubCourse";
import PageHeading from "./PageHeading";

function CoursePage() {
  const { courseKey } = useParams(); // Get the courseKey from the URL
  const courseData = courses[courseKey]; // Fetch the corresponding course data

  if (!courseData) {
    return (
      <div className="text-center py-20">
        <h1 className="text-3xl font-bold text-gray-800">Course Not Found</h1>
        <p className="text-gray-600 mt-4">
          The course you are looking for does not exist. Please check the URL or go back to the homepage.
        </p>
      </div>
    );
  }

  return (
    <>
        <PageHeading name={courseData.mainCourseTitle}/>
        <div className="px-6 py-12 bg-gray-100 m-12">
      {/* Main Course Title */}
      {/* <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">
        {courseData.mainCourseTitle}
      </h1> */}
      

      {/* Sub-Courses */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto ">
        {courseData.subCourses.map((subCourse, index) => (
          <SubCourseCard
            key={index}
            image={subCourse.image}
            tag={subCourse.tag}
            title={subCourse.title}
            description={subCourse.description}
            link={subCourse.link}
            
          />
        ))}
      </div>
    </div>
    </>
    
  );
}

export default CoursePage;


