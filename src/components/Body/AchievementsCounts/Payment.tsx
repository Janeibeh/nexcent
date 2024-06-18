import React from 'react'
import Image from 'next/image';
import countfour from "@images/count-four-icon.png"

const Payment = () => {
    return (
    <>
        <div className='flex items-center '>
                <Image src={countfour} width={38} height={38} priority={true} alt="countone" /> 
                <div className='flex flex-col ml-4 '>
                        <h1 className='font-bold lg:text-2xl text-xl text-gray'>1,926,436</h1>
                        <p className='text-grey text-sm  mt-2'>Payments</p>
                </div>
        </div>
    </>
    )
}

export default Payment
