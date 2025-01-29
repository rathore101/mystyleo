import React from "react";

function Filter() {
  return (
    <div className=" flex flex-wrap gap-3 justify-between items-center px-4">
      <select
        name="rebbon"
        id=""
        className=" py-2 px-4 rounded-lg bg-white ring-1 ring-gray-500"
      >
        <option value="">Category</option>
        <option value="">New arrival</option>
        <option value="">Popular</option>
      </select>
      <div>
        {" "}
        <input
          type="text"
          placeholder=" max price..."
          className=" outline-none border-2 rounded-lg py-2 px-4"
        />
      </div>
      <div>
        {" "}
        <input
          type="text"
          placeholder=" min price..."
          className=" outline-none border-2 rounded-lg py-2 px-4 "
        />
      </div>
      <div>
        <select
          name=""
          id=""
          className=" py-2 px-4 rounded-lg bg-white ring-1 ring-gray-500"
        >
          <option value="">Price (Low to High)</option>
          <option value="">Price (High to Low)</option>
          <option value="">Newest</option>
          <option value="">Oldest</option>
        </select>
      </div>
    </div>
  );
}

export default Filter;
