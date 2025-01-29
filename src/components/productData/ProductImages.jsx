"use client";
import React, { useState } from "react";
import { mystyleo } from "../MystyleoData";

function ProductImages() {
  const [index, setIndex] = useState(0);

  return (
    <div className="w-full relative flex flex-col items-center">
      {/* Main Image */}
      <div className="w-full max-w-[700px]">
        <img
          src={mystyleo?.productSelectImage[index]?.img}
          alt={`image`}
          className="w-full max-h-[50vh] object-contain border px-4 rounded-lg"
        />
      </div>

      {/* Thumbnail Section */}
      <div className="flex overflow-x-auto gap-4 mt-4 max-w-full px-4 scrollbar-thin scrollbar-thumb-gray-400">
        {mystyleo?.productSelectImage?.map((item, idx) => (
          <div
            key={item.id}
            className={`border p-1 rounded-lg cursor-pointer ${
              idx === index ? "border-blue-500" : "border-gray-300"
            }`}
            onClick={() => setIndex(idx)}
          >
            <img
              src={item.img}
              alt={`image`}
              className="w-28 h-28 object-cover rounded-lg"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductImages;
