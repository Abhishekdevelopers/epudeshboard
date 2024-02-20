// import React, { useState } from "react";
// import { Link, NavLink } from "react-router-dom";
// import Logo1 from "../../../assets/Images/Logo1.png";
// import "./Hnavbar.css";
// const Hnavbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   return (
//     <>
//     <div >
//       <nav className="mainnav">
//         <Link to="/" className="title">
//         <img src={Logo1} className="iconimage1" />
//         </Link>
//         <div
//           className="menu1"
//           onClick={() => {
//             setMenuOpen(!menuOpen);
//           }}
//         >
//           <span className="mainspan"></span>
//           <span className="mainspan"></span>
//           <span className="mainspan"></span>
//         </div>
      
//         <ul className={menuOpen ? "open" : ""}>
//         <li className="mainli">
//             <NavLink to="/about">About</NavLink>
//           </li>
//           <li className="mainli">
//             <NavLink to="/service">Service</NavLink>
//           </li>
//           <li className="mainli">
//             <NavLink to="/contact">Contact</NavLink>
//           </li>
//             {/* <ul className="menuul">
//                </ul> */}
          
//         </ul>
//       </nav>
//       </div>
//     </>
//   );
// };
// export default Hnavbar;

// import React, { useState } from "react";
// import { Link, NavLink } from "react-router-dom";
// import Logo1 from "../../../assets/Images/Logo1.png";
// import { FiHome } from "react-icons/fi";
// import { AiOutlineAim } from "react-icons/ai";
// import { CiStar } from "react-icons/ci";
// import { RiGroupLine } from "react-icons/ri";
// import "./Hnavbar.css";
// const Hnavbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   return (
//     <>
//     <div >
//       <nav className="mainnav">
//         <Link to="/" className="title">
//         <img src={Logo1} className="iconimage1" />
//         </Link>
//         <div
//           className="menu"
//           onClick={() => {
//             setMenuOpen(!menuOpen);
//           }}
//         >
//           <span className="mainspan"></span>
//           <span className="mainspan"></span>
//           <span className="mainspan"></span>
//         </div>
//         <ul  className={menuOpen ? "open" : ""}>
//           <li className="mainli">
//             <NavLink to="/about"><FiHome />Home</NavLink>
//           </li>
//           <li className="mainli">
//             <NavLink to="/service"> <RiGroupLine />Group</NavLink>
//           </li>
//           <li className="mainli">
//             <NavLink to="/my-grid"><AiOutlineAim />My grid</NavLink>
//           </li>
//           <li className="mainli">
//             <NavLink to="/professional"><CiStar />Professional</NavLink>
//           </li>
//         </ul>
       
//       </nav>
//       </div>
//     </>
//   );
// };
// export default Hnavbar;


import React, { useState } from "react";
import './Hnavbar.css';
import { RxCross2 } from "react-icons/rx";
import Logo1 from "../../../assets/Images/Logo1.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { FiHome } from "react-icons/fi";
import { CiStar } from "react-icons/ci";
import { RiGroupLine } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import { AiOutlineAim } from "react-icons/ai";
const Hnavbar = () =>{
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
            <span><img src={Logo1} className="iconimage" /></span>
            {/* <i className="fas fa-code"></i> */}
            
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
               <FiHome /> Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/group"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                <RiGroupLine /> Group
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/grid"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                <AiOutlineAim /> My grid
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/professional"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
               <CiStar /> Professional
              </NavLink>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            {/* <i className={click ? "fas fa-times" : "fas fa-bars"}></i> */}

            {click ? (
              <span className="icon">
                <RxCross2 />{" "}
              </span>
            ) : (
              <span className="icon">
                <GiHamburgerMenu />
              </span>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}

export default Hnavbar