import React from 'react'

const NavDesktop = ({navLinks}) => {
  return (
    <div>
       <ul className="flex flex-row gap-3 uppercase">
        {navLinks.map((nav, index) => (
          
            <li key={index} >
                <a href={nav.link} >
                <h4 className="flex items-center gap-2 font-theme font-medium text-themeBlack hover:text-themeAccent transition-colors duration-300">                
                {nav.icons}
                {nav.name}
                </h4>
                </a>
            </li>

          
        ))}
      </ul>
    </div>
  )
}

export default NavDesktop
