import React from 'react'
import Image from 'next/image';

interface HeroCardProps {
    image: string;
    titleone: string;
    titletwo: string;
    paragraph: string;
    button: string;
    }


    const HeroCard = ({ image, titleone, titletwo, paragraph, button }: HeroCardProps) => {
    return (
    <>
        <div className='bg-neutral lg;h-[35rem] '>
            <div className='container mx-auto flex flex-col lg:flex-row items-center justify-between py-16 px-0 '>
                <div className='flex flex-col items-start lg:gap-4 gap-1 '>
                    <h1 className='font-semibold lg:text-7xl text-5xl  text-gray'  >{titleone} </h1>
                    <h1 className='text-lemon font-semibold lg:text-6xl text-5xl lg:ml-0 ml-8'> {titletwo}</h1>
                    <p className='text-grey text-base mt-2'>{paragraph}</p>
                    <button className='bg-lemon text-white  h-11 w-28 rounded lg:ml-0 ml-24 mt-5 '>{button}</button>
                </div>
                <div className=''>
                    <Image src={image} width={391} height={407}  alt={titleone} className='w-96 h-96' />
                </div>
            </div>
        </div>
    </>
    )
}

export default HeroCard



