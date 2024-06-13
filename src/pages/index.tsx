import React from 'react'
import Header from '@/components/header-component/Header'
import HeroCarouselComponent from '@/components/hero-component/HeroCarouselComponent'
import Client from '@/components/Client'



const HomePage = () => {
  return (
    <>
        <Header/>
        <HeroCarouselComponent />
        <Client/>
        
      
    </>
  )
}

export default HomePage