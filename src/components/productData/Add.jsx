"use client";
import React, { useState } from "react";

function Add() {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="flex flex-col gap-4">
      <h4 className="font-medium">Choose a Quantity</h4>
      <div className="flex gap-3 justify-between items-center">
        <div className="flex gap-3 items-center">
          <div className="w-28 flex justify-between items-center px-2 py-1 bg-gray-300 rounded-lg">
            <button
              className="cursor-pointer text-2xl px-2"
              onClick={() => setQuantity((prev) => Math.max(prev - 1, 1))}
              disabled={quantity === 1}
            >
              -
            </button>
            {quantity}
            <button
              className="cursor-pointer text-xl px-2"
              onClick={() => setQuantity((prev) => prev + 1)}
            >
              +
            </button>
          </div>
          <div className="text-sm">
            Only <span className="text-yellow-600">4 items</span> left!
            <br />
            Don't miss it
          </div>
        </div>
        <button className="w-36 text-sm rounded-3xl ring-1 text-red-400 ring-red-400 py-2 px-4 hover:bg-red-500 hover:text-white disabled:cursor-not-allowed">
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default Add;
