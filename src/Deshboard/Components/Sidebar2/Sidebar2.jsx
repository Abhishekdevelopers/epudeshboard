import React from "react";
import "./Sidebar2.css";
import s2img1 from "../../../assets/Images/s2img1.png";
import s2img11 from "../../../assets/Images/s2img1.1.png";
import s2img2 from "../../../assets/Images/s2img2.png";
import s2img21 from "../../../assets/Images/s2img2.1.png";
import s2img3 from "../../../assets/Images/s2img3.png";
import s2img31 from "../../../assets/Images/s2img3.1.png";
import s2img4 from "../../../assets/Images/s2img4.png";
import { RiGroupLine } from "react-icons/ri";
const Sidebar2 = () => {
  return (
    <div className="side2chatsec">
      <div className="sidmain1">
        <div className="sid1icontext"><RiGroupLine  className="sid1iconsize"/>
          <p>Chat(12)</p></div>
        <div className="textsee">SEE ALL</div>
      </div>

      <div>
      <div className="sidmain">
        <div className="sid1icontext1">
            <img src={s2img1}/>
            <p>Operation Eleven</p>
        </div>
      </div>
      <div className="sidmain">
        <p className="subtextmsg">Last Active at 13:32</p>
        <div><img src={s2img11}/></div>
      </div>
      </div>
      <div>
      <div className="sidmain">
        <div className="sid1icontext1">
        <img src={s2img2}/>
            <p>Event Analogy</p>
        </div>
      </div>
      <div className="sidmain">
        <p className="subtextmsg">Last Active yesterday</p>
        <div><img src={s2img21}/></div>
      </div>
      </div>
      <div>
      <div className="sidmain">
        <div className="sid1icontext1">
        <img src={s2img3}/>
            <p>Three Musketeers</p>
        </div>
      </div>
      <div className="sidmain">
        <p className="subtextmsg">Last Active yesterday</p>
        <div><img src={s2img31}/></div>
      </div>
      </div>
      <div>
      <div className="sidmain">
        <div className="sid1icontext1">
        <img src={s2img4}/>
            <p>Grunt Work 🥱</p>
        </div>
      </div>
      <div className="sidmain">
        <p className="subtextmsg">Last Active 2 Days ago</p>
        <div><img src={s2img21}/></div>
      </div>
      </div>
      <div>
      <div className="sidmain">
        <div className="sid1icontext1">
        <img src={s2img1}/>
            <p>Operation Eleven🥱</p>
        </div>
      </div>
      <div className="sidmain">
        <p className="subtextmsg">Last Active 3 Days ago</p>
        <div><img src={s2img11}/></div>
      </div>
      </div>
      
      
    </div>
  );
};
export default Sidebar2;
