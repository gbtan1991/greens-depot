import React from 'react'
import Logo from './Logo'
import EventBanner from './EventBanner'
import Navigation from './Navigation'
import logo1 from '../../assets/image/logo.png'

const Header = () => {
  return (
    <div className='flex flex-col w-screen'>
      <div className='hidden lg:block'>
     <EventBanner />
     
     </div>
     <div className='w-full flex flex-row items-center justify-between lg:justify-around py-8 px-5 lg:py-5 lg:h-fit'>
     <Logo textColor="text-themeAccent" textHover="text-themeBlack" logo={logo1}/>
     <Navigation />
     </div>

    </div>
  )
}

export default Header
