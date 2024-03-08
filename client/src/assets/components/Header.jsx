import React from 'react'
import Logo from './Logo'
import EventBanner from './EventBanner'
import Navigation from './Navigation'

const Header = () => {
  return (
    <div className='flex flex-col w-screen'>
      <div className='hidden lg:block'>
     <EventBanner />
     
     </div>
     <div className='w-full flex flex-row  lg:justify-around py-3  lg:py-5'>
     <Logo />
     <Navigation />
     </div>

    </div>
  )
}

export default Header
