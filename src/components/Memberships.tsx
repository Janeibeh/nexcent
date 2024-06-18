import MembershipCard from '@/cards/MembershipCard'
import React from 'react'
import { membershipData } from '@/constants/membershipData';


const Memberships = () => {
    return (
    <>
        <div className='flex flex-col lg:flex-row items-center justify-center lg:space-x-28 space-x-0 space-y-8 lg:space-y-0 '  > 
            {membershipData.map((item) => (
                <MembershipCard
                    key={item._id}
                    image={item.image} 
                    title= {item.title}
                    titletwo= {item.titletwo}
                    descriptionOne= {item.descriptionOne}    
                    descriptionTwo={item.descriptionTwo} 
                    descriptionThree= {item.descriptionThree}              
                />
            ))}
        </div> 
    </>
    )
}

export default Memberships