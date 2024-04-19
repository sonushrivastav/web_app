import React from "react";
import bgimg from "../assets/bgimg.png";
import herobanner from "../assets/herobanner.png";
import { BsEnvelope } from "react-icons/bs";
import logo2 from "../assets/logo2.png";
import { BiRightArrowAlt } from "react-icons/bi";
import icon1 from "../assets/Layer_6.svg";
import icon2 from "../assets/Layer_7.svg";
const HeroSection = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${bgimg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
      }}
      className="py-20 sm:py-20 sm:p-5 flex items-start "
    >
      <div className="flex items-center sm:flex-col sm:gap-0 justify-center relative gap-1 w-full ">
        <div className="flex flex-col items-start sm:items-center gap-2">
          <p className="text-start font-bold sm:text-center text-[24px] text-[#000] uppercase">
            Kickstart Your 
          </p>
          <h2 className="font-black text-[30px] text-[#191970]">
            IIT JEE/NEET Test Prep,{" "}
          </h2>
          <div className="w-full flex items-center flex-col gap-0 justify-center">
            <h4 className="text-[17px] text-[#191970] text-center">
              Powered by
            </h4>
            <img src={logo2} alt="" />
          </div>

          <div className="w-full sm:hidden flex items-center justify-center gap-3">
            <h3 className="text-[#000000] font-bold text-[23px]">
              ADMISSION OPEN
            </h3>
            <div className="flex bg-[#292967]   py-2 px-3 rounded-3xl items-center justify-center gap-2">
              <span className="text-[#fff] font-bold text-[16px] ">
                Enquire Now
              </span>{" "}
              <BiRightArrowAlt
                size={25}
                color="#292967"
                className="bg-[#FDDF49] rounded-full p-1"
              />{" "}
            </div>
          </div>

          <div className="flex w-full flex-col sm:flex-row  items-start justify-start gap-3">
            <div className="flex w-full items-center justify-center gap-2">
              <div className="p-2 bg-[#FDDF49] rounded-full items-center flex">
                <img src={icon1} alt="" />
              </div>
              <div className="flex flex-col w-full gap-[2px] ">
                <span className="sm:w-full">Batch Starts From </span>
                <span className="sm:w-full">3rd April '24 </span>
              </div>
            </div>
            <div className="flex w-full items-center justify-center gap-2">
              <div className="p-2 bg-[#FDDF49] rounded-full items-center flex">
                <img src={icon2} alt="" />
              </div>
              <div className="flex w-full flex-col gap-[2px] ">
                <span className="sm:w-full">Scholarship Test</span>
                <span className="sm:w-full">23rd March '24 </span>
              </div>
            </div>
          </div>
        </div>
        <img
          src={herobanner}
          className="w-[480px] h-[600px] sm:w-full sm:h-auto object-contain"
          alt=""
        />
        <div className="w-[320px] shadow-md mt-[0px] rounded-2xl sm:w-full ">
          <div className="bg-[#FDDF49] rounded-t-xl p-2 text-center">
            <span className="text-center text-[20px]">Enquire Now!</span>
          </div>

          <div className="flex w-full flex-col gap-3 p-2 bg-white">
            <div className="flex w-full items-center justify-between gap-2">
              <span className="text-[15px] text-[#000]">Academic Year</span>
              <div className="w-[170px] sm:w-[230px] bg-[#292967] h-[40px] rounded flex items-center justify-center text-white  font-normal text-[13px]">
                2024-2026
              </div>
            </div>
            <div className="flex w-full items-center justify-between gap-2">
              <span className="text-[15px]  w-[120px] text-[#000]">
                Your Relationship with the Child
              </span>
              <div className="w-[200px] sm:w-full  h-[40px] rounded flex items-center justify-center">
                <div className="bg-[#292967] rounded w-[80px] sm:w-[100px] flex items-center justify-center h-[40px] text-white">
                  Father
                </div>
                <div className="bg-[#fff] w-[80px] sm:w-[100px] border rounded flex items-center justify-center h-[40px]">
                  Mother
                </div>
              </div>
            </div>

            <div className="w-full items-center flex justify-between gap-2 ">
              <div className="flex flex-col gap-1">
                <label className="text-[15px]  w-[120px] text-[#000]">
                  Children's First Name
                </label>
                <input
                  type="text"
                  placeholder="Type Here"
                  className="w-[130px] sm:w-full h-[40px] rounded outline-none border p-1"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-[15px]  w-[120px] text-[#000]">
                  Children's Last Name
                </label>
                <input
                  type="text"
                  placeholder="Type Here"
                  className="w-[130px] sm:w-full h-[40px] rounded outline-none border p-1"
                />
              </div>
            </div>
            <div className="w-full items-center flex justify-between gap-2 ">
              <div className="flex flex-col gap-1">
                <label className="text-[15px]  w-[120px] text-[#000]">
                  Your First Name
                </label>
                <input
                  type="text"
                  placeholder="Type Here"
                  className="w-[130px] h-[40px] sm:w-full rounded outline-none border p-1"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-[15px]  w-[120px] text-[#000]">
                  Your Last Name
                </label>
                <input
                  type="text"
                  placeholder="Type Here"
                  className="w-[130px] h-[40px] sm:w-full rounded outline-none border p-1"
                />
              </div>
            </div>

            <div className="flex flex-col w-full gap-2 items-center justify-center">
              <label className="text-[15px]  w-full text-[#000]">
                Course Applying For
              </label>
              <select className="w-full h-[40px] rounded outline-none border p-1">
                <option value="" selected>
                  Choose Course
                </option>
              </select>
            </div>

            <div className=" sm:block  bg-[#292967]  sm:items-center  hidden gap-2 sm:flex sm:justify-center h-[55px]    w-[350px] ">
          <span className="  sm:order-1 sm:text-center text-white font-bold text-[16px]">
            Enquire Now
          </span>
          <div className="bg-[#FDDF49]  rounded-full flex items-center justify-center w-[30px] h-[30px] ">
            <BsEnvelope size={20} className=" " />
          </div>
        </div>

            <div className="flex flex-col w-full gap-2 items-center justify-center">
              <label className="text-[15px]  w-full text-[#000]">
                Mobile Number
              </label>
              <input
                type="number"
                placeholder="+91  |  Enter your Number"
                className="w-full h-[40px] rounded outline-none border p-1"
              />
            </div>
            <div className="flex flex-col w-full gap-2 items-center justify-center">
              <label className="text-[15px]  w-full text-[#000]">
                Email Address
              </label>
              <input
                type="email"
                placeholder="yourname@example.com"
                className="w-full h-[40px] rounded outline-none border p-1"
              />
            </div>

            <button className="rounded-3xl w-[150px] text-white self-center bg-[#292967] py-2 px-4">
              Enquire Now
            </button>
          </div>
        </div>

        <div className="absolute sm:hidden right-0 bg-[#292967]  items-center s flex-col gap-2 flex justify-center h-[155px]    w-[50px] rounded-l-xl">
          <span className="writing-vertical  sm:order-1 text-center text-white font-bold text-[16px]">
            Enquire Now
          </span>
          <div className="bg-[#FDDF49]  rounded-full flex items-center justify-center w-[30px] h-[30px] ">
            <BsEnvelope size={20} className="lg:transform lg:rotate-90 " />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
