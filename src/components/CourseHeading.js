import React from "react";
import { useParams } from "react-router-dom";
import { courseHeading } from '../constants/CourseHeadingData';

function CourseCard() {
  // Get category and courseKey from URL params
  const { category, courseKey } = useParams();

  // Find the specific course based on category and courseKey
  const course = courseHeading[category]?.[courseKey];

  if (!course) {
    return <div>Course not found</div>; // Handle case when course is not found
  }

  return (
    <div className="px-4 py-8">
      {/* Display single course card */}
      <div
        className="bg-cover bg-center py-16 h-[400px] bg-black w-full relative"
        style={{
          backgroundImage: `url('./subcourse-bg.png')`, // Replace with actual image URL
        }}
      >
        <div className="flex flex-col justify-center items-start text-white px-8 w-full">
          <h1 className="text-4xl font-bold mb-2">{course.title}</h1>
          <p className="text-xl mb-4">{course.tag}</p>
          <p className="text-lg mb-4">{course.description}</p>
          {course.youtubeID && (
            <div className="absolute bottom-4 right-4">
              <iframe
                width="560"
                height="315"
                src={`https://www.youtube.com/embed/${course.youtubeID}`}
                title={course.title}
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default CourseCard;