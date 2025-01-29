import React from "react";

function CustomizeProduct() {
  return (
    <div className=" flex flex-col gap-6">
      <h4>Choose a Color</h4>
      <ul className=" flex items-center gap-8 ">
        <li className=" w-8 h-8 rounded-full ring-1 ring-gary-300 cursor-pointer relative bg-red-500">
          {" "}
          <div className="absolute w-12 h-12 bg-transparent rounded-full ring-2 flex justify-center items-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
        </li>
        <li className=" w-8 h-8 rounded-full ring-1 ring-gary-300 cursor-pointer relative bg-blue-500"></li>
        <li className=" w-8 h-8 rounded-full ring-1 ring-gary-300 cursor-pointer relative bg-green-500">
          {" "}
          <div className="absolute w-12 h-[3px] bg-red-700 rotate-45 rounded-full flex justify-center items-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
        </li>
      </ul>
      <div className="flex items-center gap-4 ">
        <h4> Choose a Size</h4>
        <ul className=" flex itc gap-4">
          <li className=" ring-1 ring-red-400 rounded-md py-1 px-4 text-sm cursor-pointer">
            Small
          </li>
          <li className=" ring-1 ring-red-400 text-white bg-red-400 rounded-md py-1 px-4 text-sm cursor-pointer">
            Medium
          </li>
          <li className=" ring-1 ring-pink-200 text-white bg-pink-200  rounded-md py-1 px-4 text-sm cursor-not-allowed">
            Large
          </li>
        </ul>
      </div>
    </div>
  );
}

export default CustomizeProduct;
