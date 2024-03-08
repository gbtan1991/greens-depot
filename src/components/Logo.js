import React from 'react';
import logo from "../images/logo.png"
import { Link } from 'gatsby';

const Logo = () => {
  return (
    <div>
      <Link to={"/"} className='flex flex-row items-center'>
      <img src={logo} alt="My Logo" className='w-24 lg:w-32' />
      <h1 className='hidden md:block text-4xl font-sans text-themeText'>Greens Depot</h1>
      </Link>
    </div>
  );
};

export default Logo;