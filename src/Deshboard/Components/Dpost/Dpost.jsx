import React from "react";
import './Dpost.css'
// import phimg from '../../../assets/Images/phimg.png'
import postimg from '../../../assets/Images/postimg.png'
import postmainimg from '../../../assets/Images/postmainimg.png'
import { TbHandTwoFingers } from "react-icons/tb";

import { FaRegBookmark } from "react-icons/fa6";

import { CiFaceSmile } from "react-icons/ci";

import { LuHeartHandshake } from "react-icons/lu";
import { LuMessageSquare } from "react-icons/lu";
import { FaRegHeart } from "react-icons/fa";
import { IoShareSocialOutline } from "react-icons/io5";

import { BsThreeDotsVertical } from "react-icons/bs";
import arrow from '../../../assets/Images/arrow.png'
const Dpost = () =>{
    return(
        <div className="mainsecscrol">
        <div className="mainsec">
        {/* <div className="postheadermain">
            <div>
                <ul className="postheader">
                    <li>All</li>
                    <li>Following</li>
                    <li>Followers</li>
                    <li>Saved</li>
                    <li>Tips</li>
                </ul></div>
            <div><img src={phimg}/></div>
        </div> */}
          <div>
             <div className="mainpostul">
                <img src={postimg}/>
                <div className="uldiv">
                <div>
                <ul className="ulpost">
                    <li className="headerpostlitext">Amanda Berry</li>
                    <li className="litextcolor">Match40%</li>
                </ul>
                </div>
                <div>
                <ul className="ulpost">
                    <li>Today at 09:30</li>
                    <li className="postlike"><LuHeartHandshake />10</li>
                </ul>
                </div>
                </div>
                
             </div>
          </div>

          <div>
            <ul className="posttxh">
                <li className="posttexli">Fusce non efficitur sem. Proin tincidunt</li>
                <li className="lihtext">Price: $100/hr</li>
            </ul>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et justo ac urna cursus varius. Vestibulum euismod purus vel efficitur varius. Fusce non efficitur sem. Proin tincidunt, nunc ut suscipit rhoncus, sapien ligula consequat dol, felis neque vel nunc. Sed sem per tortor vel urna cursus, eget aliquam elit vestibulum.</p>
            <ul className="posttxbtn">
                <li><button className="postbtn">ENQUIRE NOW</button></li>
                <li><button className="postbtn1">EASY APPLY</button></li>
            </ul>
            <img src={postmainimg} className="postimg1"/>
            
            <div className="mainshareicon">
                <ul className="shareicon">
                    <li className="shareli"><FaRegBookmark  className="shareiconesize"/></li>
                    <li className="shareli"><TbHandTwoFingers className="shareiconesize"/></li>
                    <li className="shareli"><LuMessageSquare className="shareiconesize"/>34</li>
                    <li className="shareli"><FaRegHeart className="shareiconesize"/>111</li>
                    <li className="shareli"><IoShareSocialOutline className="shareiconesize"/></li>
                </ul>
                <button className="dotbutn">
                <BsThreeDotsVertical className="shareiconesize1"/>
                </button>
            </div>
             <div className="commentsec  ">  
                        <img src={postimg}/>
                        <div className="commtmaininput">
                           <CiFaceSmile className="commenticontext"/>
                           <div className="sharesec">
                           <div><input type="text" placeholder="Enter your comment here"
                            className="comtinput"/>
                          </div>
                          <div>
                            <button className="commtsharebtn"><img src={arrow}/></button></div>
                            </div>
                            
                        </div>
                        
                    </div> 
          </div>
        </div>
        <div className="mainsec">
        {/* <div className="postheadermain">
            <div>
                <ul className="postheader">
                    <li>All</li>
                    <li>Following</li>
                    <li>Followers</li>
                    <li>Saved</li>
                    <li>Tips</li>
                </ul></div>
            <div><img src={phimg}/></div>
        </div> */}
          <div>
             <div className="mainpostul">
                <img src={postimg}/>
                <div className="uldiv">
                <div>
                <ul className="ulpost">
                    <li className="headerpostlitext">Amanda Berry</li>
                    <li className="litextcolor">Match40%</li>
                </ul>
                </div>
                <div>
                <ul className="ulpost">
                    <li>Today at 09:30</li>
                    <li className="postlike"><LuHeartHandshake />10</li>
                </ul>
                </div>
                </div>
                
             </div>
          </div>

          <div>
            <ul className="posttxh">
                <li className="posttexli">Fusce non efficitur sem. Proin tincidunt</li>
                <li className="lihtext">Price: $100/hr</li>
            </ul>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et justo ac urna cursus varius. Vestibulum euismod purus vel efficitur varius. Fusce non efficitur sem. Proin tincidunt, nunc ut suscipit rhoncus, sapien ligula consequat dol, felis neque vel nunc. Sed sem per tortor vel urna cursus, eget aliquam elit vestibulum.</p>
            <ul className="posttxbtn">
                <li><button className="postbtn">ENQUIRE NOW</button></li>
                <li><button className="postbtn1">EASY APPLY</button></li>
            </ul>
            <img src={postmainimg} className="postimg1"/>
            
            <div className="mainshareicon">
                <ul className="shareicon">
                    <li className="shareli"><FaRegBookmark  className="shareiconesize"/></li>
                    <li className="shareli"><TbHandTwoFingers className="shareiconesize"/></li>
                    <li className="shareli"><LuMessageSquare className="shareiconesize"/>34</li>
                    <li className="shareli"><FaRegHeart className="shareiconesize"/>111</li>
                    <li className="shareli"><IoShareSocialOutline className="shareiconesize"/></li>
                </ul>
                <button className="dotbutn">
                <BsThreeDotsVertical className="shareiconesize1"/>
                </button>
            </div>
             <div className="commentsec  ">  
                        <img src={postimg}/>
                        <div className="commtmaininput">
                           <CiFaceSmile className="commenticontext"/>
                           <div className="sharesec">
                           <div><input type="text" placeholder="Enter your comment here"
                            className="comtinput"/>
                          </div>
                          <div>
                            <button className="commtsharebtn"><img src={arrow}/></button></div>
                            </div>
                            
                        </div>
                        
                    </div> 
          </div>
        </div>
        <div className="mainsec">
        {/* <div className="postheadermain">
            <div>
                <ul className="postheader">
                    <li>All</li>
                    <li>Following</li>
                    <li>Followers</li>
                    <li>Saved</li>
                    <li>Tips</li>
                </ul></div>
            <div><img src={phimg}/></div>
        </div> */}
          <div>
             <div className="mainpostul">
                <img src={postimg}/>
                <div className="uldiv">
                <div>
                <ul className="ulpost">
                    <li className="headerpostlitext">Amanda Berry</li>
                    <li className="litextcolor">Match40%</li>
                </ul>
                </div>
                <div>
                <ul className="ulpost">
                    <li>Today at 09:30</li>
                    <li className="postlike"><LuHeartHandshake />10</li>
                </ul>
                </div>
                </div>
                
             </div>
          </div>

          <div>
            <ul className="posttxh">
                <li className="posttexli">Fusce non efficitur sem. Proin tincidunt</li>
                <li className="lihtext">Price: $100/hr</li>
            </ul>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et justo ac urna cursus varius. Vestibulum euismod purus vel efficitur varius. Fusce non efficitur sem. Proin tincidunt, nunc ut suscipit rhoncus, sapien ligula consequat dol, felis neque vel nunc. Sed sem per tortor vel urna cursus, eget aliquam elit vestibulum.</p>
            
            <ul className="posttxbtn">
                <li><button className="postbtn">ENQUIRE NOW</button></li>
                <li><button className="postbtn1">EASY APPLY</button></li>
            </ul>
            <img src={postmainimg} className="postimg1"/>
            
            <div className="mainshareicon">
                <ul className="shareicon">
                    <li className="shareli"><FaRegBookmark  className="shareiconesize"/></li>
                    <li className="shareli"><TbHandTwoFingers className="shareiconesize"/></li>
                    <li className="shareli"><LuMessageSquare className="shareiconesize"/>34</li>
                    <li className="shareli"><FaRegHeart className="shareiconesize"/>111</li>
                    <li className="shareli"><IoShareSocialOutline className="shareiconesize"/></li>
                </ul>
                <button className="dotbutn">
                <BsThreeDotsVertical className="shareiconesize1"/>
                </button>
            </div>
             <div className="commentsec  ">  
                        <img src={postimg}/>
                        <div className="commtmaininput">
                           <CiFaceSmile className="commenticontext"/>
                           <div className="sharesec">
                           <div><input type="text" placeholder="Enter your comment here"
                            className="comtinput"/>
                          </div>
                          <div>
                            <button className="commtsharebtn"><img src={arrow}/></button></div>
                            </div>
                            
                        </div>
                        
                    </div> 
          </div>
        </div>
        <div className="mainsec">
        {/* <div className="postheadermain">
            <div>
                <ul className="postheader">
                    <li>All</li>
                    <li>Following</li>
                    <li>Followers</li>
                    <li>Saved</li>
                    <li>Tips</li>
                </ul></div>
            <div><img src={phimg}/></div>
        </div> */}
          <div>
             <div className="mainpostul">
                <img src={postimg}/>
                <div className="uldiv">
                <div>
                <ul className="ulpost">
                    <li className="headerpostlitext">Amanda Berry</li>
                    <li className="litextcolor">Match40%</li>
                </ul>
                </div>
                <div>
                <ul className="ulpost">
                    <li>Today at 09:30</li>
                    <li className="postlike"><LuHeartHandshake />10</li>
                </ul>
                </div>
                </div>
                
             </div>
          </div>

          <div>
            <ul className="posttxh">
                <li className="posttexli">Fusce non efficitur sem. Proin tincidunt</li>
                <li className="lihtext">Price: $100/hr</li>
            </ul>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et justo ac urna cursus varius. Vestibulum euismod purus vel efficitur varius. Fusce non efficitur sem. Proin tincidunt, nunc ut suscipit rhoncus, sapien ligula consequat dol, felis neque vel nunc. Sed sem per tortor vel urna cursus, eget aliquam elit vestibulum.</p>
            <ul className="posttxbtn">
                <li><button className="postbtn">ENQUIRE NOW</button></li>
                <li><button className="postbtn1">EASY APPLY</button></li>
            </ul>
            <img src={postmainimg} className="postimg1"/>
            
            <div className="mainshareicon">
                <ul className="shareicon">
                    <li className="shareli"><FaRegBookmark  className="shareiconesize"/></li>
                    <li className="shareli"><TbHandTwoFingers className="shareiconesize"/></li>
                    <li className="shareli"><LuMessageSquare className="shareiconesize"/>34</li>
                    <li className="shareli"><FaRegHeart className="shareiconesize"/>111</li>
                    <li className="shareli"><IoShareSocialOutline className="shareiconesize"/></li>
                </ul>
                <button className="dotbutn">
                <BsThreeDotsVertical className="shareiconesize1"/>
                </button>
            </div>
             <div className="commentsec  ">  
                        <img src={postimg}/>
                        <div className="commtmaininput">
                           <CiFaceSmile className="commenticontext"/>
                           <div className="sharesec">
                           <div><input type="text" placeholder="Enter your comment here"
                            className="comtinput"/>
                          </div>
                          <div>
                            <button className="commtsharebtn"><img src={arrow}/></button></div>
                            </div>
                            
                        </div>
                        
                    </div> 
          </div>
        </div>
        </div>
    )
}
export default Dpost;