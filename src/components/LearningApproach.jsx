import React from "react";
import { IoHomeOutline } from "react-icons/io5";
import { BiRightArrowAlt } from "react-icons/bi";
import icon1 from "../assets/Layer_1.svg";
import icon2 from "../assets/Layer_2.svg";
import icon3 from "../assets/Layer_3.svg";
import icon4 from "../assets/Layer_4.svg";
import icon5 from "../assets/Layer_5.svg";
const LearningApproach = () => {
  const LearningArray = [
    {
      icon: icon1,
      para: "Classes are conducted during school hours on school premises",
    },
    {
      icon: icon2,
      para: "ISC curriculum is covered fully with competitive exams",
    },
    {
      icon: icon3,
      para: "Saves precious time for self-study",
    },
    {
      icon: icon4,
      para: "Experienced faculty powered by PACE IIT & MEDICAL",
    },
    {
      icon: icon5,
      para: "Smaller batch size for personalized attention",
    },
  ];
  return (
    <div className="px-[160px] border w-full flex items-center justify-center">
      <div className="bg-[#262660]  py-4 px-20 rounded-3xl  items-center flex-col flex justify-center">
        <span className="font-bold text-[24px] text-white"> OUR</span>
        <span className="text-[#FDDF49] sm:text-[20px] text-[32px] uppercase font-bold">
          Learning Approach
        </span>
        <div className="flex  w-full justify-center mt-5 gap-4">
          {LearningArray?.map((data, index) => (
            <div
              key={index}
              className="flex flex-col border w-[180px] items-center gap-2 justify-center relative "
            >
              <div className="bg-[#FDDF49] rounded-full p-2">
                <img
                  src={data?.icon}
                  className="text-[#242451] h-10 w-10 self-center"
                  alt=""
                />
              </div>
              <span className="text-[#fff] text-center">{data?.para}</span>
              {index !== LearningArray.length - 1 && (
                <div className="absolute top-0 right-[-5px] h-full border border-dashed"></div>
              )}
            </div>
          ))}
        </div>

        <div className="flex bg-[#FDDF49]  mt-4 py-2 px-3 rounded-3xl items-center justify-center gap-2">
          <span className="text-[#292967] font-bold text-[16px] ">
            Enquire Now
          </span>{" "}
          <BiRightArrowAlt
            size={25}
            color="#FDDF49"
            className="bg-[#292967] rounded-full p-1"
          />{" "}
        </div>
      </div>
    </div>
  );
};

export default LearningApproach;
