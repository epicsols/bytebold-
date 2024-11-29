import React from 'react'
import Banner from './Banner'
import Services from './Services'
import BoldlyBuildingBrands from './BoldlyBuildingBrands'
import SmartSolutions from './SmartSolutions'
import WhyChooseByteBold from './WhyChooseByteBold'
import WhatOurClientsSay from './WhatOurClientsSay'
import Contact from './Contact'
import ProjectCarousel from './ProjectCarousel'


const Home = () => {
  return (
    <>
      <Banner />
      <Services />
      <BoldlyBuildingBrands heading='Boldly Building Brands' />
      <SmartSolutions />
      <ProjectCarousel />
      <WhyChooseByteBold />

      <WhatOurClientsSay />

      <Contact />

    </>
  )
}

export default Home
