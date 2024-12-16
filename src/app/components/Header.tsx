import React from 'react'
import { VscAccount } from "react-icons/vsc";
import { IoSearch } from "react-icons/io5";
import { IoHeartOutline } from "react-icons/io5";
import { MdOutlineShoppingCart } from "react-icons/md";

const Header = () => {
  return (

        <nav className="flex justify-between bg-[#FBEBB5]">
          <div className="container mx-auto px-4 flex justify-between items-center py-4">
            {/* Left side - Logo */}
            <div className="text-xl font-semibold">
              <a href="/">Logo</a>
            </div>
    
            {/* Center - Navigation Links */}
            <ul className="hidden md:flex space-x-8">
              <li>
                <a href="#" className="text-black">
                  Home
                </a>
              </li>
              <li>
                <a href="#shop" className="text-black">
                  Shop
                </a>
              </li>
              <li>
                <a href="#about" className="text-black">
                  About
                </a>
              </li>
              <li>
                <a href="#contact" className="text-black">
                  Contact
                </a>
              </li>
            </ul>
    
            {/* Right side - Icons */}
            <div className="flex space-x-6 items-center">
            <VscAccount className='text-black size-5' />
    <IoSearch className='text-black size-7 mx-3'/>
    <IoHeartOutline className='text-black size-6 mx-1'/>
    <MdOutlineShoppingCart className='text-black size-6 mx-1'/>
            </div>
          </div>
        </nav>
      );
    };
  
    export default Header;
    