import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import SlideOne from './SlideOne';
import SlideTwo from './SlideTwo';
import SlideThree from './SlideThree';

const HeroCarouselComponent = () => {
    return (
    <>
        <Carousel
            showThumbs={false}
            infiniteLoop
            // autoPlay
            interval={3000}
            showStatus={false}
            showIndicators={true}
            
        >
                <SlideOne/>
                <SlideTwo/>  
                <SlideThree/>
        </Carousel>
    </>
    )
}

export default HeroCarouselComponent
