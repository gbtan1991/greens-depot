import React from 'react'

const NavDesktop = ({navLinks}) => {
  return (
    <div>
       <ul className="flex flex-row gap-3 uppercase">
        {navLinks.map((nav, index) => (
          
            <li key={index}>
                <a href={nav.link} >
                <h4 className="font-theme font-medium">                
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
