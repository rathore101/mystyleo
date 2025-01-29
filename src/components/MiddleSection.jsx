"use client";
import React, { useState } from "react";
import { mystyleo } from "./MystyleoData";
import DownArrayIcon from "@/components/icons/DownArrayIcon";
import ThreeImageCompo from "./ThreeImageCompo";

function MiddleSection() {
  const totalProduct = mystyleo.carouselData.length;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [startX, setStartX] = useState(0);

  const pervIndexBtn = () => {
    setCurrentIndex((prev) => (prev === 0 ? totalProduct - 5 : prev - 2));
  };

  const nextIndexBtn = () => {
    setCurrentIndex((prev) => (prev === totalProduct - 5 ? 0 : prev + 2));
  };

  const handleTouchStart = (e) => {
    setStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    if (!startX) return;

    const currentX = e.touches[0].clientX;
    const difference = startX - currentX;

    // Swipe threshold
    if (difference > 50) {
      // Swipe left
      setCurrentIndex((prev) =>
        prev === totalProduct - 5 ? 0 : Math.min(prev + 2, totalProduct - 5)
      );

      setStartX(0);
    } else if (difference < -50) {
      // Swipe right
      setCurrentIndex((prev) =>
        prev === 0 ? totalProduct - 5 : Math.max(prev - 2, 0)
      );
      setStartX(0);
    }
  };

  const handleTouchEnd = () => {
    setStartX(0);
  };

  return (
    <div className="relative">
      <div
        className="flex slidbar md:gap-4 lg:gap-2 xl:gap-8 gap-2 md:pt-8 lg:pt-8 pt-4 overflow-hidden transition-all ease-in-out duration-300"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        // style={{ transform: `translateX(-${currentIndex / 100}vw)` }}
      >
        {mystyleo?.carouselData
          .slice(currentIndex, currentIndex + 5)
          .map((item, index) => (
            <div
              key={index}
              className="overflow-auto min-w-[100px] md:min-w-[180px] lg:min-w-[260px]"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-[100px] h-[100px] lg:w-[230px] lg:h-[230px] md:w-[180px] md:h-[180px]  transition-all duration-300 rounded-full"
              />
              <p className="flex items-center justify-center line-clamp-2 dark:text-dark-four mt-2 font-medium overflow-hidden h-[25px] bg-red-300 overflow-y-scroll">
                {item.name}
              </p>
            </div>
          ))}
      </div>
      <button
        className="absolute top-9 md:top-24 lg:top-32 xuviBtn bg-white left-0 dark:bg-dark-secondH py-4 px-1 md:px-2"
        onClick={pervIndexBtn}
      >
        <p className="rotate-90 dark:text-dark-four">
          <DownArrayIcon />
        </p>
      </button>
      <button
        className="absolute top-9 md:top-24 lg:top-32 xuviBtn1 bg-white right-0 dark:bg-dark-secondH py-4 px-1 md:px-2"
        onClick={nextIndexBtn}
      >
        <p className="-rotate-90 dark:text-dark-four">
          <DownArrayIcon />
        </p>
      </button>
      <div className=" mt-10">
        <ThreeImageCompo />
      </div>
    </div>
  );
}

export default MiddleSection;
