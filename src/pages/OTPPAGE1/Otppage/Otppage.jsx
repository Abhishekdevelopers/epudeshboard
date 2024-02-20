import React, { useEffect, useState } from "react";
import "./Otppage.css";
import { LuArrowDownRight } from "react-icons/lu";
import { MdOutlineCancel } from "react-icons/md";

const Otppage =()=>{
  // State variables to manage OTP input, minutes, and seconds
  const [otp1, setOtp1] = useState("");
  const [otp2, setOtp2] = useState("");
  const [otp3, setOtp3] = useState("");
  const [otp4, setOtp4] = useState("");
  const [otp5, setOtp5] = useState("");
  const [otp6, setOtp6] = useState("");
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(59);


  const handleClick = (event) => {
    event.preventDefault();
    console.log(otp1)
    console.log(otp2)
    console.log(otp3)
    console.log(otp4)
    console.log(otp5)
    console.log(otp6)
    setOtp1('')
    setOtp2('')
    setOtp3('')
    setOtp4('')
    setOtp5('')
    setOtp6('')
}

  useEffect(() => {
    // Function to handle the countdown logic
    const interval = setInterval(() => {
      // Decrease seconds if greater than 0
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }

      // When seconds reach 0, decrease minutes if greater than 0
      if (seconds === 0) {
        if (minutes === 0) {
          // Stop the countdown when both minutes and seconds are 0
          clearInterval(interval);
        } else {
          // Reset seconds to 59 and decrease minutes by 1
          setSeconds(59);
          setMinutes(minutes - 1);
        }
      }
    }, 1000); // Run this effect every 1000ms (1 second)

    return () => {
      // Cleanup: stop the interval when the component unmounts
      clearInterval(interval);
    };
  }, [seconds]); // Re-run this effect whenever 'seconds' changes


  return (
    <div className="container maincontainer">
      <div className="card">
        <div className="row mainh">
          <div className="col-md-11">
            <p className="maintexth">OTP Verification</p>
          </div>
          <div className="col-md-1 otpcrossicone"><MdOutlineCancel  size={24} color="#999999"/></div>

        </div>
       <p className="ptext2">Email Security Check</p>
       <p className="ptext1">Please enter the 6 digit verification code sent to your email id <span className="ptextsspan1">sheldon_bazzinga@gmail.com</span></p>
        {/* Input field for entering OTP */}
        <input
          value={otp1}
          maxLength={1}
          placeholder="0"
          onChange={(e) => setOtp1(e.target.value)}
        />
        {/* Input field for entering OTP */}
        <input
         value={otp2}
         maxLength={1}
         placeholder="0"
         onChange={(e) => setOtp2(e.target.value)}
        />
        {/* Input field for entering OTP */}
        <input
        maxLength={1}
        placeholder="0"
        value={otp3}
        onChange={(e) => setOtp3(e.target.value)}
        />
        {/* Input field for entering OTP */}
        <input
         value={otp4}
         maxLength={1}
         placeholder="0"
         onChange={(e) => setOtp4(e.target.value)}
        />
        {/* Input field for entering OTP */}
        <input
         value={otp5}
         maxLength={1}
         placeholder="0"
         onChange={(e) => setOtp5(e.target.value)}
        />
        {/* Input field for entering OTP */}
        <input
         value={otp6}
         maxLength={1}
         placeholder="0"
         onChange={(e) => setOtp6(e.target.value)}
        />

        <div className="countdown-text row">
          {/* Display countdown timer if seconds or minutes are greater than 0 */}
          
          {seconds > 0 || minutes > 0 ? (
            <p>
              Didn’t receive code yet? <span className="timecolor">Resend code in {" "}
              <span style={{ fontWeight: 600 }}>
                {minutes < 10 ? `0${minutes}` : minutes}:
                {seconds < 10 ? `0${seconds}` : seconds}
              </span>
              </span> 
            </p>
          ) : (
            // Display if countdown timer reaches 0
            <p>Didn’t receive code yet?</p>
          )}

        </div>

        {/* Button to submit OTP */}
        <div className="row btnborder">
        <button className='otpbtnpage' onClick={handleClick} >CONTINUE <span className="arrowdown"><LuArrowDownRight size={20}/></span></button>
        </div>
        
      </div>
    </div>
  );
}

export default Otppage;

