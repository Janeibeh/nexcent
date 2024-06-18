import React from 'react'
import Image from 'next/image';
import arrowicon from '@images/Right-arrow.png'

interface CommunityCardProps {
    image: string;
    paragraphone: string;
    paragraphtwo: string;
    paragraph: string;
    button: string;
    }

    const CommunityUpdatesCard: React.FC<CommunityCardProps> = ({ image, paragraphone, paragraphtwo, paragraph, button }) => {
    return (
    <>
        <div className='border rounded-lg w-10 h-12 '>
            <Image src={image} alt="community" width= {366} height= {288} className=''/>
            <div className='bg-neutral border  rounded-lg  h-44 px-2 flex flex-col items-center py-4'>
                <p>{paragraph}</p>
                <p>{paragraphone}</p>
                <p>{paragraphtwo}</p>           
                <button className='py-2 text-lemon flex gap-1'>{button} <span>  <Image src={arrowicon} width= {24} height= {24} alt='arrow'/></span></button>
            </div>
        </div>
    </>
    )
}

export default CommunityUpdatesCard