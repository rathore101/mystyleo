"use client";
import React, { useState } from "react";
import BagIcon from "@/components/icons/BagIcon";
import Link from "next/link";
import { mystyleo } from "../MystyleoData";
function Profile() {
  const [clickCart, setClickCart] = useState(false);

  const cartItenms = true;
  return (
    <div className=" ">
      <div
        className=" relative hover:text-dark-secondH cursor-pointer"
        onClick={() => setClickCart(!clickCart)}
      >
        <BagIcon />
        <div className=" absolute -top-3 bg-red-500 text-dark-four rounded-full p-1 -right-2 h-5 w-5 text-sm flex text-center justify-center">
          2
        </div>
      </div>
      {clickCart && (
        <div className="absolute z-50 bg-white p-2 transition-all duration-200 w-68 right-0 top-full  dark:bg-dark-third shadow-lg rounded-md ">
          {!cartItenms ? (
            <div>Cart is Empty</div>
          ) : (
            <div>
              <h2 className=" flex justify-center items-center mb-2">
                Shopping Cart
              </h2>
              <div className=" flex gap-2 ">
                <div>
                  <img
                    src={`/assets/fas.jpg`}
                    alt="image"
                    className=" size-16 rounded-md"
                  />
                </div>
                <div>
                  <p className=" text-sm">Product Name</p>
                  <p className=" text-sm">avaliable</p>
                </div>
                <div className=" text-sm">₹ 250</div>
              </div>
              <div className=" flex justify-between items-center mt-2">
                <p className=" text-sm">Qty.</p>
                <p className=" text-sm text-red-400">remove</p>
              </div>
              <div className=" flex justify-between items-center mt-2">
                <p className=" text-sm">Subtotal.</p>
                <p className=" text-sm ">₹ 250</p>
              </div>
              <div className=" flex justify-between items-center mt-2">
                <button>View Cart</button>
                <button> Check Out</button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Profile;
