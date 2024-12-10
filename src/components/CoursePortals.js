import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

function CoursePortal() {
  const courses = [
    {
      title: "Cyber Security",
      description:
        "Gain foundational knowledge and practical skills to protect digital assets. Learn key concepts, threat mitigation strategies, and best practices. Join us to master safeguarding against cyber threats.",
      image: "./cybersecurity.png",
    },
    {
      title: "Data science and A.I",
      description:
        "Acquire essential skills in data analysis and AI development, focusing on key concepts and machine learning techniques. Join us to harness the transformative potential of data and artificial intelligence.",
      image: "./datascience.png",
    },
    {
      title: "Advanced Programs",
      description:
        "Learn essential skills in continuous integration, infrastructure automation, and collaboration tools. Master streamlined software development practices for modern environments.",
      image: "./advance-programs.png",
    },
    {
      title: "Business & Data Analytics",
      description:
        "Gain essential skills in data collection, statistical analysis, predictive modeling, and data visualization. Master tools and techniques to drive informed decision-making and enhance business performance through data insights.",
      image: "./business-analytics.png",
    },
    {
      title: "Technology Programs",
      description:
        "Learn essential skills in areas like infrastructure automation, collaboration tools, and modern software development practices to excel in today's technology landscape.",
      image: "./technology-programs.png",
    },
    {
      title: "Telecommunication",
      description:
        "Learn essential skills in network management, infrastructure optimization, and service deployment. Master streamlined practices for efficient telecommunications operations in modern environments.",
      image: "./telecommunication.png",
    },
    {
      title: "Science Programs",
      description:
        "Explore essential skills in scientific research, experimentation, and data analysis. Master advanced methodologies and tools for conducting impactful research in modern scientific environments.",
      image: "./science-programs.png",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % courses.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [courses.length]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % courses.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + courses.length) % courses.length
    );
  };

  return (
    <div className="relative px-10 py-12 ml-12">
      {/* Heading with fade-up animation */}
      <motion.div
        className="flex justify-between items-center mb-8"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h1 className="text-5xl font-bold">
          Course{" "}
          <span className="bg-gradient-to-r from-sky-400 to-indigo-800 text-transparent bg-clip-text">
            Portal
          </span>
        </h1>
        <div className="flex space-x-4">
          <button
            onClick={handlePrev}
            className="bg-white p-2 rounded-full shadow-lg"
          >
            &#8592;
          </button>
          <button
            onClick={handleNext}
            className="bg-white p-2 rounded-full shadow-lg"
          >
            &#8594;
          </button>
        </div>
      </motion.div>

      {/* Carousel with card animations */}
      <div className="flex overflow-hidden">
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${currentIndex * 33.33}%)` }}
        >
          {courses.map((course, index) => (
            <motion.div
              key={index}
              className="flex-shrink-0 w-1/4 px-4 py-6"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="bg-white p-6 rounded-lg shadow-xl border border-gray-200 flex flex-col justify-between h-full">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-42 object-cover rounded-md mb-4"
                />
                <div>
                  <h2 className="text-xl font-semibold mb-2">{course.title}</h2>
                  <p className="text-sm text-gray-700 mb-4">
                    {course.description}
                  </p>
                </div>
                <button className="w-full py-3 mt-auto bg-transparent border border-black text-black rounded-md hover:bg-gray-200">
                  View more
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CoursePortal;
