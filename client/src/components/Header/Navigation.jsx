import React from "react";
import NavDesktop from "./NavDesktop";
import NavMobile from  "./NavMobile";

import { FaHome, FaUser, FaPaperPlane } from "react-icons/fa";
import { FaShop } from "react-icons/fa6";
import { IoIosChatbubbles } from "react-icons/io";


const Navigation = ({toggleBurgerMenu}) => {
  const navLinks = [
    {
      name: "home",
      link: "/",
      icons: <FaHome />
    },
    {
      name: "shop",
      link: "/shop",
      icons: <FaShop />
    },
    {
      name: "about",
      link: "/about",
      icons: <FaUser />
    },
    {
      name: "blogs",
      link: "/blogs",
      icons: <IoIosChatbubbles />
    },
    {
      name: "contact",
      link: "/contact",
      icons: <FaPaperPlane />
    }
    
  ];

  return (
    <div>
         <div className="block lg:hidden">        
            <NavMobile navLinks={navLinks} toggleBurgerMenu={toggleBurgerMenu}/>
        </div>
        <div className="hidden lg:block">
            <NavDesktop navLinks={navLinks}/>
        </div>
       
    </div>
  );
};

export default Navigation;
