import React from "react";
import { FiCheckCircle } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";
import { GoArrowRight } from "react-icons/go";
import './Headline.css'
const Headline = () => {
    return (
        <>
            <div className="Headlnemain">
                <div className="container ">
                    <div className="row  Headlinemainsubdiv">
                        <div className="row felxdiv">
                            <div className="col-md-11">
                            <p className="headlinesubdivtext">Headline</p>
                            </div>
                            <div className="col-md-1 textheadlineicon">
                            <RxCross2 color="#FFFFFF" size={24}/>
                            </div>
                        </div>
                        <div className="row circleicone">
                          <FiCheckCircle size={73} color="#00748E"/>
                        </div>
                        <div className="row">
                          <p className="pheadline">Your email sheldon_bazzinga@gmail.com has been verified successfully and added into your account.</p>
                        </div>
                        <div className="row headinebtnmain">
                            <div className='row'>
                                <button className='headlinebtn1'>CONTINUE <span className='headlinearow'><GoArrowRight size={24} /></span></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Headline;