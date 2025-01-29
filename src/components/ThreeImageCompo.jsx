import React from "react";
import { mystyleo } from "./MystyleoData";
import Link from "next/link";

function ThreeImageCompo() {
  return (
    <div className="w-full">
      <div className="md:flex gap-6 px-3">
        {mystyleo?.threeImageData.map((i, ind) => (
          <div
            key={ind}
            className={`relative group overflow-hidden ${
              i.id === 1
                ? "md:w-[20%] h-[150px] md:h-[350px]"
                : i.id === 2
                ? "md:w-[60%] h-[150px] md:h-[350px]"
                : "md:w-[20%] h-[150px] md:h-[350px]"
            }`}
          >
            <div className="w-full h-full transform transition-transform duration-1000 group-hover:scale-105">
              <img src={i.img} alt="" className="w-full h-full object-cover" />
            </div>

            <Link
              href={i.url}
              className="absolute bottom-5 lg:bottom-10 left-3 lg:left-6 text-red-500 font-medium hover:no-underline underline transition-all duration-300 group-hover:translate-y-0"
            >
              <p>{i.name}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ThreeImageCompo;
