import React from 'react'
import Image from 'next/image';
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
        <div className='border rounded-lg w-10 h-12 border-grey '>
            <Image src={image} alt="community" width= {366} height= {288} className=''/>
            <div className='bg-neutral rounded-lg w-205  h-44 px-2 flex flex-col items-center py-4'>
                <p>{paragraph}</p>
                <p>{paragraphone}</p>
                <p>{paragraphtwo}</p>
                <button className='py-2 text-lemon'>{button}</button>
            </div>
        </div>
    </>
    )
}

export default CommunityUpdatesCard