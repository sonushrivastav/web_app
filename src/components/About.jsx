import React from "react";
import about1 from "../assets/about1.png";
import about2 from "../assets/about2.png";
import { BiRightArrowAlt } from "react-icons/bi";
const About = () => {
  const aboutArray = [
    {
      img: about1,
      title: "ABOUT",
      subHeading: "Universal High School",
      para: "Universal High School, Dahisar equips every student with the right attitude and skills to help them find their unique place in the world by providing a wholesome and ever-evolving learning environment. So that they can fearlessly pursue a better tomorrow. In line with this mission, Universal is launching the best IIT JEE/ NEET test prep program powered by PACE IIT & MEDICAL. PACE IIT & Medical is India’s best IIT JEE/ NEET test prep program and has helped more than xxx+ students prepare for IIT JEE and xxx students in NEET for the last few years.",
    },
    {
      img: about2,
      title: "ABOUT",
      subHeading: "IIT PACE",
      para: "Founded by Mr. Praveen Tyagi, for over two decades, PACE IIT & Medical has embarked on a remarkable journey, transforming the lives of students and shaping the landscape of competitive exam coaching. It all began in 1999, with a humble vision to bridge the gap between aspirations and achievements. PACE IIT & Medical has become synonymous with success in competitive exams and helped xxx students to crack IIT and xxx students to crack NEET/ Medical exams.",
    },
  ];
  return (
    <div className="px-[160px] py-3  w-full sm:mt-[-1000px]">
      <div className=" w-full flex flex-col gap-8 sm:gap-[100px]">
        
        <div
          className="flex w-full relative sm:flex-col  sm:gap-32 items-center justify-end"
        >
          <img
            src={about1}
            className="w-[400px] absolute  sm:hidden  left-0  h-[350px] object-contain "
            alt=""
          />
          <div
            className={` w-[700px] sm:w-[300px] flex items-center justify-center sm:h-full sm:p-2 h-[400px] rounded-[33px] 
                 bg-[#FFF9DA] }
                `}
          >
            <div className="w-full flex-col flex  sm:justify-center sm:w-[400px] sm:items-center items-start ml-[160px] sm:ml-2 justify-start">
              <span className="text-center text-[#000] text-[24px] font-normal">
                ABOUT
              </span>
              <h2 className="text-[#292967] font-bold text-[36px]">
                Universal High School
              </h2>
              <span className="w-[500px] sm:text-center sm:w-[400px] text-[17px] text-[#000] font-normal">
                Universal High School, Dahisar equips every student with the
                right attitude and skills to help them find their unique place
                in the world by providing a wholesome and ever-evolving learning
                environment. So that they can fearlessly pursue a better
                tomorrow. In line with this mission, Universal is launching the
                best IIT JEE/ NEET test prep program powered by PACE IIT &
                MEDICAL. PACE IIT & Medical is India’s best IIT JEE/ NEET test
                prep program and has helped more than xxx+ students prepare for
                IIT JEE and xxx students in NEET for the last few years.
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
                          <img src={about1} className="sm:block hidden w-full h-full mt-10" alt="" />
            </div>
          </div>
        </div>
        <div
          className="flex w-full sm:flex-col relative items-center "
        >
          
          <div
            className={` w-[700px] flex items-center justify-center sm:h-full sm:p-2 h-[400px] rounded-[33px] 
                 bg-[#FFF9DA] }
                `}
          >
            <div className="w-full flex-col flex items-start sm:items-center sm:ml-1 ml-10 justify-start">
              <span className="text-center text-[#000] text-[24px] font-normal">
                ABOUT
              </span>
              <h2 className="text-[#292967] font-bold text-[36px]">
              IIT PACE
              </h2>
              <span className="w-[500px] sm:w-[400px] sm:text-center text-[17px] text-[#000] font-normal">
              Founded by Mr. Praveen Tyagi, for over two decades, PACE IIT & Medical has embarked on a remarkable journey, transforming the lives of students and shaping the landscape of competitive exam coaching. It all began in 1999, with a humble vision to bridge the gap between aspirations and achievements. PACE IIT & Medical has become synonymous with success in competitive exams and helped xxx students to crack IIT and xxx students to crack NEET/ Medical exams.
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
                          
                          <img src={about2} className="sm:block hidden w-[400px] h-[400px] mt-10 object-contain" alt="" />
            </div>
                  </div>
                  <img
            src={about2}
            className="w-[400px] absolute right-0 sm:hidden   h-[350px] object-contain "
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default About;
