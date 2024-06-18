import React from 'react'
import Payment from './Payment';
import Clubs from './Clubs';
import EventBookings from './Eventbookings';
import Members from './Members';

const AchievementsCounts = () => {
    return (
    <>
        <div className='lg:py-7  py-3'>
            <div className='bg-neutral lg:h-64 h-96 flex items-center justify-center'>
                <div className='flex flex-col lg:flex-row lg:space-x-52 container mx-auto px-4 lg:px-28 '>
                    <div className='flex flex-col lg:items-start items-center justify-center  lg:py-16 py-6 lg:ml-18'>
                        <h1 className='font-semibold lg:text-3xl text-2xl   text-gray'  >Helping a local </h1>
                        <h1 className='text-lemon font-semibold text-2xl lg:text-3xl lg:ml-0 ml-8'>business reinvent itself </h1>
                        <p className='text-gray lg:text-base text-sm mt-2 '>We reached here with our handwork and dedication</p>
                    </div>
                    <div className='flex items-center justify-center h-32 lg:mt-10 lg:w-2/5 gap-4 lg:gap-24 lg:pt-3 lg:px-auto px-2 '>
                        <div className='flex-col flex space-y-4 '>
                            <Members/>
                            <EventBookings/>
                        </div>
                        <div className='flex-col flex space-y-4 '>
                            <Clubs/>
                            <Payment/>                      
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    </>
    )
}

export default AchievementsCounts