import React, { useState } from "react";
import { GoArrowRight } from "react-icons/go";
import { RxCross2 } from "react-icons/rx";
import { FaRegEdit } from "react-icons/fa";
import './Otp.css'
const Otp = () => {
    const [emailvalue, setEmailvalue] = useState('')
    const [otpvalue1, setOtpvalue1] = useState('')
    const [otpvalue2, setOtpvalue2] = useState('')
    const [otpvalue3, setOtpvalue3] = useState('')
    const [otpvalue4, setOtpvalue4] = useState('')
    const [otpvalue5, setOtpvalue5] = useState('')
    const [otpvalue6, setOtpvalue6] = useState('')

    const handleClick = (event) => {
        event.preventDefault();
        console.log(emailvalue)
        console.log(otpvalue1)
        console.log(otpvalue2)
        console.log(otpvalue3)
        console.log(otpvalue4)
        console.log(otpvalue5)
        console.log(otpvalue6)
        setEmailvalue('')
        setOtpvalue1('')
        setOtpvalue2('')
        setOtpvalue3('')
        setOtpvalue4('')
        setOtpvalue5('')
        setOtpvalue6('')
    }
    return (
        <>
            <div className="Otpmain">
                <div className="container">
                    <div className="row  Otpmainsubdiv">
                        <div className="row felxdiv">
                            <div className="col-md-11 otptext">
                            <p className="subdivtext">Email Security Check</p>
                            </div>
                            <div className="col-md-1 otptexticon">
                            <RxCross2 color="#FFFFFF" size={24}/>
                            </div>
                        </div>
                        <div className="row ">
                        <p className="subdivtext1 ">Please enter the 6 digit verification code sent to your email id sheldon_bazzinga@gmail.com</p>
                        </div>

                        <div className='row toppadding'>
                            <label className='emaillable'>Email Id</label>
                            <input type="email"
                                value={emailvalue}
                                onChange={(e) => setEmailvalue(e.target.value)}
                                className="form-control emailbox1" id="exampleInputEmail1" placeholder="Enter Your Email Id" />
                            {/* <button><FaRegEdit /></button> */}

                        </div>

                        <div className='row toppadding'>

                            <label className='emaillable'>Verification Code</label>


                            <div className="row">
                                <div className="col-md-2">
                                    <input type="otp"
                                        value={otpvalue1}
                                        onChange={(e) => setOtpvalue1(e.target.value)}
                                        className="form-control emailbox2" id="exampleFormControlInput1" placeholder="0" />
                                </div>
                                <div className="col-md-2">
                                    <input type="number"
                                        value={otpvalue2}
                                        onChange={(e) => setOtpvalue2(e.target.value)}
                                        className="form-control emailbox2" id="exampleFormControlInput1" placeholder="0" />
                                </div>
                                <div className="col-md-2">
                                    <input type="number"
                                        value={otpvalue3}
                                        onChange={(e) => setOtpvalue3(e.target.value)}
                                        className="form-control emailbox2" id="exampleFormControlInput1" placeholder="0" />
                                </div>
                                <div className="col-md-2">
                                    <input type="number"
                                        value={otpvalue4}
                                        onChange={(e) => setOtpvalue4(e.target.value)}
                                        className="form-control emailbox2" id="exampleFormControlInput1" placeholder="0" />
                                </div>
                                <div className="col-md-2">
                                    <input type="number"
                                        value={otpvalue5}
                                        onChange={(e) => setOtpvalue5(e.target.value)}
                                        className="form-control emailbox2" id="exampleFormControlInput1" placeholder="0" />
                                </div>
                                <div className="col-md-2">
                                    <input type="number"
                                        value={otpvalue6}
                                        onChange={(e) => setOtpvalue6(e.target.value)}
                                        className="form-control emailbox2" id="exampleFormControlInput1" placeholder="0" />
                                </div>
                            </div>
                            <label className='emaillable1'>Didn’t receive code yet? Resend code in 00:59s</label>
                        </div>

                        <div className="row otpbtnmain">
                            <div className="col-md-6"></div>
                            <div className='col-md-6'>
                                <button className='otpbtn1' onClick={handleClick}>CONTINUE <span className='otparow'><GoArrowRight size={24} /></span></button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </>
    )
}

export default Otp



