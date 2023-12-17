import React from "react";
import kid from "../assets/Charachter.svg";
import circle from "../assets/Ellipse 24.svg";
const Hero = () => {
  return (
    <div className=" pt-4 md:pt-0 flex flex-col space-y-9 pb-16 md:flex-row md:justify-between px-8 md:px-24 lg:px-36 xl:px-48">
      {/* right content div */}
      <div className="flex flex-col items-center space-y-14 md:justify-center">
        {/* text div */}
        <div className=" text-center space-y-6 md:flex md:flex-col ">
          <h1 className=" font-[Open Sans] text-5xl font-extrabold text-white md:text-left md:leading-[60px]">
            Unlock Your <br /> Learning <br /> Potential with <br />{" "}
            <p className="text-[#31A0FE] "> Micro Club</p>
          </h1>
          <p className=" text-sm md:text-left font-[Montserrat] font-normal text-[#ECECEC]">
            Embrace life's vastness, venture forth, and <br /> discover the wonders
            waiting beyond. The world <br /> beckons; seize its grand offerings now!
          </p>
        </div>
        {/* buttons div */}
        <div className="  flex flex-col md:flex-row gap-3 items-center">
          <button className=" py-3 px-10 bg-[#31A0FE] hover:bg-white duration-300  text-white  hover:text-[#252B42] rounded-3xl font-[montserrat] text-sm font-bold">
            Join class
          </button>
          <button className="py-3 px-10 bg-white hover:bg-blue-500 duration-300 text-[#252B42] rounded-3xl font-[montserrat] text-sm font-bold">
            Get Started
          </button>
        </div>
      </div>
      {/* kid pic div */}
      <div className="hidden md:flex flex-col items-start  md:items-center">
        {/* <img src={circle} alt="" /> */}
        <img src={kid} alt="" />
      </div>
    </div>
  );
};

export default Hero;
