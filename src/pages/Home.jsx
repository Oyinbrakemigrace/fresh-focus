import React from 'react'
import FirstHeading from '../components/FirstHeading'
import HeroSection from '../components/HomePage components/HeroSection'

function Home() {
  return (
    <>
      <FirstHeading heading={'Welcome to Fresh-Focus Integrated Services!'} />
      <div className='mt-8'>
        <HeroSection />
      </div>
    </>
  )
}

export default Home