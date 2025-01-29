"use client";
import React, { useState, useEffect, useRef } from "react";
import { mystyleo } from "@/components/MystyleoData";
import Link from "next/link";
import SearchInput from "../searchBar/SearchInput";
import BagIcon from "@/components/icons/BagIcon";
import WishListIcon from "@/components/icons/WishListIcon";
import CloseIcon from "@/components/icons/CloseIcon";
import MenuIcon from "@/components/icons/MenuIcon";
import PlusIcon from "@/components/icons/PlusIcons";
import MinusIcon from "@/components/icons/MinusIcon";
import DarkTheme from "./DarkTheme";
import Profile from "../profile/Profile";
import CartModel from "@/components/cartModel/CartModel";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggle = () => setMenuOpen(!menuOpen);
  const [minusOpen, setMinusOpen] = useState("");
  const MinusToggle = (id) =>
    minusOpen === id ? setMinusOpen("") : setMinusOpen(id);

  const modalRef = useRef(null);
  const handleOutsideClick = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    if (menuOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
    }
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [menuOpen]);

  return (
    <>
      <div className="dark:bg-dark-first bg-white shadow-lg z-50 sticky top-0">
        <div className=" relative w-full flex justify-between items-center bg-white shadow-md dark:bg-dark-first  px-3 lg:px-4 py-3">
          <div className="flex gap-5 items-center">
            <div
              className="flex items-center lg:hidden text-dark-second"
              onClick={toggle}
            >
              {menuOpen ? <CloseIcon /> : <MenuIcon />}
            </div>
            <Link href="/">Logo</Link>
          </div>
          <div className="hidden lg:block">
            <div className="relative flex items-center gap-10">
              <ul className="flex gap-10">
                {mystyleo?.header?.map((items, index) => (
                  <li key={index} className="group">
                    <Link href={items.url}>
                      <div className="flex gap-1 cursor-pointer group-hover:text-red-500 dark:text-[#fff] font-medium text-sm">
                        <p>{items.name}</p>
                        <p className="group-hover:rotate-180 transition-all duration-200">
                          {items.DownArray}
                        </p>
                      </div>
                    </Link>
                    {items.subNavHover && (
                      <div
                        className="absolute w-full mt-4 -left-3 p-2 rounded opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-500 z-40"
                        role="menu"
                        onClick={(e) => e.stopPropagation()}
                      >
                        {items.subNavHover()}
                      </div>
                    )}
                  </li>
                ))}
              </ul>
              <div className="xl:w-[490px]">
                <SearchInput />
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <DarkTheme />
            <div className="flex gap-3">
              <div className="text-dark-second">
                <Profile />
              </div>
              <div className="text-dark-second">
                <WishListIcon />
              </div>
              <div className="text-dark-second">
                <CartModel />
              </div>
            </div>
          </div>
        </div>
        {menuOpen && (
          <div className=" relative w-[100%] z-50 ">
            {menuOpen && (
              <div className="fixed inset-0 mt-10 backdrop-blur-sm transition-all duration-300"></div>
            )}
            <ul
              className=" absolute top-full w-[80%] bg-white lg:hidden dark:bg-dark-secondHO shadow-lg p-4"
              ref={modalRef}
            >
              {mystyleo?.header?.map((items, index) => (
                <li
                  key={index}
                  className="relative group py-2"
                  onClick={() => MinusToggle(items.id)}
                >
                  <div className="flex justify-between pb-2 gap-1 cursor-pointer group-hover:text-red-500 text-black/80 font-medium text-sm">
                    <p className="dark:text-dark-four text-dark-first">
                      {items.name}
                    </p>
                    <p className="dark:text-dark-four text-dark-first">
                      {minusOpen === items.id ? <MinusIcon /> : <PlusIcon />}
                    </p>
                  </div>
                  <div
                    className="border-b border-dark-secondH dark:text-dark-second"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <div
                      className={`${
                        minusOpen === items.id ? "block" : "hidden"
                      } `}
                    >
                      {items.subNavHover()}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
}

export default Header;
