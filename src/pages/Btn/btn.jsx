import React,{useState} from "react";
import Otppage from "../Otppage/Otppage";
const Btn=()=>{
    const [show, setShow] = useState(false)
    const Showbtn= ()=>{
        if(show == true){
            setShow(false)
        }else{
            setShow(true)
        }
    }
 return(
        <>
        <div>
            <button onClick={Showbtn}>Show Popup</button>
            {
                show && (<Otppage/>)
            }
        </div>
        </>
    )
}
export default Btn
