import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <h1>Hello</h1>
       */}
      <div>
        <Navbar />
        <HeroSection/>
        <Footer />
      </div>
      
    </>
  )
}

export default App
