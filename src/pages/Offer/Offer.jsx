import React from "react";
import { RxCross2 } from "react-icons/rx";
import { GoArrowRight } from "react-icons/go";
import { VscGithubInverted } from "react-icons/vsc";

import './Offer.css'
const Offer = () => {
    return (
        <>
            <div className="offermain">
                <div className="container">
                    <div className="row  offermainsubdiv">
                        <div className="row felxdiv">
                            <div className="col-md-11 offertext">
                                <p className="subdivtext">Offer</p>
                            </div>
                            <div className="col-md-1 offertexticon">
                                <RxCross2 color="#FFFFFF" size={24} />
                            </div>
                        </div>
                        <div className="row ">
                            <p className="offerdivtext1 ">Some instructions to make the user understand what is the context of the pop-up</p>
                        </div>
                        <div className="row mainjobsec">
                            <div className="col-md-10">
                                <p className="hoffer">Job Seeking</p>
                                <ul className="ullioffer">
                                    <li>Lorem ipsum dolor sit amet, consect</li>
                                    <li>Phasellus eget justo ac risus accumsan ultricies id</li>
                                    <li>Quisque fermentum odio eu feugiat pretium.</li>
                                </ul>
                            </div>
                            <div className="col-md-2 giticone">
                                <VscGithubInverted size={80}/>
                            </div>

                        </div>


                        <div className="row offerbtnmain">
                            <div className="col-md-6"></div>
                            <div className='col-md-6'>
                                <button className='otpbtn1' >CONTINUE <span className='otparow'><GoArrowRight size={24} /></span></button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}
export default Offer