import React, { useEffect } from 'react'
import Image from 'next/image';
import { clienticons } from '@/constants/clientsicons';
import Community from './Community';
import Memberships from './Memberships';
import AOS from "aos"
import 'aos/dist/aos.css';


// Initialize AOS 
const Client = () => {
    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, []);
    
    return (
    <>
        <div>
            <div className='flex flex-col items-center justify-center container mx-auto py-8 lg:px-0 px-6 '>
                <p className="font-semibold  text-gray lg:text-4xl text-3xl">Our Clients</p>
                <p className='text-grey lg:text-base text-[0.85rem]	py-2 '>We have been working with some fortune 500+ clients</p>
                <div className='flex  items-center justify-between lg:gap-10 gap-4  lg:space-x-28 space-x-0 lg:p-0 lg:pt-7 pt-5 ' data-aos="fade-left">
                    {clienticons.map((item) => (
                        <Image src={item.image} key={item._id}  alt='vectoricon' width= {28} height= {27}   />
                    ))}
                </div>
            </div>
            <Community/>
            <Memberships/>


            {/* <div className='bg-neutral h-[50rem] lg:h-[35rem]'>
            <div className='container mx-auto flex flex-col lg:flex-row items-center justify-between py-16 px-0 '>
                <div className='flex flex-col items-start lg:gap-4 gap-1 '>
                    <h1 className='font-semibold lg:text-7xl text-5xl  text-gray'  ></h1>
                    <h1 className='text-lemon font-semibold lg:text-6xl text-5xl lg:ml-0 ml-8'> </h1>
                    <p className='text-grey text-base mt-2'></p>
                    <button className='bg-lemon text-white  h-11 w-28 rounded lg:ml-0 ml-24 mt-5 '></button>
                </div>
                {/* <div className=''>
                    <Image src={image} width={391} height={407} priority={true}   alt="" className=' h-96 ' />
                </div> */}
            {/* </div>
        </div> */} 





        </div> 
    </>
    )
}

export default Client












