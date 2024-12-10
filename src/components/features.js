import React from "react";

function Features() {
  const features = [
    {
      title: "Personalized Learning",
      description:
        "ORN-AI offers personalized learning experiences tailored to each individual's needs, interests, and learning pace.",
      image: "./feature-img/personalized-learning.png",
    },
    {
      title: "Expert Instructors",
      description:
        "Courses on ORN-AI are taught by expert instructors, providing high-quality instruction. The blend of self-paced and instructor-led formats offers a unique structure to kickstart your career.",
      image: "./feature-img/expert-instructor.png",
    },
    {
      title: "Flexible Schedule",
      description:
        "Courses on ORN-AI are designed to be flexible, allowing students to learn at their own pace and on their own schedule, fitting around their other commitments.",
      image: "./feature-img/flexible-schedule.png",
    },
    {
      title: "Real-Time Projects",
      description:
        "Apply your skills on live industry projects to gain practical experience and enhance your job readiness.",
      image: "./feature-img/realtime-projects.png",
    },
    {
      title: "Community Engagement",
      description:
        "Build connections and collaborate on our Community Engagement platform. Share insights, gain support, and boost your professional growth.",
      image: "./feature-img/community-engagement.png",
    },
    {
      title: "Internship Opportunities",
      description:
        "Enhance your career success by subscribing to our tailored internship programs, designed to provide real-world experience and insights.",
      image: "./feature-img/internship.png",
    },
    {
      title: "100% Placement Assistance",
      description:
        "Secure your future with our comprehensive placement assistance, ensuring every qualified subscriber receives job placement opportunities in their field of expertise.",
      image: "./feature-img/placement-assistanceship.png",
    },
    {
      title: "Mobile Accessibility",
      description:
        "Access our services on-the-go with our mobile-friendly platform, designed for seamless use across all your devices, ensuring you stay connected and productive no matter where you are.",
      image: "./feature-img/mobile-accessability.png",
    },
  ];

  return (
    <div className="bg-gray-50 py-12 ml-12 mr-8">
      {/* Section Title */}
      <h1 className="text-center text-4xl font-bold mb-10">
        <span className="bg-gradient-to-r from-sky-400 to-indigo-800 text-transparent bg-clip-text">
          Features
        </span>{" "}
        We Offer
      </h1>

      {/* Feature Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-6 md:px-12">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-[#B7DAFF] shadow-lg rounded-lg overflow-hidden p-6 flex flex-col items-start text-left"
          >
            <img
              src={feature.image}
              alt={feature.title}
              className="w-16 h-16 object-contain mb-4"
            />
            <h2 className="text-lg font-semibold mb-2">{feature.title}</h2>
            <p className="text-sm text-gray-700">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Features;
