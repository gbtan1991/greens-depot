import React from 'react'
import logo from '../image/logo.png'

const Logo = () => {
  return (
    <div className='flex flex-row gap-2'>
        <img src={ logo } alt='Lettuce Logo' className='w-7'/>
        <h1 className='uppercase font-theme font-bold text-2xl text-themeAccent hover:text-themeBlack transition-colors duration-300 '>Greens Depot</h1>
    </div>
  )
}

export default Logo
