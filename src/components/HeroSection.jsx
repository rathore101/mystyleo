import { mystyleo } from "./MystyleoData";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div className=" bg-dark-four md:pt-4 lg:pt-8 pt-4 dark:bg-dark-secondHO ">
      <div className="md:flex md:flex-row gap-3 w-full px-2 ">
        <div className="grid grid-cols-2 md:grid-cols-2 gap-4 w-full ">
          {mystyleo?.sliderDesignDate?.map((item) => (
            <div
              key={item.id}
              className={`relative group lg:hover:scale-95 transition-all duration-300 dark:text-dark-four font-medium rounded-md ${
                item.id === 3 ? "col-span-2 row-span-2 " : ""
              }`}
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-[120px] lg:h-[268px] object-cover rounded-lg"
              />
              <p className="absolute top-2 left-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-2 transition-all duration-300 ease-in bg-yellow-900 text-white px-4 py-1 text-sm rounded ">
                {item.name}
              </p>
            </div>
          ))}
        </div>
        <div className=" pt-4 md:pt-0 rounded-xl w-full">
          <img
            src={`/assets/fas.jpg`}
            alt="image"
            className=" size-auto rounded-lg md:w-[380px] md:h-[370px]  lg:w-[850px]  lg:h-[550px]"
          />
        </div>
      </div>
      {/* <div className=" box">
        <div className=" bg-green-200 w-48 h-56 img"></div>
        <div className="overlay">
          <h3>name Heloo </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit
            incidunt animi accusamus, eaque eligendi molestias dolores
          </p>
        </div>
      </div> */}
    </div>
  );
};

export default HeroSection;
