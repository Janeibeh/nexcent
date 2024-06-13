import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import HeroCard from '@/cards/HeroCard';
import { herodata } from '@/constants/herodata';

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
            className="bg-neutral  h-[50rem] lg:h-[35rem] px-14 lg:px-36    "
            
        >
                {herodata.map( (item) => (
                    <HeroCard 
                        key={item._id}
                        image={item.image} 
                        titleone={item.titleone} 
                        titletwo={item.titletwo}  
                        paragraph={item.paragraph} 
                        button={item.button}/>
                      
                ))}
        </Carousel>
    </>
    )
}

export default HeroCarouselComponent
