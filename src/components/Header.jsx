import React from "react";
import logo1 from "../assets/logo1.png";
import logo2 from "../assets/logo2.png";
const Headers = () => {
  return (
    <div className="py-1 px-4 md:px-20 flex items-center justify-between h-[65px] shadow-md">
      <div className="flex items-start justify-center gap-3">
        <img src={logo1} className="object-contain h-6 md:h-[30px]" alt="" />
        <div className="h-[20px] md:h-[40px] w-[2px] bg-[#181972]"></div>
        <img src={logo2} className="object-contain h-6 md:h-[30px]" alt="" />
      </div>
      <button className="bg-[#292967] font-bold text-sm md:text-lg py-1 px-2 md:py-2 md:px-3 rounded-full md:rounded-3xl text-white">
        Get info
      </button>
    </div>
  );
};

export default Headers;
