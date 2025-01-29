"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { mystyleo } from "@/components/MystyleoData";
import PlusIcon from "@/components/icons/PlusIcons";
import MinusIcon from "@/components/icons/MinusIcon";

function SubKids() {
  const [plusOpen, setPlusOpen] = useState("");
  const plusToggle = (id) =>
    plusOpen === id ? setPlusOpen("") : setPlusOpen(id);
  return (
    <div className="">
      <div className="text-black bg-white lg:shadow-lg dark:bg-dark-secondHO dark:text-dark-fourH lg:py-4 lg:px-7 lg:flex lg:flex-col lg:h-[480px] gap-3 lg:flex-wrap">
        {mystyleo?.womenHoverData?.map((item, index) => (
          <div
            key={index}
            className="lg:w-1/4 py-2 flex-shrink-0 flex-grow-0 border-b lg:border-none"
            onClick={() => plusToggle(item.id)}
          >
            <Link
              href={item.url}
              className=" flex justify-between items-center"
            >
              <h2 className="text-sm font-medium text-red-500 dark:text-dark-four pb-1 ">
                {item.heading}
              </h2>
              <p className=" lg:hidden text-dark-second dark:text-dark-fourH">
                {plusOpen === item.id ? <MinusIcon /> : <PlusIcon />}
              </p>
            </Link>
            {plusOpen === item.id && (
              <ul
                className={`mt-0 lg:hidden space-y-1 ${
                  plusOpen ? "" : "hidden"
                }`}
              >
                {item.points.map((item, idx) => (
                  <li
                    key={idx}
                    className="text-sm font-thin hover:font-semibold "
                  >
                    <Link href={item.url}> {item.name}</Link>
                  </li>
                ))}
              </ul>
            )}
            <ul className={`mt-0  hidden lg:block space-y-1 `}>
              {item.points.map((item, idx) => (
                <li
                  key={idx}
                  className="text-sm font-thin hover:font-semibold "
                >
                  <Link href={item.url}> {item.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SubKids;
