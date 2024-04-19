import { useState } from 'preact/hooks'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import LearningApproach from './components/LearningApproach'
import About from './components/About'
import OurProgram from './components/OurProgram'

export function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='w-full   flex flex-col gap-[150px] sm:gap-[1040px] overflow-x-hidden'>
      
      <Header/>

      <HeroSection/> 
        <LearningApproach /> 
        <About />
        <OurProgram/>
    </div>
  )
}
