import React from 'react'
import logo from '../../assets/image/logo.png'

const Logo = ({ textColor, textHover, logo}) => {
  
  return (
    <div>
        <a href='/' className='flex flex-row gap-2'>
        <img src={ logo } alt='Lettuce Logo' className='w-8 h-8'/>
        <h1 className={`uppercase font-theme font-bold text-2xl ${textColor} hover:${textHover} transition-colors duration-300`}>Greens Depot</h1>
        </a>
    </div>
  )
}

export default Logo
