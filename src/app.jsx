import { useState } from 'preact/hooks'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import LearningApproach from './components/LearningApproach'
import About from './components/About'
import OurProgram from './components/OurProgram'

export function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='w-full h-screen  overflow-x-hidden'>
      
      <nav>
      <Header/>
      </nav>

      <section className='w-full'>  
      <HeroSection/> 
        <LearningApproach /> 
        <About />
        <OurProgram/>
      </section>
    </div>
  )
}
