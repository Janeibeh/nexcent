import React from 'react'
import Image from 'next/image';
import pixelpic from '@images/herosecondimage.png';

const PixelGrade = () => {
    return (
    <>
        <div className='py-6'>
            <div className='flex items-center justify-center container mx-auto  px-10 lg:px-6 gap-8 mr-6'>
                <Image src={pixelpic} alt="pixelpic" width= {442} height= {433} className='hidden lg:flex  ml-32'  />
                <div className='hidden lg:flex flex-col w-9/12 '>
                    <p className="font-semibold  text-gray text-4xl w-9/12 ">The unseen of spending three years at Pixelgrade</p>
                    <br/>
                    <p className='w-9/12 text-grey font-normal text-sm '> Witnessing the evolution of a dynamic team, learning from countless project challenges, and celebrating numerous successes. It involves growing alongside the company, embracing innovative design practices, and contributing to a creative, collaborative environment. This period is marked by professional development.</p>
                    <button className='bg-lemon text-white  h-11 w-36 rounded lg:ml-0 ml-24 mt-5 '>Learn more</button>
                </div>
                <div className='flex flex-col items-center justify-center container mx-auto px-6 lg:hidden font-semibold  text-gray  text-[1rem]'>
                    <p>The unseen of spending three years at Pixelgrade</p> 
                    <p className='font-normal text-sm text-grey mt-2 '>Witnessing the evolution of a dynamic team, learning from countless project challenges, and celebrating numerous successes. It involves growing alongside the company, embracing innovative design practices, and contributing to a creative, collaborative environment.</p>
                </div>
            </div>
            <button className='bg-lemon text-white  h-11 w-24 rounded lg:hidden ml-16 mt-4 text-sm'>Learn More</button>
        </div>

    </>
    )
}

export default PixelGrade