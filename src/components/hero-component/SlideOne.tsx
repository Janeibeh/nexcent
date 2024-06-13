import React from 'react';
import SlideTwo from './SlideTwo';
import SlideThree from './SlideThree';
import Image from 'next/image';
import HeroImg from '@images/Illustration.png';



const SlideOne = () => {
  return (
    <>
          <div className='bg-neutral h-[37rem] '>
              <div className='container mx-auto flex flex-col lg:flex-row items-center justify-center lg:gap-24 gap-10 py-16 px-9 lg:px-0'>
                  <div className='flex flex-col items-start lg:gap-4 gap-1 '>
                      <h1 className='font-semibold lg:text-7xl text-5xl  text-gray'  > Lessons and insights </h1>
                      <h1 className='text-lemon font-semibold lg:text-6xl text-5xl lg:ml-0 ml-8'> from 8 years</h1>
                      <p className='text-grey text-base mt-2'>Where to grow your business as a photographer: site or social media?</p>
                      <button className='bg-lemon h-11 w-28 rounded text-white lg:ml-0 ml-28  mt-5 '>Register</button>
                  </div>
                  <div className=''>
                    <Image src={HeroImg} alt="hero" />
                  </div>
              </div>
          </div>
    </>
  )
}

export default  SlideOne
