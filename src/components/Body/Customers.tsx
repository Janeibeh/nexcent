import React from 'react'
import Image from 'next/image';
import tImage from '@images/T-image.png';
import { customerIcons } from '@/constants/customerIcons';
import arrowicon from '@images/Right-arrow.png'



const Customers = () => {
    return (
    <>
        <div className='py-2 bg-neutral'>
            <div className='flex flex-col lg:flex-row items-start lg:gap-10 container mx-auto lg:px-6  mr-1 pt-6'>
                <Image src={tImage} alt="pixelpic" width= {326} height= {326} className=' px-7 lg:px-0 lg:ml-0 ml-6'  />
                <div className='flex flex-col lg:w-9/12 lg:px-6 pl-16'> 
                    <p className='w-9/12 text-grey font-medium text-base '>A fundamental aspect of building strong relationships and ensuring satisfaction. By interacting directly with customers, businesses can gain valuable insights into their needs and preferences. This personal touch not only helps in resolving issues efficiently but also fosters loyalty. Regularly scheduled meetings, whether in-person or virtual, create opportunities to gather feedback and make informed decisions. Listening to customers' concerns and suggestions can lead to innovative solutions and improvements. It demonstrates a commitment to customer-centric service.</p>
                    <div className='space-y-3'>
                        <h6 className='text-xl text-lemon font-semibold pt-2'>Tim smith</h6>
                        <p className=' text-grey text-sm font-normal'>British Dragon Boat Racing Association</p>
                        <div className='flex items-center space-x-2  lg:space-x-10 mr-10 lg:mr-auto'>
                            {customerIcons.map((item) => (
                                <Image src={item.image} key={item._id} alt='customerIcons' width= {28} height= {27}   />
                            ))} 
                            <div className='flex items-center w-24 lg:w-auto text-sm gap-0 lg:gap-3 lg:font-semibold'>
                            <p className='text-lemon '>Meet all customers</p>
                            <Image src={arrowicon} alt='arrow'/>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}

export default Customers
