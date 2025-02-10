import React, { useState } from "react";

const images = [
  "/project/a.png",
  "/project/b.png",
  "/project/c.png",
  "/project/d.png",
  "/project/e.png",
  "/project/f.png",
  "/project/g.png",
  "/project/h.png",
  "/project/i.png",
  "/project/j.png",

  // Add paths for all 9-10 images here
];

const Project = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="flex flex-col items-center justify-center w-full h-screen bg-primary-content p-4">
      <h1 className="text-5xl md:text-7xl font-bold text-center glowing-text mb-6">
        PROJECT
      </h1>
      <div className="relative w-4/5 lg:w-3/5">
        <div className="border-8 border-transparent bg-gradient-to-r from-[#6abdf5] to-[#f56abb] p-2 rounded-lg">
          <img
            src={images[currentIndex]}
            alt={`Project ${currentIndex + 1}`}
            className="w-full h-[70vh] object-cover rounded-lg"
          />
        </div>
        <div className="absolute top-1/2 -translate-y-1/2 flex justify-between w-full px-4">
          <button
            onClick={handlePrev}
            className="bg-gradient-to-r from-[#6abdf5] to-[#f56abb] text-white font-bold py-2 px-6 rounded-lg hover:opacity-90 transition-all"
          >
            PREV
          </button>
          <button
            onClick={handleNext}
            className="bg-gradient-to-r from-[#6abdf5] to-[#f56abb] text-white font-bold py-2 px-6 rounded-lg hover:opacity-90 transition-all"
          >
            NEXT
          </button>
        </div>
      </div>
    </div>
  );
};

export default Project;


