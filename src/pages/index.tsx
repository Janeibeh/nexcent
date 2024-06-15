import React from 'react'
import Header from '@/components/header-component/Header'
import HeroCarouselComponent from '@/components/hero-component/HeroCarouselComponent'
import Client from '@/components/Client'
import PixelGrade from '@/components/Body/PixelGrade'



const HomePage = () => {
  return (
    <>
        <Header/>
        <HeroCarouselComponent />
        <Client/>
        <PixelGrade/>
        
      
    </>
  )
}

export default HomePage