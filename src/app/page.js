"use client";
import HeroSection from "@/components/HeroSection";
import MiddleSection from "@/components/MiddleSection";
import Header from "@/components/header/Header";
import Image from "next/image";
import "./globals.css";
import Slider from "@/components/slider/Slider";
import Products from "@/components/productData/Products";
import Filter from "@/components/Filter";

export default function Home() {
  return (
    <div className=" bg-white dark:bg-dark-secondHO pb-4">
      <div
        className="container-fluid mx-auto text-center lg:max-w-[1400px] xl:max-w-[1440px]"
        // style={{ maxWidth: "1400px" }}
      >
        <Slider />
        <HeroSection />
        <Filter />
        <MiddleSection />
        <Products />
      </div>
    </div>
  );
}
