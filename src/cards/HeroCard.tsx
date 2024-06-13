import React from 'react'
import Image from 'next/image';

const HeroCard = ({image,titleone,titletwo,paragraph,button}) => {
    return (
    <>
        <div className='bg-neutral lg;h-[35rem] '>
            <div className='container mx-auto flex flex-col lg:flex-row items-center justify-between py-16 px-0 '>
                <div className='flex flex-col items-start lg:gap-4 gap-1 '>
                    <h1 className='font-semibold lg:text-7xl text-5xl  text-gray'  >{titleone} </h1>
                    <h1 className='text-lemon font-semibold lg:text-6xl text-5xl lg:ml-0 ml-8'> {titletwo}</h1>
                    <p className='text-grey text-base mt-2'>{paragraph}</p>
                    <button className='bg-lemon text-white  h-11 w-28 rounded lg:ml-0 ml-24 mt-5 '>{button}</button>
                </div>
                <div className=''>
                    <Image src={image} width={391} height={407}  alt={titleone} className='w-96 h-96' />
                </div>
            </div>
        </div>
    </>
    )
}

export default HeroCard


//         <div className='bg-white w-full lg:h-[37rem] h-[60rem]'> 
//             <div className='container mx-auto flex flex-col lg:flex-row  items-start justify-between px-8 lg:pt-16 pt-10'>
//                 <div className=''>
//                     <Image src={HeroImgTwo} alt="hero" width={497}  height={507}/>
//                 </div>
//                 <div className='flex flex-col items-start  mr-0 lg:mr-32 lg:py-14 border lg:w-[36rem]'>
//                     <h1 className='font-semibold  lg:text-4xl text-2xl  text-gray mt-6'>The unseen of spending three     </h1>
//                     <h1 className='font-semibold  lg:text-4xl text-2xl  text-gray'>years at Pixel grade</h1>
//                     <br/>
//                     <p className='text-grey text-base '>These includes the development of a well-designed website and complete control over branding and content. You gain the ability to showcase your best work in a portfolio to facilitate direct sales and bookings, which enhances credibility with clients.These elements creates a strong professional foundation for your photography business.</p>
//                     <p className='text-grey text-base '> control over branding and content. You gain the ability to showcase your  </p>
//                     <p>work in a portfolio to facilitate direct sales and bookings, which enhances credibility </p>
//                     <p> with clients.These elements creates a strong professional foundation for your photography business.</p>
//                     <button className='bg-lemon h-11 w-32 rounded text-white  mt-5 '>Learn more</button>
//                 </div>
//             </div>  

//         </div> 

