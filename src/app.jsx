import { useState } from 'preact/hooks'
import Header from './components/Header'
import HeroSection from './components/HeroSection'

export function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='w-full h-screen'>
      
      <nav>
      <Header/>
      </nav>

      <section>
     <HeroSection/>
      </section>
    </div>
  )
}
