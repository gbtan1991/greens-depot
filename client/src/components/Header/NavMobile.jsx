import React, { useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

const NavMobile = ({navLinks}) => {

const [burgerMenu, setBurgerMenu] = useState(false);

const toggleBurgerMenuState = () => {
  setBurgerMenu(!burgerMenu);
 
}

    return (
   <div>

    <div>
      <button className=' w-10 h-10 text-2xl flex items-center justify-center' onClick={toggleBurgerMenuState}>
        {burgerMenu ? <IoClose /> : <GiHamburgerMenu /> }
      </button>
    </div>


{ burgerMenu && (
  <div className='w-full flex flex-col bg-themeAccent  absolute top-0 left-0 right-0 h-fit mt-[104px]'>
        <div className=''>      
        <ul className='flex flex-col items-center justify-center '>
          {navLinks.map((nav, index) => (
            <li key={index} className='py-2 border w-full '>
               <a href={nav.link} className='grid place-content-center'>
                <h4 className="flex items-center gap-5 font-theme font-medium uppercase text-themeBlack hover:text-themeAccent transition-colors duration-300 ">                
                {nav.icons}
                {nav.name}
                </h4>
                </a>
            </li>
          ))}
          </ul>
        </div>



        </div>

)}
    
          
        
        
     
    </div>
    
    

  )
}

export default NavMobile
