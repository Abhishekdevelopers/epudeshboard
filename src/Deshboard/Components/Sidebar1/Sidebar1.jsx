import React from "react";
import "./Sidebar1.css";
import messimg from "../../../assets/Images/messimg.png";
import messimg1 from "../../../assets/Images/messimg1.png";
import messimg2 from "../../../assets/Images/messimg2.png";
import messimg3 from "../../../assets/Images/messimg3.png";
import messimg4 from "../../../assets/Images/messimg4.png";
import { LuArrowUpRight } from "react-icons/lu";
import { LuArrowDownRight } from "react-icons/lu";
import { LuMessageSquare } from "react-icons/lu";
const Sidebar1 = () => {
  return (
 <div className="side1chatsec">
      <div className="sidmain1">
        <div className="sid1icontext"><LuMessageSquare className="sid1iconsize"/>
          <p>Chat(12)</p></div>
        <div className="textsee">SEE ALL</div>
      </div>

      <div>
      <div className="sidmain">
        <div className="sid1icontext1">
            <img src={messimg}/>
            <p>Amanda Baynes (01)</p>
        </div>
        <div>12:32</div>
      </div>
      <div className="sidmain">
        <p className="subtextmsg">See you tomorrow.</p>
        <div><LuArrowUpRight className="s1toprighticon"/></div>
      </div>
      </div>
      <div>
      <div className="sidmain">
        <div className="sid1icontext1">
            <img src={messimg1}/>
            <p>Charlie Sheen</p>
        </div>
        <div>Yesterday</div>
      </div>
      <div className="sidmain">
        <p className="subtextmsg">Lorem Ipsum</p>
        <div><LuArrowDownRight className="s1downrighticon"/></div>
      </div>
      </div>
      <div>
      <div className="sidmain">
        <div className="sid1icontext1">
            <img src={messimg2}/>
            <p>Rachel Green (03)</p>
        </div>
        <div>1 Day</div>
      </div>
      <div className="sidmain">
        <p className="subtextmsg">When will you be available for the call?</p>
        <div><LuArrowUpRight className="s1toprighticon"/></div>
      </div>
      </div>
      <div>
      <div className="sidmain">
        <div className="sid1icontext1">
            <img src={messimg3}/>
            <p>Peter Parker (01)</p>
        </div>
        <div>1 Day</div>
      </div>
      <div className="sidmain">
        <p className="subtextmsg">What about tommorow?</p>
        <div><LuArrowDownRight className="s1downrighticon"/></div>
      </div>
      </div>
      <div>
      <div className="sidmain">
        <div className="sid1icontext1">
            <img src={messimg4}/>
            <p>Operation Eleven</p>
        </div>
        <div>2 Days</div>
      </div>
      <div className="sidmain">
        <p className="subtextmsg">~ Mat: Let’s all meet by noon.</p>
        <div><LuArrowUpRight className="s1toprighticon"/></div>
      </div>
      </div>
      
      </div>

  );
};
export default Sidebar1;
