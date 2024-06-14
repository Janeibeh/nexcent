import React from 'react'
import Image from 'next/image';

interface MembershipCardProps {
    image: string;
    title: string;
    titletwo: string;
    descriptionOne: string;
    descriptionTwo: string;
    descriptionThree: string;
    }

    const  MembershipCard : React.FC<MembershipCardProps> = ({ image, title, titletwo, descriptionOne, descriptionTwo, descriptionThree  }) => {
    return (
    <>
        <div >
            <div className='flex flex-col items-center justify-center container mx-auto py-8 w-80  border border-white rounded-lg '>
                <div className='w-48 flex flex-col items-center justify-center  '>
                    <Image src={image}  alt='vectoricon' width= {65} height= {56}   />
                    <p className='text-3xl font-bold text-gray ml-4'>{title}</p>
                    <p className='text-3xl font-bold text-gray ml-4'>{titletwo}</p>
                </div>
                <p  className='font-normal text-sm text-grey  mt-2  '>{descriptionOne}</p>
                <p  className='font-normal text-sm text-grey  '>{descriptionTwo}</p>
                <p  className='font-normal text-sm text-grey '>{descriptionThree}</p>
              
            </div>
        </div>

    </>
    )
}

export default MembershipCard