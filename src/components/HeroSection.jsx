import React from 'react'
import './heroSection.css'


const HeroSection = () => {
  return (
    <div className='container'>
    
    <div className='text-container'>
        <span className='text-span'>SENIOR</span>

         <span className='text-span'> EXPERIENCE</span>

        <span className='text-span'>DESIGNER &copy;</span>
        <div className='small-text'><span>CURRENTLY CRAFTING <br/> EXPERIENCE AT CROSBY</span>
        <span>[2021 - PRESENT]</span>
        </div> 
    </div>
    <div className='hero-img'>
    <img src='https://www.nerdwallet.com/assets/blog/wp-content/uploads/2020/07/GettyImages-482534949-1920x1152.jpg' alt="hero image"/>

    </div>
    </div>
  )
}

export default HeroSection