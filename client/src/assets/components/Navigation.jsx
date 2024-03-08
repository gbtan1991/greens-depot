import React from "react";
import NavDesktop from "./NavDesktop";
import NavMobile from  "./NavMobile";

const Navigation = () => {
  const navLinks = [
    {
      name: "home",
      link: "/",
    },
    {
      name: "shop",
      link: "/shop",
    },
    {
      name: "about",
      link: "/about",
    },
    {
      name: "blog",
      link: "/blog",
    },
    {
      name: "contact",
      link: "/contact",
    },
    {
      name: "Cart",
      link: "/cart",
    },
  ];

  return (
    <div className="">
         <div className="block lg:hidden">        
            <NavMobile navLinks={navLinks}/>
        </div>
        <div className="hidden lg:block">
            <NavDesktop navLinks={navLinks}/>
        </div>
       
    </div>
  );
};

export default Navigation;
