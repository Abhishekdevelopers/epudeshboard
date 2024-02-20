import React from "react";
import "./Header.css";
import Logo1 from "../../../assets/Images/Logo1.png";
import himg from "../../../assets/Images/himg.png";
import { IoSearchOutline } from "react-icons/io5";
import { AiOutlineAim } from "react-icons/ai";
import { LuMessageSquare } from "react-icons/lu";
import { CiStar } from "react-icons/ci";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoLocationOutline } from "react-icons/io5";

// import { PiCube } from "react-icons/pi";
// import { CiHome } from "react-icons/ci";
import { FiHome } from "react-icons/fi";


import { RiGroupLine } from "react-icons/ri";
const Header = () => {
  return (
    <div className="maindash_sec dashbline">
      <div>
        <div className="row maindiv">
          <div>
            <img src={Logo1} className="iconimage" />
          </div>
          <div>
            <ul className="menuli">
              <li className="iconmenu">
                <FiHome />
                Home
              </li>
              <li className="iconmenu">
                <RiGroupLine />
                Group
              </li>
              <li className="iconmenu">
                <AiOutlineAim />
                My grid
              </li>
              <li className="iconmenu">
                <CiStar />
                Professional
              </li>
            </ul>
          </div>
          <div>
            <ul className="menuli">
              <li>
                <button className="headerbtn">
                  Search <IoSearchOutline />
                </button>
              </li>
              <li>
                <LuMessageSquare className="hicon" />
              </li>
              <li>
                <IoMdNotificationsOutline className="hicon" />
              </li>
              <li>
                <IoLocationOutline className="hicon" />
              </li>
              <li>OFFER</li>
              <li>
              <div class="form-check form-switch"><input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked/> NEED</div>
              </li>
              <li>
                <img src={himg} />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
