import React, { useState, useEffect } from "react";
import LightModeIcon from "../icons/LightModeIcon";
import DarkModeIcon from "../icons/DarkModeIcon";

function DarkTheme() {
  const [darkModeToggle, setDarkModeToggle] = useState("light");
  useEffect(() => {
    const selectedTheme = localStorage.getItem("theme");
    console.log(selectedTheme);
    if (selectedTheme) {
      setDarkModeToggle(selectedTheme);
    }
  }, []);
  const darkModeFn = () => {
    const selectedTheme = localStorage.getItem("theme");
    if (selectedTheme === "light" || !selectedTheme) {
      setDarkModeToggle("dark");
      document.body.classList.remove("light");
      document.body.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      setDarkModeToggle("light");
      document.body.classList.remove("dark");
      document.body.classList.add("light");
      localStorage.setItem("theme", "light");
    }
  };
  useEffect(() => {
    const selectedTheme = localStorage.getItem("theme");
    if (selectedTheme) {
      const classTheme = document.body.classList[0];
      document.body.classList.replace(classTheme, selectedTheme);
    }
  }, []);
  return (
    <div>
      <div
        className=" active:scale-90 transition-all border-[2px] cursor-pointer border-[#697177] h-[25px] w-[25px] flex items-center justify-center rounded-full select-none"
        onClick={darkModeFn}
      >
        <div className=" text-[#697177] text-[20px]">
          {darkModeToggle === "dark" ? <LightModeIcon /> : <DarkModeIcon />}
        </div>
      </div>
    </div>
  );
}

export default DarkTheme;
