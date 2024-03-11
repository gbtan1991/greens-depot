import React, {useState} from 'react'
import Logo from './Logo'
import EventBanner from './EventBanner'
import Navigation from './Navigation'
import logo1 from '../../assets/image/logo.png'

const Header = () => {

  const [burgerMenuOpen, setBurgerMenuOpen] = useState(false)
  
  


    const toggleBurgerMenu = () => {
       setBurgerMenuOpen(!burgerMenuOpen);
    }


  return (
    <div className={`flex flex-col w-screen` }>
      <div className='hidden lg:block'>
     <EventBanner />
     
     </div>
     <div className='w-full flex flex-row items-center justify-between lg:justify-around py-8 px-5 lg:py-5 lg:h-fit'>
     <Logo textColor="text-themeAccent" textHover="text-themeBlack" logo={logo1} />
     <Navigation toggleBurgerMenu={toggleBurgerMenu}/>
     </div>

    </div>
  )
}

export default Header
