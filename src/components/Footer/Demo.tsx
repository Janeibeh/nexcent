import React from 'react';
import whitearrow from '@images/whitearrow.png'
import Image from 'next/image';

const Demo = () => {
    return (
        <>
            <div className='bg-neutral py-7'>
                <div className="flex flex-col items-center justify-center container mx-auto lg:py-3 lg:px-0 px-6">
                    <p className="font-semibold lg:text-4xl text-[1.4rem]">Pellentesque suscript</p>
                    <p className="font-semibold lg:text-4xl text-[1.4rem]">fringilla libero eu.</p>
                    <button className='bg-lemon text-white  h-11 w-44 rounded mt-2 lg:mt-8 flex items-center justify-center gap-2'>Get a Demo 
                        <span className='pt-1'>  <Image src={whitearrow} width= {11} height= {6}  alt='arrow' /> </span> 
                    </button>
                </div>
            </div>
        </>
    );
};
export default Demo;
