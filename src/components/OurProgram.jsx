import React from "react";
import { BiRightArrowAlt } from "react-icons/bi";
import img from "../assets/programimg.png"
const OurProgram = () => {
  const programArray = [
    {
      title: "ISC + NEET",
      text1:
        "NEET is a national-level examination conducted by NTA. The candidates who want to get admission to medical courses must qualify for the entrance test. NEET questions only come from Physics, Chemistry, Zoology, and Botany.",
      text2:
        "Powered by IITPACE, Universal High School Dahisar will prepare students for both ISC and NEET (and other Medical exams)  within the comfort of their school premises. Our coursework is specially created for the ISC curriculum to create a synergy between Board and NEET exam preparations during school hours.",
    },
    {
      title: "ISC + IIT JEE",
      text1:
        "IITs are one of the most prestigious colleges in the country. All Engineering aspirants wish to get into one of the IITs, but getting into such an institution is a challenging task. A lot of hard work andhard and dedication is required to ace JEE Main and JEE Advanced to get into IIT or some other top educational institution in the country.",
      text2:
        "Powered by IITPACE, Universal High School Dahisar will prepare students for both ISC and IITJEE ( and other engineering exams) within the comfort of their school premises. Our coursework is specially created for the ISC curriculum to create a synergy between Board and NEET exam preparations during school hours",
    },
  ];
  return (
    <div>

    <div className="px-[160px] sm:mt-[-1000px] w-full flex items-center justify-center">
      
      <div className="flex flex-col gap-10 items-center justify-center">
        <div className="flex items-center justify-center flex-col">
        <span className="font-bold text-[24px] text-[#000]">OUR</span>
        <span className="font-bold text-[34px] text-[#292967]">PROGRAMS</span>
        </div>
        <div className="flex  w-full  items-center sm:flex sm:p-3 sm:flex-col justify-center gap-10 ">
          {programArray?.map((data, index) => (
            <div
              key={index}
              className={`rounded-3xl h-[300px] sm:h-full items-center  flex flex-col gap-4 justify-start relative p-3 w-[500px] sm:w-[300px] ${
                index % 2 === 0 ? "bg-[#FFF9DA]" : "bg-[#e8e8f7]"
              } `}
            >
              <div className="absolute top-[-30px] sm:w-[190px] left-[20%] h-[50px] flex items-center justify-center w-[300px] p-2 rounded-t-xl bg-[#292967]">
                <span className="text-center text-[#fff]">{data?.title}</span>
              </div>
              <span className="text-center text-[14px] mt-5 font-normal">
                {data?.text1}
              </span>
              <span className="text-center text-[14px] font-normal">
                {data?.text2}
              </span>
              <div className="flex bg-[#292967]  mt-4 py-2 px-3 rounded-3xl items-center justify-center gap-2">
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
          ))}
        </div>

        <div className="bg-white sm:h-full sm:p-6 sm:w-[390px] shadow-2xl py-0 h-[300px] px-20 rounded-2xl">

        <div className="flex  items-center sm:grid-cols-2 sm:grid  sm:gap-2 justify-between mt-2 gap-2">
          {[
            "In School Preparation",
            "Revision",
            "Mock Tests",
            "Feedback",
            "Study Material",
            "Counselling",
            "Career Guidance",
          ]?.map((data, index) => {
            return (
              <div
                key={index}
                className={` sm:w-[170px] h-[50px] sm:flex-grow flex items-center justify-center w-[120px] p-2 rounded-t-xl ${
                  index === 0 ? "bg-[#292967]" : "bg-[#E8E8F7]"
                } `}
              >
                <span
                  className={`text-center ${
                    index === 0 ? "text-[#fff]" : "text-[#000]"
                  } `}
                >
                  {data}
                </span>
              </div>
            );
          })}
          </div>
          <div className="w-full  sm:flex-col sm:gap-4 flex items-center justify-between mt-7 ">
            <div className="w-full flex flex-col sm:items-center gap-3 ">
              <h3 className="text-[35px]sm:text-[30px] text-[#292967] font-bold">In School Preparation</h3>
              <span className="font-normal text-[16px] sm:w-[300px] sm:text-center w-[500px] text-[#000]">Lectures will happen on campus during school hours with our esteemed faculty powered by PACE, so students don’t need to go anywhere for extra coaching or tuition classes. </span>
              <div className="flex bg-[#292967] w-[200px]  mt-4 py-2 px-3 rounded-3xl items-center justify-center gap-2">
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
            
              <img src={img} alt="" className="sm:w-full h-[200px] w-[400px] sm:h-full object-contain"/>
          </div>
          </div>
          
      </div>
      </div>
      <div className="bg-yellow-300 w-full h-[100px] z-[-100000] mt-[-40px]"></div>
      
      </div>
  );
};

export default OurProgram;
