import React from "react";
import './Headerpost.css'
import phimg from '../../../assets/Images/phimg.png'
const Headerpost = () =>{
    return(
        <div className="mainsec1">
        <div className="postheadermain">
            <div className="menu">
                <ul className="postheader">
                    <li className="headerpostlitext">All</li>
                    <li>Following</li>
                    <li>Followers</li>
                    <li>Saved</li>
                    <li>Tips</li>
                </ul></div>
            <div><img src={phimg}/></div>
        </div>
        </div>
    )
}
export default Headerpost;