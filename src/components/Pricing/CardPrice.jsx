/* eslint-disable react/prop-types */
import React from "react";
import rectangle from "../../assets/Rectangle.svg";
import checked from "../../assets/CheckBadge.svg";
import notchecked from "../../assets/NotCheckBadge.svg";
const CardPrice = ({ isbasic }) => {
  return (
    // initial div
    <div
      className={`${
        isbasic ? " p-8 bg-white " : " text-white px-8  py-12 bg-[#394264]"
      } space-y-4 rounded-xl flex flex-col justify-center   `}
    >
      {/* title div */}
      <div className=" font-bold text-base">
        <h3>{isbasic ? "Basic Plan" : "Favorite Plan"}</h3>
      </div>
      {/* price div */}
      <div className="flex flex-row gap-4 items-center">
        <h1 className=" font-bold text-4xl">{isbasic ? "20$" : "60$"}</h1>
        {/* per month div */}
        <div>
          <h3 className="font-bold text-base">Per Month</h3>
          <p className=" font-normal text-xs"> 10% Off for yearly subscription</p>
        </div>
      </div>
      <img src={rectangle} alt="" className=" max-w-fit"/>
      <p className="font-normal text-xs">Slate helps you see how many more days you need...</p>
      {/* imtiazat div */}
      <div className=" space-y-3">
        <div className="flex flex-row gap-2 items-center">
          <img src={checked} alt="" />
          <h3>Unlimited product updates</h3>
        </div>
        <div className="flex flex-row gap-2 items-center">
          <img src={checked} alt="" />
          <h3>Unlimited product</h3>
        </div>
        <div className="flex flex-row gap-2 items-center">
          <img src={checked} alt="" />
          <h3>Unlimited product</h3>
        </div>
        <div className="flex flex-row gap-2 items-center">
          <img src={notchecked} alt="" />
          <h3>1GB Cloud storage</h3>
        </div>
        <div className="flex flex-row gap-2 items-center">
          <img src={notchecked} alt="" />
          <h3>Email and community support</h3>
        </div>
      </div>
      <button className={` ${isbasic ?"bg-none border border-black hover:bg-[#EC5C2E] hover:duration-300 hover:text-white hover:border-[#EC5C2E]":"bg-[#EC5C2E] hover:bg-blue-500 hover:duration-300"} justify-center  shrink gap-2 py-2 px-6 rounded-3xl `}>choose plan</button>
    </div>
  );
};

export default CardPrice;
