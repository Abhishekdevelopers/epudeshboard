import React from "react";
import './Rsidebar.css'
import { CiFaceSmile } from "react-icons/ci";
import { IoLocationOutline } from "react-icons/io5";
import arrow from'../../../assets/Images/arrow.png'
import himg from "../../../assets/Images/himg.png";
import frames from "../../../assets/Images/framers.png";

import { CiCamera } from "react-icons/ci";
import { CiImageOn } from "react-icons/ci";
import { CiFolderOn } from "react-icons/ci";
import { FaAngleDown } from "react-icons/fa";
import { BiPhoneCall } from "react-icons/bi";
import featuicone from '../../../assets/Images/featuicone.png'
import featuremsgicon from '../../../assets/Images/featuremsgicon.png'
import { AiOutlineClockCircle } from "react-icons/ai";


const Rsidebar = () =>{
    return(
        <div >

               {/* header */}

            <div className="maindivrside">
              <IoLocationOutline className="risideicon"/>
              <div className="headerlist">
              <ul className="rullist">
                <li className="rsidli1">Hamburg,20095</li>
                <li className="rsidli2">Radius 5 miles</li>
              </ul>
              <ul className="rullist">
                <li></li>
                <li ><button className="rsidli3">Change address</button></li>
              </ul>
              </div>
            </div>
               
                {/* post */}

            <div className="creatpostrs">

            <div className="main_addressrs row">
                <div>
                    <img src={himg} className="postimg"></img>
                </div>
                <div className="address_Sec">
                    <CiFaceSmile className="addressicon"/>
                    <input 
                    type="text"
                    placeholder="Create a post"
                    className="inputrside"
                    />
                    <button className="butticonrside"><img src={arrow} /></button>
                </div>
  
            </div>

            <div >
            <ul className="rsmenu">
                <li className="remenu_li">Offer</li>
                <li>Need</li>
                <li>Tips</li>
                <li>Reference</li>
            </ul>
            </div>
            <div >
                <ul className="rsidebaricon">
                    <li><CiCamera /></li>
                    <li><CiImageOn /></li>
                    <li><CiFolderOn /></li>
                </ul>
           
          
           
            </div>
            </div>

            {/* feature */}

            <div className="featuresec">
              <div className="featuresec1">
                <ul className="featureul">
                    <li className="rsidebarlitext">11 Nov,Mon</li>
                    <li className="featuliicone"><FaAngleDown /></li>
                </ul>
                <p className="featurtextsee">SEE ALL</p>
              </div>
              <div >
                <div>
                    <ul className="featuresub1">
                        <li className="featureliicone"><BiPhoneCall /></li>
                        <li >Call with Samantha</li>
                    </ul>
                </div>
                <div>
                    <ul className="featuresub2">
                        <li className="featurlitext">Call with Samatha</li>
                        <li className="featurtime">09:30-09:40</li>
                    </ul>
                </div>
              </div>
              <div >
                <div>
                    <ul className="featuresub1">
                        <li><img src={featuicone}/></li>
                        <li>Operation Eleven</li>
                    </ul>
                </div>
                <div>
                    <ul className="featuresub2">
                        <li className="featurlitext">Lorem ipsum dolor sit amrt....</li>
                        <li className="featurtime">09:45-09:55</li>
                    </ul>
                </div>
              </div>
              <div >
                <div>
                    <ul className="featuresub1">
                    <li><img src={featuicone}/></li>
                        <li>Private Group Something</li>
                    </ul>
                </div>
                <div>
                    <ul className="featuresub2">
                        <li className="featurlitext">Lorem ipsum dolor sit amrt....</li>
                        <li className="featurtime">11:45-12:25</li>
                    </ul>
                </div>
              </div>
              <div >
                <div className="featuresubmain3">
                    <ul className="featuresub3">
                        <li><img src={featuremsgicon}/></li>
                        <li>Private Group Something</li>
                    </ul>
                    <p><AiOutlineClockCircle /></p>
                </div>
                <div>
                    <ul className="featuresub2">
                        <li className="featurlitext">Lorem ipsum dolor sit amrt....</li>
                        <li className="featurtime">11:45-12:25</li>
                    </ul>
                </div>
              </div>
            </div>

            {/* frameimg */}
            <div>
                <img src={frames} className="frameimg"></img>
            </div>
        </div>
    )
}
export default Rsidebar;