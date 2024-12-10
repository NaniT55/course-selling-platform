import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Testimonials() {
  const testimonials = [
    {
      rating: "⭐⭐⭐⭐⭐",
      review: `"ORN-AI provided me with a robust understanding of AI technologies, which proved invaluable as I transitioned into the tech industry. Aguila IT Consulting's placement support was pivotal in helping me explore diverse career paths and ultimately secure a role that perfectly matched my skills and aspirations."`,
      image: "./testimonial-img/person1.png",
      name: "Abhilash",
    },
    {
      rating: "⭐⭐⭐⭐⭐",
      review: `"ORN-AI's comprehensive training in artificial intelligence empowered me with the expertise needed to thrive in the tech sector. Aguila IT Consulting's guidance and industry connections opened doors to a wide range of job opportunities, ultimately leading me to a fulfilling career in software development."`,
      image: "./testimonial-img/person2.png",
      name: "Aashvi",
    },
    {
      rating: "⭐⭐⭐⭐⭐",
      review: `"The skills I gained from ORN-AI's training program gave me a competitive edge in the technology landscape. With Aguila IT Consulting's support, I was able to navigate the job market with confidence and secure a position in cybersecurity—a field I'm passionate about."`,
      image: "./testimonial-img/person3.png",
      name: "Aadhya",
    },
    {
      rating: "⭐⭐⭐⭐⭐",
      review: `"ORN-AI's cutting-edge curriculum provided me with a solid foundation in machine learning and data analytics. Aguila IT Consulting's placement services were instrumental in helping me find my niche in the tech industry, ultimately landing me a role in cloud computing that aligns perfectly with my career goals."`,
      image: "./testimonial-img/person4.png",
      name: "Revan",
    },
    {
      rating: "⭐⭐⭐⭐⭐",
      review: `"ORN-AI's training program equipped me with the skills needed to excel in the rapidly evolving tech landscape. With Aguila IT Consulting's support, I was able to navigate the job market and secure a role in data science—a field I'm truly passionate about."`,
      image: "./testimonial-img/person5.png",
      name: "Advik",
    },
    {
      rating: "⭐⭐⭐⭐⭐",
      review: `"ORN-AI's training program provided me with a strong foundation in AI and data science. Aguila IT Consulting's placement services were invaluable in helping me secure a role in cybersecurity—a field that aligns perfectly with my interests and expertise."`,
      image: "./testimonial-img/person6.png",
      name: "Ishan",
    },
  ];

  const CustomPrevArrow = ({ onClick }) => (
    <button
      onClick={onClick}
      className="absolute bottom-[-60px] right-[90px] bg-white text-black px-3 py-1 rounded-full"
    >
      &#8592;
    </button>
  );

  const CustomNextArrow = ({ onClick }) => (
    <button
      onClick={onClick}
      className="absolute bottom-[-60px] right-[30px] bg-white text-black px-3 py-1 rounded-full"
    >
      &#8594;
    </button>
  );

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    appendDots: (dots) => (
      <div className="text-left ml-4">
        <ul className="flex">{dots}</ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        className="w-3 h-3 bg-white border border-indigo-500 rounded-full transition-all duration-300"
      ></div>
    ),
    responsive: [
      {
        breakpoint: 1024, // Tablet devices
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640, // Mobile devices
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="bg-gray-100 py-12 px-6">
      <div className="text-center mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold mb-2">Look at Us Through Our Student's Eyes</h1>
        <p className="text-base sm:text-lg text-gray-600">Transformations happened in our students' lives</p>
      </div>
      <div className="max-w-6xl mx-auto relative">
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="p-4">
              <div
                className="bg-[#DCEDFF] rounded-lg p-6 shadow-lg flex flex-col text-center justify-between"
                style={{ height: "350px" }} 
              >
                <h1 className="text-2xl font-bold mb-4">{testimonial.rating}</h1>
                <p className="text-gray-700 text-sm mb-6 flex-grow">
                  {testimonial.review}
                </p>
                <div className="flex items-center justify-center mt-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <h2 className="text-lg font-bold text-gray-800">{testimonial.name}</h2>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Testimonials;
