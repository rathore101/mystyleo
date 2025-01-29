import React from "react";
import UserIcon from "@/components/icons/UserIcon";
import Link from "next/link";
import { mystyleo } from "../MystyleoData";

function Profile() {
  return (
    <div className=" group">
      <p className=" hover:text-dark-secondH">
        <UserIcon />
      </p>
      <div className="absolute z-50 bg-white p-4 transition-all duration-200 w-60 right-10 top-full invisible group-hover:visible dark:bg-dark-third shadow-lg rounded-md ">
        <div>
          <div className=" border-b pb-4">
            <h2 className=" ">
              <span className=" text-black dark:text-dark-four  text-md">
                Welcome
              </span>
              <br />{" "}
              <span className=" dark:text-dark-fourH text-sm text-black/80">
                To access account and manage orders
              </span>
            </h2>
            <div className=" flex gap-1 border w-36 justify-center items-center hover:border rounded-md hover:border-red-400 mt-2 p-1 ">
              {mystyleo?.profileLoginSign?.map((item, index) => (
                <div key={index}>
                  <Link
                    href={item.url}
                    className=" hover:text-red-400 text-red-500 text-md font-medium"
                  >
                    {item.name}
                  </Link>
                </div>
              ))}
            </div>
          </div>
          <div className="border-b pb-3 pt-4 ">
            {mystyleo?.profile?.map((item, index) => (
              <div key={index}>
                <Link
                  href={item.url}
                  className=" hover:text-red-500 text-black dark:text-dark-four text-sm"
                >
                  {item.name}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
