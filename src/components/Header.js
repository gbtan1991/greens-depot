import React from 'react'
import Logo from './Logo'
import Navigation from './Navigation'

const Header = () => {
  return (
    <div className='flex flex-row items-center justify-between bg-themeNeutral lg:px-7 lg:m-7'>
      <Logo />
      <Navigation />
    </div>
  )
}

export default Header
