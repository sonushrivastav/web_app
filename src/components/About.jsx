import React from 'react'
import about1 from "../assets/about1.png"
import about2 from "../assets/about2.png"
const About = () => {
    const aboutArray = [
        {
            img: about1,
            title: "ABOUT",
            subHeading: "Universal High School",
            para:"Universal High School, Dahisar equips every student with the right attitude and skills to help them find their unique place in the world by providing a wholesome and ever-evolving learning environment. So that they can fearlessly pursue a better tomorrow. In line with this mission, Universal is launching the best IIT JEE/ NEET test prep program powered by PACE IIT & MEDICAL. PACE IIT & Medical is India’s best IIT JEE/ NEET test prep program and has helped more than xxx+ students prepare for IIT JEE and xxx students in NEET for the last few years."
        },
        {
            img: about2,
            title: "ABOUT",
            subHeading: "IIT PACE",
            para:"Founded by Mr. Praveen Tyagi, for over two decades, PACE IIT & Medical has embarked on a remarkable journey, transforming the lives of students and shaping the landscape of competitive exam coaching. It all began in 1999, with a humble vision to bridge the gap between aspirations and achievements. PACE IIT & Medical has become synonymous with success in competitive exams and helped xxx students to crack IIT and xxx students to crack NEET/ Medical exams." 
        }
    ]
  return (
    <div className='px-[160px] py-3  w-full '>
          <div className='relative w-full flex flex-col gap-8'>
                  {
                      aboutArray?.map((data,index) => {
                          return (
                              <div key={index} className='flex w-full  items-center justify-between'>
                                  <img src={data?.img} className='w-[400px]  h-[350px] object-contain absolute' alt="" />
                                  <div className={` w-[600px]  h-[400px] rounded-[33px] ${index % 2 === 0 ? "bg-[#FFF9DA]":"bg-[#e8e8f7]"}`}>
                                      dsdsd
                                  </div>
                              </div>
                          )
                      })
                  }
      </div>
    </div>
  )
}

export default About
