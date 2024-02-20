import React from 'react'
import "./Menu.css"
import { FiHome } from "react-icons/fi";
import { GrGroup } from "react-icons/gr";
import { PiHeadsetDuotone } from "react-icons/pi";
import { HiOutlineWrenchScrewdriver } from "react-icons/hi2";
import { MdStarOutline } from "react-icons/md";
import { PiStar } from "react-icons/pi";
import { RiCustomerService2Line } from "react-icons/ri";








function Menu() {
  return (
    <div className='mynavbar'>
                  <ul>
                  <li><FiHome /><a href="#">Home</a></li>
                  <li><GrGroup /><a href="#">About us</a></li>
                    <li><HiOutlineWrenchScrewdriver /><a href="#">Our Services</a></li>
                    <li><RiCustomerService2Line /><a href="#">Contact Us</a></li>
                    <li><PiStar /><a href="#">Premium</a></li>
                  </ul>
                  
               </div>
  )
}

export default Menu
