import React from "react";
import { motion } from "framer-motion";

function Result() {
  const results = [
    {
      value: "100%",
      description: "Internship & Job Assistance",
      image: "./icon-img/mappointer.png",
    },
    {
      value: "100+",
      description: "Market-Aligned Courses",
      image: "./icon-img/checkbook.png",
    },
    {
      value: "10+",
      description: "Years of Experience",
      image: "./icon-img/increasinggraph.png",
    },
    {
      value: "1000+",
      description: "Placed globally",
      image: "./icon-img/awarding.png",
    },
  ];

  return (
    <div className="bg-black py-12 ">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4 md:px-8">
        {results.map((result, index) => (
          <motion.div
            key={index}
            className="bg-black shadow-lg rounded-lg p-6 flex flex-col items-center text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <img
              src={result.image}
              alt={result.value}
              className="w-16 h-16 mb-4"
            />
            <h1 className="text-5xl font-bold text-white mb-2">
              {result.value}
            </h1>
            <h2 className="text-xl font-bold text-white">
              {result.description}
            </h2>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Result;

