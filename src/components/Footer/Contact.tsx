import React from 'react'
import Image from 'next/image';
import logo from '@images/nexscent-Icon.png';

const Contact = () => {
    return (
    <>
        <div className='bg-black flex  text-white py-12 '>
            <div className='container  mx-auto'>
                    <span className='flex absolute pt-4' > <Image src={logo} width= {35} height= {24} alt="hero" /> <p className='font-bold '>Nexcent </p> </span>   
                        <br/>
                    <div className='flex flex-col lg:flex-row lg:gap-36 gap-8'>
                            <div className='w-96 pt-16 '>
                                <p>Copyright @ 2020 Nexscent ltd</p>
                                <p>All rights reserved</p>
                                <p></p>
                            </div>  

                            <div className=' w-20 space-y-4'>
                                <p className='relative  '>Company</p>
                                <br/>
                                <p>About us</p>
                                <p>Blog</p>
                                <p>Contact us</p>
                                <p>Pricing</p>
                                <p>Testimonials</p>
                            </div>

                            <div className=' w-48 space-y-4'>
                                <p className='relative  '>Support</p>
                                <br/>
                                <p>Help center</p>
                                <p>Terms of service</p>
                                <p>Legal</p>
                                <p>Privacy policy</p>
                                <p>Status</p>
                            </div>

                            <div className='bg-black w-96 space-y-4'>
                                <p className='relative  '>Stay up to date</p>
                                <br/>
                                <button className='bg-gray w-64 h-10 rounded-lg'>Your email address</button>
                                
                            </div>
                        </div>     
                        

            </div>
        </div>
    </>
    )
}

export default Contact
