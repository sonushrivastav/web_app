import React from "react";
import { BiRightArrowAlt } from "react-icons/bi";

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
    <div className="px-[160px] border w-full flex items-center justify-center">
      <div className="flex flex-col gap-0 items-center justify-center">
        <span className="font-bold text-[24px] text-[#000]">OUR</span>
        <span className="font-bold text-[34px] text-[#292967]">PROGRAMS</span>
        <div className="flex  w-full mt-10 items-center sm:flex sm:p-3 sm:flex-col justify-center gap-10 ">
          {programArray?.map((data, index) => (
            <div
              key={index}
              className={`rounded-3xl h-[300px] sm:h-full items-center  flex flex-col gap-4 justify-start relative p-3 w-[500px] sm:w-[300px] ${index % 2 === 0 ? "bg-[#FFF9DA]":"bg-[#e8e8f7]" } `}
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

              <div className="shadow-md border border-red-400 bg-white rounded-3xl flex items-center gap-2 justify-between p-3 mt-20 ">
                  {
                      ["In School Preparation", "Revision", "Mock Tests", "Feedback", "Study Material", "Counselling", "Career Guidance"]?.map((data,index) => {
                          return (
                            
                            <div key={index} className={`mt-[-50px]  sm:w-[190px] h-[50px] flex items-center justify-center w-[120px] p-2 rounded-t-xl ${index === 0 ? "bg-[#292967]":"bg-[#E8E8F7]"} `}>
                <span className={`text-center ${index === 0 ? "text-[#fff]":"text-[#000]" } `}>{data}</span>
              </div>
                          )
                      })
                  }
                  <div>33333</div>
                  <div>666666</div>
              </div>
      </div>
    </div>
  );
};

export default OurProgram;
