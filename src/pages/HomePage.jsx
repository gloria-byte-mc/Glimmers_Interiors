import React from 'react'
import HeroBanner from '../components/HeroBanner'
import AboutUs from '../components/AboutUs'
import Services from '../components/Services'
import ProcessFlow from '../components/ProcessFlow'
import Portfolio from '../components/Portfolio'
import Testimonials from '../components/Testimonials'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'


const HomePage = () => {
  return (
   <>
   <Navbar />
   <HeroBanner />
   <AboutUs />
   <Services />
   <ProcessFlow />
   <Portfolio />
   <Testimonials />
   <Contact />
   <Footer />
   </>
  )
}

export default HomePage