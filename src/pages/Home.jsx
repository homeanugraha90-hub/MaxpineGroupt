import React from 'react'
import Navbar from '../components/Navbar'
import Banner from './Home/Banner'
import About from './Home/About'
import WhyChoose from './Home/WhyChoose'
import HomeparkLiving from './Home/HomeParkLiving'
import PropertyGallery from './Home/PropertyGallery'
import VideoSection from './Home/VideoSection'
import Faqs from './Home/Faqs'
import Brand_logo from './Home/Brand_logo'

export default  function Home() {
  return (
    <div className="w-full relative">
        
        <Banner/>
        <About/>
        <WhyChoose/>
        <Brand_logo/>
        <HomeparkLiving/>
        <PropertyGallery/>
        <VideoSection/>
        <Faqs/>
    
    
    
    </div>
  )
}
