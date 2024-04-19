import React from "react";
import logo1 from "../assets/logo1.png";
import logo2 from "../assets/logo2.png";
const Headers = () => {
  return (
    <div className="py-1 px-4 sm:px-10 flex z-[111111] top-0 fixed w-full bg-white items-center justify-between h-[65px] shadow-md">
      <div className="flex items-start justify-center gap-3">
        <img src={logo1} className="object-contain h-6 sm:h-[25px]" alt="" />
        <div className="h-[20px] sm:h-[30px] w-[2px] bg-[#181972]"></div>
        <img src={logo2} className="object-contain h-6 sm:h-[25px]" alt="" />
      </div>
      <button className="bg-[#292967] font-bold text-sm sm:text-sm py-1 px-2 sm:py-1 sm:px-2 rounded-full md:rounded-3xl text-white">
        Get info
      </button>
    </div>
  );
};

export default Headers;
