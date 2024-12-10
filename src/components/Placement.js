import React from "react";
import { motion } from "framer-motion";

function Placement() {
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="p-4 bg-gray-200 min-h-screen">
      {/* Placement Cell Section */}
      <motion.div
        className="flex flex-col lg:flex-row items-center text-white rounded-lg p-6 mb-6 space-y-6 lg:space-y-0"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUpVariants}
      >
        {/* Placement Cell Text */}
        <div className="w-full lg:w-7/10 bg-gradient-to-r from-blue-950 to-blue-800 rounded-lg p-6 mr-12">
          <h1 className="text-3xl md:text-4xl font-bold">
            Placement{" "}
            <span className="bg-gradient-to-r from-sky-400 to-blue-600 text-transparent bg-clip-text">
              Cell
            </span>
          </h1>
          <p className="text-sm md:text-lg mt-4 leading-relaxed">
            ORN-AI Placement Cell in Association with Aguila Consulting, turns
            your training into a successful career. With a 100% placement
            guarantee, we offer comprehensive support including CV writing,
            technical grooming, and interview preparation. Our cross-technology
            training, combined with customizable programs, ensures you gain
            versatile skills, making you highly adaptable and employable.
            Real-world projects prepare you to be job-ready, while Aguila’s
            global network connects you to opportunities worldwide. Choose
            ORN-AI Placement Cell for a personalized and rewarding career
            journey.
          </p>
        </div>
        {/* CV Writing Card */}
        <motion.div
          className="w-full lg:w-[25%] h-[250px] flex flex-col items-start bg-white rounded-lg shadow-lg p-6"
          variants={fadeUpVariants}
        >
          <img
            src="../icons/profile-icon.png"
            alt="profile"
            className="w-16 h-16 mb-4"
          />
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-800">
            Professional CV Writing
          </h2>
        </motion.div>
      </motion.div>

      {/* Cards Section */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 m-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUpVariants}
      >
        {/* Card 1 */}
        <motion.div
          className="h-[250px] bg-white rounded-lg shadow-lg p-6 flex flex-col items-start"
          variants={fadeUpVariants}
        >
          <img
            src="../icons/file-icon.png"
            alt="file"
            className="w-16 h-16 mb-4"
          />
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-800">
            Bench Sales
          </h2>
        </motion.div>
        {/* Card 2 */}
        <motion.div
          className="h-[250px] bg-white rounded-lg shadow-lg p-6 flex flex-col items-start"
          variants={fadeUpVariants}
        >
          <img
            src="../icons/bulb-icon.png"
            alt="bulb"
            className="w-16 h-16 mb-4"
          />
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-800">
            Placement Assistance
          </h2>
        </motion.div>
        {/* Card 3 */}
        <motion.div
          className="h-[250px] bg-white rounded-lg shadow-lg p-6 flex flex-col items-start"
          variants={fadeUpVariants}
        >
          <img
            src="../icons/grad-icon.png"
            alt="grad"
            className="w-16 h-16 mb-4"
          />
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-800">
            Internship
          </h2>
        </motion.div>
        {/* Card 4 */}
        <motion.div
          className="h-[250px] bg-white rounded-lg shadow-lg p-6 flex flex-col items-start"
          variants={fadeUpVariants}
        >
          <img
            src="../icons/paper-icon.png"
            alt="paper"
            className="w-16 h-16 mb-4"
          />
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-800">
            Professional Network
          </h2>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Placement;
