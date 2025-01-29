import React from "react";
import { mystyleo } from "../MystyleoData";
import Link from "next/link";

function Products() {
  return (
    <div className="  pt-5 md:mt-10 px-2 ">
      {mystyleo?.ProductsData?.map((item, ind) => (
        <div key={ind} className="">
          <p className="text-2xl px-4 md:text-3xl lg:text-5xl mb-8 font-bold text-black dark:text-dark-four">
            {item.heading}
          </p>
          <div className="grid lg:grid-cols-5 sm:grid-cols-3 grid-cols-2 gap-4">
            {item.prouData?.map((produ, index) => (
              <div
                key={index}
                className="relative group bg-white dark:bg-dark-secondH shadow-lg transition-all duration-200 hover:scale-105 overflow-hidden rounded-b-lg"
              >
                <Link href={produ.url}>
                  {/* Image Container */}
                  <div className="flex justify-center items-center overflow-hidden md:m-2">
                    <img
                      src={produ.image}
                      alt={produ.name}
                      className="w-full h-[96px] lg:w-[250px] lg:h-[250px] md:h-[170px] md:rounded-lg transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>

                  {/* Overlay */}
                  <div className="absolute bottom-0 left-0 w-full h-0 bg-white/70 dark:bg-black/70 text-black dark:text-white px-3 py-2 opacity-0 group-hover:h-[25%] group-hover:opacity-100 transition-all duration-500 rounded-t-lg">
                    <p className="text-sm">{produ.name}</p>
                    <p className="text-xs">{produ.discount}</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Products;
