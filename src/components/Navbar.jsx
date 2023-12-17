import React from "react";
import logo from "../assets/favicon.svg";
import burger from "../assets/burger-menu-svgrepo-com.svg";
import { useState } from "react";
const Navbar = () => {
  const [click, setClick] = useState(false);
  return (
    <div>
      {/* responsive nav */}
      <div className="hidden md:flex flex-row items-center justify-between font-[montserrat] font-bold text-sm text-white py-7 px-8 md:px-24 lg:px-36 xl:px-48">
        <div className="flex  flex-row items-center space-x-2">
          <img src={logo} alt="micro club logo" />
          <h3>Micro Club</h3>
        </div>
        <ul className=" flex flex-row">
          <li className=" px-8 hover:text-blue-500 hover:cursor-pointer duration-300">Home</li>
          <li className=" px-8 hover:text-blue-500 hover:cursor-pointer duration-300">About</li>
          <li className=" px-8 hover:text-blue-500 hover:cursor-pointer duration-300">Content</li>
          <li className=" px-8 hover:text-blue-500 hover:cursor-pointer duration-300">Blog</li>
        </ul>
        <button className=" py-2 px-6 bg-white hover:bg-blue-500 duration-300 text-[#343c5a] rounded-3xl">
          Sign up
        </button>
      </div>
      {/* mobile navbar */}
      <div className=" flex relative  justify-between  py-4 md:hidden px-8 md:px-24 lg:px-36 xl:px-48">
        <img src={logo} alt="" />
        <button onClick={()=>{setClick(!click)}}>
          <img src={burger} alt="" width={50} height={50} />
        </button>
        {click && (
          <div
            id="mobile menu "
            className=" absolute flex flex-col rounded-xl font-[montserrat] font-bold text-sm text-white drop-shadow-xl bg-[#373f5e]  py-8 left-6 right-6 top-20 items-center justify-center space-y-4 "
          >
            <ul className=" flex flex-col items-center space-y-2">
              <li className=" px-8">Home</li>
              <li className=" px-8">About</li>
              <li className=" px-8">Content</li>
              <li className=" px-8">Blog</li>
            </ul>
            <button className=" py-2 px-6 bg-white text-[#343c5a] rounded-3xl">
              Sign up
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
