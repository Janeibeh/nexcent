import React from 'react'
import Image from 'next/image';
import calendarpic from '@images/herothirdimage.png';

const Calendar = () => {
    return (
    <>
        <div className='py-6'>
            <div className='flex items-center justify-center container mx-auto  px-10 lg:px-6 gap-8 mr-6'>
                <Image src={calendarpic} alt="pixelpic" width= {442} height= {433} className='hidden lg:flex ml-8'  />
                <div className='hidden lg:flex flex-col w-8/12 '>
                    <p className="font-semibold  text-gray text-4xl w-9/12 ">How to design your footer like we did</p>
                    <br/>
                    <p className='w-9/12 text-grey font-normal text-sm '> Designing your footer like we did involves a blend of aesthetics and functionality. Start by organizing content into clear, user-friendly sections such as contact information, quick links, and social media icons. Use a consistent color scheme and typography that aligns with your brand identity. Incorporate visual elements like logos or graphics to enhance the overall design. Ensure that the footer is responsive, adapting seamlessly across various devices.</p>
                    <button className='bg-lemon text-white  h-11 w-36 rounded lg:ml-0 ml-24 mt-5 '>Learn more</button>
                </div>
                <div className='flex flex-col items-center justify-center container mx-auto px-6 lg:hidden font-semibold  text-gray  text-[1.4rem]'>
                    <p>How to design your footer like we did</p> 
                    <p className='font-normal text-sm text-grey mt-2 '>Designing your footer like we did involves a blend of aesthetics and functionality. Start by organizing content into clear, user-friendly sections such as contact information, quick links, and social media icons. Use a consistent color scheme and typography that aligns with your brand identity. Incorporate visual elements like logos or graphics to enhance the overall design. Ensure that the footer is responsive, adapting seamlessly across various devices.</p>
                </div>
            </div>
            <button className='bg-lemon text-white  h-11 w-28 rounded lg:hidden ml-32 mt-5 text-sm'>Learn More</button>
        </div>

    </>
    )
}


export default Calendar
