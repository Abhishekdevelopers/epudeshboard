import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
    <div className="container-fluid">
      <nav className="mainnav">
        <Link to="/" className="title">
          Home
        </Link>
        <div
          className="menu"
          onClick={() => {
            setMenuOpen(!menuOpen);
          }}
        >
          <span className="mainspan"></span>
          <span className="mainspan"></span>
          <span className="mainspan"></span>
        </div>
      
        <ul className={menuOpen ? "open" : ""}>
          <li className="mainli">
            <NavLink to="/about">About</NavLink>
          </li>
          <li className="mainli">
            <NavLink to="/service">Service</NavLink>
          </li>
          <li className="mainli">
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </nav>
      </div>
    </>
  );
};
export default Navbar;
