import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

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

      {/* Logos (Right Side in Vertical Column) */}
      <div className="absolute right-24 top-1/2 transform -translate-y-1/2 flex flex-col gap-4">
        {logos.map((logo, index) => (
          <div key={index} className="w-16 h-16 bg-white p-2 rounded-full shadow-lg flex items-center justify-center border border-gray-300">
            <img src={logo.src} alt={logo.alt} className="w-12 h-12 object-contain" />
          </div>
        ))}
      </div>
    </div>
  );
}
