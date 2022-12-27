import React from 'react'
import Banner from './Banner'
import Header from './Header'
import "./Hero.css"

function Hero() {
  return (
    <div className='full_bg'>
        <Header/>
        <Banner/>
    </div>
  )
}

export default Hero