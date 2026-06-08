import React from 'react'
import ServicesHero from '../components/ServicesHero'
import ServicesDetail from '../components/ServicesDetail'
import ServicesPricing from '../components/ServicesPricing'
import ServicesFAQ from '../components/ServicesFaq'
import ServicesCTA from '../components/ServicesCTA'
import Footer from '../components/Footer'

const ServicesPage = () => {
  return (
    <>
    <ServicesHero />
    <ServicesDetail />
    <ServicesPricing />
    <ServicesFAQ />
    <ServicesCTA />
    <Footer />

    </>
  )
}

export default ServicesPage