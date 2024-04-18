import React from 'react'
import bgimg from "../assets/bgimg.png"
import herobanner from "../assets/herobanner.png"
import { BsEnvelope } from "react-icons/bs";

const HeroSection = () => {
  return (
      <div style={{ backgroundImage: `url(${bgimg})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '100vh' }} className='py-4  md:px-20 flex items-start '>
          
          <div className='flex items-center justify-center relative gap-1 w-full '>
              <div className='flex flex-col items-start border gap-2'>
                   <p className='text-start font-bold text-[24px] text-[#000] uppercase'>Kickstart Your </p>
                   <h2 className='font-black text-[30px] text-[#191970]'>IIT JEE/NEET Test Prep, </h2>
              </div>
              <img src={herobanner} className='w-[500px] h-[650px] object-contain' alt="" />
              <div className='w-[300px] shadow-md rounded-2xl p-1'>
                  <div className='bg-[#FDDF49] rounded-t-xl p-2 text-center'>                      
                  <span className='text-center'>Enquire Now!</span>
                  </div>
              </div>

              <div className='absolute right-0 bg-[#292967] items-center flex-col gap-2 flex justify-center h-[155px] w-[50px]  rounded-l-xl'>
                  <span className='writing-vertical text-center text-white font-bold text-[16px]'>Enquire Now</span>
                  <div className='bg-[#FDDF49]  rounded-full flex items-center justify-center w-[30px] h-[30px] '>
                  <BsEnvelope size={20} className='transform rotate-90'/>

                  </div>
              </div>
        </div>
  </div>
  )
}

export default HeroSection
