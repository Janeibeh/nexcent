import React from 'react'
import Image from 'next/image';
import countone from "@images/count-icons-one .png"

const Members = () => {
    return (
    <>
        <div className='flex items-center'>
                <Image src={countone} width={38} height={38} priority={true} alt="countone" /> 
                        <div className='flex flex-col ml-4'>
                                <h1 className='font-bold lg:text-2xl text-xl text-gray'>2,245,341</h1>
                                <p className='text-grey  text-sm mt-2'>Members</p>
                        </div>
        </div>
    </>
    )
}

export default Members
