import React from "react";
import HeroCarousel from "../components/HeroCarousel";
import HeroTitle from "../components/HeroTitle";
import TitleDescription from "../components/TitleDescription";
import CoursePortal from "../components/CoursePortals";
import Features from "../components/features";
import Result from "../components/results";
import KeyFeatures from "../components/keyfeatures";
import Choose from "../components/choose";
import Testimonials from "../components/Testimonials";
import Placement from "../components/Placement";
import { FiPhone } from "react-icons/fi";

function Home() {
  return (
    <>
      <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-12 py-12 px-6 -mt-16">
        <div className="w-full md:w-1/2 text-left">
          <HeroTitle />
        </div>
        <div className="w-full md:w-1/2">
          <HeroCarousel />
        </div>
      </div>
      <TitleDescription />
      <CoursePortal />
      <Placement />
      <Result />
      <Choose />
      <KeyFeatures />
      <Testimonials />
      <Features />
      <a
        href="tel:+91 9059366967"
        className="fixed bottom-5 right-5 bg-green-500 text-white w-14 h-14 flex items-center justify-center rounded-full shadow-lg hover:bg-green-600 transition duration-300"
        title="Call Now"
      >
        <FiPhone size={24} />
      </a>
    </>
  );
}

export default Home;
