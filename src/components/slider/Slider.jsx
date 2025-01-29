"use client";
import React, { useState, useEffect } from "react";
import { mystyleo } from "../MystyleoData";

function Slider() {
  const [people, setPeople] = useState(mystyleo.sliderPeopleDate);
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [startX, setStartX] = useState(0);

  useEffect(() => {
    const lastIndex = people.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, people]);

  useEffect(() => {
    if (isPaused) return;

    const slider = setInterval(() => {
      setIndex((prevIndex) => prevIndex + 1);
    }, 2000);

    return () => clearInterval(slider);
  }, [isPaused, index]);

  const handleTouchStart = (e) => {
    setStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    if (!startX) return;

    const currentX = e.touches[0].clientX;
    const difference = startX - currentX;

    // Swipe threshold
    if (difference > 50) {
      setIndex(index + 1); // Swipe left
      setStartX(0); // Reset startX
    } else if (difference < -50) {
      setIndex(index - 1); // Swipe right
      setStartX(0); // Reset startX
    }
  };

  const handleTouchEnd = () => {
    setStartX(0); 
  };

  if (!people || people.length === 0) {
    return <div className="text-center text-red-500">No data available</div>;
  }

  return (
    <div className="">
      <div
        className="relative w-full h-[150px] md:h-[250px] lg:h-[450px] max-w-full overflow-hidden flex items-center z-20"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {people.map((person, personIndex) => {
          const { id, image } = person;
          let position = "translate-x-full opacity-0";
          if (personIndex === index) {
            position = "translate-x-0 opacity-100";
          }
          if (
            personIndex === index - 1 ||
            (index === 0 && personIndex === people.length - 1)
          ) {
            position = "-translate-x-full opacity-0";
          }

          return (
            <article
              key={id}
              className={`absolute top-0 left-0 w-full h-full flex lg:items-center lg:justify-center transition-all duration-1000 ease-in-out ${position}`}
            >
              <img
                src={image}
                alt="image"
                className="w-full h-[150px] md:h-[250px] lg:h-[550px] object-cover mb-4"
              />
            </article>
          );
        })}
        <div className="hidden md:block ">
          <button
            className="absolute top-28 lg:top-1/2  left-2 p-5  bg-gray-500 text-white w-8 h-8 flex 
      items-center justify-center rounded-full hover:bg-dark-secondH transition transform -translate-y-1/2"
            onClick={() => setIndex(index - 1)}
          >
            Prev
          </button>
          <button
            className="absolute top-28 lg:top-1/2 right-2 p-5  bg-gray-500 text-white w-8 h-8 flex 
      items-center justify-center rounded-full hover:bg-dark-secondH transition transform -translate-y-1/2"
            onClick={() => setIndex(index + 1)}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default Slider;
