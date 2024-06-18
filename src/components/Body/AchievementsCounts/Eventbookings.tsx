import React from 'react'
import Image from 'next/image';
import counttwo from "@images/count-two-icon.png"

const EventBookings = () => {
    return (
    <>
        <div className='flex items-center'>
                <Image src={counttwo} width={38} height={38} priority={true} alt="countone" /> 
                <div className='flex flex-col ml-4 '>
                        <h1 className='font-bold lg:text-2xl text-xl text-gray'>828,867</h1>
                        <p className='text-grey text-sm mt-2'>Event Bookings</p>
                </div>
        </div>
    </>
    )
}

export default EventBookings