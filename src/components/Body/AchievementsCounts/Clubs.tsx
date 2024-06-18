import React from 'react'
import Image from 'next/image';
import handsicon from "@images/handsicon.png"

const Clubs = () => {
    return (
    <>
        <div className='flex items-center'>
                <Image src={handsicon} width={38} height={38} priority={true} alt="countone" /> 
                <div className='flex flex-col ml-4 '>
                        <h1 className='font-bold lg:text-2xl text-xl text-gray'>46,328</h1>
                        <p className='text-grey text-sm  mt-2'>Clubs</p>
                </div>
        </div>
    </>
    )
}

export default Clubs
