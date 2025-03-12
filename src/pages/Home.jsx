import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Kalyanimam2 from "../sectionimage/Kalyanimam2.jpg"
import Communication from "../skillcards/Communication.jpg"
import problemsolving from "../skillcards/problemsolving.jpg"
import thinkingabality from "../skillcards/thinkingabality.jpg"
import programing from "../skillcards/programing.jpg"


const courses = [
  { img: "/courseboxes/java.png", name: "Java" },
  { img: "/courseboxes/python.png", name: "Python" },
  { img: "/courseboxes/springboot.png", name: "Spring Boot" },
  { img: "/courseboxes/angular.png", name: "Angular" },
  { img: "/courseboxes/react.png", name: "ReactJS" },
  { img: "/courseboxes/javascript.png", name: "JavaScript" },
  { img: "/courseboxes/mysql.png", name: "MySQL" },
  { img: "/courseboxes/css.png", name: "Css" },
  { img: "/courseboxes/html.png", name: "Html" },
];

const images = [
  "/images/slide1.jpg",
  "/images/slide2.jpg",
  "/images/slide3.jpg",
  "/images/slide4.jpg"
];

const logos = [
  { src: "/logos/java.png", alt: "Java" },
  { src: "/logos/python.png", alt: "Python" },
  { src: "/logos/springboot.png", alt: "Spring Boot" },
  { src: "/logos/angular.png", alt: "Angular" },
  { src: "/logos/javascript.png", alt: "JavaScript" }
];

export default function HomePage() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <>
<div className="bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 px-4 py-4 shadow-md overflow-hidden whitespace-nowrap relative w-full h-16 flex items-center">
  <h1 className="text-2xl font-semibold text-white absolute animate-marquee">
    Welcome To S2J Java Academy
  </h1>
  
  {/* Custom Tailwind Styles */}
  <style>
    {`
      @keyframes marquee {
        0% { transform: translateX(100%); }
        100% { transform: translateX(-100%); }
      }

      .animate-marquee {
        animation: marquee 5s linear infinite;
      }
    `}
  </style>
</div>
<div className="relative w-full h-[500px] overflow-hidden flex items-center">
  {/* Image Slides */}
  {images.map((img, index) => (
    <img
      key={index}
      src={img}
      alt={`Slide ${index + 1}`}
      className={`absolute w-full h-full object-cover object-[center_20%] transition-opacity duration-1000 ${
        index === currentIndex ? "opacity-100" : "opacity-0"
      }`}
    />
  ))}

  {/* Navigation Buttons */}
  <button
    onClick={prevSlide}
    className="absolute top-1/2 left-5 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
  >
    <FaChevronLeft size={24} />
  </button>
  <button
    onClick={nextSlide}
    className="absolute top-1/2 right-5 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
  >
    <FaChevronRight size={24} />
  </button>

  {/* Logos (Bottom Center) */}
  <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex flex-row gap-4">
    {logos.map((logo, index) => (
      <div key={index} className="w-24 h-24 bg-white p-2 rounded-full shadow-lg flex items-center justify-center border border-gray-300">
        <img src={logo.src} alt={logo.alt} className="w-20 h-20 object-contain" />
      </div>
    ))}
  </div>
</div>


{/* Image and Text Section */}
<div className="flex flex-col md:flex-row items-center justify-evenly p-10 gap-10 h-[400px]">
  {/* Image Section */}
  <div className="flex flex-col items-center">
    <img 
      src={Kalyanimam2} 
      alt="About S2J Java Academy" 
      className="w-[300px] h-[200px] rounded-lg shadow-lg" 
    />
    <h1 className="mt-4 text-3xl font-extrabold bg-gradient-to-r from-black to-gray-600 bg-clip-text text-transparent">
      Kalyani Ajalkar
    </h1>
  </div>

  {/* Text Section */}
  <div className="w-full md:w-1/2 flex flex-col justify-center px-6 py-6 rounded-md shadow-md">
    <h2 className="text-3xl font-bold text-blue-600">Why Choose S2J Java Academy?</h2>
    <p className="mt-4 text-md text-black font-serif text-justify">
      At S2J Java Academy, we provide expert-led training in Java, Python, Spring Boot, Hibernate, and more. 
      Our goal is to make coding easy and accessible for everyone, regardless of experience level. 
      We offer hands-on projects, real-world applications, and one-on-one mentorship to ensure deep understanding. 
      Whether you're a beginner looking to start your journey or an experienced developer aiming to enhance your skills, 
      our structured courses will guide you towards success. Join us today and transform your coding skills!
    </p>
  </div>
</div>


<div className="flex justify-center flex-wrap gap-6 items-center">
  {/* Heading */}
  <h1 className="text-2xl font-bold text-center w-full mb-6 text-blue-600">
    We Provide These Courses
  </h1>

  {/* Course Boxes (4 in a row) */}
  {courses.map((course, index) => (
    <div 
      key={index} 
      className="bg-white p-2 rounded-lg shadow-lg flex flex-col justify-between items-center w-1/4 
                 transition-transform duration-300 hover:scale-105 border-2 border-transparent hover:border-blue-500"
    >
      <img src={course.img} alt={course.name} className="w-20 h-20 object-contain mx-auto" />
      <p className="mt-2 font-medium">{course.name}</p>
    </div>
  ))}
</div>


<div className="flex flex-col items-center py-10 bg-blue-50 mt-4">
  {/* Heading */}
  <h1 className="text-3xl font-bold text-center text-blue-600 mb-8">
    Skill Development
  </h1>

  {/* Skill Cards */}
  <div className="grid grid-cols-1 md:grid-cols-4 gap-8 w-full max-w-7xl ">
    {/* Programming */}
    <div className="bg-white p-4 rounded-lg shadow-lg flex flex-col items-center hover:scale-105 transition-transform border border-gray-300">
      <img src={programing} alt="Programming" className="w-44 h-44 object-contain" />
      <h2 className="text-xl font-semibold mt-4">Programming</h2>
      <p className="text-gray-600 text-center mt-2">
        Enhance your coding skills with Java, Python, and more.
      </p>
    </div>

    {/* Communication */}
    <div className="bg-white p-4 rounded-lg shadow-lg flex flex-col items-center hover:scale-105 transition-transform border border-gray-300">
      <img src={Communication} alt="Communication" className="w-44 h-44 object-contain" />
      <h2 className="text-xl font-semibold mt-4">Communication</h2>
      <p className="text-gray-600 text-center mt-2">
        Improve soft skills, presentation, and teamwork abilities.
      </p>
    </div>

    {/* Problem Solving */}
    <div className="bg-white p-4 rounded-lg shadow-lg flex flex-col items-center hover:scale-105 transition-transform border border-gray-300">
      <img src={problemsolving} alt="Problem Solving" className="w-44 h-44 object-contain" />
      <h2 className="text-xl font-semibold mt-4">Problem Solving</h2>
      <p className="text-gray-600 text-center mt-2">
        Develop logical thinking and analytical skills.
      </p>
    </div>

    {/* Thinking Ability */}
    <div className="bg-white p-4 rounded-lg shadow-lg flex flex-col items-center hover:scale-105 transition-transform border border-gray-300">
      <img src={thinkingabality}alt="Thinking Ability" className="w-44 h-44 object-contain" />
      <h2 className="text-xl font-semibold mt-4">Thinking Ability</h2>
      <p className="text-gray-600 text-center mt-2">
        Enhance creativity and critical thinking for innovative solutions.
      </p>
    </div>
  </div>
</div>


  </>
  );
}
