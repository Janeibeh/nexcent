import React from 'react'
import Header from '@/components/header-component/Header'
import HeroCarouselComponent from '@/components/hero-component/HeroCarouselComponent'
import Client from '@/components/Client'
import PixelGrade from '@/components/Body/PixelGrade'
import AchievementsCounts from '@/components/Body/AchievementsCounts'
import Calendar from '@/components/Body/Calendar'
import Customers from '@/components/Body/Customers'
import CommunityUpdates from '@/components/Body/CommunityUpdates'
import Footer from '@/components/Footer/Footer'



const HomePage = () => {
  return (
    <>
        <Header/>
        <HeroCarouselComponent />
        <Client/>
        <PixelGrade/>
        <AchievementsCounts/>
        <Calendar/>
        <Customers/>
        <CommunityUpdates/>
        <Footer/>

      
    </>
  )
}

export default HomePage