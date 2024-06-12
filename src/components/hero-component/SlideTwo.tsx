import React from 'react'
import Image from 'next/image';
import HeroImgTwo from '@images/Frame 35.png';

const SlideTwo = () => {
    return (
    <>
        <div className='bg-white w-full lg:h-[37rem] h-[60rem]'> 
            <div className='container mx-auto flex flex-col lg:flex-row  items-start justify-between px-8 lg:pt-16 pt-10'>
                <div className=''>
                    <Image src={HeroImgTwo} alt="hero" width={497}  height={507}/>
                </div>
                <div className='flex flex-col items-start  mr-0 lg:mr-32 lg:py-14 border lg:w-[36rem]'>
                    <h1 className='font-semibold  lg:text-4xl text-2xl  text-gray mt-6'>The unseen of spending three     </h1>
                    <h1 className='font-semibold  lg:text-4xl text-2xl  text-gray'>years at Pixel grade</h1>
                    <br/>
                    <p className='text-grey text-base '>These includes the development of a well-designed website and complete control over branding and content. You gain the ability to showcase your best work in a portfolio to facilitate direct sales and bookings, which enhances credibility with clients.These elements creates a strong professional foundation for your photography business.</p>
                    <p className='text-grey text-base '> control over branding and content. You gain the ability to showcase your  </p>
                    <p>work in a portfolio to facilitate direct sales and bookings, which enhances credibility </p>
                    <p> with clients.These elements creates a strong professional foundation for your photography business.</p>
                    <button className='bg-lemon h-11 w-32 rounded text-white  mt-5 '>Learn more</button>
                </div>
            </div>  

        </div> 

    </>
    )
}


export default SlideTwo
