import React from 'react'

const SlideThree = () => {
  return (
    <>
       <div className='bg-white w-full lg:h-[37rem] h-[30rem] p-5'> 
            <div className='container mx-auto flex flex-col lg:flex-row items-center justify-center lg:p-16  '>
                <div className=' space-y-6 lg:pt-12 pt-0 w-96'>
                    <div className='font-semibold text-5xl space-y-2'>
                        <p className='text-gray'>How to design your site footer like we did </p>
                    </div>
                    <p className='text-grey text-base'> This involves several key elements. First, ensure it includes essential information such as contact details, social media links, and a brief about section. Next, use a clean and simple layout to make navigation easy and intuitive. Incorporate a newsletter signup to engage visitors and build your mailing list. Additionally, include quick links to important pages like your portfolio, blog, and services. Highlight any awards or recognitions to build credibility. Use consistent branding and design elements to maintain a cohesive look with the rest of your site, ensuring a professional and polished appearance. Finally, make sure your footer is mobile-friendly to provide a seamless user experience across all devices. Regularly update the footer to keep information current and relevant.</p>
                    <button className='bg-lemon h-11 w-32 rounded text-white'>Learn more</button>
                </div>
            </div>      
        </div>
    </>
  )
}

export default SlideThree
