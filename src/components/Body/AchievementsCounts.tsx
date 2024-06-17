import React from 'react'
import Image from 'next/image';
import countone from "@images/count-icons-one .png"

const AchievementsCounts = () => {
    return (
    <>
        <div className='py-8'>
            <div className='bg-neutral lg:h-64 h-96 '>
                <div className='flex flex-col lg:flex-row container mx-auto lg:px-20 lg:gap-2'>
                    <div className='flex flex-col lg:items-start items-center justify-center py-16'>
                        <h1 className='font-semibold lg:text-3xl text-2xl   text-gray'  >Helping a local </h1>
                        <h1 className='text-lemon font-semibold text-2xl lg:text-3xl lg:ml-0 ml-8'>business reinvent itself </h1>
                        <p className='text-black text-base mt-2 '>We reached her with our handwork and dedication</p>
                    </div>
                    <div className='flex-col flex'>
                        <div className='flex items-center'>
                            <Image src={countone} width={38} height={38} priority={true} alt="countone" /> 
                            <div className='flex flex-col ml-4'>
                                <h1 className='font-bold text-2xl lg:text-3xl'>2,245,341</h1>
                                <p className='text-grey text-base mt-2'>Members</p>
                            </div>
                        </div>
                        <div className='flex items-center'>
                            <Image src={countone} width={38} height={38} priority={true} alt="countone" /> 
                            <div className='flex flex-col ml-4'>
                                <h1 className='font-bold text-2xl lg:text-3xl'>2,245,341</h1>
                                <p className='text-grey text-base mt-2'>Members</p>
                            </div>
                        </div>
                    </div>
                    <div className='flex-col flex'>
                        <div className='flex items-center'>
                            <Image src={countone} width={38} height={38} priority={true} alt="countone" /> 
                            <div className='flex flex-col ml-4'>
                                <h1 className='font-bold text-2xl lg:text-3xl'>2,245,341</h1>
                                <p className='text-grey text-base mt-2'>Members</p>
                            </div>
                        </div>
                        <div className='flex items-center'>
                            <Image src={countone} width={38} height={38} priority={true} alt="countone" /> 
                            <div className='flex flex-col ml-4'>
                                <h1 className='font-bold text-2xl lg:text-3xl'>2,245,341</h1>
                                <p className='text-grey text-base mt-2'>Members</p>
                            </div>
                        </div>
                    </div>

                   
                
                </div>
                
            </div>
        </div>
    </>
    )
}

export default AchievementsCounts