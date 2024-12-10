import React from "react";
import { motion } from "framer-motion";

function KeyFeatures() {
  const keyfeatures = [
    {
      id: 1,
      description: "One-on-One Career Guidance and Counseling",
      image: "./icon-img/chat.png",
    },
    {
      id: 2,
      description: "Interactive Sessions",
      image: "./icon-img/bulb.png",
    },
    {
      id: 3,
      description: "Real-time Projects",
      image: "./icon-img/like.png",
    },
    {
      id: 4,
      description: "Career Impact Programs",
      image: "./icon-img/climbing.png",
    },
  ];

  return (
    <div className="bg-black py-12">
      
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4 md:px-8">
        {keyfeatures.map((keyfeature, index) => (
          <motion.div
            key={keyfeature.id}
            className="bg-black shadow-lg rounded-lg p-6 flex flex-col items-center text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <img
              src={keyfeature.image}
              alt={`Feature ${keyfeature.id}`}
              className="w-16 h-16 mb-4"
            />
            <h2 className="text-xl font-semibold text-white">
              {keyfeature.description}
            </h2>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default KeyFeatures;
