import React from 'react'
import Image from 'next/image';
import CommunityUpdatesCard from '../../cards/CommunityUpdatesCard';
import { communityUpdates } from '../../constants/communityupdatesdata';

const CommunityUpdates = () => {
  return (
    <>
      <div className=' w-auto lg:w-8/12 flex flex-col items-center justify-center container mx-auto pt-7 lg:px-0 px-9 '>
            <p className="font-semibold text-gray lg:text-4xl text-[1.4rem] py-3">Caring is the new marketting</p>  
            <div className='lg:flex flex-col items-center justify-center hidden text-grey text-base gap-1'>
                <p >The Nexcent blog is the best place to read about the latest membership insight </p>
                <p>trends and more. See who&apos;s joining the community, read about how our community</p>
                <p>are increasing their membership icome and lot&apos;s more. </p>
            </div>
            <p className='text-[0.85rem] text-grey lg:hidden'>The Nexcent blog is the best place to read about the latest membership insight trends and more. See who's joining the community, read about how our community are increasing their membership icome and lot's more </p>    
            <div className='py-4 flex flex-col lg:flex-row lg:space-x-6 space-y-8 lg:space-y-0'>
                {communityUpdates.map((item) => (
                    <CommunityUpdatesCard
                        key={item._id}
                        image={item.image}
                        paragraph={item.paragraph}
                        paragraphone={item.paragraphone}
                        paragraphtwo={item.paragraphtwo}
                        button={item.button}
                    />
                ))}         
            </div>
        </div>
    </>
  )
}
export default CommunityUpdates
