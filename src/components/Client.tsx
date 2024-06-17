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
        </div> 

        

    </>
    )
}

export default Client












