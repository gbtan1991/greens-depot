import React from 'react'
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { MdPolicy } from "react-icons/md";
import { FaDollarSign } from "react-icons/fa";

const EventBanner = () => {

    const currentEvent = [
        {
            icon: <FaPhone />,
            detail: '+91 987654321',
        },
        {
            icon: <MdEmail />,
            detail: 'info@example.com',
        },
        {
            icon: <MdPolicy />,
            detail: '3-5 Business days Delivery & Free Returns',
        }, 
        // {
        //     icon: <FaDollarSign />,
        //     detail: 'We are now on SALE 50% of on Selected Products'
        // }

    ]
                
 

    
  return (
    
    <div className='w-full bg-themeAccent h-8 text-themeWhite'>
    <div className='flex flex-row justify-evenly items-center h-full'>
    {currentEvent.map((item, index) =>(
        <div key={index} className='flex flex-row items-center text-sm'>
            {item.icon}
            <span className='ml-1'>{item.detail}</span>
        </div>
        
    ))}
    </div>
    </div>
  )



  
}

export default EventBanner
